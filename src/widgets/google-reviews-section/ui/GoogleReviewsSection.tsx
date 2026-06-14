import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_SUMMARY } from "@/entities/review";
import { SOCIAL_PROFILES } from "@/shared/config/social";
import { Container } from "@/shared/ui/Container";
import { Reveal } from "@/shared/ui/Reveal";
import { Section, SectionHead } from "@/shared/ui/Section";
import { StarRating } from "@/shared/ui/StarRating";

export function GoogleReviewsSection() {
  const mapsLink = SOCIAL_PROFILES.googleMaps.dubai;

  return (
    <Section id="reviews" trackSection>
      <Container>
        <SectionHead
          label="Client reviews"
          title="What clients say about Azbaan global attestation services"
          copy="Trusted feedback from customers who used Azbaan (azbaanglobal.com) for certificate attestation in Dubai, Delhi, Kochi, and across the UAE and India."
        />

        <div className="google-reviews-summary">
          <StarRating
            className="star-rating star-rating--summary"
            rating={GOOGLE_REVIEWS_SUMMARY.ratingValue}
          />
          <p>
            <strong>{GOOGLE_REVIEWS_SUMMARY.ratingValue}</strong> / 5 ·{" "}
            {GOOGLE_REVIEWS_SUMMARY.reviewCount}+ {GOOGLE_REVIEWS_SUMMARY.label}
          </p>
        </div>

        <div className="testimonial-grid google-reviews-grid">
          {GOOGLE_REVIEWS.map((review, index) => (
            <Reveal key={review.id} style={{ transitionDelay: `${index * 0.05}s` }}>
              <article className="testimonial-card google-review-card">
                <div className="google-review-card__head">
                  <span className="google-review-badge" aria-hidden="true">
                    G
                  </span>
                  <div>
                    <StarRating className="star-rating" rating={review.rating} />
                    <span className="google-review-card__meta">
                      {review.location} · {review.dateLabel}
                    </span>
                  </div>
                </div>

                <p>{review.text}</p>

                <div className="testimonial-author">
                  <strong>{review.author}</strong>
                  <span>{review.service}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="google-reviews-cta">
          Used Azbaan global?{" "}
          <a href={mapsLink} target="_blank" rel="noreferrer">
            Leave a review on Google Maps
          </a>
        </p>
      </Container>
    </Section>
  );
}
