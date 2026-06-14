"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/shared/ui/Container";
import { Section, SectionHead } from "@/shared/ui/Section";
import { DEFAULT_LOCATION, LOCATIONS, type Location } from "@/entities/location";

export function LocationPicker() {
  const [active, setActive] = useState<Location>(DEFAULT_LOCATION);
  const [mapVisible, setMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mapEl = mapRef.current;
    if (!mapEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );

    observer.observe(mapEl);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="locations">
      <Container>
        <SectionHead
          label="Locations"
          title="Azbaan global attestation offices — Dubai, Delhi, Kochi & more"
          copy="Select a location for map coordinates, nearest office directions, and local attestation service contact details."
        />

        <div className="location-wrapper">
          <div className="location-list">
            {LOCATIONS.map((location) => (
              <button
                key={location.key}
                type="button"
                className={`location-btn${active.key === location.key ? " active" : ""}`}
                data-map={location.key}
                onClick={() => setActive(location)}
              >
                {location.label}
              </button>
            ))}
          </div>

          <div>
            <div className="location-map" ref={mapRef}>
              {mapVisible ? (
                <iframe
                  id="mapFrame"
                  title={`${active.seoTitle} — map at ${active.lat}, ${active.lng}`}
                  src={active.map}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="location-map__placeholder" aria-hidden="true" />
              )}
            </div>

            <div className="location-info" id="locationInfo" itemScope itemType="https://schema.org/LocalBusiness">
              <meta itemProp="name" content={active.seoTitle} />
              <meta itemProp="latitude" content={String(active.lat)} />
              <meta itemProp="longitude" content={String(active.lng)} />
              <h3 itemProp="address">{active.title}</h3>
              <p>{active.address}</p>
              <div className="contact-row">
                <span>📞 {active.phone1}</span>
                {active.phone2 ? <span>☎ {active.phone2}</span> : null}
                 {active.phone3 ? <span>☎ {active.phone3}</span> : null}
              </div>
              <a
                href={active.directions}
                target="_blank"
                rel="noreferrer"
                className="direction-btn"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
