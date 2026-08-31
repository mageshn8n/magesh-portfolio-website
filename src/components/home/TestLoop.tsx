"use client";

import { useRef } from "react";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../SectionHeading";

const nodes = [
  { label: "Version 01", sub: "First working prototype" },
  { label: "Feedback", sub: "Real users, real friction" },
  { label: "Version 02", sub: "Rebuilt around what broke" },
  { label: "Refinement", sub: "Polish where it counts" },
  { label: "Version 03", sub: "Ready to ship" },
];

function Node({ index, total, progress }: { index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total;
  const end = start + 0.5 / total;
  const opacity = useTransform(progress, [start, end], [0.25, 1]);
  const scale = useTransform(progress, [start, end], [0.9, 1]);
  const isAccent = index === total - 1;

  return (
    <motion.div style={{ opacity, scale }} className="flex flex-1 flex-col items-center gap-3 text-center">
      <span
        className="flex h-3 w-3 flex-none rounded-full"
        style={{ background: isAccent ? "var(--color-success)" : "var(--color-accent)" }}
      />
      <div>
        <p className="text-sm font-bold">{nodes[index].label}</p>
        <p className="mt-1 max-w-[9rem] text-xs text-[color:var(--color-fg-muted)]">{nodes[index].sub}</p>
      </div>
    </motion.div>
  );
}

export default function TestLoop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="test" className="container-edge container-max border-t border-[color:var(--color-border)] py-24 sm:py-32">
      <SectionHeading eyebrow="Test" title="Design is iterative, on purpose." />

      <div ref={ref} className="relative mt-16">
        <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-[color:var(--color-border)] sm:block" />
        <motion.div
          style={{ scaleX: lineScale, transformOrigin: "left" }}
          className="absolute left-0 right-0 top-[7px] hidden h-px bg-[color:var(--color-accent)] sm:block"
        />

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-4">
          {nodes.map((_, i) => (
            <Node key={i} index={i} total={nodes.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
