import { LOCATIONS } from "@/entities/location/model/locations";
import { SITE_URL } from "./site";

const dubai = LOCATIONS.find((l) => l.key === "dubai")!;
const delhi = LOCATIONS.find((l) => l.key === "delhi")!;
const kochi = LOCATIONS.find((l) => l.key === "kochi")!;

/** Official profiles and map listings for schema.org sameAs. Update when GBP/social URLs are confirmed. */
export const SOCIAL_PROFILES = {
  facebook: "",
  instagram: "",
  googleMaps: {
    dubai: dubai.directions,
    delhi: delhi.directions,
    kochi: kochi.directions,
  },
} as const;

export const ORGANIZATION_SAME_AS = [
  SITE_URL,
  dubai.directions,
  delhi.directions,
  kochi.directions,
  ...(SOCIAL_PROFILES.facebook ? [SOCIAL_PROFILES.facebook] : []),
  ...(SOCIAL_PROFILES.instagram ? [SOCIAL_PROFILES.instagram] : []),
];
