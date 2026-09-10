import type { ProductScreenshot } from "../lib/productAssets";

export default function ProductScreenshotGallery({ screenshots }: { screenshots: ProductScreenshot[] }) {
  if (!screenshots.length) return null;

  return (
    <section aria-label="Product screenshots" className="grid gap-5 md:grid-cols-2">
      {screenshots.map((screenshot) => (
        <figure key={screenshot.src} className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.045]">
          <img src={screenshot.src} alt={screenshot.alt} loading="lazy" className="h-auto w-full" />
          <figcaption className="px-4 py-3 text-sm text-white/62">{screenshot.caption}</figcaption>
        </figure>
      ))}
    </section>
  );
}
