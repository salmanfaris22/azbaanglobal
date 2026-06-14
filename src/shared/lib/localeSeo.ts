import type { Locale } from "@/shared/config/i18n";
import { getLocalizedSeoFields } from "@/shared/config/i18n";
import type { SeoPage } from "@/shared/config/seo-pages";

export type LocalizedSeoContent = {
  title: string;
  description: string;
  h1: string;
  intro: string;
};

export function applyLocaleToSeoPage(page: SeoPage, locale: Locale): LocalizedSeoContent {
  return getLocalizedSeoFields(page.slug, locale, {
    title: page.title,
    description: page.description,
    h1: page.h1,
    intro: page.intro,
  });
}
