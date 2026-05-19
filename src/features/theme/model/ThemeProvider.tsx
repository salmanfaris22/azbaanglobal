"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ThemeMode } from "@/shared/types";

type ThemeContextValue = {
  theme: ThemeMode;
  isDark: boolean;
  label: string;
  mobileLabel: string;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readTheme(): ThemeMode {
  if (typeof document === "undefined") return "light";
  return (document.documentElement.dataset.theme as ThemeMode) || "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>("light");

  useEffect(() => {
    setThemeState(readTheme());
  }, []);

  const syncThemeMeta = useCallback((mode: ThemeMode) => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      mode === "dark" ? "#0f0b0c" : "#fffdfc",
    );
  }, []);

  const setTheme = useCallback(
    (mode: ThemeMode) => {
      document.documentElement.dataset.theme = mode;
      localStorage.setItem("theme", mode);
      setThemeState(mode);
      syncThemeMeta(mode);
    },
    [syncThemeMeta],
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  useEffect(() => {
    syncThemeMeta(theme);
  }, [theme, syncThemeMeta]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      isDark: theme === "dark",
      label: theme === "dark" ? "Dark" : "Light",
      mobileLabel:
        theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme",
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return context;
}
