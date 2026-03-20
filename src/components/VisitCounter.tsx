import { useEffect, useState } from "react";

const STORAGE_KEY_COUNT = "understack_visits_count";
const STORAGE_KEY_SESSION = "understack_session_counted";

export default function VisitCounter() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const storedCount = localStorage.getItem(STORAGE_KEY_COUNT);
    const sessionCounted = sessionStorage.getItem(STORAGE_KEY_SESSION);

    let currentCount = storedCount ? parseInt(storedCount, 10) : 117; // base inicial

    // Solo incrementa UNA vez por sesión
    if (!sessionCounted) {
      currentCount += 1;
      localStorage.setItem(STORAGE_KEY_COUNT, currentCount.toString());
      sessionStorage.setItem(STORAGE_KEY_SESSION, "true");
    }

    setCount(currentCount);
  }, []);

  return (
    <div className="flex items-center justify-center mt-6">
      <div className="px-4 py-2 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg">
        <p className="text-sm text-white/70">
          👀 Visits:{" "}
          <span className="text-white font-semibold tracking-wide">
            {count.toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
}