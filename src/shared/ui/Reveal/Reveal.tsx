"use client";

import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { useReveal } from "@/shared/hooks/useReveal";
import type { RevealVariant } from "@/shared/types";

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  className?: string;
  style?: CSSProperties;
};

export function Reveal({
  children,
  variant = "reveal",
  className,
  style,
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(variant, isVisible && "is-visible", className)}
      style={style}
    >
      {children}
    </div>
  );
}
