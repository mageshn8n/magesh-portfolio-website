import { BrowserFrame } from "./DeviceFrames";

const nav = ["Dashboard", "Patients", "Appointments", "Consultations", "Doctors", "Billing"];

const kpis = [
  { label: "Total Patients", value: "40" },
  { label: "Appointments", value: "50" },
  { label: "Revenue", value: "₹10,881" },
  { label: "Outstanding", value: "₹27,336" },
];

const bars = [42, 58, 34, 62, 80, 66, 91];

export default function HMSVisual() {
  return (
    <BrowserFrame url="abchealthcare.app/dashboard">
      <div className="flex min-h-[360px]">
        <div className="hidden w-36 flex-none flex-col gap-1 border-r border-white/10 p-3 sm:flex">
          <span className="mb-3 flex items-center gap-1.5 text-[10px] font-bold text-[color:var(--color-fg)]">
            <span className="flex size-4 items-center justify-center rounded-md bg-[#1F4A57] text-[8px] text-white">+</span>
            ABC Healthcare
          </span>
          {nav.map((item, i) => (
            <span
              key={item}
              className={
                i === 0
                  ? "rounded-md bg-white/10 px-2 py-1.5 text-[10px] font-semibold text-[color:var(--color-fg)]"
                  : "rounded-md px-2 py-1.5 text-[10px] text-[color:var(--color-fg-muted)]"
              }
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex-1 p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-bold text-[color:var(--color-fg)]">Welcome, Meera</p>
            <span className="rounded-full border border-white/10 px-2 py-1 text-[8px] text-[color:var(--color-fg-muted)]">
              All Branches
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                <p className="text-[7px] uppercase tracking-wide text-[color:var(--color-fg-faint)]">{k.label}</p>
                <p className="mt-1 text-[13px] font-bold text-[color:var(--color-fg)]">{k.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <p className="mb-2 text-[8px] uppercase tracking-wide text-[color:var(--color-fg-faint)]">Revenue trend</p>
            <div className="flex h-16 items-end gap-1.5">
              {bars.map((h, i) => (
                <span key={i} className="flex-1 rounded-sm bg-[#C1592B]/70" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
