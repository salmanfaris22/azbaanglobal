import { buildDirectionsUrl, buildMapEmbed } from "@/shared/lib/mapEmbed";

export type LocationKey =
  | "dubai"
  | "delhi"
  | "kochi"
  | "kozhikode"
  | "mumbai"
  | "qatar";

export type Location = {
  key: LocationKey;
  label: string;
  map: string;
  title: string;
  address: string;
  streetAddress: string;
  locality: string;
  region: string;
  postalCode: string;
  countryCode: string;
  lat: number;
  lng: number;
  phone1: string;
  phone2: string;
  phone3?: string;
  directions: string;
  seoTitle: string;
  seoKeywords: readonly string[];
};

export const LOCATIONS: Location[] = [
  {
    key: "dubai",
    label: "Dubai",
    title:
      "Sheikha Mhara Building, Office No 218/16, 2nd Floor, Near Al Twar Center, Al Qusais, Dubai - UAE",
    address: "Al Qusais, Dubai, United Arab Emirates",
    streetAddress:
      "Sheikha Mhara Building, Office No 218/16, 2nd Floor, Near Al Twar Center, Al Qusais",
    locality: "Dubai",
    region: "Dubai",
    postalCode: "",
    countryCode: "AE",
    lat: 25.2867,
    lng: 55.3872,
    phone1: "+054 449 0155 ",
    phone2: "+055 278 2255 ",
    phone3: "+054 3692369 ",
    seoTitle: "Azbaan global attestation services Dubai",
    seoKeywords: [
      "attestation services Dubai",
      "best attestation services Dubai",
      "MOFA attestation Dubai",
      "Azbaan global Dubai",
    ],
    map: buildMapEmbed(
      25.2867,
      55.3872,
      "Azbaan Global Attestation Services Dubai Al Qusais",
    ),
    directions: buildDirectionsUrl(
      25.2867,
      55.3872,
      "Sheikha Mhara Building Al Qusais Dubai",
    ),
  },
  {
    key: "delhi",
    label: "Delhi",
    title: "OFFICE No-122, ANTRIKSH BHAWAN 22, K.G MARG, CONNAUGHT PLACE NEW DELHI-110001",
    address: "Connaught Place, New Delhi, Delhi 110001, India",
    streetAddress: "Office No-122, Antriksh Bhawan, 22 K.G Marg, Connaught Place",
    locality: "New Delhi",
    region: "Delhi",
    postalCode: "110001",
    countryCode: "IN",
    lat: 28.6315,
    lng: 77.2195,
    phone1: "+91 790277 7751",
    phone2: "+91 790233 4455",
    seoTitle: "Azbaan global Indian attestation services Delhi",
    seoKeywords: [
      "Indian attestation services",
      "attestation services Delhi",
      "best attestation services Delhi",
      "Azbaan global Delhi",
      "certificate attestation Delhi",
    ],
    map: buildMapEmbed(
      28.6315,
      77.2195,
      "Azbaan Global Attestation Antriksh Bhawan Connaught Place New Delhi",
    ),
    directions: buildDirectionsUrl(
      28.6315,
      77.2195,
      "Office No-122 Antriksh Bhawan KG Marg New Delhi 110001",
    ),
  },
  {
    key: "kochi",
    label: "Kochi",
    title: "Azbaan Global Attestation & Apostille Services, Kochi",
    address: "Pallimukku, Kochi, Ernakulam, Kerala 682016, India",
    streetAddress: "X77Q+F2W, Pallimukku, Kochi, Ernakulam",
    locality: "Kochi",
    region: "Kerala",
    postalCode: "682016",
    countryCode: "IN",
    lat: 9.9878,
    lng: 76.2896,
    phone1: "+91 79027 77740",
    phone2: "+91 79023 34455",
    seoTitle: "Azbaan global attestation services Kochi Kerala",
    seoKeywords: [
      "attestation services Kochi",
      "Kerala attestation services",
      "Azbaan global Kochi",
      "apostille services Kochi",
    ],
    map: buildMapEmbed(
      9.9878,
      76.2896,
      "Azbaan Global Attestation Apostille Services Kochi Kerala",
    ),
    directions: buildDirectionsUrl(
      9.9878,
      76.2896,
      "Azbaan Global Attestation Apostille Services Kochi",
    ),
  },
  {
    key: "kozhikode",
    label: "Kozhikode",
    title:
      "Room No. 63/3617, Ground, CD TOWER, New Bus Stand, EMS Stadium, Arayidathupalam, Kozhikode, Kerala 673004",
    address: "Arayidathupalam, Kozhikode, Kerala 673004, India",
    streetAddress:
      "Room No. 63/3617, Ground, CD Tower, New Bus Stand, EMS Stadium, Arayidathupalam",
    locality: "Kozhikode",
    region: "Kerala",
    postalCode: "673004",
    countryCode: "IN",
    lat: 11.246,
    lng: 75.787,
    phone1: "+91 79027 78899",
    phone2: "+91 79023 34455",
    seoTitle: "Azbaan global attestation services Kozhikode",
    seoKeywords: [
      "attestation services Kozhikode",
      "Kozhikode certificate attestation",
      "Azbaan Kozhikode",
    ],
    map: buildMapEmbed(
      11.246,
      75.787,
      "Azbaan Tours Travels Kozhikode CD Tower",
    ),
    directions: buildDirectionsUrl(
      11.246,
      75.787,
      "CD Tower New Bus Stand Kozhikode Kerala",
    ),
  },
  {
    key: "mumbai",
    label: "Mumbai",
    title: "Azbaan global attestation services Mumbai",
    address: "Mumbai, Maharashtra, India",
    streetAddress: "Mumbai, Maharashtra",
    locality: "Mumbai",
    region: "Maharashtra",
    postalCode: "400001",
    countryCode: "IN",
    lat: 19.076,
    lng: 72.8777,
    phone1: "+91 79027 77751",
    phone2: "+91 79027 77721",
    seoTitle: "Azbaan global attestation services Mumbai",
    seoKeywords: [
      "attestation services Mumbai",
      "best attestation services Mumbai",
      "Azbaan global Mumbai",
    ],
    map: buildMapEmbed(19.076, 72.8777, "Azbaan Global Attestation Services Mumbai"),
    directions: buildDirectionsUrl(19.076, 72.8777, "Mumbai Maharashtra India"),
  },
  {
    key: "qatar",
    label: "Qatar",
    title: "Azbaan global attestation support Qatar",
    address: "Doha, Qatar",
    streetAddress: "Doha",
    locality: "Doha",
    region: "Doha",
    postalCode: "",
    countryCode: "QA",
    lat: 25.2854,
    lng: 51.531,
    phone1: "+91 79027 77751",
    phone2: "+91 79027 77721",
    seoTitle: "Azbaan global attestation services Qatar",
    seoKeywords: [
      "attestation services Qatar",
      "Qatar document attestation",
      "Azbaan global Qatar",
    ],
    map: buildMapEmbed(25.2854, 51.531, "Azbaan Global Attestation Qatar Doha"),
    directions: buildDirectionsUrl(25.2854, 51.531, "Doha Qatar"),
  },
];

export const DEFAULT_LOCATION = LOCATIONS[0];
