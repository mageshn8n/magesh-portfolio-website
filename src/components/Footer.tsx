import Link from "next/link";
import { footerLinks, site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)]">
      <div className="container-edge container-max flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--color-fg)] text-xs font-bold text-[color:var(--color-bg)]">
            {site.initials}
          </span>
          <p className="text-sm text-[color:var(--color-fg-muted)]">
            © {new Date().getFullYear()} {site.name} · {site.title}
          </p>
        </div>

        <ul className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[color:var(--color-fg-muted)] transition-colors hover:text-[color:var(--color-fg)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
