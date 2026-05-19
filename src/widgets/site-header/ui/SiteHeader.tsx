"use client";

import type { RefObject } from "react";
import { cn } from "@/shared/lib/cn";
import { NAV_LINKS } from "@/shared/config/site";
import { Brand } from "@/shared/ui/Brand";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { ThemeToggle } from "@/features/theme";
import { useTheme } from "@/features/theme";

type SiteHeaderProps = {
  headerRef: RefObject<HTMLElement | null>;
  isScrolled: boolean;
  isHeaderHidden: boolean;
  activeSectionId: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function SiteHeader({
  headerRef,
  isScrolled,
  isHeaderHidden,
  activeSectionId,
  isMenuOpen,
  onToggleMenu,
  onCloseMenu,
}: SiteHeaderProps) {
  const { mobileLabel, toggleTheme } = useTheme();

  return (
    <header
      ref={headerRef}
      className={cn(
        "site-header",
        isScrolled && "scrolled",
        isHeaderHidden && "header-hidden",
      )}
      id="siteHeader"
    >
      <Container className="nav-shell">
        <Brand />

        <nav className="desktop-nav" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className={cn(
                "nav-link",
                activeSectionId === link.href.slice(1) && "active",
              )}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Button href="#contact" variant="secondary">
            Call Us
          </Button>
          <button
            className="menu-button"
            id="menuButton"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobilePanel"
            aria-label="Toggle menu"
            onClick={onToggleMenu}
          >
            <span>Menu</span>
            <span className="menu-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </Container>

      <div className={cn("mobile-panel", isMenuOpen && "open")} id="mobilePanel">
        <Container className="mobile-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={onCloseMenu}>
              {link.label}
            </a>
          ))}
          <button id="mobileThemeToggle" type="button" onClick={toggleTheme}>
            {mobileLabel}
          </button>
        </Container>
      </div>
    </header>
  );
}
