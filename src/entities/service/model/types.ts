export type ServiceKey =
  | "personal"
  | "educational"
  | "commercial"
  | "mofa"
  | "embassy"
  | "apostille";

export type ServiceDetailItem = {
  title: string;
  copy: string;
};

export type Service = {
  key: ServiceKey;
  title: string;
  summary: string;
  shortDescription: string;
  tags: string[];
  items: ServiceDetailItem[];
};
