import { OptimizedImage } from "@/shared/ui/OptimizedImage";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
    alt: "Professional office environment for embassy and consulate support",
    title: "Embassy coordination",
    copy: "Structured assistance for legalization steps required by destination authorities.",
    className: "wide",
    delay: undefined,
  },
  {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    alt: "Legal paperwork review for consulate global service",
    title: "Document sequencing",
    copy: "Correct order matters for successful consulate and ministry approval.",
    className: "tall",
    delay: "0.06s",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    alt: "Business consultation regarding global requirements",
    title: "Consultation support",
    copy: "Clients receive up-front guidance before paperwork moves into the process.",
    className: "",
    delay: "0.12s",
  },
  {
    src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=80",
    alt: "Verification paperwork desk layout for global and legal use",
    title: "Verification accuracy",
    copy: "Careful checks reduce rejection risk and help avoid repeat submissions.",
    className: "",
    delay: "0.18s",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    alt: "Support team discussion for international certificate global",
    title: "Customer handling",
    copy: "Service teams and clients stay aligned throughout the legalization journey.",
    className: "tall",
    delay: "0.24s",
  },
  {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    alt: "Professional handshake representing trust in global service",
    title: "Trusted service outcome",
    copy: "Reliable communication helps customers use attested documents with confidence.",
    className: "wide",
    delay: "0.3s",
  },
] as const;

export function ConsulatesSection() {
  return (
    <Section id="consulates" trackSection>
      <Container>
        <SectionHead
          label="Consulates"
          title="Embassy and consulate legalization support presented with image-led service blocks."
          copy="For many countries, document legalization depends on embassy or consulate rules. This section shows that support as a dedicated part of the service."
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
                  width={1400}
                  height={900}
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
