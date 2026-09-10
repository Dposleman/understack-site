# UnderStack SEO Setup Guide

## What is implemented

- `https://understack.dk` is the canonical public domain.
- HTTP redirects to HTTPS at the platform level. `www.understack.dk` redirects permanently to the non-www canonical domain.
- All public marketing routes are prerendered during the production build.
- `dist/sitemap.xml` is generated from the public route configuration during every build. It only contains public pages and uses canonical `https://understack.dk` URLs.
- `https://understack.dk/robots.txt` permits public crawling and declares the sitemap.
- `https://understack.dk/llms.txt` provides a concise machine-readable map of the company, services, products and public research.
- Every public route has a title, description, canonical URL, OpenGraph metadata, Twitter metadata and an appropriate language declaration.
- Schema is emitted server-side: Organization, WebSite, WebPage, BreadcrumbList, Service, SoftwareApplication, Article and FAQPage only where applicable.
- Private API routes carry `X-Robots-Tag: noindex`.
- Preview deployment URLs are Vercel SSO-protected and return `X-Robots-Tag: noindex`.

## Search Console

The Google Search Console property is already linked to Google Analytics. Verify the following in Search Console:

1. Confirm the verified Domain property is `understack.dk`.
2. Submit `https://understack.dk/sitemap.xml`.
3. Inspect and request indexing for the Danish homepage, English homepage, Aarhus service pages, product pages and new Insights articles after publication.
4. Review Pages, Enhancements, Core Web Vitals and Search results weekly during the first month.
5. Use query and page data to improve pages with real impressions; do not create content only because a keyword looks attractive.

## Bing Webmaster Tools and IndexNow

1. Add `understack.dk` to Bing Webmaster Tools, preferably importing the verified Search Console property or using DNS verification.
2. Submit `https://understack.dk/sitemap.xml`.
3. The public IndexNow verification file is `https://understack.dk/0f5a9c647d1e4b3eaf7268159c40de12.txt`.
4. After a significant public page, product page or Insight is deployed, run `node scripts/submit-indexnow.mjs` from the repository root.
5. To submit a specific set of canonical pages, set `INDEXNOW_URLS` to a comma-separated list. The script rejects non-canonical domains.

IndexNow helps Bing, Microsoft Copilot and compatible engines discover updated URLs. It does not replace sitemaps, useful content or natural links.

## Analytics

GA4 tracks page views, service and product views, CTA/email clicks, scroll depth, language changes, currency changes and For You interactions.

Important events:

- `contact_click`
- `email_click`
- `service_view`
- `product_view`
- `for_you_quote_start`
- `for_you_quote_submit`
- `generate_lead` after a quote request is accepted by the server
- `currency_change`

Once `generate_lead` appears in GA4 Events after a real accepted enquiry, mark it as a key event. Do not mark scroll depth or page views as conversions.

Useful reports:

- **Reports > User attributes > Demographic details**: countries and active users.
- **Reports > Acquisition**: channels, sources and landing pages.
- **Reports > Generate leads**: commercial entry pages and lead behaviour.
- **Realtime**: current activity and immediate tracking checks.
- **Search Console reports**: organic queries and landing pages.

## Adding future SEO pages

1. Add a real, useful page object to `src/seoContent.ts` using the existing language and route conventions.
2. Give it a unique title, description, H1, sections and contextual related links.
3. Add FAQs only when answers are genuinely useful and visible on the page.
4. Build the project. The route is prerendered and added to the sitemap automatically.
5. Submit the important new canonical URL through Search Console and, when material, IndexNow.

Do not create country pages by replacing a country name in the same text. Future Sweden, Norway, Germany, Netherlands, Finland or UK pages must contain real localized commercial information.

## Adding product screenshots

Screenshots are intentionally not displayed until real product captures exist.

1. Put optimized images in `public/product-screenshots/`.
2. Use filenames such as `gastroapp-dashboard-desktop.webp` and `gastroapp-stock-mobile.webp`.
3. Prefer WebP or AVIF. Use a desktop width around 1600px and mobile width around 900px; avoid screenshots containing personal or customer data.
4. Add an entry to `productScreenshots` in `src/lib/productAssets.ts`:

```ts
{
  src: "/product-screenshots/gastroapp-dashboard-desktop.webp",
  alt: "GastroApp dashboard showing operational restaurant metrics",
  caption: "Operational dashboard",
  device: "desktop",
}
```

5. Render `ProductScreenshotGallery` from `src/components/ProductScreenshotGallery.tsx` inside the relevant product page using that product's configured array.
6. Keep captions descriptive, use truthful alt text, and order images from overview to detail.

The gallery renders nothing for an empty configuration, so no placeholder or invented imagery reaches production.

## UnderStack Entity Profile

Use this consistently in external listings:

- **Company name:** UnderStack
- **Website:** https://understack.dk/
- **General contact:** info@understack.dk
- **Technical/product contact:** dev.team@understack.dk
- **SMS contact:** +45 91 40 67 22
- **Call policy:** Calls are scheduled in advance; start with an SMS so UnderStack can prepare.
- **CVR:** 46327608
- **Primary market:** Aarhus and Denmark
- **Broader market:** Europe
- **Primary categories:** Software company, custom software development, web development, AI solutions, restaurant software

Short description:

> UnderStack is a software company in Aarhus, Denmark building custom software, web platforms, AI-enabled workflows and restaurant technology for companies in Denmark and Europe.

Do not add an address, phone number, employee count, reviews, awards, clients or testimonials unless they are verified and approved for publication.

## External distribution checklist

| Priority | Platform | Use | Required assets |
| --- | --- | --- | --- |
| High | Google Business Profile | Local entity discovery in Aarhus | Verified business/service-area details, logo, real photos if available |
| High | Bing Places | Bing and local discovery | Same verified company details and canonical URL |
| High | GitHub | Developer trust and product engineering visibility | Clean public repositories and accurate READMEs |
| Medium | Clutch | B2B service discovery | Real portfolio and only legitimate reviews |
| Medium | GoodFirms | Software-service directory visibility | Accurate service categories and real work |
| Medium | Product Hunt | Launch distribution for public, launch-ready products | Product description, genuine screenshots and launch material |
| Medium | Indie Hackers | Founder/product discovery | Real build notes and product updates |
| Medium | Dev.to | Technical authority | Useful original engineering articles with contextual canonical links |
| Validate first | Danish and European business directories | Local citations | Verify relevance, editorial quality and listing eligibility first |

Never purchase spam links, create fake profiles, publish fabricated reviews or use automated directory blasts.

## Content and backlink priorities

1. Publish useful Insights based on real sales questions and Search Console impressions.
2. Build real product documentation and screenshots for public products.
3. Ask approved clients for a factual case study or optional attribution after completed work.
4. Publish engineering articles through UnderStack/GitHub/Dev.to with a genuine technical point of view.
5. Create only accurate company profiles, then keep their name, description and canonical URL consistent.
