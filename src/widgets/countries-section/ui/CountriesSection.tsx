import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";
import { COUNTRIES, CountryCard } from "@/entities/country";

export function CountriesSection() {
  return (
    <Section id="countries" variant="alt" trackSection className="section-countries">
      <Container>
        <SectionHead
          label="Countries We Serve"
          title="Attestation services for 40+ countries worldwide"
          copy="Azbaan global (azbaanglobal.com) delivers top attestation services for personal, educational, and commercial documents across major international destinations."
        />

        <Reveal className="countries-panel">
          <p className="countries-intro">
            From UAE and Indian attestation routes to embassy and consulate legalization — Azbaan
            supports certificate attestation for every country listed below.
          </p>
          <div className="country-grid">
            {COUNTRIES.map((country) => (
              <CountryCard key={country.code} country={country} />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
