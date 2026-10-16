import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlankVial } from "@/components/BlankVial";
import { getPublicCatalog } from "@/lib/crm-catalog";

export const metadata: Metadata = {
  title: "Product COA Library",
  robots: { index: false, follow: false },
};

const stores = {
  creator: { name: "Jordan / Field Notes", base: "#3157d5", surface: "#f6f7ff" },
  studio: { name: "North Research", base: "#15191d", surface: "#eef2f4" },
  catalogue: { name: "Covalent", base: "#171718", surface: "#f3f3f3" },
  framework: { name: "Frame Research", base: "#17233d", surface: "#f3f5f9" },
  volume: { name: "Volume Lab Supply", base: "#171719", surface: "#f5f5f6" },
  institutional: { name: "Meridian Research", base: "#27254f", surface: "#f0f1f8" },
} as const;

export default async function CoaLibraryPage({ params }: { params: Promise<{ template: string }> }) {
  const { template } = await params;
  if (!(template in stores)) notFound();
  const store = stores[template as keyof typeof stores];
  const products = await getPublicCatalog();

  return <main className="min-h-screen px-4 py-5 text-[#18191d] md:px-8 md:py-8" style={{ backgroundColor: store.surface }}>
    <div className="mx-auto max-w-[1420px]">
      <header className="flex items-center justify-between border-b border-black/10 bg-white px-5 py-4 md:px-8">
        <div><p className="text-[7px] font-bold uppercase tracking-[.18em] text-black/45">Independent catalogue</p><strong className="mt-1 block font-display text-lg">{store.name}</strong></div>
        <Link href={`/templates/${template}`} className="inline-flex min-h-11 items-center rounded-lg px-5 text-[8px] font-bold uppercase tracking-[.13em] text-white" style={{ backgroundColor: store.base }}><i className="ri-arrow-left-line mr-2" /> Back to shop</Link>
      </header>

      <section className="grid gap-8 border-b border-black/10 bg-white px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><p className="text-[9px] font-bold uppercase tracking-[.2em]" style={{ color: store.base }}>Product-specific documentation</p><h1 className="mt-5 font-display text-5xl font-semibold leading-[.96] tracking-[-.05em] md:text-7xl">COA library.</h1></div>
        <p className="max-w-2xl text-base leading-8 text-[#666970]">Search by product name and open the report tied to the current catalogue record. Availability and report links refresh from the EVLV CRM catalogue.</p>
      </section>

      <section className="py-10 md:py-14">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.map((product) => <article id={product.sku} key={product.sku} className="scroll-mt-6 overflow-hidden border border-black/10 bg-white p-3 shadow-[0_14px_38px_rgba(20,25,40,.06)] sm:p-4">
            <div className="relative aspect-square" style={{ backgroundColor: store.surface }}><BlankVial /><span className="absolute left-2 top-2 bg-white/90 px-2 py-1 text-[6px] font-bold uppercase tracking-[.1em]">{product.inStock ? "Current product" : "Reference record"}</span></div>
            <p className="mt-4 font-mono text-[7px] text-[#858895]">{product.batch}</p>
            <h2 className="mt-2 min-h-10 font-display text-base font-semibold leading-tight sm:text-xl">{product.name}</h2>
            <p className="mt-2 text-[8px] leading-5 text-[#6b6e76]">{product.purity}</p>
            {product.coa ? <a href={product.coa} target="_blank" rel="noreferrer" className="mt-4 flex min-h-11 items-center justify-center rounded-lg text-[8px] font-bold uppercase tracking-[.13em] text-white" style={{ backgroundColor: store.base }}>Open PDF <i className="ri-arrow-right-up-line ml-2" /></a> : <Link href={`/templates/${template}#contact`} className="mt-4 flex min-h-11 items-center justify-center rounded-lg border border-black/12 text-[8px] font-bold uppercase tracking-[.13em]">Request report <i className="ri-chat-3-line ml-2" /></Link>}
          </article>)}
        </div>
      </section>
    </div>
  </main>;
}
