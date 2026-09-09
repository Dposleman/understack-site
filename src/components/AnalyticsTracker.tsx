import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initializeAnalytics, trackEvent, trackLinkClick, trackPage } from "../lib/analytics";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
    trackPage(location.pathname, document.title);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => trackLinkClick(event.target);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const milestones = new Set<number>();
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = (window.scrollY / scrollable) * 100;
      ([50, 90] as const).forEach((milestone) => {
        if (progress >= milestone && !milestones.has(milestone)) {
          milestones.add(milestone);
          trackEvent(milestone === 50 ? "scroll_50" : "scroll_90", { page_path: location.pathname });
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return null;
}
