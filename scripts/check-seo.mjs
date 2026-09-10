import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const canonicalDomain = "https://understack.dk";
const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

if (!urls.length) throw new Error("Sitemap does not contain any URLs.");
if (new Set(urls).size !== urls.length) throw new Error("Sitemap contains duplicate URLs.");
if (urls.some((url) => !url.startsWith(`${canonicalDomain}/`) || url.includes("vercel.app"))) {
  throw new Error("Sitemap contains a non-canonical URL.");
}

for (const url of urls) {
  const pathname = new URL(url).pathname;
  const output = path.join(dist, pathname.replace(/^\//, ""), "index.html");
  const html = await readFile(output, "utf8");
  if (!html.includes(`<link rel="canonical" href="${url}" />`)) {
    throw new Error(`Missing canonical tag for ${pathname}.`);
  }
}

await access(path.join(dist, "robots.txt"));
await access(path.join(dist, "llms.txt"));
console.log(`SEO validation passed for ${urls.length} canonical URLs.`);
