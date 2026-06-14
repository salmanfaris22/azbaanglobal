import type { Locale } from "./locales";

export type LocalizedSeoFields = {
  title: string;
  description: string;
  h1: string;
  intro: string;
};

/** Localized metadata + hero copy for priority SEO pages. */
export const SEO_PAGE_I18N: Partial<
  Record<string, Partial<Record<Exclude<Locale, "en">, LocalizedSeoFields>>>
> = {
  "attestation-services-dubai": {
    hi: {
      title: "दुबई में अटेस्टेशन सेवाएं | Azbaan global — MOFA UAE",
      description:
        "Azbaan global दुबई में MOFA, एंबेसी और प्रमाणपत्र अटेस्टेशन — Al Qusais कार्यालय।",
      h1: "दुबई में अटेस्टेशन सेवाएं",
      intro:
        "Azbaan global दुबई में व्यक्तिगत, शैक्षिक और व्यावसायिक दस्तावेजों के लिए MOFA और एंबेसी अटेस्टेशन प्रदान करता है।",
    },
    ar: {
      title: "خدمات التصديق في دبي | Azbaan global — MOFA الإمارات",
      description:
        "Azbaan global خدمات تصديق MOFA والسفارة في دبي — مكتب القصيص.",
      h1: "خدمات التصديق في دبي",
      intro:
        "Azbaan global يقدم تصديق MOFA والسفارة للوثائق الشخصية والتعليمية والتجارية في دبي.",
    },
  },
  "attestation-services-delhi": {
    hi: {
      title: "दिल्ली अटेस्टेशन सेवाएं | Azbaan global — भारतीय प्रमाणपत्र",
      description:
        "Azbaan global कनॉट प्लेस, दिल्ली में भारतीय अटेस्टेशन — HRD, MEA, एंबेसी, MOFA।",
      h1: "दिल्ली में अटेस्टेशन सेवाएं",
      intro:
        "Azbaan global दिल्ली में UAE और अंतर्राष्ट्रीय उपयोग के लिए भारतीय प्रमाणपत्र अटेस्टेशन में मदद करता है।",
    },
    ar: {
      title: "خدمات التصديق في دلهي | Azbaan global — الهند",
      description:
        "Azbaan global تصديق الشهادات الهندية في Connaught Place — HRD وMEA والسفارة.",
      h1: "خدمات التصديق في دلهي",
      intro:
        "Azbaan global يساعد في تصديق الشهادات الهندية للاستخدام في الإمارات والخارج.",
    },
  },
  "attestation-services-kochi": {
    hi: {
      title: "कोच्चि अटेस्टेशन सेवाएं | Azbaan global — केरल",
      description: "Azbaan global कोच्चि में डिग्री और प्रमाणपत्र अटेस्टेशन — UAE MOFA।",
      h1: "कोच्चि में अटेस्टेशन सेवाएं",
      intro: "Azbaan global केरल में UAE और अंतर्राष्ट्रीय उपयोग के लिए अटेस्टेशन सहायता प्रदान करता है।",
    },
    ar: {
      title: "خدمات التصديق في Kochi | Azbaan global — Kerala",
      description: "Azbaan global تصديق الشهادات في Kochi للإمارات.",
      h1: "خدمات التصديق في Kochi",
      intro: "Azbaan global يدعم تصديق الوثائق من Kerala للإمارات والخارج.",
    },
  },
  "mofa-attestation-uae": {
    hi: {
      title: "MOFA अटेस्टेशन UAE | Azbaan global",
      description: "UAE MOFA अटेस्टेशन दुबई — Azbaan global मंत्रालय प्रक्रिया सहायता।",
      h1: "UAE MOFA अटेस्टेशन",
      intro: "Azbaan global UAE MOFA अटेस्टेशन के लिए दस्तावेज़ समीक्षा और जमा सहायता प्रदान करता है।",
    },
    ar: {
      title: "تصديق MOFA الإمارات | Azbaan global",
      description: "تصديق وزارة الخارجية الإماراتية في دبي — Azbaan global.",
      h1: "تصديق MOFA في الإمارات",
      intro: "Azbaan global يراجع الوثائق ويدعم إجراءات MOFA في الإمارات.",
    },
  },
  "degree-attestation-uae": {
    hi: {
      title: "UAE डिग्री अटेस्टेशन | Azbaan global",
      description: "भारतीय डिग्री UAE अटेस्टेशन — HRD, MEA, एंबेसी, MOFA।",
      h1: "UAE के लिए डिग्री अटेस्टेशन",
      intro: "Azbaan global UAE रोजगार और वीजा के लिए शैक्षिक प्रमाणपत्र अटेस्टेशन में विशेषज्ञ है।",
    },
    ar: {
      title: "تصديق الشهادة للإمارات | Azbaan global",
      description: "تصديق الشهادات التعليمية الهندية للإمارات.",
      h1: "تصديق الشهادة للإمارات",
      intro: "Azbaan global متخصص في تصديق الشهادات للعمل والتأشيرة في الإمارات.",
    },
  },
};

export const HOME_I18N: Record<
  Exclude<Locale, "en">,
  { title: string; description: string; h1: string; intro: string }
> = {
  hi: {
    title: "Azbaan global | दुबई और दिल्ली में सर्वश्रेष्ठ अटेस्टेशन",
    description:
      "Azbaan global प्रमाणपत्र अटेस्टेशन, MOFA, एंबेसी — दुबई, दिल्ली, कोच्चि और 40+ देश।",
    h1: "सर्वश्रेष्ठ अटेस्टेशन सेवाएं",
    intro:
      "Azbaan global UAE और भारत में प्रमाणपत्र अटेस्टेशन, MOFA, एंबेसी और अपostille सेवाएं प्रदान करता है।",
  },
  ar: {
    title: "Azbaan global | أفضل خدمات التصديق في دبي ودلهي",
    description:
      "Azbaan global تصديق الشهادات وMOFA والسفارة — دبي ودلهي وKochi وأكثر من 40 دولة.",
    h1: "أفضل خدمات التصديق",
    intro:
      "Azbaan global خدمات تصديق الشهادات وMOFA والسفارة في الإمارات والهند.",
  },
};

export function getLocalizedSeoFields(
  slug: string,
  locale: Locale,
  fallback: LocalizedSeoFields,
): LocalizedSeoFields {
  if (locale === "en") return fallback;
  return SEO_PAGE_I18N[slug]?.[locale] ?? fallback;
}
