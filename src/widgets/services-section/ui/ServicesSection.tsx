"use client";

import { Container } from "@/shared/ui/Container";
import { Section, SectionHead } from "@/shared/ui/Section";
import { SERVICES, ServiceCard } from "@/entities/service";
import type { ServiceKey } from "@/entities/service";
import { getServiceIcon } from "@/shared/ui/icons/service-icons";

const DELAYS = ["", "0.08s", "0.16s", "0.24s", "0.32s", "0.4s"];

type ServicesSectionProps = {
  onOpenService: (key: ServiceKey) => void;
};

export function ServicesSection({ onOpenService }: ServicesSectionProps) {
  return (
    <Section id="services" trackSection className="section-services">
      <Container>
        <SectionHead
          label="Services"
          title="Service categories presented like sub-pages inside the main website."
          copy="Azbaan global supports personal, educational, commercial, embassy, consulate, MOFA, and apostille service paths for clients in Dubai and across the UAE."
        />

        <div className="service-grid">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.key}
              service={service}
              delay={DELAYS[index]}
              onOpen={onOpenService}
              icon={getServiceIcon(service.key)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
