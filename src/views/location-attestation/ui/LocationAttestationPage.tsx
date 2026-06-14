import Link from "next/link";
import type { Location } from "@/entities/location/model/locations";
import type { LocationPageConfig } from "@/shared/config/location-pages";
import { LOCATION_PAGES } from "@/shared/config/location-pages";
import { WHATSAPP_URL, SITE } from "@/shared/config/site";
import { Container } from "@/shared/ui/Container";
import { Button } from "@/shared/ui/Button";

type LocationAttestationPageProps = {
  page: LocationPageConfig;
  location: Location;
};

export function LocationAttestationPage({ page, location }: LocationAttestationPageProps) {
  const otherPages = LOCATION_PAGES.filter((entry) => entry.slug !== page.slug);

  return (
    <article className="location-page">
      <section className="location-hero section">
        <Container>
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
            <p>
              As a trusted attestation service provider at azbaanglobal.com, Azbaan global helps
              customers in {location.label} with accurate paperwork, embassy coordination, and
              reliable communication throughout the legalization journey.
            </p>
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
          <h2>Other Azbaan attestation offices</h2>
          <div className="location-related__links">
            {otherPages.map((entry) => (
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
