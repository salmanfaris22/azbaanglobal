import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [65, 70, 75, 80],
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com" },
      { protocol: "https", hostname: "www.talentattestation.com" },
      { protocol: "https", hostname: "www.embassyattestation.co.in" },
      { protocol: "https", hostname: "images.shiksha.com" },
      { protocol: "https", hostname: "indexauh.com" },
      { protocol: "https", hostname: "www.nobroker.in" },
      { protocol: "https", hostname: "apostilleserviceus.com" },
      { protocol: "https", hostname: "attest.ae" },
      { protocol: "https", hostname: "superbattestation.ae" },
      { protocol: "https", hostname: "sp-ao.shortpixel.ai" },
      { protocol: "https", hostname: "www.poshesolutions.com" },
    ],
  },
  headers: async () => [
    {
      source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/_next/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
};

export default nextConfig;
