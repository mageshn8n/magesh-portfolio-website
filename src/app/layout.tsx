import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";

const title = `${site.name} — ${site.title}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title,
  description: site.metaDescription,
  keywords: [
    "Product Designer",
    "UX Strategist",
    "Design Systems",
    "Visual Storyteller",
    "Product Owner",
    site.name,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title,
    description: site.metaDescription,
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.metaDescription,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-[color:var(--color-bg)] font-sans text-[color:var(--color-fg)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-[color:var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Navigation />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
