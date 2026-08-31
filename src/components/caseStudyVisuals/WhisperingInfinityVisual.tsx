import { PhoneFrame } from "./DeviceFrames";

const groups = [
  { name: "Sahaj Samadhi Training", files: "24 files" },
  { name: "Sudarshan Kriya Refresher", files: "12 files" },
  { name: "Advanced Program", files: "31 files" },
];

export default function WhisperingInfinityVisual() {
  return (
    <PhoneFrame>
      <div className="flex h-[440px] flex-col gap-3 px-4 pb-4 pt-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-bold text-[color:var(--color-fg)]">Course Resources</span>
          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[color:var(--color-accent)] to-[color:var(--color-success)]" />
        </div>

        <div className="rounded-lg bg-white/[0.04] px-3 py-2 text-[10px] text-[color:var(--color-fg-faint)]">
          Search course groups…
        </div>

        <p className="text-[9px] font-bold uppercase tracking-wide text-[color:var(--color-fg-faint)]">
          Your course groups
        </p>
        <div className="flex gap-2 overflow-hidden">
          {groups.map((g) => (
            <div
              key={g.name}
              className="flex h-[62px] w-[84px] flex-none flex-col justify-between rounded-lg border border-white/10 bg-[color:var(--color-accent)]/10 p-2"
            >
              <span className="text-[8px] font-bold leading-tight text-[color:var(--color-fg)]">{g.name}</span>
              <span className="text-[7px] text-[color:var(--color-fg-faint)]">{g.files}</span>
            </div>
          ))}
        </div>

        <p className="mt-1 text-[9px] font-bold uppercase tracking-wide text-[color:var(--color-fg-faint)]">
          Recently added
        </p>
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 flex-none rounded-lg bg-gradient-to-br from-[#f6b892] to-[color:var(--color-accent)]" />
          <div className="flex-1">
            <p className="text-[10px] font-semibold text-[color:var(--color-fg)]">Session 4 — Guided Meditation</p>
            <p className="text-[9px] text-[color:var(--color-fg-faint)]">42 min · Audio</p>
          </div>
          <span className="rounded-full bg-[color:var(--color-success)]/15 px-2 py-0.5 text-[8px] font-bold text-[color:var(--color-success)]">
            Downloaded
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 flex-none rounded-lg bg-gradient-to-br from-[#86e0c0] to-[color:var(--color-accent)]" />
          <div className="flex-1">
            <p className="text-[10px] font-semibold text-[color:var(--color-fg)]">Session 5 — Q&amp;A</p>
            <p className="text-[9px] text-[color:var(--color-fg-faint)]">28 min · Audio</p>
          </div>
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[8px] font-bold text-[color:var(--color-fg-muted)]">
            Cloud
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}
