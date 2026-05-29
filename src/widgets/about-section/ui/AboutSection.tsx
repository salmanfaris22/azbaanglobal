"use client";

import { OptimizedImage } from "@/shared/ui/OptimizedImage";
import { Container } from "@/shared/ui/Container";
import { IconBadge } from "@/shared/ui/IconBadge";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";
import { AnimatedCounter } from "@/shared/ui/AnimatedCounter";
import { CERTIFICATE_IMAGES } from "@/shared/config/images";

const CHECK_ITEMS = [
  "Personal certificate global support for birth, marriage, and other personal document types.",
  "Educational certificate global for school, diploma, degree, and university-related use cases.",
  "Commercial, MOFA, embassy, and apostille support built for international and UAE legal requirements.",
] as const;

const STATS = [
  { target: 500, caption: "Customer files handled through a smoother global workflow" },
  { target: 40, caption: "Countries included in the international global scope" },
  { target: 98, caption: "Client trust built on careful paperwork and authority coordination" },
] as const;

const PHOTOS = [
  {
    ...CERTIFICATE_IMAGES.certificateHandling,
    title: "Certificate handling",
    copy: "Personal, educational, and commercial certificates prepared for attestation.",
    className: "photo-main",
    width: 1199,
    height: 1600,
  },
  {
    ...CERTIFICATE_IMAGES.verificationReview,
    title: "Verification review",
    copy: "Each document is checked against the process path required by destination authorities.",
    className: "photo-small",
    width: 1066,
    height: 1600,
  },
] as const;

export function AboutSection() {
  return (
    <Section id="about" variant="alt" trackSection>
      <Container>
        <SectionHead
          label="About Us"
          title="International global services in UAE with legal process support."
          copy="Azbaan global fulfills the procedures and guidelines required by foreign ministry and international global processes in the UAE, helping customers save time and effort at an affordable fee."
        />

        <div className="focus-grid">
          <Reveal variant="reveal-left" className="focus-copy">
            <p>
              We specialize in international global services required by government authorities in
              the UAE. Our experts handle document review, legalization steps, and authority
              coordination on behalf of customers for smoother and more reliable certificate
              verification.
            </p>

            <div className="check-list">
              {CHECK_ITEMS.map((text) => (
                <article key={text} className="check-item">
                  <IconBadge>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                      <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </IconBadge>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="stats-grid">
              {STATS.map((stat) => (
                <div key={stat.caption} className="stat-card">
                  <AnimatedCounter target={stat.target} className="stat-number" />
                  <span className="stat-caption">{stat.caption}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal variant="reveal-right" className="focus-gallery">
            <article className={`photo-card ${PHOTOS[0].className}`}>
              <OptimizedImage
                src={PHOTOS[0].src}
                alt={PHOTOS[0].alt}
                width={PHOTOS[0].width}
                height={PHOTOS[0].height}
                loading="lazy"
                quality={70}
                sizes="(max-width: 860px) 100vw, 600px"
              />
              <div className="photo-caption">
                <strong>{PHOTOS[0].title}</strong>
                <span>{PHOTOS[0].copy}</span>
              </div>
            </article>
            <div className="photo-stack">
              {PHOTOS.slice(1).map((photo) => (
                <article key={photo.title} className={`photo-card ${photo.className}`}>
                  <OptimizedImage
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    quality={70}
                    sizes="(max-width: 860px) 100vw, 400px"
                  />
                  <div className="photo-caption">
                    <strong>{photo.title}</strong>
                    <span>{photo.copy}</span>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
