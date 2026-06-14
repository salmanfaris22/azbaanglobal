export const LOCALES = ["en", "hi", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  ar: "العربية",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en",
  hi: "hi",
  ar: "ar",
};

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
