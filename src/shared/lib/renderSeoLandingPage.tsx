import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS } from "@/entities/location/model/locations";
import type { Locale } from "@/shared/config/i18n";
import { buildHreflangAlternates, localizedPath } from "@/shared/config/i18n";
import {
  getSeoPage,
  isCountryPage,
  isLocationPage,
} from "@/shared/config/seo-pages";
import { applyLocaleToSeoPage } from "@/shared/lib/localeSeo";
import {
  buildSeoPageMetadata,
  buildSeoPageStructuredData,
} from "@/shared/lib/seoPageSeo";
import { CountryAttestationPage } from "@/views/country-attestation";
import {
  LocationAttestationPage,
  LocationPageShell,
} from "@/views/location-attestation";
import { ServiceAttestationPage } from "@/views/service-attestation";

type RenderSeoLandingOptions = {
  slug: string;
  locale?: Locale;
};

export function buildLocalizedSeoMetadata(slug: string, locale: Locale = "en"): Metadata {
  const page = getSeoPage(slug);
  if (!page) return {};

  const localized = applyLocaleToSeoPage(page, locale);
  const basePath = `/${slug}`;
  const hreflang = buildHreflangAlternates(basePath);

  return {
    ...buildSeoPageMetadata({
      ...page,
      title: localized.title,
      description: localized.description,
    }),
    alternates: {
      canonical: localizedPath(basePath, locale),
      languages: hreflang,
    },
  };
}

export function renderSeoLandingPage({ slug, locale = "en" }: RenderSeoLandingOptions) {
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  if (isLocationPage(page)) {
    const location = LOCATIONS.find((entry) => entry.key === page.locationKey);
    if (!location) notFound();

    const structuredData = buildSeoPageStructuredData(page, location, locale);

    return (
      <LocationPageShell locale={locale}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LocationAttestationPage page={page} location={location} locale={locale} />
      </LocationPageShell>
    );
  }

  if (isCountryPage(page)) {
    const structuredData = buildSeoPageStructuredData(page, undefined, locale);

    return (
      <LocationPageShell locale={locale}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <CountryAttestationPage page={page} locale={locale} />
      </LocationPageShell>
    );
  }

  const structuredData = buildSeoPageStructuredData(page, undefined, locale);

  return (
    <LocationPageShell locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServiceAttestationPage page={page} locale={locale} />
    </LocationPageShell>
  );
}
