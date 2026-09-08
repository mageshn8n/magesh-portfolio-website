"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";
import { getCategory } from "@/data/projects";
import WorkThumb from "../WorkThumb";
import SectionHeading from "../SectionHeading";
import { CaseStudyThumb, caseStudyVisuals, containScreenshotThumbs, realScreenshotThumbs } from "../caseStudyVisuals";

const featured = caseStudies.slice(0, 3);

const ghostCards = [
  { rotate: -9, x: -60, top: "4%", left: "6%" },
  { rotate: 7, x: 50, top: "10%", left: "70%" },
  { rotate: -5, x: -40, top: "62%", left: "14%" },
  { rotate: 10, x: 55, top: "58%", left: "76%" },
];

function GhostCard({ rotate, x, top, left, progress }: { rotate: number; x: number; top: string; left: string; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.4], [0.5, 0]);
  const xT = useTransform(progress, [0, 0.4], [x, 0]);
  const rotateT = useTransform(progress, [0, 0.4], [rotate, 0]);

  return (
    <motion.div
      style={{ position: "absolute", top, left, opacity, x: xT, rotate: rotateT }}
      className="h-20 w-32 rounded-lg border border-white/10 bg-white/[0.02] sm:h-24 sm:w-40"
    />
  );
}

export default function IdeateWork() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "start 0.2"] });

  return (
    <section id="work-preview" className="container-edge container-max border-t border-[color:var(--color-border)] py-24 sm:py-32">
      <div className="mb-4 flex flex-col justify-between gap-6 sm:mb-6 lg:flex-row lg:items-end">
        <SectionHeading eyebrow="Ideate" title={"One problem.\nMany possibilities."} />
        <p className="max-w-xs text-sm text-[color:var(--color-fg-muted)]">
          Every project starts as a spread of directions before one earns its way to the surface.
        </p>
      </div>

      <div ref={ref} className="relative mt-16">
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {ghostCards.map((g, i) => (
            <GhostCard key={i} {...g} progress={scrollYProgress} />
          ))}
        </div>

        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-3">
          {featured.map((project) => {
            const category = getCategory(project.category);
            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="card group flex flex-col overflow-hidden transition-colors hover:border-[color:var(--color-border-strong)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                    {caseStudyVisuals[project.slug] ? (
                      <CaseStudyThumb>
                        {(() => {
                          const Visual = caseStudyVisuals[project.slug];
                          return <Visual />;
                        })()}
                      </CaseStudyThumb>
                    ) : realScreenshotThumbs[project.slug] ? (
                      <Image
                        src={realScreenshotThumbs[project.slug]}
                        alt={project.title}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover object-top"
                      />
                    ) : containScreenshotThumbs[project.slug] ? (
                      <div className="flex h-full w-full items-center justify-center bg-[color:var(--color-surface)] p-4">
                        <Image
                          src={containScreenshotThumbs[project.slug]}
                          alt={project.title}
                          width={370}
                          height={806}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <WorkThumb slug={project.slug} />
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <p className="label !text-[10px]">{category?.name}</p>
                  <h3 className="font-semibold tracking-tight">{project.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link href="/work" className="btn btn-secondary">
          View all work →
        </Link>
      </div>
    </section>
  );
}
