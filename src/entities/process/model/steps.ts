export type ProcessStep = {
  title: string;
  description: string;
  delay?: string;
  iconKey: "share" | "plan" | "coordinate" | "receive";
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    iconKey: "share",
    title: "Share your document",
    description:
      "We review the certificate type, destination country, and usage requirement before starting the global route.",
  },
  {
    iconKey: "plan",
    title: "Plan the authority path",
    description:
      "Our team maps the embassy, consulate, MOFA, or other legalization sequence needed for valid use.",
    delay: "0.08s",
  },
  {
    iconKey: "coordinate",
    title: "Coordinate the process",
    description:
      "We handle the paperwork steps and help customers move through the correct authorities without confusion.",
    delay: "0.16s",
  },
  {
    iconKey: "receive",
    title: "Receive the final file",
    description:
      "Completed documents are returned for visa, work, education, family, or commercial use in UAE and abroad.",
    delay: "0.24s",
  },
];
