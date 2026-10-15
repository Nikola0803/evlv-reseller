import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Partner Microsite Preview", robots: { index: false, follow: false } };

type TemplateKey = "creator" | "studio" | "catalogue";

const PRODUCTS = [
  { name: "GLP3-R 10MG", price: "$74.99", image: "/images/products/evlv-3-10mg.png", note: "Exact report available" },
  { name: "GLP2-T 10MG", price: "$69.99", image: "/images/products/tirzepatide-10mg.png", note: "Current stock · 8" },
  { name: "GLP1-S 5MG", price: "$49.99", image: "/images/products/semaglutide-5mg.png", note: "Current stock · 11" },
  { name: "GHK-CU 50MG", price: "$39.99", image: "/images/products/ghk-cu-50mg.png", note: "Exact report available" },
];

const TEMPLATE_NAMES: Record<TemplateKey, string> = { creator: "Signature", studio: "Lab Ledger", catalogue: "Market" };

export default async function TemplateConceptPage({ params }: { params: Promise<{ template: string }> }) {
  const { template: rawTemplate } = await params;
  if (!(rawTemplate in TEMPLATE_NAMES)) notFound();
  const template = rawTemplate as TemplateKey;
  if (template === "creator") return <SignatureStore />;
  if (template === "studio") return <LedgerStore />;
  return <MarketStore />;
}

function PreviewBar({ template }: { template: TemplateKey }) {
  return <div className="relative z-50 border-b border-black/10 bg-[#f8f7f2] px-4 py-2.5 text-center text-[9px] font-bold uppercase tracking-[.15em] text-[#52645f]">Live microsite concept · {TEMPLATE_NAMES[template]} · <Link href="/#templates" className="underline underline-offset-4">Return to EVLV Partners</Link></div>;
}

function SignatureStore() {
  return <div className="min-h-screen bg-[#eee9df] text-[#15332d]">
    <PreviewBar template="creator" />
    <header className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-6 md:px-10"><div><p className="text-[8px] font-bold uppercase tracking-[.24em] text-[#8a6a43]">An independent EVLV partner</p><span className="mt-1 block font-display text-2xl font-semibold tracking-[-.05em]">JORDAN / FIELD NOTES</span></div><nav className="hidden items-center gap-8 text-[9px] font-bold uppercase tracking-[.15em] md:flex"><a href="#story">My approach</a><a href="#catalogue">The edit</a><a href="#standards">Standards</a></nav><button className="rounded-full bg-[#15332d] px-5 py-3 text-[9px] font-bold uppercase tracking-[.13em] text-white">Bag · 0</button></header>
    <main>
      <section className="mx-auto max-w-[1440px] px-3 pb-12 md:px-6"><div className="relative min-h-[720px] overflow-hidden rounded-[28px] bg-[#15332d] text-white"><Image src="/images/ambassadors/hero-creator.webp" alt="Independent research catalogue curator" fill priority sizes="100vw" className="object-cover object-center" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,42,36,.98)_0%,rgba(10,42,36,.88)_42%,rgba(10,42,36,.2)_73%,rgba(10,42,36,.05)_100%)]" /><div className="relative z-10 flex min-h-[720px] items-end px-6 py-12 sm:px-10 md:px-16 md:py-16"><div className="max-w-[660px]"><span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[.17em] backdrop-blur">Approved partner · Curated research catalogue</span><h1 className="mt-7 font-display text-[clamp(3.7rem,7vw,7.4rem)] font-semibold leading-[.85] tracking-[-.065em]">Selected with<br /><em className="font-normal text-[#e5c494]">intention.</em></h1><p className="mt-7 max-w-xl text-base leading-8 text-white/67">A personal selection for independent researchers who want documented inventory and a direct, dependable ordering experience.</p><a href="#catalogue" className="mt-9 inline-flex min-h-14 items-center rounded-full bg-[#e5c494] px-8 text-[10px] font-bold uppercase tracking-[.15em] text-[#15332d]">Explore Jordan&apos;s edit <i className="ri-arrow-down-line ml-2" /></a></div></div></div></section>
      <section id="story" className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 md:px-8 lg:grid-cols-[.65fr_1.35fr] lg:py-28"><div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#8a6a43]">Why this catalogue</p></div><div><h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-.045em] md:text-6xl">Fewer products. Better context. A real person behind every order.</h2><div className="mt-10 grid gap-6 border-t border-[#cfc8bc] pt-8 sm:grid-cols-3"><Proof title="Selected inventory" body="A concise catalogue built around real audience demand." /><Proof title="Batch visibility" body="Product-specific documentation where available." /><Proof title="Direct support" body="Order help from the person whose shop you chose." /></div></div></section>
      <ProductGrid heading="Jordan’s current edit" theme="warm" /><StandardsStrip />
    </main><MicrositeFooter partner="Jordan / Field Notes" />
  </div>;
}

function LedgerStore() {
  return <div className="min-h-screen bg-[#edf1ee] text-[#0d302a]">
    <PreviewBar template="studio" />
    <header className="border-b border-[#cad7d2]"><div className="mx-auto flex max-w-[1450px] items-center justify-between px-5 py-6 md:px-8"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center bg-[#103d35] text-xs font-bold text-white">N/R</span><div><span className="block font-display text-xl font-semibold tracking-[-.04em]">NORTH RESEARCH</span><span className="block text-[7px] font-bold uppercase tracking-[.22em] text-[#648078]">Independent EVLV partner</span></div></div><div className="flex items-center gap-3"><a href="#records" className="hidden text-[9px] font-bold uppercase tracking-[.14em] md:block">Batch records</a><button className="rounded-md bg-[#103d35] px-5 py-3 text-[9px] font-bold uppercase tracking-[.14em] text-white">Catalogue · 04</button></div></div></header>
    <main>
      <section className="mx-auto grid max-w-[1450px] gap-8 px-5 py-10 md:px-8 md:py-16 lg:grid-cols-[1.05fr_.95fr]"><div className="flex flex-col justify-between rounded-[24px] bg-[#103d35] p-7 text-white md:p-12 lg:min-h-[650px]"><div><div className="flex items-center justify-between border-b border-white/15 pb-5 text-[8px] font-bold uppercase tracking-[.18em] text-white/55"><span>Catalogue release 04</span><span>Current inventory</span></div><p className="mt-10 text-[9px] font-bold uppercase tracking-[.22em] text-[#9fcbc0]">Documentation-led commerce</p><h1 className="mt-6 max-w-3xl font-display text-[clamp(3.5rem,6.5vw,7rem)] font-semibold leading-[.87] tracking-[-.06em]">The record<br />comes first.</h1><p className="mt-7 max-w-xl text-base leading-8 text-white/60">A technical storefront designed to make current inventory, product identity, and available batch documentation immediately clear.</p></div><div className="mt-12 grid grid-cols-3 border-t border-white/15 pt-7"><Metric value="04" label="Live products" /><Metric value="04" label="SKU records" /><Metric value="U.S." label="Dispatch" /></div></div><div className="relative min-h-[520px] overflow-hidden rounded-[24px] bg-white shadow-[0_25px_70px_rgba(10,48,42,.12)] lg:min-h-[650px]"><Image src="/images/wholesale/evlv-white-label-dropship.png" alt="Documented EVLV inventory" fill priority sizes="(max-width: 1024px) 100vw, 700px" className="object-cover" /><div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/50 bg-white/90 p-5 backdrop-blur"><div className="flex items-center justify-between"><div><p className="text-[8px] font-bold uppercase tracking-[.17em] text-[#648078]">Current operating status</p><p className="mt-2 font-display text-2xl font-semibold">Catalogue verified</p></div><span className="grid h-11 w-11 place-items-center rounded-full bg-[#dcebe5] text-[#1f6b5b]"><i className="ri-check-line text-xl" /></span></div></div></div></section>
      <section id="records" className="mx-auto max-w-[1380px] px-5 py-14 md:px-8 md:py-20"><div className="grid gap-px overflow-hidden rounded-2xl border border-[#cad7d2] bg-[#cad7d2] md:grid-cols-3"><Proof title="Identity matched" body="Product and strength displayed consistently across catalogue and record." /><Proof title="Reports surfaced" body="Exact batch documentation labeled where available." /><Proof title="Inventory current" body="Only available partner stock appears for ordering." /></div></section>
      <ProductGrid heading="Current documented catalogue" theme="technical" /><StandardsStrip />
    </main><MicrositeFooter partner="North Research" />
  </div>;
}

function MarketStore() {
  return <div className="min-h-screen bg-[#f6f5f0] text-[#102d28]">
    <PreviewBar template="catalogue" />
    <header className="sticky top-0 z-40 border-b border-[#dadfd9] bg-[#f6f5f0]/95 backdrop-blur"><div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 md:px-8"><div><span className="font-display text-2xl font-semibold tracking-[-.055em]">COVALENT</span><span className="ml-3 hidden text-[7px] font-bold uppercase tracking-[.2em] text-[#6b7773] sm:inline">Powered by EVLV</span></div><nav className="hidden gap-8 text-[9px] font-bold uppercase tracking-[.14em] md:flex"><a href="#catalogue">Shop all</a><a href="#catalogue">GLP series</a><a href="#standards">Documentation</a></nav><div className="flex gap-2"><button aria-label="Search" className="h-10 w-10 rounded-full border border-[#cad2cd]"><i className="ri-search-line" /></button><button className="rounded-full bg-[#102d28] px-5 text-[9px] font-bold uppercase tracking-[.13em] text-white">Bag · 0</button></div></div></header>
    <main>
      <section className="px-3 py-3 md:px-6 md:py-6"><div className="mx-auto grid max-w-[1500px] overflow-hidden rounded-[26px] bg-[#0c302b] text-white lg:grid-cols-[.78fr_1.22fr]"><div className="flex flex-col justify-center p-7 md:p-14 lg:min-h-[620px]"><div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[8px] font-bold uppercase tracking-[.17em] text-[#a6ccc1]"><span className="h-1.5 w-1.5 rounded-full bg-[#70c3a9]" /> Current partner inventory</div><h1 className="mt-8 font-display text-[clamp(3.6rem,6vw,6.8rem)] font-semibold leading-[.86] tracking-[-.06em]">Fast to find.<br /><span className="text-[#e4c38e]">Clear to order.</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-white/60">A streamlined mobile catalogue for returning researchers who know what they need and value a friction-light ordering experience.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#catalogue" className="inline-flex min-h-14 items-center rounded-full bg-[#e4c38e] px-8 text-[10px] font-bold uppercase tracking-[.15em] text-[#102d28]">Shop current stock</a><a href="#standards" className="inline-flex min-h-14 items-center rounded-full border border-white/20 px-7 text-[10px] font-bold uppercase tracking-[.15em]">Our standards</a></div></div><div className="relative min-h-[480px] bg-[#123c36] lg:min-h-[620px]"><Image src="/images/certified/evlv-hero-multi-vials.png" alt="Current EVLV partner catalogue" fill priority sizes="(max-width: 1024px) 100vw, 850px" className="object-contain object-center" /><div className="absolute inset-0 bg-gradient-to-r from-[#0c302b]/35 via-transparent to-transparent" /></div></div></section>
      <div className="mx-auto flex max-w-[1450px] gap-8 overflow-x-auto border-b border-[#d9ddd8] px-5 py-5 text-[8px] font-bold uppercase tracking-[.15em] text-[#687770] md:px-8"><span className="text-[#102d28]">All available</span><span>GLP series</span><span>Reports available</span><span>Current stock only</span><span>U.S. dispatch</span></div>
      <ProductGrid heading="Available partner inventory" theme="market" /><StandardsStrip />
    </main><MicrositeFooter partner="Covalent Market" />
  </div>;
}

function ProductGrid({ heading, theme }: { heading: string; theme: "warm" | "technical" | "market" }) {
  const rounded = theme === "warm" ? "rounded-[22px]" : theme === "technical" ? "rounded-md" : "rounded-xl";
  return <section id="catalogue" className="mx-auto max-w-[1380px] px-5 py-20 md:px-8 md:py-28"><div className="flex flex-col justify-between gap-5 border-b border-black/10 pb-7 sm:flex-row sm:items-end"><div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#55786f]">Research use only</p><h2 className="mt-3 font-display text-4xl font-semibold tracking-[-.04em] md:text-6xl">{heading}</h2></div><span className="text-xs text-[#6b7773]">4 products · live partner inventory</span></div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{PRODUCTS.map((product) => <article key={product.name} className={`${rounded} group overflow-hidden border border-black/10 bg-white p-4 shadow-[0_12px_35px_rgba(15,45,40,.04)]`}><div className={`${rounded} relative aspect-[4/5] overflow-hidden bg-[#f0f1ed]`}><Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, 340px" className="object-cover transition duration-500 group-hover:scale-[1.025]" /></div><p className="mt-5 text-[8px] font-bold uppercase tracking-[.15em] text-[#55786f]">{product.note}</p><h3 className="mt-2 font-display text-xl font-semibold">{product.name}</h3><div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4"><strong className="text-sm">{product.price}</strong><button className="rounded-full bg-[#102d28] px-5 py-2.5 text-[8px] font-bold uppercase tracking-[.13em] text-white">Add to bag</button></div></article>)}</div></section>;
}

function StandardsStrip() { return <section id="standards" className="bg-[#102d28] px-5 py-12 text-white"><div className="mx-auto grid max-w-[1320px] gap-6 sm:grid-cols-3"><Proof title="Research use only" body="Not for human or veterinary use." dark /><Proof title="Partner-operated" body="An independent storefront powered by EVLV infrastructure." dark /><Proof title="Documentation-aware" body="Exact reports clearly identified where available." dark /></div></section>; }
function Proof({ title, body, dark = false }: { title: string; body: string; dark?: boolean }) { return <div className={`${dark ? "border-white/12" : "border-black/10 bg-white"} border-l p-6`}><h3 className="font-display text-xl font-semibold">{title}</h3><p className={`mt-3 text-xs leading-6 ${dark ? "text-white/52" : "text-[#687770]"}`}>{body}</p></div>; }
function Metric({ value, label }: { value: string; label: string }) { return <div><strong className="font-display text-2xl">{value}</strong><span className="mt-1 block text-[7px] font-bold uppercase tracking-[.15em] text-white/45">{label}</span></div>; }
function MicrositeFooter({ partner }: { partner: string }) { return <footer className="border-t border-black/10 px-5 py-10"><div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-4 text-[10px] text-[#687770] sm:flex-row"><span>{partner} · Independent EVLV Partner · Research use only</span><span>Commerce infrastructure by EVLV Partner Network</span></div></footer>; }
