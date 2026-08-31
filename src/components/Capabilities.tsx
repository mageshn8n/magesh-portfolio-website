import { capabilities, toolkit } from "@/data/capabilities";
import SectionHeading from "./SectionHeading";

export default function Capabilities() {
  return (
    <section id="expertise" className="bg-[color:var(--color-surface)]/40 py-20 sm:py-28">
      <div className="container-edge container-max">
        <div className="mb-14 sm:mb-16">
          <SectionHeading
            eyebrow="Capabilities"
            title="A full-stack design practice."
            subline="From research and strategy to interface, system, and screen — plus the storytelling craft to make it land."
          />
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, i) => (
            <div
              key={capability}
              className="flex items-center gap-3 border-t border-[color:var(--color-border)] py-4"
            >
              <span className="label font-tabular">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-medium">{capability}</span>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4">
          <p className="label">Toolkit</p>
          <div className="flex flex-wrap gap-2">
            {toolkit.map((tool) => (
              <span key={tool} className="chip">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
