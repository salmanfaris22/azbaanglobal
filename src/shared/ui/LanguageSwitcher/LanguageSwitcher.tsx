"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LOCALE_LABELS,
  LOCALES,
  detectLocaleFromPath,
  localizedPath,
  stripLocalePrefix,
  t,
} from "@/shared/config/i18n";

type LanguageSwitcherProps = {
  className?: string;
};

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const pathname = usePathname() || "/";
  const currentLocale = detectLocaleFromPath(pathname);
  const basePath = stripLocalePrefix(pathname);

  return (
    <div className={className ? `language-switcher ${className}` : "language-switcher"}>
      <span className="language-switcher__label">{t(currentLocale, "selectLanguage")}</span>
      <div
        className="language-switcher__options"
        role="group"
        aria-label={t(currentLocale, "languagePrompt")}
      >
        {LOCALES.map((locale) => {
          const href = localizedPath(basePath, locale);
          const isActive = locale === currentLocale;

          return (
            <Link
              key={locale}
              href={href}
              hrefLang={locale}
              className={`language-switcher__btn${isActive ? " is-active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {LOCALE_LABELS[locale]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
