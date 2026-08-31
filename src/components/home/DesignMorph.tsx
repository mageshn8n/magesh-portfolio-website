"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../SectionHeading";
import WhisperingInfinityVisual from "../caseStudyVisuals/WhisperingInfinityVisual";

function SketchLayer() {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-8">
      <div className="h-6 w-2/3 rounded border border-dashed border-white/25" />
      <div className="mt-2 h-32 w-full rounded border border-dashed border-white/25" />
      <div className="h-3 w-full rounded border border-dashed border-white/20" />
      <div className="h-3 w-5/6 rounded border border-dashed border-white/20" />
      <div className="mt-3 h-9 w-32 rounded-full border border-dashed border-white/25" />
    </div>
  );
}

function WireframeLayer() {
  return (
    <div className="flex h-full w-full flex-col gap-3 p-8">
      <div className="h-6 w-2/3 rounded bg-white/10" />
      <div className="mt-2 h-32 w-full rounded bg-white/[0.06]" />
      <div className="h-3 w-full rounded bg-white/10" />
      <div className="h-3 w-5/6 rounded bg-white/10" />
      <div className="mt-3 h-9 w-32 rounded-full bg-[color:var(--color-accent)]/30" />
    </div>
  );
}

export default function DesignMorph() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.25"] });

  const sketchOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 1, 0]);
  const wireframeOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.65], [0, 1, 0]);
  const finalOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);
  const finalScale = useTransform(scrollYProgress, [0.55, 0.85], [0.94, 1]);

  return (
    <section className="container-edge container-max border-t border-[color:var(--color-border)] py-24 sm:py-32">
      <SectionHeading eyebrow="Design" title="Sketch becomes system." />

      <div ref={ref} className="mx-auto mt-14 max-w-lg">
        <div className="card relative aspect-[4/5] w-full overflow-hidden">
          <motion.div style={{ opacity: sketchOpacity }} className="absolute inset-0">
            <SketchLayer />
          </motion.div>
          <motion.div style={{ opacity: wireframeOpacity }} className="absolute inset-0">
            <WireframeLayer />
          </motion.div>
          <motion.div
            style={{ opacity: finalOpacity, scale: finalScale }}
            className="absolute inset-0 flex items-center justify-center p-4"
          >
            <WhisperingInfinityVisual />
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[color:var(--color-fg-muted)]">
          <span>Sketch</span>
          <span className="h-px w-6 bg-[color:var(--color-border)]" />
          <span>Wireframe</span>
          <span className="h-px w-6 bg-[color:var(--color-border)]" />
          <span>Final product</span>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/work/whispering-infinity-teacher-app"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-fg)]"
        >
          See the full case study
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
