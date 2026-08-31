"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";

function FeedbackDemo() {
  const [pressed, setPressed] = useState(false);
  return (
    <div className="card flex h-full flex-col justify-between p-6">
      <div>
        <p className="text-sm font-bold">Feedback</p>
        <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">Press the button.</p>
      </div>
      <motion.button
        type="button"
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
        onPointerLeave={() => setPressed(false)}
        whileTap={{ scale: 0.94 }}
        transition={{ duration: 0.15 }}
        className="mt-6 w-fit rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150"
        style={{ background: pressed ? "var(--color-accent-hover)" : "var(--color-accent)" }}
      >
        {pressed ? "Releasing…" : "Save changes"}
      </motion.button>
    </div>
  );
}

function StateDemo() {
  const [on, setOn] = useState(true);
  return (
    <div className="card flex h-full flex-col justify-between p-6">
      <div>
        <p className="text-sm font-bold">State</p>
        <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">Toggle a real switch.</p>
      </div>
      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        aria-pressed={on}
        className="mt-6 flex h-7 w-12 items-center rounded-full border border-white/10 p-1 transition-colors duration-300"
        style={{ background: on ? "var(--color-accent)" : "rgba(255,255,255,0.08)" }}
      >
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="h-5 w-5 rounded-full bg-white"
          style={{ marginLeft: on ? "auto" : 0 }}
        />
      </button>
    </div>
  );
}

function HierarchyDemo() {
  const [hovered, setHovered] = useState<number | null>(null);
  const rows = ["Primary action", "Secondary detail", "Tertiary meta"];
  return (
    <div className="card flex h-full flex-col justify-between p-6">
      <div>
        <p className="text-sm font-bold">Hierarchy</p>
        <p className="mt-1 text-xs text-[color:var(--color-fg-muted)]">Hover each row.</p>
      </div>
      <div className="mt-6 flex flex-col gap-2">
        {rows.map((row, i) => (
          <motion.div
            key={row}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            animate={{
              opacity: hovered === null ? 1 - i * 0.22 : hovered === i ? 1 : 0.3,
              x: hovered === i ? 4 : 0,
            }}
            className="text-sm font-medium"
          >
            {row}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function PrototypeInteractive() {
  return (
    <section id="motion" className="container-edge container-max border-t border-[color:var(--color-border)] py-24 sm:py-32">
      <SectionHeading eyebrow="Prototype" title={"This is how motion\ncommunicates."} />
      <p className="mt-4 max-w-lg text-sm text-[color:var(--color-fg-muted)]">
        Not decoration — feedback, state and hierarchy. Try them.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <FeedbackDemo />
        <StateDemo />
        <HierarchyDemo />
      </div>
    </section>
  );
}
