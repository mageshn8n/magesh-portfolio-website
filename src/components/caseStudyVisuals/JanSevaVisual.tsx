import { MockButton, MockChip, MockField, PhoneFrame } from "./DeviceFrames";

export default function JanSevaVisual() {
  return (
    <PhoneFrame>
      <div className="flex h-[440px] flex-col gap-3 px-4 pb-4 pt-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-[10px] font-bold text-[color:var(--color-fg)]">New Grievance</span>
          <span className="text-[10px] text-[color:var(--color-fg-faint)]">‹</span>
        </div>

        <p className="text-[9px] font-bold uppercase tracking-wide text-[color:var(--color-fg-faint)]">Category</p>
        <div className="grid grid-cols-3 gap-1.5">
          <MockChip active>Water</MockChip>
          <MockChip>Power</MockChip>
          <MockChip>Road</MockChip>
        </div>

        <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-[color:var(--color-fg-faint)]">
          Description
        </p>
        <MockField value="No drinking water supply for 4 days in Ward 7 colony near the school…" />

        <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-[color:var(--color-fg-faint)]">
          Attach evidence
        </p>
        <div className="flex gap-1.5">
          <div className="flex-1 rounded-lg border border-dashed border-white/15 py-2 text-center text-[9px] text-[color:var(--color-fg-faint)]">
            📷 Photo
          </div>
          <div className="flex-1 rounded-lg border border-dashed border-white/15 py-2 text-center text-[9px] text-[color:var(--color-fg-faint)]">
            🎙 Voice
          </div>
          <div className="flex-1 rounded-lg border border-dashed border-white/15 py-2 text-center text-[9px] text-[color:var(--color-fg-faint)]">
            📍 GPS
          </div>
        </div>

        <div className="mt-auto">
          <MockButton>Submit Grievance</MockButton>
        </div>
      </div>
    </PhoneFrame>
  );
}
