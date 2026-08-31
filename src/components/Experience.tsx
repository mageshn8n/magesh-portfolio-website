"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/data/experience";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="container-edge container-max border-t border-[color:var(--color-border)] py-20 sm:py-28"
    >
      <div className="mb-14 sm:mb-16">
        <SectionHeading eyebrow="Career" title="Eighteen years across enterprise design." />
      </div>

      <div ref={containerRef} className="relative pl-8 sm:pl-10">
        <div className="absolute left-0 top-0 h-full w-px bg-[color:var(--color-border)]" />
        <motion.div
          style={{ scaleY: lineScale, transformOrigin: "top" }}
          className="absolute left-0 top-0 h-full w-px bg-[color:var(--color-accent)]"
        />

        <div className="flex flex-col gap-12 sm:gap-14">
          {experience.map((entry, i) => (
            <motion.div
              key={`${entry.company}-${entry.role}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
              className="relative"
            >
              <span className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[color:var(--color-accent)] sm:-left-10" />
              <div className="flex flex-wrap items-baseline gap-3">
                <h3 className="text-lg font-bold">{entry.company}</h3>
                {entry.duration && <span className="label !text-[11px]">{entry.duration}</span>}
                {entry.current && <span className="chip !text-[10px] text-[color:var(--color-success)]">Current role</span>}
              </div>
              <p className="mt-1 text-base font-semibold text-[color:var(--color-fg-muted)]">{entry.role}</p>
              <p className="mt-2 max-w-xl text-sm text-[color:var(--color-fg-muted)]">{entry.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
