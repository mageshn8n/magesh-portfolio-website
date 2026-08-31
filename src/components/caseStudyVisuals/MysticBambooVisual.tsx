import { BrowserFrame, MockButton } from "./DeviceFrames";

const tiers = [
  { name: "Introductory", price: "Free" },
  { name: "Beginner", price: "₹4,934" },
  { name: "Intermediate", price: "₹9,950" },
  { name: "Advanced", price: "₹12,258" },
  { name: "Bundle", price: "₹18,999" },
];

export default function MysticBambooVisual() {
  return (
    <BrowserFrame url="themysticbamboo.com">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <span className="text-xs font-bold tracking-tight text-[color:var(--color-fg)]">The Mystic Bamboo</span>
        <div className="hidden gap-4 text-[10px] text-[color:var(--color-fg-muted)] sm:flex">
          <span>About</span>
          <span>Offerings</span>
          <span>Events</span>
          <span>Blog</span>
        </div>
      </div>

      <div className="px-6 py-10 text-center">
        <div className="mx-auto h-3 w-72 max-w-full rounded bg-white/70" />
        <div className="mx-auto mt-3 h-2 w-56 max-w-full rounded bg-white/25" />
        <div className="mx-auto mt-6 w-fit">
          <MockButton>Enrol Now</MockButton>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 p-5 sm:grid-cols-5">
        {tiers.map((tier) => (
          <div key={tier.name} className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-center">
            <p className="text-[10px] font-semibold text-[color:var(--color-fg)]">{tier.name}</p>
            <p className="mt-1 text-[10px] text-[color:var(--color-accent)]">{tier.price}</p>
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}
