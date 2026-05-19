import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";
import { COUNTRIES, CountryCard } from "@/entities/country";

export function CountriesSection() {
  return (
    <Section id="countries" variant="alt" trackSection className="section-countries">
      <Container>
        <SectionHead
          label="Global"
          title="Countries We Serve"
          copy="Worldwide global support for personal, educational, and business documents."
        />

        <Reveal className="countries-panel">
          <p className="countries-intro">
            Fast and reliable document global across major global destinations.
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
