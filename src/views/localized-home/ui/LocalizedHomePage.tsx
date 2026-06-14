import Link from "next/link";
import type { Locale } from "@/shared/config/i18n";
import { HOME_I18N, localizedPath, t } from "@/shared/config/i18n";
import { getPagesByKind } from "@/shared/config/seo-pages";
import { WHATSAPP_URL, SITE } from "@/shared/config/site";
import { LanguageSwitcher } from "@/shared/ui/LanguageSwitcher";
import { Container } from "@/shared/ui/Container";
import { LocationPageShell } from "@/views/location-attestation";

type LocalizedHomePageProps = {
  locale: Exclude<Locale, "en">;
};

export function LocalizedHomePage({ locale }: LocalizedHomePageProps) {
  const copy = HOME_I18N[locale];
  const cityPages = getPagesByKind("location").slice(0, 6);
  const servicePages = getPagesByKind("service").slice(0, 4);

  return (
    <LocationPageShell locale={locale}>
      <section className="location-hero section">
        <Container>
          <LanguageSwitcher />
          <p className="location-hero__eyebrow">Azbaan global</p>
          <h1 className="location-hero__title">{copy.h1}</h1>
          <p className="location-hero__copy">{copy.intro}</p>
          <div className="location-hero__actions">
            <a className="button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {t(locale, "whatsApp")} {SITE.phoneIndiaAlt}
            </a>
            <Link className="button-secondary" href={localizedPath("/#contact", locale)}>
              {t(locale, "contactUs")}
            </Link>
          </div>
        </Container>
      </section>

      <section className="section section-alt">
        <Container>
          <h2>{t(locale, "services")}</h2>
          <div className="location-related__links">
            {cityPages.map((page) => (
              <Link key={page.slug} href={localizedPath(`/${page.slug}`, locale)}>
                {page.h1}
              </Link>
            ))}
            {servicePages.map((page) => (
              <Link key={page.slug} href={localizedPath(`/${page.slug}`, locale)}>
                {page.h1}
              </Link>
            ))}
          </div>
          <p className="blog-article__byline" style={{ marginTop: 24 }}>
            <Link href="/">{t(locale, "backHome")} (English)</Link>
            {" · "}
            <Link href="/blog">{t(locale, "blog")}</Link>
          </p>
        </Container>
      </section>
    </LocationPageShell>
  );
}
