import { motion } from "motion/react";
import logo from "./assets/understack-logo.png";

const services = [
  {
    title: "Custom software",
    description:
      "Operational systems, internal tools and business platforms engineered for performance, clarity and scale.",
  },
  {
    title: "UI / UX design",
    description:
      "Premium interfaces with strong hierarchy, elegant interactions and product-level visual precision.",
  },
  {
    title: "Web platforms",
    description:
      "Fast, modern web experiences designed to communicate trust, sophistication and technical maturity.",
  },
  {
    title: "Product strategy",
    description:
      "Concept validation, product structuring and feature direction shaped around real business value.",
  },
];

const products = [
  {
    name: "GastroApp",
    status: "Live product",
    description:
      "A restaurant operations platform built to improve kitchen workflows, staff coordination, inventory control and daily execution.",
  },
];

const pipeline = [
  {
    name: "Next products in development",
    description:
      "New software initiatives are currently being shaped inside the UnderStack ecosystem, with a focus on premium vertical tools and scalable business systems.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-medium tracking-[0.34em] text-sky-300/80 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen bg-transparent text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb absolute left-1/2 top-[-8rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-blue-500/25" />
        <div className="hero-orb absolute left-[10%] top-[28rem] h-[18rem] w-[18rem] rounded-full bg-cyan-400/10" />
        <div className="hero-orb absolute right-[6%] top-[38rem] h-[20rem] w-[20rem] rounded-full bg-indigo-500/12" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/6 bg-slate-950/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logo}
              alt="UnderStack logo"
              className="h-11 w-11 rounded-xl object-cover shadow-[0_0_24px_rgba(56,189,248,0.22)]"
            />
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.32em] text-sky-200/75 uppercase">
                UnderStack
              </p>
              <p className="text-sm text-slate-300">Advanced software systems</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#products">
              Products
            </a>
            <a className="transition hover:text-white" href="#location">
              Location
            </a>
          </nav>

          <a
            href="mailto:hello@understack.dev"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-sky-400/40 hover:bg-white/8"
          >
            Contact
          </a>
        </div>
      </header>

      <main id="home" className="relative">
        <section className="relative overflow-hidden px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/8 px-4 py-2 text-sm text-sky-200/90 shadow-[0_0_30px_rgba(56,189,248,0.08)] backdrop-blur-xl">
                Premium software systems, shaped with precision
              </div>

              <div className="mt-8 flex items-center gap-5">
                <img
                  src={logo}
                  alt="UnderStack brand"
                  className="h-24 w-24 rounded-3xl object-cover shadow-[0_0_40px_rgba(56,189,248,0.25)] md:h-28 md:w-28"
                />
                <div>
                  <p className="text-sm font-medium tracking-[0.34em] text-sky-300/75 uppercase">
                    UnderStack
                  </p>
                  <p className="mt-2 text-base text-slate-300">
                    Software systems, interfaces and digital infrastructure
                  </p>
                </div>
              </div>

              <h1 className="text-glow mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
                We build advanced digital products with a premium technology identity.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                UnderStack creates software experiences inspired by clarity,
                system architecture and high-end interface design, with a visual
                language rooted in depth, precision and modern infrastructure.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  className="soft-glow rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                >
                  View our work
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-sky-400/35 hover:bg-white/8"
                >
                  Who we are
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.12 }}
              className="relative"
            >
              <div className="glass-panel neon-border rounded-[2rem] p-5">
                <div className="rounded-[1.5rem] border border-white/8 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium tracking-[0.24em] text-sky-300/70 uppercase">
                        Core identity
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        UnderStack
                      </h3>
                    </div>
                    <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                      Active
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-center rounded-[1.4rem] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_58%),linear-gradient(180deg,rgba(15,23,42,0.82)_0%,rgba(2,6,23,0.92)_100%)] p-8">
                    <img
                      src={logo}
                      alt="UnderStack logo showcase"
                      className="w-full max-w-[18rem] drop-shadow-[0_0_40px_rgba(56,189,248,0.28)]"
                    />
                  </div>

                  <div className="mt-6 grid gap-4">
                    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-5">
                      <p className="text-sm text-slate-400">Visual language</p>
                      <p className="mt-2 text-lg font-medium text-white">
                        Deep-space dark UI, electric blue glow, premium glass layers
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-5">
                      <p className="text-sm text-slate-400">Positioning</p>
                      <p className="mt-2 text-lg font-medium text-white">
                        Advanced software company with a high-end technological aesthetic
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-5">
                      <p className="text-sm text-slate-400">Location</p>
                      <p className="mt-2 text-lg font-medium text-white">
                        Copenhagen, Denmark
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-medium tracking-[0.24em] text-sky-300/75 uppercase">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Software built with architectural thinking and premium interface standards.
              </h2>
            </div>

            <div className="glass-panel rounded-[2rem] p-8 text-lg leading-8 text-slate-300">
              UnderStack is a software and product design company focused on
              creating elegant, reliable and scalable digital systems. Our visual
              and product direction is shaped around technological depth, modern
              business clarity and interfaces that feel precise, polished and
              intentionally premium.
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Services"
              title="What we do"
              description="We design and build software with a visual identity that feels advanced, sharp and unmistakably modern."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="glass-panel neon-border rounded-[1.75rem] p-6"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10 text-sky-200">
                    <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Products"
              title="Selected work"
              description="Software products built around real operations, premium UI execution and a strong internal systems mindset."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {products.map((product, index) => (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="glass-panel neon-border overflow-hidden rounded-[2rem] p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium tracking-[0.2em] text-sky-300/75 uppercase">
                        Featured product
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold text-white">
                        {product.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
                      {product.status}
                    </span>
                  </div>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                    {product.description}
                  </p>

                  <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.75)_0%,rgba(2,6,23,0.92)_100%)] p-6">
                    <div className="mb-4 flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-sky-400/70" />
                      <span className="h-3 w-3 rounded-full bg-blue-500/70" />
                      <span className="h-3 w-3 rounded-full bg-indigo-500/70" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-5">
                        <div className="h-4 w-32 rounded-full bg-white/10" />
                        <div className="mt-4 space-y-3">
                          <div className="h-3 w-full rounded-full bg-white/7" />
                          <div className="h-3 w-4/5 rounded-full bg-white/7" />
                          <div className="h-3 w-3/5 rounded-full bg-white/7" />
                        </div>
                      </div>
                      <div className="rounded-[1.2rem] border border-sky-400/10 bg-sky-400/[0.06] p-5">
                        <div className="h-4 w-24 rounded-full bg-sky-300/15" />
                        <div className="mt-4 space-y-3">
                          <div className="h-3 w-full rounded-full bg-sky-300/10" />
                          <div className="h-3 w-5/6 rounded-full bg-sky-300/10" />
                          <div className="h-3 w-2/3 rounded-full bg-sky-300/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Pipeline"
              title="In development"
              description="The UnderStack ecosystem is growing through a pipeline of software ideas shaped with the same technological identity."
            />

            <div className="grid gap-6">
              {pipeline.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="glass-panel neon-border rounded-[2rem] p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                    <span className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-200">
                      In progress
                    </span>
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="location" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="glass-panel neon-border rounded-[2.25rem] p-8 md:p-12">
              <p className="text-sm font-medium tracking-[0.24em] text-sky-300/75 uppercase">
                Location
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Based in Copenhagen, building premium digital systems with global ambition.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                UnderStack operates from Copenhagen, Denmark, with a product and
                design mindset oriented toward modern companies that value
                elegance, structure, speed and technological depth.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-10 pt-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 text-sm text-slate-400 md:flex-row md:items-center">
          <p>© 2026 UnderStack. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a className="transition hover:text-white" href="mailto:hello@understack.dev">
              hello@understack.dev
            </a>
            <a className="transition hover:text-white" href="#home">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;