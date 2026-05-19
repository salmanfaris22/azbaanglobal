import type { MetadataRoute } from "next";
import { SITE } from "@/shared/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description:
      "Certificate attestation, apostille, MOFA, embassy, and consulate services in Dubai, UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf8",
    theme_color: "#fffaf8",
    icons: [
      {
        src: SITE.logoSrc,
        sizes: "192x192",
        type: "image/jpeg",
      },
    ],
  };
}
