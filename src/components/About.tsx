import { site } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-edge container-max py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow={site.aboutEyebrow} title="A practice built across two decades." />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-8">
          {site.aboutParagraphs.map((paragraph) => (
            <p key={paragraph} className="text-balance text-base leading-relaxed text-[color:var(--color-fg-muted)] sm:text-lg">
              {paragraph}
            </p>
          ))}

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a href="/resume/Magesh-K-Palani-Resume.pdf" download className="btn btn-secondary">
              {site.aboutCta}
            </a>
            <span className="chip">{site.aboutBadge}</span>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-[color:var(--color-border)] pt-16 sm:mt-20 sm:pt-20">
        <p className="label mb-8">What I focus on</p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {site.aboutFocusAreas.map((area, i) => (
            <div key={area.title} className="flex flex-col gap-2 border-t border-[color:var(--color-border)] pt-4">
              <span className="label font-tabular">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-base font-semibold">{area.title}</h3>
              <p className="text-sm leading-relaxed text-[color:var(--color-fg-muted)]">{area.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <p className="text-balance border-l-2 border-[color:var(--color-border)] pl-6 text-lg italic leading-relaxed text-[color:var(--color-fg-muted)] sm:text-xl">
          {site.aboutClosing}
        </p>
      </div>
    </section>
  );
}
