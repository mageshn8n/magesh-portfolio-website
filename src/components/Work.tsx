"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, getAllWorkItems } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import WorkThumb from "./WorkThumb";
import { CaseStudyThumb, caseStudyVisuals, containScreenshotThumbs, realScreenshotThumbs } from "./caseStudyVisuals";
import { cn } from "@/lib/utils";

const allItems = getAllWorkItems();

export default function Work() {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(
    () => (active === "all" ? allItems : allItems.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section id="work" className="container-edge container-max py-20 sm:py-28">
      <div className="mb-10 sm:mb-12">
        <SectionHeading
          eyebrow="Selected Work"
          title="Case studies across product & story."
          subline="Real engagements and representative work, across product, systems and story. Filter by craft — each opens into a focused case study."
        />
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            active === "all"
              ? "bg-[color:var(--color-fg)] text-[color:var(--color-bg)]"
              : "border border-[color:var(--color-border)] text-[color:var(--color-fg-muted)] hover:border-[color:var(--color-border-strong)]"
          )}
        >
          All work {allItems.length}
        </button>
        {categories.map((cat) => {
          const count = allItems.filter((p) => p.category === cat.slug).length;
          return (
            <button
              key={cat.slug}
              type="button"
              onClick={() => setActive(cat.slug)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === cat.slug
                  ? "bg-[color:var(--color-fg)] text-[color:var(--color-bg)]"
                  : "border border-[color:var(--color-border)] text-[color:var(--color-fg-muted)] hover:border-[color:var(--color-border-strong)]"
              )}
            >
              {cat.name} {count}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => {
          const category = categories.find((c) => c.slug === item.category)!;
          return (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="card group flex flex-col overflow-hidden transition-colors hover:border-[color:var(--color-border-strong)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                  {caseStudyVisuals[item.slug] ? (
                    <CaseStudyThumb>
                      {(() => {
                        const Visual = caseStudyVisuals[item.slug];
                        return <Visual />;
                      })()}
                    </CaseStudyThumb>
                  ) : realScreenshotThumbs[item.slug] ? (
                    <Image
                      src={realScreenshotThumbs[item.slug]}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  ) : containScreenshotThumbs[item.slug] ? (
                    <div className="flex h-full w-full items-center justify-center bg-[color:var(--color-surface)] p-4">
                      <Image
                        src={containScreenshotThumbs[item.slug]}
                        alt={item.title}
                        width={370}
                        height={806}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  ) : (
                    <WorkThumb slug={item.slug} />
                  )}
                </div>
                {item.featured && (
                  <span className="absolute left-3 top-3 rounded-full bg-[color:var(--color-accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Featured
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="label !text-[10px]">{category.name}</p>
                <h3 className="font-semibold tracking-tight">{item.title}</h3>
                <p className="text-sm text-[color:var(--color-fg-muted)]">{item.meta}</p>
                <span className="group/link mt-auto inline-flex items-center gap-2 pt-3 text-sm font-medium text-[color:var(--color-fg)]">
                  View case study
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
