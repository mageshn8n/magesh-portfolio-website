import { contactChannels, site } from "@/data/site";
import TextReveal from "./TextReveal";

export default function Contact() {
  return (
    <section id="contact" className="container-edge container-max py-24 sm:py-32">
      <div className="flex flex-col gap-8">
        <p className="label">{site.contactEyebrow}</p>
        <h2 className="text-hero max-w-2xl text-balance">
          <TextReveal as="span" type="words">
            {site.contactHeadline}
          </TextReveal>
        </h2>
        <p className="max-w-xl text-balance text-lg text-[color:var(--color-fg-muted)]">{site.contactSubline}</p>

        <div className="mt-4 flex flex-wrap gap-4">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            Schedule a consultation
          </a>
          <a href="/about" className="btn btn-secondary">
            Download resume
          </a>
          <a href="/work" className="btn btn-secondary">
            View case studies
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[color:var(--color-border)] pt-10 sm:grid-cols-4">
          {contactChannels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex flex-col gap-1"
            >
              <span className="label !text-[10px]">{channel.label}</span>
              <span className="text-sm font-medium text-[color:var(--color-fg)] transition-colors group-hover:text-[color:var(--color-accent)]">
                {channel.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
