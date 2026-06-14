import type { Metadata } from "next";
import type { Location } from "@/entities/location/model/locations";
import { LOCATIONS } from "@/entities/location/model/locations";
import type { LocationSeoPage, SeoPage, ServiceSeoPage } from "@/shared/config/seo-pages";
import { isLocationPage } from "@/shared/config/seo-pages";
import { HERO_IMAGE } from "@/shared/config/images";
import { BRAND } from "@/shared/config/seo-keywords";
import { ORGANIZATION_SAME_AS } from "@/shared/config/social";
import { SITE, SITE_URL } from "@/shared/config/site";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/shared/lib/breadcrumbs";

function pagePath(slug: string) {
  return `/${slug}`;
}

export function buildSeoPageBreadcrumbs(page: SeoPage): BreadcrumbItem[] {
  return [
    { label: "Home", href: "/" },
    { label: page.h1, href: pagePath(page.slug) },
  ];
}

export function buildSeoPageMetadata(page: SeoPage): Metadata {
  const path = pagePath(page.slug);

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: [
      page.keyword,
      BRAND.name,
      BRAND.shortName,
      "Azbaan attestation",
      "certificate attestation",
      "azbaanglobal.com",
    ],
    alternates: { canonical: path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}${path}`,
      type: "website",
      locale: isLocationPage(page) ? "en_IN" : "en_AE",
      siteName: BRAND.name,
      images: [{ url: HERO_IMAGE.src, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

function buildFaqNode(page: SeoPage, pageUrl: string) {
  return {
    "@type": "FAQPage" as const,
    "@id": `${pageUrl}/#faq`,
    mainEntity: page.faq.map((item) => ({
      "@type": "Question" as const,
      name: item.question,
      acceptedAnswer: { "@type": "Answer" as const, text: item.answer },
    })),
  };
}

export function buildLocationPageStructuredData(
  page: LocationSeoPage,
  location: Location,
  breadcrumbs?: BreadcrumbItem[],
) {
  const pageUrl = `${SITE_URL}/${page.slug}`;
  const crumbItems = breadcrumbs ?? buildSeoPageBreadcrumbs(page);

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbSchema(crumbItems),
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: page.title,
        description: page.description,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${pageUrl}/#localbusiness` },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${pageUrl}/#localbusiness`,
        name: location.seoTitle,
        alternateName: [BRAND.shortName, BRAND.name],
        description: page.description,
        url: pageUrl,
        image: HERO_IMAGE.src,
        email: SITE.email,
        telephone: [location.phone1.trim(), location.phone2.trim()].filter(Boolean),
        priceRange: "$$",
        sameAs: ORGANIZATION_SAME_AS,
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.lat,
          longitude: location.lng,
        },
        hasMap: location.directions,
        address: {
          "@type": "PostalAddress",
          streetAddress: location.streetAddress,
          addressLocality: location.locality,
          addressRegion: location.region,
          postalCode: location.postalCode || undefined,
          addressCountry: location.countryCode,
        },
        areaServed: { "@type": "City", name: location.locality },
        knowsAbout: [...location.seoKeywords, page.keyword],
      },
      buildFaqNode(page, pageUrl),
      {
        "@type": "Service",
        name: page.keyword,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: location.locality,
        description: page.intro,
      },
    ],
  };
}

export function buildServicePageStructuredData(
  page: ServiceSeoPage,
  breadcrumbs?: BreadcrumbItem[],
) {
  const pageUrl = `${SITE_URL}/${page.slug}`;
  const crumbItems = breadcrumbs ?? buildSeoPageBreadcrumbs(page);
  const servedLocations = page.relatedLocations
    .map((key) => LOCATIONS.find((entry) => entry.key === key))
    .filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbSchema(crumbItems),
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: page.title,
        description: page.description,
        inLanguage: "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${pageUrl}/#service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: page.serviceType,
        alternateName: [page.keyword, page.h1],
        description: page.description,
        url: pageUrl,
        image: HERO_IMAGE.src,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: servedLocations.map((location) => ({
          "@type": "City",
          name: location!.locality,
        })),
        serviceType: page.serviceType,
        knowsAbout: [page.keyword, ...page.services],
      },
      buildFaqNode(page, pageUrl),
    ],
  };
}

export function buildSeoPageStructuredData(page: SeoPage, location?: Location) {
  if (isLocationPage(page)) {
    if (!location) {
      throw new Error(`Location required for page ${page.slug}`);
    }
    return buildLocationPageStructuredData(page, location, buildSeoPageBreadcrumbs(page));
  }

  return buildServicePageStructuredData(page, buildSeoPageBreadcrumbs(page));
}

/** @deprecated Use buildSeoPageMetadata instead. */
export const buildLocationPageMetadata = buildSeoPageMetadata;
