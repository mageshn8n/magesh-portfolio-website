import type { ReactNode } from "react";

// Scales one of the full-size case-study visuals (built for a detail-page
// hero) down to fit inside a small grid card, so the Work grid shows a real
// preview instead of a generic placeholder for every featured case study.
export default function CaseStudyThumb({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[color:var(--color-surface)]">
      <div className="w-[760px] flex-none origin-center scale-[0.46]">{children}</div>
    </div>
  );
}
