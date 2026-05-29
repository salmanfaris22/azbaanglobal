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
  phone1: string;
  phone2: string;
    phone3?: string;
  directions: string;
};

export const LOCATIONS: Location[] = [
  {
    key: "dubai",
    label: "Dubai",
    map: "https://www.google.com/maps?q=Sheikha+Mhara+Building+Al+Twar+5+Dubai&output=embed",
    title:
      "Sheikha Mhara Building, Office No 218/16, 2nd Floor, Near Al Twar Center, Al Qusais, Dubai - UAE",
    address: "Al Tawhidi Building, Bur Dubai, UAE",
    phone1: "+054 449 0155 ",
    phone2: "+055 278 2255 ",
    phone3: "+054 3692369 ",
    directions:
      "https://www.google.com/maps?q=Sheikha+Mhara+Building+Al+Twar+5+Dubai",
  },
  {
    key: "delhi",
    label: "Delhi",
    map: "https://www.google.com/maps?q=Azbaan+Global+Attestation+%26+Apostille+Services+Kochi&output=embed",
    title: "OFFICE No-122,ANTRIKSH BHAWAN 22,K.G MARG,CONNAUGHT PLACE NEW DELHI-110001",
    address: "New Delhi, India",
    phone1: "+91 790277 7751",
    phone2: "+91 790233 4455",
    directions:
      "https://www.google.com/maps?q=Office+No-122+Antriksh+Bhawan+KG+Marg+New+Delhi",
  },
  {
    key: "kochi",
    label: "Kochi",
    map: "https://www.google.com/maps?q=Azbaan+Global+Attestation+%26+Apostille+Services+Kochi&output=embed",
    title: "Kochi Office",
    address: "X77Q+F2W, Pallimukku, Kochi, Ernakulam, Kerala 682016",
    phone1: "+91 79027 77740",
    phone2: "+91 79023 34455",
    directions:
      "https://www.google.com/maps?q=Azbaan+Global+Attestation+%26+Apostille+Services+Kochi",
  },
  {
    key: "kozhikode",
    label: "Kozhikode",
    map: "https://www.google.com/maps?q=Azbaan+Tours+%26+Travels+Kozhikode&output=embed",
    title:
      "Room No. 63/3617, Ground, CD TOWER, New Bus Stand, EMS Stadium, Arayidathupalam, Kozhikode, Kerala 673004",
    address: "Kozhikode, Kerala",
      phone1:  "+91 79027 78899",
    phone2: "+91 79023 34455",
    directions: "https://www.google.com/maps?q=Azbaan+Tours+%26+Travels+Kozhikode",
  },
  {
    key: "mumbai",
    label: "Mumbai",
    map: "https://www.google.com/maps?q=Mumbai,India&output=embed",
    title: "Mumbai Office",
    address: "Mumbai, India",
    phone1: "+91 79027 77751",
    phone2: "+91 79027 77721",
    directions: "https://www.google.com/maps?q=Mumbai",
  },
  {
    key: "qatar",
    label: "Qatar",
    map: "https://www.google.com/maps?q=Doha,Qatar&output=embed",
    title: "Qatar Office",
    address: "Doha, Qatar",
    phone1: "+91 79027 77751",
    phone2: "+91 79027 77721",
    directions: "https://www.google.com/maps?q=Doha,Qatar",
  },
];

export const DEFAULT_LOCATION = LOCATIONS[0];
