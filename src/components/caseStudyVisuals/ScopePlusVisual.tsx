import { BrowserFrame } from "./DeviceFrames";

const rows = [
  { asset: "SRV-2201", type: "Server", status: "Active" },
  { asset: "SRV-2202", type: "Server", status: "Active" },
  { asset: "NET-0417", type: "Switch", status: "Retired" },
];

export default function ScopePlusVisual() {
  return (
    <BrowserFrame url="scopeplus.internal/assets">
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex-1 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] text-[color:var(--color-fg-muted)]">
            Search assets…
          </div>
          <span className="rounded-md border border-white/15 px-2.5 py-1.5 text-[10px] text-[color:var(--color-fg-muted)]">
            Filter
          </span>
        </div>

        <div className="overflow-hidden rounded-lg border border-white/10">
          <div className="grid grid-cols-3 gap-2 border-b border-white/10 bg-white/[0.03] px-3 py-2 text-[9px] font-semibold uppercase tracking-wide text-[color:var(--color-fg-faint)]">
            <span>Asset</span>
            <span>Type</span>
            <span>Status</span>
          </div>
          {rows.map((r) => (
            <div
              key={r.asset}
              className="grid grid-cols-3 gap-2 border-b border-white/5 px-3 py-2 text-[10px] text-[color:var(--color-fg-muted)] last:border-0"
            >
              <span className="text-[color:var(--color-fg)]">{r.asset}</span>
              <span>{r.type}</span>
              <span className={r.status === "Active" ? "text-[color:var(--color-success)]" : "text-[color:var(--color-fg-faint)]"}>
                {r.status}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-start gap-2 rounded-lg border border-[color:var(--color-accent)]/40 bg-[color:var(--color-accent)]/10 p-2.5">
          <span className="mt-0.5 flex size-4 flex-none items-center justify-center rounded-full bg-[color:var(--color-accent)] text-[9px] font-bold text-white">
            !
          </span>
          <p className="text-[9px] text-[color:var(--color-fg-muted)]">
            Heuristic finding: filter state isn&apos;t visible once applied.
          </p>
        </div>
      </div>
    </BrowserFrame>
  );
}
