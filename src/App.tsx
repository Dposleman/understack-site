import { motion } from "motion/react";
import logo from "./assets/understack-logo.png";

const services = [
  {
    title: "Custom software",
    description:
      "Operational systems, internal tools and business platforms engineered for clarity, speed and long-term scale.",
  },
  {
    title: "UI / UX design",
    description:
      "Premium digital interfaces with strong visual hierarchy, refined interactions and modern product taste.",
  },
  {
    title: "Web platforms",
    description:
      "Fast, high-end websites and applications built to communicate trust, capability and technical maturity.",
  },
  {
    title: "Product strategy",
    description:
      "Structured product direction, concept shaping and feature prioritization aligned with real business value.",
  },
];

const products = [
  {
    name: "GastroApp",
    status: "Live product",
    description:
      "A restaurant operations platform designed to improve kitchen workflows, inventory control, staff coordination and daily execution.",
  },
];

const pipeline = [
  {
    name: "New products in development",
    description:
      "UnderStack is actively shaping new software products with the same premium system-first philosophy, focused on useful tools with elegant execution.",
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
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-xs font-medium tracking-[0.34em] text-sky-300/90 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="stars-layer" />
      <div className="stars-layer stars-layer-2" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb absolute left-1/2 top-[-10rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-500/20" />
        <div className="hero-orb absolute left-[8%] top-[24rem] h-[22rem] w-[22rem] rounded-full bg-cyan-400/10" />
        <div className="hero-orb absolute right-[6%] top-[34rem] h-[24rem] w-[24rem] rounded-full bg-indigo-500/10" />
        <div className="hero-orb absolute left-[30%] bottom-[8rem] h-[18rem] w-[18rem] rounded-full bg-sky-400/8" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="flex items-center gap-4">
            <img
              src={logo}
              alt="UnderStack"
              className="h-10 w-auto drop-shadow-[0_0_24px_rgba(56,189,248,0.35)]"
            />
            <div className="hidden sm:block">
              <p className="text-[0.72rem] font-medium tracking-[0.34em] text-sky-200 uppercase">
                UNDERSTACK
              </p>
              <p className="text-sm text-slate-300">
                Premium software systems
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 lg:flex">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#products">
              Products
            </a>
            <a className="transition hover:text-white" href="#pipeline">
              In development
            </a>
            <a className="transition hover:text-white" href="#location">
              Location
            </a>
          </nav>

          <a
            href="mailto:hello@understack.dev"
            className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white transition hover:border-sky-400/40 hover:bg-white/[0.1]"
          >
            Contact
          </a>
        </div>
      </header>

      <main id="home" className="relative z-10">
        <section className="relative px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.08)] backdrop-blur-xl">
                Advanced software systems with premium UI execution
              </div>

              <div className="mt-8">
                <img
                  src={logo}
                  alt="UnderStack"
                  className="w-[18rem] max-w-full drop-shadow-[0_0_46px_rgba(56,189,248,0.34)] md:w-[24rem]"
                />
              </div>

              <h1 className="text-glow mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
                We build digital products with technological depth and premium
                design precision.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                UnderStack creates software systems, business platforms and
                refined digital experiences inspired by architecture, clarity and
                a modern infrastructure-grade visual identity.
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
                  className="rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white transition hover:border-sky-400/35 hover:bg-white/[0.1]"
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
                <div className="rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.88)_0%,rgba(2,6,23,0.94)_100%)] p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium tracking-[0.24em] text-sky-300/75 uppercase">
                        Core identity
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        UnderStack
                      </h3>
                    </div>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                      Active
                    </span>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_58%),linear-gradient(180deg,rgba(15,23,42,0.85)_0%,rgba(2,6,23,1)_100%)] p-8">
                    <img
                      src={logo}
                      alt="UnderStack showcase"
                      className="mx-auto w-full max-w-[20rem] drop-shadow-[0_0_48px_rgba(56,189,248,0.3)]"
                    />
                  </div>

                  <div className="mt-6 grid gap-4">
                    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-5">
                      <p className="text-sm text-slate-400">Visual language</p>
                      <p className="mt-2 text-lg font-medium text-white">
                        Dark infrastructure aesthetic, electric blue glow and
                        layered glass surfaces
                      </p>
                    </div>

                    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-5">
                      <p className="text-sm text-slate-400">Positioning</p>
                      <p className="mt-2 text-lg font-medium text-white">
                        Premium software company with a high-end technological
                        identity
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
              <p className="text-sm font-medium tracking-[0.24em] text-sky-300/80 uppercase">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Software built with architectural thinking and a premium product
                mindset.
              </h2>
            </div>

            <div className="glass-panel rounded-[2rem] p-8 text-lg leading-8 text-slate-300">
              UnderStack is a software and product design company focused on
              creating elegant, reliable and scalable digital systems. We combine
              engineering structure, visual precision and product thinking to
              build software that feels intentional, advanced and ready for
              serious modern businesses.
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Services"
              title="What we do"
              description="We design and build digital products that feel sharp, elevated and technically mature."
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
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10">
                    <span className="h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.9)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
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
              description="Software products built around real operations, strong usability and premium interface quality."
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

                  <div className="mt-8 rounded-[1.6rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.75)_0%,rgba(2,6,23,0.95)_100%)] p-6">
                    <div className="mb-4 flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-sky-400/70" />
                      <span className="h-3 w-3 rounded-full bg-blue-500/70" />
                      <span className="h-3 w-3 rounded-full bg-indigo-500/70" />
                    </div>

                    <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                      <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.04] p-5">
                        <div className="h-4 w-36 rounded-full bg-white/10" />
                        <div className="mt-4 space-y-3">
                          <div className="h-3 w-full rounded-full bg-white/[0.07]" />
                          <div className="h-3 w-4/5 rounded-full bg-white/[0.07]" />
                          <div className="h-3 w-3/5 rounded-full bg-white/[0.07]" />
                        </div>
                      </div>

                      <div className="rounded-[1.2rem] border border-sky-400/12 bg-sky-400/[0.05] p-5">
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

              <motion.article
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="glass-panel neon-border overflow-hidden rounded-[2rem] p-8"
              >
                <p className="text-sm font-medium tracking-[0.2em] text-sky-300/75 uppercase">
                  Company showcase
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  UnderStack identity
                </h3>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                  A software brand built around depth, precision, systems
                  thinking and a distinctly premium technological presence.
                </p>

                <div className="mt-8 flex items-center justify-center rounded-[1.6rem] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_50%),linear-gradient(180deg,rgba(15,23,42,0.8)_0%,rgba(2,6,23,1)_100%)] p-8">
                  <img
                    src={logo}
                    alt="UnderStack brand"
                    className="w-full max-w-[18rem] drop-shadow-[0_0_48px_rgba(56,189,248,0.34)]"
                  />
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section id="pipeline" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Pipeline"
              title="In development"
              description="The UnderStack ecosystem is growing through carefully shaped software ideas with the same high-end design language."
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
                    <h3 className="text-2xl font-semibold text-white">
                      {item.name}
                    </h3>
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
              <p className="text-sm font-medium tracking-[0.24em] text-sky-300/80 uppercase">
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

      <footer className="relative z-10 px-6 pb-10 pt-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-white/8 pt-6 text-sm text-slate-400 md:flex-row md:items-center">
          <p>© 2026 UnderStack. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a
              className="transition hover:text-white"
              href="mailto:hello@understack.dev"
            >
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