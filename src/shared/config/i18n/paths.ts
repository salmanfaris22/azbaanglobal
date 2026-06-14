import type { Locale } from "./locales";
import { DEFAULT_LOCALE } from "./locales";

/** Build a localized path. English uses root URLs without /en prefix. */
export function localizedPath(path: string, locale: Locale = DEFAULT_LOCALE): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return normalized;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}

export function buildHreflangAlternates(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return {
    en: normalized,
    hi: localizedPath(normalized, "hi"),
    ar: localizedPath(normalized, "ar"),
  };
}

/** Strip locale prefix from pathname to get base path. */
export function stripLocalePrefix(pathname: string): string {
  if (pathname.startsWith("/hi/")) return pathname.slice(3) || "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3) || "/";
  if (pathname === "/hi" || pathname === "/ar") return "/";
  return pathname;
}

export function detectLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/hi")) return "hi";
  if (pathname.startsWith("/ar")) return "ar";
  return "en";
}
