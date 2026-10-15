"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMicrositePreview = pathname.startsWith("/templates/");

  if (isMicrositePreview) return <main>{children}</main>;

  return <>
    <div className="bg-[#082b28] px-4 py-2.5 text-center text-[8px] font-bold uppercase tracking-[.17em] text-white/75">Official EVLV partner commerce · Research use only · Application required</div>
    <header className="sticky top-0 z-50 border-b border-[#dce4df] bg-[#fbfcf9]/95 shadow-[0_8px_30px_rgba(10,45,40,.04)] backdrop-blur">
      <div className="mx-auto flex h-[82px] max-w-[1500px] items-center justify-between px-5 md:px-8">
        <Logo imageClassName="h-8 w-auto md:h-9" />
        <nav className="hidden items-center gap-7 text-[9px] font-bold uppercase tracking-[.13em] text-[#52645f] lg:flex"><Link href="/#how">How it works</Link><Link href="/#templates">Storefronts</Link><Link href="/dashboard">Dashboard</Link><a href="https://www.evlvpeptides.com/ambassadors" target="_blank" rel="noreferrer">Affiliates ↗</a></nav>
        <div className="flex items-center gap-2"><a href="https://www.evlvpeptides.com" target="_blank" rel="noreferrer" className="hidden rounded-full border border-[#cbd7d2] px-5 py-3 text-[8px] font-bold uppercase tracking-[.13em] text-[#52645f] sm:inline-flex">Main EVLV site ↗</a><Link href="/#apply" className="rounded-full bg-[#102d28] px-5 py-3 text-[9px] font-bold uppercase tracking-[.12em] text-white">Apply now</Link></div>
      </div>
    </header>
    <main>{children}</main>
    <footer className="bg-[#062824] px-5 py-16 text-white"><div className="mx-auto max-w-[1400px]"><div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.25fr_.75fr_.9fr]"><div><Logo tone="light" imageClassName="h-9 w-auto" /><p className="mt-6 max-w-md text-xs leading-6 text-white/50">Official wholesale and commerce infrastructure for reviewed EVLV partners. Research use only. No medical use or earnings guarantees.</p><a href="https://verifiedpeptidereviews.com/vendors/evlv-peptides" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.05] px-4 py-3"><Image src="/images/brand/vpr-logo-clean.png" alt="Verified Peptide Reviews" width={118} height={40} className="h-6 w-auto brightness-0 invert" /><span className="text-[9px] font-semibold text-white/70"><b className="text-[#e5c494]">★★★★★</b><br />4.9 / 5 · 712 reviews</span></a></div><div><p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#9fc9bc]">Partner platform</p><div className="mt-5 flex flex-col gap-4 text-xs text-white/58"><Link href="/#how">How it works</Link><Link href="/#templates">Storefront concepts</Link><Link href="/dashboard">Dashboard preview</Link><Link href="/setup?preview=1">Onboarding preview</Link><Link href="/#apply">Apply for review</Link></div></div><div><p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#9fc9bc]">EVLV</p><div className="mt-5 flex flex-col gap-4 text-xs text-white/58"><a href="https://www.evlvpeptides.com" target="_blank" rel="noreferrer">Main website ↗</a><a href="https://www.evlvpeptides.com/ambassadors" target="_blank" rel="noreferrer">Affiliate & brand partners ↗</a><a href="https://www.evlvpeptides.com/wholesale" target="_blank" rel="noreferrer">Institutional wholesale ↗</a><a href="mailto:office@evlvpeptides.com">office@evlvpeptides.com</a><a href="tel:+15417095434">(541) 709-5434</a></div></div></div><div className="flex flex-col justify-between gap-3 pt-7 text-[9px] uppercase tracking-[.12em] text-white/35 sm:flex-row"><span>© EVLV {new Date().getFullYear()} · All rights reserved</span><span>Strictly for laboratory and analytical research</span></div></div></footer>
  </>;
}
