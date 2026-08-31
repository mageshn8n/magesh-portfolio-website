import { BrowserFrame } from "./DeviceFrames";

const swatches = [
  { name: "Primary", hex: "#111114" },
  { name: "Accent", hex: "#7C3AED" },
  { name: "Success", hex: "#16A34A" },
  { name: "Warning", hex: "#D97706" },
  { name: "Error", hex: "#DC2626" },
  { name: "Info", hex: "#2563EB" },
  { name: "Dept · TAOL", hex: "#0EA5A4" },
  { name: "Dept · SSWB", hex: "#DB2777" },
];

export default function EMSVisual() {
  return (
    <BrowserFrame url="ems.costcenter.internal/design-system">
      <div className="flex flex-col gap-5 p-5">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-white/40">Color Palette</p>
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
            <span className="rounded-md bg-[#111114] px-3 py-1.5 text-[11px] font-semibold text-white">Primary</span>
            <span className="rounded-md bg-[#7C3AED] px-3 py-1.5 text-[11px] font-semibold text-white">Accent</span>
            <span className="rounded-md border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-white/70">
              Outline
            </span>
            <span className="rounded-md bg-[#DC2626] px-3 py-1.5 text-[11px] font-semibold text-white">Destructive</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[9px] uppercase tracking-wide text-white/40">Documented Cases</p>
            <p className="mt-1 text-lg font-bold text-white">5</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[9px] uppercase tracking-wide text-white/40">Value Demonstrated</p>
            <p className="mt-1 text-lg font-bold text-[#16A34A]">$543K+</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
