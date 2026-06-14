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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="brand__logo"
        src={SITE.logoMarkSrc}
        alt={`${SITE.name} logo`}
        width={48}
        height={48}
        decoding="async"
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
