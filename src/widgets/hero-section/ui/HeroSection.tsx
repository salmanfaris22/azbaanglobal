"use client";

import { OptimizedImage } from "@/shared/ui/OptimizedImage";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { IconBadge } from "@/shared/ui/IconBadge";
import { LoadIn } from "@/shared/ui/LoadIn";
import { Reveal } from "@/shared/ui/Reveal";
import { Section } from "@/shared/ui/Section";
import { AnimatedCounter } from "@/shared/ui/AnimatedCounter";
import { useHeroTilt } from "@/shared/hooks/useHeroTilt";

import { HERO_IMAGE } from "@/shared/config/images";

const FEATURES = [
  {
    title: "Legal Support",
    copy: "Personal, educational & business documents.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <path d="M4 18h16M7 15V7m5 8V4m5 11v-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "MOFA Process",
    copy: "Complete UAE legalization support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M8 9h8M8 13h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Global Coverage",
    copy: "40+ countries supported.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
        <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
] as const;

const TRUST_ITEMS = [
  { title: "Education", copy: "Certificates & degrees" },
  { title: "Commercial", copy: "Business documents" },
  { title: "Embassy", copy: "Consulate support" },
  { title: "UAE", copy: "MOFA global" },
] as const;

const FLOATING_STATS = [
  { target: 40, label: "Countries Covered", className: "stat-a" },
  { target: 98, label: "Client Satisfaction", className: "stat-b" },
  { target: 15, label: "Service Solutions", className: "stat-c" },
] as const;

export function HeroSection() {
  const tiltRef = useHeroTilt<HTMLDivElement>();

  return (
    <Section id="top" className="hero" trackSection>
      <Container>
        <div className="hero-grid">
          <div>
            <LoadIn delay="0.06s" className="eyebrow">
              <span className="eyebrow-dot" />
              No.1 Global Appolistle & Attestation Services
            </LoadIn>

            <LoadIn delay="0.16s">
              <h1 className="hero-title">
                Worldwide global
                <span>Fast • Legal • Reliable</span>
              </h1>
            </LoadIn>

            <LoadIn delay="0.28s">
              <p className="hero-text">
                Professional document global for UAE and international use. We handle
                verification, MOFA, embassy, and legalization processes.
              </p>
            </LoadIn>

            <LoadIn delay="0.38s">
              <div className="hero-actions">
                <Button href="#contact">Get Started</Button>
                <Button href="#countries" variant="secondary">
                  Our Coverage
                </Button>
              </div>
            </LoadIn>

            <LoadIn delay="0.5s">
              <div className="feature-row">
                {FEATURES.map((feature) => (
                  <article key={feature.title} className="feature-pill">
                    <IconBadge>{feature.icon}</IconBadge>
                    <strong>{feature.title}</strong>
                    <span>{feature.copy}</span>
                  </article>
                ))}
              </div>
            </LoadIn>
          </div>

          <LoadIn delay="0.22s" className="hero-stage">
            <div className="hero-photo-card" id="heroTilt" ref={tiltRef}>
              <OptimizedImage
                className="hero-photo"
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                width={1200}
                height={800}
                priority
                quality={80}
                sizes="(max-width: 860px) 100vw, 560px"
              />
              <div className="hero-overlay">
                <strong>Leading global Experts</strong>
                <p>Accurate, compliant, and fast document processing.</p>
              </div>
            </div>

            {FLOATING_STATS.map((stat) => (
              <div key={stat.label} className={`floating-stat ${stat.className}`}>
                <AnimatedCounter target={stat.target} />
                <span>{stat.label}</span>
              </div>
            ))}
          </LoadIn>
        </div>

        <Reveal className="trust-bar">
          {TRUST_ITEMS.map((item) => (
            <article key={item.title} className="trust-item">
              <div className="trust-copy">
                <strong>{item.title}</strong>
                <span>{item.copy}</span>
              </div>
            </article>
          ))}
        </Reveal>

        <LoadIn delay="0.62s">
          <a className="scroll-cue" href="#about">
            Explore More
          </a>
        </LoadIn>
      </Container>
    </Section>
  );
}
