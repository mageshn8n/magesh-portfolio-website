"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { STAGES } from "./ProcessRail";
import TextReveal from "../TextReveal";

export default function LaunchSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.3"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0.55, 0.9], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.55, 0.9], [24, 0]);

  return (
    <section id="launch" className="container-edge container-max border-t border-[color:var(--color-border)] py-24 sm:py-32">
      <div ref={ref} className="flex flex-col items-center gap-3">
        <div className="relative w-full max-w-2xl">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[color:var(--color-border)]" />
          <motion.div
            style={{ scaleX: lineScale, transformOrigin: "left" }}
            className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-[color:var(--color-accent)]"
          />
          <div className="relative flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {STAGES.map((stage, i) => (
              <span
                key={stage}
                className={
                  i === STAGES.length - 1
                    ? "bg-[color:var(--color-bg)] px-2 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--color-accent)]"
                    : "bg-[color:var(--color-bg)] px-2 text-xs uppercase tracking-[0.14em] text-[color:var(--color-fg-faint)]"
                }
              >
                {stage}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div style={{ opacity: ctaOpacity, y: ctaY }} className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-8 text-center">
        <h2 className="text-hero text-balance">
          <TextReveal as="span" type="words">
            This is how I turn complex problems into meaningful products.
          </TextReveal>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className="btn btn-primary">
            Start a conversation
          </Link>
          <Link href="/work" className="btn btn-secondary">
            See the full body of work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
