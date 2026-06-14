import { LOCATIONS } from "@/entities/location";
import { SITE, WHATSAPP_URL, MAILTO_URL } from "@/shared/config/site";
import { WhatsAppIcon } from "@/shared/ui/icons/WhatsAppIcon";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";
import { ContactForm } from "@/features/contact-form";

const CONTACT_OFFICES = LOCATIONS.filter((location) =>
  ["dubai", "delhi", "kochi"].includes(location.key),
);

export function ContactSection() {
  return (
    <Section id="contact" variant="alt" trackSection>
      <Container>
        <SectionHead
          label="Contact"
          title="Contact Azbaan global for document, certificate, and embassy support."
          copy="Reach out for document review, country-specific requirements, educational certificate support, commercial global, or MOFA-related assistance in Dubai, UAE."
        />

        <div className="contact-grid">
          <Reveal variant="reveal-left" className="contact-card">
            <h3>Connect with Azbaan global</h3>
            <p>
              We provide professional support to acquire UAE global for personal, educational,
              commercial, MOFA, apostille, and related certificates.
            </p>

            <a
              className="contact-chip contact-chip--whatsapp contact-chip--whatsapp-glow"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-chip__icon" aria-hidden="true">
                <WhatsAppIcon />
              </span>
              <strong>WhatsApp</strong>
              <span>{SITE.phoneIndiaAlt}</span>
            </a>

            <div className="contact-chip">
              <strong>Email</strong>
              <a href={MAILTO_URL} aria-label="Email Azbaan global">
                Send us an email
              </a>
            </div>

            <div className="contact-offices">
              <h4>Office addresses</h4>
              {CONTACT_OFFICES.map((office) => (
                <address key={office.key} className="contact-office">
                  <strong>{office.label}</strong>
                  <span>{office.title}</span>
                  <a href={`tel:${office.phone1.replace(/\s/g, "")}`}>{office.phone1.trim()}</a>
                </address>
              ))}
            </div>

            <div className="contact-chip">
              <strong>Call</strong>
              <span>
                <a href={`tel:${SITE.phoneIndia.replace(/\s/g, "")}`}>{SITE.phoneIndia}</a>
                {" / "}
                <a href="tel:+97143388893">{SITE.phoneUae}</a>
              </span>
            </div>
          </Reveal>

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
