"use client";

import { useEffect } from "react";
import { PARTNER_CATALOG } from "@/lib/partner-catalog";

const SKU_BY_NAME = Object.fromEntries(PARTNER_CATALOG.map((product) => [product.name, product.sku]));

export function StorefrontRuntime() {
  useEffect(() => {
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
    const frame = window.requestAnimationFrame(applySavedConfig);
    const timer = window.setTimeout(applySavedConfig, 120);
    return () => { window.cancelAnimationFrame(frame); window.clearTimeout(timer); };
  }, []);
  return null;
}
