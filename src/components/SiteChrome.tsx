"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMicrositePreview = pathname.startsWith("/templates/");

  if (isMicrositePreview) return <main>{children}</main>;

  return <>
    <div className="bg-[#082b28] px-4 py-2 text-center text-[8px] font-bold uppercase tracking-[.17em] text-white/70">Independent partner commerce · Research use only · Application required</div>
    <header className="sticky top-0 z-50 border-b border-[#dce4df] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between px-5 md:px-8">
        <Link href="/" className="font-display text-2xl font-semibold tracking-[.28em]">EVLV</Link>
        <nav className="hidden items-center gap-7 text-[9px] font-bold uppercase tracking-[.13em] text-[#52645f] md:flex"><Link href="/#model">The model</Link><Link href="/#templates">Microsites</Link><Link href="/dashboard">Dashboard preview</Link><Link href="/#apply">Apply</Link></nav>
        <Link href="/setup?preview=1" className="rounded-full bg-[#102d28] px-5 py-3 text-[9px] font-bold uppercase tracking-[.12em] text-white">Preview setup</Link>
      </div>
    </header>
    <main>{children}</main>
    <footer className="bg-[#082b28] px-5 py-12 text-white"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 sm:flex-row"><div><p className="font-display text-2xl font-semibold tracking-[.22em]">EVLV</p><p className="mt-3 max-w-md text-xs leading-6 text-white/50">Private infrastructure for reviewed commerce partners. Research use only. No medical use or earnings guarantees.</p></div><div className="flex flex-wrap gap-6 text-[9px] font-bold uppercase tracking-[.12em] text-white/65"><Link href="/#templates">Microsites</Link><Link href="/dashboard">Dashboard</Link><Link href="/setup?preview=1">Onboarding</Link><Link href="/#apply">Apply</Link><a href="https://www.evlvpeptides.com/ambassadors" target="_blank" rel="noreferrer">Affiliate path ↗</a></div></div></footer>
  </>;
}
