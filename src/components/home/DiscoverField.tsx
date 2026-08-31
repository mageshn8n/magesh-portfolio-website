"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";

type FragmentDef = {
  kind: "rect" | "dot" | "line" | "label";
  top: string;
  left: string;
  scatter: { x: number; y: number; rotate: number };
  label?: string;
  delay?: number;
};

// Loosely scattered "reference" fragments living in the hero's margins —
// they settle into place as the visitor scrolls, and three labels resolve
// once they have. Positioned to avoid the headline, portrait and stat rows.
const fragments: FragmentDef[] = [
  { kind: "rect", top: "6%", left: "2%", scatter: { x: -40, y: -30, rotate: -14 } },
  { kind: "dot", top: "14%", left: "18%", scatter: { x: 24, y: -18, rotate: 0 } },
  { kind: "rect", top: "4%", left: "58%", scatter: { x: 30, y: -24, rotate: 10 } },
  { kind: "line", top: "10%", left: "82%", scatter: { x: 26, y: -16, rotate: -8 } },
  { kind: "dot", top: "48%", left: "1%", scatter: { x: -30, y: 10, rotate: 0 } },
  { kind: "rect", top: "58%", left: "4%", scatter: { x: -26, y: 22, rotate: 12 } },
  { kind: "dot", top: "2%", left: "38%", scatter: { x: 10, y: -28, rotate: 0 } },
  { kind: "line", top: "70%", left: "90%", scatter: { x: 34, y: 20, rotate: 6 } },
  { kind: "label", top: "6%", left: "84%", scatter: { x: 22, y: -14, rotate: 0 }, label: "Discover", delay: 0 },
  { kind: "label", top: "50%", left: "-2%", scatter: { x: -24, y: 12, rotate: 0 }, label: "Observe", delay: 0.08 },
  { kind: "label", top: "72%", left: "3%", scatter: { x: -20, y: 18, rotate: 0 }, label: "Understand", delay: 0.16 },
];

function Fragment({ def, progress }: { def: FragmentDef; progress: MotionValue<number> }) {
  const isLabel = def.kind === "label";
  const labelStart = 0.62 + (def.delay ?? 0);

  const x = useTransform(progress, [0, 1], [def.scatter.x, 0]);
  const y = useTransform(progress, [0, 1], [def.scatter.y, 0]);
  const rotate = useTransform(progress, [0, 1], [def.scatter.rotate, 0]);
  const opacity = useTransform(
    progress,
    isLabel ? [labelStart, labelStart + 0.16] : [0, 0.15, 0.85, 1],
    isLabel ? [0, 0.85] : [0, 0.55, 0.55, 0.3]
  );

  if (isLabel) {
    return (
      <motion.span
        style={{ position: "absolute", top: def.top, left: def.left, x, y, opacity }}
        className="label !text-[10px] whitespace-nowrap"
      >
        {def.label}
      </motion.span>
    );
  }

  return (
    <motion.div style={{ position: "absolute", top: def.top, left: def.left, x, y, rotate, opacity }}>
      {def.kind === "rect" && (
        <div className="h-7 w-12 rounded-[3px] border border-white/15 bg-white/[0.03]" />
      )}
      {def.kind === "dot" && <div className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />}
      {def.kind === "line" && <div className="h-px w-10 bg-white/20" />}
    </motion.div>
  );
}

export default function DiscoverField({ progress }: { progress: MotionValue<number> }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      {fragments.map((f, i) => (
        <Fragment key={i} def={f} progress={progress} />
      ))}
    </div>
  );
}
