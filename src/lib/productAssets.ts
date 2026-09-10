export type ProductScreenshot = {
  src: string;
  alt: string;
  caption: string;
  device: "desktop" | "tablet" | "mobile";
};

// Keep arrays empty until real product captures are available for publication.
export const productScreenshots: Record<string, ProductScreenshot[]> = {
  gastroapp: [],
  serviceos: [],
  "understack-ai-pocket": [],
  "ai-schedule": [],
  life: [],
};
