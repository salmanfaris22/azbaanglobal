import { ImageResponse } from "next/og";
import { getBlogPost } from "@/entities/blog";
import { BRAND } from "@/shared/config/seo-keywords";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function BlogOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const title = post?.title ?? "Attestation Guide";

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
          background: "linear-gradient(160deg, #12080a, #5c1820)",
          color: "#fffaf8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 3, textTransform: "uppercase", opacity: 0.85 }}>
          {BRAND.name} Blog
        </div>
        <div style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.08, maxWidth: 980 }}>{title}</div>
        <div style={{ fontSize: 24, opacity: 0.75 }}>azbaanglobal.com/blog</div>
      </div>
    ),
    { ...size },
  );
}
