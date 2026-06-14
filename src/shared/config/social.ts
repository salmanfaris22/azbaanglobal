import { LOCATIONS } from "@/entities/location/model/locations";
import { SITE_URL } from "./site";

const dubai = LOCATIONS.find((l) => l.key === "dubai")!;
const delhi = LOCATIONS.find((l) => l.key === "delhi")!;
const kochi = LOCATIONS.find((l) => l.key === "kochi")!;
const kozhikode = LOCATIONS.find((l) => l.key === "kozhikode")!;
const mumbai = LOCATIONS.find((l) => l.key === "mumbai")!;
const qatar = LOCATIONS.find((l) => l.key === "qatar")!;

function gbpOrDirections(envUrl: string | undefined, directions: string) {
  const trimmed = envUrl?.trim();
  return trimmed || directions;
}

/** Official GBP profile URLs — set NEXT_PUBLIC_GBP_* env vars when confirmed. */
export const GOOGLE_BUSINESS_PROFILES = {
  dubai: gbpOrDirections(process.env.NEXT_PUBLIC_GBP_DUBAI_URL, dubai.directions),
  delhi: gbpOrDirections(process.env.NEXT_PUBLIC_GBP_DELHI_URL, delhi.directions),
  kochi: gbpOrDirections(process.env.NEXT_PUBLIC_GBP_KOCHI_URL, kochi.directions),
  kozhikode: gbpOrDirections(
    process.env.NEXT_PUBLIC_GBP_KOZHIKODE_URL,
    kozhikode.directions,
  ),
  mumbai: gbpOrDirections(process.env.NEXT_PUBLIC_GBP_MUMBAI_URL, mumbai.directions),
  qatar: gbpOrDirections(process.env.NEXT_PUBLIC_GBP_QATAR_URL, qatar.directions),
} as const;

/**
 * Add official profile URLs here (or via NEXT_PUBLIC_* env vars) when available.
 * Footer and schema.org sameAs only include non-empty entries.
 */
export const SOCIAL_PROFILES = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim() || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() || "",
  x: process.env.NEXT_PUBLIC_X_URL?.trim() || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "",
  youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL?.trim() || "",
  googleMaps: {
    dubai: dubai.directions,
    delhi: delhi.directions,
    kochi: kochi.directions,
    kozhikode: kozhikode.directions,
    mumbai: mumbai.directions,
    qatar: qatar.directions,
  },
  googleBusinessProfile: GOOGLE_BUSINESS_PROFILES,
} as const;

export type SocialLink = {
  key: keyof typeof SOCIAL_PROFILES | "googleMaps";
  label: string;
  href: string;
};

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  SOCIAL_PROFILES.facebook && {
    key: "facebook",
    label: "Facebook",
    href: SOCIAL_PROFILES.facebook,
  },
  SOCIAL_PROFILES.instagram && {
    key: "instagram",
    label: "Instagram",
    href: SOCIAL_PROFILES.instagram,
  },
  SOCIAL_PROFILES.x && {
    key: "x",
    label: "X",
    href: SOCIAL_PROFILES.x,
  },
  SOCIAL_PROFILES.linkedin && {
    key: "linkedin",
    label: "LinkedIn",
    href: SOCIAL_PROFILES.linkedin,
  },
  SOCIAL_PROFILES.youtube && {
    key: "youtube",
    label: "YouTube",
    href: SOCIAL_PROFILES.youtube,
  },
].filter(Boolean) as SocialLink[];

export const ORGANIZATION_SAME_AS = [
  SITE_URL,
  ...Object.values(GOOGLE_BUSINESS_PROFILES),
  ...(SOCIAL_PROFILES.facebook ? [SOCIAL_PROFILES.facebook] : []),
  ...(SOCIAL_PROFILES.instagram ? [SOCIAL_PROFILES.instagram] : []),
  ...(SOCIAL_PROFILES.x ? [SOCIAL_PROFILES.x] : []),
  ...(SOCIAL_PROFILES.linkedin ? [SOCIAL_PROFILES.linkedin] : []),
  ...(SOCIAL_PROFILES.youtube ? [SOCIAL_PROFILES.youtube] : []),
];
