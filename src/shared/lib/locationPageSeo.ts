import type { Metadata } from "next";
import type { Location } from "@/entities/location/model/locations";
import type { LocationPageConfig } from "@/shared/config/location-pages";
import { BRAND } from "@/shared/config/seo-keywords";
import { ORGANIZATION_SAME_AS } from "@/shared/config/social";
import { HERO_IMAGE } from "@/shared/config/images";
import { SITE, SITE_URL } from "@/shared/config/site";

export function buildLocationPageMetadata(page: LocationPageConfig): Metadata {
  const path = `/${page.slug}`;

  return {
    title: {
      absolute: page.title,
    },
    description: page.description,
    keywords: [
      page.keyword,
      BRAND.name,
      BRAND.shortName,
      "Azbaan attestation",
      "certificate attestation",
      "MOFA attestation",
      "embassy attestation",
    ],
    alternates: { canonical: path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}${path}`,
      type: "website",
      locale: "en_IN",
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

export function buildLocationPageStructuredData(
  page: LocationPageConfig,
  location: Location,
) {
  const pageUrl = `${SITE_URL}/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
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
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}/#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
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
