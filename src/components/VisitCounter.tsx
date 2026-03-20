import { useEffect, useState } from "react";
import { motion } from "motion/react";

const STORAGE_KEY = "understack-visit-count";
const INITIAL_COUNT = 117;

export default function VisitCounter() {
  const [count, setCount] = useState<number>(INITIAL_COUNT);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const hasVisitedKey = "understack-visit-session";
    const storedCount = window.localStorage.getItem(STORAGE_KEY);
    const hasVisitedThisSession = window.sessionStorage.getItem(hasVisitedKey);

    let nextCount = storedCount ? parseInt(storedCount, 10) : INITIAL_COUNT;

    if (!Number.isFinite(nextCount)) {
      nextCount = INITIAL_COUNT;
    }

    if (!hasVisitedThisSession) {
      nextCount += 1;
      window.localStorage.setItem(STORAGE_KEY, String(nextCount));
      window.sessionStorage.setItem(hasVisitedKey, "true");
    }

    setCount(nextCount);
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/38">
            Site visits
          </div>
          <div className="mt-2 text-2xl font-semibold text-white">
            {mounted ? count.toLocaleString() : INITIAL_COUNT.toLocaleString()}
          </div>
        </div>

        <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.75)]" />
      </div>
    </motion.div>
  );
}