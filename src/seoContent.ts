export const SITE_URL = "https://understack.dk";
export const CONTACT_EMAIL = "info@understack.dk";
export const COMPANY_CVR = "46327608";
export const GASTROAPP_URL = "https://gastroapp.dk";
export const SOCIAL_IMAGE_PATH = "/understack-social-preview.png";
export const SOCIAL_IMAGE_URL = `${SITE_URL}${SOCIAL_IMAGE_PATH}`;

export type Language = "dk" | "en";
export type PageKind = "home" | "service" | "case" | "caseIndex" | "portfolio" | "insight" | "insightIndex" | "apps" | "marketplace";

export type SeoPage = {
  lang: Language;
  slug: string;
  kind: PageKind;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  intro: string;
  sections: { title: string; body: string; items?: string[] }[];
  faqs?: { question: string; answer: string }[];
  related: { label: string; href: string }[];
  cta: string;
  keywords: string[];
};

export type PortfolioProject = {
  name: string;
  category: string;
  description: string;
  capabilities: string[];
  status?: string;
  location?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export const languageNames: Record<Language, string> = {
  dk: "Dansk",
  en: "English",
};

export const futureLanguages = ["/de/", "/se/", "/no/", "/nl/"];

export function pagePath(page: SeoPage) {
  if (page.slug === "") {
    return `/${page.lang}/`;
  }

  return `/${page.lang}/${page.slug}`;
}

const dkServiceSections = {
  process: {
    title: "Sådan arbejder vi",
    body:
      "Vi starter med forretningsmål, brugere og arbejdsgange, før vi designer løsningen. Derefter bygger vi i korte, synlige iterationer med fokus på performance, struktur, sikkerhed og enkel drift.",
    items: ["Strategi og scope", "UX og teknisk arkitektur", "Frontend, backend og integrationer", "QA, launch og løbende forbedring"],
  },
  stack: {
    title: "Teknologi og leverance",
    body:
      "UnderStack bygger moderne webplatforme og softwareprodukter med React, TypeScript, Node.js, API-integrationer og cloud-ready arkitektur. Stacken vælges efter løsningens krav, ikke efter mode.",
  },
};

const enServiceSections = {
  process: {
    title: "How we work",
    body:
      "We define business goals, users and operational workflows before implementation. Delivery runs in focused iterations with clear architecture, strong UX, maintainable code and launch-ready quality.",
    items: ["Strategy and scope", "UX and technical architecture", "Frontend, backend and integrations", "QA, launch and improvement"],
  },
  stack: {
    title: "Technology and delivery",
    body:
      "UnderStack builds modern web platforms and software systems with React, TypeScript, Node.js, API integrations and cloud-ready architecture. The stack is selected for the business problem, not for trend value.",
  },
};

export const pages: SeoPage[] = [
  {
    lang: "dk",
    slug: "",
    kind: "home",
    title: "UnderStack | Softwareudvikling og webudvikling i Aarhus",
    description:
      "UnderStack er et softwarefirma i Aarhus, der bygger premium websites, custom software, AI-løsninger og digitale produkter for virksomheder i Danmark og Europa.",
    h1: "Softwareudvikling og webudvikling i Aarhus for virksomheder, der vil bygge rigtigt.",
    eyebrow: "Software company in Aarhus",
    intro:
      "UnderStack bygger premium software systemer, moderne webplatforme og digitale produkter for virksomheder, der har brug for mere end en standard hjemmeside.",
    sections: [
      {
        title: "Hvad UnderStack bygger",
        body:
          "Vi hjælper virksomheder med webudvikling, softwareudvikling, app-udvikling, AI-løsninger og restaurant software. Fokus er klare produkter, høj teknisk kvalitet og løsninger, som kan bruges aktivt i salg, drift og vækst.",
        items: ["Websites og webplatforme", "Custom business software", "AI-assisterede arbejdsgange", "Restaurant- og hospitality software"],
      },
      {
        title: "Aarhus først, Danmark næste",
        body:
          "UnderStack er positioneret omkring Aarhus og Danmark, men bygger løsninger med europæisk standard for virksomheder, der ønsker en seriøs digital platform uden klassisk bureau-overhead.",
      },
    ],
    related: [
      { label: "Webudvikling Aarhus", href: "/dk/webudvikling-aarhus" },
      { label: "Softwareudvikling Aarhus", href: "/dk/softwareudvikling-aarhus" },
      { label: "Restaurant software", href: "/dk/restaurant-software" },
    ],
    cta: "Book en samtale",
    keywords: ["softwareudvikling Aarhus", "webudvikling Aarhus", "software company Aarhus"],
  },
  {
    lang: "en",
    slug: "",
    kind: "home",
    title: "UnderStack | Software company in Aarhus, Denmark",
    description:
      "UnderStack is a software company based in Aarhus, Denmark, building premium software systems, digital products and modern web platforms for companies in Denmark and Europe.",
    h1: "Premium software systems, web platforms and digital products from Aarhus, Denmark.",
    eyebrow: "Software company in Denmark",
    intro:
      "UnderStack builds custom software, modern web platforms, AI-enabled workflows and restaurant technology for companies that need commercially useful digital products.",
    sections: [
      {
        title: "What we build",
        body:
          "We build web platforms, internal systems, business software, app products and AI-assisted workflows. The work is aimed at practical value: better operations, stronger credibility and conversion-ready digital infrastructure.",
        items: ["Custom software", "Web development", "App development", "AI solutions", "Restaurant software"],
      },
      {
        title: "Built in Aarhus for Denmark and Europe",
        body:
          "UnderStack is based in Aarhus and serves companies in Denmark and Europe that need a more precise alternative to generic agency delivery.",
      },
    ],
    related: [
      { label: "Web development", href: "/en/web-development" },
      { label: "Software development", href: "/en/software-development" },
      { label: "Restaurant software", href: "/en/restaurant-software" },
    ],
    cta: "Discuss your project",
    keywords: ["software company Aarhus", "web development Denmark", "custom software Denmark"],
  },
];

const dkServices: Omit<SeoPage, "lang" | "kind">[] = [
  {
    slug: "webudvikling-aarhus",
    title: "Webudvikling Aarhus | Premium hjemmesider og webplatforme",
    description:
      "Webudvikling i Aarhus for virksomheder, der har brug for en hurtig, professionel og konverterende hjemmeside eller webplatform.",
    h1: "Webudvikling i Aarhus for virksomheder med seriøse digitale ambitioner.",
    eyebrow: "Webudvikling Aarhus",
    intro:
      "UnderStack hjælper virksomheder i Aarhus med hjemmesider, webplatforme og digitale oplevelser, der både ser premium ud og fungerer teknisk stærkt.",
    sections: [
      { title: "Problemet vi løser", body: "Mange virksomheder har websites, der ser pæne ud, men ikke forklarer tydeligt, hvad virksomheden leverer, hvem den hjælper, eller hvordan man tager næste skridt. Vi bygger struktur, performance og konvertering ind fra starten." },
      dkServiceSections.process,
      dkServiceSections.stack,
    ],
    faqs: [
      { question: "Hvad koster webudvikling i Aarhus?", answer: "Prisen afhænger af antal sider, designniveau, integrationer og indhold. UnderStack arbejder med klare scopes og kan give et tilbud efter en kort afklaring." },
      { question: "Bygger I kun hjemmesider i Aarhus?", answer: "Nej. Aarhus er et primært lokalt marked, men UnderStack arbejder også med virksomheder i resten af Danmark og Europa." },
    ],
    related: [
      { label: "Webudvikling Danmark", href: "/dk/webudvikling" },
      { label: "Hvad koster en hjemmeside?", href: "/dk/insights/hvad-koster-en-hjemmeside-i-danmark" },
      { label: "Custom software", href: "/dk/custom-software" },
    ],
    cta: "Få et tilbud",
    keywords: ["webudvikling Aarhus", "hjemmeside virksomhed Aarhus", "website Aarhus"],
  },
  {
    slug: "webudvikling",
    title: "Webudvikling Danmark | Moderne websites og webplatforme",
    description: "Webudvikling i Danmark med fokus på performance, SEO, UX og konvertering for virksomheder.",
    h1: "Webudvikling i Danmark med teknisk kvalitet og kommerciel retning.",
    eyebrow: "Webudvikling Danmark",
    intro: "UnderStack bygger websites og webplatforme, der gør det nemt for kunder at forstå, stole på og kontakte din virksomhed.",
    sections: [
      { title: "Mere end en digital brochure", body: "Et godt website skal positionere virksomheden, skabe tillid, forklare ydelsen og kunne findes i Google på relevante søgninger. Derfor kombinerer vi udvikling, indhold, teknisk SEO og conversion structure." },
      dkServiceSections.process,
      dkServiceSections.stack,
    ],
    related: [
      { label: "Webudvikling Aarhus", href: "/dk/webudvikling-aarhus" },
      { label: "Webshop udvikling", href: "/dk/webshop-udvikling" },
      { label: "Business website pris", href: "/dk/insights/hvad-koster-en-hjemmeside-i-danmark" },
    ],
    cta: "Start et webprojekt",
    keywords: ["webudvikling Danmark", "hjemmeside virksomhed", "web development Denmark"],
  },
  {
    slug: "softwareudvikling-aarhus",
    title: "Softwareudvikling Aarhus | Custom software for virksomheder",
    description: "Softwareudvikling i Aarhus for virksomheder, der har brug for interne systemer, platforme og specialudviklet software.",
    h1: "Softwareudvikling i Aarhus til drift, vækst og digitale produkter.",
    eyebrow: "Softwareudvikling Aarhus",
    intro: "UnderStack bygger specialudviklet software for virksomheder, hvor standardværktøjer ikke længere er nok.",
    sections: [
      { title: "Når standard SaaS ikke passer", body: "Vi udvikler systemer til arbejdsgange, data, dashboards, integrationer og produktidéer, hvor virksomheden har brug for kontrol, fleksibilitet og en bedre brugeroplevelse." },
      dkServiceSections.process,
      dkServiceSections.stack,
    ],
    related: [
      { label: "Softwareudvikling Danmark", href: "/dk/softwareudvikling" },
      { label: "Custom software", href: "/dk/custom-software" },
      { label: "AI-løsninger", href: "/dk/ai-loesninger" },
    ],
    cta: "Book en samtale",
    keywords: ["softwareudvikling Aarhus", "custom software Aarhus", "software company Aarhus"],
  },
  {
    slug: "softwareudvikling",
    title: "Softwareudvikling Danmark | Specialudviklede systemer",
    description: "Specialudviklet software i Danmark: interne systemer, webapps, integrationer og digitale produkter.",
    h1: "Softwareudvikling i Danmark for virksomheder med komplekse arbejdsgange.",
    eyebrow: "Softwareudvikling Danmark",
    intro: "UnderStack udvikler software, der understøtter drift, salg, data og produktudvikling uden unødvendig kompleksitet.",
    sections: [
      { title: "Hvad vi bygger", body: "Vi bygger webapps, dashboards, API-lag, integrationsflows, SaaS-produkter og interne værktøjer. Målet er software, der passer præcist til virksomhedens måde at arbejde på." },
      dkServiceSections.process,
      dkServiceSections.stack,
    ],
    related: [
      { label: "Softwareudvikling Aarhus", href: "/dk/softwareudvikling-aarhus" },
      { label: "Hvad koster softwareudvikling?", href: "/dk/insights/hvad-koster-softwareudvikling-i-danmark" },
      { label: "Custom software", href: "/dk/custom-software" },
    ],
    cta: "Diskuter din løsning",
    keywords: ["softwareudvikling Danmark", "custom software Denmark", "software development Denmark"],
  },
  {
    slug: "app-udvikling",
    title: "App udvikling Danmark | Webapps og mobile produkter",
    description: "App udvikling i Danmark for virksomheder, der vil bygge digitale produkter, interne apps eller kundevendte løsninger.",
    h1: "App udvikling i Danmark med fokus på produkt, drift og skalering.",
    eyebrow: "App udvikling",
    intro: "UnderStack hjælper med at omsætte app-idéer til brugbare produkter med stærk UX, teknisk struktur og realistisk scope.",
    sections: [
      { title: "Fra idé til brugbar app", body: "Vi hjælper med product scope, prototyper, brugerflows, frontend, backend og lancering. For mange virksomheder starter den rigtige løsning som en webapp, før native mobiludvikling giver mening." },
      dkServiceSections.process,
      dkServiceSections.stack,
    ],
    related: [
      { label: "Hvad koster en app?", href: "/dk/insights/hvad-koster-en-app-at-udvikle" },
      { label: "Custom software", href: "/dk/custom-software" },
      { label: "AI-løsninger", href: "/dk/ai-loesninger" },
    ],
    cta: "Start en app-dialog",
    keywords: ["app udvikling Danmark", "app udvikling", "webapp udvikling"],
  },
  {
    slug: "ai-loesninger",
    title: "AI løsninger til virksomheder | UnderStack Danmark",
    description: "AI-løsninger til virksomheder: automatisering, interne assistenter, workflows og software med praktisk forretningsværdi.",
    h1: "AI-løsninger til danske virksomheder, der skal bruges i praksis.",
    eyebrow: "AI løsninger virksomheder",
    intro: "UnderStack bygger AI-assisterede workflows, interne værktøjer og produktfunktioner, hvor AI løser konkrete opgaver i stedet for at være pynt.",
    sections: [
      { title: "AI med driftsværdi", body: "Vi fokuserer på opgaver som automatisering, beslutningsstøtte, strukturering af data, intern assistance, restaurantdrift og kundevendte flows, hvor AI kan reducere friktion." },
      dkServiceSections.process,
      dkServiceSections.stack,
    ],
    related: [
      { label: "AI til danske virksomheder", href: "/dk/insights/ai-loesninger-til-danske-virksomheder" },
      { label: "ServiceOS case", href: "/dk/cases/serviceos" },
      { label: "Restaurant software", href: "/dk/restaurant-software" },
    ],
    cta: "Book en AI-samtale",
    keywords: ["AI løsninger virksomheder", "AI software Danmark", "AI restaurant software"],
  },
  {
    slug: "restaurant-software",
    title: "Restaurant software Danmark | Drift, køkken og AI",
    description: "Restaurant software i Danmark til køkkenstyring, food cost, inventory, drift og AI-understøttede restaurant workflows.",
    h1: "Restaurant software til moderne restauranter, køkkener og hospitality teams.",
    eyebrow: "Restaurant software Denmark",
    intro: "UnderStack bygger og dokumenterer software til restaurantdrift: fra food cost og waste tracking til AI-assisteret service og køkkenstyring.",
    sections: [
      { title: "Hvad restaurant software skal løse", body: "Restauranter har brug for bedre overblik over vareforbrug, priser, spild, serviceflow og daglig drift. Software skal passe til køkkenets tempo og give bedre beslutninger uden at skabe ekstra administration." },
      { title: "GastroApp som produktretning", body: "GastroApp er UnderStacks restaurant software-retning med fokus på food cost, opskrifter, inventory og operationelle værktøjer. Derudover udvikles ServiceOS som AI-first service operating system." },
      dkServiceSections.stack,
    ],
    faqs: [
      { question: "Bygger UnderStack restaurant management software?", answer: "Ja, UnderStack arbejder med restaurant utility apps, GastroApp og ServiceOS-relaterede koncepter. Vi opfinder ikke resultater eller kundedata, men produktretningen er dokumenteret i sitet." },
      { question: "Kan løsningerne tilpasses en restaurant?", answer: "Ja. Custom restaurant software kan bygges omkring konkrete workflows som food cost, waste tracking, service, inventory eller rapportering." },
    ],
    related: [
      { label: "GastroApp case", href: "/dk/cases/gastroapp" },
      { label: "Restaurant software artikel", href: "/dk/insights/restaurant-software-i-danmark" },
      { label: "AI restaurantdrift", href: "/dk/insights/hvordan-automatiserer-ai-restaurantdrift" },
    ],
    cta: "Se restaurant-løsninger",
    keywords: ["restaurant software Denmark", "kitchen management software", "restaurant inventory management", "food cost management"],
  },
  {
    slug: "custom-software",
    title: "Custom software Danmark | Specialudviklede business systems",
    description: "Custom software til virksomheder i Danmark og Europa: interne systemer, dashboards, integrationer og digitale produkter.",
    h1: "Custom software, når virksomheden har brug for mere end standardværktøjer.",
    eyebrow: "Custom software Denmark",
    intro: "UnderStack designer og udvikler custom business software til arbejdsgange, data, integrationer og digitale produkter.",
    sections: [
      { title: "For virksomheder med særlige processer", body: "Custom software giver mening, når man bruger for mange manuelle processer, spreadsheets eller standardværktøjer, der ikke passer til driften." },
      dkServiceSections.process,
      dkServiceSections.stack,
    ],
    related: [
      { label: "Softwareudvikling", href: "/dk/softwareudvikling" },
      { label: "Custom software vs SaaS", href: "/en/insights/custom-software-vs-saas" },
      { label: "ServiceOS", href: "/dk/cases/serviceos" },
    ],
    cta: "Diskuter custom software",
    keywords: ["custom software Denmark", "custom business software Europe", "specialudviklet software"],
  },
  {
    slug: "webshop-udvikling",
    title: "Webshop udvikling Danmark | Moderne commerce platforme",
    description: "Webshop udvikling for virksomheder, der har brug for en hurtig, troværdig og skalerbar online salgsplatform.",
    h1: "Webshop udvikling med fokus på performance, UX og købsklar trafik.",
    eyebrow: "Webshop udvikling",
    intro: "UnderStack kan bygge commerce-orienterede weboplevelser og produktplatforme med stærk frontend, tydelig struktur og teknisk SEO.",
    sections: [
      { title: "Commerce uden unødvendig kompleksitet", body: "En webshop skal gøre produkter lette at forstå, finde og købe. Vi fokuserer på informationsarkitektur, hastighed, trackingstruktur og teknisk fundament før avancerede features." },
      dkServiceSections.process,
      dkServiceSections.stack,
    ],
    related: [
      { label: "Webudvikling", href: "/dk/webudvikling" },
      { label: "Custom software", href: "/dk/custom-software" },
      { label: "Website pris", href: "/dk/insights/hvad-koster-en-hjemmeside-i-danmark" },
    ],
    cta: "Planlæg webshop",
    keywords: ["webshop udvikling Danmark", "ecommerce development Denmark", "webshop udvikling"],
  },
];

const enServices: Omit<SeoPage, "lang" | "kind">[] = [
  {
    slug: "web-development",
    title: "Web development Denmark | Premium web platforms",
    description: "Modern web development in Denmark for companies that need fast, credible and conversion-focused websites and platforms.",
    h1: "Web development in Denmark for companies that need more than a generic website.",
    eyebrow: "Web development Denmark",
    intro: "UnderStack builds premium websites and web platforms that combine technical quality, strong UX and commercial clarity.",
    sections: [
      { title: "What we solve", body: "Many business websites look acceptable but fail to explain the offer, build trust or convert qualified visitors. We build clear structure, performance, SEO foundations and conversion paths into the platform." },
      enServiceSections.process,
      enServiceSections.stack,
    ],
    related: [
      { label: "Business website cost", href: "/en/insights/how-much-does-a-business-website-cost-in-denmark" },
      { label: "Software development", href: "/en/software-development" },
      { label: "Custom software", href: "/en/custom-software" },
    ],
    cta: "Start a project",
    keywords: ["web development Denmark", "web development Aarhus", "business website Denmark"],
  },
  {
    slug: "software-development",
    title: "Software development Denmark | UnderStack",
    description: "Software development in Denmark for custom business systems, internal tools, platforms and digital products.",
    h1: "Software development in Denmark for companies with serious operational needs.",
    eyebrow: "Software development Denmark",
    intro: "UnderStack builds custom software systems, internal tools, platforms and digital products for companies in Denmark and Europe.",
    sections: [
      { title: "Built around real workflows", body: "We build dashboards, internal systems, API layers, integrations, SaaS products and web apps for teams that need software aligned with how they actually work." },
      enServiceSections.process,
      enServiceSections.stack,
    ],
    related: [
      { label: "Custom software", href: "/en/custom-software" },
      { label: "Software development cost", href: "/en/insights/how-much-does-software-development-cost-in-denmark" },
      { label: "Cases", href: "/en/cases/" },
    ],
    cta: "Discuss your project",
    keywords: ["software development Denmark", "software company Aarhus", "custom software Europe"],
  },
  {
    slug: "custom-software",
    title: "Custom software Denmark and Europe | UnderStack",
    description: "Custom business software for companies in Denmark and Europe: platforms, tools, integrations and scalable systems.",
    h1: "Custom software for companies that have outgrown standard tools.",
    eyebrow: "Custom software Denmark",
    intro: "UnderStack builds custom business software for workflows, integrations, data, internal operations and product ideas.",
    sections: [
      { title: "When SaaS is not enough", body: "Custom software makes sense when teams rely on manual processes, disconnected tools or workflows that off-the-shelf software cannot support cleanly." },
      enServiceSections.process,
      enServiceSections.stack,
    ],
    related: [
      { label: "Custom software vs SaaS", href: "/en/insights/custom-software-vs-saas" },
      { label: "Software development", href: "/en/software-development" },
      { label: "ServiceOS", href: "/en/cases/serviceos" },
    ],
    cta: "Plan your system",
    keywords: ["custom software Denmark", "custom business software Europe", "software company Denmark"],
  },
  {
    slug: "app-development",
    title: "App development Denmark | Web apps and digital products",
    description: "App development in Denmark for companies building web apps, internal tools, mobile products and digital services.",
    h1: "App development in Denmark with product thinking and technical discipline.",
    eyebrow: "App development Denmark",
    intro: "UnderStack helps turn app ideas into useful digital products with clear scope, strong UX and maintainable architecture.",
    sections: [
      { title: "From concept to usable product", body: "We help with product scope, prototypes, user flows, frontend, backend and launch. For many companies, a web app is the right first product before native mobile development." },
      enServiceSections.process,
      enServiceSections.stack,
    ],
    related: [
      { label: "App cost guide", href: "/dk/insights/hvad-koster-en-app-at-udvikle" },
      { label: "AI development", href: "/en/ai-development" },
      { label: "Cases", href: "/en/cases/" },
    ],
    cta: "Discuss your app",
    keywords: ["app development Denmark", "web app development Denmark", "digital product Denmark"],
  },
  {
    slug: "ai-development",
    title: "AI development for companies | Denmark and Europe",
    description: "AI development for companies: automation, internal assistants, workflows and AI-enabled software systems.",
    h1: "AI development for companies that need practical automation, not hype.",
    eyebrow: "AI solutions for business",
    intro: "UnderStack builds AI-assisted workflows, internal tools and product features where AI solves concrete operational tasks.",
    sections: [
      { title: "AI with business value", body: "We focus on automation, decision support, data structuring, internal assistants, restaurant operations and customer-facing workflows where AI can reduce friction." },
      enServiceSections.process,
      enServiceSections.stack,
    ],
    related: [
      { label: "AI automation article", href: "/en/insights/ai-automation-for-european-businesses" },
      { label: "ServiceOS", href: "/en/cases/serviceos" },
      { label: "Restaurant software", href: "/en/restaurant-software" },
    ],
    cta: "Plan an AI workflow",
    keywords: ["AI solutions companies", "AI development Denmark", "AI automation Europe"],
  },
  {
    slug: "restaurant-software",
    title: "Restaurant software Denmark | Kitchen and AI operations",
    description: "Restaurant software for Denmark and Europe: food cost, inventory, kitchen management, operations and AI-assisted restaurant workflows.",
    h1: "Restaurant software for modern kitchens, operators and hospitality teams.",
    eyebrow: "Restaurant software Denmark",
    intro: "UnderStack builds restaurant software concepts and products around food cost, waste tracking, inventory, kitchen workflows and AI-assisted service.",
    sections: [
      { title: "Operational problems we address", body: "Restaurants need better visibility into food cost, waste, pricing, inventory, service flow and day-to-day execution. Software should support the pace of the kitchen instead of adding admin load." },
      { title: "GastroApp and ServiceOS", body: "GastroApp is UnderStack's restaurant software direction for food cost, recipes, inventory and utility workflows. ServiceOS explores AI-first front-of-house operations." },
      enServiceSections.stack,
    ],
    related: [
      { label: "GastroApp case", href: "/en/cases/gastroapp" },
      { label: "Restaurant software guide", href: "/en/insights/restaurant-management-software-in-denmark" },
      { label: "AI restaurant operations", href: "/dk/insights/hvordan-automatiserer-ai-restaurantdrift" },
    ],
    cta: "Explore restaurant solutions",
    keywords: ["restaurant software Denmark", "restaurant management software Denmark", "kitchen management software", "AI restaurant software"],
  },
];

export const servicePages: SeoPage[] = [
  ...dkServices.map((page) => ({ ...page, lang: "dk" as const, kind: "service" as const })),
  ...enServices.map((page) => ({ ...page, lang: "en" as const, kind: "service" as const })),
];

export const casePages: SeoPage[] = [
  {
    lang: "dk",
    slug: "cases",
    kind: "caseIndex",
    title: "Cases | UnderStack produkter og softwareprojekter",
    description: "UnderStack cases: GastroApp, AI Schedule, ServiceOS og dokumenterede softwareprodukter uden opdigtede resultater.",
    h1: "Cases og produktretninger fra UnderStack.",
    eyebrow: "Cases",
    intro: "En oversigt over faktiske projekter og produktretninger dokumenteret i UnderStack-repoet.",
    sections: [
      { title: "Dokumenterede produkter", body: "Vi bruger cases som SEO- og tillidsaktiver, men uden at opfinde kunder, metrics eller testimonials." },
    ],
    related: [
      { label: "GastroApp", href: "/dk/cases/gastroapp" },
      { label: "AI Schedule", href: "/dk/cases/ai-schedule" },
      { label: "ServiceOS", href: "/dk/cases/serviceos" },
    ],
    cta: "Se relevante løsninger",
    keywords: ["UnderStack cases", "software cases Danmark"],
  },
  {
    lang: "en",
    slug: "cases",
    kind: "caseIndex",
    title: "Cases | UnderStack software products",
    description: "UnderStack cases: GastroApp, AI Schedule, ServiceOS and documented software product directions.",
    h1: "Cases and product directions from UnderStack.",
    eyebrow: "Cases",
    intro: "A transparent view of real projects and product directions documented in the UnderStack repository.",
    sections: [
      { title: "Documented products", body: "Cases are used as SEO and trust assets, without inventing customers, metrics, testimonials or commercial outcomes." },
    ],
    related: [
      { label: "GastroApp", href: "/en/cases/gastroapp" },
      { label: "AI Schedule", href: "/en/cases/ai-schedule" },
      { label: "ServiceOS", href: "/en/cases/serviceos" },
    ],
    cta: "Explore related services",
    keywords: ["software cases Denmark", "UnderStack products"],
  },
];

const caseDetails = [
  {
    slug: "gastroapp",
    name: "GastroApp",
    dk: "Restaurant software-retning for food cost, opskrifter, inventory og køkkenstyring.",
    en: "Restaurant software direction for food cost, recipes, inventory and kitchen management.",
    serviceDk: "/dk/restaurant-software",
    serviceEn: "/en/restaurant-software",
    keywords: ["restaurant software Denmark", "food cost management", "kitchen management software"],
  },
  {
    slug: "ai-schedule",
    name: "AI Schedule",
    dk: "AI-orienteret planlægningsprodukt fundet som eksisterende projektmappe på maskinen.",
    en: "AI-oriented scheduling product found as an existing project directory on this machine.",
    serviceDk: "/dk/ai-loesninger",
    serviceEn: "/en/ai-development",
    keywords: ["AI scheduling software", "AI automation", "business scheduling software"],
  },
  {
    slug: "serviceos",
    name: "ServiceOS",
    dk: "AI-native service operating system under udvikling til waitstaff, serviceflow og floor intelligence.",
    en: "AI-native service operating system in development for waitstaff, service flow and floor intelligence.",
    serviceDk: "/dk/ai-loesninger",
    serviceEn: "/en/ai-development",
    keywords: ["AI restaurant software", "service operations software", "hospitality AI"],
  },
];

caseDetails.forEach((item) => {
  casePages.push(
    {
      lang: "dk",
      slug: `cases/${item.slug}`,
      kind: "case",
      title: `${item.name} case | UnderStack`,
      description: `${item.name}: ${item.dk}`,
      h1: `${item.name}: problem, løsning, arkitektur og forretningsværdi.`,
      eyebrow: "Case study",
      intro: item.dk,
      sections: [
        { title: "Problem", body: "Projektet adresserer konkrete operationelle workflows, hvor manuelle processer eller generiske værktøjer skaber friktion." },
        { title: "Solution", body: "UnderStack arbejder med en produktorienteret løsning, hvor funktionalitet, UX og teknisk arkitektur kobles til praktisk brug." },
        { title: "Architecture", body: "Arkitekturen er web- og cloud-orienteret med fokus på komponentbaseret frontend, strukturerede dataflows og mulighed for integrationer." },
        { title: "Features", body: "Funktioner dokumenteres kun, hvor de er nævnt i projektet eller produktretningen.", items: item.slug === "gastroapp" ? ["Food cost", "Recipes", "Inventory", "Kitchen operations"] : ["Workflow support", "AI-assisted operations", "Dashboards or operational UI"] },
        { title: "Business value", body: "Værdien ligger i bedre overblik, mindre manuelt arbejde og et produkt, der kan udvikles videre uden at låse virksomheden til generiske værktøjer." },
      ],
      related: [
        { label: "Relevant service", href: item.serviceDk },
        { label: "Alle cases", href: "/dk/cases/" },
        { label: "Kontakt", href: "mailto:info@understack.dk" },
      ],
      cta: "Diskuter en lignende løsning",
      keywords: item.keywords,
    },
    {
      lang: "en",
      slug: `cases/${item.slug}`,
      kind: "case",
      title: `${item.name} case | UnderStack`,
      description: `${item.name}: ${item.en}`,
      h1: `${item.name}: problem, solution, architecture and business value.`,
      eyebrow: "Case study",
      intro: item.en,
      sections: [
        { title: "Problem", body: "The product direction addresses operational workflows where manual processes or generic tools create friction." },
        { title: "Solution", body: "UnderStack approaches the solution as a product, connecting functionality, UX and technical architecture to practical use." },
        { title: "Architecture", body: "The architecture is web and cloud oriented, with component-based frontend delivery, structured data flows and room for integrations." },
        { title: "Features", body: "Features are documented only where they are present in the project or product direction.", items: item.slug === "gastroapp" ? ["Food cost", "Recipes", "Inventory", "Kitchen operations"] : ["Workflow support", "AI-assisted operations", "Dashboards or operational UI"] },
        { title: "Business value", body: "The value is better visibility, less manual work and a product foundation that can evolve without forcing the company into generic tools." },
      ],
      related: [
        { label: "Related service", href: item.serviceEn },
        { label: "All cases", href: "/en/cases/" },
        { label: "Contact", href: "mailto:info@understack.dk" },
      ],
      cta: "Discuss a similar system",
      keywords: item.keywords,
    },
  );
});

export const portfolioProjects: PortfolioProject[] = [
  {
    name: "GastroApp",
    category: "Restaurant Operations SaaS",
    description:
      "A full restaurant operations platform developed by UnderStack to centralize recipes, food costing, inventory, production and multi-restaurant workflows.",
    capabilities: ["Recipes & food costing", "Inventory and stock management", "Production and events", "Tasks and reports", "Kitchen operations"],
    cta: { label: "Visit GastroApp", href: GASTROAPP_URL },
  },
  {
    name: "AI Schedule",
    category: "Intelligent Workforce Management",
    description:
      "An intelligent staff planning platform for restaurants and shift-based companies, focused on reducing admin time, planning errors and coverage issues.",
    capabilities: ["Employee scheduling", "Availability and vacation management", "Automated shift generation", "Sick-leave replacement", "Location-aware shift controls"],
    status: "Product currently in development",
  },
  {
    name: "Peritar - ASEPCO",
    category: "Business Platform Modernization",
    description:
      "A professional platform used in the context of expert assessment workflows for ASEPCO in Mendoza, Argentina, now undergoing a major technical modernization by UnderStack.",
    capabilities: ["Legacy PHP -> TypeScript modernization", "Frontend and backend modernization", "UI/UX modernization", "Maintainable code structure", "Scalable architecture preparation"],
    status: "Platform modernization in progress",
    location: "Mendoza, Argentina",
  },
  {
    name: "Service OS",
    category: "Service Business Management SaaS",
    description:
      "An operating system for service businesses, turning customers, jobs, employees, scheduling, documents and internal workflows into one operational workspace.",
    capabilities: ["Customers and service orders", "Employees and scheduling", "Tasks and documents", "Operational workflows", "Business overview"],
    status: "UnderStack product in development",
  },
  {
    name: "AI Visual Studio",
    category: "AI Creative Platform",
    description:
      "An AI-powered creative platform for transforming, editing and animating visual content through advanced generative models.",
    capabilities: ["Image-to-image workflows", "Image-to-video generation", "Creative editing workflows", "Multi-model architecture", "Personal media library"],
    status: "UnderStack product in development",
  },
];

export const portfolioPages: SeoPage[] = [
  {
    lang: "dk",
    slug: "portfolio",
    kind: "portfolio",
    title: "Portfolio | UnderStack software systems and SaaS products",
    description:
      "Selected UnderStack work across SaaS development, custom software, AI solutions, restaurant software and business platform modernization in Denmark and beyond.",
    h1: "Selected Work",
    eyebrow: "Portfolio",
    intro:
      "From SaaS products to business-critical platform modernization, we design and build software focused on solving real operational problems.",
    sections: [
      {
        title: "Software built for real-world operations.",
        body:
          "UnderStack designs, develops and modernizes full software systems: SaaS products, custom business platforms, AI solutions, restaurant operations software and internal management tools.",
      },
    ],
    related: [
      { label: "Software development", href: "/en/software-development" },
      { label: "Restaurant software", href: "/en/restaurant-software" },
      { label: "Contact", href: "mailto:info@understack.dk" },
    ],
    cta: "Discuss your project",
    keywords: ["software development Denmark", "software development Aarhus", "SaaS development", "custom software development", "AI solutions", "restaurant software", "business software"],
  },
  {
    lang: "en",
    slug: "portfolio",
    kind: "portfolio",
    title: "Portfolio | UnderStack software systems and SaaS products",
    description:
      "Selected UnderStack work across SaaS development, custom software, AI solutions, restaurant software and business platform modernization in Denmark and beyond.",
    h1: "Selected Work",
    eyebrow: "Portfolio",
    intro:
      "From SaaS products to business-critical platform modernization, we design and build software focused on solving real operational problems.",
    sections: [
      {
        title: "Software built for real-world operations.",
        body:
          "UnderStack designs, develops and modernizes full software systems: SaaS products, custom business platforms, AI solutions, restaurant operations software and internal management tools.",
      },
    ],
    related: [
      { label: "Software development", href: "/en/software-development" },
      { label: "Restaurant software", href: "/en/restaurant-software" },
      { label: "Contact", href: "mailto:info@understack.dk" },
    ],
    cta: "Discuss your project",
    keywords: ["software development Denmark", "software development Aarhus", "SaaS development", "custom software development", "AI solutions", "restaurant software", "business software"],
  },
];

const insights = [
  ["dk", "hvad-koster-en-hjemmeside-i-danmark", "Hvad koster en hjemmeside i Danmark?", "En realistisk guide til pris på virksomhedswebsites i Danmark, hvad der driver prisen, og hvornår custom udvikling giver mening.", "/dk/webudvikling"],
  ["dk", "hvad-koster-softwareudvikling-i-danmark", "Hvad koster softwareudvikling i Danmark?", "Softwareudvikling afhænger af scope, integrationer, design, data og drift. Artiklen forklarer, hvordan virksomheder kan budgettere uden falsk præcision.", "/dk/softwareudvikling"],
  ["dk", "freelancer-vs-softwarebureau", "Freelancer vs softwarebureau", "Hvornår giver en freelancer mening, og hvornår kræver projektet et mere struktureret softwareteam eller studio?", "/dk/custom-software"],
  ["dk", "hvad-koster-en-app-at-udvikle", "Hvad koster en app at udvikle?", "App-priser afhænger af platform, backend, design, brugerroller og integrationer. Start med scope og product risk før features.", "/dk/app-udvikling"],
  ["dk", "ai-loesninger-til-danske-virksomheder", "AI-løsninger til danske virksomheder", "Praktiske AI-løsninger handler om automatisering, workflows og beslutningsstøtte, ikke kun chatbots.", "/dk/ai-loesninger"],
  ["dk", "restaurant-software-i-danmark", "Restaurant software i Danmark", "Restaurant software skal hjælpe med food cost, inventory, spild, serviceflow og operationelt overblik.", "/dk/restaurant-software"],
  ["dk", "hvordan-automatiserer-ai-restaurantdrift", "Hvordan automatiserer AI restaurantdrift?", "AI kan hjælpe restaurantdrift med planlægning, service-assistance, køkkenoverblik og smartere beslutninger.", "/dk/restaurant-software"],
  ["en", "how-much-does-software-development-cost-in-denmark", "How much does software development cost in Denmark?", "A practical guide to the cost drivers behind software development in Denmark: scope, integrations, UX, data and maintenance.", "/en/software-development"],
  ["en", "how-much-does-a-business-website-cost-in-denmark", "How much does a business website cost in Denmark?", "Website pricing in Denmark depends on content, design, technical complexity, SEO and integrations. This guide explains the main tradeoffs.", "/en/web-development"],
  ["en", "custom-software-vs-saas", "Custom software vs SaaS", "When should a company choose custom software instead of SaaS? A practical comparison for operational systems and digital products.", "/en/custom-software"],
  ["en", "restaurant-management-software-in-denmark", "Restaurant management software in Denmark", "Restaurant management software should support food cost, inventory, kitchen workflows, waste tracking and service operations.", "/en/restaurant-software"],
  ["en", "ai-automation-for-european-businesses", "AI automation for European businesses", "AI automation works best when it is tied to specific workflows, human review and measurable operational friction.", "/en/ai-development"],
] as const;

export const insightPages: SeoPage[] = [
  {
    lang: "dk",
    slug: "insights",
    kind: "insightIndex",
    title: "Insights | UnderStack SEO guides om software, AI og web",
    description: "Guides om webudvikling, softwareudvikling, AI-løsninger, restaurant software og digitale produkter i Danmark.",
    h1: "Insights om software, web, AI og digitale produkter.",
    eyebrow: "Content hub",
    intro: "Praktiske artikler skrevet til virksomheder, der skal træffe bedre beslutninger om digitale produkter og software.",
    sections: [{ title: "Formål", body: "Content hubben understøtter organisk acquisition og leder læsere videre til relevante services og cases." }],
    related: [],
    cta: "Læs guides",
    keywords: ["software insights Danmark", "webudvikling guide", "AI løsninger guide"],
  },
  {
    lang: "en",
    slug: "insights",
    kind: "insightIndex",
    title: "Insights | UnderStack guides on software, AI and web",
    description: "Guides about software development, AI solutions, restaurant software and web platforms in Denmark and Europe.",
    h1: "Insights on software, web, AI and digital products.",
    eyebrow: "Content hub",
    intro: "Practical articles for companies making better decisions about software systems and digital products.",
    sections: [{ title: "Purpose", body: "The content hub supports organic acquisition and routes readers toward related services and cases." }],
    related: [],
    cta: "Read guides",
    keywords: ["software development Denmark guide", "AI automation Europe", "restaurant software guide"],
  },
  ...insights.map(([lang, slug, title, description, target]) => ({
    lang,
    slug: `insights/${slug}`,
    kind: "insight" as const,
    title: `${title} | UnderStack`,
    description,
    h1: title,
    eyebrow: lang === "dk" ? "Guide" : "Insight",
    intro: description,
    sections: [
      {
        title: lang === "dk" ? "Kort svar" : "Short answer",
        body:
          lang === "dk"
            ? "Der findes ikke én rigtig pris eller løsning. Den rigtige beslutning afhænger af mål, kompleksitet, integrationsbehov, indhold, drift og hvor vigtig løsningen er for virksomheden."
            : "There is no single correct price or solution. The right decision depends on goals, complexity, integrations, content, operations and how important the system is to the business.",
      },
      {
        title: lang === "dk" ? "Hvad driver kompleksiteten?" : "What drives complexity?",
        body:
          lang === "dk"
            ? "De største drivere er antal brugerflows, datamodeller, integrationer, rettighedsniveauer, designkrav, SEO-krav, performance og behovet for løbende iteration."
            : "The biggest drivers are user flows, data models, integrations, permission levels, design quality, SEO needs, performance and the need for ongoing iteration.",
        items:
          lang === "dk"
            ? ["Scope og brugerroller", "Data og integrationer", "Design og indhold", "Drift, sikkerhed og vedligehold"]
            : ["Scope and user roles", "Data and integrations", "Design and content", "Operations, security and maintenance"],
      },
      {
        title: lang === "dk" ? "Næste skridt" : "Next step",
        body:
          lang === "dk"
            ? "Start med et lille, præcist scope og byg derefter videre baseret på reel brug. Det reducerer risiko og gør investeringen lettere at styre."
            : "Start with a small, precise scope and expand based on real use. That reduces risk and makes the investment easier to control.",
      },
    ],
    related: [
      { label: lang === "dk" ? "Relevant service" : "Related service", href: target },
      { label: lang === "dk" ? "Cases" : "Cases", href: `/${lang}/cases/` },
      { label: lang === "dk" ? "Kontakt" : "Contact", href: "mailto:info@understack.dk" },
    ],
    cta: lang === "dk" ? "Tal med UnderStack" : "Talk to UnderStack",
    keywords: [title, "UnderStack", lang === "dk" ? "Danmark" : "Denmark"],
  })),
];

export const appsPages: SeoPage[] = [
  {
    lang: "dk",
    slug: "apps",
    kind: "apps",
    title: "Apps | UnderStack produkter",
    description: "Released apps og aktive produktretninger fra UnderStack, herunder Food Cost Calculator, WasteTrackr og ServiceOS.",
    h1: "Apps og produktpipeline.",
    eyebrow: "UnderStack Apps",
    intro: "En oversigt over released apps og produkter under udvikling i UnderStack-økosystemet.",
    sections: [
      { title: "Released", body: "Food Cost Calculator og WasteTrackr er dokumenteret som released restaurant utility apps." },
      { title: "In development", body: "ServiceOS og yderligere UnderStack utilities er markeret som produkter under udvikling." },
    ],
    related: [
      { label: "GastroApp", href: "/dk/cases/gastroapp" },
      { label: "Restaurant software", href: "/dk/restaurant-software" },
      { label: "Marketplace", href: "/dk/marketplace" },
    ],
    cta: "Se cases",
    keywords: ["UnderStack apps", "restaurant utility apps", "ServiceOS"],
  },
  {
    lang: "en",
    slug: "apps",
    kind: "apps",
    title: "Apps | UnderStack products",
    description: "Released apps and active product directions from UnderStack, including Food Cost Calculator, WasteTrackr and ServiceOS.",
    h1: "Apps and product pipeline.",
    eyebrow: "UnderStack Apps",
    intro: "A view of released apps and active product development inside the UnderStack ecosystem.",
    sections: [
      { title: "Released", body: "Food Cost Calculator and WasteTrackr are documented as released restaurant utility apps." },
      { title: "In development", body: "ServiceOS and additional UnderStack utilities are marked as products in development." },
    ],
    related: [
      { label: "GastroApp", href: "/en/cases/gastroapp" },
      { label: "Restaurant software", href: "/en/restaurant-software" },
      { label: "Marketplace", href: "/en/marketplace" },
    ],
    cta: "View cases",
    keywords: ["UnderStack apps", "restaurant utility apps", "ServiceOS"],
  },
  {
    lang: "dk",
    slug: "marketplace",
    kind: "marketplace",
    title: "Marketplace | UnderStack code assets",
    description: "Premium code assets, templates og reusable developer products fra UnderStack.",
    h1: "Marketplace for code assets og reusable software.",
    eyebrow: "UnderStack Marketplace",
    intro: "UnderStack udvikler en marketplace-retning med templates, packaged apps og reusable software assets.",
    sections: [
      { title: "Retning", body: "Codester-profilen og produktlinjen bruges til at distribuere premium developer assets uden at opfinde live resultater." },
    ],
    related: [
      { label: "Apps", href: "/dk/apps" },
      { label: "Custom software", href: "/dk/custom-software" },
      { label: "Codester", href: "https://www.codester.com/UnderStack/" },
    ],
    cta: "Se apps",
    keywords: ["UnderStack marketplace", "code assets", "software templates"],
  },
  {
    lang: "en",
    slug: "marketplace",
    kind: "marketplace",
    title: "Marketplace | UnderStack code assets",
    description: "Premium code assets, templates and reusable developer products from UnderStack.",
    h1: "Marketplace for code assets and reusable software.",
    eyebrow: "UnderStack Marketplace",
    intro: "UnderStack is developing a marketplace direction with templates, packaged apps and reusable software assets.",
    sections: [
      { title: "Direction", body: "The Codester profile and product line are used to distribute premium developer assets without inventing live commercial results." },
    ],
    related: [
      { label: "Apps", href: "/en/apps" },
      { label: "Custom software", href: "/en/custom-software" },
      { label: "Codester", href: "https://www.codester.com/UnderStack/" },
    ],
    cta: "View apps",
    keywords: ["UnderStack marketplace", "code assets", "software templates"],
  },
];

export const allPages = [...pages, ...servicePages, ...casePages, ...portfolioPages, ...insightPages, ...appsPages];

export function findPage(lang: Language, slug = "") {
  const normalized = slug.replace(/^\/|\/$/g, "");
  return allPages.find((page) => page.lang === lang && page.slug === normalized);
}

export function alternateFor(page: SeoPage, lang: Language) {
  const candidate = allPages.find((item) => item.lang === lang && item.kind === page.kind && item.slug.split("/").pop() === page.slug.split("/").pop());
  return candidate ? pagePath(candidate) : `/${lang}/`;
}
