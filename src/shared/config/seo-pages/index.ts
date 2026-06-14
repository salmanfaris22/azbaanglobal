export type {
  LocationSeoPage,
  SeoFaqEntry,
  SeoPage,
  SeoPageBase,
  ServiceSeoPage,
} from "./types";
export { isLocationPage, isServicePage } from "./types";

export { LOCATION_SEO_PAGES } from "./location-pages";
export { SERVICE_SEO_PAGES } from "./service-pages";

export {
  ALL_SEO_PAGES,
  getPagesByKind,
  getRelatedPages,
  getSeoPage,
  LOCATION_PAGE_BY_SLUG,
  LOCATION_PAGE_SLUGS,
  LOCATION_PAGES,
  SEO_PAGE_BY_SLUG,
  SEO_PAGE_SLUGS,
  SERVICE_PAGE_BY_SLUG,
  SERVICE_PAGE_SLUGS,
  SERVICE_PAGES,
} from "./registry";
