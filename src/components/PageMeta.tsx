import { useEffect } from "react";

const SITE_URL = "https://understack.dk";
const IMAGE_URL = `${SITE_URL}/og-image-final-optimized.jpg`;

type PageMetaProps = {
  title: string;
  description: string;
  path: string;
};

function setMeta(selector: string, value: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", value);
}

export default function PageMeta({ title, description, path }: PageMetaProps) {
  useEffect(() => {
    const url = new URL(path, SITE_URL).toString();
    document.title = title;
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", url);
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', url);
    setMeta('meta[property="og:image"]', IMAGE_URL);
    setMeta('meta[property="og:image:secure_url"]', IMAGE_URL);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', IMAGE_URL);
  }, [description, path, title]);

  return null;
}
