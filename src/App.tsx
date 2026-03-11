import { motion } from "motion/react";
import logo from "./assets/understack-logo.png";
import type { ReactNode } from "react";
import { useState } from "react";

const GASTROAPP_URL = "https://gastroapp.dk";
const CONTACT_EMAIL = "gg.posleman@gmail.com";

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="9" ry="3.9" stroke="#61DAFB" strokeWidth="1.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.9" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
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
      <path d="m12 8.1-3.1 6h2.3L12 12l.8 2.1h2.3L12 8.1Z" fill="#fff" fillOpacity=".95" />
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
      <path d="M12 3.5 18.8 7.4v9.2L12 20.5 5.2 16.6V7.4L12 3.5Z" fill="#539E43" />
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
      <path d="M9 14.5h6M12 11.5v6" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SoftwareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="#60A5FA" strokeWidth="1.5" />
      <path
        d="M8.5 10 6.5 12l2 2M15.5 10l2 2-2 2M13 9.5 11 14.5"
        stroke="#93C5FD"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UiUxIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="#A78BFA" strokeWidth="1.5" />
      <circle cx="9" cy="9" r="1.6" fill="#C4B5FD" />
      <path d="M13 8h3M13 11h4M8 15h8" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="#22D3EE" strokeWidth="1.5" />
      <path
        d="M3.8 9h16.4M9 5.8c1.3 1.5 2.1 3.8 2.1 6.2 0 2.4-.8 4.7-2.1 6.2M15 5.8c-1.3 1.5-2.1 3.8-2.1 6.2 0 2.4.8 4.7 2.1 6.2"
        stroke="#67E8F9"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M6 18V7.5M6 7.5h8.5l-1.8 2.5 1.8 2.5H6"
        stroke="#34D399"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.5" cy="16.5" r="2.5" stroke="#6EE7B7" strokeWidth="1.5" />
      <path d="m19.3 18.3 1.7 1.7" stroke="#6EE7B7" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PrecisionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" stroke="#7DD3FC" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.2" fill="#38BDF8" />
      <path d="M12 4.5v3M12 16.5v3M4.5 12h3M16.5 12h3" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EngineeringIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M7 7h10v10H7z" stroke="#93C5FD" strokeWidth="1.5" />
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1"
        stroke="#60A5FA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="6" height="4" rx="1.5" stroke="#67E8F9" strokeWidth="1.5" />
      <rect x="14" y="10" width="6" height="4" rx="1.5" stroke="#67E8F9" strokeWidth="1.5" />
      <rect x="4" y="15" width="6" height="4" rx="1.5" stroke="#67E8F9" strokeWidth="1.5" />
      <path
        d="M10 7h2a2 2 0 0 1 2 2v1M14 14v1a2 2 0 0 1-2 2h-2"
        stroke="#22D3EE"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PremiumIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="m12 4 2.2 4.5 5 .7-3.6 3.5.9 4.9L12 15.2 7.5 17.6l.9-4.9-3.6-3.5 5-.7L12 4Z"
        stroke="#A78BFA"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1.2" fill="#C4B5FD" />
    </svg>
  );
}

const services: {
  title: string;
  description: string;
  icon: ReactNode;
  glow: string;
  border: string;
  iconBg: string;
}[] = [
  {
    title: "Custom software",
    description:
      "Operational systems, internal tools and business platforms engineered for clarity, speed and long-term scale.",
    icon: <SoftwareIcon />,
    glow: "shadow-[0_0_0_1px_rgba(96,165,250,0.10),0_0_30px_rgba(96,165,250,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(96,165,250,0.46),rgba(96,165,250,0.08),rgba(147,197,253,0.24))]",
    iconBg: "bg-[rgba(96,165,250,0.10)] border-[rgba(96,165,250,0.18)]",
  },
  {
    title: "UI / UX design",
    description:
      "Premium digital interfaces with refined interactions and strong visual hierarchy.",
    icon: <UiUxIcon />,
    glow: "shadow-[0_0_0_1px_rgba(167,139,250,0.10),0_0_30px_rgba(167,139,250,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(167,139,250,0.46),rgba(167,139,250,0.08),rgba(196,181,253,0.24))]",
    iconBg: "bg-[rgba(167,139,250,0.10)] border-[rgba(167,139,250,0.18)]",
  },
  {
    title: "Web platforms",
    description:
      "Modern web applications built for performance, scalability and technical credibility.",
    icon: <WebIcon />,
    glow: "shadow-[0_0_0_1px_rgba(34,211,238,0.10),0_0_30px_rgba(34,211,238,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(34,211,238,0.46),rgba(34,211,238,0.08),rgba(103,232,249,0.24))]",
    iconBg: "bg-[rgba(34,211,238,0.10)] border-[rgba(34,211,238,0.18)]",
  },
  {
    title: "Product strategy",
    description:
      "Product thinking focused on real operational value and long-term product structure.",
    icon: <StrategyIcon />,
    glow: "shadow-[0_0_0_1px_rgba(52,211,153,0.10),0_0_30px_rgba(52,211,153,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(52,211,153,0.46),rgba(52,211,153,0.08),rgba(110,231,183,0.24))]",
    iconBg: "bg-[rgba(52,211,153,0.10)] border-[rgba(52,211,153,0.18)]",
  },
];

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
    border:
      "before:bg-[linear-gradient(135deg,rgba(97,218,251,0.55),rgba(97,218,251,0.08),rgba(97,218,251,0.32))]",
    iconBg: "bg-[rgba(97,218,251,0.10)] border-[rgba(97,218,251,0.18)]",
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
    glow: "shadow-[0_0_0_1px_rgba(49,120,198,0.12),0_0_34px_rgba(49,120,198,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(49,120,198,0.55),rgba(49,120,198,0.08),rgba(125,211,252,0.28))]",
    iconBg: "bg-[rgba(49,120,198,0.10)] border-[rgba(49,120,198,0.18)]",
  },
  {
    name: "Vite",
    icon: <ViteIcon />,
    glow: "shadow-[0_0_0_1px_rgba(189,52,254,0.10),0_0_34px_rgba(189,52,254,0.14),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(65,209,255,0.48),rgba(189,52,254,0.12),rgba(189,52,254,0.36))]",
    iconBg: "bg-[rgba(189,52,254,0.08)] border-[rgba(189,52,254,0.16)]",
  },
  {
    name: "Node.js",
    icon: <NodeIcon />,
    glow: "shadow-[0_0_0_1px_rgba(83,158,67,0.12),0_0_34px_rgba(83,158,67,0.14),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(83,158,67,0.48),rgba(83,158,67,0.10),rgba(134,239,172,0.24))]",
    iconBg: "bg-[rgba(83,158,67,0.10)] border-[rgba(83,158,67,0.18)]",
  },
  {
    name: "PostgreSQL",
    icon: <PostgresIcon />,
    glow: "shadow-[0_0_0_1px_rgba(51,103,145,0.12),0_0_34px_rgba(51,103,145,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(51,103,145,0.52),rgba(51,103,145,0.10),rgba(125,211,252,0.24))]",
    iconBg: "bg-[rgba(51,103,145,0.10)] border-[rgba(51,103,145,0.18)]",
  },
  {
    name: "Cloud infrastructure",
    icon: <CloudIcon />,
    glow: "shadow-[0_0_0_1px_rgba(56,189,248,0.12),0_0_34px_rgba(56,189,248,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(56,189,248,0.52),rgba(56,189,248,0.10),rgba(125,211,252,0.28))]",
    iconBg: "bg-[rgba(56,189,248,0.10)] border-[rgba(56,189,248,0.18)]",
  },
];

const reasons: {
  title: string;
  text: string;
  icon: ReactNode;
  iconBg: string;
}[] = [
  {
    title: "Design-led execution",
    text: "We care about visual precision, spacing, interaction quality and product polish from the start.",
    icon: <PrecisionIcon />,
    iconBg: "bg-[rgba(56,189,248,0.10)] border-[rgba(56,189,248,0.18)]",
  },
  {
    title: "Engineering discipline",
    text: "We build with structure, maintainability and long-term scalability in mind.",
    icon: <EngineeringIcon />,
    iconBg: "bg-[rgba(96,165,250,0.10)] border-[rgba(96,165,250,0.18)]",
  },
  {
    title: "Operational thinking",
    text: "Our products are shaped around real workflows, real teams and real business needs.",
    icon: <WorkflowIcon />,
    iconBg: "bg-[rgba(34,211,238,0.10)] border-[rgba(34,211,238,0.18)]",
  },
  {
    title: "Premium positioning",
    text: "Everything is designed to feel sharp, modern, credible and enterprise-ready.",
    icon: <PremiumIcon />,
    iconBg: "bg-[rgba(167,139,250,0.10)] border-[rgba(167,139,250,0.18)]",
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

export default function App() {
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });

  function handleHeroMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 8;
    const rotateX = (0.5 - py) * 8;

    setHeroTilt({ x: rotateX, y: rotateY });
  }

  function resetHeroMove() {
    setHeroTilt({ x: 0, y: 0 });
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="stars-layer" />
      <div className="stars-layer stars-layer-2" />
      <div className="grid-overlay" />
      <div className="noise-overlay" />

      <section className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[46rem] overflow-hidden">
        <div className="aurora-mesh aurora-mesh-1" />
        <div className="aurora-mesh aurora-mesh-2" />
        <div className="aurora-mesh aurora-mesh-3" />
        <div className="cinematic-beam cinematic-beam-1" />
        <div className="cinematic-beam cinematic-beam-2" />
        <div className="depth-ring depth-ring-1" />
        <div className="depth-ring depth-ring-2" />
      </section>

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
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative z-10 px-6 pb-28 pt-24"
        onMouseMove={handleHeroMove}
        onMouseLeave={resetHeroMove}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              transform: `translate3d(${heroTilt.y * -1.2}px, ${heroTilt.x * -1.2}px, 0)`,
              transition: "transform 180ms ease-out",
            }}
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
                href="#contact"
                className="rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/5"
              >
                Contact us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="hero-card-3d"
            style={{
              transform: `perspective(1400px) rotateX(${6 + heroTilt.x * 0.55}deg) rotateY(${-6 + heroTilt.y * 0.55}deg) translate3d(${heroTilt.y * 1.1}px, ${heroTilt.x * -1.1}px, 0)`,
              transition: "transform 180ms ease-out",
            }}
          >
            <div className="glass-panel neon-border overflow-hidden rounded-3xl p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs tracking-[0.24em] text-sky-300 uppercase">
                    Company overview
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    UnderStack
                  </h3>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                  Active
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-cyan-400/12 bg-cyan-400/[0.06] p-4">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-300">
                    Products
                  </div>
                  <div className="mt-2 text-2xl text-white">1</div>
                </div>
                <div className="rounded-2xl border border-violet-400/12 bg-violet-400/[0.06] p-4">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-violet-300">
                    Services
                  </div>
                  <div className="mt-2 text-2xl text-white">4</div>
                </div>
                <div className="rounded-2xl border border-emerald-400/12 bg-emerald-400/[0.06] p-4">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                    Location
                  </div>
                  <div className="mt-2 text-lg text-white">Aarhus</div>
                </div>
              </div>

              <div className="mt-5 grid gap-5">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-1 text-lg text-white">
                    Premium software systems
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">Current product</p>
                      <p className="mt-1 text-lg text-white">GastroApp</p>
                    </div>
                    <a
                      href={GASTROAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-sky-300 transition hover:bg-sky-400/15"
                    >
                      Open
                    </a>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Contact</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 block text-lg text-white transition hover:text-sky-300"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Core strengths</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/7 px-3 py-1 text-xs text-slate-200">
                      Design-led
                    </span>
                    <span className="rounded-full bg-white/7 px-3 py-1 text-xs text-slate-200">
                      Scalable systems
                    </span>
                    <span className="rounded-full bg-white/7 px-3 py-1 text-xs text-slate-200">
                      Product thinking
                    </span>
                  </div>
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
                className={`glass-panel neon-border ${service.border} ${service.glow} rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-0.5`}
              >
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border ${service.iconBg}`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-slate-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why UnderStack"
            title="Built with product taste, systems thinking and technical discipline"
            description="We combine modern interface standards with structured engineering and a strong operational mindset."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-panel neon-border rounded-2xl p-6"
              >
                <div
                  className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border ${reason.iconBg}`}
                >
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 text-slate-300">{reason.text}</p>
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

          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
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

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm text-slate-400">Why it matters</p>
                <p className="mt-2 text-slate-200">
                  GastroApp is built to reduce friction in real restaurant
                  operations through better structure, visibility and workflow control.
                </p>
              </div>

              <a
                href={GASTROAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5"
              >
                Open GastroApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="glass-panel neon-border rounded-3xl p-5"
            >
              <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92)_0%,rgba(2,6,23,0.98)_100%)] p-5">
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-sky-400/80" />
                  <span className="h-3 w-3 rounded-full bg-blue-500/80" />
                  <span className="h-3 w-3 rounded-full bg-indigo-500/80" />
                </div>

                <div className="grid gap-4 lg:grid-cols-[0.28fr_0.72fr]">
                  <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4">
                    <div className="h-4 w-16 rounded-full bg-white/10" />
                    <div className="mt-4 space-y-3">
                      <div className="rounded-xl bg-cyan-400/10 px-3 py-3 text-xs text-cyan-300">
                        Dashboard
                      </div>
                      <div className="rounded-xl bg-white/6 px-3 py-3 text-xs text-slate-300">
                        Recipes
                      </div>
                      <div className="rounded-xl bg-white/6 px-3 py-3 text-xs text-slate-300">
                        Items
                      </div>
                      <div className="rounded-xl bg-white/6 px-3 py-3 text-xs text-slate-300">
                        Stock
                      </div>
                      <div className="rounded-xl bg-white/6 px-3 py-3 text-xs text-slate-300">
                        Reports
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-4 w-28 rounded-full bg-white/10" />
                          <div className="mt-2 h-3 w-40 rounded-full bg-white/6" />
                        </div>
                        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] text-emerald-300">
                          Service live
                        </div>
                      </div>

                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl bg-cyan-400/12 p-4">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                            Runs
                          </div>
                          <div className="mt-2 text-2xl text-white">24</div>
                        </div>
                        <div className="rounded-2xl bg-violet-400/12 p-4">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-violet-300">
                            Items
                          </div>
                          <div className="mt-2 text-2xl text-white">186</div>
                        </div>
                        <div className="rounded-2xl bg-emerald-400/12 p-4">
                          <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                            Staff
                          </div>
                          <div className="mt-2 text-2xl text-white">11</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
                      <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5">
                        <div className="flex items-center justify-between">
                          <div className="h-4 w-24 rounded-full bg-white/10" />
                          <div className="text-[10px] text-slate-400">Today</div>
                        </div>

                        <div className="mt-5 space-y-3">
                          <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/6 px-4 py-3">
                            <div className="flex items-center gap-3">
                              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                              <span className="text-xs text-slate-200">Prep list</span>
                            </div>
                            <span className="text-[10px] text-cyan-300">12 items</span>
                          </div>

                          <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/6 px-4 py-3">
                            <div className="flex items-center gap-3">
                              <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
                              <span className="text-xs text-slate-200">Stock alerts</span>
                            </div>
                            <span className="text-[10px] text-violet-300">3 alerts</span>
                          </div>

                          <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/6 px-4 py-3">
                            <div className="flex items-center gap-3">
                              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                              <span className="text-xs text-slate-200">Team status</span>
                            </div>
                            <span className="text-[10px] text-emerald-300">Online</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5">
                        <div className="flex items-center justify-between">
                          <div className="h-4 w-24 rounded-full bg-white/10" />
                          <div className="text-[10px] text-slate-400">Performance</div>
                        </div>

                        <div className="mt-5 space-y-4">
                          <div>
                            <div className="mb-1 flex items-center justify-between text-[10px] text-slate-400">
                              <span>Kitchen completion</span>
                              <span>82%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/8">
                              <div className="h-2 w-[82%] rounded-full bg-cyan-400" />
                            </div>
                          </div>

                          <div>
                            <div className="mb-1 flex items-center justify-between text-[10px] text-slate-400">
                              <span>Inventory sync</span>
                              <span>67%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/8">
                              <div className="h-2 w-[67%] rounded-full bg-violet-400" />
                            </div>
                          </div>

                          <div>
                            <div className="mb-1 flex items-center justify-between text-[10px] text-slate-400">
                              <span>Shift coverage</span>
                              <span>91%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/8">
                              <div className="h-2 w-[91%] rounded-full bg-emerald-400" />
                            </div>
                          </div>

                          <div>
                            <div className="mb-1 flex items-center justify-between text-[10px] text-slate-400">
                              <span>Orders queue</span>
                              <span>58%</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/8">
                              <div className="h-2 w-[58%] rounded-full bg-amber-400" />
                            </div>
                          </div>
                        </div>
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

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="glass-panel neon-border rounded-[2rem] p-8 md:p-12">
            <p className="text-xs tracking-[0.32em] text-sky-300 uppercase">
              Contact us
            </p>

            <div className="mt-4 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Let’s build something solid, useful and premium.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  UnderStack works on software systems, digital products and modern
                  business tools with a strong focus on clarity, performance and
                  refined user experience.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(37,99,235,0.28)] transition hover:-translate-y-0.5"
                  >
                    Discuss a project
                  </a>
                  <a
                    href={GASTROAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/5"
                  >
                    Visit GastroApp
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 block text-lg text-white transition hover:text-sky-300"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="mt-1 text-lg text-white">Aarhus, Denmark</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-1 text-lg text-white">
                    Software systems, UI / UX and product development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-sm text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-white">UnderStack</p>
            <p className="mt-2 max-w-sm leading-7 text-slate-400">
              Premium software systems, refined interfaces and modern digital products.
            </p>
          </div>

          <div>
            <p className="text-white">Navigation</p>
            <div className="mt-3 flex flex-col gap-2">
              <a className="transition hover:text-white" href="#about">
                About
              </a>
              <a className="transition hover:text-white" href="#services">
                Services
              </a>
              <a className="transition hover:text-white" href="#products">
                Products
              </a>
              <a className="transition hover:text-white" href="#technology">
                Technology
              </a>
            </div>
          </div>

          <div>
            <p className="text-white">Contact</p>
            <div className="mt-3 flex flex-col gap-2">
              <a className="transition hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
              <span>Aarhus, Denmark</span>
              <a className="transition hover:text-white" href="#contact">
                Contact us
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/8 pt-6 text-sm text-slate-500">
          © 2026 UnderStack. All rights reserved.
        </div>
      </footer>
    </div>
  );
}