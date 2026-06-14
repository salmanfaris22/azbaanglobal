import { COUNTRY_SEO_PAGES } from "./country-pages";
import { LOCATION_SEO_PAGES } from "./location-pages";
import { SERVICE_SEO_PAGES } from "./service-pages";
import type {
  LocationSeoPage,
  SeoPage,
  ServiceSeoPage,
} from "./types";
import { isCountryPage, isLocationPage, isServicePage } from "./types";

export const ALL_SEO_PAGES: SeoPage[] = [
  ...LOCATION_SEO_PAGES,
  ...SERVICE_SEO_PAGES,
  ...COUNTRY_SEO_PAGES,
];

export const SEO_PAGE_BY_SLUG = Object.fromEntries(
  ALL_SEO_PAGES.map((page) => [page.slug, page]),
) as Record<string, SeoPage>;

export const SEO_PAGE_SLUGS = ALL_SEO_PAGES.map((page) => page.slug);

export const LOCATION_PAGES = LOCATION_SEO_PAGES;
export const SERVICE_PAGES = SERVICE_SEO_PAGES;

export const LOCATION_PAGE_BY_SLUG = Object.fromEntries(
  LOCATION_SEO_PAGES.map((page) => [page.slug, page]),
) as Record<string, LocationSeoPage>;

export const LOCATION_PAGE_SLUGS = LOCATION_SEO_PAGES.map((page) => page.slug);

export const SERVICE_PAGE_BY_SLUG = Object.fromEntries(
  SERVICE_SEO_PAGES.map((page) => [page.slug, page]),
) as Record<string, ServiceSeoPage>;

export const SERVICE_PAGE_SLUGS = SERVICE_SEO_PAGES.map((page) => page.slug);

export function getSeoPage(slug: string): SeoPage | undefined {
  return SEO_PAGE_BY_SLUG[slug];
}

export function getRelatedPages(page: SeoPage): SeoPage[] {
  return page.relatedSlugs
    .map((slug) => SEO_PAGE_BY_SLUG[slug])
    .filter((entry): entry is SeoPage => Boolean(entry));
}

export function getPagesByKind(kind: SeoPage["kind"]): SeoPage[] {
  return ALL_SEO_PAGES.filter((page) => page.kind === kind);
}

export { isCountryPage, isLocationPage, isServicePage };
