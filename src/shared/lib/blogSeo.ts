import type { Metadata } from "next";
import type { BlogPost } from "@/entities/blog";
import { BRAND } from "@/shared/config/seo-keywords";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/shared/lib/breadcrumbs";
import { buildHreflangAlternates } from "@/shared/config/i18n";
import { HERO_IMAGE } from "@/shared/config/images";
import { SITE, SITE_URL } from "@/shared/config/site";

export function buildBlogIndexMetadata(): Metadata {
  return {
    title: { absolute: `Attestation Guides & Blog | ${BRAND.name}` },
    description:
      "Expert attestation guides for UAE, India, MOFA, degree, birth certificate, and commercial document legalization by Azbaan global.",
    alternates: {
      canonical: "/blog",
      languages: buildHreflangAlternates("/blog"),
      types: {
        "application/rss+xml": `${SITE_URL}/blog/rss.xml`,
      },
    },
    openGraph: {
      title: `Attestation Guides & Blog | ${BRAND.name}`,
      description:
        "Expert attestation guides for UAE, India, MOFA, and certificate legalization.",
      url: `${SITE_URL}/blog`,
      type: "website",
      siteName: BRAND.name,
      images: [{ url: HERO_IMAGE.src, alt: BRAND.name }],
    },
  };
}

export function buildBlogPostMetadata(post: BlogPost): Metadata {
  const path = `/blog/${post.slug}`;
  const ogImage = `${SITE_URL}/blog/${post.slug}/opengraph-image`;

  return {
    title: { absolute: `${post.title} | ${BRAND.name}` },
    description: post.description,
    keywords: [post.keyword, BRAND.name, "attestation guide", "Azbaan global"],
    alternates: {
      canonical: path,
      languages: buildHreflangAlternates(path),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}${path}`,
      type: "article",
      publishedTime: post.publishedAt,
      siteName: BRAND.name,
      images: [{ url: ogImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
  };
}

export function buildBlogPostStructuredData(
  post: BlogPost,
  breadcrumbs: BreadcrumbItem[],
) {
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbSchema(breadcrumbs),
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}/#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: {
          "@type": "Organization",
          name: BRAND.name,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: BRAND.name,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}${SITE.logoSrc}`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
        keywords: post.keyword,
        url: pageUrl,
        inLanguage: "en",
      },
    ],
  };
}

export function buildBlogIndexStructuredData(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbSchema(breadcrumbs),
      {
        "@type": "Blog",
        "@id": `${SITE_URL}/blog/#blog`,
        url: `${SITE_URL}/blog`,
        name: `${BRAND.name} Attestation Blog`,
        description: "Attestation guides and certificate legalization articles",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}
