import { getDeviceVisitCount } from "../lib/deviceVisits";

export default function VisitCounter() {
  const count = getDeviceVisitCount(window.localStorage, window.sessionStorage);

  return (
    <div className="flex items-center justify-center mt-6">
      <div className="px-4 py-2 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg">
        <p className="text-sm text-white/70">
          👀 Visits on this device:{" "}
          <span className="text-white font-semibold tracking-wide">
            {count.toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
}
