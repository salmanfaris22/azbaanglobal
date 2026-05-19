import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import type { SectionVariant } from "@/shared/types";

type SectionProps = {
  id: string;
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  trackSection?: boolean;
  ariaLabelledBy?: string;
};

export function Section({
  id,
  children,
  variant = "default",
  className,
  trackSection = false,
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section",
        variant === "alt" && "section-alt",
        className,
      )}
      {...(trackSection ? { "data-section": "" } : {})}
      {...(ariaLabelledBy ? { "aria-labelledby": ariaLabelledBy } : {})}
    >
      {children}
    </section>
  );
}
