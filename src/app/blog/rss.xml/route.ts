import { BLOG_POSTS } from "@/entities/blog";
import { BRAND } from "@/shared/config/seo-keywords";
import { SITE_URL } from "@/shared/config/site";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const items = BLOG_POSTS.map((post) => {
    const url = `${SITE_URL}/blog/${post.slug}`;
    return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`;
  }).join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(`${BRAND.name} Attestation Blog`)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml("Attestation guides for UAE, India, MOFA, and certificate legalization.")}</description>
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
