"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  BackgroundScene,
  ContactRail,
  FloatingWhatsApp,
  ScrollProgress,
  SkipLink,
} from "@/shared/ui/PageChrome";
import { useScrollEffects } from "@/shared/hooks/useScrollEffects";
import { useActiveSection } from "@/shared/hooks/useActiveSection";
import { ServiceModal, useServiceModal } from "@/features/service-modal";
import { ThemeProvider } from "@/features/theme";
import { SiteHeader } from "@/widgets/site-header";
import { SiteFooter } from "@/widgets/site-footer";
import { HeroSection } from "@/widgets/hero-section";
import { ServicesSection } from "@/widgets/services-section";

const AboutSection = dynamic(
  () =>
    import("@/widgets/about-section").then((mod) => ({
      default: mod.AboutSection,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const CountriesSection = dynamic(
  () =>
    import("@/widgets/countries-section").then((mod) => ({
      default: mod.CountriesSection,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const ConsulatesSection = dynamic(
  () =>
    import("@/widgets/consulates-section").then((mod) => ({
      default: mod.ConsulatesSection,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const ProcessSection = dynamic(
  () =>
    import("@/widgets/process-section").then((mod) => ({
      default: mod.ProcessSection,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const BlogSection = dynamic(
  () =>
    import("@/widgets/blog-section").then((mod) => ({
      default: mod.BlogSection,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const LocationPicker = dynamic(
  () =>
    import("@/features/location-picker").then((mod) => ({
      default: mod.LocationPicker,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const ContactSection = dynamic(
  () =>
    import("@/widgets/contact-section").then((mod) => ({
      default: mod.ContactSection,
    })),
  { loading: () => <SectionPlaceholder /> },
);

const TRACKED_SECTIONS = [
  "top",
  "about",
  "services",
  "countries",
  "consulates",
  "process",
  "blog",
  "contact",
];

function SectionPlaceholder() {
  return <div className="section-placeholder" aria-hidden="true" />;
}

export function HomePageClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const serviceModal = useServiceModal();
  const activeSectionId = useActiveSection(TRACKED_SECTIONS);
  const { headerRef, progressRef, isScrolled, isHeaderHidden } = useScrollEffects({
    isMenuOpen,
    isModalOpen: serviceModal.isOpen,
  });

  return (
    <ThemeProvider>
      <SkipLink />
      <ScrollProgress progressRef={progressRef} />
      <BackgroundScene />
      <ContactRail />
      <FloatingWhatsApp />

      <SiteHeader
        headerRef={headerRef}
        isScrolled={isScrolled}
        isHeaderHidden={isHeaderHidden}
        activeSectionId={activeSectionId}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />

      <main id="main">
        <HeroSection />
        <AboutSection />
        <ServicesSection onOpenService={serviceModal.open} />
        <CountriesSection />
        <ConsulatesSection />
        <ProcessSection />
        <BlogSection />
        <LocationPicker />
        <ContactSection />
      </main>

      <SiteFooter />
      <ServiceModal
        service={serviceModal.activeService}
        isOpen={serviceModal.isOpen}
        onClose={serviceModal.close}
      />
    </ThemeProvider>
  );
}
