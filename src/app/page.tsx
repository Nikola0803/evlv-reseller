import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ApplyPreview } from "@/components/ApplyPreview";

export const metadata: Metadata = {
  title: "EVLV Partner Network",
  description: "A private EVLV-powered commerce platform for approved research-product partners.",
  robots: { index: false, follow: false },
};

const operatingTools = [
  { icon: "ri-layout-4-line", title: "Your microsite", body: "Launch from a polished template at a permanent partner URL built for social traffic." },
  { icon: "ri-box-3-line", title: "Your inventory", body: "Purchase approved starter batches, monitor available units, and reorder from one dashboard." },
  { icon: "ri-shopping-bag-3-line", title: "Your orders", body: "See new orders, confirm payment, manage fulfillment, and provide tracking without spreadsheets." },
  { icon: "ri-sparkling-2-line", title: "Your AI copilot", body: "Get direct help with setup, operations, approved content, documentation, and customer support." },
];

const templates = [
  {
    key: "creator",
    number: "01",
    name: "Creator",
    eyebrow: "Personality first",
    body: "A story-led social storefront for partners whose audience already knows and trusts them.",
    image: "/images/ambassadors/hero-creator.webp",
    color: "#c8a578",
  },
  {
    key: "studio",
    number: "02",
    name: "Research Studio",
    eyebrow: "Documentation first",
    body: "A refined technical presentation built around catalog clarity, batch records, and research standards.",
    image: "/images/wholesale/evlv-white-label-dropship.png",
    color: "#83aa9f",
  },
  {
    key: "catalogue",
    number: "03",
    name: "Private Catalogue",
    eyebrow: "Commerce first",
    body: "A fast, product-forward experience for returning customers and direct link-in-bio traffic.",
    image: "/images/certified/evlv-hero-multi-vials.png",
    color: "#e4c48e",
  },
];

const steps = [
  ["01", "Apply or receive an invitation", "Every partner is reviewed before access is activated."],
  ["02", "Build your operating profile", "Reserve your URL, select a template, configure your catalog, and add approved payment details."],
  ["03", "Purchase a starter batch", "Your approved products and quantities become live partner inventory after fulfillment."],
  ["04", "Launch and operate", "Share one permanent link, receive orders, confirm payments, fulfill, and replenish."],
];

const partnerProfiles = [
  ["ri-camera-lens-line", "Creators & educators", "Turn an existing audience into a reviewed, focused catalogue without building commerce infrastructure from zero."],
  ["ri-building-2-line", "Gyms & wellness studios", "Add a controlled research-product channel with clear inventory, payment, and customer-order operations."],
  ["ri-team-line", "Community operators", "Serve a trusted local or professional network through a permanent storefront and consistent documentation."],
  ["ri-store-2-line", "Emerging resellers", "Start with a manageable batch, learn the operating system, and earn access to larger reviewed opportunities."],
];

const starterPaths = [
  { label: "Focused", title: "Start with one lane", body: "A concentrated selection for partners who know exactly what their audience requests.", detail: "Lowest operational complexity" },
  { label: "Balanced", title: "Build a core catalogue", body: "A selected starter mix designed to support broader customer demand and repeat ordering.", detail: "Best for active communities" },
  { label: "Custom", title: "Plan with EVLV", body: "A reviewed inventory plan for established operators with a defined customer base and sales process.", detail: "Approval and volume dependent" },
];

const faqs = [
  ["Is this an affiliate program?", "No. This concept is built around approved partners operating real inventory and their own customer-order workflow—not a recruiting chain."],
  ["Do you guarantee income?", "No. Outcomes depend on audience, effort, operating costs, pricing, and execution. EVLV does not publish or promise earnings."],
  ["Can anyone join?", "No. Each application is reviewed for fit, responsible positioning, business readiness, and ability to follow research-use-only requirements."],
  ["What does EVLV provide?", "Approved inventory access, microsite infrastructure, documentation, order tools, operational guidance, and a bounded partner assistant."],
];

export default function PartnerNetworkPage() {
  return (
    <div className="overflow-hidden bg-[#f2f3ef] text-[#102d28]">
      <section className="px-3 pb-12 pt-5 md:px-6 md:pb-20 md:pt-7">
        <div className="relative mx-auto min-h-[720px] max-w-[1450px] overflow-hidden rounded-[28px] bg-[#082b28] text-white shadow-[0_30px_90px_rgba(4,35,32,.22)]">
          <Image src="/images/wholesale/evlv-b2b-fulfillment.png" alt="EVLV partner commerce operation" fill priority sizes="(max-width: 768px) 100vw, 1450px" className="object-cover object-[67%_center] opacity-80" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,38,35,.99)_0%,rgba(5,38,35,.96)_38%,rgba(5,38,35,.64)_62%,rgba(5,38,35,.14)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#082b28] via-[#082b28]/65 to-transparent lg:hidden" />
          <div className="relative z-10 flex min-h-[720px] items-center px-6 py-16 sm:px-10 md:px-16 lg:px-20">
            <div className="max-w-[710px]">
              <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-[#aed1c6]">
                <span className="h-px w-9 bg-[#aed1c6]/60" /> EVLV Partner Network
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 tracking-[.14em] text-white/65">Application only</span>
              </div>
              <h1 className="max-w-3xl font-display text-[clamp(3.45rem,6vw,6.9rem)] font-semibold leading-[.9] tracking-[-.055em]">
                Your storefront.<br /><span className="text-[#b6d4ca]">Powered by EVLV.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                Approved partners get the tools to launch a focused research-commerce operation: a permanent microsite, private inventory pricing, order controls, and direct operational support.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href="/#apply" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#e4c18d] px-8 text-[11px] font-bold uppercase tracking-[.15em] text-[#102d28] transition hover:bg-[#efd3a7]">Apply for review <i className="ri-arrow-right-line" /></Link>
                <a href="#templates" className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/25 bg-white/[.04] px-8 text-[11px] font-bold uppercase tracking-[.15em] text-white transition hover:bg-white/10">Explore the platform</a>
                <Link href="/dashboard" className="inline-flex min-h-14 items-center justify-center rounded-lg border border-white/15 px-6 text-[10px] font-bold uppercase tracking-[.14em] text-white/70 transition hover:bg-white/10">Dashboard preview</Link>
              </div>
              <div className="mt-12 grid max-w-2xl gap-3 border-t border-white/12 pt-7 text-xs text-white/65 sm:grid-cols-3">
                <span className="flex items-center gap-2"><i className="ri-check-line text-[#aed1c6]" /> Reviewed access</span>
                <span className="flex items-center gap-2"><i className="ri-check-line text-[#aed1c6]" /> Permanent partner URL</span>
                <span className="flex items-center gap-2"><i className="ri-check-line text-[#aed1c6]" /> Central support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pb-8 pt-10 md:px-8 md:pb-16">
        <Reveal className="rounded-[26px] border border-[#d4dfda] bg-white p-7 md:p-12">
          <div className="flex flex-col justify-between gap-6 border-b border-[#dde5e1] pb-9 md:flex-row md:items-end"><div className="max-w-3xl"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#4c766b]">Built for operators</p><h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-.04em] md:text-6xl">You bring the relationships. We bring the operating layer.</h2></div><p className="max-w-md text-sm leading-7 text-[#687770]">The strongest applicants already have an audience, community, physical location, or repeatable way to reach qualified research customers.</p></div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-[#dce4e0] sm:grid-cols-2 lg:grid-cols-4">{partnerProfiles.map(([icon, title, body]) => <article key={title} className="bg-[#f7f8f5] p-6 md:p-7"><i className={`${icon} text-2xl text-[#3e7869]`} /><h3 className="mt-7 font-display text-xl font-semibold">{title}</h3><p className="mt-3 text-xs leading-6 text-[#687770]">{body}</p></article>)}</div>
        </Reveal>
      </section>

      <section id="model" className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 md:py-28">
        <Reveal className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#4c766b]">One operating system</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-.04em] md:text-6xl">Everything between approval and reorder.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#61706b] md:text-base">The platform handles the operational layer so partners can focus on building credible relationships and serving their customers responsibly.</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-[#d5dfda] bg-[#d5dfda] sm:grid-cols-2">
            {operatingTools.map((tool) => <article key={tool.title} className="bg-white p-7 md:p-9"><i className={`${tool.icon} text-2xl text-[#3e7869]`} /><h3 className="mt-8 font-display text-2xl font-semibold">{tool.title}</h3><p className="mt-3 text-sm leading-6 text-[#687770]">{tool.body}</p></article>)}
          </div>
        </Reveal>
      </section>

      <section className="bg-[#e7ebe7] py-20 md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8">
          <Reveal className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-20"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#4c766b]">Choose your starting path</p><h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-.04em] md:text-6xl">Start manageable. Build deliberately.</h2><p className="mt-6 text-sm leading-7 text-[#61706b]">Starter inventory is reviewed around the partner—not sold as a universal shortcut. The right mix depends on audience, experience, and operational readiness.</p></div><div className="grid gap-4 md:grid-cols-3">{starterPaths.map((path, index) => <article key={path.title} className={`${index === 1 ? "bg-[#102d28] text-white" : "bg-white"} rounded-2xl border border-[#d5dfda] p-6`}><p className={`text-[9px] font-bold uppercase tracking-[.17em] ${index === 1 ? "text-[#9fc9bc]" : "text-[#4c766b]"}`}>{path.label}</p><h3 className="mt-5 font-display text-2xl font-semibold">{path.title}</h3><p className={`mt-4 text-xs leading-6 ${index === 1 ? "text-white/60" : "text-[#687770]"}`}>{path.body}</p><p className={`mt-8 border-t pt-4 text-[9px] font-bold uppercase tracking-[.11em] ${index === 1 ? "border-white/12 text-[#b9d9ce]" : "border-[#dde5e1] text-[#567d72]"}`}>{path.detail}</p></article>)}</div></Reveal>
        </div>
      </section>

      <section id="templates" className="bg-[#0a302c] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1380px] px-5 md:px-8">
          <Reveal className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div className="max-w-3xl"><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#9bc6ba]">Launch architecture</p><h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-.04em] md:text-6xl">Three starting points.<br />One powerful backbone.</h2></div>
            <p className="max-w-md text-sm leading-7 text-white/55">Every template includes the same catalog, inventory, ordering, documentation, and partner support infrastructure.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {templates.map((template) => (
              <Reveal key={template.key} className="group overflow-hidden rounded-2xl border border-white/12 bg-white/[.035]">
                <div className="relative aspect-[4/3] overflow-hidden"><Image src={template.image} alt={`${template.name} partner template`} fill sizes="(max-width: 1024px) 100vw, 430px" className="object-cover transition duration-700 group-hover:scale-[1.035]" /><div className="absolute inset-0 bg-gradient-to-t from-[#071f1d]/90 via-transparent to-transparent" /><span className="absolute left-5 top-5 rounded-full border border-white/25 bg-[#082b28]/65 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.15em] backdrop-blur">Template {template.number}</span></div>
                <div className="p-7"><p className="text-[9px] font-bold uppercase tracking-[.19em]" style={{ color: template.color }}>{template.eyebrow}</p><h3 className="mt-3 font-display text-3xl font-semibold">{template.name}</h3><p className="mt-4 min-h-20 text-sm leading-6 text-white/55">{template.body}</p><Link href={`/templates/${template.key}`} className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.15em] text-white">Open live concept <i className="ri-arrow-right-up-line" /></Link></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 py-20 md:px-8 md:py-28">
        <Reveal className="rounded-[26px] border border-[#d4dfda] bg-white p-7 shadow-[0_24px_70px_rgba(16,45,40,.08)] md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#4c766b]">From invitation to live</p><h2 className="mt-5 font-display text-4xl font-semibold leading-[1.03] tracking-[-.04em] md:text-5xl">A guided launch, not another blank dashboard.</h2><p className="mt-6 text-sm leading-7 text-[#687770]">Every setup decision is reviewed before the public microsite is activated.</p></div>
            <div className="divide-y divide-[#dde5e1] border-y border-[#dde5e1]">{steps.map(([number, title, body]) => <div key={number} className="grid gap-3 py-6 sm:grid-cols-[52px_1fr]"><span className="font-mono text-xs font-semibold text-[#4c766b]">{number}</span><div><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#687770]">{body}</p></div></div>)}</div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1320px] px-5 pb-20 md:px-8 md:pb-28">
        <Reveal className="grid gap-10 rounded-[26px] bg-white p-7 md:p-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20 lg:p-16"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#4c766b]">Straight answers</p><h2 className="mt-5 font-display text-4xl font-semibold leading-[1.03] tracking-[-.04em] md:text-5xl">A real operating relationship—not a hype pitch.</h2><p className="mt-6 text-sm leading-7 text-[#687770]">The platform is designed to give serious partners useful leverage while keeping expectations and responsibilities clear.</p></div><div className="divide-y divide-[#dde5e1] border-y border-[#dde5e1]">{faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold">{question}<i className="ri-add-line text-xl transition group-open:rotate-45" /></summary><p className="mt-4 max-w-2xl text-sm leading-7 text-[#687770]">{answer}</p></details>)}</div></Reveal>
      </section>

      <section id="apply" className="px-3 pb-6 md:px-6">
        <div className="mx-auto grid max-w-[1450px] gap-10 overflow-hidden rounded-[28px] bg-[#082b28] px-6 py-14 text-white md:px-12 md:py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-20">
          <div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-[#9fc9bc]">Private application</p><h2 className="mt-5 font-display text-4xl font-semibold leading-[1] tracking-[-.045em] md:text-6xl">Show us what you can build.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/60">Tell us about your audience, operation, and plan. Strong applications are reviewed for fit, readiness, and responsible positioning.</p><div className="mt-8 space-y-3 text-xs text-white/60"><p><i className="ri-check-line mr-2 text-[#9fc9bc]" />No application fee</p><p><i className="ri-check-line mr-2 text-[#9fc9bc]" />Private review</p><p><i className="ri-check-line mr-2 text-[#9fc9bc]" />No income guarantees or recruiting chain</p></div></div>
          <ApplyPreview />
        </div>
      </section>

      <section className="px-3 pb-6 md:px-6">
        <div className="mx-auto max-w-[1450px] overflow-hidden rounded-[28px] bg-[#e5c494] px-6 py-16 text-center text-[#102d28] md:px-10 md:py-24">
          <p className="text-[10px] font-bold uppercase tracking-[.23em]">EVLV Partner Network</p>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-semibold leading-[.98] tracking-[-.045em] md:text-6xl">Build a focused operation around a platform that is ready to work.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#304a45]">No recruiting chain. No public earnings promises. A reviewed partner relationship built around real inventory, real customer orders, and responsible operations.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3"><Link href="/#apply" className="inline-flex min-h-14 items-center rounded-lg bg-[#102d28] px-8 text-[11px] font-bold uppercase tracking-[.15em] text-white">Apply for review</Link><Link href="/setup?preview=1" className="inline-flex min-h-14 items-center rounded-lg border border-[#102d28]/20 bg-white/30 px-8 text-[11px] font-bold uppercase tracking-[.15em]">Preview onboarding</Link><Link href="/dashboard" className="inline-flex min-h-14 items-center rounded-lg border border-[#102d28]/20 bg-white/30 px-8 text-[11px] font-bold uppercase tracking-[.15em]">Preview dashboard</Link></div>
        </div>
      </section>
    </div>
  );
}

