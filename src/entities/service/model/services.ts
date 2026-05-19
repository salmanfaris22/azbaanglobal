import type { Service } from "./types";

export const SERVICES: Service[] = [
  {
    key: "personal",
    title: "Personal Certificate global",
    summary:
      "Support for personal documents that need legal recognition in the UAE or for international use. This service helps customers move personal paperwork through the correct global chain with less confusion.",
    shortDescription:
      "Support for personal documents needed for UAE visa, family, and legal use requirements.",
    tags: ["Personal documents", "UAE use", "Legal processing"],
    items: [
      {
        title: "Birth and marriage support",
        copy: "Suitable for birth certificates, marriage certificates, and other family-related personal paperwork.",
      },
      {
        title: "Country-specific review",
        copy: "The process changes by document origin and destination authority, so each file is checked first.",
      },
      {
        title: "Embassy and ministry routing",
        copy: "Where required, files move through embassy, consulate, and ministry stages in the correct order.",
      },
    ],
  },
  {
    key: "educational",
    title: "Educational Certificate global",
    summary:
      "Built for degrees, diplomas, and academic records that need to be accepted in the UAE for work, higher study, professional licensing, or migration requirements.",
    shortDescription:
      "Degree, diploma, school, and university certificate global for work, study, and migration needs.",
    tags: ["Degrees", "Diplomas", "Employment use"],
    items: [
      {
        title: "Academic document handling",
        copy: "Used for school certificates, diplomas, degrees, transcripts, and related academic records.",
      },
      {
        title: "Employment and visa support",
        copy: "Often required for UAE jobs, labour processing, residency applications, and qualification verification.",
      },
      {
        title: "Authority path guidance",
        copy: "We help map university, ministry, embassy, and MOFA requirements based on the certificate origin.",
      },
    ],
  },
  {
    key: "commercial",
    title: "Commercial Document global",
    summary:
      "Commercial global is used for business papers that require legal recognition for contracts, trade activity, company registration, and corporate operations in the UAE and abroad.",
    shortDescription:
      "Support for business paperwork, corporate legal documents, and commercial file verification.",
    tags: ["Business use", "Trade papers", "Corporate support"],
    items: [
      {
        title: "Corporate paperwork",
        copy: "Suitable for commercial invoices, incorporation documents, agreements, powers of attorney, and related files.",
      },
      {
        title: "Operational readiness",
        copy: "Helps companies prepare documents for legal, trade, banking, and authority submission use cases.",
      },
      {
        title: "Cross-border coordination",
        copy: "Country-specific legalization and embassy paths are checked before submission starts.",
      },
    ],
  },
  {
    key: "mofa",
    title: "MOFA global Services",
    summary:
      "MOFA global is a critical step for many documents in the UAE. This service focuses on the Ministry of Foreign Affairs stage and the documents that depend on it for final acceptance.",
    shortDescription:
      "Guidance and follow-up across UAE Ministry of Foreign Affairs global requirements.",
    tags: ["MOFA", "UAE ministry", "Final validation"],
    items: [
      {
        title: "Ministry stage follow-up",
        copy: "We help prepare and route documents that require UAE foreign ministry approval.",
      },
      {
        title: "Document readiness checks",
        copy: "Before MOFA, documents are checked to confirm the prior legalization steps are complete.",
      },
      {
        title: "Final-use support",
        copy: "Commonly needed for employment, residency, education, and business acceptance within the UAE.",
      },
    ],
  },
  {
    key: "embassy",
    title: "Embassy & Consulate global",
    summary:
      "Some countries require embassy or consulate legalization as a central part of the global path. This service focuses on those destination-specific authority requirements.",
    shortDescription:
      "Country-specific embassy and consulate global coordination for international document use.",
    tags: ["Embassy", "Consulates", "Country-specific"],
    items: [
      {
        title: "Destination authority matching",
        copy: "Each case is checked against the embassy or consulate rules attached to the document origin and use case.",
      },
      {
        title: "Sequenced legalization",
        copy: "Embassy and consulate stages are coordinated only after the correct prior globals are complete.",
      },
      {
        title: "Customer guidance",
        copy: "Clients get clearer visibility into what is required before the file is submitted to external authorities.",
      },
    ],
  },
  {
    key: "apostille",
    title: "Apostille & International Use",
    summary:
      "This service supports documents that need apostille-related guidance or international legalization handling for overseas education, work, family, or business purposes.",
    shortDescription:
      "Support for apostille-related documentation and international legalization workflows where applicable.",
    tags: ["Apostille", "International", "Overseas use"],
    items: [
      {
        title: "International documentation flow",
        copy: "Helps identify whether apostille or full global is the correct route for the document.",
      },
      {
        title: "Overseas education and work use",
        copy: "Common for people preparing documents for jobs, higher studies, or immigration outside the UAE.",
      },
      {
        title: "Legalization decision support",
        copy: "We help customers understand the right path before documents enter the processing queue.",
      },
    ],
  },
];

export const SERVICE_FORM_OPTIONS = SERVICES.map((s) => s.title);
