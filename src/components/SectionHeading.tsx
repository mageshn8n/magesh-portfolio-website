import { cn } from "@/lib/utils";
import TextReveal from "./TextReveal";

export default function SectionHeading({
  eyebrow,
  title,
  subline,
  className,
}: {
  eyebrow?: string;
  title: string;
  subline?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {eyebrow && <p className="label">{eyebrow}</p>}
      <TextReveal as="h2" type="words" className="text-h2 max-w-2xl text-balance">
        {title}
      </TextReveal>
      {subline && <p className="max-w-xl text-balance text-[color:var(--color-fg-muted)]">{subline}</p>}
    </div>
  );
}
