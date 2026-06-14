"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/shared/ui/Button";
import { Reveal } from "@/shared/ui/Reveal";
import { SERVICE_FORM_OPTIONS } from "@/entities/service";

export function ContactForm() {
  const [submitLabel, setSubmitLabel] = useState("Send Inquiry");
  const [note, setNote] = useState(
    "Front-end confirmation is active here. Connect this form to your backend or email service for live submissions.",
  );
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitLabel("Inquiry Sent");
    setIsSuccess(true);
    setNote(
      "Front-end confirmation complete. Connect this form to your backend or email endpoint to receive live global inquiries.",
    );

    window.setTimeout(() => {
      setSubmitLabel("Send Inquiry");
      setIsSuccess(false);
    }, 2600);
  };

  return (
    <Reveal variant="reveal-right">
      <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="firstName">First name</label>
            <input id="firstName" name="firstName" type="text" placeholder="John" />
          </div>
          <div className="field">
            <label htmlFor="lastName">Last name</label>
            <input id="lastName" name="lastName" type="text" placeholder="Carter" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="name@company.com" />
        </div>

        <div className="field">
          <label htmlFor="service">Service interest</label>
          <select id="service" name="service" defaultValue="">
            <option value="">Select a focus area</option>
            {SERVICE_FORM_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="message">Project details</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us your document type, destination country, and the global support you need."
          />
        </div>

        <Button
          type="submit"
          id="submitButton"
          className={isSuccess ? "button-primary button-primary--success" : undefined}
        >
          {submitLabel}
        </Button>
        <p className="form-note" id="formNote">
          {note}
        </p>
      </form>
    </Reveal>
  );
}
