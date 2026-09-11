export type ProductScreenshot = {
  src: string;
  alt: string;
  caption: string;
  device: "desktop" | "tablet" | "mobile";
};

// Keep arrays empty until real product captures are available for publication.
// The case pages render a "screenshots coming soon" notice instead of a fake
// or placeholder image whenever a slug's array is empty — see CaseScreenshots
// in App.tsx. Add real screenshots here (and drop the files in
// public/product-screenshots/) before removing that notice.
export const productScreenshots: Record<string, ProductScreenshot[]> = {
  gastroapp: [],
  "understack-ai-pocket": [],
  life: [],
  "peritar-asepco": [],
};
