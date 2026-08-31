import { cn } from "@/lib/utils";

// Placeholder thumbnail texture for representative (non-featured) engagements.
// Swap for a real screenshot per project whenever one exists — the hatch
// pattern plus a per-project hue is a deliberate "coming soon" mark, not a
// generic gray box.
const HUES = [262, 205, 12, 338, 168, 42, 285, 195, 100, 320];

function hueForSlug(slug: string) {
  const sum = slug.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return HUES[sum % HUES.length];
}

export default function WorkThumb({ className, slug = "" }: { className?: string; slug?: string }) {
  const hue = hueForSlug(slug);

  return (
    <div className={cn("hatch relative h-full w-full overflow-hidden bg-[color:var(--color-surface)]", className)}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(130% 130% at 15% 10%, hsla(${hue}, 75%, 55%, 0.18), transparent 60%)`,
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-3 -right-2 select-none text-7xl font-bold leading-none opacity-[0.1]"
        style={{ color: `hsl(${hue}, 75%, 65%)` }}
      >
        {slug.slice(0, 2).toUpperCase() || "•"}
      </span>
    </div>
  );
}
