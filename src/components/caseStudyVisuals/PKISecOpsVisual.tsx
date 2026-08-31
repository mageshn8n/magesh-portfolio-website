import { BrowserFrame } from "./DeviceFrames";

const swatches = [
  { name: "Primary", hex: "#1E2A3A" },
  { name: "Secondary", hex: "#F5D547" },
  { name: "Success", hex: "#1F9D55" },
  { name: "Warning", hex: "#E0A020" },
  { name: "Error", hex: "#D64545" },
  { name: "Info", hex: "#3B6EF5" },
];

export default function PKISecOpsVisual() {
  return (
    <BrowserFrame url="pkisecops.internal/design-system">
      <div className="flex flex-col gap-5 p-5">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-white/40">Color System</p>
          <div className="flex flex-wrap gap-2">
            {swatches.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-1">
                <span className="block h-8 w-8 rounded-md border border-white/10" style={{ background: s.hex }} />
                <span className="text-[8px] text-white/40">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-white/40">Buttons</p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md px-3 py-1.5 text-[11px] font-semibold text-white" style={{ background: "#1E2A3A" }}>
              Primary
            </span>
            <span className="rounded-md px-3 py-1.5 text-[11px] font-semibold text-[#1E2A3A]" style={{ background: "#F5D547" }}>
              Secondary
            </span>
            <span className="rounded-md border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-white/70">
              Ghost
            </span>
            <span className="rounded-md px-3 py-1.5 text-[11px] font-semibold text-white" style={{ background: "#D64545" }}>
              Destructive
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[9px] uppercase tracking-wide text-white/40">Security Score</p>
            <p className="mt-1 text-lg font-bold text-white">94</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[9px] uppercase tracking-wide text-white/40">Active Threats</p>
            <p className="mt-1 text-lg font-bold" style={{ color: "#D64545" }}>
              12
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[9px] uppercase tracking-wide text-white/40">Active Users</p>
            <p className="mt-1 text-lg font-bold text-white">147</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
