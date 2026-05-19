"use client";

import { useEffect, useRef } from "react";

export function useHeroTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.matchMedia("(pointer:fine)").matches) return;

    let tiltFrame: number | null = null;

    const onMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 8;
      const rotateX = (0.5 - y) * 8;

      if (tiltFrame) cancelAnimationFrame(tiltFrame);
      tiltFrame = requestAnimationFrame(() => {
        element.style.setProperty("--rotate-x", `${rotateX}deg`);
        element.style.setProperty("--rotate-y", `${rotateY}deg`);
      });
    };

    const onLeave = () => {
      if (tiltFrame) {
        cancelAnimationFrame(tiltFrame);
        tiltFrame = null;
      }
      element.style.setProperty("--rotate-x", "0deg");
      element.style.setProperty("--rotate-y", "0deg");
    };

    element.addEventListener("pointermove", onMove);
    element.addEventListener("pointerleave", onLeave);
    return () => {
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return ref;
}
