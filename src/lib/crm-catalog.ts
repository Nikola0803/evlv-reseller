import "server-only";

import { PARTNER_CATALOG, type PartnerProduct } from "./partner-catalog";

type CrmVariant = {
  slug?: string;
  sku?: string;
  label?: string;
  priceCents?: number;
  inStock?: boolean;
  coaUrl?: string;
  purity?: string;
};

type CrmGroup = {
  groupSlug?: string;
  name?: string;
  variants?: CrmVariant[];
};

export type PublicCatalogProduct = Omit<PartnerProduct, "partnerPrice"> & { inStock: boolean };

function fallbackCatalog(): PublicCatalogProduct[] {
  return PARTNER_CATALOG.map(({ partnerPrice: _privatePrice, ...product }) => ({ ...product, inStock: product.stock > 0 }));
}

export function crmCatalogConfigured() {
  return Boolean(process.env.CRM_API_URL && process.env.CRM_ORG_API_KEY && process.env.CRM_STORE_DOMAIN);
}

export async function getPublicCatalog(): Promise<PublicCatalogProduct[]> {
  const fallback = fallbackCatalog();
  if (!crmCatalogConfigured()) return fallback;

  try {
    const response = await fetch(`${process.env.CRM_API_URL}/api/store/products`, {
      headers: {
        "x-store-domain": process.env.CRM_STORE_DOMAIN!,
        "x-store-api-key": process.env.CRM_ORG_API_KEY!,
      },
      next: { revalidate: 60 },
    });
    if (!response.ok) return fallback;

    const groups = await response.json() as CrmGroup[];
    if (!Array.isArray(groups)) return fallback;

    const liveBySku = new Map<string, CrmVariant>();
    for (const group of groups) {
      for (const variant of group.variants ?? []) {
        if (variant.sku) liveBySku.set(variant.sku.toUpperCase(), variant);
      }
    }

    return fallback.map((product) => {
      const live = liveBySku.get(product.sku.toUpperCase());
      if (!live) return { ...product, stock: 0, inStock: false };
      return {
        ...product,
        slug: live.slug || product.slug,
        retailPrice: Number.isFinite(live.priceCents) ? Number(live.priceCents) / 100 : product.retailPrice,
        stock: live.inStock ? Math.max(product.stock, 1) : 0,
        inStock: Boolean(live.inStock),
        coa: live.coaUrl || product.coa,
        purity: live.purity || product.purity,
      };
    });
  } catch {
    return fallback;
  }
}
