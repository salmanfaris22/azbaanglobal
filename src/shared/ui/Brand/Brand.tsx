import Link from "next/link";
import { SITE } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

type BrandProps = {
  href?: string;
  showTagline?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function Brand({
  href = "#top",
  showTagline = false,
  className,
  ariaLabel = `${SITE.name} home`,
}: BrandProps) {
  const content = (
    <>
      {/* Small local logo — plain img avoids next/image LCP competition with hero */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SITE.logoSrc}
        alt={`${SITE.name} logo`}
        width={48}
        height={48}
        decoding="async"
        style={{ borderRadius: "60px", marginRight: "12px" }}
      />
      <span className="brand-copy">
        <strong className={showTagline ? undefined : "brand-text"}>
          {SITE.name}
        </strong>
        {showTagline ? <span>{SITE.tagline}</span> : null}
      </span>
    </>
  );

  return (
    <Link href={href} className={cn("brand", className)} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
