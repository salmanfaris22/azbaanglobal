import Link from "next/link";
import { LOCATIONS } from "@/entities/location/model/locations";
import type { ServiceSeoPage } from "@/shared/config/seo-pages";
import { getPagesByKind, getRelatedPages } from "@/shared/config/seo-pages";
import { WHATSAPP_URL, SITE } from "@/shared/config/site";
import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";

type ServiceAttestationPageProps = {
  page: ServiceSeoPage;
};

export function ServiceAttestationPage({ page }: ServiceAttestationPageProps) {
  const relatedPages = getRelatedPages(page);
  const locationPages = getPagesByKind("location").filter((entry) =>
    page.relatedLocations.includes(entry.locationKey),
  );

  return (
    <article className="location-page service-page">
      <section className="location-hero section">
        <Container>
          <p className="location-hero__eyebrow">
            <Link href="/">Azbaan global</Link> · {page.serviceType}
          </p>
          <h1 className="location-hero__title">{page.h1}</h1>
          <p className="location-hero__copy">{page.intro}</p>
          <div className="location-hero__actions">
            <a className="button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp {SITE.phoneIndiaAlt}
            </a>
            <Button href="/#contact" variant="secondary">
              Get a quote
            </Button>
          </div>
        </Container>
      </section>

      <section className="section section-alt">
        <Container className="location-grid">
          <div className="location-copy">
            <h2>{page.keyword} — Azbaan global</h2>
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
                    <Link href={`/${entry.slug}`}>View {location.label} page</Link>
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
          <h2>Related attestation services</h2>
          <div className="location-related__links">
            {relatedPages.map((entry) => (
              <Link key={entry.slug} href={`/${entry.slug}`}>
                {entry.h1}
              </Link>
            ))}
            <Link href="/">Back to homepage</Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
