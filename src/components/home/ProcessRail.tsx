"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export const STAGES = ["Discover", "Define", "Ideate", "Design", "Prototype", "Test", "Refine", "Launch"] as const;

export default function ProcessRail() {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(STAGES.length - 1, Math.max(0, Math.floor(v * STAGES.length)));
    setActive(idx);
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex"
    >
      {STAGES.map((stage, i) => (
        <div key={stage} className="flex items-center gap-2.5">
          <span
            className={cn(
              "text-[10px] uppercase tracking-[0.14em] transition-all duration-300",
              i === active ? "text-[color:var(--color-accent)] font-bold" : "text-white/25"
            )}
          >
            {stage}
          </span>
          <span
            className={cn(
              "h-1.5 w-1.5 flex-none rounded-full transition-all duration-300",
              i === active ? "scale-125 bg-[color:var(--color-accent)]" : "bg-white/15"
            )}
          />
        </div>
      ))}
    </div>
  );
}
