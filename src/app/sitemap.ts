import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/entities/blog";
import { ALL_SEO_PAGES } from "@/shared/config/seo-pages";
import { SITE_URL } from "@/shared/config/site";

const SITE_UPDATED = new Date("2025-06-01");

function latestBlogDate() {
  if (BLOG_POSTS.length === 0) return SITE_UPDATED;
  return new Date(
    Math.max(...BLOG_POSTS.map((post) => new Date(post.publishedAt).getTime())),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const newestBlogDate = latestBlogDate();

  return [
    {
      url: SITE_URL,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/hi`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/ar`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: newestBlogDate,
      changeFrequency: "weekly",
      priority: 0.82,
    },
    ...ALL_SEO_PAGES.map((page) => ({
      url: `${SITE_URL}/${page.slug}`,
      lastModified: page.sitemapLastModified
        ? new Date(page.sitemapLastModified)
        : SITE_UPDATED,
      changeFrequency: "weekly" as const,
      priority: page.sitemapPriority,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.76,
    })),
  ];
}
