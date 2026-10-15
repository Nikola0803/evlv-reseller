"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  ["overview", "ri-dashboard-line", "Overview"],
  ["orders", "ri-shopping-bag-3-line", "Orders"],
  ["inventory", "ri-box-3-line", "Inventory"],
  ["microsite", "ri-layout-4-line", "Microsite"],
  ["payments", "ri-bank-card-line", "Payments"],
  ["assistant", "ri-sparkling-2-line", "EVLV Assistant"],
] as const;

const orders = [
  { id: "EVP-1048", customer: "M. Carter", items: "GLP3-R 10MG × 2", total: "$149.98", state: "Payment confirmed", tone: "green" },
  { id: "EVP-1047", customer: "A. Miller", items: "GLP2-T 10MG × 1", total: "$69.99", state: "Awaiting payment", tone: "amber" },
  { id: "EVP-1046", customer: "D. Parker", items: "GHK-CU 50MG × 2", total: "$79.98", state: "Ready to fulfill", tone: "blue" },
];

const stock = [
  { name: "GLP3-R 10MG", sku: "GLP3R10", units: 12, image: "/images/products/tirzepatide-10mg.png" },
  { name: "GLP2-T 10MG", sku: "GLP2T10", units: 8, image: "/images/products/semaglutide-10mg.png" },
  { name: "GLP1-S 5MG", sku: "GLP1S5", units: 11, image: "/images/products/semaglutide-5mg.png" },
  { name: "GHK-CU 50MG", sku: "GHK50", units: 4, image: "/images/products/ghk-cu-50mg.png" },
];

const promptAnswers: Record<string, string> = {
  "What needs my attention?": "One payment is awaiting confirmation and GHK-CU 50MG is below your five-unit reorder threshold.",
  "Help me write a post": "I can draft an RUO-compliant social post using your selected catalogue and current EVLV brand language.",
  "How do I reorder?": "Open Inventory, choose the units you want to replenish, and submit a partner reorder for review.",
};

type TabKey = typeof navItems[number][0];

export function PartnerDashboardPreview() {
  const [active, setActive] = useState<TabKey>("overview");
  const [answer, setAnswer] = useState("Ask me about orders, inventory, storefront setup, or approved content.");

  return (
    <div className="min-h-screen bg-[#edf1ee] text-[#102d28]">
      <header className="border-b border-white/10 bg-[#082b28] text-white">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 font-display text-lg font-semibold">J</span>
            <div><p className="text-[9px] font-bold uppercase tracking-[.19em] text-[#9fc9bc]">EVLV Partner Command</p><h1 className="mt-1 font-display text-xl font-semibold">Jordan Research</h1></div>
          </div>
          <div className="flex items-center gap-3"><span className="hidden rounded-full border border-[#89b8ab]/25 bg-[#89b8ab]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.12em] text-[#b9d9ce] sm:block">Concept preview</span><Link href="/" className="text-[9px] font-bold uppercase tracking-[.13em] text-white/65">Exit preview</Link></div>
        </div>
      </header>

      <div className="mx-auto grid min-w-0 max-w-[1600px] lg:grid-cols-[248px_1fr]">
        <aside className="min-w-0 border-b border-[#d4dfda] bg-white px-4 py-4 lg:min-h-[calc(100vh-81px)] lg:border-b-0 lg:border-r lg:p-5">
          <nav className="flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-1 lg:overflow-visible">
            {navItems.map(([key, icon, label]) => <button key={key} onClick={() => setActive(key)} className={`flex min-w-max items-center gap-3 rounded-lg px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[.09em] lg:w-full ${active === key ? "bg-[#102d28] text-white" : "text-[#62716c] hover:bg-[#eef3f0]"}`}><i className={`${icon} text-base`} />{label}</button>)}
          </nav>
          <div className="mt-6 hidden rounded-2xl bg-[#edf3f0] p-5 lg:block"><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#567d72]">Your public link</p><p className="mt-3 break-all font-mono text-xs text-[#315d53]">evlvpartners.com/jordan</p><Link href="/templates/creator" className="mt-4 inline-flex text-[9px] font-bold uppercase tracking-[.12em] text-[#356f60]">Open microsite <i className="ri-arrow-right-up-line ml-1" /></Link></div>
          <div className="mt-4 hidden rounded-2xl border border-[#d7c49f] bg-[#fff8e9] p-5 lg:block"><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#806b43]">Partner level</p><div className="mt-3 flex items-end justify-between"><strong className="font-display text-2xl">Select</strong><span className="text-[10px] text-[#806b43]">72%</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#eadfc9]"><span className="block h-full w-[72%] rounded-full bg-[#b08b54]" /></div><p className="mt-3 text-[11px] leading-5 text-[#725f3f]">$420 in qualifying volume to the next reviewed level.</p></div>
        </aside>

        <main className="min-w-0 p-5 md:p-8 lg:p-10">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-[9px] font-bold uppercase tracking-[.19em] text-[#4c766b]">{active === "overview" ? "Today at a glance" : "Partner command"}</p><h2 className="mt-3 font-display text-3xl font-semibold capitalize tracking-[-.035em] md:text-5xl">{active === "assistant" ? "EVLV Assistant" : active}</h2></div><span className="rounded-full border border-[#cddad5] bg-white px-3 py-2 text-[9px] font-bold uppercase tracking-[.12em] text-[#567d72]"><i className="ri-checkbox-circle-fill mr-1 text-[#4d927f]" /> Storefront live</span></div>

            {active === "overview" && <Overview onNavigate={setActive} />}
            {active === "orders" && <OrdersPanel />}
            {active === "inventory" && <InventoryPanel />}
            {active === "microsite" && <MicrositePanel />}
            {active === "payments" && <PaymentsPanel />}
            {active === "assistant" && <AssistantPanel answer={answer} onAsk={setAnswer} />}
          </div>
        </main>
      </div>
    </div>
  );
}

function Overview({ onNavigate }: { onNavigate: (tab: TabKey) => void }) {
  const metrics = [["Orders to confirm", "1", "ri-time-line"], ["Available units", "35", "ri-box-3-line"], ["Orders this month", "18", "ri-shopping-bag-3-line"], ["Microsite visits", "1,248", "ri-line-chart-line"]];
  return <>
    <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{metrics.map(([label, value, icon]) => <article key={label} className="rounded-2xl border border-[#d5dfda] bg-white p-5 shadow-[0_12px_35px_rgba(16,45,40,.05)]"><div className="flex items-center justify-between"><p className="text-[9px] font-bold uppercase tracking-[.13em] text-[#6b7d77]">{label}</p><i className={`${icon} text-lg text-[#4d8274]`} /></div><strong className="mt-5 block font-display text-4xl font-semibold">{value}</strong><p className="mt-2 text-[10px] text-[#81908b]">Sample preview data</p></article>)}</div>
    <div className="mt-5 grid gap-5 xl:grid-cols-[1.4fr_.6fr]">
      <section className="overflow-hidden rounded-2xl border border-[#d5dfda] bg-white"><PanelHead title="Recent orders" action="View all" onClick={() => onNavigate("orders")} /><OrderRows /></section>
      <section className="rounded-2xl bg-[#102d28] p-6 text-white"><p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#9fc9bc]">EVLV Assistant</p><h3 className="mt-5 font-display text-2xl font-semibold">Two things need attention.</h3><p className="mt-3 text-sm leading-6 text-white/60">Confirm one customer payment and review your GHK-CU reorder threshold.</p><button onClick={() => onNavigate("assistant")} className="mt-7 inline-flex rounded-lg bg-[#e5c494] px-5 py-3 text-[9px] font-bold uppercase tracking-[.13em] text-[#102d28]">Open assistant</button></section>
    </div>
    <section className="mt-5 overflow-hidden rounded-2xl border border-[#d5dfda] bg-white"><PanelHead title="Inventory pulse" action="Manage inventory" onClick={() => onNavigate("inventory")} /><div className="grid gap-px bg-[#dce4e0] sm:grid-cols-2 xl:grid-cols-4">{stock.map((item) => <StockCard key={item.sku} item={item} />)}</div></section>
  </>;
}

function OrdersPanel() { return <section className="mt-8 overflow-hidden rounded-2xl border border-[#d5dfda] bg-white"><PanelHead title="All partner orders" action="Export preview" /><OrderRows detailed /></section>; }

function OrderRows({ detailed = false }: { detailed?: boolean }) { return <div className="divide-y divide-[#e4e9e6]">{orders.map((order) => <article key={order.id} className="grid gap-3 px-5 py-5 md:grid-cols-[.7fr_.8fr_1.4fr_.7fr_1fr] md:items-center"><div><p className="font-mono text-xs font-semibold">{order.id}</p><p className="mt-1 text-[10px] text-[#87938f]">Today · 10:42</p></div><p className="text-sm font-medium">{order.customer}</p><p className="text-xs text-[#687770]">{order.items}</p><strong className="text-sm">{order.total}</strong><div className="flex items-center justify-between gap-3"><Status tone={order.tone}>{order.state}</Status>{detailed && <button className="text-[9px] font-bold uppercase tracking-[.11em] text-[#356f60]">Open</button>}</div></article>)}</div>; }

function InventoryPanel() { return <><div className="mt-8 flex flex-wrap justify-between gap-3 rounded-2xl border border-[#d5dfda] bg-white p-5"><div><p className="text-[9px] font-bold uppercase tracking-[.15em] text-[#567d72]">Available partner inventory</p><p className="mt-2 text-sm text-[#687770]">Units shown here are tied to fulfilled starter and reorder batches.</p></div><button className="rounded-lg bg-[#102d28] px-5 py-3 text-[9px] font-bold uppercase tracking-[.12em] text-white">Build reorder</button></div><div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stock.map((item) => <StockCard key={item.sku} item={item} standalone />)}</div></>; }

function StockCard({ item, standalone = false }: { item: typeof stock[number]; standalone?: boolean }) { return <article className={`${standalone ? "rounded-2xl border border-[#d5dfda]" : ""} bg-white p-5`}><div className="relative mx-auto aspect-square max-w-[155px]"><Image src={item.image} alt={item.name} fill sizes="155px" className="object-contain" /></div><p className="mt-4 text-[9px] font-bold uppercase tracking-[.13em] text-[#789088]">{item.sku}</p><h3 className="mt-2 font-display text-lg font-semibold">{item.name}</h3><div className="mt-4 flex items-center justify-between"><span className="text-xs text-[#687770]">Available</span><strong className={item.units <= 5 ? "text-[#a85b3f]" : "text-[#356f60]"}>{item.units} units</strong></div></article>; }

function MicrositePanel() { return <div className="mt-8 grid gap-5 xl:grid-cols-[1.1fr_.9fr]"><section className="overflow-hidden rounded-2xl border border-[#d5dfda] bg-white"><div className="relative aspect-[16/9]"><Image src="/images/ambassadors/hero-creator.webp" alt="Creator microsite preview" fill sizes="(max-width: 1280px) 100vw, 700px" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#082b28]/80 to-transparent" /><div className="absolute inset-x-5 bottom-5 text-white"><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#b5d3ca]">Creator template</p><h3 className="mt-2 font-display text-3xl font-semibold">Jordan Research</h3></div></div><div className="flex flex-wrap items-center justify-between gap-3 p-5"><div><p className="font-mono text-xs text-[#356f60]">evlvpartners.com/jordan</p><p className="mt-1 text-[10px] text-[#82908c]">Last published today at 09:16</p></div><Link href="/templates/creator" className="rounded-lg bg-[#102d28] px-5 py-3 text-[9px] font-bold uppercase tracking-[.12em] text-white">Open site</Link></div></section><section className="rounded-2xl border border-[#d5dfda] bg-white p-6"><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#567d72]">Storefront controls</p><div className="mt-5 space-y-3"><Control label="Public catalogue" value="4 products" /><Control label="Template" value="Creator" /><Control label="Order intake" value="Active" /><Control label="Payment display" value="Approved methods" /></div><button className="mt-6 w-full rounded-lg border border-[#cbd8d3] px-5 py-3 text-[9px] font-bold uppercase tracking-[.12em]">Edit microsite</button></section></div>; }

function PaymentsPanel() { return <div className="mt-8 grid gap-5 xl:grid-cols-2"><section className="rounded-2xl border border-[#d5dfda] bg-white p-6"><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#567d72]">Customer payment methods</p><div className="mt-5 space-y-3"><Payment name="Venmo Business" handle="@JordanResearch" state="Approved" /><Payment name="Zelle" handle="payments@jordan.example" state="In review" /><Payment name="Cash App Business" handle="Not connected" state="Eligibility check" /></div></section><section className="rounded-2xl border border-[#d7c49f] bg-[#fff8e9] p-7"><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#806b43]">Payment workflow</p><h3 className="mt-4 font-display text-3xl font-semibold">You remain in control.</h3><p className="mt-4 text-sm leading-7 text-[#725f3f]">New orders begin as awaiting payment. Confirm receipt only after the funds appear in your approved business account, then continue to fulfillment.</p><p className="mt-5 text-xs leading-6 text-[#806b43]">EVLV does not collect passwords or sign into partner payment accounts.</p></section></div>; }

function AssistantPanel({ answer, onAsk }: { answer: string; onAsk: (answer: string) => void }) { return <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_320px]"><section className="rounded-2xl bg-[#102d28] p-6 text-white md:p-8"><div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9fc9bc]/15 text-xl text-[#b9d9ce]"><i className="ri-sparkling-2-line" /></span><div><p className="font-display text-xl font-semibold">EVLV Operations Assistant</p><p className="text-xs text-white/45">Partner-specific help · Preview mode</p></div></div><div className="mt-8 rounded-2xl bg-white/[.07] p-5 text-sm leading-7 text-white/75">{answer}</div><div className="mt-5 flex flex-wrap gap-2">{Object.keys(promptAnswers).map((prompt) => <button key={prompt} onClick={() => onAsk(promptAnswers[prompt])} className="rounded-full border border-white/15 px-4 py-2 text-[9px] font-bold uppercase tracking-[.1em] text-white/70 hover:bg-white/10">{prompt}</button>)}</div><div className="mt-8 flex overflow-hidden rounded-xl bg-white"><input readOnly placeholder="Ask your partner assistant…" className="min-w-0 flex-1 px-4 text-sm text-[#102d28] outline-none" /><button className="bg-[#e5c494] px-5 py-4 text-[#102d28]"><i className="ri-arrow-up-line" /></button></div></section><aside className="rounded-2xl border border-[#d5dfda] bg-white p-6"><p className="text-[9px] font-bold uppercase tracking-[.16em] text-[#567d72]">Assistant boundaries</p><ul className="mt-5 space-y-4 text-xs leading-6 text-[#687770]"><li>✓ Platform and order help</li><li>✓ Approved content support</li><li>✓ Inventory and reorder guidance</li><li>✓ Documentation lookup</li><li>✕ No medical guidance</li><li>✕ No earnings guarantees</li></ul></aside></div>; }

function PanelHead({ title, action, onClick }: { title: string; action: string; onClick?: () => void }) { return <div className="flex items-center justify-between gap-4 border-b border-[#e1e7e4] px-5 py-4"><h3 className="font-display text-xl font-semibold">{title}</h3><button onClick={onClick} className="text-[9px] font-bold uppercase tracking-[.12em] text-[#356f60]">{action}</button></div>; }
function Status({ tone, children }: { tone: string; children: React.ReactNode }) { const colors = tone === "green" ? "bg-[#e3f1eb] text-[#2f7562]" : tone === "amber" ? "bg-[#fff1d9] text-[#8b6325]" : "bg-[#e5eef3] text-[#426979]"; return <span className={`rounded-full px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[.08em] ${colors}`}>{children}</span>; }
function Control({ label, value }: { label: string; value: string }) { return <div className="flex items-center justify-between gap-3 rounded-xl bg-[#f0f4f2] px-4 py-4"><span className="text-xs text-[#687770]">{label}</span><strong className="text-xs">{value}</strong></div>; }
function Payment({ name, handle, state }: { name: string; handle: string; state: string }) { return <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#f0f4f2] p-4"><div><strong className="text-sm">{name}</strong><p className="mt-1 text-xs text-[#72817c]">{handle}</p></div><span className="rounded-full bg-white px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[.09em] text-[#567d72]">{state}</span></div>; }

