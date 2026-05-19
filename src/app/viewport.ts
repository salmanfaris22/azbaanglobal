import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0b0c" },
  ],
};
