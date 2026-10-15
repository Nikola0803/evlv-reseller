import Image from "next/image";
import Link from "next/link";

export function Logo({ tone = "dark", className = "", imageClassName = "h-7 w-auto" }: { tone?: "dark" | "light"; className?: string; imageClassName?: string }) {
  return <Link href="/" aria-label="EVLV Partners home" className={`inline-flex shrink-0 items-center ${className}`}><Image src={tone === "light" ? "/logo/evlv-logo-light.png" : "/logo/evlv-logo-dark.png"} alt="EVLV" width={2172} height={724} priority className={imageClassName} /></Link>;
}
