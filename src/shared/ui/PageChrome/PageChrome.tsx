import type { RefObject } from "react";
import { SITE, WHATSAPP_URL, TEL_UAE_URL, MAILTO_URL } from "@/shared/config/site";

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
        className="contact-rail__link contact-rail__link--whatsapp"
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
      className="floating-whatsapp"
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

function WhatsAppIcon() {
  return (
    <svg className="whatsapp-icon" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M19.11 17.21c-.3-.16-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.79-1.67-2.09-.17-.29-.02-.45.13-.6.13-.13.3-.35.45-.53.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.28.3-1.04 1.01-1.04 2.48 0 1.47 1.06 2.9 1.21 3.09.15.2 2.1 3.21 5.1 4.5.71.3 1.26.48 1.69.61.72.23 1.38.2 1.9.12.58-.08 1.77-.72 2.02-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M27.01 14.8c0 6.08-4.95 11.02-11.04 11.02-1.95 0-3.76-.5-5.35-1.39l-6.11 1.6 1.63-5.95a10.96 10.96 0 0 1-1.2-5.09c0-6.08 4.95-11.02 11.03-11.02 6.1 0 11.04 4.94 11.04 11.02Zm-11.04-9.27c-5.12 0-9.28 4.15-9.28 9.26 0 1.62.42 3.2 1.2 4.58l.19.34-.97 3.55 3.65-.96.33.2a9.3 9.3 0 0 0 4.88 1.38c5.11 0 9.27-4.15 9.27-9.26s-4.16-9.26-9.27-9.26Z" />
    </svg>
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
