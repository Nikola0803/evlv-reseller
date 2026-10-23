"use client";

import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  audience: string;
  website: string;
  experience: string;
  company: string;
};

const EMPTY_FORM: FormState = {
  fullName: "",
  email: "",
  phone: "",
  businessName: "",
  audience: "",
  website: "",
  experience: "",
  company: "",
};

export function ApplyPreview() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update(key: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!agreed) {
      setError("Please confirm the research-use-only and review terms.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.error || "We could not submit your application. Please try again.");
      }
      setSubmitted(true);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "We could not submit your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return <div className="rounded-2xl border border-[#b7d1c8] bg-[#e8f2ee] p-7 text-[#102d28]" role="status">
      <p className="text-[9px] font-bold uppercase tracking-[.17em] text-[#477b6e]">Application received</p>
      <h3 className="mt-3 font-display text-3xl font-semibold">Your review request is with EVLV.</h3>
      <p className="mt-3 text-sm leading-7 text-[#61706b]">Our team will review the information and contact qualified applicants directly at the email provided.</p>
    </div>;
  }

  return <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
    <Field label="Full name" name="fullName" placeholder="Your name" value={form.fullName} onChange={(value) => update("fullName", value)} required />
    <Field label="Email" name="email" placeholder="you@business.com" type="email" value={form.email} onChange={(value) => update("email", value)} required />
    <Field label="Phone" name="phone" placeholder="Best direct number" type="tel" value={form.phone} onChange={(value) => update("phone", value)} />
    <Field label="Business, gym, or social name" name="businessName" placeholder="Your current identity" value={form.businessName} onChange={(value) => update("businessName", value)} />
    <Field label="People you already reach" name="audience" placeholder="Local network, gym, or online audience" value={form.audience} onChange={(value) => update("audience", value)} required />
    <Field label="Website or primary social profile" name="website" placeholder="https://" type="url" value={form.website} onChange={(value) => update("website", value)} />
    <label className="sm:col-span-2"><Label>What do you know about the category, and how would you sell?</Label><textarea name="experience" required maxLength={2000} rows={5} value={form.experience} onChange={(event) => update("experience", event.target.value)} placeholder="Tell us about your experience, who already trusts you, and whether you would sell directly, online, or both." className="mt-2 w-full rounded-xl border border-white/15 bg-white/[.07] px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-white/35 focus:border-[#9fc9bc]" /></label>
    <input name="company" value={form.company} onChange={(event) => update("company", event.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
    <label className="sm:col-span-2 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[.04] p-4 text-xs leading-6 text-white/60"><input required type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} className="mt-1 accent-[#9fc9bc]" />I understand access is reviewed, products are research-use-only, and the program does not guarantee income.</label>
    {error && <p className="sm:col-span-2 rounded-xl border border-red-300/30 bg-red-950/30 p-4 text-sm leading-6 text-red-100" role="alert">{error}</p>}
    <button disabled={submitting} className="min-h-14 rounded-lg bg-[#e5c494] px-7 text-[10px] font-bold uppercase tracking-[.14em] text-[#102d28] disabled:cursor-wait disabled:opacity-60 sm:col-span-2">{submitting ? "Submitting..." : "Request private review"}</button>
    <p className="text-center text-[10px] leading-5 text-white/40 sm:col-span-2">Your application is sent securely to the EVLV review team.</p>
  </form>;
}

function Label({ children }: { children: React.ReactNode }) { return <span className="text-[9px] font-bold uppercase tracking-[.13em] text-[#b9d9ce]">{children}</span>; }
function Field({ label, name, placeholder, type = "text", required = false, value, onChange }: { label: string; name: string; placeholder: string; type?: string; required?: boolean; value: string; onChange: (value: string) => void }) { return <label><Label>{label}</Label><input name={name} required={required} type={type} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 h-12 w-full rounded-xl border border-white/15 bg-white/[.07] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#9fc9bc]" /></label>; }
