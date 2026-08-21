import { useEffect } from "react";

const SITE_URL = "https://understack.dk";
const IMAGE_URL = `${SITE_URL}/og-image-final-optimized.jpg`;

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
  lang?: string;
  alternates?: { hrefLang: string; href: string }[];
  schema?: unknown;
};

function setMeta(selector: string, value: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", value);
}

function upsertLink(rel: string, key: string, value: string, attributes: Record<string, string>) {
  let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"][${key}="${value}"]`);

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    link.setAttribute(key, value);
    document.head.appendChild(link);
  }

  Object.entries(attributes).forEach(([name, attributeValue]) => {
    link?.setAttribute(name, attributeValue);
  });
}

export default function PageMeta({ title, description, path, lang = "en", alternates = [], schema }: PageMetaProps) {
  useEffect(() => {
    const url = new URL(path, SITE_URL).toString();
    document.documentElement.lang = lang;
    document.title = title;
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", url);
    document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"]').forEach((link) => link.remove());
    alternates.forEach((alternate) => {
      upsertLink("alternate", "hreflang", alternate.hrefLang, {
        hreflang: alternate.hrefLang,
        href: alternate.href,
      });
    });
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:image"]', IMAGE_URL);
    setMeta('meta[property="og:image:secure_url"]', IMAGE_URL);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', IMAGE_URL);
    document.querySelectorAll<HTMLScriptElement>('script[data-understack-schema="true"]').forEach((script) => script.remove());

    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.understackSchema = "true";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [alternates, description, lang, path, schema, title]);

  return null;
}
