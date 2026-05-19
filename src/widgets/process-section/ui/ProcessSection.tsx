import { Container } from "@/shared/ui/Container";
import { IconBadge } from "@/shared/ui/IconBadge";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";
import { PROCESS_STEPS } from "@/entities/process/model/steps";

function ProcessIcon({ iconKey }: { iconKey: (typeof PROCESS_STEPS)[number]["iconKey"] }) {
  switch (iconKey) {
    case "share":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "plan":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
          <path d="M12 3v18M6 9l6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "coordinate":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
          <path d="M5 17l4-4 3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "receive":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <path d="M8 8h8v8H8z" />
        </svg>
      );
  }
}

export function ProcessSection() {
  return (
    <Section id="process" variant="alt" trackSection>
      <Container>
        <SectionHead
          label="How It Works"
          title="A clearer process for customers who need legal global in UAE."
          compact
        />

        <div className="process-grid">
          {PROCESS_STEPS.map((step) => (
            <Reveal
              key={step.title}
              className="process-card"
              style={
                step.delay
                  ? ({ transitionDelay: step.delay } as React.CSSProperties)
                  : undefined
              }
            >
              <IconBadge>
                <ProcessIcon iconKey={step.iconKey} />
              </IconBadge>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
