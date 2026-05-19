import type { Metadata } from "next";
import { SITE, SITE_URL } from "./site";

const defaultTitle =
  "Azbaan global | Attestation & Apostille Services in Dubai, UAE";
const defaultDescription =
  "Azbaan global provides certificate attestation, apostille, MOFA, embassy, and consulate legalization in Dubai, UAE. Personal, educational, and commercial documents for 40+ countries.";

const ogImageAlt =
  "Azbaan global — attestation and apostille services in Dubai, UAE";

const ogImageFallback =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=75";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      description: defaultDescription,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE.name,
      url: SITE_URL,
      email: SITE.email,
      telephone: SITE.phoneUae,
      logo: `${SITE_URL}${SITE.logoSrc}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al Tawhidi Building 1, Office #502, Burdubai",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      sameAs: [],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE.name,
      url: SITE_URL,
      image: ogImageFallback,
      description: defaultDescription,
      email: SITE.email,
      telephone: [SITE.phoneUae, SITE.phoneIndiaAlt],
      areaServed: ["AE", "IN", "QA"],
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al Tawhidi Building 1, Office #502, Burdubai",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      serviceType: [
        "Personal Certificate Attestation",
        "Educational Certificate Attestation",
        "Commercial Document Attestation",
        "MOFA Attestation",
        "Embassy and Consulate Legalization",
        "Apostille Services",
      ],
      knowsAbout: [
        "Document attestation UAE",
        "MOFA attestation Dubai",
        "Embassy legalization",
        "Certificate apostille",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: defaultTitle,
      description: defaultDescription,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#service` },
      inLanguage: "en",
    },
  ],
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: defaultDescription,
  keywords: [
    "attestation services Dubai",
    "apostille UAE",
    "MOFA attestation Dubai",
    "embassy attestation UAE",
    "certificate attestation Dubai",
    "document legalization UAE",
    "Azbaan global",
    "educational certificate attestation",
    "commercial document attestation",
  ],
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Legal Services",
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
    siteName: SITE.name,
    title: defaultTitle,
    description: defaultDescription,
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
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImageFallback],
  },
  icons: {
    icon: SITE.logoSrc,
    apple: SITE.logoSrc,
  },
  other: {
    "theme-color": "#fffaf8",
  },
};

export const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t||"light"}catch(e){}})();`;
