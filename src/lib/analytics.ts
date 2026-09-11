export type AnalyticsEvent =
  | "page_view"
  | "portfolio_view"
  | "product_view"
  | "gastroapp_view"
  | "peritar_view"
  | "life_view"
  | "pocket_view"
  | "service_view"
  | "case_view"
  | "demo_click"
  | "contact_click"
  | "email_click"
  | "sms_click"
  | "phone_copy"
  | "contact_form_start"
  | "contact_form_submit"
  | "outbound_click"
  | "github_click"
  | "language_change"
  | "currency_change"
  | "scroll_50"
  | "scroll_90"
  | "for_you_view"
  | "for_you_service_click"
  | "for_you_quote_start"
  | "for_you_quote_submit"
  | "for_you_contact_click"
  | "generate_lead";

export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
let initialized = false;

function currentLanguage(pathname = window.location.pathname) {
  return pathname.split("/")[1] === "dk" ? "da" : "en";
}

function gtag(...args: unknown[]) {
  void args;
  window.dataLayer ??= [];
  // gtag.js consumes queued command arguments rather than array values.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

export function initializeAnalytics() {
  if (!measurementId || initialized || typeof window === "undefined") return false;

  initialized = true;
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.append(script);

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, { send_page_view: false });
  return true;
}

export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  if (!measurementId || typeof window === "undefined") return;

  window.gtag?.("event", event, {
    page_path: window.location.pathname,
    page_location: window.location.href,
    language: currentLanguage(),
    ...payload,
  });
}

function pageContext(pathname: string) {
  if (pathname.includes("/for-you")) return { event: "for_you_view" as const, page_type: "for_you" };
  if (pathname.includes("/portfolio")) return { event: "portfolio_view" as const, page_type: "portfolio" };
  if (pathname.includes("/cases/gastroapp")) return { event: "gastroapp_view" as const, page_type: "product", product: "GastroApp" };
  if (pathname.includes("/cases/peritar-asepco")) return { event: "peritar_view" as const, page_type: "product", product: "Peritar - ASEPCO" };
  if (pathname.includes("/cases/life")) return { event: "life_view" as const, page_type: "product", product: "Life" };
  if (pathname.includes("/cases/pocket")) return { event: "pocket_view" as const, page_type: "product", product: "Pocket" };
  if (pathname.includes("/cases/")) return { event: "case_view" as const, page_type: "case" };
  if (pathname.includes("webudvikling") || pathname.includes("development") || pathname.includes("software") || pathname.includes("ai-")) {
    return { event: "service_view" as const, page_type: "service" };
  }
  return null;
}

export function trackPage(pathname: string, title: string) {
  trackEvent("page_view", { page_path: pathname, page_title: title });
  const context = pageContext(pathname);
  if (context) {
    trackEvent(context.event, context);
    if (context.page_type === "product") trackEvent("product_view", context);
  }
}

function labelFor(anchor: HTMLAnchorElement) {
  return anchor.dataset.analyticsLabel?.trim() || anchor.textContent?.trim().replace(/\s+/g, " ").slice(0, 120) || anchor.href;
}

export function trackLinkClick(target: EventTarget | null) {
  if (!(target instanceof Element)) return;
  const anchor = target.closest<HTMLAnchorElement>("a[href]");
  if (!anchor) return;

  const href = anchor.href;
  const label = labelFor(anchor);
  const explicitEvent = anchor.dataset.event;

  if (explicitEvent === "LANGUAGE_CHANGE") {
    trackEvent("language_change", { label, destination_language: currentLanguage(new URL(href).pathname) });
    return;
  }
  if (href.startsWith("mailto:")) {
    const event = explicitEvent === "CTA_CLICK" || /contact|kontakt/i.test(label) ? "contact_click" : "email_click";
    trackEvent(event, { label, destination: href.replace("mailto:", "") });
    return;
  }
  if (href.startsWith("sms:")) {
    trackEvent("sms_click", { label, location: anchor.dataset.analyticsLocation || "unknown" });
    return;
  }

  const destination = new URL(href);
  if (destination.hostname === "github.com" || destination.hostname.endsWith(".github.com")) {
    trackEvent("github_click", { label, destination: destination.href });
  } else if (destination.origin !== window.location.origin) {
    trackEvent("outbound_click", { label, destination: destination.href });
  } else if (/demo/i.test(`${label} ${destination.pathname}`)) {
    trackEvent("demo_click", { label, destination: destination.pathname });
  }
}
