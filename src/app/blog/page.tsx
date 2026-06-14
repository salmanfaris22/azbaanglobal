import {
  buildBlogIndexMetadata,
  buildBlogIndexStructuredData,
} from "@/shared/lib/blogSeo";
import { BlogIndexPage } from "@/views/blog";
import { LocationPageShell } from "@/views/location-attestation";

export const metadata = buildBlogIndexMetadata();

export default function BlogIndexRoute() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ];
  const structuredData = buildBlogIndexStructuredData(breadcrumbs);

  return (
    <LocationPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogIndexPage />
    </LocationPageShell>
  );
}
