import { LOCATIONS } from "@/entities/location/model/locations";
import { SITE_URL } from "./site";

const dubai = LOCATIONS.find((l) => l.key === "dubai")!;
const delhi = LOCATIONS.find((l) => l.key === "delhi")!;
const kochi = LOCATIONS.find((l) => l.key === "kochi")!;

/**
 * Add official profile URLs here (or via NEXT_PUBLIC_* env vars) when available.
 * Footer and schema.org sameAs only include non-empty entries.
 */
export const SOCIAL_PROFILES = {
  facebook:
    process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim() ||
    "",
  instagram:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ||
    "",
  x: process.env.NEXT_PUBLIC_X_URL?.trim() || "",
  linkedin:
    process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ||
    "",
  youtube:
    process.env.NEXT_PUBLIC_YOUTUBE_URL?.trim() ||
    "",
  googleMaps: {
    dubai: dubai.directions,
    delhi: delhi.directions,
    kochi: kochi.directions,
  },
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
  dubai.directions,
  delhi.directions,
  kochi.directions,
  ...(SOCIAL_PROFILES.facebook ? [SOCIAL_PROFILES.facebook] : []),
  ...(SOCIAL_PROFILES.instagram ? [SOCIAL_PROFILES.instagram] : []),
  ...(SOCIAL_PROFILES.x ? [SOCIAL_PROFILES.x] : []),
  ...(SOCIAL_PROFILES.linkedin ? [SOCIAL_PROFILES.linkedin] : []),
  ...(SOCIAL_PROFILES.youtube ? [SOCIAL_PROFILES.youtube] : []),
];
