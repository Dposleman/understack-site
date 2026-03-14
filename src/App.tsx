import { motion } from "motion/react";
import type { ReactNode, MouseEvent } from "react";
import { useState } from "react";
import logo from "./assets/understack-logo.png";
import VisitCounter from "./components/VisitCounter";

const GASTROAPP_URL = "https://gastroapp.dk";
const CONTACT_EMAIL = "gg.posleman@gmail.com";

function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="1.9" fill="#61DAFB" />
      <ellipse
        cx="12"
        cy="12"
        rx="9"
        ry="3.9"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />
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
        d="M8.1 9.1h8.1v1.8h-3.05v8h-2v-8H8.1V9.1Zm8.35 4.7c.55.36 1.1.65 1.1 1.42 0 .95-.73 1.54-1.92 1.54-.94 0-1.64-.31-2.33-.94l1.1-1.32c.38.35.79.58 1.22.58.33 0 .54-.12.54-.37 0-.28-.22-.4-.87-.73-.98-.47-1.82-.99-1.82-2.2 0-1.4 1.12-2.24 2.69-2.24.95 0 1.7.23 2.33.76l-1 1.35a2.4 2.4 0 0 0-1.35-.5c-.31 0-.5.14-.5.35 0 .26.27.4.81.7Z"
        fill="white"
      />
    </svg>
  );
}

function ViteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M21.8 5.5 13.5 20.1c-.3.5-1 .5-1.3 0L2.2 5.5c-.3-.5.1-1.1.7-1l9.2 1.6c.1 0 .3 0 .4 0l8.6-1.6c.6-.1 1 .5.7 1Z"
        fill="url(#vite-a)"
      />
      <path
        d="M16.8 3 10.7 4.2a.4.4 0 0 0-.33.31L9.2 10.4c-.03.18.2.3.34.17l1.7-1.55a.4.4 0 0 1 .65.19l1.3 4.48c.08.28.46.31.58.05l.8-1.7a.4.4 0 0 1 .5-.2l1.58.62c.18.07.37-.08.33-.27L15.8 3.34A.4.4 0 0 0 16.8 3Z"
        fill="url(#vite-b)"
      />
      <defs>
        <linearGradient id="vite-a" x1="2" y1="4" x2="20" y2="19" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-b" x1="9" y1="3" x2="15.5" y2="13.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA83" />
          <stop offset="0.5" stopColor="#FFDD35" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 2.6 19.5 7v10L12 21.4 4.5 17V7L12 2.6Z"
        fill="#539E43"
      />
      <path
        d="M12 5.1 6.6 8.2v7.6l5.4 3.1 5.4-3.1V8.2L12 5.1Z"
        fill="#6BBF59"
      />
      <path
        d="M10.6 9.4v5.2M13.4 9.4v5.2M10.6 12h2.8"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12.3 3.4c-3.2 0-5.9 2.4-5.9 6v3.2c0 2.7 1.8 4.6 4.3 4.6.5 0 1.1-.1 1.6-.3l-.2 3.2c0 .5.4.9.9.8.8-.2 1.8-.7 2.2-1.5.3-.5.5-1.3.7-2.1 2.2-.4 3.8-2.3 3.8-4.7V9.4c0-3.6-2.4-6-7.4-6Z"
        fill="#336791"
      />
      <path
        d="M9.1 10.1c0-.8.6-1.5 1.4-1.5s1.4.7 1.4 1.5-.6 1.5-1.4 1.5-1.4-.7-1.4-1.5Zm4.7-.1c0-.7.5-1.3 1.2-1.3s1.2.6 1.2 1.3-.5 1.3-1.2 1.3-1.2-.6-1.2-1.3Z"
        fill="white"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M7.5 18.5a4 4 0 0 1-.3-8 5.5 5.5 0 0 1 10.6-1.2A3.8 3.8 0 1 1 18 18.5H7.5Z"
        fill="#38BDF8"
      />
    </svg>
  );
}

function SoftwareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8.5 10 6.5 12l2 2M15.5 10l2 2-2 2M13.4 9l-2.8 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UiUxIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8h4v4H8zM14 8h2M14 11h2M8 15h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h16M12 4c2.5 2.2 4 5 4 8s-1.5 5.8-4 8c-2.5-2.2-4-5-4-8s1.5-5.8 4-8Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M5 18V8m7 10V5m7 13v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="5" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="3" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="19" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function PrecisionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2.8v3.1M12 18.1v3.1M21.2 12h-3.1M5.9 12H2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function EngineeringIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="m13.9 4.7 1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3 1-2.1ZM6.2 13.7l1.2 2.4 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4 1.2-2.4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="6" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14.5" y="5" width="6" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9" y="15" width="6" height="4" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 7h5M12 9.2v4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PremiumIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M6 18.5h12l-1.4-8.2-3.1 2-1.5-4.8-1.5 4.8-3.1-2L6 18.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
  glow: string;
  border: string;
  iconBg: string;
};

type Tech = {
  name: string;
  icon: ReactNode;
  glow: string;
  border: string;
  iconBg: string;
};

type Reason = {
  title: string;
  text: string;
  icon: ReactNode;
  iconBg: string;
};

const services: Service[] = [
  {
    title: "Custom software",
    description:
      "Operational systems, internal tools and business platforms engineered for clarity, speed and long-term scale.",
    icon: <SoftwareIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(96,165,250,0.10),0_0_30px_rgba(96,165,250,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(96,165,250,0.46),rgba(96,165,250,0.08),rgba(147,197,253,0.24))]",
    iconBg: "bg-[rgba(96,165,250,0.10)] border-[rgba(96,165,250,0.18)]",
  },
  {
    title: "UI / UX design",
    description:
      "Premium digital interfaces with refined interactions and strong visual hierarchy.",
    icon: <UiUxIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(167,139,250,0.10),0_0_30px_rgba(167,139,250,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(167,139,250,0.46),rgba(167,139,250,0.08),rgba(196,181,253,0.24))]",
    iconBg: "bg-[rgba(167,139,250,0.10)] border-[rgba(167,139,250,0.18)]",
  },
  {
    title: "Web platforms",
    description:
      "Modern web applications built for performance, scalability and technical credibility.",
    icon: <WebIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(34,211,238,0.10),0_0_30px_rgba(34,211,238,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(34,211,238,0.46),rgba(34,211,238,0.08),rgba(103,232,249,0.24))]",
    iconBg: "bg-[rgba(34,211,238,0.10)] border-[rgba(34,211,238,0.18)]",
  },
  {
    title: "Product strategy",
    description:
      "Product thinking focused on real operational value and long-term product structure.",
    icon: <StrategyIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(52,211,153,0.10),0_0_30px_rgba(52,211,153,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(52,211,153,0.46),rgba(52,211,153,0.08),rgba(110,231,183,0.24))]",
    iconBg: "bg-[rgba(52,211,153,0.10)] border-[rgba(52,211,153,0.18)]",
  },
];

const technologies: Tech[] = [
  {
    name: "React",
    icon: <ReactIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(97,218,251,0.12),0_0_34px_rgba(97,218,251,0.14),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(97,218,251,0.55),rgba(97,218,251,0.08),rgba(97,218,251,0.32))]",
    iconBg: "bg-[rgba(97,218,251,0.10)] border-[rgba(97,218,251,0.18)]",
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(49,120,198,0.12),0_0_34px_rgba(49,120,198,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(49,120,198,0.55),rgba(49,120,198,0.08),rgba(125,211,252,0.28))]",
    iconBg: "bg-[rgba(49,120,198,0.10)] border-[rgba(49,120,198,0.18)]",
  },
  {
    name: "Vite",
    icon: <ViteIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(189,52,254,0.10),0_0_34px_rgba(189,52,254,0.14),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(65,209,255,0.48),rgba(189,52,254,0.12),rgba(189,52,254,0.36))]",
    iconBg: "bg-[rgba(189,52,254,0.08)] border-[rgba(189,52,254,0.16)]",
  },
  {
    name: "Node.js",
    icon: <NodeIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(83,158,67,0.12),0_0_34px_rgba(83,158,67,0.14),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(83,158,67,0.48),rgba(83,158,67,0.10),rgba(134,239,172,0.24))]",
    iconBg: "bg-[rgba(83,158,67,0.10)] border-[rgba(83,158,67,0.18)]",
  },
  {
    name: "PostgreSQL",
    icon: <PostgresIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(51,103,145,0.12),0_0_34px_rgba(51,103,145,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(51,103,145,0.52),rgba(51,103,145,0.10),rgba(125,211,252,0.24))]",
    iconBg: "bg-[rgba(51,103,145,0.10)] border-[rgba(51,103,145,0.18)]",
  },
  {
    name: "Cloud infrastructure",
    icon: <CloudIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(56,189,248,0.12),0_0_34px_rgba(56,189,248,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(56,189,248,0.52),rgba(56,189,248,0.10),rgba(125,211,252,0.28))]",
    iconBg: "bg-[rgba(56,189,248,0.10)] border-[rgba(56,189,248,0.18)]",
  },
];

const reasons: Reason[] = [
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
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.32em] text-sky-200/80 backdrop-blur-md">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
        {description}
      </p>
    </div>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_12px_40px_rgba(2,6,23,0.28)] backdrop-blur-xl">
      <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] shadow-[0_30px_90px_rgba(2,6,23,0.45)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });

  function handleHeroMove(event: MouseEvent<HTMLDivElement>) {
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
    <div className="min-h-screen bg-[#030712] text-slate-200 antialiased">
      <div className="fixed inset-0 -z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(168,85,247,0.14),transparent_24%),radial-gradient(circle_at_20%_85%,rgba(34,211,238,0.12),transparent_26%),linear-gradient(180deg,#030712_0%,#020617_48%,#030712_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(3,7,18,0.55)] backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_10px_28px_rgba(2,6,23,0.35)]">
              <img src={logo} alt="UnderStack logo" className="h-7 w-7 object-contain" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] text-white">
                UNDERSTACK
              </div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                Software Engineering
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
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

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 transition hover:border-sky-300/35 hover:bg-sky-400/15"
          >
            Contact us
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-6 pb-18 pt-12 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65 }}
              >
                <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-sky-200/80 shadow-[0_12px_30px_rgba(2,6,23,0.32)] backdrop-blur-xl">
                  Advanced software systems
                </div>

                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                  We build premium digital products for modern companies.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  UnderStack creates high-quality software systems, operational platforms
                  and refined digital products with strong engineering foundations and
                  modern interface design.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#products"
                    className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                  >
                    View products
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.08]"
                  >
                    Contact us
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    Design-led
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    Scalable systems
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                    Product thinking
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.08 }}
              onMouseMove={handleHeroMove}
              onMouseLeave={resetHeroMove}
              style={{
                transform: `perspective(1600px) rotateX(${heroTilt.x}deg) rotateY(${heroTilt.y}deg)`,
              }}
              className="transition-transform duration-150"
            >
              <GlassCard className="relative overflow-hidden p-6">
                <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                        Company overview
                      </div>
                      <div className="mt-2 text-2xl font-semibold text-white">
                        UnderStack
                      </div>
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                      Active
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <StatCard label="Products" value="1" />
                    <StatCard label="Services" value="4" />
                    <StatCard label="Location" value="Aarhus" />
                    <StatCard label="Visits" value={<VisitCounter />} />
                  </div>

                  <div className="mt-6 rounded-3xl border border-white/10 bg-[#020617]/70 p-5">
                    <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                      Focus
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">
                      Premium software systems
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                          Current product
                        </div>
                        <div className="mt-2 text-base font-semibold text-white">
                          GastroApp
                        </div>
                        <a
                          href={GASTROAPP_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1.5 text-xs font-medium text-sky-100 transition hover:bg-sky-400/15"
                        >
                          Open
                        </a>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                          Contact
                        </div>
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="mt-2 block break-all text-base font-semibold text-white transition hover:text-sky-200"
                        >
                          {CONTACT_EMAIL}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="About"
              title="A software studio shaped by product quality."
              description="UnderStack combines engineering structure, premium interface design and practical product thinking to create business tools that feel modern, reliable and commercially strong."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[26px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_50px_rgba(2,6,23,0.34)] backdrop-blur-xl"
                >
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${reason.iconBg} text-white`}
                  >
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{reason.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Services"
              title="What we build"
              description="From branded interfaces to internal business platforms, our work is focused on software products that are both beautiful and operationally useful."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className={`relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-7 backdrop-blur-2xl ${service.glow}`}
                >
                  <div className={`absolute inset-0 opacity-80 ${service.border}`} />
                  <div className="relative">
                    <div
                      className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl border text-white ${service.iconBg}`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Featured product"
              title="GastroApp"
              description="A restaurant operations platform designed to structure kitchen workflows, inventory, production tracking and staff coordination."
            />

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <GlassCard className="p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                    Live product
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                    Restaurant operations
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                  Built to reduce friction in real restaurant workflows.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                  GastroApp is shaped around real operational needs: clearer kitchen
                  structure, stronger visibility, more consistent stock control and better
                  staff coordination across daily service.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    "Kitchen workflow structure",
                    "Inventory control",
                    "Staff coordination",
                    "Operational visibility",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href={GASTROAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                  >
                    Open GastroApp
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="overflow-hidden">
                <div className="border-b border-white/10 px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.28em] text-slate-400">
                        Dashboard
                      </div>
                      <div className="mt-2 text-xl font-semibold text-white">
                        Operational snapshot
                      </div>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                      Service live
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 p-6 sm:grid-cols-2">
                  <StatCard label="Runs" value="24" />
                  <StatCard label="Items" value="186" />
                  <StatCard label="Staff" value="11" />
                  <StatCard label="Prep list" value="12 items" />
                </div>

                <div className="border-t border-white/10 px-6 py-6">
                  <div className="grid gap-4">
                    {[
                      { label: "Stock alerts", value: "3 alerts", width: "w-[38%]" },
                      { label: "Team status", value: "Online", width: "w-[82%]" },
                      { label: "Kitchen completion", value: "82%", width: "w-[82%]" },
                      { label: "Inventory sync", value: "67%", width: "w-[67%]" },
                      { label: "Shift coverage", value: "91%", width: "w-[91%]" },
                      { label: "Orders queue", value: "58%", width: "w-[58%]" },
                    ].map((metric) => (
                      <div key={metric.label}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-slate-300">{metric.label}</span>
                          <span className="font-medium text-white">{metric.value}</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/8">
                          <div
                            className={`h-2 rounded-full bg-[linear-gradient(90deg,rgba(56,189,248,0.95),rgba(139,92,246,0.92))] ${metric.width}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="technology" className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Technology"
              title="Modern tools, solid foundations"
              description="Our stack is selected for reliability, speed of execution and long-term maintainability across modern web products."
            />

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className={`relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl ${tech.glow}`}
                >
                  <div className={`absolute inset-0 opacity-80 ${tech.border}`} />
                  <div className="relative flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-white ${tech.iconBg}`}
                    >
                      {tech.icon}
                    </div>
                    <div className="text-lg font-semibold text-white">{tech.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <GlassCard className="overflow-hidden p-8 md:p-10">
              <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-sky-200/80">
                    Contact us
                  </div>

                  <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Let’s build something solid, useful and premium.
                  </h2>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                    UnderStack works on software systems, digital products and modern
                    business tools with a strong focus on clarity, performance and refined
                    user experience.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                    >
                      Discuss a project
                    </a>
                    <a
                      href={GASTROAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                    >
                      Visit GastroApp
                    </a>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <StatCard label="Email" value={
                    <a href={`mailto:${CONTACT_EMAIL}`} className="break-all hover:text-sky-200">
                      {CONTACT_EMAIL}
                    </a>
                  } />
                  <StatCard label="Location" value="Aarhus, Denmark" />
                  <StatCard label="Focus" value="Software systems, UI / UX and product development" />
                  <StatCard label="Brand" value="UnderStack" />
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto_auto] md:items-start">
          <div>
            <div className="text-lg font-semibold text-white">UnderStack</div>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              Premium software systems, refined interfaces and modern digital products.
            </p>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
              Navigation
            </div>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#products" className="transition hover:text-white">Products</a>
              <a href="#technology" className="transition hover:text-white">Technology</a>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
              Contact
            </div>
            <div className="mt-4 grid gap-2 text-sm text-slate-300">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all transition hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
              <div>Aarhus, Denmark</div>
              <a href="#contact" className="transition hover:text-white">
                Contact us
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-slate-500">
          © 2026 UnderStack. All rights reserved.
        </div>
      </footer>
    </div>
  );
}