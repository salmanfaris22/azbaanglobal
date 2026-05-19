export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Azbaan global",
    description:
      "Azbaan global provides legal international global services in Dubai, UAE for educational, personal, commercial, MOFA, embassy, and consulate requirements.",
    email: "info@Azbaanglobal.com",
    telephone: "+971 4 338 8893",
    areaServed: "UAE",
    knowsAbout: [
      "International global Services",
      "MOFA global",
      "Embassy global",
      "Consulate global",
      "Educational Certificate global",
      "Commercial Document global",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Tawhidi Building 1, Office #502, Burdubai",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Azbaan global",
    description:
      "Professional global services in Dubai, UAE supporting international certificate verification, embassy legalization, consulate assistance, and MOFA follow-up.",
    serviceType: [
      "Personal Certificate global",
      "Educational Certificate global",
      "Commercial Document global",
      "MOFA global",
      "Embassy and Consulate global",
      "Apostille Support",
    ],
    email: "info@Azbaanglobal.com",
    telephone: "+91 79027 77721",
    areaServed: "UAE",
  },
] as const;
