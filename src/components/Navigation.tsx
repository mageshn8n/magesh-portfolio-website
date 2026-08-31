"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-colors duration-300",
          scrolled ? "bg-[color:var(--color-bg)]/85 backdrop-blur-md border-b border-[color:var(--color-border)]" : "border-b border-transparent"
        )}
      >
        <nav className="container-edge container-max flex h-[var(--nav-h)] items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-fg)] text-xs font-bold text-[color:var(--color-bg)]">
              {site.initials}
            </span>
            <span className="hidden sm:inline">{site.name}</span>
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[color:var(--color-fg-muted)] transition-colors hover:text-[color:var(--color-fg)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <span className="flex items-center gap-2 text-xs text-[color:var(--color-fg-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-success)]" />
              Available
            </span>
            <a href="/contact" className="btn btn-primary">
              Book a call
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] lg:hidden"
          >
            <span className="relative flex h-3 w-4 flex-col justify-between">
              <span className={cn("h-px w-full bg-current transition-transform duration-300", menuOpen && "translate-y-[6px] rotate-45")} />
              <span className={cn("h-px w-full bg-current transition-opacity duration-300", menuOpen && "opacity-0")} />
              <span className={cn("h-px w-full bg-current transition-transform duration-300", menuOpen && "-translate-y-[6px] -rotate-45")} />
            </span>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex flex-col justify-center bg-[color:var(--color-bg)] px-8 lg:hidden"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setMenuOpen(false)} className="text-3xl font-bold tracking-tight">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href="/contact" onClick={() => setMenuOpen(false)} className="btn btn-primary mt-12 w-fit">
              Book a call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
