import type { Metadata } from "next";
import type { Location } from "@/entities/location/model/locations";
import { LOCATIONS } from "@/entities/location/model/locations";
import type {
  CountrySeoPage,
  LocationSeoPage,
  SeoPage,
  ServiceSeoPage,
} from "@/shared/config/seo-pages";
import { isCountryPage, isLocationPage } from "@/shared/config/seo-pages";
import type { Locale } from "@/shared/config/i18n";
import { buildHreflangAlternates, localizedPath } from "@/shared/config/i18n";
import { HERO_IMAGE } from "@/shared/config/images";
import { BRAND } from "@/shared/config/seo-keywords";
import { ORGANIZATION_SAME_AS } from "@/shared/config/social";
import { SITE, SITE_URL } from "@/shared/config/site";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/shared/lib/breadcrumbs";

function pagePath(slug: string, locale: Locale = "en") {
  return localizedPath(`/${slug}`, locale);
}

export function getPageOgImageUrl(slug: string) {
  return `${SITE_URL}/${slug}/opengraph-image`;
}

export function buildSeoPageBreadcrumbs(page: SeoPage, locale: Locale = "en"): BreadcrumbItem[] {
  return [
    { label: "Home", href: localizedPath("/", locale) },
    { label: page.h1, href: pagePath(page.slug, locale) },
  ];
}

export function buildSeoPageMetadata(page: SeoPage, locale: Locale = "en"): Metadata {
  const path = pagePath(page.slug, locale);
  const hreflang = buildHreflangAlternates(`/${page.slug}`);

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
    alternates: {
      canonical: path,
      languages: hreflang,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}${path}`,
      type: "website",
      locale: locale === "hi" ? "hi_IN" : locale === "ar" ? "ar_AE" : isLocationPage(page) ? "en_IN" : "en_AE",
      siteName: BRAND.name,
      images: [{ url: getPageOgImageUrl(page.slug), width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [getPageOgImageUrl(page.slug)],
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
  locale: Locale = "en",
) {
  const pageUrl = `${SITE_URL}${pagePath(page.slug, locale)}`;
  const crumbItems = buildSeoPageBreadcrumbs(page, locale);

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
        inLanguage: locale === "hi" ? "hi" : locale === "ar" ? "ar" : "en",
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

export function buildServicePageStructuredData(page: ServiceSeoPage, locale: Locale = "en") {
  const pageUrl = `${SITE_URL}${pagePath(page.slug, locale)}`;
  const crumbItems = buildSeoPageBreadcrumbs(page, locale);
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
        inLanguage: locale === "hi" ? "hi" : locale === "ar" ? "ar" : "en",
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

export function buildCountryPageStructuredData(page: CountrySeoPage, locale: Locale = "en") {
  const pageUrl = `${SITE_URL}${pagePath(page.slug, locale)}`;
  const crumbItems = buildSeoPageBreadcrumbs(page, locale);

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
        inLanguage: locale === "hi" ? "hi" : locale === "ar" ? "ar" : "en",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${pageUrl}/#service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: page.keyword,
        alternateName: [page.countryName, page.h1],
        description: page.description,
        url: pageUrl,
        image: HERO_IMAGE.src,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: page.countryName },
        serviceType: `${page.countryName} attestation`,
        knowsAbout: [page.keyword, ...page.services],
      },
      buildFaqNode(page, pageUrl),
    ],
  };
}

export function buildSeoPageStructuredData(
  page: SeoPage,
  location?: Location,
  locale: Locale = "en",
) {
  if (isLocationPage(page)) {
    if (!location) {
      throw new Error(`Location required for page ${page.slug}`);
    }
    return buildLocationPageStructuredData(page, location, locale);
  }

  if (isCountryPage(page)) {
    return buildCountryPageStructuredData(page, locale);
  }

  return buildServicePageStructuredData(page, locale);
}

/** @deprecated Use buildSeoPageMetadata instead. */
export const buildLocationPageMetadata = buildSeoPageMetadata;
