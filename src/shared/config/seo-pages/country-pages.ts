import type { CountrySeoPage } from "./types";

const LAST_UPDATED = "2025-06-01";

function countryPage(
  slug: string,
  countryCode: string,
  countryName: string,
  keyword: string,
  title: string,
  description: string,
  h1: string,
  intro: string,
  body: readonly string[],
  services: readonly string[],
  faq: CountrySeoPage["faq"],
  relatedSlugs: readonly string[],
): CountrySeoPage {
  return {
    kind: "country",
    slug,
    countryCode,
    countryName,
    keyword,
    title,
    description,
    h1,
    intro,
    body,
    services,
    faq,
    sitemapPriority: 0.85,
    sitemapLastModified: LAST_UPDATED,
    relatedSlugs,
  };
}

export const COUNTRY_SEO_PAGES: CountrySeoPage[] = [
  countryPage(
    "attestation-for-australia",
    "au",
    "Australia",
    "Australia attestation services",
    "Australia Attestation Services | Azbaan global — Document Legalization",
    "Azbaan global Australia attestation services — Indian and UAE document legalization for employment, study, and migration to Australia.",
    "Attestation services for Australia",
    "Azbaan global helps customers attest personal, educational, and commercial documents for use in Australia, including MEA apostille and embassy routes from India and UAE coordination.",
    [
      "Australia accepts Hague apostille for many Indian documents, while UAE-origin files may require MOFA and embassy steps before Australian authorities approve them. Azbaan global maps the correct route based on document origin and purpose.",
      "Students, skilled migrants, and professionals rely on Azbaan for degree attestation, police clearance coordination, and commercial document bundles bound for Australian employers and licensing bodies.",
    ],
    [
      "MEA apostille for Australia-bound Indian documents",
      "Degree and transcript attestation guidance",
      "Birth and marriage certificate legalization",
      "Commercial document attestation for business migration",
      "Consultation from Dubai, Delhi, and Kochi offices",
    ],
    [
      {
        question: "Do Indian documents need apostille or attestation for Australia?",
        answer:
          "Many Indian documents require MEA apostille for Australia as a Hague Convention destination. Azbaan global confirms whether your document needs apostille or full embassy attestation.",
      },
      {
        question: "Can Azbaan help with Australia visa document bundles?",
        answer:
          "Yes. We review visa document lists for skilled migration, student visas, and family cases before submission to avoid rejection.",
      },
    ],
    ["apostille-services-india", "attestation-services-delhi", "degree-attestation-uae", "attestation-for-new-zealand"],
  ),
  countryPage(
    "attestation-for-uk",
    "gb",
    "UK",
    "UK attestation services UAE",
    "UK Attestation Services | Azbaan global — Degree & Certificate Legalization",
    "UK degree and certificate attestation support by Azbaan global — Indian MEA, embassy, and UAE MOFA routes for United Kingdom use.",
    "Attestation services for the United Kingdom",
    "Azbaan global supports UK-bound document attestation for Indian degrees, personal certificates, and commercial paperwork with HRD, MEA, and embassy coordination.",
    [
      "United Kingdom employers and universities often require properly legalized Indian documents. The attestation chain typically includes state verification, MEA, and UK embassy steps before documents are accepted.",
      "Azbaan global Delhi and Kerala offices specialize in UK degree attestation for employment and Tier visa documentation with clear timelines and status updates.",
    ],
    [
      "UK degree and diploma attestation from India",
      "Personal certificate attestation for UK family visa",
      "Commercial document legalization",
      "HRD and MEA coordination",
      "Guidance for UAE residents sending documents to UK",
    ],
    [
      {
        question: "How do I attest an Indian degree for the UK?",
        answer:
          "Most Indian degrees require HRD or state attestation, MEA attestation, and UK embassy legalization. Azbaan global manages the full sequence from Delhi and Kochi.",
      },
      {
        question: "Does Azbaan handle UK document attestation from Dubai?",
        answer:
          "Yes. We support UAE-based customers who need Indian documents attested for UK employment or study with cross-border coordination.",
      },
    ],
    ["degree-attestation-uae", "indian-attestation-services", "attestation-services-delhi", "attestation-for-australia"],
  ),
  countryPage(
    "attestation-for-canada",
    "ca",
    "Canada",
    "Canada attestation services",
    "Canada Attestation Services | Azbaan global — Immigration Documents",
    "Canada attestation and apostille support by Azbaan global for Indian personal, educational, and commercial documents.",
    "Attestation services for Canada",
    "Azbaan global assists with Canada-bound document attestation including MEA apostille, embassy steps, and consultation for Express Entry and study abroad paperwork.",
    [
      "Canada immigration and study cases often require attested degrees, police documents, and civil certificates. Indian documents may use MEA apostille where accepted, or full attestation where required by IRCC or institutions.",
      "Azbaan global reviews document bundles before submission so Canadian immigration and university requirements are met the first time.",
    ],
    [
      "Educational credential attestation for Canada",
      "Birth and marriage certificate legalization",
      "Commercial attestation for business immigration",
      "Apostille vs attestation route planning",
      "Support from Delhi, Kochi, and Dubai",
    ],
    [
      {
        question: "Is apostille enough for Canadian immigration documents?",
        answer:
          "Many Indian documents use MEA apostille for Canada, but some cases require additional verification. Azbaan confirms requirements for your visa category.",
      },
      {
        question: "Can Azbaan attest documents in Kerala for Canada?",
        answer:
          "Yes. Our Kochi and Kozhikode offices support Kerala-issued documents for Canada with MEA and supporting state steps.",
      },
    ],
    ["apostille-services-india", "attestation-services-kochi", "attestation-for-usa", "attestation-for-australia"],
  ),
  countryPage(
    "attestation-for-usa",
    "us",
    "USA",
    "USA attestation services UAE",
    "USA Attestation Services | Azbaan global — Certificate Legalization",
    "USA attestation services by Azbaan global — Indian document legalization for employment, study, and business in the United States.",
    "Attestation services for the USA",
    "Azbaan global provides USA-bound document attestation support for degrees, personal certificates, and commercial documents from India and UAE coordination channels.",
    [
      "United States visa and university processes may require authenticated Indian documents through MEA apostille or embassy attestation depending on document type and receiving authority.",
      "Azbaan global helps professionals and students prepare attested files for US employers, credential evaluators, and immigration workflows.",
    ],
    [
      "Indian degree attestation for USA employment",
      "Apostille and embassy route guidance",
      "Personal document attestation for family visa",
      "Commercial paperwork for US business expansion",
      "Delhi and Dubai office coordination",
    ],
    [
      {
        question: "What attestation is needed for USA job visas?",
        answer:
          "Requirements vary by visa type and employer. Azbaan global reviews your offer letter and document list to recommend the correct Indian attestation or apostille path.",
      },
      {
        question: "Does Azbaan support USA-bound documents from UAE?",
        answer:
          "Yes. We coordinate Indian-origin documents for customers based in Dubai and other emirates who need USA legalization.",
      },
    ],
    ["degree-attestation-uae", "indian-attestation-services", "attestation-for-canada", "attestation-services-dubai"],
  ),
  countryPage(
    "attestation-for-qatar",
    "qa",
    "Qatar",
    "Qatar attestation services",
    "Qatar Attestation Services | Azbaan global — Gulf Document Legalization",
    "Qatar document attestation by Azbaan global — Indian MEA, embassy, and ministry steps for Doha employment and visa.",
    "Attestation services for Qatar",
    "Azbaan global supports Qatar-bound attestation for degrees, experience certificates, and commercial documents with Indian and UAE office coordination.",
    [
      "Qatar employment and family visa cases require properly attested Indian documents through MEA and embassy channels before QVC and ministry approval in Doha.",
      "Azbaan global helps avoid visa delays by reviewing document bundles and managing attestation sequences from Delhi, Kochi, and Dubai support teams.",
    ],
    [
      "Degree attestation for Qatar employment",
      "Personal certificate attestation for family visa",
      "Commercial document legalization",
      "Indian MEA and embassy coordination",
      "QVC document bundle review",
    ],
    [
      {
        question: "How long does Qatar attestation take?",
        answer:
          "Timelines depend on document type and embassy queues. Azbaan provides estimates after reviewing your sponsor requirements.",
      },
      {
        question: "Is Qatar attestation different from UAE attestation?",
        answer:
          "Yes. Qatar has separate embassy and ministry requirements. Azbaan global plans the correct route for your destination country.",
      },
    ],
    ["attestation-services-qatar", "commercial-document-attestation", "indian-attestation-services", "attestation-for-saudi-arabia"],
  ),
  countryPage(
    "attestation-for-saudi-arabia",
    "sa",
    "Saudi Arabia",
    "Saudi Arabia attestation services",
    "Saudi Arabia Attestation Services | Azbaan global — KSA Legalization",
    "Saudi Arabia document attestation by Azbaan global — Indian certificates for KSA employment, visa, and commercial use.",
    "Attestation services for Saudi Arabia",
    "Azbaan global coordinates attestation for Saudi Arabia employment visas, family sponsorship, and commercial documents from India and UAE.",
    [
      "Saudi Arabia (KSA) requires attested educational, personal, and commercial documents for work visas, iqama processing, and business registration. Indian documents typically pass through state, MEA, and Saudi embassy attestation.",
      "Azbaan global supports professionals and companies with accurate paperwork for KSA sponsors and PRO departments.",
    ],
    [
      "Degree attestation for Saudi employment visa",
      "Experience and police document guidance",
      "Commercial attestation for KSA business",
      "Embassy and MEA coordination from India",
      "Cross-support from Dubai office",
    ],
    [
      {
        question: "Does Azbaan handle Saudi embassy attestation from India?",
        answer:
          "Yes. We coordinate MEA and Saudi embassy attestation for eligible document types from Delhi and Kerala offices.",
      },
      {
        question: "Can UAE residents use Azbaan for KSA document attestation?",
        answer:
          "Yes. We guide UAE-based customers who need Indian documents attested for Saudi employment and visa cases.",
      },
    ],
    ["indian-attestation-services", "degree-attestation-uae", "attestation-for-qatar", "attestation-services-delhi"],
  ),
  countryPage(
    "attestation-for-france",
    "fr",
    "France",
    "France attestation services",
    "France Attestation Services | Azbaan global — EU Document Legalization",
    "France attestation and apostille services by Azbaan global for Indian documents bound for employment and study in France.",
    "Attestation services for France",
    "Azbaan global helps with France-bound document legalization including MEA apostille for Hague routes and embassy attestation where required.",
    [
      "France as a Hague Convention member often accepts MEA apostille on Indian documents for study and employment. Some civil and commercial documents may need additional steps.",
      "Azbaan global determines apostille vs full attestation before you submit to French universities, employers, or prefectures.",
    ],
    [
      "MEA apostille for France-bound documents",
      "Degree attestation for French universities",
      "Personal certificate legalization",
      "Commercial document support",
      "Consultation from India and UAE offices",
    ],
    [
      {
        question: "Do Indian degrees need apostille for France?",
        answer:
          "Most Indian educational documents for France use MEA apostille. Azbaan confirms with your institution or employer requirements.",
      },
      {
        question: "Can Azbaan help with France visa document lists?",
        answer:
          "Yes. We review long-stay visa and student visa document bundles before attestation begins.",
      },
    ],
    ["apostille-services-india", "attestation-for-uk", "attestation-services-delhi", "attestation-for-australia"],
  ),
  countryPage(
    "attestation-for-new-zealand",
    "nz",
    "New Zealand",
    "New Zealand attestation services",
    "New Zealand Attestation Services | Azbaan global — Migration Documents",
    "New Zealand attestation and apostille by Azbaan global for Indian personal and educational documents.",
    "Attestation services for New Zealand",
    "Azbaan global supports New Zealand-bound document attestation with MEA apostille guidance and full legalization where required for skilled migration and study.",
    [
      "New Zealand immigration often requires authenticated Indian documents. Hague apostille through MEA is common for many certificate types bound for NZ employers and INZ processes.",
      "Azbaan global helps migrants and students prepare compliant document sets from Delhi, Kochi, and Dubai coordination channels.",
    ],
    [
      "Apostille for New Zealand immigration",
      "Degree and skills assessment document support",
      "Personal certificate attestation",
      "Commercial document guidance",
      "Azbaan global multi-office coordination",
    ],
    [
      {
        question: "Is MEA apostille accepted in New Zealand?",
        answer:
          "Many Indian documents use MEA apostille for New Zealand. Azbaan verifies requirements for your visa or skills assessment pathway.",
      },
      {
        question: "Does Azbaan support NZ-bound documents from Kerala?",
        answer:
          "Yes. Kochi and Kozhikode offices handle Kerala-issued documents for New Zealand with state and MEA steps.",
      },
    ],
    ["apostille-services-india", "attestation-for-australia", "attestation-services-kochi", "attestation-for-canada"],
  ),
];
