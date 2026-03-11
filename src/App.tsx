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

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="UnderStack" className="h-9 w-auto" />
            <span className="text-sm font-medium tracking-wide text-slate-200">
              UnderStack
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#products" className="transition hover:text-white">
              Products
            </a>
            <a href="#technology" className="transition hover:text-white">
              Technology
            </a>
          </nav>
        </div>
      </header>

      <section id="home" className="px-6 pb-28 pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
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
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/5"
              >
                About us
              </a>
            </div>
          </motion.div>

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
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-1 text-lg text-white">
                    Premium software systems
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="mt-1 text-lg text-white">
                    Copenhagen, Denmark
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Product ecosystem</p>
                  <p className="mt-1 text-lg text-white">
                    Software platforms & digital tools
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader
            eyebrow="About"
            title="Engineering-driven software with refined product design"
            description="UnderStack builds digital systems focused on clarity, performance and long-term product architecture."
          />
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Services"
            title="What we do"
            description="We design and build software systems for serious operational use."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-panel rounded-2xl p-6"
              >
                <div className="mb-5 h-10 w-10 rounded-2xl border border-sky-400/20 bg-sky-400/10" />
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Products"
            title="Selected work"
            description="Software products developed within the UnderStack ecosystem."
          />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="glass-panel rounded-3xl p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.24em] text-sky-300 uppercase">
                    Featured product
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-white">
                    GastroApp
                  </h3>
                </div>

                <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-300">
                  Live product
                </span>
              </div>

              <p className="mt-6 text-slate-300">
                A restaurant operations platform designed to structure kitchen
                workflows, inventory, production tracking and staff coordination.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Kitchen workflow structure",
                  "Inventory control",
                  "Staff coordination",
                  "Operational visibility",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="glass-panel rounded-3xl p-5"
            >
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.9)_0%,rgba(2,6,23,0.96)_100%)] p-5">
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-sky-400/80" />
                  <span className="h-3 w-3 rounded-full bg-blue-500/80" />
                  <span className="h-3 w-3 rounded-full bg-indigo-500/80" />
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-28 rounded-full bg-white/10" />
                      <div className="h-8 w-20 rounded-full bg-sky-400/10" />
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="h-10 rounded-2xl bg-white/6" />
                      <div className="h-10 rounded-2xl bg-white/6" />
                      <div className="h-10 rounded-2xl bg-white/6" />
                      <div className="h-10 rounded-2xl bg-white/6" />
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.3rem] border border-white/10 bg-sky-400/[0.06] p-5">
                      <div className="h-4 w-20 rounded-full bg-sky-300/15" />
                      <div className="mt-4 h-20 rounded-2xl bg-sky-300/10" />
                    </div>

                    <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5">
                      <div className="h-4 w-24 rounded-full bg-white/10" />
                      <div className="mt-4 space-y-3">
                        <div className="h-3 w-full rounded-full bg-white/8" />
                        <div className="h-3 w-5/6 rounded-full bg-white/8" />
                        <div className="h-3 w-3/5 rounded-full bg-white/8" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="technology" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Technology"
            title="Built with modern tools"
            description="We work with modern technologies and scalable architectures."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="glass-panel rounded-xl px-5 py-4"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span>© 2026 UnderStack</span>
          <span>Copenhagen, Denmark</span>
        </div>
      </footer>
    </div>
  );
}

export default App;