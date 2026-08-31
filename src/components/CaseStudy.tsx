import Link from "next/link";
import type { Category, Project } from "@/data/projects";
import WorkThumb from "./WorkThumb";

export default function CaseStudy({
  project,
  category,
  nextHref,
  nextTitle,
}: {
  project: Project;
  category: Category;
  nextHref: string;
  nextTitle: string;
}) {
  return (
    <article className="container-edge container-max pb-24 pt-[calc(var(--nav-h)+2.5rem)] sm:pb-32">
      <Link
        href="/work"
        className="label mb-10 inline-flex items-center gap-2 transition-colors hover:text-[color:var(--color-fg)]"
      >
        ← Back to work
      </Link>

      <div className="flex flex-col gap-5">
        <p className="label">{category.name}</p>
        <h1 className="text-hero max-w-2xl text-balance">{project.title}</h1>
        <p className="max-w-lg text-lg text-[color:var(--color-fg-muted)]">{project.meta}</p>
      </div>

      <div className="card mt-12 aspect-[16/9] w-full overflow-hidden">
        <WorkThumb slug={project.slug} />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[color:var(--color-border)] pt-12 lg:grid-cols-12">
        <p className="label lg:col-span-3">About this project</p>
        <p className="max-w-2xl text-balance text-lg leading-relaxed text-[color:var(--color-fg-muted)] lg:col-span-8 lg:col-start-5">
          {category.blurb}
        </p>
      </div>

      <div className="card mt-12 flex flex-col items-start gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold">Working on something similar?</p>
          <p className="text-sm text-[color:var(--color-fg-muted)]">
            Full write-ups, screens and metrics for this engagement are available on request.
          </p>
        </div>
        <a href="/contact" className="btn btn-primary">
          Start a conversation
        </a>
      </div>

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
