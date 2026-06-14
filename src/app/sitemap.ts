import type { MetadataRoute } from "next";
import { ALL_SEO_PAGES } from "@/shared/config/seo-pages";
import { SITE_URL } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...ALL_SEO_PAGES.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page.sitemapPriority,
    })),
  ];
}
