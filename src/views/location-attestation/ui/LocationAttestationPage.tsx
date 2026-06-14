import Link from "next/link";
import type { Location } from "@/entities/location/model/locations";
import type { LocationSeoPage } from "@/shared/config/seo-pages";
import { getPagesByKind, getRelatedPages } from "@/shared/config/seo-pages";
import { buildSeoPageBreadcrumbs } from "@/shared/lib/seoPageSeo";
import { WHATSAPP_URL, SITE } from "@/shared/config/site";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";
import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";

type LocationAttestationPageProps = {
  page: LocationSeoPage;
  location: Location;
};

export function LocationAttestationPage({ page, location }: LocationAttestationPageProps) {
  const relatedPages = getRelatedPages(page);
  const servicePages = getPagesByKind("service").slice(0, 4);
  const breadcrumbs = buildSeoPageBreadcrumbs(page);

  return (
    <article className="location-page">
      <section className="location-hero section">
        <Container>
          <Breadcrumbs items={breadcrumbs} />
          <p className="location-hero__eyebrow">
            <Link href="/">Azbaan global</Link> · {location.label}
          </p>
          <h1 className="location-hero__title">{page.h1}</h1>
          <p className="location-hero__copy">{page.intro}</p>
          <div className="location-hero__actions">
            <a className="button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              WhatsApp {SITE.phoneIndiaAlt}
            </a>
            <Button href="/#contact" variant="secondary">
              Contact office
            </Button>
          </div>
        </Container>
      </section>

      <section className="section section-alt">
        <Container className="location-grid">
          <div className="location-copy">
            <h2>{page.keyword} by Azbaan</h2>
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
            <h2>Office &amp; map</h2>
            <p className="location-office__address">
              <strong>{location.title}</strong>
              <span>{location.address}</span>
            </p>
            <p className="location-office__phones">
              <span>{location.phone1.trim()}</span>
              {location.phone2 ? <span>{location.phone2.trim()}</span> : null}
            </p>
            <div className="location-map">
              <iframe
                title={`${location.seoTitle} map`}
                src={location.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              className="direction-btn"
              href={location.directions}
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
          </aside>
        </Container>
      </section>

      <section className="section">
        <Container>
          <h2 className="location-faq__title">FAQ — {location.label}</h2>
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
          <h2>Related attestation pages</h2>
          <div className="location-related__links">
            {relatedPages.map((entry) => (
              <Link key={entry.slug} href={`/${entry.slug}`}>
                {entry.h1}
              </Link>
            ))}
            {servicePages.map((entry) => (
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
