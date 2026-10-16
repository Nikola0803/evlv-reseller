export function BlankVial({ className = "", cap = "dark" }: { className?: string; cap?: "dark" | "silver" | "white" }) {
  const capColor = cap === "silver" ? "from-[#f1f3f4] via-[#aeb5b9] to-[#70777b]" : cap === "white" ? "from-white via-[#e8ebec] to-[#bfc5c7]" : "from-[#34383b] via-[#151719] to-[#050607]";
  return <div aria-label="Unbranded blank product vial" role="img" className={`relative mx-auto h-[82%] w-[58%] min-w-[54px] max-w-[150px] ${className}`}>
    <div className={`absolute left-[14%] right-[14%] top-0 h-[18%] rounded-t-[10px] border border-black/15 bg-gradient-to-r ${capColor} shadow-[0_4px_8px_rgba(0,0,0,.18)]`} />
    <div className="absolute left-[19%] right-[19%] top-[15%] h-[10%] border-x border-black/20 bg-gradient-to-r from-[#dfe4e5]/80 via-white/90 to-[#aeb8bb]/70" />
    <div className="absolute inset-x-[8%] bottom-0 top-[22%] overflow-hidden rounded-b-[18px] rounded-t-[9px] border border-[#9aa5aa]/55 bg-[linear-gradient(90deg,rgba(190,204,209,.35)_0%,rgba(255,255,255,.88)_25%,rgba(228,238,241,.38)_68%,rgba(142,158,164,.32)_100%)] shadow-[0_18px_28px_rgba(20,30,35,.16)]">
      <div className="absolute inset-y-0 left-[17%] w-[9%] bg-white/55 blur-[1px]" />
      <div className="absolute inset-x-0 bottom-0 h-[17%] bg-gradient-to-t from-[#d5dfe2]/80 to-transparent" />
    </div>
  </div>;
}

export function BlankVialScene({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return <div className={`relative h-full min-h-[320px] overflow-hidden ${dark ? "bg-[#0b302c]" : "bg-[#e8edeb]"}`}>
    <div className={`absolute inset-0 ${dark ? "bg-[radial-gradient(circle_at_70%_28%,rgba(122,190,171,.2),transparent_38%)]" : "bg-[radial-gradient(circle_at_70%_28%,rgba(255,255,255,.95),transparent_42%)]"}`} />
    <div className={`absolute bottom-[8%] left-[8%] right-[8%] ${compact ? "h-[70%]" : "h-[78%]"}`}>
      <div className="absolute bottom-0 left-[3%] h-[78%] w-[31%]"><BlankVial cap="silver" /></div>
      <div className="absolute bottom-0 left-[33%] h-full w-[34%]"><BlankVial cap="dark" /></div>
      <div className="absolute bottom-0 right-[1%] h-[84%] w-[31%]"><BlankVial cap="white" /></div>
    </div>
    <div className={`absolute inset-x-[7%] bottom-[5%] h-px ${dark ? "bg-white/15" : "bg-black/10"}`} />
  </div>;
}
