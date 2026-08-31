"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";

export default function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 1.4,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = usePrefersReducedMotion();
  const decimals = (value.toString().split(".")[1] || "").length;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    let raf: number;
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const factor = 10 ** decimals;
      setDisplay(Math.round(eased * value * factor) / factor);
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, prefersReducedMotion, decimals]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}
