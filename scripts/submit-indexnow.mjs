const key = "0f5a9c647d1e4b3eaf7268159c40de12";
const host = "understack.dk";
const defaultUrls = [
  "https://understack.dk/dk/",
  "https://understack.dk/en/",
  "https://understack.dk/dk/webudvikling-aarhus",
  "https://understack.dk/dk/softwareudvikling-aarhus",
  "https://understack.dk/en/web-development",
  "https://understack.dk/en/software-development",
  "https://understack.dk/en/restaurant-software",
  "https://understack.dk/en/cases/gastroapp",
  "https://understack.dk/en/for-you",
];

const urls = (process.env.INDEXNOW_URLS || defaultUrls.join(","))
  .split(",")
  .map((url) => url.trim())
  .filter(Boolean);

if (!urls.length || urls.some((url) => !url.startsWith(`https://${host}/`))) {
  throw new Error("INDEXNOW_URLS must contain one or more canonical understack.dk URLs.");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls,
  }),
});

if (!response.ok) {
  throw new Error(`IndexNow submission failed with HTTP ${response.status}.`);
}

console.log(`Submitted ${urls.length} canonical UnderStack URL(s) to IndexNow.`);
