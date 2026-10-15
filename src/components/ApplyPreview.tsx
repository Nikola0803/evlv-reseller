"use client";

import { FormEvent, useState } from "react";

export function ApplyPreview() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) return <div className="rounded-2xl border border-[#b7d1c8] bg-[#e8f2ee] p-7"><p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#477b6e]">Application preview complete</p><h3 className="mt-3 font-display text-3xl font-semibold">The review flow is ready.</h3><p className="mt-3 text-sm leading-7 text-[#61706b]">This standalone preview is intentionally not connected to the EVLV storefront or CRM yet. Your information was not transmitted.</p><button onClick={() => setSubmitted(false)} className="mt-5 text-[9px] font-bold uppercase tracking-[.12em] text-[#356f60]">Return to form</button></div>;

  return <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
    <Field label="Full name" placeholder="Your name" required />
    <Field label="Email" placeholder="you@business.com" type="email" required />
    <Field label="Business, gym, or social name" placeholder="Your current public or local identity" />
    <Field label="People you already reach" placeholder="Local network, gym community, social circle…" />
    <label className="sm:col-span-2"><Label>What do you already know about this category?</Label><textarea required rows={5} placeholder="Tell us about your category experience, the customers who trust you, and how you would sell responsibly in person." className="mt-2 w-full rounded-xl border border-white/15 bg-white/[.07] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-white/35 focus:border-[#9fc9bc]" /></label>
    <label className="sm:col-span-2 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[.04] p-4 text-xs leading-6 text-white/60"><input required type="checkbox" className="mt-1 accent-[#9fc9bc]" />I understand access is reviewed, products are research-use-only, and the program does not guarantee income.</label>
    <button className="min-h-14 rounded-lg bg-[#e5c494] px-7 text-[10px] font-bold uppercase tracking-[.14em] text-[#102d28] sm:col-span-2">Request private review</button>
    <p className="text-center text-[10px] leading-5 text-white/40 sm:col-span-2">Preview mode: this form does not transmit information yet.</p>
  </form>;
}

function Label({ children }: { children: React.ReactNode }) { return <span className="text-[9px] font-bold uppercase tracking-[.13em] text-[#b9d9ce]">{children}</span>; }
function Field({ label, placeholder, type = "text", required = false }: { label: string; placeholder: string; type?: string; required?: boolean }) { return <label><Label>{label}</Label><input required={required} type={type} placeholder={placeholder} className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-white/[.07] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#9fc9bc]" /></label>; }
