type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
};

export function StarRating({ rating, max = 5, className }: StarRatingProps) {
  return (
    <div
      className={className}
      role="img"
      aria-label={`${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }, (_, index) => {
        const filled = index < Math.round(rating);
        return (
          <svg
            key={index}
            className={`star-rating__star${filled ? " is-filled" : ""}`}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l2.9 6.26 6.8.59-5.15 4.48 1.55 6.63L12 17.77l-6.1 3.19 1.55-6.63L2.3 8.85l6.8-.59L12 2z" />
          </svg>
        );
      })}
    </div>
  );
}
