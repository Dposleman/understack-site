export type ProductScreenshot = {
  src: string;
  alt: string;
  caption: string;
  device: "desktop" | "tablet" | "mobile";
};

export const productScreenshots: Record<string, ProductScreenshot[]> = {
  gastroapp: [
    { src: "/portfolio/gastroapp-dashboard.png", alt: "GastroApp dashboard", caption: "Dashboard", device: "desktop" },
    { src: "/portfolio/gastroapp-recipes.png", alt: "GastroApp recipe management screen", caption: "Recipes", device: "desktop" },
    { src: "/portfolio/gastroapp-design.png", alt: "GastroApp design configuration screen", caption: "Design configuration", device: "desktop" },
    { src: "/portfolio/gastroapp-reports.png", alt: "GastroApp operational reports", caption: "Reports", device: "desktop" },
    { src: "/portfolio/gastroapp-restaurants.png", alt: "GastroApp restaurant access screen", caption: "Restaurant access", device: "desktop" },
  ],
  "understack-ai-pocket": [
    { src: "/portfolio/pocket-overview.png", alt: "UnderStack AI Pocket mobile application screens", caption: "UnderStack AI Pocket", device: "mobile" },
  ],
  "peritar-asepco": [
    { src: "/portfolio/peritar-before.png", alt: "Peritar platform before UnderStack modernization", caption: "Before UnderStack", device: "desktop" },
    { src: "/portfolio/peritar-home.png", alt: "Modernized Peritar homepage", caption: "Modernized homepage", device: "desktop" },
    { src: "/portfolio/peritar-login.png", alt: "Modernized Peritar sign-in screen", caption: "Modernized sign-in", device: "desktop" },
  ],
  life: [
    { src: "/portfolio/life-overview.png", alt: "Life personal organization mobile application screens", caption: "Life app", device: "mobile" },
  ],
};
