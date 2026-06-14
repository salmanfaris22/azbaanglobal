declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", {
    event_category: "engagement",
    event_label: source,
  });
}

export function trackContactFormSubmit() {
  trackEvent("contact_form_submit", {
    event_category: "engagement",
    event_label: "contact_form",
  });
}
