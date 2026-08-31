import { testimonials } from "@/data/testimonials";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="container-edge container-max py-20 sm:py-28">
      <div className="mb-14 sm:mb-16">
        <SectionHeading eyebrow="Testimonials" title="Trusted by founders, PMs & leaders." />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.initials} className="card flex flex-col gap-6 p-6 sm:p-8">
            <blockquote className="text-balance text-lg leading-snug sm:text-xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-fg)] text-xs font-bold text-[color:var(--color-bg)]">
                {testimonial.initials}
              </span>
              <div>
                <p className="text-sm font-semibold">{testimonial.name ?? testimonial.role}</p>
                <p className="text-xs text-[color:var(--color-fg-muted)]">
                  {testimonial.name ? `${testimonial.role} · ${testimonial.context}` : testimonial.context}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
