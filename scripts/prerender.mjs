import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { render, routes } from "../dist-ssr/entry-server.js";

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

await rm(path.join(projectRoot, "dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes.`);
