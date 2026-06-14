"use client";

import Link from "next/link";
import {
  BackgroundScene,
  ContactRail,
  FloatingWhatsApp,
  SkipLink,
} from "@/shared/ui/PageChrome";
import { Brand } from "@/shared/ui/Brand";
import { Container } from "@/shared/ui/Container";
import { ThemeProvider } from "@/features/theme";
import { ThemeToggle } from "@/features/theme";

export function LocationPageShell({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SkipLink />
      <BackgroundScene />
      <ContactRail />
      <FloatingWhatsApp />

      <header className="site-header scrolled location-subheader">
        <Container className="nav-shell">
          <Brand href="/" showTagline={false} ariaLabel="Azbaan global home" />
          <nav className="location-subnav" aria-label="Subpage navigation">
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#contact">Contact</Link>
            <ThemeToggle />
          </nav>
        </Container>
      </header>

      <main id="main">{children}</main>

      <footer className="footer location-footer">
        <Container className="footer-shell">
          <p className="footer-copy">
            © {new Date().getFullYear()} Azbaan global ·{" "}
            <Link href="/">azbaanglobal.com</Link>
          </p>
        </Container>
      </footer>
    </ThemeProvider>
  );
}
