import type { Metadata } from "next";
import Capabilities from "@/components/Capabilities";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Expertise — ${site.name}`,
  description: "A full-stack design practice — UX strategy, design systems, motion graphics and toolkit.",
};

export default function ExpertisePage() {
  return (
    <div className="pt-[var(--nav-h)]">
      <Capabilities />
    </div>
  );
}
