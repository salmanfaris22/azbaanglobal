import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { siteMetadata, themeInitScript } from "@/shared/config/seo";
import { JsonLd } from "@/shared/ui/JsonLd/JsonLd";
import "@/shared/styles/globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-cormorant",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${plusJakarta.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body className={plusJakarta.className}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
