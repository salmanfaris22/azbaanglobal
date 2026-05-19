import type { ReactNode } from "react";

type IconBadgeProps = {
  children: ReactNode;
};

export function IconBadge({ children }: IconBadgeProps) {
  return (
    <span className="icon-badge" aria-hidden="true">
      {children}
    </span>
  );
}
