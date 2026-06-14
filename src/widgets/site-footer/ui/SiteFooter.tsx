import { NAV_LINKS } from "@/shared/config/site";
import { Brand } from "@/shared/ui/Brand";
import { Container } from "@/shared/ui/Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container className="footer-shell">
        <Brand
          href="#top"
          showTagline
          ariaLabel="Azbaan global footer brand"
        />

        <p className="footer-copy">
          © {year} Azbaan global. International global services, countries coverage,
          consulate support, and premium responsive presentation included.
        </p>

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
      </Container>
    </footer>
  );
}
