const STORAGE_KEY_COUNT = "understack_visits_count";
const STORAGE_KEY_SESSION = "understack_session_counted";
const INITIAL_COUNT = 117;

export function getDeviceVisitCount(
  persistentStorage: Pick<Storage, "getItem" | "setItem">,
  sessionStorage: Pick<Storage, "getItem" | "setItem">,
) {
  try {
    const parsedCount = Number.parseInt(
      persistentStorage.getItem(STORAGE_KEY_COUNT) ?? "",
      10,
    );
    let count = Number.isSafeInteger(parsedCount) && parsedCount >= 0
      ? parsedCount
      : INITIAL_COUNT;

    if (sessionStorage.getItem(STORAGE_KEY_SESSION) !== "true") {
      count += 1;
      persistentStorage.setItem(STORAGE_KEY_COUNT, String(count));
      sessionStorage.setItem(STORAGE_KEY_SESSION, "true");
    }

    return count;
  } catch {
    return INITIAL_COUNT;
  }
}
