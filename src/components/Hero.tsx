"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll } from "framer-motion";
import { site, stats } from "@/data/site";
import AnimatedNumber from "./AnimatedNumber";
import TextReveal from "./TextReveal";
import DiscoverField from "./home/DiscoverField";
import { usePrefersReducedMotion } from "@/lib/useMediaQuery";

const trustedBadges = [
  { caption: "", value: "18+", label: "Years" },
  { caption: "Ex", value: "IBM", label: "" },
  { caption: "Ex", value: "Dell", label: "" },
  { caption: "Senior", value: "Product Owner", label: "" },
  { caption: "UX", value: "Consultant", label: "" },
  { caption: "Video", value: "Production", label: "" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  return (
    <section
      id="top"
      ref={sectionRef}
      className="hero-grid relative overflow-hidden pt-[calc(var(--nav-h)+3rem)]"
    >
      {!prefersReducedMotion && <DiscoverField progress={scrollYProgress} />}

      <div className="container-edge container-max relative flex flex-col gap-16 pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="flex flex-col gap-10 lg:col-span-7">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-success)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-success)]" />
              </span>
              <p className="text-sm text-[color:var(--color-fg-muted)]">{site.availability}</p>
            </div>

            <h1 className="text-hero text-balance">
              <TextReveal as="span" type="words">
                {site.heroHeadline}
              </TextReveal>
            </h1>

            <p className="max-w-xl text-balance text-base text-[color:var(--color-fg-muted)] sm:text-lg">
              {site.heroSubline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="/contact" className="btn btn-primary">
                {site.heroPrimaryCta}
              </a>
              <a href="/work" className="btn btn-secondary">
                {site.heroSecondaryCta}
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <p className="label">Trusted background</p>
              <div className="flex flex-wrap gap-3">
                {trustedBadges.map((badge, i) => (
                  <div key={i} className="chip flex-col items-start gap-0 !py-2 !px-4 leading-tight">
                    {badge.caption && (
                      <span className="text-[10px] uppercase text-[color:var(--color-fg-faint)]">{badge.caption}</span>
                    )}
                    <span className="text-sm font-semibold text-[color:var(--color-fg)]">{badge.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card relative aspect-[4/5] w-full max-w-sm overflow-hidden lg:max-w-none">
              <Image
                src="/images/magesh-hero.png"
                alt={`${site.name}, ${site.title}`}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                style={{ objectPosition: "60% 30%" }}
              />
            </div>
            <p className="mt-4 text-sm text-[color:var(--color-fg-muted)]">
              {site.name} — {site.location} · {site.locationSuffix}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-[color:var(--color-border)] pt-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <p className="font-tabular text-3xl font-bold sm:text-4xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-[color:var(--color-fg-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
