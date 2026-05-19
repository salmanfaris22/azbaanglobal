import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { SiteScripts } from "@/components/SiteScripts";
import { structuredData } from "@/lib/structured-data";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Azbaan global | International global Services in Dubai, UAE",
  description:
    "Azbaan global offers international global services in Dubai, UAE, including embassy, consulate, MOFA, educational, personal, and commercial certificate global support.",
  keywords: [
    "Azbaan global",
    "global services Dubai",
    "UAE global",
    "international global UAE",
    "MOFA global",
    "embassy global",
    "consulate global",
    "certificate global Dubai",
  ],
  authors: [{ name: "Azbaan global" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    title: "Azbaan global | International global Services in Dubai, UAE",
    description:
      "Professional international global services in UAE with country coverage, consulate support, MOFA global, and responsive image-led service presentation.",
    siteName: "Azbaan global",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
        alt: "Dubai skyline representing professional global services in UAE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azbaan global | International global Services in Dubai, UAE",
    description:
      "Legal international global services in UAE with countries coverage, consulate assistance, and premium responsive presentation.",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  other: {
    "theme-color": "#fffaf8",
  },
};

const themeInitScript = `(function () {
  const savedTheme = localStorage.getItem("theme");
  document.documentElement.dataset.theme = savedTheme || "light";
}());`;

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={plusJakarta.className}>
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
