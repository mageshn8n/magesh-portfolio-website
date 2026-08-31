import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact — ${site.name}`,
  description: `Get in touch with ${site.name} — ${site.email} · ${site.phone}.`,
};

export default function ContactPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <Contact />
    </div>
  );
}
