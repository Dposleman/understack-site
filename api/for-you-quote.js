const RECIPIENT = "info@understack.dk";
const MAX_REQUESTS = 5;
const WINDOW_MS = 10 * 60 * 1000;
const rateLimits = new Map();

const allowedServices = new Set([
  "personal-website",
  "portfolio",
  "freelancer-small-business",
  "custom-website",
  "web-app-custom-tool",
  "website-changes",
  "other",
]);

const allowedBudgets = new Set(["under-2000", "2000-5000", "5000-10000", "10000-plus", "not-sure"]);

function json(response, status, body) {
  response.statusCode = status;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Cache-Control", "no-store");
  response.end(JSON.stringify(body));
}

function clientIp(request) {
  const forwarded = request.headers["x-forwarded-for"];
  return typeof forwarded === "string" ? forwarded.split(",")[0].trim() : request.socket?.remoteAddress || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (rateLimits.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return true;
  recent.push(now);
  rateLimits.set(ip, recent);
  return false;
}

function clean(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

async function requestBody(request) {
  if (request.body && typeof request.body === "object") return request.body;
  if (typeof request.body === "string") return JSON.parse(request.body);

  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return json(response, 405, { error: "Method not allowed" });
  }

  if (isRateLimited(clientIp(request))) return json(response, 429, { error: "Please try again later." });

  let body;
  try {
    body = await requestBody(request);
  } catch {
    return json(response, 400, { error: "Invalid request." });
  }

  if (clean(body.website, 120)) return json(response, 202, { ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 254).toLowerCase();
  const service = clean(body.service, 80);
  const budget = clean(body.budget, 80);
  const message = clean(body.message, 5000);
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailIsValid || !allowedServices.has(service) || !allowedBudgets.has(budget) || !message) {
    return json(response, 422, { error: "Please complete all required fields." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("For You quote delivery is not configured.");
    return json(response, 503, { error: "Delivery is temporarily unavailable." });
  }

  const timestamp = new Date().toISOString();
  const text = [
    "New UnderStack For You enquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${service}`,
    `Budget: ${budget}`,
    `Source: understack.dk/for-you`,
    `Submitted: ${timestamp}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: email,
        subject: `New UnderStack For You enquiry - ${service}`,
        text,
        html: `<h1>New UnderStack For You enquiry</h1><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Service:</strong> ${escapeHtml(service)}</p><p><strong>Budget:</strong> ${escapeHtml(budget)}</p><p><strong>Source:</strong> understack.dk/for-you</p><p><strong>Submitted:</strong> ${escapeHtml(timestamp)}</p><p><strong>Message:</strong><br>${escapeHtml(message).replaceAll("\n", "<br>")}</p>`,
      }),
    });

    if (!delivery.ok) {
      console.error("For You quote delivery failed.", delivery.status);
      return json(response, 502, { error: "Delivery failed." });
    }
  } catch (error) {
    console.error("For You quote delivery failed.", error instanceof Error ? error.message : "Unknown error");
    return json(response, 502, { error: "Delivery failed." });
  }

  return json(response, 202, { ok: true });
}
