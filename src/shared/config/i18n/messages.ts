import type { Locale } from "./locales";

export const UI_MESSAGES = {
  en: {
    selectLanguage: "Select language",
    readMore: "Read article",
    viewAllGuides: "View all attestation guides",
    contactUs: "Contact us",
    whatsApp: "WhatsApp",
    home: "Home",
    blog: "Blog",
    services: "Services",
    relatedPages: "Related attestation pages",
    backHome: "Back to homepage",
    languagePrompt: "Choose your preferred language",
  },
  hi: {
    selectLanguage: "भाषा चुनें",
    readMore: "लेख पढ़ें",
    viewAllGuides: "सभी गाइड देखें",
    contactUs: "संपर्क करें",
    whatsApp: "व्हाट्सऐप",
    home: "होम",
    blog: "ब्लॉग",
    services: "सेवाएं",
    relatedPages: "संबंधित सेवा पेज",
    backHome: "होम पर वापस जाएं",
    languagePrompt: "अपनी पसंदीदा भाषा चुनें",
  },
  ar: {
    selectLanguage: "اختر اللغة",
    readMore: "اقرأ المقال",
    viewAllGuides: "عرض جميع الأدلة",
    contactUs: "اتصل بنا",
    whatsApp: "واتساب",
    home: "الرئيسية",
    blog: "المدونة",
    services: "الخدمات",
    relatedPages: "صفحات ذات صلة",
    backHome: "العودة للرئيسية",
    languagePrompt: "اختر لغتك المفضلة",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function t(locale: Locale, key: keyof (typeof UI_MESSAGES)["en"]) {
  return UI_MESSAGES[locale][key];
}
