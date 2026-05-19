"use client";

import { useCallback, useEffect, useState } from "react";
import { SERVICES } from "@/entities/service";
import type { ServiceKey } from "@/entities/service";

export function useServiceModal() {
  const [activeKey, setActiveKey] = useState<ServiceKey | null>(null);

  const activeService = SERVICES.find((s) => s.key === activeKey) ?? null;
  const isOpen = activeKey !== null;

  const open = useCallback((key: ServiceKey) => {
    setActiveKey(key);
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    setActiveKey(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return { activeService, isOpen, open, close };
}
