export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://azbaanglobal.com";

export const SITE = {
  name: "Azbaan global",
  tagline: "International global Services in UAE",
  logoSrc: "/logo.jpeg",
  email: "delhi@azbaanglobal.com",
  phoneUae: "+971 4 338 8893",
  phoneIndia: "+91 79027 77751",
  phoneIndiaAlt: "+91 79027 77721",
  whatsapp: "917902777721",
  whatsappMessage: "Hello%azbaan%20global",
  office: "OFFICE No-122,ANTRIKSH BHAWAN 22,K.G MARG,CONNAUGHT PLACE NEW DELHI-110001",
} as const;

export const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#countries", label: "Countries" },
  { href: "#consulates", label: "Consulates" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
] as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsapp}?text=${SITE.whatsappMessage}`;
export const TEL_UAE_URL = "tel:+97143388893";
export const MAILTO_URL = `mailto:${SITE.email}`;
