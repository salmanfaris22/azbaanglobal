"use client";

import { useState } from "react";
import { Container } from "@/shared/ui/Container";
import { Section, SectionHead } from "@/shared/ui/Section";
import { DEFAULT_LOCATION, LOCATIONS, type Location } from "@/entities/location";

export function LocationPicker() {
  const [active, setActive] = useState<Location>(DEFAULT_LOCATION);

  return (
    <Section id="locations">
      <Container>
        <SectionHead
          label="Locations"
          title="Our Offices"
          copy="Select a location to view contact details and map."
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
            <div className="location-map">
              <iframe
                id="mapFrame"
                title={`Map of ${active.label} office`}
                src={active.map}
              />
            </div>

            <div className="location-info" id="locationInfo">
              <h3>{active.title}</h3>
              <p>{active.address}</p>
              <div className="contact-row">
                <span>📞 {active.phone1}</span>
                {active.phone2 ? <span>☎ {active.phone2}</span> : null}
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
