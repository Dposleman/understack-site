import { describe, expect, it } from "vitest";
import { getDeviceVisitCount } from "../lib/deviceVisits";

function storage(initial: Record<string, string> = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => { values.set(key, value); },
  };
}

describe("getDeviceVisitCount", () => {
  it("increments once per browser session", () => {
    const persistent = storage();
    const session = storage();
    expect(getDeviceVisitCount(persistent, session)).toBe(118);
    expect(getDeviceVisitCount(persistent, session)).toBe(118);
  });

  it("recovers from invalid stored values", () => {
    expect(getDeviceVisitCount(storage({ understack_visits_count: "invalid" }), storage())).toBe(118);
  });

  it("falls back safely when storage is unavailable", () => {
    const unavailable = {
      getItem: () => { throw new Error("unavailable"); },
      setItem: () => { throw new Error("unavailable"); },
    };
    expect(getDeviceVisitCount(unavailable, unavailable)).toBe(117);
  });
});
