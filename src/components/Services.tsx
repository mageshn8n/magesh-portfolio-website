import { services } from "@/data/services";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="container-edge container-max py-20 sm:py-28">
      <div className="mb-14 sm:mb-16">
        <SectionHeading
          eyebrow="Services"
          title="Strategy, design & systems — under one roof."
          subline="From a focused UX audit to an end-to-end product build, engagements are scoped to the outcome you need."
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.index} className="card flex flex-col gap-5 p-6">
            <div className="flex items-start justify-between">
              <span className="label font-tabular">{service.index}</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight">{service.title}</h3>
            <p className="text-sm font-medium text-[color:var(--color-accent)]">{service.price}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="/contact"
              className="group mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-fg)]"
            >
              Enquire
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
