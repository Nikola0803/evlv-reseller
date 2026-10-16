export type PartnerProduct = {
  slug: string;
  sku: string;
  name: string;
  category: "GLP series" | "Research" | "Supplies";
  retailPrice: number;
  partnerPrice: number;
  stock: number;
  coa: string | null;
  batch: string;
  purity: string;
};

const rows: Array<[string, string, string, PartnerProduct["category"], number]> = [
  ["evlv-3-10mg", "EVLV3-10", "GLP3-R 10MG", "GLP series", 74.99],
  ["evlv-3-15mg", "EVLV3-15", "GLP3-R 15MG", "GLP series", 129.99],
  ["evlv-3-30mg", "EVLV3-30", "GLP3-R 30MG", "GLP series", 189.99],
  ["evlv-3-60mg", "EVLV3-60", "GLP3-R 60MG", "GLP series", 349.99],
  ["evlv-1-5mg", "EVLV1-5", "GLP1-S 5MG", "GLP series", 49.99],
  ["evlv-1-10mg", "EVLV1-10", "GLP1-S 10MG", "GLP series", 74.99],
  ["evlv-2-10mg", "EVLV2-10", "GLP2-T 10MG", "GLP series", 69.99],
  ["evlv-2-15mg", "EVLV2-15", "GLP2-T 15MG", "GLP series", 89.99],
  ["evlv-2-30mg", "EVLV2-30", "GLP2-T 30MG", "GLP series", 149.99],
  ["evlv-2-60mg", "EVLV2-60", "GLP2-T 60MG", "GLP series", 274.99],
  ["bpc-157-5mg", "BPC-5", "BPC-157 5MG", "Research", 39.99],
  ["bpc-157-10mg", "BPC-10", "BPC-157 10MG", "Research", 49.99],
  ["bpc-157-20mg", "BPC-20", "BPC-157 20MG", "Research", 89.99],
  ["tb-500-5mg", "TB-5", "TB-500 5MG", "Research", 44.99],
  ["tb-500-10mg", "TB-10", "TB-500 10MG", "Research", 69.99],
  ["tb-500-20mg", "TB-20", "TB-500 20MG", "Research", 129.99],
  ["bpc-tb-500-blend-10mg", "BB-10", "BPC-157 / TB-500 BLEND 10MG", "Research", 74.99],
  ["bpc-tb-500-blend-20mg", "BB-20", "BPC-157 / TB-500 BLEND 20MG", "Research", 109.99],
  ["tesamorelin-10mg", "TES-10", "TESAMORELIN 10MG", "Research", 94.99],
  ["tesamorelin-20mg", "TES-20", "TESAMORELIN 20MG", "Research", 149.99],
  ["ghk-cu-50mg", "GHK-50", "GHK-CU 50MG", "Research", 39.99],
  ["mots-c-10mg", "MOT-10", "MOTS-C 10MG", "Research", 59.99],
  ["mots-c-40mg", "MOT-40", "MOTS-C 40MG", "Research", 149.99],
  ["thymosin-alpha-1-5mg", "TA1-5", "THYMOSIN ALPHA-1 5MG", "Research", 44.99],
  ["glow-70mg", "GW-70", "GLOW 70MG", "Research", 139.99],
  ["klow-80mg", "KW-80", "KLOW 80MG", "Research", 149.99],
  ["selank-10mg", "SEL-10", "SELANK 10MG", "Research", 49.99],
  ["semax-10mg", "SMX-10", "SEMAX 10MG", "Research", 49.99],
  ["cjc-ipa-blend-10mg", "CP-10", "CJC-1295 / IPAMORELIN BLEND 10MG", "Research", 74.99],
  ["cjc-ipa-blend-20mg", "CP-20", "CJC-1295 / IPAMORELIN BLEND 20MG", "Research", 129.99],
  ["aod-9604-10mg", "AOD-10", "AOD-9604 10MG", "Research", 64.99],
  ["cartalax-20mg", "CART-20", "CARTALAX 20MG", "Research", 59.99],
  ["igf-1-lr3-1mg", "IGF1-1", "IGF-1 LR3 1MG", "Research", 89.99],
  ["kpv-10mg", "KPV-10", "KPV 10MG", "Research", 69.99],
  ["melanotan-ii-10mg", "MT2-10", "MELANOTAN II 10MG", "Research", 39.99],
  ["nad-500mg", "NAD-500", "NAD+ 500MG", "Research", 64.99],
  ["oxytocin-10mg", "OXY-10", "OXYTOCIN 10MG", "Research", 39.99],
  ["pt-141-10mg", "PT-10", "PT-141 10MG", "Research", 39.99],
  ["ss-31-10mg", "SS31-10", "SS-31 10MG", "Research", 45],
  ["cerebrolysin-60mg", "CBL60", "CEREBROLYSIN 60MG", "Research", 54.99],
  ["korean-pink-glutathione-1200mg", "PG1200", "KOREAN PINK GLUTATHIONE 1200MG", "Research", 59.99],
  ["bacteriostatic-water-30ml", "BAC30", "BW H-BRAND 30ML", "Supplies", 25],
];

export const PARTNER_CATALOG: PartnerProduct[] = rows.map(([slug, sku, name, category, retailPrice], index) => ({
  slug,
  sku,
  name,
  category,
  retailPrice,
  partnerPrice: Number((retailPrice * 0.4).toFixed(2)),
  stock: 8 + ((index * 7) % 29),
  coa: index < 10 ? `/coas/${slug}.pdf` : null,
  batch: index < 10 ? `CURRENT-${String(index + 1).padStart(2, "0")}` : "Current batch",
  purity: index < 10 ? "Exact report available" : "Documentation available",
}));
