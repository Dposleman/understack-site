import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { render, routes, sitemapEntries } from "../dist-ssr/entry-server.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(projectRoot, "dist");
const template = await readFile(path.join(distDir, "index.html"), "utf8");

function removeDynamicHead(html) {
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
    .replace(/\s*<meta\s+(?:name="description"|property="og:(?:title|description|url|image|image:secure_url)"|name="twitter:(?:title|description|image)")[^>]*>/gi, "")
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, "")
    .replace(/\s*<link\s+rel="alternate"[^>]*>/gi, "");
}

const cleanTemplate = removeDynamicHead(template);

for (const route of routes) {
  const { html, head, lang } = render(route);
  const output = cleanTemplate
    .replace(/<html\s+lang="[^"]*">/i, `<html lang="${lang}">`)
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const outputDir = path.join(distDir, route.replace(/^\//, ""));
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), output, "utf8");
}

const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...sitemapEntries.map(({ path: route, alternates }) => [
    "  <url>",
    `    <loc>https://understack.dk${escapeXml(route)}</loc>`,
    ...alternates.map((alternate) => `    <xhtml:link rel="alternate" hreflang="${alternate.hrefLang}" href="https://understack.dk${escapeXml(alternate.href)}" />`),
    "  </url>",
  ].join("\n")),
  "</urlset>",
  "",
].join("\n");

await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");

await rm(path.join(projectRoot, "dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes.`);
