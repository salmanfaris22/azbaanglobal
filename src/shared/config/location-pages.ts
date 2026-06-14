import type { LocationKey } from "@/entities/location/model/locations";

export type LocationPageConfig = {
  slug: string;
  locationKey: LocationKey;
  title: string;
  description: string;
  h1: string;
  keyword: string;
  intro: string;
  services: readonly string[];
  faq: readonly { question: string; answer: string }[];
};

export const LOCATION_PAGES: LocationPageConfig[] = [
  {
    slug: "attestation-services-delhi",
    locationKey: "delhi",
    keyword: "attestation services Delhi",
    title: "Attestation Services Delhi | Azbaan global — Indian Certificate Attestation",
    description:
      "Azbaan global offers Indian attestation services in Delhi at Connaught Place — personal, educational, and commercial certificate attestation for UAE, MOFA, embassy, and apostille use.",
    h1: "Attestation services in Delhi",
    intro:
      "Azbaan (Azbaan global) provides top attestation services in Delhi for customers who need Indian certificate attestation before UAE MOFA, embassy, or international use. Visit our Antriksh Bhawan office on K.G Marg, Connaught Place, or contact us on WhatsApp for fast guidance.",
    services: [
      "Personal certificate attestation — birth, marriage, and family documents",
      "Educational attestation — degrees, diplomas, transcripts, and school records",
      "Commercial document attestation for business and trade use",
      "MEA, HRD, embassy, and UAE MOFA coordination from Delhi",
      "Apostille guidance for overseas education and employment",
    ],
    faq: [
      {
        question: "Where is Azbaan global attestation office in Delhi?",
        answer:
          "Azbaan global is at Office No-122, Antriksh Bhawan, 22 K.G Marg, Connaught Place, New Delhi 110001. Call or WhatsApp for attestation services Delhi appointments.",
      },
      {
        question: "Does Azbaan provide Indian attestation services for UAE?",
        answer:
          "Yes. Our Delhi team handles Indian attestation services for UAE visa, work, family, and education requirements including embassy and MOFA follow-up.",
      },
    ],
  },
  {
    slug: "attestation-services-dubai",
    locationKey: "dubai",
    keyword: "attestation services Dubai",
    title: "Attestation Services Dubai | Azbaan global — MOFA & Embassy UAE",
    description:
      "Best attestation services in Dubai by Azbaan global — MOFA attestation, embassy coordination, certificate attestation, and consulate support in Al Qusais, UAE.",
    h1: "Attestation services in Dubai",
    intro:
      "Azbaan global delivers professional attestation services in Dubai for personal, educational, and commercial documents. From MOFA attestation to embassy and consulate legalization, our Al Qusais team supports accurate UAE and international document processing.",
    services: [
      "MOFA attestation Dubai for UAE ministry requirements",
      "Embassy and consulate attestation coordination",
      "Personal and educational certificate attestation",
      "Commercial document legalization for business use",
      "Apostille and cross-border document support for 40+ countries",
    ],
    faq: [
      {
        question: "Where is Azbaan global in Dubai?",
        answer:
          "Our Dubai office is at Sheikha Mhara Building, Office No 218/16, 2nd Floor, Near Al Twar Center, Al Qusais. Contact Azbaan for attestation services Dubai.",
      },
      {
        question: "What MOFA attestation services does Azbaan offer in Dubai?",
        answer:
          "We guide customers through MOFA attestation, embassy steps, and certificate verification so documents are valid for UAE visa, employment, education, and commercial use.",
      },
    ],
  },
  {
    slug: "attestation-services-kochi",
    locationKey: "kochi",
    keyword: "attestation services Kochi",
    title: "Attestation Services Kochi | Azbaan global — Kerala Certificate Attestation",
    description:
      "Azbaan global attestation services in Kochi, Kerala — degree attestation, apostille, embassy, and UAE document legalization from Pallimukku, Ernakulam.",
    h1: "Attestation services in Kochi",
    intro:
      "Azbaan global supports attestation services in Kochi for Kerala customers preparing documents for UAE, Gulf, and international use. Our Kochi office handles educational, personal, and commercial certificate attestation with clear process guidance.",
    services: [
      "Degree and diploma attestation for UAE and abroad",
      "Birth, marriage, and personal certificate attestation",
      "Embassy and MOFA route planning from Kerala",
      "Commercial attestation for business and export paperwork",
      "Fast consultation before documents enter the process",
    ],
    faq: [
      {
        question: "Where is Azbaan global attestation office in Kochi?",
        answer:
          "Azbaan Global Attestation & Apostille Services is in Pallimukku, Kochi, Ernakulam, Kerala 682016. Reach us for attestation services Kochi on phone or WhatsApp.",
      },
      {
        question: "Can Azbaan help with Kerala degree attestation for UAE?",
        answer:
          "Yes. We assist with educational certificate attestation from Kochi for UAE employment, visa, and higher education, including required ministry and embassy steps.",
      },
    ],
  },
];

export const LOCATION_PAGE_BY_SLUG = Object.fromEntries(
  LOCATION_PAGES.map((page) => [page.slug, page]),
) as Record<string, LocationPageConfig>;

export const LOCATION_PAGE_SLUGS = LOCATION_PAGES.map((page) => page.slug);
