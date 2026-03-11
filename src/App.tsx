import { motion } from "motion/react";
import logo from "./assets/understack-logo.png";
import type { ReactNode } from "react";

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

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9" ry="3.9" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.9"
        stroke="#61DAFB"
        strokeWidth="1.5"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.9"
        stroke="#61DAFB"
        strokeWidth="1.5"
        transform="rotate(120 12 12)"
      />
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#3178C6" />
      <path
        d="M8 9.2h8M11 9.2v7.6M14.8 12.2c.9 0 1.7.2 2.2.6.5.4.8 1 .8 1.7 0 1.3-1.1 2.2-2.8 2.2-1.2 0-2.2-.4-3-1.1l.9-1.1c.6.5 1.3.8 2 .8.7 0 1.1-.2 1.1-.7 0-.4-.3-.6-1.3-.8-1.8-.4-2.5-1-2.5-2.2 0-1.3 1.1-2.2 2.7-2.2 1.1 0 2 .3 2.8.9l-.8 1.2c-.6-.4-1.2-.6-1.9-.6-.6 0-1 .3-1 .6 0 .4.3.6 1.4.9"
        stroke="white"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ViteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M4.8 6.2 11.5 20c.2.4.8.4 1 0l6.7-13.8c.2-.4-.1-.8-.6-.8H5.4c-.5 0-.8.4-.6.8Z"
        fill="url(#vite-grad)"
      />
      <path
        d="m12 8.1-3.1 6h2.3L12 12l.8 2.1h2.3L12 8.1Z"
        fill="#fff"
        fillOpacity=".95"
      />
      <defs>
        <linearGradient id="vite-grad" x1="4.5" y1="4.5" x2="19.5" y2="20">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 3.5 18.8 7.4v9.2L12 20.5 5.2 16.6V7.4L12 3.5Z"
        fill="#539E43"
      />
      <path
        d="M9.2 9.3v5.4m5.6-5.1c-.6-.4-1.3-.5-2-.5-1.5 0-2.5.8-2.5 2 0 1 .6 1.5 2 1.8 1 .2 1.3.4 1.3.8 0 .4-.4.7-1 .7-.7 0-1.4-.3-2-.8"
        stroke="white"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M9.4 18.2c-1.8.2-2.5-.6-2.7-1.6-.3-1.6.1-3.5.3-5.2.3-2.5 1.6-4.6 4.2-4.8 2.2-.2 4.4 1.1 5 3.2.5 1.7.7 4.4.5 6.2-.1 1.2-.9 2.3-2.5 2.1l-.2 2c0 .3-.3.5-.6.4l-1.1-.2c-.2 0-.4-.2-.4-.5v-1.8c-.7.1-1.5.2-2.5.2Z"
        fill="#336791"
      />
      <path
        d="M10 10.3c.4-.5 1-.8 1.8-.8 1.1 0 1.9.6 2.3 1.5m-4.9 2.2c.5.5 1.2.8 2 .8.9 0 1.7-.3 2.2-.9m-4.3-1.4h.01m4.2 0h.01"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M8.5 18.5h8a3.5 3.5 0 0 0 .4-7 5 5 0 0 0-9.7-1.3A3.2 3.2 0 0 0 8.5 18.5Z"
        fill="#38BDF8"
        fillOpacity=".2"
        stroke="#38BDF8"
        strokeWidth="1.5"
      />
      <path
        d="M9 14.5h6M12 11.5v6"
        stroke="#7DD3FC"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const technologies: {
  name: string;
  icon: ReactNode;
  glow: string;
  border: string;
  iconBg: string;
}[] = [
  {
    name: "React",
    icon: <ReactIcon />,
    glow: "shadow-[0_0_0_1px_rgba(97,218,251,0.12),0_0_34px_rgba(97,218,251,0.14),0_18px_50px_rgba(2,6,23,0.42)]",
    border: "before:bg-[linear-gradient(135deg,rgba(97,218,251,0.55),rgba(97,218,251,0.08),rgba(97,218,251,0.32))]",
    iconBg: "bg-[rgba(97,218,251,0.10)] border-[rgba(97,218,251,0.18)]",
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
    glow: "shadow-[0_0_0_1px_rgba(49,120,198,0.12),0_0_34px_rgba(49,120,198,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border: "before:bg-[linear-gradient(135deg,rgba(49,120,198,0.55),rgba(49,120,198,0.08),rgba(125,211,252,0.28))]",
    iconBg: "bg-[rgba(49,120,198,0.10)] border-[rgba(49,120,198,0.18)]",
  },
  {
    name: "Vite",
    icon: <ViteIcon />,
    glow: "shadow-[0_0_0_1px_rgba(189,52,254,0.10),0_0_34px_rgba(189,52,254,0.14),0_18px_50px_rgba(2,6,23,0.42)]",
    border: "before:bg-[linear-gradient(135deg,rgba(65,209,255,0.48),rgba(189,52,254,0.12),rgba(189,52,254,0.36))]",
    iconBg: "bg-[rgba(189,52,254,0.08)] border-[rgba(189,52,254,0.16)]",
  },
  {
    name: "Node.js",
    icon: <NodeIcon />,
    glow: "shadow-[0_0_0_1px_rgba(83,158,67,0.12),0_0_34px_rgba(83,158,67,0.14),0_18px_50px_rgba(2,6,23,0.42)]",
    border: "before:bg-[linear-gradient(135deg,rgba(83,158,67,0.48),rgba(83,158,67,0.10),rgba(134,239,172,0.24))]",
    iconBg: "bg-[rgba(83,158,67,0.10)] border-[rgba(83,158,67,0.18)]",
  },
  {
    name: "PostgreSQL",
    icon: <PostgresIcon />,
    glow: "shadow-[0_0_0_1px_rgba(51,103,145,0.12),0_0_34px_rgba(51,103,145,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border: "before:bg-[linear-gradient(135deg,rgba(51,103,145,0.52),rgba(51,103,145,0.10),rgba(125,211,252,0.24))]",
    iconBg: "bg-[rgba(51,103,145,0.10)] border-[rgba(51,103,145,0.18)]",
  },
  {
    name: "Cloud infrastructure",
    icon: <CloudIcon />,
    glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.12),0_0_34px_rgba(56,189,248,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border: "before:bg-[linear-gradient(135deg,rgba(56,189,248,0.52),rgba(56,189,248,0.10),rgba(125,211,252,0.28))]",
    iconBg: "bg-[rgba(56,189,248,0.10)] border-[rgba(56,189,248,0.18)]",
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

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb absolute left-1/2 top-[-10rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-blue-500/20" />
        <div className="hero-orb absolute left-[8%] top-[24rem] h-[22rem] w-[22rem] rounded-full bg-cyan-400/10" />
        <div className="hero-orb absolute right-[6%] top-[34rem] h-[24rem] w-[24rem] rounded-full bg-indigo-500/10" />
        <div className="hero-orb absolute left-[30%] bottom-[8rem] h-[18rem] w-[18rem] rounded-full bg-sky-400/8" />
      </div>

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
                className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5"
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
            <div className="glass-panel neon-border rounded-3xl p-8">
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
                className="glass-panel neon-border rounded-2xl p-6"
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
              className="glass-panel neon-border rounded-3xl p-8"
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
              className="glass-panel neon-border rounded-3xl p-5"
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
                key={tech.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={`glass-panel neon-border ${tech.border} ${tech.glow} rounded-xl px-5 py-4 transition-transform duration-300 hover:-translate-y-0.5`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg border ${tech.iconBg}`}
                  >
                    {tech.icon}
                  </span>
                  <span className="text-sm font-medium text-slate-100">
                    {tech.name}
                  </span>
                </div>
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