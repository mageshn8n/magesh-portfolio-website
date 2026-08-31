import type { Metadata } from "next";
import Work from "@/components/Work";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Selected Work — ${site.name}`,
  description: "Case studies across product design, design systems, mobile apps and visual storytelling.",
};

export default function WorkPage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <Work />
    </div>
  );
}
