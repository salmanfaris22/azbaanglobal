import type { RefObject } from "react";
import { SITE, WHATSAPP_URL, TEL_UAE_URL, MAILTO_URL } from "@/shared/config/site";
import { WhatsAppIcon } from "@/shared/ui/icons/WhatsAppIcon";

export function SkipLink() {
  return (
    <a className="skip-link" href="#main">
      Skip to content
    </a>
  );
}

export function ScrollProgress({
  progressRef,
}: {
  progressRef: RefObject<HTMLDivElement | null>;
}) {
  return <div className="top-progress" ref={progressRef} aria-hidden="true" />;
}

export function BackgroundScene() {
  return (
    <div className="bg-scene" aria-hidden="true">
      <div className="orb orb-a" data-speed="0.07" />
      <div className="orb orb-b" data-speed="0.11" />
      <div className="orb orb-c" data-speed="0.09" />
    </div>
  );
}

export function ContactRail() {
  return (
    <div className="contact-rail" aria-label="Quick contact links">
      <a
        className="contact-rail__link contact-rail__link--whatsapp contact-rail__link--whatsapp-glow"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <a
        className="contact-rail__link"
        href={TEL_UAE_URL}
        aria-label={`Call ${SITE.name}`}
        title={`Call ${SITE.name}`}
      >
        <PhoneIcon />
      </a>
      <a
        className="contact-rail__link"
        href={MAILTO_URL}
        aria-label={`Email ${SITE.name}`}
        title={`Email ${SITE.name}`}
      >
        <EmailIcon />
      </a>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp floating-whatsapp--glow"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Open direct WhatsApp chat"
      title="Direct WhatsApp"
    >
      <span className="floating-whatsapp__label">Direct WhatsApp</span>
      <WhatsAppIcon />
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
      <path
        d="M6.8 4.8h2.3c.4 0 .7.3.8.7l.6 2.9c.1.3 0 .6-.2.8L8.9 10.6a12.6 12.6 0 0 0 4.5 4.5l1.4-1.4c.2-.2.6-.3.8-.2l2.9.6c.4.1.7.4.7.8v2.3c0 .5-.4 1-.9 1C10.4 18.2 5.8 13.6 5.8 7.7c0-.5.4-.9 1-.9z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.9">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4.5 7l7.5 6 7.5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
