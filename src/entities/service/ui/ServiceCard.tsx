"use client";

import type { CSSProperties, KeyboardEvent, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { useReveal } from "@/shared/hooks/useReveal";
import { IconBadge } from "@/shared/ui/IconBadge";
import type { Service } from "../model/types";

type ServiceCardProps = {
  service: Service;
  delay?: string;
  onOpen: (key: Service["key"]) => void;
  icon: ReactNode;
};

export function ServiceCard({ service, delay, onOpen, icon }: ServiceCardProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const style: CSSProperties = {
    ...(delay ? { transitionDelay: delay } : {}),
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen(service.key);
    }
  };

  return (
    <article
      ref={ref}
      className={cn("service-card", "reveal", isVisible && "is-visible")}
      style={style}
      data-service-key={service.key}
      tabIndex={0}
      role="button"
      aria-haspopup="dialog"
      aria-controls="serviceModal"
      onClick={() => onOpen(service.key)}
      onKeyDown={handleKeyDown}
    >
      <IconBadge>{icon}</IconBadge>
      <h3>{service.title}</h3>
      <p>{service.shortDescription}</p>
      <span className="card-link">Click for full details</span>
    </article>
  );
}
