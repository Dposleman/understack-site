import { motion } from "motion/react";
import { Link } from "react-router-dom";

const CODESTER_URL = "https://www.codester.com/UnderStack/";

type AssetItem = {
  name: string;
  category: string;
  status: "Live on Codester" | "Coming Soon";
  description: string;
};

const featuredAssets: AssetItem[] = [
  {
    name: "Flutter App Templates",
    category: "Mobile Templates",
    status: "Coming Soon",
    description:
      "Production-ready Flutter app templates designed with premium UI, clean code structure and marketplace-ready packaging.",
  },
  {
    name: "Restaurant Utility Apps",
    category: "Niche App Products",
    status: "Coming Soon",
    description:
      "Operational utility apps for restaurants and hospitality workflows, built to be useful, clean and commercially viable.",
  },
  {
    name: "Web Components & UI Blocks",
    category: "Frontend Assets",
    status: "Coming Soon",
    description:
      "Modern premium UI sections, landing blocks and reusable frontend assets for product sites and SaaS brands.",
  },
  {
    name: "Business Tools & Internal Systems",
    category: "Code Assets",
    status: "Coming Soon",
    description:
      "Structured tools, dashboards and internal workflow systems that can be adapted into sellable code products.",
  },
];

function AssetCard({ item }: { item: AssetItem }) {
  const isLive = item.status === "Live on Codester";

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.05] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_60px_rgba(2,6,23,0.55)] backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_30%)] opacity-90" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] ${
              isLive
                ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-200"
                : "border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-200"
            }`}
          >
            {item.status}
          </span>

          <span className="text-[11px] uppercase tracking-[0.24em] text-white/45">
            {item.category}
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {item.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/68">{item.description}</p>
      </div>
    </motion.article>
  );
}

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.10),transparent_25%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.12),transparent_28%),linear-gradient(180deg,#020617_0%,#050b17_100%)]" />

      <header className="sticky top-0 z-40 border-b border-white/8 bg-slate-950/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="text-sm font-semibold uppercase tracking-[0.32em] text-white/90"
          >
            UnderStack
          </Link>

          <nav className="flex items-center gap-6 text-sm text-white/65">
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <Link to="/apps" className="transition hover:text-white">
              Apps
            </Link>
            <Link to="/marketplace" className="text-cyan-200">
              Marketplace
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-20">
        <section className="max-w-4xl">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
            UnderStack Marketplace
          </span>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Premium code assets, templates and developer products.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-white/68">
            A marketplace-facing product line for developers, founders and teams
            looking for polished templates, app products and reusable digital assets.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={CODESTER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/40 hover:bg-cyan-300/14"
            >
              Visit Codester Profile
            </a>

            <Link
              to="/apps"
              className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/10"
            >
              Explore Apps
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
              What will be published
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              Developer-focused assets
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredAssets.map((item) => (
              <AssetCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
              Marketplace direction
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Built for sellable, reusable, premium digital products.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/68">
              UnderStack is building a marketplace layer designed for templates,
              packaged apps, reusable systems and commercial code assets that can
              be published through Codester and related platforms.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-slate-950/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div>CVR-nummer: 46327608</div>
          <div>© 2026 UnderStack. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}