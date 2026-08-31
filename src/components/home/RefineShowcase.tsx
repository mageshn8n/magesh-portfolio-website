"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../SectionHeading";
import SahajTTPVisual from "../caseStudyVisuals/SahajTTPVisual";

export default function RefineShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const wipe = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);
  const wipeClip = useTransform(wipe, (v) => `inset(0 0 0 ${v})`);

  return (
    <section className="container-edge container-max border-t border-[color:var(--color-border)] py-24 sm:py-32">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Refine" title="Rough becomes refined." />
        <p className="max-w-xs text-sm text-[color:var(--color-fg-muted)]">
          Same structure, more discipline — typography, spacing and motion tightened until nothing's arbitrary.
        </p>
      </div>

      <div ref={ref} className="card relative mt-14 aspect-[16/9] w-full overflow-hidden">
        <div className="absolute inset-0 flex flex-col gap-3 bg-[color:var(--color-surface)] p-8">
          <div className="h-5 w-1/3 rounded border border-dashed border-white/25" />
          <div className="mt-2 grid grid-cols-3 gap-3">
            <div className="h-20 rounded border border-dashed border-white/20" />
            <div className="h-20 rounded border border-dashed border-white/20" />
            <div className="h-20 rounded border border-dashed border-white/20" />
          </div>
          <div className="h-3 w-2/3 rounded border border-dashed border-white/20" />
          <div className="h-3 w-1/2 rounded border border-dashed border-white/20" />
        </div>

        <motion.div style={{ clipPath: wipeClip }} className="absolute inset-0 flex items-center justify-center p-6">
          <SahajTTPVisual />
        </motion.div>
      </div>

      <div className="mt-10 text-center">
        <Link href="/work" className="btn btn-secondary">
          See the finished systems →
        </Link>
      </div>
    </section>
  );
}
