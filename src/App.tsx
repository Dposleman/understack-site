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
      "New software initiatives are currently being shaped inside the UnderStack ecosystem.",
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
      <p className="mb-3 text-xs font-medium tracking-[0.34em] text-sky-300 uppercase">
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
    <div className="relative min-h-screen text-white">

      {/* GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      {/* GLOW ORBS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb absolute left-1/2 top-[-8rem] h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-blue-500/25" />
        <div className="hero-orb absolute left-[10%] top-[28rem] h-[18rem] w-[18rem] rounded-full bg-cyan-400/10" />
        <div className="hero-orb absolute right-[6%] top-[38rem] h-[20rem] w-[20rem] rounded-full bg-indigo-500/12" />
      </div>

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-white/6 bg-slate-950/60 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

          <a href="#home" className="flex items-center gap-3">

            <img
              src={logo}
              alt="UnderStack"
              className="h-10 w-auto drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]"
            />

            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.32em] text-sky-200 uppercase">
                UNDERSTACK
              </p>

              <p className="text-sm text-slate-300">
                Advanced software systems
              </p>
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
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-sky-400 hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </header>

      {/* HERO */}

      <main id="home">

        <section className="px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">

          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200 backdrop-blur-xl">
                Premium software systems
              </div>

              <div className="mt-8 flex items-center gap-5">

                <img
                  src={logo}
                  alt="UnderStack"
                  className="h-24 w-auto drop-shadow-[0_0_40px_rgba(56,189,248,0.45)]"
                />

                <div>
                  <p className="text-sm font-medium tracking-[0.34em] text-sky-300 uppercase">
                    UNDERSTACK
                  </p>

                  <p className="mt-2 text-base text-slate-300">
                    Software systems and digital infrastructure
                  </p>
                </div>

              </div>

              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
                We build advanced digital products with a premium technology identity.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                UnderStack creates software experiences inspired by clarity,
                architecture and high-end interface design.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">

                <a
                  href="#products"
                  className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  View our work
                </a>

                <a
                  href="#about"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Who we are
                </a>

              </div>
            </motion.div>

            {/* HERO CARD */}

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85 }}
            >

              <div className="glass-panel rounded-[2rem] p-5">

                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-6">

                  <p className="text-xs tracking-[0.24em] text-sky-300 uppercase">
                    Core identity
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    UnderStack
                  </h3>

                  <div className="mt-6 flex justify-center">

                    <img
                      src={logo}
                      alt="UnderStack"
                      className="w-64 drop-shadow-[0_0_40px_rgba(56,189,248,0.4)]"
                    />

                  </div>

                </div>

              </div>

            </motion.div>

          </div>
        </section>

        {/* SERVICES */}

        <section id="services" className="px-6 py-20 md:px-10">

          <div className="mx-auto max-w-7xl">

            <SectionHeader
              eyebrow="Services"
              title="What we do"
              description="We design and build premium software systems."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {services.map((service, i) => (

                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-panel rounded-2xl p-6"
                >

                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-slate-300">
                    {service.description}
                  </p>

                </motion.div>

              ))}

            </div>
          </div>
        </section>

        {/* PRODUCTS */}

        <section id="products" className="px-6 py-20 md:px-10">

          <div className="mx-auto max-w-7xl">

            <SectionHeader
              eyebrow="Products"
              title="Selected work"
              description="Software products developed inside the UnderStack ecosystem."
            />

            {products.map((product) => (

              <div key={product.name} className="glass-panel rounded-2xl p-8">

                <div className="flex items-center justify-between">

                  <h3 className="text-3xl font-semibold text-white">
                    {product.name}
                  </h3>

                  <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-sky-200">
                    {product.status}
                  </span>

                </div>

                <p className="mt-6 text-slate-300">
                  {product.description}
                </p>

              </div>

            ))}

          </div>
        </section>

        {/* LOCATION */}

        <section id="location" className="px-6 py-20 md:px-10">

          <div className="mx-auto max-w-7xl">

            <div className="glass-panel rounded-2xl p-12">

              <p className="text-xs tracking-[0.24em] text-sky-300 uppercase">
                Location
              </p>

              <h2 className="mt-4 text-4xl font-semibold text-white">
                Copenhagen, Denmark
              </h2>

              <p className="mt-4 text-slate-300 max-w-xl">
                UnderStack operates from Copenhagen building premium
                digital systems for modern companies.
              </p>

            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}

      <footer className="px-6 pb-10 pt-6 md:px-10">

        <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-white/10 pt-6 text-sm text-slate-400">

          <p>© 2026 UnderStack</p>

          <a href="#home" className="hover:text-white">
            Back to top
          </a>

        </div>

      </footer>

    </div>
  );
}

export default App;