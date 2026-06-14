import type { MetadataRoute } from "next";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/shared/config/seo-keywords";
import { SITE } from "@/shared/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: DEFAULT_TITLE,
    short_name: SITE.shortName,
    description: DEFAULT_DESCRIPTION,
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
