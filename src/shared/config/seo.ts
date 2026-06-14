import type { Metadata } from "next";
import { COUNTRIES } from "@/entities/country/model/countries";
import { LOCATIONS } from "@/entities/location/model/locations";
import { HERO_IMAGE } from "./images";
import {
  BRAND,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  FAQ_ENTRIES,
  SEO_KEYWORDS,
} from "./seo-keywords";
import { LOCATION_PAGES } from "./location-pages";
import { ORGANIZATION_SAME_AS } from "./social";
import { SITE, SITE_URL } from "./site";

const ogImageAlt = HERO_IMAGE.alt;
const ogImageFallback = HERO_IMAGE.src;

function buildLocalBusinessNodes() {
  return LOCATIONS.map((location) => {
    const cityPage = LOCATION_PAGES.find((page) => page.locationKey === location.key);
    const pageUrl = cityPage ? `${SITE_URL}/${cityPage.slug}` : `${SITE_URL}/#locations`;

    return {
    "@type": "LocalBusiness" as const,
    "@id": `${SITE_URL}/#location-${location.key}`,
    name: location.seoTitle,
    alternateName: [BRAND.shortName, BRAND.name],
    description: `${BRAND.name} provides ${location.seoKeywords[0]} at ${location.title}. Contact Azbaan for certificate attestation, apostille, MOFA, and embassy support.`,
    url: pageUrl,
    image: ogImageFallback,
    email: SITE.email,
    telephone: [location.phone1.trim(), location.phone2.trim()].filter(Boolean),
    priceRange: "$$",
    geo: {
      "@type": "GeoCoordinates" as const,
      latitude: location.lat,
      longitude: location.lng,
    },
    hasMap: location.directions,
    address: {
      "@type": "PostalAddress" as const,
      streetAddress: location.streetAddress,
      addressLocality: location.locality,
      addressRegion: location.region,
      postalCode: location.postalCode || undefined,
      addressCountry: location.countryCode,
    },
    areaServed: {
      "@type": "City" as const,
      name: location.locality,
    },
    knowsAbout: location.seoKeywords,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
  });
}

function buildCountryListNode() {
  return {
    "@type": "ItemList" as const,
    "@id": `${SITE_URL}/#countries-served`,
    name: "Countries We Serve — Azbaan global Attestation Services",
    description:
      "Azbaan global attestation and legalization support across major international destinations.",
    numberOfItems: COUNTRIES.length,
    itemListElement: COUNTRIES.map((country, index) => ({
      "@type": "ListItem" as const,
      position: index + 1,
      name: country.seoLabel,
      description: `${BRAND.name} ${country.seoLabel} for personal, educational, and commercial documents.`,
    })),
  };
}

function buildFaqNode() {
  return {
    "@type": "FAQPage" as const,
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ_ENTRIES.map((entry) => ({
      "@type": "Question" as const,
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: entry.answer,
      },
    })),
  };
}

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BRAND.name,
      alternateName: [...BRAND.alternateNames],
      description: DEFAULT_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: BRAND.name,
      alternateName: [...BRAND.alternateNames],
      url: SITE_URL,
      email: SITE.email,
      telephone: [SITE.phoneUae, SITE.phoneIndiaAlt],
      logo: `${SITE_URL}${SITE.logoSrc}`,
      sameAs: ORGANIZATION_SAME_AS,
      address: {
        "@type": "PostalAddress",
        streetAddress: LOCATIONS[0].streetAddress,
        addressLocality: LOCATIONS[0].locality,
        addressRegion: LOCATIONS[0].region,
        addressCountry: LOCATIONS[0].countryCode,
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: `${BRAND.name} — Attestation Services`,
      alternateName: [
        "Azbaan Attestation Services",
        "best attestation services",
        "top attestation services",
        "Indian attestation services",
      ],
      url: SITE_URL,
      image: ogImageFallback,
      description: DEFAULT_DESCRIPTION,
      email: SITE.email,
      telephone: [SITE.phoneUae, SITE.phoneIndiaAlt],
      areaServed: COUNTRIES.map((country) => country.name),
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: LOCATIONS[0].streetAddress,
        addressLocality: LOCATIONS[0].locality,
        addressRegion: LOCATIONS[0].region,
        addressCountry: LOCATIONS[0].countryCode,
      },
      serviceType: [
        "Attestation Services",
        "Personal Certificate Attestation",
        "Educational Certificate Attestation",
        "Commercial Document Attestation",
        "MOFA Attestation",
        "Embassy and Consulate Legalization",
        "Apostille Services",
        "Indian Attestation Services",
      ],
      knowsAbout: [...SEO_KEYWORDS],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Azbaan global Attestation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Attestation Services Dubai",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Indian Attestation Services Delhi",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Certificate Attestation UAE",
            },
          },
        ],
      },
    },
    buildCountryListNode(),
    buildFaqNode(),
    ...buildLocalBusinessNodes(),
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: [{ "@id": `${SITE_URL}/#service` }, { "@id": `${SITE_URL}/#countries-served` }],
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImageFallback,
        caption: ogImageAlt,
      },
    },
  ],
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND.name,
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${BRAND.name}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: BRAND.name, url: SITE_URL }],
  creator: BRAND.name,
  publisher: BRAND.name,
  category: "Attestation Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: BRAND.name,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: ogImageFallback,
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [ogImageFallback],
  },
  icons: {
    icon: SITE.logoSrc,
    apple: SITE.logoSrc,
  },
  other: {
    "theme-color": "#fffaf8",
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": `${LOCATIONS[0].lat};${LOCATIONS[0].lng}`,
    ICBM: `${LOCATIONS[0].lat}, ${LOCATIONS[0].lng}`,
  },
};

export const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t||"light"}catch(e){}})();`;

export { BRAND, DEFAULT_DESCRIPTION, DEFAULT_TITLE, FAQ_ENTRIES, SEO_KEYWORDS };
