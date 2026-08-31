import type { Metadata } from "next";
import About from "@/components/About";
import Experience from "@/components/Experience";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: `${site.metaDescription} Eighteen years across enterprise design — Art of Living, IBM, Dell and beyond.`,
};

export default function AboutPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <About />
      <Experience />
    </div>
  );
}
