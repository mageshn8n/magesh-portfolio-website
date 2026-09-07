import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/projects";
import type { FeaturedCaseStudy as FeaturedCaseStudyType, SubCaseStudy } from "@/data/caseStudies";
import WorkThumb from "./WorkThumb";
import TextReveal from "./TextReveal";
import {
  caseStudyVisuals,
  containScreenshotThumbs,
  MyBudScreens,
  ProductScreens,
  realScreenshotThumbs,
  ScopePlusShots,
} from "./caseStudyVisuals";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-tabular text-3xl font-bold sm:text-4xl">{value}</p>
      <p className="text-xs text-[color:var(--color-fg-muted)]">{label}</p>
    </div>
  );
}

function Block({ index, title, description }: { index?: number; title: string; description: string }) {
  return (
    <div className="card flex flex-col gap-2 p-6">
      {index !== undefined && <span className="label font-tabular">{String(index + 1).padStart(2, "0")}</span>}
      <h3 className="text-base font-bold">{title}</h3>
      <p className="text-sm text-[color:var(--color-fg-muted)]">{description}</p>
    </div>
  );
}

function SubCaseCard({ item }: { item: SubCaseStudy }) {
  return (
    <div className="card flex flex-col gap-4 p-6">
      <div>
        {item.meta && <p className="label !text-[10px]">{item.meta}</p>}
        <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
        {item.description && (
          <p className="mt-2 text-sm text-[color:var(--color-fg-muted)]">{item.description}</p>
        )}
      </div>

      {(item.challenge || item.decision || item.outcome) && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {item.challenge && (
            <div className="rounded-lg border border-[#e0522f]/20 bg-[#e0522f]/10 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-[#e0522f]">Challenge</p>
              <p className="mt-1.5 text-xs text-[color:var(--color-fg-muted)]">{item.challenge}</p>
            </div>
          )}
          {item.decision && (
            <div className="rounded-lg border border-[color:var(--color-accent)]/20 bg-[color:var(--color-accent)]/10 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-[color:var(--color-accent)]">Decision</p>
              <p className="mt-1.5 text-xs text-[color:var(--color-fg-muted)]">{item.decision}</p>
            </div>
          )}
          {item.outcome && (
            <div className="rounded-lg border border-[color:var(--color-success)]/20 bg-[color:var(--color-success)]/10 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-[color:var(--color-success)]">Outcome</p>
              <p className="mt-1.5 text-xs text-[color:var(--color-fg-muted)]">{item.outcome}</p>
            </div>
          )}
        </div>
      )}

      {item.metrics && (
        <div className="flex flex-wrap gap-6">
          {item.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-tabular text-xl font-bold">{m.value}</p>
              <p className="text-xs text-[color:var(--color-fg-muted)]">{m.label}</p>
            </div>
          ))}
        </div>
      )}

      {item.tags && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FeaturedCaseStudy({
  study,
  category,
  nextHref,
  nextTitle,
}: {
  study: FeaturedCaseStudyType;
  category: Category;
  nextHref: string;
  nextTitle: string;
}) {
  const Visual = caseStudyVisuals[study.slug];
  const isScopePlus = study.slug === "scope-plus-heuristic-usability-review";
  const hasProductScreens =
    study.slug === "engagement-management-system" ||
    study.slug === "whispering-infinity-design-system" ||
    study.slug === "pkisecops-design-system" ||
    study.slug === "healthcare-saas-management-platform";
  const isMyBud = study.slug === "mybud-ux-teardown";

  return (
    <article className="container-edge container-max pb-24 pt-[calc(var(--nav-h)+2.5rem)] sm:pb-32">
      <Link
        href="/work"
        className="label mb-10 inline-flex items-center gap-2 transition-colors hover:text-[color:var(--color-fg)]"
      >
        ← Back to work
      </Link>

      <div className="flex items-center gap-3">
        <p className="label">{category.name}</p>
        <span className="rounded-full bg-[color:var(--color-accent)] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          Featured
        </span>
      </div>

      <h1 className="text-hero mt-5 max-w-3xl text-balance">
        <TextReveal as="span" type="words">
          {study.title}
        </TextReveal>
      </h1>
      <p className="mt-6 max-w-xl text-balance text-lg text-[color:var(--color-fg-muted)]">{study.tagline}</p>

      <div className="mt-14 grid grid-cols-2 gap-8 border-t border-[color:var(--color-border)] pt-10 sm:grid-cols-4">
        <div className="flex flex-col gap-2">
          <p className="label">Role</p>
          <p className="text-sm">{study.role}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="label">Duration</p>
          <p className="text-sm">{study.duration}</p>
        </div>
        <div className="flex flex-col gap-2 sm:col-span-2">
          <p className="label">Client</p>
          <p className="text-sm">{study.client}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>

      {study.prdDownload && (
        <div className="mt-6">
          <a href={study.prdDownload.href} download className="btn btn-secondary">
            {study.prdDownload.label}
          </a>
        </div>
      )}

      {realScreenshotThumbs[study.slug] ? (
        <div className="card relative mt-14 aspect-[16/9] w-full overflow-hidden">
          <Image
            src={realScreenshotThumbs[study.slug]}
            alt={study.title}
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover object-top"
          />
        </div>
      ) : containScreenshotThumbs[study.slug] ? (
        <div className="card mt-14 flex aspect-[16/9] w-full items-center justify-center overflow-hidden p-6">
          <Image
            src={containScreenshotThumbs[study.slug]}
            alt={study.title}
            width={370}
            height={806}
            className="h-full w-auto object-contain"
          />
        </div>
      ) : Visual ? (
        <div className="card mt-14 flex items-center justify-center p-6 sm:p-10">
          <Visual />
        </div>
      ) : (
        <div className="card mt-14 aspect-[16/9] w-full overflow-hidden">
          <WorkThumb slug={study.slug} />
        </div>
      )}

      <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {study.highlights.map((stat) => (
          <Stat key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-[color:var(--color-border)] pt-12 lg:grid-cols-12">
        <p className="label lg:col-span-3">Overview</p>
        <p className="max-w-2xl text-balance text-lg leading-relaxed text-[color:var(--color-fg-muted)] lg:col-span-8 lg:col-start-5">
          {study.overview}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-8 border-t border-[color:var(--color-border)] pt-12 lg:grid-cols-12">
        <p className="label lg:col-span-3">Challenge</p>
        <div className="max-w-2xl lg:col-span-8 lg:col-start-5">
          <p className="text-balance text-lg leading-relaxed text-[color:var(--color-fg-muted)]">{study.challenge}</p>
          {study.challengeList && (
            <ul className="mt-6 flex flex-col gap-3">
              {study.challengeList.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[color:var(--color-fg-muted)]">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-8 border-t border-[color:var(--color-border)] pt-12 lg:grid-cols-12">
        <p className="label lg:col-span-3">Approach</p>
        <p className="max-w-2xl text-balance text-lg leading-relaxed text-[color:var(--color-fg-muted)] lg:col-span-8 lg:col-start-5">
          {study.approach}
        </p>
      </div>

      {study.requirementsSummary && (
        <div className="mt-16 border-t border-[color:var(--color-border)] pt-12">
          <p className="label mb-8">{study.requirementsSummaryLabel ?? "Requirements summary"}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {study.requirementsSummary.map((item, i) => (
              <Block key={item.title} index={i} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      )}

      {study.process && (
        <div className="mt-16 border-t border-[color:var(--color-border)] pt-12">
          <p className="label mb-8">Process</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.process.map((step) => (
              <Block key={step.title} title={step.title} description={step.description} />
            ))}
          </div>
        </div>
      )}

      {study.features && (
        <div className="mt-16 border-t border-[color:var(--color-border)] pt-12">
          <p className="label mb-8">{study.featuresLabel ?? "Key features"}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {study.features.map((feature, i) => (
              <Block key={feature.title} index={i} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      )}

      {isMyBud && (
        <div className="mt-16 border-t border-[color:var(--color-border)] pt-12">
          <p className="label mb-8">Screen walkthrough</p>
          <MyBudScreens />
        </div>
      )}

      {study.subCaseStudies && (
        <div className="mt-16 border-t border-[color:var(--color-border)] pt-12">
          <p className="label mb-8">{study.subCaseStudiesLabel ?? "Case studies"}</p>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {study.subCaseStudies.map((item) => (
              <SubCaseCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      )}

      {isScopePlus && (
        <div className="mt-16 border-t border-[color:var(--color-border)] pt-12">
          <p className="label mb-8">Screens — before &amp; after</p>
          <ScopePlusShots />
        </div>
      )}

      {hasProductScreens && (
        <div className="mt-16 border-t border-[color:var(--color-border)] pt-12">
          <p className="label mb-8">Product reference — full pages, as shipped</p>
          <ProductScreens slug={study.slug} />
        </div>
      )}

      <div className="mt-16 border-t border-[color:var(--color-border)] pt-12">
        <p className="label mb-6">Outcome</p>
        <p className="max-w-2xl text-balance text-xl leading-relaxed text-[color:var(--color-fg-muted)]">
          {study.outcome}
        </p>
        {study.outcomeMetrics && (
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {study.outcomeMetrics.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        )}
      </div>

      {study.learnings && (
        <div className="mt-16 border-t border-[color:var(--color-border)] pt-12">
          <p className="label mb-8">Reflections</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {study.learnings.map((item) => (
              <Block key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      )}

      {study.quote && (
        <blockquote className="card mt-16 flex flex-col gap-4 p-8 sm:p-10">
          <p className="text-balance text-xl font-medium leading-snug sm:text-2xl">&ldquo;{study.quote.text}&rdquo;</p>
          <cite className="label not-italic">{study.quote.attribution}</cite>
        </blockquote>
      )}

      <div className="mt-16 border-t border-[color:var(--color-border)] pt-12">
        <p className="label mb-4">Next project</p>
        <Link
          href={nextHref}
          className="group flex flex-wrap items-center gap-4 text-3xl font-bold tracking-tight sm:text-5xl"
        >
          {nextTitle}
          <span className="transition-transform duration-300 group-hover:translate-x-3">→</span>
        </Link>
      </div>
    </article>
  );
}
