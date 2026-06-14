import { SITE, WHATSAPP_URL, MAILTO_URL } from "@/shared/config/site";
import { WhatsAppIcon } from "@/shared/ui/icons/WhatsAppIcon";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";
import { ContactForm } from "@/features/contact-form";

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
          <Reveal variant="reveal-left" className="contact-card" >
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
              <a href={MAILTO_URL}>{SITE.email}</a>
            </div>

            <div className="contact-chip">
              <strong>Office</strong>
              <span>{SITE.office}</span>
            </div>

            <div className="contact-chip">
              <strong>Call</strong>
              <span>
                {SITE.phoneIndia} / {SITE.phoneIndiaAlt}
              </span>
            </div>
          </Reveal>

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
