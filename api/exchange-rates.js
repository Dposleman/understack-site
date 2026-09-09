const BASE_CURRENCY = "DKK";
const SYMBOLS = ["EUR", "NOK", "SEK", "USD"];

function json(response, status, body) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  response.end(JSON.stringify(body));
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return json(response, 405, { error: "Method not allowed" });
  }

  try {
    const upstream = await fetch(`https://api.frankfurter.dev/v1/latest?base=${BASE_CURRENCY}&symbols=${SYMBOLS.join(",")}`);
    if (!upstream.ok) throw new Error(`Rate source returned ${upstream.status}`);

    const payload = await upstream.json();
    const rates = { DKK: 1 };
    for (const symbol of SYMBOLS) {
      const rate = payload?.rates?.[symbol];
      if (typeof rate !== "number" || !Number.isFinite(rate) || rate <= 0) throw new Error(`Invalid ${symbol} rate`);
      rates[symbol] = rate;
    }

    return json(response, 200, { base: BASE_CURRENCY, date: payload.date, rates });
  } catch (error) {
    console.error("Exchange-rate lookup failed.", error instanceof Error ? error.message : "Unknown error");
    return json(response, 503, { error: "Exchange rates temporarily unavailable" });
  }
}
