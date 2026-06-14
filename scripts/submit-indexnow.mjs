/**
 * Submits sitemap URLs to IndexNow (Bing/Yandex). Runs after production build.
 * Set INDEXNOW_KEY in env (host-verified key file at /{key}.txt).
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://azbaanglobal.com";
const key = process.env.INDEXNOW_KEY;

async function fetchSitemapUrls() {
  const res = await fetch(`${siteUrl}/sitemap.xml`);
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`);
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((match) => match[1]);
}

async function main() {
  if (!key) {
    console.log("IndexNow: skipped (INDEXNOW_KEY not set)");
    return;
  }

  const urlList = await fetchSitemapUrls();
  const host = new URL(siteUrl).host;

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation: `${siteUrl}/${key}.txt`, urlList }),
  });

  console.log(`IndexNow: submitted ${urlList.length} URLs — status ${response.status}`);
}

main().catch((error) => {
  console.error("IndexNow:", error.message);
  process.exitCode = 0;
});
