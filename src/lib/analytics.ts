export type AnalyticsEvent =
  | "CTA_CLICK"
  | "CONTACT_CLICK"
  | "EMAIL_CLICK"
  | "SERVICE_VIEW"
  | "CASE_VIEW"
  | "LANGUAGE_CHANGE"
  | "PRICING_VIEW";

type AnalyticsPayload = {
  path?: string;
  label?: string;
  language?: string;
};

declare global {
  interface Window {
    understackAnalytics?: (event: AnalyticsEvent, payload: AnalyticsPayload) => void;
  }
}

export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  window.understackAnalytics?.(event, {
    path: window.location.pathname,
    ...payload,
  });
}
