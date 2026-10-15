import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Partner Microsite Concept", robots: { index: false, follow: false } };

type TemplateKey = "creator" | "studio" | "catalogue";

const CONFIG: Record<TemplateKey, { name: string; eyebrow: string; intro: string; shell: string; panel: string; button: string; accent: string }> = {
  creator: {
    name: "Creator",
    eyebrow: "Selected research catalogue",
    intro: "A personal, mobile-first storefront built around trusted recommendations and clear documentation.",
    shell: "bg-[#efe9df] text-[#18332d]",
    panel: "bg-[#173b34] text-white",
    button: "bg-[#d5aa78] text-[#17332d]",
    accent: "text-[#9a6d43]",
  },
  studio: {
    name: "Research Studio",
    eyebrow: "Documentation-led catalogue",
    intro: "A precise research presentation designed to foreground catalog clarity and batch records.",
    shell: "bg-[#eef2ef] text-[#0f302b]",
    panel: "bg-white text-[#0f302b]",
    button: "bg-[#0f3a34] text-white",
    accent: "text-[#477b6e]",
  },
  catalogue: {
    name: "Private Catalogue",
    eyebrow: "Current partner inventory",
    intro: "A direct commerce experience designed for quick product discovery and repeat ordering.",
    shell: "bg-[#f6f5f0] text-[#102d28]",
    panel: "bg-[#102d28] text-white",
    button: "bg-[#e2bf87] text-[#102d28]",
    accent: "text-[#9a7441]",
  },
};

const PRODUCTS = [
  { name: "GLP3-R 10MG", price: "$74.99", image: "/images/products/evlv-3-10mg.png", note: "Exact report available" },
  { name: "GLP2-T 10MG", price: "$69.99", image: "/images/products/tirzepatide-10mg.png", note: "Partner inventory: 8" },
  { name: "GLP1-S 5MG", price: "$49.99", image: "/images/products/semaglutide-5mg.png", note: "Partner inventory: 11" },
  { name: "GHK-CU 50MG", price: "$39.99", image: "/images/products/ghk-cu-50mg.png", note: "Exact report available" },
];

export default async function TemplateConceptPage({ params }: { params: Promise<{ template: string }> }) {
  const { template: rawTemplate } = await params;
  if (!(rawTemplate in CONFIG)) notFound();
  const template = rawTemplate as TemplateKey;
  const config = CONFIG[template];

  if (template === "creator") return <CreatorConcept config={config} />;
  if (template === "studio") return <StudioConcept config={config} />;
  return <CatalogueConcept config={config} />;
}

function ConceptBar({ name }: { name: string }) {
  return <div className="border-b border-black/10 bg-[#f8f7f2] px-4 py-2.5 text-center text-[10px] font-bold uppercase tracking-[.14em] text-[#52645f]">EVLV Partner Network concept · {name} · <Link href="/#templates" className="underline underline-offset-2">Back to templates</Link></div>;
}

function CreatorConcept({ config }: { config: (typeof CONFIG)[TemplateKey] }) {
  return <div className={config.shell}><ConceptBar name={config.name} /><header className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-6 md:px-8"><span className="font-display text-2xl font-semibold tracking-[-.05em]">EVLV<span className="text-[#a57749]">/</span>JORDAN</span><nav className="hidden gap-7 text-[10px] font-bold uppercase tracking-[.13em] md:flex"><a href="#catalogue">Catalogue</a><a href="#about">About</a><a href="#documentation">Documentation</a></nav><button className="rounded-full border border-[#17332d]/20 px-4 py-2 text-[10px] font-bold uppercase tracking-[.12em]">Bag · 0</button></header><main><section className="mx-auto grid max-w-[1320px] items-center gap-10 px-5 pb-20 pt-6 md:px-8 lg:grid-cols-[.9fr_1.1fr] lg:pb-28"><div><div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#17332d]/12 bg-white/45 px-4 py-2 text-[9px] font-bold uppercase tracking-[.16em]"><span className="h-2 w-2 rounded-full bg-[#4d8b77]" /> Approved EVLV Partner</div><p className={`text-[10px] font-bold uppercase tracking-[.2em] ${config.accent}`}>{config.eyebrow}</p><h1 className="mt-5 font-display text-[clamp(3.8rem,7vw,7.6rem)] font-semibold leading-[.86] tracking-[-.065em]">Research,<br /><em className="font-normal">considered.</em></h1><p className="mt-7 max-w-xl text-base leading-8 text-[#52645f]">{config.intro}</p><a href="#catalogue" className={`mt-9 inline-flex min-h-14 items-center rounded-full px-8 text-[11px] font-bold uppercase tracking-[.14em] ${config.button}`}>Explore my catalogue</a></div><div className="relative min-h-[590px] overflow-hidden rounded-[32px]"><Image src="/images/ambassadors/hero-creator.webp" alt="Jordan, approved EVLV partner" fill priority sizes="(max-width: 1024px) 100vw, 650px" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#17332d]/75 via-transparent to-transparent" /><div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-[#17332d]/75 p-6 text-white backdrop-blur-md"><p className="text-[9px] font-bold uppercase tracking-[.18em] text-white/55">A note from Jordan</p><p className="mt-3 font-display text-2xl leading-tight">“I built this catalogue for researchers who value clear documentation and a dependable ordering experience.”</p></div></div></section><ProductGrid heading="Jordan’s current selection" /></main><MicrositeFooter /></div>;
}

function StudioConcept({ config }: { config: (typeof CONFIG)[TemplateKey] }) {
  return <div className={config.shell}><ConceptBar name={config.name} /><header className="border-b border-[#cad8d3]"><div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-6 md:px-8"><span className="font-display text-2xl font-semibold tracking-[-.05em]">NORTH/EVLV</span><div className="flex items-center gap-5 text-[10px] font-bold uppercase tracking-[.13em]"><span className="hidden md:inline">Batch documentation</span><span className="rounded-lg bg-[#0f3a34] px-4 py-2.5 text-white">Catalogue</span></div></div></header><main><section className="mx-auto grid max-w-[1380px] gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_.9fr]"><div className="flex flex-col justify-center"><p className={`text-[10px] font-bold uppercase tracking-[.22em] ${config.accent}`}>Independent EVLV partner · North Research</p><h1 className="mt-6 max-w-3xl font-display text-[clamp(3.6rem,6.5vw,7rem)] font-semibold leading-[.9] tracking-[-.055em]">A focused catalogue with the records behind it.</h1><p className="mt-7 max-w-2xl text-base leading-8 text-[#5e706a]">{config.intro}</p><div className="mt-9 flex flex-wrap gap-3"><a href="#catalogue" className={`inline-flex min-h-14 items-center px-7 text-[11px] font-bold uppercase tracking-[.14em] ${config.button}`}>Review catalogue</a><a href="#documentation" className="inline-flex min-h-14 items-center border border-[#0f3a34]/20 bg-white px-7 text-[11px] font-bold uppercase tracking-[.14em]">How documentation works</a></div></div><div className="relative min-h-[560px] overflow-hidden bg-white shadow-[0_24px_70px_rgba(15,48,43,.12)]"><Image src="/images/wholesale/evlv-white-label-dropship.png" alt="EVLV documented research catalogue" fill priority sizes="(max-width: 1024px) 100vw, 620px" className="object-cover" /><div className="absolute inset-x-0 bottom-0 grid grid-cols-3 border-t border-white/20 bg-[#0f302b]/92 p-5 text-center text-white backdrop-blur"><Metric value="4" label="Current products" /><Metric value="100%" label="Traceable stock" /><Metric value="U.S." label="Dispatch" /></div></div></section><ProductGrid heading="Current documented catalogue" /></main><MicrositeFooter /></div>;
}

function CatalogueConcept({ config }: { config: (typeof CONFIG)[TemplateKey] }) {
  return <div className={config.shell}><ConceptBar name={config.name} /><header className="sticky top-0 z-20 border-b border-[#d9ddd8] bg-[#f6f5f0]/95 backdrop-blur"><div className="mx-auto flex max-w-[1450px] items-center justify-between px-5 py-5 md:px-8"><span className="font-display text-2xl font-semibold tracking-[-.05em]">COVALENT <small className="ml-2 font-sans text-[8px] font-bold uppercase tracking-[.16em] text-[#61706b]">Powered by EVLV</small></span><div className="flex gap-3"><button className="h-10 w-10 rounded-full border border-[#cad2cd]"><i className="ri-search-line" /></button><button className="rounded-full bg-[#102d28] px-5 text-[10px] font-bold uppercase tracking-[.12em] text-white">Bag · 0</button></div></div></header><main><section className="bg-[#102d28] text-white"><div className="mx-auto grid max-w-[1450px] items-center gap-8 px-5 py-12 md:px-8 lg:grid-cols-[.82fr_1.18fr] lg:py-16"><div><p className="text-[9px] font-bold uppercase tracking-[.21em] text-[#a7c9bf]">{config.eyebrow}</p><h1 className="mt-5 font-display text-5xl font-semibold leading-[.92] tracking-[-.05em] md:text-7xl">Available now.<br />Documented clearly.</h1><p className="mt-6 max-w-xl text-sm leading-7 text-white/60">{config.intro}</p><a href="#catalogue" className={`mt-8 inline-flex min-h-13 items-center rounded-md px-7 text-[10px] font-bold uppercase tracking-[.15em] ${config.button}`}>Shop available inventory</a></div><div className="relative min-h-[450px]"><Image src="/images/certified/evlv-hero-multi-vials.png" alt="EVLV partner inventory" fill priority sizes="(max-width: 1024px) 100vw, 760px" className="object-contain" /></div></div></section><div className="mx-auto flex max-w-[1450px] gap-8 overflow-x-auto border-b border-[#d9ddd8] px-5 py-4 text-[9px] font-bold uppercase tracking-[.14em] text-[#687770] md:px-8"><span>All inventory</span><span>GLP series</span><span>Documentation available</span><span>Current stock only</span></div><ProductGrid heading="Available partner inventory" /></main><MicrositeFooter /></div>;
}

function ProductGrid({ heading }: { heading: string }) {
  return <section id="catalogue" className="mx-auto max-w-[1380px] px-5 py-20 md:px-8 md:py-24"><div className="flex flex-col justify-between gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-end"><div><p className="text-[9px] font-bold uppercase tracking-[.19em] text-[#55786f]">Research use only</p><h2 className="mt-3 font-display text-3xl font-semibold md:text-5xl">{heading}</h2></div><span className="text-xs text-[#6b7773]">4 products · current partner stock</span></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{PRODUCTS.map((product) => <article key={product.name} className="group border border-black/10 bg-white p-4"><div className="relative aspect-[4/5] overflow-hidden bg-[#f3f2ed]"><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, 340px" className="object-cover transition duration-500 group-hover:scale-[1.025]" /></div><p className="mt-5 text-[9px] font-bold uppercase tracking-[.14em] text-[#55786f]">{product.note}</p><h3 className="mt-2 font-display text-xl font-semibold">{product.name}</h3><div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4"><strong className="text-sm">{product.price}</strong><button className="rounded-full bg-[#102d28] px-4 py-2 text-[9px] font-bold uppercase tracking-[.12em] text-white">Add</button></div></article>)}</div></section>;
}

function Metric({ value, label }: { value: string; label: string }) { return <div><strong className="font-display text-2xl">{value}</strong><span className="mt-1 block text-[8px] font-bold uppercase tracking-[.13em] text-white/50">{label}</span></div>; }
function MicrositeFooter() { return <footer className="border-t border-black/10 px-5 py-10"><div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-4 text-xs text-[#687770] sm:flex-row"><span>Independent EVLV Partner · Research use only · Not for human or veterinary use</span><span>Commerce infrastructure by EVLV Partner Network</span></div></footer>; }

