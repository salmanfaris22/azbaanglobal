"use client";

import Script from "next/script";

export function SiteScripts() {
  return <Script src="/site.js" strategy="afterInteractive" />;
}
