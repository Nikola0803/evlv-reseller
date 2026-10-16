"use client";

import { useEffect } from "react";
import { PARTNER_CATALOG } from "@/lib/partner-catalog";

const SKU_BY_NAME = Object.fromEntries(PARTNER_CATALOG.map((product) => [product.name, product.sku]));

export function StorefrontRuntime() {
  useEffect(() => {
    document.querySelectorAll<HTMLButtonElement>("header button").forEach((button) => {
      if (!/^cart/i.test(button.textContent?.trim() || "")) return;
      button.setAttribute("aria-label", "Open cart, 0 items");
      button.innerHTML = '<span class="relative grid h-6 w-6 place-items-center"><i class="ri-shopping-cart-2-line text-base"></i><span class="absolute -right-2 -top-2 grid h-4 min-w-4 place-items-center rounded-full bg-white px-1 text-[7px] font-bold text-[#171718]">0</span></span>';
    });

    const applyLiveCatalog = async () => {
      try {
        const response = await fetch("/api/catalog", { cache: "no-store" });
        if (!response.ok) return;
        const payload = await response.json();
        const products = Array.isArray(payload?.products) ? payload.products : [];
        const productBySku = new Map(products.filter((product: { sku?: string }) => product?.sku).map((product: { sku: string }) => [product.sku, product]));
        document.querySelectorAll<HTMLElement>("#catalogue article").forEach((card) => {
          const productName = card.querySelector<HTMLElement>("h3")?.textContent?.trim() || "";
          const sku = SKU_BY_NAME[productName];
          const product = productBySku.get(sku) as { retailPrice?: number; stock?: number; inStock?: boolean } | undefined;
          if (!product) return;
          const price = card.querySelector<HTMLElement>("[data-product-price]");
          const stock = card.querySelector<HTMLElement>("[data-product-stock]") || Array.from(card.querySelectorAll<HTMLElement>("span, p")).find((node) => /available/i.test(node.textContent || ""));
          const fallbackPrice = Array.from(card.querySelectorAll<HTMLElement>("strong")).find((node) => node.textContent?.trim().startsWith("$"));
          if (Number.isFinite(product.retailPrice)) (price || fallbackPrice)?.replaceChildren(`$${Number(product.retailPrice).toFixed(2)}`);
          if (stock) stock.textContent = product.inStock ? `${Math.max(Number(product.stock) || 1, 1)} available` : "Unavailable";
          card.dataset.inStock = product.inStock ? "true" : "false";
          card.classList.toggle("opacity-55", !product.inStock);
          card.querySelectorAll<HTMLButtonElement>("button").forEach((button) => {
            if (!/add/i.test(button.textContent || button.getAttribute("aria-label") || "")) return;
            button.disabled = !product.inStock;
          });
        });
      } catch {
        return;
      }
    };

    const applySavedConfig = () => {
      const stored = window.localStorage.getItem("evlv-partner-storefront");
      if (!stored) return;
      try {
        const config = JSON.parse(stored);
      const brandDefaults = new Set(["JORDAN / FIELD NOTES", "Jordan / Field Notes", "NORTH RESEARCH", "North Research", "COVALENT", "Covalent Market", "FRAME / RESEARCH", "Frame Research", "VOLUME LAB SUPPLY", "Volume Lab Supply", "MERIDIAN RESEARCH", "Meridian Research"]);
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let textNode = walker.nextNode();
      while (textNode) {
        const value = textNode.textContent?.trim();
        if (value && brandDefaults.has(value) && config.displayName) textNode.textContent = textNode.textContent?.replace(value, config.displayName) || config.displayName;
        textNode = walker.nextNode();
      }
      document.querySelectorAll<HTMLElement>("[data-partner-brand]").forEach((node) => { node.textContent = config.displayName || node.textContent; });
      document.querySelectorAll<HTMLElement>("[data-partner-bio]").forEach((node) => { node.textContent = config.bio || node.textContent; });
      const heroBio = document.querySelector<HTMLElement>("main > section p.text-base.leading-8");
      if (heroBio && config.bio) heroBio.textContent = config.bio;
      const paletteMap: Record<string, [string, string]> = { cobalt: ["#1f45c8", "#ff7655"], graphite: ["#15191d", "#6fd6ff"], signal: ["#171718", "#d7ff54"], indigo: ["#27254f", "#7ee0d0"] };
      const colors = paletteMap[config.palette];
      if (colors) {
        document.querySelectorAll<HTMLElement>("[class]").forEach((node) => {
          const classes = node.className;
          if (typeof classes !== "string") return;
          if (/bg-\[#(3157d5|15191d|171718|17233d|27254f)\]/.test(classes)) node.style.backgroundColor = colors[0];
          if (/text-\[#(3157d5|1684ad|d7ff54|f2784b|e95062|7ee0d0|6fd6ff)\]/.test(classes)) node.style.color = colors[1];
        });
      }
      const savedSelection = Array.isArray(config.selectedProducts) ? config.selectedProducts : [];
      const selected = new Set<string>(savedSelection.length > 4 ? savedSelection : PARTNER_CATALOG.map((product) => product.sku));
      document.querySelectorAll<HTMLElement>("#catalogue h3, #catalogue [data-product-name]").forEach((nameNode) => {
        const name = nameNode.textContent?.trim() || "";
        const sku = SKU_BY_NAME[name];
        if (!sku) return;
        const container = nameNode.closest<HTMLElement>("article") || nameNode.closest<HTMLElement>("[data-product-row]");
        if (!container) return;
        container.style.display = selected.has(sku) ? "" : "none";
        const price = Number(config.retailPrices?.[sku]);
        if (Number.isFinite(price)) {
          const priceNode = container.querySelector<HTMLElement>("[data-product-price]") || Array.from(container.querySelectorAll<HTMLElement>("strong")).find((node) => node.textContent?.trim().startsWith("$"));
          if (priceNode) priceNode.textContent = `$${price.toFixed(2)}`;
        }
      });
      } catch {
        return;
      }
    };
    applySavedConfig();
    void applyLiveCatalog();
    const frame = window.requestAnimationFrame(applySavedConfig);
    const timer = window.setTimeout(applySavedConfig, 120);
    return () => { window.cancelAnimationFrame(frame); window.clearTimeout(timer); };
  }, []);
  return null;
}
