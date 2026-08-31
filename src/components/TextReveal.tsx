"use client";

import { motion, type Variants } from "framer-motion";
import { type ElementType, useMemo } from "react";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";

type TextRevealProps = {
  children: string;
  as?: ElementType;
  className?: string;
  type?: "words" | "lines" | "chars";
  delay?: number;
  stagger?: number;
  once?: boolean;
  viewportAmount?: number;
};

export default function TextReveal({
  children,
  as: Tag = "p",
  className,
  type = "words",
  delay = 0,
  stagger = 0.045,
  once = true,
  viewportAmount = 0.4,
}: TextRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const units = useMemo(() => {
    if (type === "chars") return children.split("");
    if (type === "lines") return children.split("\n");
    return children.split(" ");
  }, [children, type]);

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const item: Variants = {
    hidden: { y: "110%" },
    visible: {
      y: "0%",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: viewportAmount }}
        variants={container}
        aria-label={children}
      >
        {units.map((unit, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-top"
            aria-hidden
          >
            <motion.span className="inline-block will-change-transform" variants={item}>
              {unit === "" ? " " : unit}
              {type === "words" && i !== units.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
