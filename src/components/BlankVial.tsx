import Image from "next/image";

const VIAL_IMAGE = "/images/catalog/blank-vial-photoreal-v1.png";

export function BlankVial({ className = "" }: { className?: string; cap?: "dark" | "silver" | "white" }) {
  return (
    <div className={`relative mx-auto h-full w-full ${className}`}>
      <Image
        src={VIAL_IMAGE}
        alt="Unbranded clear glass research vial"
        fill
        sizes="(max-width: 640px) 42vw, 220px"
        className="object-contain drop-shadow-[0_18px_18px_rgba(17,24,39,.2)]"
      />
    </div>
  );
}

export function BlankVialScene({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <div className={`relative h-full min-h-[320px] overflow-hidden ${dark ? "bg-[#162036]" : "bg-[#edf0f6]"}`}>
      <div className={`absolute inset-0 ${dark ? "bg-[radial-gradient(circle_at_66%_24%,rgba(91,146,207,.3),transparent_44%)]" : "bg-[radial-gradient(circle_at_66%_24%,rgba(255,255,255,.98),transparent_48%)]"}`} />
      <div className={`absolute bottom-[5%] left-[6%] right-[6%] ${compact ? "h-[72%]" : "h-[82%]"}`}>
        <div className="absolute bottom-0 left-[1%] h-[74%] w-[34%] -rotate-[6deg]"><BlankVial /></div>
        <div className="absolute bottom-0 left-[31%] z-10 h-full w-[38%]"><BlankVial /></div>
        <div className="absolute bottom-0 right-0 h-[79%] w-[35%] rotate-[5deg]"><BlankVial /></div>
      </div>
      <div className={`absolute inset-x-[7%] bottom-[4%] h-px ${dark ? "bg-white/15" : "bg-black/10"}`} />
    </div>
  );
}
