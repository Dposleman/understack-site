# UnderStack SEO Strategy

## Current Situation

UnderStack was a premium corporate React/Vite site with limited indexable architecture: `/`, `/apps`, and `/marketplace`. The site had good visual identity and basic metadata, but no commercial landing pages, no international structure, no hreflang system, no structured data, and no content hub.

The current implementation now targets acquisition from non-branded commercial searches, starting with Aarhus and Denmark before expanding to English-language European intent.

## Architecture

- Primary market: `/dk/`
- English expansion: `/en/`
- Future-ready language slots: `/de/`, `/se/`, `/no/`, `/nl/`
- Primary service pages: web development, software development, app development, AI solutions, restaurant software, custom software, webshop development
- Trust assets: `/dk/cases/`, `/en/cases/`
- Content hub: `/dk/insights/`, `/en/insights/`

## Critical Notes

- The current stack is Vite + React Router with client-side rendering. This is workable for Google, but not ideal for SEO because page content is not fully present in the initial HTML.
- A future SSG/SSR migration to Astro, Next.js, or prerendered Vite routes would materially improve crawl reliability and metadata rendering.
- No address, phone, staff count, reviews, awards, client names, revenue, or commercial performance metrics were invented.

## 90-Day Roadmap

### Days 1-30

Technical SEO, Danish commercial pages, Search Console, Bing Webmaster Tools, sitemap submission, and priority indexing.

Focus:
- Validate `/dk/` and all Danish service pages
- Submit sitemap
- Request indexing for Aarhus and Denmark commercial pages
- Confirm canonical and hreflang behavior
- Track non-branded impressions

### Days 31-60

Case studies, content hub expansion, Danish internal linking, and Danish backlinks.

Focus:
- Expand GastroApp with real screenshots and product details
- Add deeper cost and comparison articles
- Build citations and Danish business profiles
- Start legitimate review acquisition after Google Business Profile is live

### Days 61-90

English European expansion, directories, authority building, and optimization based on Search Console data.

Focus:
- Improve English service pages from query data
- Add Nordic/European content angles
- Publish external thought leadership
- Improve CTR for pages with impressions but low clicks

## KPIs

Use baseline data from Search Console before setting numeric targets.

Track:
- Impressions
- Organic clicks
- Indexed pages
- Non-branded queries
- Top 10 keywords
- CTR
- Qualified leads
- Conversion rate

## External Data Needed

Provide these when available:
- Real business address if public
- Phone number if public
- Google Business Profile service area preferences
- Real screenshots for GastroApp, AI Schedule, ServiceOS
- Real customer/client names only if permission exists
- Real testimonials only if permission exists
