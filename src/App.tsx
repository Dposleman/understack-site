import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import logo from "./assets/understack-logo.png";
import PageMeta from "./components/PageMeta";
import PocketPrivacyPage from "./pages/PocketPrivacyPage";
import {
  allPages,
  alternateFor,
  COMPANY_CVR,
  CONTACT_EMAIL,
  findPage,
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
    email: CONTACT_EMAIL,
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
        ]
      : [
          ["Web development", "/en/web-development"],
          ["Software development", "/en/software-development"],
          ["AI development", "/en/ai-development"],
          ["Restaurant software", "/en/restaurant-software"],
          ["Portfolio", "/en/portfolio"],
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
          <a href={`mailto:${CONTACT_EMAIL}`} data-event="EMAIL_CLICK" className="mt-4 block text-sm text-cyan-100 hover:text-white">
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
    <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/64 p-6 shadow-2xl shadow-black/18 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/34 hover:bg-slate-950/76">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(34,211,238,0.16),transparent_34%),linear-gradient(135deg,rgba(59,130,246,0.08),rgba(99,102,241,0.04)_48%,rgba(14,165,233,0.1))] opacity-80 transition duration-300 group-hover:opacity-100" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/78">{content.category}</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.name}</h2>
        <p className="mt-4 text-sm leading-7 text-white/66">{content.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {content.status ? <span className="rounded-full border border-cyan-300/18 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">{content.status}</span> : null}
          {content.location ? <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/64">{content.location}</span> : null}
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {content.capabilities.map((capability) => (
            <li key={capability} className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm leading-6 text-white/72">
              {capability}
            </li>
          ))}
        </ul>

        {content.cta ? (
          <a
            href={content.cta.href}
            className="mt-7 inline-flex min-h-11 items-center rounded-full border border-cyan-300/24 bg-cyan-300/12 px-5 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/18"
          >
            {content.cta.label} <span aria-hidden="true" className="ml-2">-&gt;</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

function PortfolioGrid({ page }: { page: SeoPage }) {
  if (page.kind !== "portfolio") {
    return null;
  }

  const isDanish = page.lang === "dk";

  return (
    <section className="mx-auto max-w-7xl px-6 py-12" aria-labelledby="portfolio-projects">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/72">{isDanish ? "Software bygget til reel drift." : "Software built for real-world operations."}</p>
        <h2 id="portfolio-projects" className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {isDanish ? "Udvalgte systemer, produkter og platformmodernisering." : "Selected systems, products and platform modernization work."}
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
      <div className="grid-overlay" />
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
      <Route path="/apps" element={<Navigate to="/en/apps" replace />} />
      <Route path="/marketplace" element={<Navigate to="/en/marketplace" replace />} />
      <Route path="/:lang/*" element={<RoutedPage />} />
    </Routes>
  );
}
