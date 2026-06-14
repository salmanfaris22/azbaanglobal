import Link from "next/link";
import type { CountrySeoPage } from "@/shared/config/seo-pages";
import { getRelatedPages } from "@/shared/config/seo-pages";
import { buildSeoPageBreadcrumbs } from "@/shared/lib/seoPageSeo";
import type { Locale } from "@/shared/config/i18n";
import { t } from "@/shared/config/i18n";
import { WHATSAPP_URL, SITE } from "@/shared/config/site";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";
import { applyLocaleToSeoPage } from "@/shared/lib/localeSeo";

type CountryAttestationPageProps = {
  page: CountrySeoPage;
  locale?: Locale;
};

export function CountryAttestationPage({ page, locale = "en" }: CountryAttestationPageProps) {
  const localized = applyLocaleToSeoPage(page, locale);
  const relatedPages = getRelatedPages(page);
  const breadcrumbs = buildSeoPageBreadcrumbs(page, locale);

  return (
    <article className="location-page country-page">
      <section className="location-hero section">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <p className="location-hero__eyebrow">
            <Link href={locale === "en" ? "/" : `/${locale}`}>Azbaan global</Link> ·{" "}
            {page.countryName}
          </p>
          <h1 className="location-hero__title">{localized.h1}</h1>
          <p className="location-hero__copy">{localized.intro}</p>
          <div className="location-hero__actions">
            <a className="button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {t(locale, "whatsApp")} {SITE.phoneIndiaAlt}
            </a>
            <Button href={locale === "en" ? "/#contact" : `/${locale}#contact`} variant="secondary">
              {t(locale, "contactUs")}
            </Button>
          </div>
        </Container>
      </section>

      <section className="section section-alt">
        <Container className="location-grid">
          <div className="location-copy">
            <h2>
              {page.keyword} — Azbaan global
            </h2>
            {page.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <ul className="location-services">
              {page.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <aside className="location-office">
            <h2>Azbaan offices</h2>
            <p>
              Document attestation for {page.countryName} is coordinated from our Dubai, Delhi,
              Kochi, and Kozhikode offices with WhatsApp support across UAE and India.
            </p>
            <p className="location-office__phones">
              <span>{SITE.phoneIndia}</span>
              <span>{SITE.phoneUae}</span>
            </p>
            <Link className="direction-btn" href="/attestation-services-dubai">
              Dubai office
            </Link>
          </aside>
        </Container>
      </section>

      <section className="section">
        <Container>
          <h2 className="location-faq__title">FAQ — {page.countryName}</h2>
          <div className="location-faq">
            {page.faq.map((item) => (
              <details key={item.question} className="location-faq__item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section-alt location-related">
        <Container>
          <h2>{t(locale, "relatedPages")}</h2>
          <div className="location-related__links">
            {relatedPages.map((entry) => (
              <Link
                key={entry.slug}
                href={locale === "en" ? `/${entry.slug}` : `/${locale}/${entry.slug}`}
              >
                {entry.h1}
              </Link>
            ))}
            <Link href={locale === "en" ? "/" : `/${locale}`}>{t(locale, "backHome")}</Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
