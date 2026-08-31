import { MockButton, MockChip, MockField, PhoneFrame } from "./DeviceFrames";

export default function NammaTransitVisual() {
  return (
    <PhoneFrame>
      <div className="flex h-[440px] flex-col gap-3 px-4 pb-4 pt-8">
        <div>
          <p className="text-sm font-bold text-[color:var(--color-fg)]">Good morning 👋</p>
          <p className="text-[11px] text-[color:var(--color-fg-muted)]">Where are you headed today?</p>
        </div>

        <MockField label="From" value="Current location" />
        <MockField label="To" value="Koramangala, 5th Block" />

        <div className="flex gap-2">
          <MockChip active>🚌 Bus</MockChip>
          <MockChip active>🚇 Metro</MockChip>
          <MockChip>🛺 Feeder</MockChip>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-semibold text-[color:var(--color-fg)]">Metro + Feeder bus</span>
            <span className="font-semibold text-[color:var(--color-accent)]">₹38</span>
          </div>
          <div className="mt-1 flex items-center justify-between text-[9px] text-[color:var(--color-fg-muted)]">
            <span>34 min · 2 changes</span>
            <span className="text-[color:var(--color-success)]">Least crowded</span>
          </div>
        </div>

        <div className="mt-auto">
          <MockButton>Find my route</MockButton>
        </div>
      </div>
    </PhoneFrame>
  );
}
