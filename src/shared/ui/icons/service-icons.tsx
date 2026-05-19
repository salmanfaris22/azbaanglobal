import type { ServiceKey } from "@/entities/service";

export function getServiceIcon(key: ServiceKey) {
  switch (key) {
    case "personal":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
          <path d="M5 19h14M7 16V8m5 8V5m5 11v-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "educational":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
          <rect x="4" y="5" width="16" height="14" rx="3" />
          <path d="M8 9h8M8 13h6" strokeLinecap="round" />
        </svg>
      );
    case "commercial":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
          <path d="M4 12h16M12 4v16" strokeLinecap="round" />
        </svg>
      );
    case "mofa":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
          <path d="M4 7h16M7 12h10M9 17h6" strokeLinecap="round" />
        </svg>
      );
    case "embassy":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
          <path d="M5 17l4-4 3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "apostille":
      return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
          <path d="M4 16l4-5 4 3 5-7 3 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}
