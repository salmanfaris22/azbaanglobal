const unsplash = (photoId: string, width: number) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=80`;

/** Verified working Unsplash IDs — certificate, document, and attestation themed only. */
export const CERTIFICATE_IMAGES = {
  embassy: {
    src: unsplash("1691356078906-291004fdbf2b", 1400),
    alt: "Embassy building with national flags for document legalization coordination",
  },
  documentHandling: {
    src: unsplash("1562564055-71e051d33c19", 900),
    alt: "Professional document handling for legal paperwork and certificates",
  },
  verification: {
    src: unsplash("1559588501-59a118c47e59", 900),
    alt: "Certificate document prepared for verification accuracy checks",
  },
  signing: {
    src: unsplash("1450101499163-c8848c66ca85", 1200),
    alt: "Certificate signing and legal attestation paperwork",
  },
  archive: {
    src: unsplash("1481627834876-b7833e8f5570", 900),
    alt: "Official documents and certificates prepared for verification",
  },
  education: {
    src: unsplash("1434030216411-0b793f4b4173", 900),
    alt: "Educational certificates and degree documents for attestation",
  },
  processing: {
    src: unsplash("1600880292203-757bb62b4baf", 900),
    alt: "Certificate review and attestation processing support",
  },
} as const;

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80";
