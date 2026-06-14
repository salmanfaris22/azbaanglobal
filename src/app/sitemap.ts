import type { MetadataRoute } from "next";
import { SITE_URL } from "@/shared/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["services", "countries", "locations", "contact", "faq"] as const;

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sections.map((section) => ({
      url: `${SITE_URL}/#${section}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: section === "services" ? 0.9 : 0.85,
    })),
  ];
}
