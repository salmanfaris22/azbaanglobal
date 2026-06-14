import type { Metadata } from "next";
import { HOME_I18N } from "@/shared/config/i18n";
import { buildHreflangAlternates } from "@/shared/config/i18n";
import { LocalizedHomePage } from "@/views/localized-home";

export const metadata: Metadata = {
  title: { absolute: HOME_I18N.ar.title },
  description: HOME_I18N.ar.description,
  alternates: {
    canonical: "/ar",
    languages: buildHreflangAlternates("/"),
  },
};

export default function ArabicHomePage() {
  return <LocalizedHomePage locale="ar" />;
}
