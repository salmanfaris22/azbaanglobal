import Link from "next/link";
import { LOCATIONS } from "@/entities/location/model/locations";
import type { LocationSeoPage, ServiceSeoPage } from "@/shared/config/seo-pages";
import { getPagesByKind, getRelatedPages, isLocationPage } from "@/shared/config/seo-pages";
import type { Locale } from "@/shared/config/i18n";
import { localizedPath, t } from "@/shared/config/i18n";
import { applyLocaleToSeoPage } from "@/shared/lib/localeSeo";
import { buildSeoPageBreadcrumbs } from "@/shared/lib/seoPageSeo";
import { WHATSAPP_URL, SITE } from "@/shared/config/site";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";

type ServiceAttestationPageProps = {
  page: ServiceSeoPage;
  locale?: Locale;
};

export function ServiceAttestationPage({ page, locale = "en" }: ServiceAttestationPageProps) {
  const localized = applyLocaleToSeoPage(page, locale);
  const relatedPages = getRelatedPages(page);
  const locationPages: LocationSeoPage[] = getPagesByKind("location").filter(
    (entry): entry is LocationSeoPage =>
      isLocationPage(entry) && page.relatedLocations.includes(entry.locationKey),
  );
  const breadcrumbs = buildSeoPageBreadcrumbs(page, locale);
  const homeHref = localizedPath("/", locale);

  return (
    <article className="location-page service-page">
      <section className="location-hero section">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <p className="location-hero__eyebrow">
            <Link href={homeHref}>Azbaan global</Link> · {page.serviceType}
          </p>
          <h1 className="location-hero__title">{localized.h1}</h1>
          <p className="location-hero__copy">{localized.intro}</p>
          <div className="location-hero__actions">
            <a className="button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              {t(locale, "whatsApp")} {SITE.phoneIndiaAlt}
            </a>
            <Button href={localizedPath("/#contact", locale)} variant="secondary">
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
            <h2>Offices for this service</h2>
            <div className="service-office-list">
              {locationPages.map((entry) => {
                const location = LOCATIONS.find((item) => item.key === entry.locationKey)!;
                return (
                  <div key={entry.slug} className="service-office-card">
                    <strong>{location.label}</strong>
                    <span>{location.address}</span>
                    <Link href={localizedPath(`/${entry.slug}`, locale)}>
                      View {location.label} page
                    </Link>
                  </div>
                );
              })}
            </div>
            <p className="location-office__phones">
              <span>{SITE.phoneIndia}</span>
              <span>{SITE.phoneUae}</span>
            </p>
          </aside>
        </Container>
      </section>

      <section className="section">
        <Container>
          <h2 className="location-faq__title">FAQ — {page.serviceType}</h2>
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
                href={localizedPath(`/${entry.slug}`, locale)}
              >
                {entry.h1}
              </Link>
            ))}
            <Link href={homeHref}>{t(locale, "backHome")}</Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
