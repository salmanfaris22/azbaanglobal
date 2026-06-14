import { LOCATIONS } from "@/entities/location";
import { Container } from "@/shared/ui/Container";
import { Section, SectionHead } from "@/shared/ui/Section";

const PRIMARY_OFFICES = LOCATIONS.filter((location) =>
  ["dubai", "delhi", "kochi"].includes(location.key),
);

export function SeoContentSection() {
  return (
    <Section id="attestation-guide" variant="alt">
      <Container>
        <SectionHead
          label="Attestation guide"
          title="Certificate attestation services for UAE, India, and international use"
          copy="Azbaan global supports personal, educational, and commercial document legalization with clear guidance at every stage."
        />

        <div className="seo-content">
          <p>
            Azbaan global is a specialist attestation provider helping clients authenticate
            documents for employment, study abroad, family visa, business setup, and legal use
            overseas. Whether you need MOFA attestation in Dubai, Indian attestation services in
            Delhi or Kochi, or embassy coordination for destinations across Europe, North America,
            the Middle East, and Asia, our team manages verification, submission, and follow-up
            with the relevant authorities.
          </p>

          <p>
            Certificate attestation confirms that a document issued in one country is genuine and
            acceptable in another. The process often includes notary verification, state or
            national ministry attestation, embassy or consulate legalization, and final ministry
            approval such as UAE MOFA. Requirements vary by document type and destination country,
            which is why Azbaan reviews each file before processing and explains the correct
            sequence for your case.
          </p>

          <h2>Personal, educational, and commercial attestation</h2>
          <p>
            Personal documents such as birth certificates, marriage certificates, and affidavits
            frequently require attestation for family visa and residency applications. Educational
            certificates including degrees, diplomas, transcripts, and school records must be
            attested for university admission and professional licensing abroad. Commercial
            documents such as invoices, powers of attorney, board resolutions, and company
            certificates are attested for trade, banking, and corporate compliance. Azbaan global
            handles all three categories with dedicated review at our Dubai, Delhi, and Kochi
            offices.
          </p>

          <h2>Why clients choose Azbaan global</h2>
          <p>
            Clients choose Azbaan for accurate paperwork, transparent timelines, and responsive
            support across UAE and India. We coordinate with embassies, consulates, and ministries
            so you avoid repeated visits and rejected submissions. Our coverage extends to 40+
            countries including Australia, Canada, the United Kingdom, the United States, Qatar,
            Saudi Arabia, and major European destinations. For location-specific support, visit our
            dedicated pages for attestation services in Delhi, Dubai, and Kochi.
          </p>

          <h2>Office addresses and phone numbers</h2>
          <ul className="seo-content__offices">
            {PRIMARY_OFFICES.map((office) => (
              <li key={office.key}>
                <strong>{office.label}:</strong> {office.title}
                {" — "}
                <a href={`tel:${office.phone1.replace(/\s/g, "")}`}>{office.phone1.trim()}</a>
              </li>
            ))}
            <li>
              <strong>UAE line:</strong>{" "}
              <a href="tel:+97143388893">+971 4 338 8893</a>
            </li>
          </ul>

          <p>
            Contact Azbaan global through WhatsApp, phone, or the inquiry form on this page for a
            document review. Share your certificate type, issuing country, and destination so we
            can recommend the fastest compliant attestation route for your needs.
          </p>
        </div>
      </Container>
    </Section>
  );
}
