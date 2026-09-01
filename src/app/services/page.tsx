import type { Metadata } from "next";
import Services from "@/components/Services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Services — ${site.name}`,
  description: "UX/UI design consulting, design systems, SaaS and mobile product design.",
};

export default function ServicesPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <Services />
    </div>
  );
}
