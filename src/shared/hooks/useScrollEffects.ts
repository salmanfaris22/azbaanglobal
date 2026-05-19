"use client";

import { useEffect, useRef, useState } from "react";

type ScrollEffectsOptions = {
  isMenuOpen?: boolean;
  isModalOpen?: boolean;
};

export function useScrollEffects(options: ScrollEffectsOptions = {}) {
  const { isMenuOpen = false, isModalOpen = false } = options;
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const syncHeaderOffset = () => {
      const header = headerRef.current;
      if (!header) return;
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--header-offset",
          `${header.offsetHeight}px`,
        );
      });
    };

    const setHeaderState = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      const isScrollingDown = scrollTop > lastScrollY.current;

      setIsScrolled(scrollTop > 18);
      setIsHeaderHidden(
        scrollTop > 160 &&
          isScrollingDown &&
          !isMenuOpen &&
          !isModalOpen &&
          scrollTop > 24,
      );

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      document.querySelectorAll<HTMLElement>(".orb").forEach((orb) => {
        const speed = Number(orb.dataset.speed || 0.08);
        orb.style.transform = `translate3d(0, ${scrollTop * speed}px, 0)`;
      });

      lastScrollY.current = scrollTop;
    };

    syncHeaderOffset();
    setHeaderState();

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setHeaderState();
        ticking = false;
      });
    };

    const onResize = () => syncHeaderOffset();
    const onLoad = () => {
      document.body.classList.add("is-ready");
      syncHeaderOffset();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onLoad);
    onLoad();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onLoad);
    };
  }, [isMenuOpen, isModalOpen]);

  return { headerRef, progressRef, isScrolled, isHeaderHidden };
}
