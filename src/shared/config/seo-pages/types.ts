import type { LocationKey } from "@/entities/location/model/locations";

export type SeoFaqEntry = {
  question: string;
  answer: string;
};

export type SeoPageBase = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  keyword: string;
  intro: string;
  body: readonly string[];
  services: readonly string[];
  faq: readonly SeoFaqEntry[];
  sitemapPriority: number;
  sitemapLastModified?: string;
  relatedSlugs: readonly string[];
};

export type LocationSeoPage = SeoPageBase & {
  kind: "location";
  locationKey: LocationKey;
};

export type ServiceSeoPage = SeoPageBase & {
  kind: "service";
  serviceType: string;
  relatedLocations: readonly LocationKey[];
};

export type CountrySeoPage = SeoPageBase & {
  kind: "country";
  countryCode: string;
  countryName: string;
};

export type SeoPage = LocationSeoPage | ServiceSeoPage | CountrySeoPage;

export function isLocationPage(page: SeoPage): page is LocationSeoPage {
  return page.kind === "location";
}

export function isServicePage(page: SeoPage): page is ServiceSeoPage {
  return page.kind === "service";
}

export function isCountryPage(page: SeoPage): page is CountrySeoPage {
  return page.kind === "country";
}
