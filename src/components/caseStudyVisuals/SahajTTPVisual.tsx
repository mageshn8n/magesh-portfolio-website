import { BrowserFrame } from "./DeviceFrames";

const remarks = [
  { who: "Recommending Teacher", status: "Approved", note: "Strong grasp of fundamentals, motivated candidate." },
  { who: "Country Coordinator", status: "Approved", note: "Consistent with RT's assessment. Recommended." },
  { who: "India Sahaj Desk", status: "Approved", note: "All documents verified and complete." },
];

export default function SahajTTPVisual() {
  return (
    <BrowserFrame url="portal.sahajttp.org/ttp-desk/final">
      <div className="flex min-h-[320px]">
        <div className="hidden w-40 flex-none flex-col gap-1 border-r border-white/10 p-4 sm:flex">
          <span className="mb-3 text-[10px] font-bold text-[color:var(--color-fg)]">SAHAJ TTP</span>
          <span className="rounded-md px-2 py-1.5 text-[10px] text-[color:var(--color-fg-muted)]">
            Assigned Applications
          </span>
          <span className="rounded-md bg-white/10 px-2 py-1.5 text-[10px] font-semibold text-[color:var(--color-fg)]">
            Final Review
          </span>
          <span className="rounded-md px-2 py-1.5 text-[10px] text-[color:var(--color-fg-muted)]">
            Reversal Requests
          </span>
        </div>
        <div className="flex-1 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-bold text-[color:var(--color-fg)]">Anjali Menon — Consolidated Trail</p>
            <span className="rounded-full bg-[#fff4e0]/10 px-2 py-1 text-[9px] font-semibold text-[#f5a623]">
              Awaiting Decision
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {remarks.map((r) => (
              <div key={r.who} className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-semibold text-[color:var(--color-fg)]">{r.who}</span>
                  <span className="text-[color:var(--color-success)]">{r.status}</span>
                </div>
                <p className="mt-1 text-[10px] text-[color:var(--color-fg-muted)]">{r.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <span className="rounded-md bg-[color:var(--color-success)] px-3 py-1.5 text-[10px] font-semibold text-white">
              Approve &amp; Certify
            </span>
            <span className="rounded-md border border-white/15 px-3 py-1.5 text-[10px] text-[color:var(--color-fg-muted)]">
              Reverse
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
