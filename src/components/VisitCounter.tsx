import { useEffect, useState } from "react";

const VISIT_COUNTER_NAMESPACE = "understack-site";
const VISIT_COUNTER_KEY = "homepage-visits";
const VISIT_COUNTER_SESSION_KEY = "understack-homepage-visit-counted";
const VISIT_COUNTER_OFFSET = 117;

export default function VisitCounter() {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadVisits() {
      try {
        const alreadyCounted =
          typeof window !== "undefined" &&
          window.sessionStorage.getItem(VISIT_COUNTER_SESSION_KEY) === "1";

        const endpoint = alreadyCounted
          ? `https://api.countapi.xyz/get/${VISIT_COUNTER_NAMESPACE}/${VISIT_COUNTER_KEY}`
          : `https://api.countapi.xyz/hit/${VISIT_COUNTER_NAMESPACE}/${VISIT_COUNTER_KEY}`;

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Failed to load visit counter");
        }

        const data: { value?: number } = await response.json();
        const rawValue = typeof data.value === "number" ? data.value : 0;
        const totalValue = rawValue + VISIT_COUNTER_OFFSET;

        if (!cancelled) {
          setVisitCount(totalValue);
        }

        if (!alreadyCounted && typeof window !== "undefined") {
          window.sessionStorage.setItem(VISIT_COUNTER_SESSION_KEY, "1");
        }
      } catch (error) {
        console.error("Visit counter error:", error);

        if (!cancelled) {
          setVisitCount(VISIT_COUNTER_OFFSET);
        }
      }
    }

    loadVisits();

    return () => {
      cancelled = true;
    };
  }, []);

  if (visitCount === null) {
    return <span>117</span>;
  }

  return <span>{visitCount.toLocaleString("en-US")}</span>;
}