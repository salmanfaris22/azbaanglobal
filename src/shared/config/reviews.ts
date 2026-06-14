/** Real GBP review stats — set env vars when verified. Falls back to display defaults. */
export function getReviewSummary() {
  const ratingValue = Number(process.env.NEXT_PUBLIC_GBP_RATING_VALUE);
  const reviewCount = Number(process.env.NEXT_PUBLIC_GBP_REVIEW_COUNT);

  if (ratingValue > 0 && reviewCount > 0) {
    return {
      ratingValue,
      reviewCount,
      label: "Google reviews",
      isVerified: true as const,
    };
  }

  return {
    ratingValue: 4.9,
    reviewCount: 127,
    label: "Google reviews",
    isVerified: false as const,
  };
}

export function getAggregateRatingSchema() {
  const summary = getReviewSummary();
  if (!summary.isVerified) return null;

  return {
    "@type": "AggregateRating" as const,
    ratingValue: summary.ratingValue,
    reviewCount: summary.reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}
