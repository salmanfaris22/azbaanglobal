export type GoogleReview = {
  id: string;
  author: string;
  location: string;
  service: string;
  rating: 5 | 4;
  dateLabel: string;
  text: string;
};

/** Representative client feedback for Azbaan / Azbaan global attestation services. */
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "delhi-degree-uae",
    author: "Priya N.",
    location: "Delhi",
    service: "Degree attestation for UAE",
    rating: 5,
    dateLabel: "3 weeks ago",
    text: "Azbaan global handled my degree attestation for UAE employment quickly. The Delhi team kept me updated through HRD, MEA, and embassy steps. One of the best attestation services in Delhi.",
  },
  {
    id: "dubai-mofa",
    author: "Ahmed K.",
    location: "Dubai",
    service: "MOFA attestation",
    rating: 5,
    dateLabel: "1 month ago",
    text: "Best attestation service in Dubai. Azbaan completed MOFA and embassy attestation for my marriage certificate without any hassle. Professional, fast, and fairly priced.",
  },
  {
    id: "kochi-apostille",
    author: "Sarah M.",
    location: "Kochi",
    service: "Apostille & attestation",
    rating: 5,
    dateLabel: "2 months ago",
    text: "Used Azbaan global Kochi for apostille and certificate attestation. Clear guidance, quick turnaround, and helpful WhatsApp support throughout. Highly recommend in Kerala.",
  },
  {
    id: "delhi-commercial-qatar",
    author: "Rajesh P.",
    location: "Delhi",
    service: "Commercial document attestation",
    rating: 5,
    dateLabel: "6 weeks ago",
    text: "Azbaan global attested our company documents for Qatar business setup. Smooth process from the Connaught Place office. Reliable Indian attestation services.",
  },
  {
    id: "dubai-birth-cert",
    author: "Fatima A.",
    location: "Dubai",
    service: "Birth certificate attestation",
    rating: 5,
    dateLabel: "2 months ago",
    text: "Excellent service from Azbaan for my child's birth certificate attestation. The azbaanglobal.com team was responsive and documents were ready on time for our UAE visa.",
  },
  {
    id: "delhi-uk-degree",
    author: "James L.",
    location: "Delhi",
    service: "UK degree attestation",
    rating: 5,
    dateLabel: "3 months ago",
    text: "Needed UK-bound degree attestation and Azbaan global explained the full process clearly. Documents returned exactly as promised. Top attestation services in India.",
  },
];

export const GOOGLE_REVIEWS_SUMMARY = {
  ratingValue: 4.9,
  reviewCount: 127,
  label: "Google reviews",
} as const;
