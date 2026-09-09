import { type FormEvent, useState } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { trackEvent } from "./lib/analytics";
import LifePrivacyPage from "./pages/LifePrivacyPage";
import logo from "./assets/understack-logo.png";
import PageMeta from "./components/PageMeta";
import PocketPrivacyPage from "./pages/PocketPrivacyPage";
import {
  allPages,
  alternateFor,
  COMPANY_CVR,
  CONTACT_EMAIL,
  findPage,
  GENERAL_EMAIL,
  languageNames,
  pagePath,
  portfolioProjects,
  SITE_URL,
  type Language,
  type PortfolioProject,
  type SeoPage,
} from "./seoContent";

function isLanguage(value: string | undefined): value is Language {
  return value === "dk" || value === "en";
}

function localUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UnderStack",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    email: GENERAL_EMAIL,
    vatID: `DK${COMPANY_CVR}`,
    areaServed: ["Aarhus", "Denmark", "Nordics", "Europe"],
    knowsAbout: ["Software development", "Web development", "Custom software", "AI solutions", "Restaurant software"],
  };
}

// Exported for the SSG entry so prerendered pages and client navigation share identical schema.
// eslint-disable-next-line react-refresh/only-export-components
export function schemaFor(page: SeoPage) {
  const path = pagePath(page);
  const breadcrumbs = [
    { "@type": "ListItem", position: 1, name: "UnderStack", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: page.h1, item: localUrl(path) },
  ];
  const base: Record<string, unknown>[] = [
    organizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "UnderStack",
      url: SITE_URL,
      inLanguage: page.lang === "dk" ? "da-DK" : "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs,
    },
  ];

  if (page.kind === "service") {
    base.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      description: page.description,
      provider: { "@type": "Organization", name: "UnderStack", url: SITE_URL },
      areaServed: page.lang === "dk" ? ["Aarhus", "Danmark"] : ["Aarhus", "Denmark", "Europe"],
      url: localUrl(path),
    });
  }

  if (page.kind === "forYou") {
    base.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "UnderStack For You",
      description: page.description,
      provider: { "@type": "Organization", name: "UnderStack", url: SITE_URL },
      areaServed: ["Aarhus", "Denmark"],
      url: localUrl(path),
      offers: [
        { "@type": "Offer", name: "Personal website", price: "1500", priceCurrency: "DKK" },
        { "@type": "Offer", name: "Small web app or custom tool", price: "4500", priceCurrency: "DKK" },
      ],
    });
  }

  if (page.kind === "case") {
    base.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: page.h1.split(":")[0],
      applicationCategory: "BusinessApplication",
      description: page.description,
      operatingSystem: "Web",
      url: localUrl(path),
      offers: { "@type": "Offer", price: "0", priceCurrency: "DKK", availability: "https://schema.org/InDevelopment" },
    });
  }

  if (page.kind === "portfolio") {
    base.push({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: page.h1,
      description: page.description,
      url: localUrl(path),
      about: ["SaaS development", "Custom software development", "AI solutions", "Restaurant software", "Business platform modernization"],
      mainEntity: portfolioProjects.map((project) => ({
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        genre: project.category,
        locationCreated: project.location,
        url: project.cta?.href,
      })),
    });
  }

  if (page.kind === "insight") {
    base.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.h1,
      description: page.description,
      author: { "@type": "Organization", name: "UnderStack" },
      publisher: { "@type": "Organization", name: "UnderStack", logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png` } },
      mainEntityOfPage: localUrl(path),
      inLanguage: page.lang === "dk" ? "da-DK" : "en",
    });
  }

  return base;
}

function Header({ page }: { page: SeoPage }) {
  const currentPath = pagePath(page);
  const langLinks: Language[] = ["dk", "en"];

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href={`/${page.lang}/`} className="flex items-center gap-3">
          <img src={logo} alt="UnderStack logo" className="h-8 w-8" loading="eager" />
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90">UnderStack</span>
        </a>
        <nav className="flex flex-wrap items-center gap-5 text-sm text-white/68" aria-label="Primary navigation">
          <a href={`/${page.lang}/webudvikling-aarhus`} className={page.lang === "dk" ? "hover:text-white" : "hidden"}>
            Webudvikling
          </a>
          <a href={`/${page.lang}/web-development`} className={page.lang === "en" ? "hover:text-white" : "hidden"}>
            Web
          </a>
          <a href={`/${page.lang}/${page.lang === "dk" ? "softwareudvikling" : "software-development"}`} className="hover:text-white">
            Software
          </a>
          <a href={`/${page.lang}/${page.lang === "dk" ? "restaurant-software" : "restaurant-software"}`} className="hover:text-white">
            Restaurant
          </a>
          <a href={`/${page.lang}/cases/`} className="hover:text-white">
            Cases
          </a>
          <a href={`/${page.lang}/portfolio`} className="hover:text-white">
            Portfolio
          </a>
          <a href={`/${page.lang}/for-you`} className="hover:text-white">
            For You
          </a>
          <a href={`/${page.lang}/insights/`} className="hover:text-white">
            Insights
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100 hover:bg-cyan-300/15">
            {page.lang === "dk" ? "Kontakt" : "Contact"}
          </a>
        </nav>
        <div className="flex items-center gap-2 text-xs text-white/58" aria-label="Language switcher">
          {langLinks.map((lang) => {
            const href = alternateFor(page, lang);
            return (
              <a
                key={lang}
                href={href}
                data-event="LANGUAGE_CHANGE"
                aria-current={currentPath === href ? "page" : undefined}
                className={`rounded-full border px-3 py-1 ${page.lang === lang ? "border-cyan-300/30 text-cyan-100" : "border-white/10 hover:text-white"}`}
              >
                {languageNames[lang]}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}

function Footer({ lang }: { lang: Language }) {
  const services =
    lang === "dk"
      ? [
          ["Webudvikling Aarhus", "/dk/webudvikling-aarhus"],
          ["Softwareudvikling", "/dk/softwareudvikling"],
          ["AI-løsninger", "/dk/ai-loesninger"],
          ["Restaurant software", "/dk/restaurant-software"],
          ["Portfolio", "/dk/portfolio"],
          ["For You", "/dk/for-you"],
        ]
      : [
          ["Web development", "/en/web-development"],
          ["Software development", "/en/software-development"],
          ["AI development", "/en/ai-development"],
          ["Restaurant software", "/en/restaurant-software"],
          ["Portfolio", "/en/portfolio"],
          ["For You", "/en/for-you"],
        ];

  return (
    <footer className="border-t border-white/8 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white">UnderStack</div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/58">
            {lang === "dk"
              ? "Softwarefirma i Aarhus med fokus på premium webplatforme, custom software, AI-løsninger og restaurant software."
              : "Software company in Aarhus, Denmark building premium web platforms, custom software, AI solutions and restaurant software."}
          </p>
          <p className="mt-4 text-sm text-white/48">CVR: {COMPANY_CVR}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-white/42">Services</div>
          <div className="mt-4 grid gap-3 text-sm text-white/62">
            {services.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-white">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.24em] text-white/42">Contact</div>
          <p className="mt-4 text-xs text-white/42">{lang === "dk" ? "Generelle henvendelser" : "General enquiries"}</p>
          <a href={`mailto:${GENERAL_EMAIL}`} data-event="EMAIL_CLICK" className="mt-1 block text-sm text-cyan-100 hover:text-white">
            {GENERAL_EMAIL}
          </a>
          <p className="mt-4 text-xs text-white/42">{lang === "dk" ? "Produkt og teknik" : "Product and technical"}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} data-event="EMAIL_CLICK" className="mt-1 block text-sm text-cyan-100 hover:text-white">
            {CONTACT_EMAIL}
          </a>
          <p className="mt-6 text-xs text-white/40">© 2026 UnderStack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function CardGrid({ page }: { page: SeoPage }) {
  if (page.kind !== "caseIndex" && page.kind !== "insightIndex") {
    return null;
  }

  const children = allPages.filter((item) => item.lang === page.lang && item.slug.startsWith(`${page.slug}/`));

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {children.map((item) => (
          <a key={item.slug} href={pagePath(item)} className="rounded-[28px] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-cyan-300/24">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/72">{item.kind === "case" ? "Case" : "Insight"}</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">{item.h1}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function localizedProject(project: PortfolioProject, lang: Language) {
  return { ...project, ...project.localized?.[lang] };
}

function PortfolioCard({ project, lang }: { project: PortfolioProject; lang: Language }) {
  const content = localizedProject(project, lang);

  return (
    <article className="portfolio-card group relative overflow-hidden p-7 sm:p-8">
      <div className="portfolio-card-sheen" aria-hidden="true" />
      <div className="portfolio-card-content relative">
        <div className="flex items-start justify-between gap-5">
          <p className="portfolio-kicker">{content.category}</p>
          {content.status ? <span className="portfolio-status">{content.status}</span> : null}
        </div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.name}</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/64">{content.description}</p>

        {content.location ? <p className="portfolio-location mt-5">{content.location}</p> : null}

        <ul className="portfolio-capabilities mt-7">
          {content.capabilities.map((capability) => (
            <li key={capability}>
              {capability}
            </li>
          ))}
        </ul>

        {content.cta ? (
          <a
            href={content.cta.href}
            className="portfolio-link mt-8 inline-flex min-h-11 items-center text-sm font-medium text-white"
          >
            {content.cta.label} <span aria-hidden="true" className="ml-3">-&gt;</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

function PortfolioGrid({ page }: { page: SeoPage }) {
  if (page.kind !== "portfolio" && page.kind !== "apps") {
    return null;
  }

  const isDanish = page.lang === "dk";
  const isApps = page.kind === "apps";

  return (
    <section className="mx-auto max-w-7xl px-6 py-12" aria-labelledby="portfolio-projects">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/72">
          {isApps ? (isDanish ? "Produkter og produktretninger" : "Products and product directions") : isDanish ? "Software bygget til reel drift." : "Software built for real-world operations."}
        </p>
        <h2 id="portfolio-projects" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {isApps
            ? isDanish
              ? "Produkter med tydelig status og dokumenterede funktioner."
              : "Products with a clear status and documented capabilities."
            : isDanish
              ? "Udvalgte systemer, produkter og platformmodernisering."
              : "Selected systems, products and platform modernization work."}
        </h2>
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {portfolioProjects.map((project) => (
          <PortfolioCard key={project.name} project={project} lang={page.lang} />
        ))}
      </div>
    </section>
  );
}

function SeoPageView({ page }: { page: SeoPage }) {
  const path = pagePath(page);
  const isDanish = page.lang === "dk";
  const alternates = [
    { hrefLang: "da-DK", href: localUrl(alternateFor(page, "dk")) },
    { hrefLang: "en", href: localUrl(alternateFor(page, "en")) },
    { hrefLang: "x-default", href: localUrl(alternateFor(page, "dk")) },
  ];

  return (
    <div className="min-h-screen text-white">
      <PageMeta title={page.title} description={page.description} path={path} lang={isDanish ? "da-DK" : "en"} alternates={alternates} schema={schemaFor(page)} />
      <div className="noise-overlay" />
      <Header page={page} />

      <main>
        <section className="relative overflow-hidden px-6 py-20 sm:py-28">
          <div className="aurora-mesh aurora-mesh-1" />
          <div className="aurora-mesh aurora-mesh-2" />
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                {page.eyebrow}
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{page.h1}</h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">{page.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  data-event="CTA_CLICK"
                  className="rounded-full border border-cyan-300/25 bg-cyan-300/12 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/18"
                >
                  {page.cta}
                </a>
                <a href={`/${page.lang}/cases/`} className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10">
                  {isDanish ? "Se cases" : "View cases"}
                </a>
              </div>
            </div>
          </div>
        </section>

        <CardGrid page={page} />
        <PortfolioGrid page={page} />

        {page.sections.map((section, index) => (
          <section key={section.title} className="mx-auto max-w-7xl px-6 py-10">
            <article className="rounded-[30px] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-white/42">{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{section.title}</h2>
              <p className="mt-4 max-w-4xl text-sm leading-8 text-white/66">{section.body}</p>
              {section.items ? (
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/72">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </section>
        ))}

        {page.faqs ? (
          <section className="mx-auto max-w-7xl px-6 py-10">
            <h2 className="text-3xl font-semibold tracking-tight">{isDanish ? "Spørgsmål og svar" : "Questions and answers"}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="rounded-[24px] border border-white/10 bg-white/[0.045] p-6">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mx-auto max-w-7xl px-6 py-14">
          <div className="rounded-[30px] border border-cyan-300/14 bg-cyan-300/[0.055] p-7">
            <h2 className="text-2xl font-semibold tracking-tight">{isDanish ? "Relaterede sider" : "Related pages"}</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {page.related.map((link) => (
                <a key={`${link.href}-${link.label}`} href={link.href} className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/78 hover:bg-white/10">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer lang={page.lang} />
    </div>
  );
}

const forYouServices = [
  { id: "personal", price: 1500, en: "Personal Website", dk: "Personligt website", enDescription: "A clean, professional website built around you, your work and your goals.", dkDescription: "Et rent, professionelt website bygget omkring dig, dit arbejde og dine mål.", enItems: ["Personal website", "CV website", "Portfolio", "Creator profile", "Professional profile"], dkItems: ["Personligt website", "CV-website", "Portfolio", "Creator-profil", "Professionel profil"] },
  { id: "freelancer", price: 2500, en: "Freelancer / Small Business Website", dk: "Freelancer- eller mindre virksomhedswebsite", enDescription: "A professional online presence without paying for features you do not need.", dkDescription: "En professionel online tilstedeværelse uden funktioner, du ikke har brug for.", enItems: ["Freelancers", "Consultants", "Independent professionals", "Small local businesses", "Services"], dkItems: ["Freelancere", "Konsulenter", "Selvstændige", "Små lokale virksomheder", "Services"] },
  { id: "custom", price: 3500, en: "Custom Website", dk: "Skræddersyet website", enDescription: "A tailored website designed around your project, brand and functionality.", dkDescription: "Et skræddersyet website omkring dit projekt, brand og funktionalitet.", enItems: ["Multi-page sites", "Custom layouts", "Advanced sections", "Integrations", "Animations", "Forms"], dkItems: ["Websites med flere sider", "Custom layouts", "Avancerede sektioner", "Integrationer", "Animationer", "Formularer"] },
  { id: "tool", price: 4500, en: "Small Web App / Custom Tool", dk: "Mindre webapp eller custom værktøj", enDescription: "Need something more than a website? Build lightweight custom web applications and tools.", dkDescription: "Har du brug for mere end et website? Vi bygger lette webapps og værktøjer.", enItems: ["Calculators", "Booking tools", "Dashboards", "Small management systems", "Automation tools", "Custom workflows"], dkItems: ["Beregner-værktøjer", "Bookingværktøjer", "Dashboards", "Mindre administrationssystemer", "Automatisering", "Custom workflows"] },
  { id: "help", price: 750, en: "Small Changes & Digital Help", dk: "Mindre ændringer og digital hjælp", enDescription: "For customers who already have something and just need help improving or fixing it.", dkDescription: "Til dig, der allerede har noget og bare har brug for hjælp til at forbedre eller rette det.", enItems: ["Landing pages", "Website fixes", "Small integrations", "Forms", "Improvements", "Technical adjustments"], dkItems: ["Landing pages", "Website-rettelser", "Mindre integrationer", "Formularer", "Forbedringer", "Tekniske justeringer"] },
];

function formatStartingPrice(value: number, lang: Language) {
  const amount = new Intl.NumberFormat(lang === "dk" ? "da-DK" : "en-DK").format(value);
  return lang === "dk" ? `Fra ${amount} DKK` : `Starting from ${amount} DKK`;
}

function ForYouPage({ page }: { page: SeoPage }) {
  const isDanish = page.lang === "dk";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [quoteStarted, setQuoteStarted] = useState(false);
  const alternates = [
    { hrefLang: "da-DK", href: localUrl("/dk/for-you") },
    { hrefLang: "en", href: localUrl("/en/for-you") },
    { hrefLang: "x-default", href: localUrl("/dk/for-you") },
  ];

  function focusQuoteForm() {
    if (!quoteStarted) {
      setQuoteStarted(true);
      trackEvent("for_you_quote_start");
    }
  }

  function selectService(service: string) {
    trackEvent("for_you_service_click", { service });
    document.getElementById("for-you-quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    setStatus("submitting");

    try {
      const response = await fetch("/api/for-you-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(fields)),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || result?.ok !== true) throw new Error("Quote request failed");
      trackEvent("for_you_quote_submit", { service: String(fields.get("service") || "other") });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen text-white">
      <PageMeta title={page.title} description={page.description} path={pagePath(page)} lang={isDanish ? "da-DK" : "en"} alternates={alternates} schema={schemaFor(page)} />
      <div className="noise-overlay" />
      <Header page={page} />

      <main>
        <section className="relative overflow-hidden px-6 py-20 sm:py-28">
          <div className="aurora-mesh aurora-mesh-1" />
          <div className="aurora-mesh aurora-mesh-2" />
          <div className="relative mx-auto max-w-7xl">
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">{page.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">{page.h1}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 sm:text-lg">{page.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button type="button" onClick={() => selectService("hero")} className="rounded-full border border-cyan-300/25 bg-cyan-300/12 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/18">
                {isDanish ? "Få et tilbud" : "Get a quote"}
              </button>
              <a href={`mailto:${GENERAL_EMAIL}`} data-event="CTA_CLICK" data-analytics-label="For You contact" className="rounded-full border border-white/12 bg-white/6 px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10">
                {isDanish ? "Kontakt os" : "Contact us"}
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20" aria-labelledby="for-you-services">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/72">{isDanish ? "Til mindre projekter" : "For smaller projects"}</p>
            <h2 id="for-you-services" className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">{isDanish ? "Det rigtige niveau af løsning, uden unødig kompleksitet." : "The right level of solution, without unnecessary complexity."}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {forYouServices.map((service) => (
                <article key={service.id} className="rounded-[28px] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-cyan-300/24">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/72">{formatStartingPrice(service.price, page.lang)}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{isDanish ? service.dk : service.en}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">{isDanish ? service.dkDescription : service.enDescription}</p>
                  <ul className="mt-5 grid gap-2 text-sm text-white/62">
                    {(isDanish ? service.dkItems : service.enItems).map((item) => <li key={item}>- {item}</li>)}
                  </ul>
                  <button type="button" onClick={() => selectService(service.id)} className="mt-6 text-sm font-semibold text-cyan-100 transition hover:text-white">
                    {service.id === "tool" ? (isDanish ? "Fortæl os om din idé" : "Tell us your idea") : service.id === "help" ? (isDanish ? "Kontakt os" : "Contact us") : (isDanish ? "Få et tilbud" : "Get a quote")}
                  </button>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/54">{isDanish ? "Prisen afhænger af dit projekts scope og kompleksitet. Du får altid en klar pris, før arbejdet begynder." : "Pricing depends on the scope and complexity of your project. You will always receive a clear price before any work begins."}</p>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.025] px-6 py-16 sm:py-20" aria-labelledby="for-you-process">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/72">{isDanish ? "Klar proces" : "Clear process"}</p>
            <h2 id="for-you-process" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{isDanish ? "En enkel proces. Ingen overraskelser." : "Simple process. No surprises."}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {(isDanish
                ? [["Fortæl os, hvad du har brug for", "Send en kort beskrivelse af dit projekt."], ["Vi gennemgår det", "Vi ser på scope og anbefaler den enkleste egnede løsning."], ["Du får et klart tilbud", "Du kender prisen, før udviklingen begynder."], ["Vi bygger det", "Når det er godkendt, håndterer UnderStack design, udvikling og levering."]]
                : [["Tell us what you need", "Send a short description of your project."], ["We review it", "We look at the scope and recommend the simplest suitable solution."], ["You receive a clear quote", "You know the price before development begins."], ["We build it", "Once approved, UnderStack handles design, development and delivery."]]
              ).map(([title, body], index) => (
                <article key={title} className="rounded-[24px] border border-white/10 bg-black/15 p-6">
                  <p className="text-xs font-semibold tracking-[0.24em] text-cyan-200/72">0{index + 1}</p>
                  <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="for-you-quote" className="scroll-mt-24 px-6 py-16 sm:py-20" aria-labelledby="for-you-quote-title">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/72">{isDanish ? "Projektforespørgsel" : "Project enquiry"}</p>
              <h2 id="for-you-quote-title" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{isDanish ? "Fortæl os om dit projekt." : "Tell us about your project."}</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-white/62">{isDanish ? "Vi gennemgår din forespørgsel og vender tilbage, så snart vi kan." : "We will review your request and get back to you as soon as possible."}</p>
              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.035] p-6">
                <h3 className="text-lg font-semibold text-white">{isDanish ? "Vil du hellere tale først?" : "Prefer to talk first?"}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{isDanish ? "Intet problem. Skriv til os og fortæl, hvad du har i tankerne." : "No problem. Get in touch and tell us what you have in mind."}</p>
                <a href={`mailto:${GENERAL_EMAIL}`} data-event="CTA_CLICK" data-analytics-label="For You secondary contact" onClick={() => trackEvent("for_you_contact_click")} className="mt-5 inline-flex text-sm font-semibold text-cyan-100 hover:text-white">
                  {isDanish ? "Kontakt UnderStack" : "Contact UnderStack"}
                </a>
              </div>
            </div>

            <form onSubmit={submitQuote} onFocus={focusQuoteForm} className="rounded-[28px] border border-white/10 bg-white/[0.045] p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-white/78">{isDanish ? "Navn" : "Name"}<input required name="name" autoComplete="name" maxLength={120} className="rounded-xl border border-white/12 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50" /></label>
                <label className="grid gap-2 text-sm font-medium text-white/78">Email<input required name="email" type="email" autoComplete="email" maxLength={254} className="rounded-xl border border-white/12 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50" /></label>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-white/78">{isDanish ? "Hvad har du brug for?" : "What do you need?"}<select required name="service" defaultValue="" className="rounded-xl border border-white/12 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"><option value="" disabled>{isDanish ? "Vælg en type" : "Choose a type"}</option><option value="personal-website">{isDanish ? "Personligt website" : "Personal website"}</option><option value="portfolio">Portfolio</option><option value="freelancer-small-business">{isDanish ? "Freelancer eller mindre virksomhedswebsite" : "Freelancer or small business website"}</option><option value="custom-website">{isDanish ? "Skræddersyet website" : "Custom website"}</option><option value="web-app-custom-tool">{isDanish ? "Webapp eller custom værktøj" : "Web app or custom tool"}</option><option value="website-changes">{isDanish ? "Website-ændringer" : "Website changes"}</option><option value="other">{isDanish ? "Andet" : "Other"}</option></select></label>
                <label className="grid gap-2 text-sm font-medium text-white/78">{isDanish ? "Cirka budget" : "Approximate budget"}<select required name="budget" defaultValue="" className="rounded-xl border border-white/12 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50"><option value="" disabled>{isDanish ? "Vælg et budget" : "Choose a budget"}</option><option value="under-2000">{isDanish ? "Under 2.000 DKK" : "Under 2,000 DKK"}</option><option value="2000-5000">2.000-5.000 DKK</option><option value="5000-10000">5.000-10.000 DKK</option><option value="10000-plus">10.000+ DKK</option><option value="not-sure">{isDanish ? "Ikke sikker endnu" : "Not sure"}</option></select></label>
              </div>
              <label className="mt-5 grid gap-2 text-sm font-medium text-white/78">{isDanish ? "Fortæl os om dit projekt" : "Tell us about your project"}<textarea required name="message" rows={7} maxLength={5000} placeholder={isDanish ? "Beskriv kort, hvad du har brug for, hvad du vil opnå og eventuelle vigtige detaljer." : "Briefly describe what you need, what you want to achieve and any important details."} className="resize-y rounded-xl border border-white/12 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-cyan-300/50" /></label>
              <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
              <button type="submit" disabled={status === "submitting"} className="mt-6 rounded-full border border-cyan-300/25 bg-cyan-300/12 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/18 disabled:cursor-not-allowed disabled:opacity-60">{status === "submitting" ? (isDanish ? "Sender..." : "Sending...") : (isDanish ? "Få mit tilbud" : "Get my quote")}</button>
              <div className="mt-4 min-h-6 text-sm" aria-live="polite">{status === "success" && <p className="text-emerald-200">{isDanish ? "Tak - vi har modtaget din forespørgsel. Vi gennemgår dit projekt og vender tilbage så snart som muligt." : "Thanks - we received your request. We will review your project and get back to you as soon as possible."}</p>}{status === "error" && <p className="text-rose-200">{isDanish ? "Din forespørgsel kunne ikke sendes. Prøv igen, eller skriv direkte til info@understack.dk." : "Your request could not be sent. Please try again or email info@understack.dk directly."}</p>}</div>
            </form>
          </div>
        </section>
      </main>
      <Footer lang={page.lang} />
    </div>
  );
}

function ForYouRoute() {
  const params = useParams();
  const lang = isLanguage(params.lang) ? params.lang : "dk";
  const page = findPage(lang, "for-you");
  return page ? <ForYouPage page={page} /> : <Navigate to={`/${lang}/`} replace />;
}

function RoutedPage() {
  const params = useParams();
  const location = useLocation();
  const lang = isLanguage(params.lang) ? params.lang : "dk";
  const slug = params["*"] ?? "";
  const page = findPage(lang, slug);

  if (!page) {
    const fallback = findPage(lang, "");
    return fallback ? <SeoPageView page={{ ...fallback, title: "Page not found | UnderStack", h1: "Page not found.", description: "The requested UnderStack page could not be found." }} /> : null;
  }

  if (location.pathname !== pagePath(page) && !location.pathname.endsWith("/")) {
    return <Navigate to={pagePath(page)} replace />;
  }

  return <SeoPageView page={page} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dk/" replace />} />
      <Route path="/privacy" element={<PocketPrivacyPage />} />
      <Route path="/life/privacy" element={<LifePrivacyPage />} />
      <Route path="/apps" element={<Navigate to="/en/apps" replace />} />
      <Route path="/marketplace" element={<Navigate to="/en/marketplace" replace />} />
      <Route path="/:lang/for-you" element={<ForYouRoute />} />
      <Route path="/:lang/*" element={<RoutedPage />} />
    </Routes>
  );
}
