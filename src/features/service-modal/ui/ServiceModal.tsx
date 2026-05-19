"use client";

import { IconBadge } from "@/shared/ui/IconBadge";
import type { Service } from "@/entities/service";

type ServiceModalProps = {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
};

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  return (
    <div
      className={`service-modal${isOpen ? " is-open" : ""}`}
      id="serviceModal"
      aria-hidden={!isOpen}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="service-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="serviceModalTitle"
      >
        <div className="service-modal__header">
          <div>
            <span className="service-modal__eyebrow">Service details</span>
            <h3 className="service-modal__title" id="serviceModalTitle">
              {service?.title ?? "Service details"}
            </h3>
          </div>
          <button
            className="service-modal__close"
            id="serviceModalClose"
            type="button"
            aria-label="Close service details"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        {service ? (
          <div className="service-modal__body">
            <p className="service-modal__summary">{service.summary}</p>
            <div className="service-modal__meta">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div>
              <span className="service-modal__eyebrow">Included items</span>
              <div className="service-modal__list">
                {service.items.map((item, index) => (
                  <article
                    key={item.title}
                    className="service-modal__item"
                    style={{ "--item-delay": `${index * 0.08}s` } as React.CSSProperties}
                  >
                    <IconBadge>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8">
                        <path
                          d="M5 12l4 4L19 6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </IconBadge>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
