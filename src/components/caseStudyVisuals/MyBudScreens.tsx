import Image from "next/image";

const screens = [
  { src: "/case-studies/mybud-ux-review/splash.png", label: "Splash" },
  { src: "/case-studies/mybud-ux-review/onboarding.png", label: "Onboarding" },
  { src: "/case-studies/mybud-ux-review/language.png", label: "Language" },
  { src: "/case-studies/mybud-ux-review/goal-selection.png", label: "Goal selection" },
  { src: "/case-studies/mybud-ux-review/where-are-you.png", label: "Context intake" },
  { src: "/case-studies/mybud-ux-review/mood-checkin.png", label: "Mood check-in" },
  { src: "/case-studies/mybud-ux-review/home-dashboard.png", label: "Home dashboard" },
  { src: "/case-studies/mybud-ux-review/guru-video.png", label: "Guru video + chat" },
];

export default function MyBudScreens() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {screens.map((screen) => (
        <div key={screen.src} className="flex flex-col gap-2">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white">
            <Image
              src={screen.src}
              alt={`MyBUD — ${screen.label}`}
              width={370}
              height={806}
              className="h-auto w-full"
            />
          </div>
          <p className="text-center text-xs text-[color:var(--color-fg-muted)]">{screen.label}</p>
        </div>
      ))}
    </div>
  );
}
