"use client";

import { useState } from "react";
import { FAQ_ENTRIES } from "@/shared/config/seo-keywords";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" variant="alt" trackSection>
      <Container>
        <SectionHead
          label="FAQ"
          title="Attestation services questions — Azbaan global"
          copy="Answers about Azbaan, azbaanglobal.com, Indian attestation services in Delhi, Dubai MOFA attestation, and countries we serve."
        />

        <div className="faq-accordion">
          {FAQ_ENTRIES.map((entry, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal
                key={entry.question}
                className={`faq-item${isOpen ? " is-open" : ""}`}
                style={{ transitionDelay: `${index * 0.04}s` } as React.CSSProperties}
              >
                <button
                  type="button"
                  className="faq-trigger"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="faq-trigger__text">{entry.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    +
                  </span>
                </button>

                <div
                  id={`faq-panel-${index}`}
                  className="faq-panel"
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  hidden={!isOpen}
                >
                  <p>{entry.answer}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
