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
      "Premium digital interfaces with refined interactions and strong visual hierarchy.",
  },
  {
    title: "Web platforms",
    description:
      "Modern web applications built for performance, scalability and technical credibility.",
  },
  {
    title: "Product strategy",
    description:
      "Product thinking focused on real operational value and long-term product structure.",
  },
];

const products = [
  {
    name: "GastroApp",
    status: "Live product",
    description:
      "A restaurant operations platform designed to structure kitchen workflows, inventory and staff coordination.",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Vite",
  "Node.js",
  "PostgreSQL",
  "Cloud infrastructure",
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
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="mb-3 text-xs tracking-[0.32em] text-sky-300 uppercase">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
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

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <a href="#home" className="flex items-center gap-3">

            <img
              src={logo}
              alt="UnderStack"
              className="h-9 w-auto"
            />

            <span className="text-sm font-medium tracking-wide text-slate-200">
              UnderStack
            </span>

          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#services" className="hover:text-white transition">
              Services
            </a>

            <a href="#products" className="hover:text-white transition">
              Products
            </a>

            <a href="#technology" className="hover:text-white transition">
              Technology
            </a>

          </nav>

        </div>
      </header>

      {/* HERO */}

      <section id="home" className="px-6 pb-28 pt-24">

        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <p className="mb-6 text-xs tracking-[0.34em] text-sky-300 uppercase">
              Advanced software systems
            </p>

            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">

              We build premium digital products for modern companies.

            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">

              UnderStack creates high-quality software systems, operational
              platforms and refined digital products with strong engineering
              foundations and modern interface design.

            </p>

            <div className="mt-10 flex gap-4">

              <a
                href="#products"
                className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white"
              >
                View products
              </a>

              <a
                href="#about"
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white"
              >
                About us
              </a>

            </div>

          </motion.div>

          {/* COMPANY CARD */}

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="glass-panel rounded-3xl p-8">

              <p className="text-xs tracking-[0.24em] text-sky-300 uppercase">
                Company overview
              </p>

              <div className="mt-6 grid gap-5">

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">
                    Focus
                  </p>
                  <p className="mt-1 text-lg text-white">
                    Premium software systems
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">
                    Location
                  </p>
                  <p className="mt-1 text-lg text-white">
                    Copenhagen, Denmark
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">
                    Product ecosystem
                  </p>
                  <p className="mt-1 text-lg text-white">
                    Software platforms & digital tools
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="px-6 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <SectionHeader
            eyebrow="About"
            title="Engineering-driven software with refined product design"
            description="UnderStack builds digital systems focused on clarity, performance and long-term product architecture."
          />

        </div>

      </section>

      {/* SERVICES */}

      <section id="services" className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionHeader
            eyebrow="Services"
            title="What we do"
            description="We design and build software systems for serious operational use."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {services.map((service) => (

              <div
                key={service.title}
                className="glass-panel rounded-2xl p-6"
              >

                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-300">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRODUCTS */}

      <section id="products" className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionHeader
            eyebrow="Products"
            title="Selected work"
            description="Software products developed within the UnderStack ecosystem."
          />

          <div className="grid gap-6 md:grid-cols-2">

            {products.map((product) => (

              <div
                key={product.name}
                className="glass-panel rounded-2xl p-8"
              >

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-semibold">
                    {product.name}
                  </h3>

                  <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-300">
                    {product.status}
                  </span>

                </div>

                <p className="mt-4 text-slate-300">
                  {product.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TECHNOLOGY */}

      <section id="technology" className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <SectionHeader
            eyebrow="Technology"
            title="Built with modern tools"
            description="We work with modern technologies and scalable architectures."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {technologies.map((tech) => (

              <div
                key={tech}
                className="glass-panel rounded-xl px-5 py-4"
              >

                {tech}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-slate-400">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <span>
            © 2026 UnderStack
          </span>

          <span>
            Copenhagen, Denmark
          </span>

        </div>

      </footer>

    </div>
  );
}

export default App;