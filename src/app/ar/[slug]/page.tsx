import { SEO_PAGE_SLUGS } from "@/shared/config/seo-pages";
import {
  buildLocalizedSeoMetadata,
  renderSeoLandingPage,
} from "@/shared/lib/renderSeoLandingPage";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SEO_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return buildLocalizedSeoMetadata(slug, "ar");
}

export default async function ArabicSeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  return renderSeoLandingPage({ slug, locale: "ar" });
}
