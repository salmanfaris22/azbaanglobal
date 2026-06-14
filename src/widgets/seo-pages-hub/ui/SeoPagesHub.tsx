import Link from "next/link";
import { getPagesByKind } from "@/shared/config/seo-pages";
import { Container } from "@/shared/ui/Container";
import { Section, SectionHead } from "@/shared/ui/Section";

export function SeoPagesHub() {
  const locationPages = getPagesByKind("location");
  const servicePages = getPagesByKind("service");
  const countryPages = getPagesByKind("country");

  return (
    <Section id="seo-pages" variant="alt">
      <Container>
        <SectionHead
          label="Find a service"
          title="Azbaan global attestation pages by city, country, and service type"
          copy="Browse dedicated SEO pages for attestation services in Dubai, Delhi, Kochi, destination countries like Australia and the UK, and specialist MOFA, degree, and commercial document support."
        />

        <div className="seo-hub">
          <div className="seo-hub__group">
            <h2>City attestation pages</h2>
            <div className="seo-hub__links">
              {locationPages.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`} className="seo-hub__link">
                  <strong>{page.h1}</strong>
                  <span>{page.keyword}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="seo-hub__group">
            <h2>Country attestation pages</h2>
            <div className="seo-hub__links">
              {countryPages.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`} className="seo-hub__link">
                  <strong>{page.h1}</strong>
                  <span>{page.keyword}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="seo-hub__group seo-hub__group--wide">
            <h2>Service attestation pages</h2>
            <div className="seo-hub__links">
              {servicePages.map((page) => (
                <Link key={page.slug} href={`/${page.slug}`} className="seo-hub__link">
                  <strong>{page.h1}</strong>
                  <span>{page.keyword}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
