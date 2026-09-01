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
    </section>
  );
}
