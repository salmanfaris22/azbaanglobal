import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type LoadInProps = {
  children: ReactNode;
  delay?: string;
  className?: string;
};

export function LoadIn({ children, delay, className }: LoadInProps) {
  const style: CSSProperties | undefined = delay
    ? ({ "--delay": delay } as CSSProperties)
    : undefined;

  return (
    <div className={cn("load-in", className)} style={style}>
      {children}
    </div>
  );
}
