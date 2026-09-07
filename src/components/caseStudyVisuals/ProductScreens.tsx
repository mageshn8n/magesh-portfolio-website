import Image from "next/image";

type Screen = { src: string; alt: string; label: string; w: number; h: number; scrollHint?: boolean };

const screens: Record<string, Screen[]> = {
  "engagement-management-system": [
    {
      src: "/case-studies/engagement-management-system/case-studies.png",
      alt: "Engagement Management System — Case Studies dashboard",
      label: "Case Studies dashboard, as shipped",
      w: 1071,
      h: 2403,
    },
    {
      src: "/case-studies/engagement-management-system/design-system.png",
      alt: "Engagement Management System — full design system reference",
      label: "Full design system reference",
      w: 1071,
      h: 9043,
    },
  ],
  "whispering-infinity-design-system": [
    {
      src: "/case-studies/whispering-infinity-design-system/design-system.png",
      alt: "Whispering Infinity — full design system reference",
      label: "Full design system reference",
      w: 1071,
      h: 5791,
    },
    {
      src: "/case-studies/whispering-infinity-design-system/case-studies.png",
      alt: "Whispering Infinity — DS Case Studies list",
      label: "DS Case Studies, as shipped",
      w: 1075,
      h: 7318,
    },
  ],
  "pkisecops-design-system": [
    {
      src: "/case-studies/pkisecops-design-system/foundations.png",
      alt: "PKISecOPS — Foundations reference",
      label: "Foundations — grid, spacing, color, type",
      w: 1551,
      h: 7971,
    },
    {
      src: "/case-studies/pkisecops-design-system/components.png",
      alt: "PKISecOPS — Component Library reference",
      label: "Component Library",
      w: 1551,
      h: 7943,
    },
    {
      src: "/case-studies/pkisecops-design-system/data-visualization.png",
      alt: "PKISecOPS — Data Visualization reference",
      label: "Data Visualization standards",
      w: 1551,
      h: 7518,
    },
    {
      src: "/case-studies/pkisecops-design-system/governance.png",
      alt: "PKISecOPS — Governance Model reference",
      label: "Governance model",
      w: 1551,
      h: 6531,
    },
  ],
  "healthcare-saas-management-platform": [
    {
      src: "/case-studies/healthcare-saas-management-platform/patient-profile.png",
      alt: "HMS — patient profile with chronological timeline",
      label: "Patient profile — demographics, medical history and a full visit timeline",
      w: 1440,
      h: 900,
      scrollHint: false,
    },
    {
      src: "/case-studies/healthcare-saas-management-platform/appointments.png",
      alt: "HMS — appointment scheduling, week view",
      label: "Appointments — Day/Week/Month views with doctor and department filters",
      w: 1440,
      h: 900,
      scrollHint: false,
    },
    {
      src: "/case-studies/healthcare-saas-management-platform/doctors.png",
      alt: "HMS — doctor directory",
      label: "Doctor directory across branches, departments and specializations",
      w: 1440,
      h: 900,
      scrollHint: false,
    },
    {
      src: "/case-studies/healthcare-saas-management-platform/billing.png",
      alt: "HMS — billing and invoices",
      label: "Billing — invoice list with status filters and collections/outstanding KPIs",
      w: 1440,
      h: 900,
      scrollHint: false,
    },
  ],
};

export default function ProductScreens({ slug }: { slug: string }) {
  const items = screens[slug];
  if (!items) return null;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {items.map((screen) => (
        <div key={screen.src} className="flex flex-col gap-3">
          <div className="max-h-[640px] overflow-y-auto rounded-lg border border-[color:var(--color-border)] bg-white">
            <Image src={screen.src} alt={screen.alt} width={screen.w} height={screen.h} className="h-auto w-full" />
          </div>
          <p className="text-xs text-[color:var(--color-fg-muted)]">
            {screen.label}
            {screen.scrollHint !== false && " — scroll to see the full page"}
          </p>
        </div>
      ))}
    </div>
  );
}
