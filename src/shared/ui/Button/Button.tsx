import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import type { ButtonVariant } from "@/shared/types";

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  id?: string;
  disabled?: boolean;
  style?: CSSProperties;
};

export function Button({
  href,
  variant = "primary",
  children,
  className,
  type = "button",
  onClick,
  id,
  disabled,
  style,
}: ButtonProps) {
  const classes = cn(
    variant === "primary" ? "button-primary" : "button-secondary",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      id={id}
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
}
