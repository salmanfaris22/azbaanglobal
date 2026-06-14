export type Country = {
  code: string;
  name: string;
  description: string;
  seoLabel: string;
};

export const COUNTRIES: Country[] = [
  {
    code: "au",
    name: "Australia",
    description: "Certificate attestation",
    seoLabel: "Australia attestation services",
  },
  {
    code: "vg",
    name: "BVI",
    description: "Legalization support",
    seoLabel: "BVI document legalization",
  },
  {
    code: "ca",
    name: "Canada",
    description: "Certificate attestation",
    seoLabel: "Canada attestation services",
  },
  {
    code: "eg",
    name: "Egypt",
    description: "Document legalization",
    seoLabel: "Egypt certificate attestation",
  },
  {
    code: "fr",
    name: "France",
    description: "Embassy attestation",
    seoLabel: "France attestation services",
  },
  {
    code: "in",
    name: "India",
    description: "UAE attestation route",
    seoLabel: "India to UAE attestation",
  },
  {
    code: "it",
    name: "Italy",
    description: "Embassy attestation",
    seoLabel: "Italy attestation services",
  },
  {
    code: "nl",
    name: "Netherlands",
    description: "Verification support",
    seoLabel: "Netherlands attestation services",
  },
  {
    code: "nz",
    name: "New Zealand",
    description: "Certificate attestation",
    seoLabel: "New Zealand attestation services",
  },
  {
    code: "pk",
    name: "Pakistan",
    description: "Immigration attestation",
    seoLabel: "Pakistan attestation services",
  },
  {
    code: "ph",
    name: "Philippines",
    description: "Document attestation",
    seoLabel: "Philippines attestation services",
  },
  {
    code: "pl",
    name: "Poland",
    description: "Certificate attestation",
    seoLabel: "Poland attestation services",
  },
  {
    code: "qa",
    name: "Qatar",
    description: "Legal attestation",
    seoLabel: "Qatar attestation services",
  },
  {
    code: "ru",
    name: "Russia",
    description: "Document attestation",
    seoLabel: "Russia attestation services",
  },
  {
    code: "sa",
    name: "Saudi",
    description: "Certificate attestation",
    seoLabel: "Saudi Arabia attestation services",
  },
  {
    code: "es",
    name: "Spain",
    description: "Attestation support",
    seoLabel: "Spain attestation services",
  },
  {
    code: "lk",
    name: "Sri Lanka",
    description: "Verification attestation",
    seoLabel: "Sri Lanka attestation services",
  },
  {
    code: "ch",
    name: "Switzerland",
    description: "Embassy attestation",
    seoLabel: "Switzerland attestation services",
  },
  {
    code: "ua",
    name: "Ukraine",
    description: "Document attestation",
    seoLabel: "Ukraine attestation services",
  },
  {
    code: "gb",
    name: "UK",
    description: "Degree attestation",
    seoLabel: "UK degree attestation UAE",
  },
  {
    code: "us",
    name: "USA",
    description: "Certificate attestation",
    seoLabel: "USA attestation services UAE",
  },
];

/** Country names for schema.org areaServed and meta coverage. */
export const COUNTRY_NAMES = COUNTRIES.map((country) => country.name);
