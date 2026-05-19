"use client";

import { useTheme } from "../model/useTheme";

type ThemeToggleProps = {
  id?: string;
};

export function ThemeToggle({ id = "themeToggle" }: ThemeToggleProps) {
  const { isDark, toggleTheme, label } = useTheme();

  return (
    <button
      className="theme-toggle"
      id={id}
      type="button"
      aria-label="Toggle light and dark theme"
      aria-pressed={isDark}
      onClick={toggleTheme}
    >
      <span className="theme-toggle__label" id="themeLabel">
        {label}
      </span>
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb" />
      </span>
    </button>
  );
}
