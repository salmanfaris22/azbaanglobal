"use client";

import { useEffect, useState } from "react";

function getSuffix(target: number): string {
  if (target === 98) return "%";
  if (target >= 40) return "+";
  return "";
}

export function useAnimatedCounter(target: number, isActive: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let current = 0;
    const step = Math.max(1, Math.round(target / 48));

    const timer = window.setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        window.clearInterval(timer);
      }
      setValue(current);
    }, 28);

    return () => window.clearInterval(timer);
  }, [target, isActive]);

  return `${value}${getSuffix(target)}`;
}
