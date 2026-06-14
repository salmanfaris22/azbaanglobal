import type { Metadata } from "next";
import { HOME_I18N } from "@/shared/config/i18n";
import { buildHreflangAlternates } from "@/shared/config/i18n";
import { LocalizedHomePage } from "@/views/localized-home";

export const metadata: Metadata = {
  title: { absolute: HOME_I18N.hi.title },
  description: HOME_I18N.hi.description,
  alternates: {
    canonical: "/hi",
    languages: buildHreflangAlternates("/"),
  },
};

export default function HindiHomePage() {
  return <LocalizedHomePage locale="hi" />;
}
