"use client";

import { cn } from "@/shared/lib/cn";
import { useReveal } from "@/shared/hooks/useReveal";

type SectionHeadProps = {
  label: string;
  title: string;
  copy?: string;
  compact?: boolean;
  titleId?: string;
  className?: string;
};

export function SectionHead({
  label,
  title,
  copy,
  compact,
  titleId,
  className,
}: SectionHeadProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "section-head",
        compact && "compact",
        "reveal",
        isVisible && "is-visible",
        className,
      )}
    >
      <div>
        <div className="section-label">{label}</div>
        <h2 className="section-title" id={titleId}>
          {title}
        </h2>
      </div>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
