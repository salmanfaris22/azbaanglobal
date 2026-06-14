import { FOOTER_SOCIAL_LINKS } from "@/shared/config/social";
import { getPagesByKind } from "@/shared/config/seo-pages";
import { NAV_LINKS, SITE, TEL_UAE_URL } from "@/shared/config/site";
import { LOCATIONS } from "@/entities/location";
import { Brand } from "@/shared/ui/Brand";
import { Container } from "@/shared/ui/Container";
import Link from "next/link";

const FOOTER_OFFICES = LOCATIONS.filter((location) =>
  ["dubai", "delhi", "kochi", "kozhikode", "mumbai"].includes(location.key),
);

export function SiteFooter() {
  const year = new Date().getFullYear();
  const locationPages = getPagesByKind("location");
  const servicePages = getPagesByKind("service");
  const countryPages = getPagesByKind("country");

  return (
    <footer className="footer">
      <Container className="footer-shell footer-shell--expanded">
        <div className="footer-brand-block">
          <Brand href="/" showTagline ariaLabel="Azbaan global footer brand" />

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
          </div>

          <div className="footer-seo-links">
            <h2 className="footer-contact__title">Blog</h2>
            <div className="footer-links">
              <Link href="/blog">All attestation guides</Link>
            </div>
          </div>

          <div className="footer-seo-links">
            <h2 className="footer-contact__title">City pages</h2>
            <div className="footer-links">
              {locationPages.map((page) => (
                <a key={page.slug} href={`/${page.slug}`}>
                  {page.h1}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-seo-links">
            <h2 className="footer-contact__title">Country pages</h2>
            <div className="footer-links">
              {countryPages.map((page) => (
                <a key={page.slug} href={`/${page.slug}`}>
                  {page.h1}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-seo-links">
            <h2 className="footer-contact__title">Service pages</h2>
            <div className="footer-links">
              {servicePages.map((page) => (
                <a key={page.slug} href={`/${page.slug}`}>
                  {page.h1}
                </a>
              ))}
            </div>
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
