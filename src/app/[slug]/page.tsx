import { notFound } from "next/navigation";
import { LOCATIONS } from "@/entities/location/model/locations";
import {
  SEO_PAGE_SLUGS,
  getSeoPage,
  isLocationPage,
} from "@/shared/config/seo-pages";
import {
  buildSeoPageMetadata,
  buildSeoPageStructuredData,
} from "@/shared/lib/seoPageSeo";
import {
  LocationAttestationPage,
  LocationPageShell,
} from "@/views/location-attestation";
import { ServiceAttestationPage } from "@/views/service-attestation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SEO_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};
  return buildSeoPageMetadata(page);
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  if (isLocationPage(page)) {
    const location = LOCATIONS.find((entry) => entry.key === page.locationKey);
    if (!location) {
      notFound();
    }

    const structuredData = buildSeoPageStructuredData(page, location);

    return (
      <LocationPageShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LocationAttestationPage page={page} location={location} />
      </LocationPageShell>
    );
  }

  const structuredData = buildSeoPageStructuredData(page);

  return (
    <LocationPageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServiceAttestationPage page={page} />
    </LocationPageShell>
  );
}
