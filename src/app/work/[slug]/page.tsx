import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllWorkItems, getCategory, getNextWorkItem, getProjectBySlug } from "@/data/projects";
import { getFeaturedBySlug } from "@/data/caseStudies";
import { site } from "@/data/site";
import CaseStudy from "@/components/CaseStudy";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";

export function generateStaticParams() {
  return getAllWorkItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const featured = getFeaturedBySlug(slug);
  const project = featured ?? getProjectBySlug(slug);
  if (!project) return {};

  const description = featured ? featured.tagline : (project as { meta: string }).meta;
  const title = `${project.title} — ${site.name}`;
  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const featured = getFeaturedBySlug(slug);
  if (featured) {
    const category = getCategory(featured.category)!;
    const next = getNextWorkItem(slug);
    return (
      <FeaturedCaseStudy
        study={featured}
        category={category}
        nextHref={`/work/${next.slug}`}
        nextTitle={next.title}
      />
    );
  }

  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const category = getCategory(project.category)!;
  const next = getNextWorkItem(slug);

  return <CaseStudy project={project} category={category} nextHref={`/work/${next.slug}`} nextTitle={next.title} />;
}
