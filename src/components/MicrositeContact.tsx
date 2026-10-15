"use client";

import { FormEvent, useState } from "react";

export function MicrositeContact({ partner }: { partner: string }) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) return <div className="rounded-2xl border border-[#bfd8cf] bg-[#eaf3ef] p-7 text-[#15332d]"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#d6e9e2] text-xl text-[#397869]"><i className="ri-check-line" /></span><h3 className="mt-5 font-display text-2xl font-semibold">Message ready for {partner}.</h3><p className="mt-3 text-sm leading-7 text-[#5f716b]">This template preview keeps the message on this device. Live partner sites will route it directly to the partner workspace.</p><button onClick={() => setSent(false)} className="mt-5 text-[9px] font-bold uppercase tracking-[.14em] text-[#397869]">Return to contact form</button></div>;

  return <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
    <ContactField label="Name" placeholder="Your name" required />
    <ContactField label="Email" placeholder="you@email.com" type="email" required />
    <label className="sm:col-span-2"><span className="text-[8px] font-bold uppercase tracking-[.15em] text-[#678078]">How can we help?</span><textarea required rows={5} placeholder="Ask about an order, current inventory, or product documentation." className="mt-2 w-full rounded-xl border border-[#ccd8d3] bg-white px-4 py-3 text-sm leading-6 text-[#15332d] outline-none placeholder:text-[#8c9994] focus:border-[#397869]" /></label>
    <button className="min-h-13 rounded-lg bg-[#15332d] px-7 text-[9px] font-bold uppercase tracking-[.14em] text-white sm:col-span-2">Send message</button>
    <p className="text-center text-[9px] leading-5 text-[#82908b] sm:col-span-2">Template preview. No information is transmitted.</p>
  </form>;
}

function ContactField({ label, placeholder, type = "text", required = false }: { label: string; placeholder: string; type?: string; required?: boolean }) {
  return <label><span className="text-[8px] font-bold uppercase tracking-[.15em] text-[#678078]">{label}</span><input required={required} type={type} placeholder={placeholder} className="mt-2 h-12 w-full rounded-xl border border-[#ccd8d3] bg-white px-4 text-sm text-[#15332d] outline-none placeholder:text-[#8c9994] focus:border-[#397869]" /></label>;
}
