import Image from "next/image";

const pairs = [
  {
    title: "A menu that hid the destination behind the door",
    before: { src: "/case-studies/scope-plus/01-menu-before.jpeg", w: 1300, h: 656 },
    after: { src: "/case-studies/scope-plus/02-menu-after.jpeg", w: 1300, h: 656 },
  },
  {
    title: "The breadcrumb followed the title instead of leading it",
    before: { src: "/case-studies/scope-plus/03-breadcrumb-before.png", w: 1300, h: 700 },
    after: { src: "/case-studies/scope-plus/04-breadcrumb-after.png", w: 1300, h: 700 },
  },
  {
    title: "Three different systems, all pretending to be search",
    before: { src: "/case-studies/scope-plus/06-search-before.png", w: 1300, h: 700 },
    after: { src: "/case-studies/scope-plus/07-search-after.png", w: 1300, h: 700 },
  },
];

const singles = [
  {
    title: "Icons that looked the same but meant different things — recommended pattern",
    src: "/case-studies/scope-plus/05-icons-labels.png",
    w: 1300,
    h: 500,
  },
  {
    title: "Redesign in practice — the Import screen",
    src: "/case-studies/scope-plus/08-import-fullshot.png",
    w: 1300,
    h: 780,
  },
];

function Shot({ src, w, h, alt }: { src: string; w: number; h: number; alt: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-white">
      <Image src={src} alt={alt} width={w} height={h} className="h-auto w-full" />
    </div>
  );
}

export default function ScopePlusShots() {
  return (
    <div className="flex flex-col gap-12">
      {pairs.map((pair) => (
        <div key={pair.title}>
          <h3 className="mb-4 text-base font-bold">{pair.title}</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Shot {...pair.before} alt={`${pair.title} — before`} />
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[#e0522f]">Before</p>
            </div>
            <div>
              <Shot {...pair.after} alt={`${pair.title} — recommended`} />
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-success)]">
                Recommended
              </p>
            </div>
          </div>
        </div>
      ))}

      {singles.map((shot) => (
        <div key={shot.title}>
          <h3 className="mb-4 text-base font-bold">{shot.title}</h3>
          <div className="mx-auto max-w-2xl">
            <Shot {...shot} alt={shot.title} />
          </div>
        </div>
      ))}
    </div>
  );
}
