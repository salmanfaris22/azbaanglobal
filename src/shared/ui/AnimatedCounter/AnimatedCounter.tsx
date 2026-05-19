"use client";

import { useReveal } from "@/shared/hooks/useReveal";
import { useAnimatedCounter } from "@/shared/hooks/useAnimatedCounter";

type AnimatedCounterProps = {
  target: number;
  className?: string;
};

export function AnimatedCounter({ target, className }: AnimatedCounterProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();
  const value = useAnimatedCounter(target, isVisible);

  return (
    <strong ref={ref} className={className} data-count={target}>
      {isVisible ? value : "0"}
    </strong>
  );
}
