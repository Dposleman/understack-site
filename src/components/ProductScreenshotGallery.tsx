import { useState } from "react";
import type { ProductScreenshot } from "../lib/productAssets";

export default function ProductScreenshotGallery({ screenshots, label = "Product screenshots" }: { screenshots: ProductScreenshot[]; label?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!screenshots.length) return null;

  const active = screenshots[activeIndex];
  const isCarousel = screenshots.length > 1;
  const showPrevious = () => setActiveIndex((index) => (index - 1 + screenshots.length) % screenshots.length);
  const showNext = () => setActiveIndex((index) => (index + 1) % screenshots.length);

  return (
    <section aria-label={label} className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60">
      <figure>
        <div className="relative flex h-52 items-center justify-center bg-black/25 sm:h-64">
          <img src={active.src} alt={active.alt} loading="lazy" className="h-full w-full object-contain" />
          {isCarousel ? (
            <>
              <button type="button" onClick={showPrevious} aria-label="Previous screenshot" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-white shadow-lg transition hover:bg-slate-800">←</button>
              <button type="button" onClick={showNext} aria-label="Next screenshot" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-slate-950/80 px-3 py-2 text-sm text-white shadow-lg transition hover:bg-slate-800">→</button>
            </>
          ) : null}
        </div>
        <figcaption className="flex items-center justify-between gap-3 border-t border-white/8 px-4 py-3 text-xs text-white/62">
          <span>{active.caption}</span>
          {isCarousel ? <span>{activeIndex + 1} / {screenshots.length}</span> : null}
        </figcaption>
      </figure>
      {isCarousel ? (
        <div className="flex gap-2 overflow-x-auto border-t border-white/8 p-3" aria-label="Choose screenshot">
          {screenshots.map((screenshot, index) => (
            <button key={screenshot.src} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show ${screenshot.caption}`} aria-current={index === activeIndex ? "true" : undefined} className={`shrink-0 overflow-hidden rounded-md border transition ${index === activeIndex ? "border-cyan-300" : "border-white/10 opacity-60 hover:opacity-100"}`}>
              <img src={screenshot.src} alt="" loading="lazy" className="h-10 w-16 object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </section>
  );
}
