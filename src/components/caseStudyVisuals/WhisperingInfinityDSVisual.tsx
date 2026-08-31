import { BrowserFrame } from "./DeviceFrames";

const purpleScale = ["#F5F3FF", "#DDD6FE", "#C4B5FD", "#A78BFA", "#8B5CF6", "#7C3AED", "#6D28D9", "#5B21B6", "#4C1D95"];

const gradients = [
  { name: "Brand Primary", css: "linear-gradient(135deg, #7C3AED, #EC4899)" },
  { name: "Purple Depth", css: "linear-gradient(135deg, #4C1D95, #7C3AED)" },
  { name: "Lavender Glow", css: "linear-gradient(135deg, #C4B5FD, #F5D0FE)" },
];

export default function WhisperingInfinityDSVisual() {
  return (
    <BrowserFrame url="whisperinginfinity.app/design-system">
      <div className="flex flex-col gap-5 p-5">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-white/40">Purple Scale</p>
          <div className="flex overflow-hidden rounded-md">
            {purpleScale.map((hex) => (
              <span key={hex} className="h-6 flex-1" style={{ background: hex }} />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-white/40">Gradients</p>
          <div className="flex flex-wrap gap-2">
            {gradients.map((g) => (
              <div key={g.name} className="flex flex-col items-center gap-1">
                <span className="block h-8 w-14 rounded-md" style={{ background: g.css }} />
                <span className="text-[8px] text-white/40">{g.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-white/40">Buttons</p>
          <div className="flex flex-wrap gap-2">
            <span
              className="rounded-full px-3 py-1.5 text-[11px] font-semibold text-white"
              style={{ background: "#7C3AED" }}
            >
              Primary
            </span>
            <span
              className="rounded-full px-3 py-1.5 text-[11px] font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}
            >
              Gradient
            </span>
            <span className="rounded-full border border-[#7C3AED]/50 px-3 py-1.5 text-[11px] font-semibold text-[#C4B5FD]">
              Outline
            </span>
          </div>
        </div>

        <div className="rounded-lg p-3 text-white" style={{ background: "linear-gradient(135deg, #7C3AED, #EC4899)" }}>
          <p className="text-lg font-bold">50K+</p>
          <p className="text-[10px] opacity-80">Total conversations across all programs</p>
        </div>
      </div>
    </BrowserFrame>
  );
}
