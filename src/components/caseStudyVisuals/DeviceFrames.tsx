import type { ReactNode } from "react";

export function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
      <div className="flex items-center gap-2 border-b border-[color:var(--color-border)] bg-black/20 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-2 rounded-md bg-white/5 px-3 py-1 text-[11px] text-[color:var(--color-fg-muted)]">
          {url}
        </span>
      </div>
      <div className="bg-[#0e0e11]">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[280px] rounded-[2rem] border border-[color:var(--color-border)] bg-black p-2.5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-[#0e0e11]">
        <div className="absolute left-1/2 top-2 h-4 w-20 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}

export function MockField({ label, value }: { label?: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
      {label && <p className="text-[9px] uppercase tracking-wide text-[color:var(--color-fg-faint)]">{label}</p>}
      <p className="text-[11px] text-[color:var(--color-fg-muted)]">{value}</p>
    </div>
  );
}

export function MockChip({ active = false, children }: { active?: boolean; children: ReactNode }) {
  return (
    <span
      className={
        active
          ? "rounded-full bg-[color:var(--color-accent)] px-2.5 py-1 text-[10px] font-semibold text-white"
          : "rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-[color:var(--color-fg-muted)]"
      }
    >
      {children}
    </span>
  );
}

export function MockButton({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg bg-[color:var(--color-accent)] px-3 py-2 text-center text-[11px] font-semibold text-white">
      {children}
    </div>
  );
}
