"use client";

import { OptimizedImage } from "@/shared/ui/OptimizedImage";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";
import { CERTIFICATE_IMAGES } from "@/shared/config/images";

const GALLERY = [
  {
    ...CERTIFICATE_IMAGES.documentHandling,
    title: "Document handling",
    copy: "Professional paperwork management supports accurate and timely global document processing.",
    className: "wide",
    delay: undefined,
    width: 1244,
    height: 1600,
  },
  {
    ...CERTIFICATE_IMAGES.consultation,
    title: "Consultation support",
    copy: "Clients receive up-front guidance before paperwork moves into the process.",
    className: "tall",
    delay: "0.06s",
    width: 1600,
    height: 1066,
  },
  {
    ...CERTIFICATE_IMAGES.customerHandling,
    title: "Customer handling",
    copy: "Service teams and clients stay aligned throughout the legalization journey.",
    className: "",
    delay: "0.12s",
    width: 1066,
    height: 1600,
  },
  {
    ...CERTIFICATE_IMAGES.trustedOutcome,
    title: "Trusted service outcome",
    copy: "Reliable communication helps customers use attested documents with confidence.",
    className: "wide",
    delay: "0.18s",
    width: 1600,
    height: 1397,
  },
] as const;

export function ConsulatesSection() {
  return (
    <Section id="consulates" trackSection>
      <Container>
        <SectionHead
          label="Consulates"
          title="Embassy and consulate legalization support for international documents."
          copy="For many countries, document legalization depends on embassy or consulate rules. We guide customers through the required steps as a dedicated part of the service."
        />

        <Reveal className="gallery-note">
          Azbaan global assists with embassy requirements, consulate paperwork flow, ministry
          follow-up, and customer guidance for cross-border document acceptance.
        </Reveal>

        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <Reveal
              key={item.title}
              className={`gallery-card ${item.className}`.trim()}
              style={
                item.delay
                  ? ({ transitionDelay: item.delay } as React.CSSProperties)
                  : undefined
              }
            >
              <figure>
                <OptimizedImage
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 860px) 100vw, (max-width: 1100px) 50vw, 680px"
                />
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.copy}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
