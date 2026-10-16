export type StorefrontTemplate = "creator" | "studio" | "catalogue" | "framework" | "volume" | "institutional";

const previewMeta: Record<StorefrontTemplate, { title: string; domain: string }> = {
  creator: { title: "Editorial storefront preview", domain: "partner-name.com" },
  studio: { title: "Precision storefront preview", domain: "research-studio.com" },
  catalogue: { title: "Direct storefront preview", domain: "direct-catalogue.com" },
  framework: { title: "Framework storefront preview", domain: "framework-supply.com" },
  volume: { title: "Volume storefront preview", domain: "volume-research.com" },
  institutional: { title: "Institutional storefront preview", domain: "institutional-labs.com" },
};

export function StorefrontPreview({ template, className = "" }: { template: StorefrontTemplate; className?: string }) {
  const meta = previewMeta[template];

  return (
    <div className={`relative overflow-hidden bg-[#e9ebee] ${className}`}>
      <div className="absolute inset-x-0 top-0 z-10 flex h-8 items-center gap-2 border-b border-black/10 bg-[#f4f5f6] px-3 text-[#6d7178]">
        <span className="h-2 w-2 rounded-full bg-[#ff6b62]" />
        <span className="h-2 w-2 rounded-full bg-[#f4bf4f]" />
        <span className="h-2 w-2 rounded-full bg-[#56c271]" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 text-center font-mono text-[7px] tracking-[-.01em] text-[#7a7d84] shadow-[inset_0_0_0_1px_rgba(0,0,0,.05)]">{meta.domain}</span>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden bg-white">
        <iframe
          src={`/templates/${template}`}
          title={meta.title}
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-[300%] w-[300%] origin-top-left scale-[.333333] border-0"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
      </div>
    </div>
  );
}
