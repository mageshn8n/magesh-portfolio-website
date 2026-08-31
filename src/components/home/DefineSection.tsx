"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import { site } from "@/data/site";
import TextReveal from "../TextReveal";

const problems = [
  { text: "Unclear IA", top: "8%", left: "6%" },
  { text: "No feedback loop", top: "4%", left: "62%" },
  { text: "Fragmented flows", top: "70%", left: "4%" },
  { text: "Inconsistent UI", top: "78%", left: "68%" },
  { text: "Missing signals", top: "42%", left: "84%" },
];

function ProblemChip({ text, top, left, progress }: { text: string; top: string; left: string; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.35, 0.6], [0.9, 0.5, 0]);
  const scale = useTransform(progress, [0, 0.6], [1, 0.7]);
  const y = useTransform(progress, [0, 0.6], [0, -14]);

  return (
    <motion.span
      style={{ position: "absolute", top, left, opacity, scale, y }}
      className="chip !text-[11px] whitespace-nowrap"
    >
      {text}
    </motion.span>
  );
}

export default function DefineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.35"] });

  const insightOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const insightScale = useTransform(scrollYProgress, [0.3, 0.65], [0.92, 1]);

  return (
    <section className="container-edge container-max relative border-t border-[color:var(--color-border)] py-24 sm:py-32">
      <p className="label mb-6">Define</p>

      <div ref={ref} className="relative flex min-h-[220px] flex-col items-center justify-center text-center sm:min-h-[260px]">
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          {problems.map((p) => (
            <ProblemChip key={p.text} {...p} progress={scrollYProgress} />
          ))}
        </div>

        <motion.h2
          style={{ opacity: insightOpacity, scale: insightScale }}
          className="text-h2 max-w-2xl text-balance"
        >
          Many problems. One clear direction.
        </motion.h2>
      </div>

      <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-6 text-center">
        <p className="text-balance text-base leading-relaxed text-[color:var(--color-fg-muted)] sm:text-lg">
          <TextReveal as="span" type="words">
            {site.aboutParagraphs[0]}
          </TextReveal>
        </p>
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-fg)]"
        >
          More about me
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
