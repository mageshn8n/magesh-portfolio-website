import { PhoneFrame } from "./DeviceFrames";

export default function JamieVisual() {
  return (
    <PhoneFrame>
      <div className="flex h-[440px] flex-col gap-4 px-4 pb-4 pt-8">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-wide text-[color:var(--color-fg-muted)]">
            Jamie
          </span>
          <div className="flex flex-col gap-1">
            <span className="h-px w-4 bg-white/40" />
            <span className="h-px w-4 bg-white/40" />
            <span className="h-px w-4 bg-white/40" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-accent)] to-[#8a8ff2] text-lg font-bold text-white">
            J
          </div>
          <p className="text-sm font-bold text-[color:var(--color-fg)]">Welcome back, John</p>
          <p className="text-[11px] text-[color:var(--color-fg-muted)]">
            I&rsquo;m Jamie, your software advisor. How can I help?
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {[
            "What version of Spectrum Protect am I licensed for?",
            "Show me my license agreement",
            "How is PVU calculated?",
          ].map((q) => (
            <div
              key={q}
              className="rounded-lg bg-[color:var(--color-accent)]/15 px-3 py-2.5 text-[11px] font-medium text-[color:var(--color-accent)]"
            >
              {q}
            </div>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 rounded-lg bg-white/[0.05] px-3 py-2.5">
          <span className="flex-1 text-[10px] text-[color:var(--color-fg-faint)]">Ask Jamie anything…</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-[9px] text-white">
            ●
          </span>
        </div>
      </div>
    </PhoneFrame>
  );
}
