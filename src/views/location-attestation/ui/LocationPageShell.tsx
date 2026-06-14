"use client";

import Link from "next/link";
import type { Locale } from "@/shared/config/i18n";
import { localizedPath } from "@/shared/config/i18n";
import {
  BackgroundScene,
  ContactRail,
  FloatingWhatsApp,
  SkipLink,
} from "@/shared/ui/PageChrome";
import { Brand } from "@/shared/ui/Brand";
import { Container } from "@/shared/ui/Container";
import { LanguageSwitcher } from "@/shared/ui/LanguageSwitcher";
import { ThemeProvider } from "@/features/theme";
import { ThemeToggle } from "@/features/theme";

export function LocationPageShell({
  children,
  locale = "en",
}: {
  children: React.ReactNode;
  locale?: Locale;
}) {
  const homeHref = localizedPath("/", locale);

  return (
    <ThemeProvider>
      <SkipLink />
      <BackgroundScene />
      <ContactRail />
      <FloatingWhatsApp />

      <header className="site-header scrolled location-subheader">
        <Container className="nav-shell nav-shell--subpage">
          <Brand href={homeHref} showTagline={false} ariaLabel="Azbaan global home" />
          <nav className="location-subnav" aria-label="Subpage navigation">
            <Link href={homeHref}>Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href={localizedPath("/#contact", locale)}>Contact</Link>
            <LanguageSwitcher className="language-switcher--compact" />
            <ThemeToggle />
          </nav>
        </Container>
      </header>

      <main id="main">{children}</main>

      <footer className="footer location-footer">
        <Container className="footer-shell">
          <LanguageSwitcher />
          <p className="footer-copy">
            © {new Date().getFullYear()} Azbaan global ·{" "}
            <Link href={homeHref}>azbaanglobal.com</Link>
          </p>
        </Container>
      </footer>
    </ThemeProvider>
  );
}
