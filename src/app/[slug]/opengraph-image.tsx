import { ImageResponse } from "next/og";
import { getSeoPage } from "@/shared/config/seo-pages";
import { BRAND } from "@/shared/config/seo-keywords";

export const runtime = "edge";
export const alt = "Azbaan global attestation services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  const title = page?.h1 ?? BRAND.name;
  const subtitle = page?.keyword ?? "Attestation Services UAE & India";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #1a0a0c 0%, #4a1018 45%, #8b1e2a 100%)",
          color: "#fffaf8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.9, letterSpacing: 4, textTransform: "uppercase" }}>
          {BRAND.name}
        </div>
        <div>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
            {title}
          </div>
          <div style={{ marginTop: 20, fontSize: 30, opacity: 0.88 }}>{subtitle}</div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.75 }}>azbaanglobal.com</div>
      </div>
    ),
    { ...size },
  );
}
