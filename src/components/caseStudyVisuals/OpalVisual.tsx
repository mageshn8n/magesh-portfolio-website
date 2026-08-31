import { BrowserFrame, MockButton } from "./DeviceFrames";

export default function OpalVisual() {
  return (
    <BrowserFrame url="opal.quality.ibm.com">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
        <span className="text-xs font-bold tracking-tight text-[color:var(--color-fg)]">OPAL</span>
        <div className="hidden gap-5 text-[10px] text-[color:var(--color-fg-muted)] sm:flex">
          <span>Quality Policy</span>
          <span>Process Library</span>
          <span>Tools</span>
          <span>Guidance</span>
        </div>
        <span className="h-5 w-5 rounded-full border border-white/20" />
      </div>

      <div className="bg-[color:var(--color-accent)]/10 px-6 py-8">
        <div className="h-3 w-48 rounded bg-white/70" />
        <div className="mt-2 h-3 w-32 rounded bg-white/70" />
        <div className="mt-4 h-2 w-64 rounded bg-white/30" />
        <div className="mt-6 w-fit">
          <MockButton>Browse library</MockButton>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-3">
        {["Quality Policy", "Process Library", "Guidance"].map((label) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-md bg-[color:var(--color-accent)]/20 text-[color:var(--color-accent)]">
              ◆
            </span>
            <p className="text-xs font-semibold text-[color:var(--color-fg)]">{label}</p>
            <div className="mt-2 h-2 w-full rounded bg-white/10" />
            <div className="mt-1.5 h-2 w-2/3 rounded bg-white/10" />
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}
