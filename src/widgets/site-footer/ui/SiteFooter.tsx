import { FOOTER_SOCIAL_LINKS } from "@/shared/config/social";
import { NAV_LINKS, SITE, TEL_UAE_URL } from "@/shared/config/site";
import { LOCATIONS } from "@/entities/location";
import { Brand } from "@/shared/ui/Brand";
import { Container } from "@/shared/ui/Container";

const FOOTER_OFFICES = LOCATIONS.filter((location) =>
  ["dubai", "delhi", "kochi"].includes(location.key),
);

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer-shell">
        <div className="footer-brand-block">
          <Brand
            href="#top"
            showTagline
            ariaLabel="Azbaan global footer brand"
          />

          <p className="footer-copy">
            © {year} Azbaan global. International attestation services, embassy support, and
            document legalization across UAE, India, and 40+ countries.
          </p>
        </div>

        <div className="footer-contact">
          <h2 className="footer-contact__title">Office locations</h2>
          {FOOTER_OFFICES.map((office) => (
            <address key={office.key} className="footer-contact__office">
              <strong>{office.label}</strong>
              <span>{office.title}</span>
              <a href={`tel:${office.phone1.replace(/\s/g, "")}`}>{office.phone1.trim()}</a>
            </address>
          ))}
          <p className="footer-contact__phone">
            <strong>UAE:</strong> <a href={TEL_UAE_URL}>{SITE.phoneUae}</a>
            {" · "}
            <strong>India:</strong>{" "}
            <a href={`tel:${SITE.phoneIndia.replace(/\s/g, "")}`}>{SITE.phoneIndia}</a>
          </p>
        </div>

        <div className="footer-nav-block">
          <div className="footer-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="/attestation-services-delhi">Delhi attestation</a>
            <a href="/attestation-services-dubai">Dubai attestation</a>
            <a href="/attestation-services-kochi">Kochi attestation</a>
          </div>

          {FOOTER_SOCIAL_LINKS.length > 0 ? (
            <div className="footer-social">
              {FOOTER_SOCIAL_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="me noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
