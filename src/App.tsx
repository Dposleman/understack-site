import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useState } from "react";
import logo from "./assets/understack-logo.png";
import MarketComparison from "./components/MarketComparison";
import VisitCounter from "./components/VisitCounter";

const GASTROAPP_URL = "https://gastroapp.dk";
const CONTACT_EMAIL = "gg.posleman@gmail.com";

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
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="#3178C6" />
      <path d="M8.2 9.2h7.6v1.8h-2.9v7.6h-1.9V11H8.2V9.2Z" fill="white" />
      <path
        d="M16.1 15.8c.3.5.7.8 1.4.8.6 0 1-.3 1-.7 0-.5-.4-.7-1.1-1l-.4-.2c-1.1-.5-1.9-1.1-1.9-2.3 0-1.1.9-2 2.2-2 .9 0 1.6.3 2.1 1.2l-1.4.9c-.3-.5-.6-.7-.8-.7-.4 0-.7.2-.7.6 0 .4.2.5.8.8l.4.2c1.3.6 2 1.1 2 2.5 0 1.4-1.1 2.2-2.6 2.2-1.4 0-2.3-.6-2.7-1.6l1.5-.7Z"
        fill="white"
      />
    </svg>
  );
}

function ViteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M20.6 5.3 12.8 19a1 1 0 0 1-1.7 0L3.4 5.3a.7.7 0 0 1 .8-1l7.9 1.4a1 1 0 0 0 .4 0l7.3-1.4a.7.7 0 0 1 .8 1Z"
        fill="url(#vite-gradient)"
      />
      <path d="m14.7 3.2-5.8 11 3.3-.7 5.2-8.9-2.7-1.4Z" fill="#FFD62E" />
      <defs>
        <linearGradient id="vite-gradient" x1="3" y1="3" x2="19" y2="19" gradientUnits="userSpaceOnUse">
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
        d="M12 2.8 19.3 7v10L12 21.2 4.7 17V7L12 2.8Z"
        fill="#539E43"
        stroke="#539E43"
        strokeWidth="1.2"
      />
      <path d="M12 6.4 8.1 8.6v4.6L12 15.4l3.9-2.2V8.6L12 6.4Z" fill="#0B1020" />
    </svg>
  );
}

function PostgresIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12.6 3.4c3.8 0 5.7 2.8 5.7 6.4 0 4.7-2.5 8.8-5.4 8.8-.8 0-1.4-.2-1.9-.6-.5.5-1.1.8-1.9.8-1.6 0-2.9-1.7-2.9-4.1 0-4.3 2.8-11.3 6.4-11.3Z"
        fill="#336791"
      />
      <circle cx="10.3" cy="9.2" r="1" fill="white" />
      <path d="M14.6 8.4c1.2 1 1.5 2.4.8 3.7" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M8.4 18.3a4.3 4.3 0 1 1 .8-8.5 5.4 5.4 0 0 1 10.3 2.1v.2a3.1 3.1 0 0 1-.2 6.2H8.4Z"
        stroke="#7DD3FC"
        strokeWidth="1.6"
        fill="rgba(125,211,252,0.08)"
      />
    </svg>
  );
}

function SoftwareIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="15" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 9.5h9M7.5 13h6M7.5 16.5h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function UiUxIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M6 5.5h12v13H6z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8.5h6M9 12h6M9 15.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 12h16M12 4c2.2 2.3 3.3 5 3.3 8S14.2 17.7 12 20c-2.2-2.3-3.3-5-3.3-8S9.8 6.3 12 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function StrategyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 18.5 10.2 13l3.2 2.8 5.6-7.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 8.5H19v2.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrecisionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EngineeringIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="m9.4 4.8 5.2 2.1v4.7l-5.2 2.1-5.2-2.1V6.9l5.2-2.1Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="m14.6 10.6 5.2 2.1v4.7l-5.2 2.1-5.2-2.1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="6" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="14" y="14.5" width="6" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 7.3h4a2 2 0 0 1 2 2v5.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PremiumIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="m12 4 2.2 4.4 4.8.7-3.5 3.4.8 4.8L12 15l-4.3 2.3.8-4.8L5 9.1l4.8-.7L12 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 9h8M8 12h5M8 15h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function VoiceIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="9" y="4.5" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v3M9 20h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M5 19.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="6" y="12" width="2.8" height="5.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="10.6" y="9" width="2.8" height="8.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="15.2" y="6" width="2.8" height="11.5" rx="1" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M8 5.5 4.5 7v11l3.5-1.5L12 18l4-1.5 3.5 1.5V7L16 5.5 12 7 8 5.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 5.5v11M12 7v11M16 5.5v11" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PricingCard({
  accent,
  title,
  subtitle,
  price,
  items,
  extras,
}: {
  accent: "blue" | "cyan" | "purple";
  title: string;
  subtitle: string;
  price: string;
  items: string[];
  extras: string[];
}) {
  const theme = {
    blue: {
      pill: "border-cyan-300/35 bg-cyan-300/12 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.18)]",
      border:
        "border-cyan-300/35 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_0_22px_rgba(34,211,238,0.16),0_0_70px_rgba(37,99,235,0.18),0_18px_60px_rgba(2,6,23,0.48)]",
      glow:
        "before:bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.20),transparent_55%)] after:bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.10),transparent_55%)]",
      price: "text-cyan-200",
      bullet: "text-cyan-300",
      extras: "text-cyan-200",
      hover:
        "hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_0_44px_rgba(34,211,238,0.16),0_0_120px_rgba(37,99,235,0.16),0_28px_80px_rgba(2,6,23,0.58)]",
    },
    cyan: {
      pill: "border-cyan-300/45 bg-cyan-300/14 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.22)]",
      border:
        "border-cyan-300/45 shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_0_26px_rgba(34,211,238,0.20),0_0_80px_rgba(6,182,212,0.20),0_18px_60px_rgba(2,6,23,0.48)]",
      glow:
        "before:bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_55%)] after:bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.10),transparent_55%)]",
      price: "text-cyan-200",
      bullet: "text-cyan-300",
      extras: "text-cyan-200",
      hover:
        "hover:-translate-y-1 hover:border-cyan-300/55 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.22),0_0_48px_rgba(34,211,238,0.20),0_0_128px_rgba(6,182,212,0.18),0_28px_80px_rgba(2,6,23,0.58)]",
    },
    purple: {
      pill: "border-fuchsia-300/40 bg-fuchsia-300/14 text-fuchsia-200 shadow-[0_0_18px_rgba(216,180,254,0.20)]",
      border:
        "border-fuchsia-300/40 shadow-[0_0_0_1px_rgba(216,180,254,0.14),0_0_26px_rgba(216,180,254,0.20),0_0_80px_rgba(168,85,247,0.22),0_18px_60px_rgba(2,6,23,0.48)]",
      glow:
        "before:bg-[radial-gradient(circle_at_top,rgba(216,180,254,0.22),transparent_55%)] after:bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.10),transparent_55%)]",
      price: "text-fuchsia-100",
      bullet: "text-fuchsia-300",
      extras: "text-fuchsia-200",
      hover:
        "hover:-translate-y-1 hover:border-fuchsia-300/52 hover:shadow-[0_0_0_1px_rgba(216,180,254,0.20),0_0_46px_rgba(216,180,254,0.18),0_0_124px_rgba(168,85,247,0.18),0_28px_80px_rgba(2,6,23,0.58)]",
    },
  }[accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className={`group relative overflow-hidden rounded-[30px] border bg-[rgba(8,12,24,0.76)] p-7 backdrop-blur-2xl transition-all duration-300 ${theme.border} ${theme.hover}`}
    >
      <div className={`pointer-events-none absolute inset-0 opacity-90 before:absolute before:inset-0 after:absolute after:inset-0 ${theme.glow}`} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative z-10">
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] ${theme.pill}`}>
          Website Package
        </span>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/62">{subtitle}</p>

        <div className={`mt-7 text-4xl font-semibold tracking-tight ${theme.price}`}>
          {price} <span className="text-base font-medium text-white/55">DKK</span>
        </div>

        <ul className="mt-7 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-white/76">
              <span className={`mt-[2px] ${theme.bullet}`}>●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-white/42">Optional Extras</p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/72">
            {extras.map((extra) => {
              const [first, ...rest] = extra.split(" ");
              return (
                <li key={extra} className="flex gap-3">
                  <span className={`mt-[2px] ${theme.extras}`}>●</span>
                  <span>
                    <span className="font-medium text-white">{first}</span>{" "}
                    {rest.join(" ")}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

function PricingCards() {
  return (
    <section id="packages" className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <SectionHeader
        eyebrow="Website packages"
        title="UnderStack — Web Development Pricing (Denmark)"
        description="Clear, premium websites for freelancers, small businesses and growing companies."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <PricingCard
          accent="blue"
          title="Basic Landing Website"
          subtitle="Ideal for freelancers or small businesses that need a serious online presence without unnecessary complexity."
          price="4,500"
          items={[
            "1 premium landing page",
            "Responsive design for mobile and desktop",
            "Contact form integration",
            "Google Maps integration",
            "Speed optimization",
            "Deployment on Vercel",
            "Basic technical SEO setup",
          ]}
          extras={[
            "Extra page +1,250 DKK",
            "Copywriting support +900 DKK",
            "Advanced SEO setup +1,500 DKK",
          ]}
        />

        <PricingCard
          accent="cyan"
          title="Business Website"
          subtitle="For companies that want a stronger brand presence, multiple sections and more conversion-focused structure."
          price="7,500"
          items={[
            "Up to 5 custom pages",
            "Premium visual system and refined UI",
            "Responsive layout across devices",
            "Contact and lead capture flows",
            "Basic analytics integration",
            "Technical SEO foundation",
            "Vercel deployment and launch support",
          ]}
          extras={[
            "Extra page +1,000 DKK",
            "Monthly SEO from 1,500 DKK",
            "Hosting support custom quote",
          ]}
        />

        <PricingCard
          accent="purple"
          title="Custom Website / Platform"
          subtitle="For brands or operators that need a more tailored structure, richer interactions or product-driven web presence."
          price="12,500+"
          items={[
            "Custom architecture and page structure",
            "Advanced interaction design",
            "Scalable component-based frontend",
            "Optional CMS or backend integration",
            "Analytics and conversion structure",
            "Premium QA and launch polish",
            "Project-specific technical planning",
          ]}
          extras={[
            "CMS integration custom quote",
            "Backend features custom quote",
            "Monthly iteration retainer custom quote",
          ]}
        />
      </div>
    </section>
  );
}

const services: {
  title: string;
  description: string;
  icon: ReactNode;
  glow: string;
  border: string;
  iconBg: string;
  hover: string;
}[] = [
  {
    title: "Custom software",
    description:
      "Operational systems, internal tools and business platforms engineered for clarity, speed and long-term scale.",
    icon: <SoftwareIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(96,165,250,0.10),0_0_30px_rgba(96,165,250,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(96,165,250,0.44),rgba(96,165,250,0.08),rgba(147,197,253,0.24))]",
    iconBg: "bg-[rgba(96,165,250,0.10)] border-[rgba(96,165,250,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-blue-300/25 hover:shadow-[0_0_0_1px_rgba(96,165,250,0.14),0_0_42px_rgba(96,165,250,0.16),0_0_110px_rgba(59,130,246,0.14),0_28px_80px_rgba(2,6,23,0.58)]",
  },
  {
    title: "UI / UX design",
    description:
      "Premium digital interfaces with refined interactions and strong visual hierarchy.",
    icon: <UiUxIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(167,139,250,0.10),0_0_30px_rgba(167,139,250,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(167,139,250,0.44),rgba(167,139,250,0.08),rgba(196,181,253,0.24))]",
    iconBg: "bg-[rgba(167,139,250,0.10)] border-[rgba(167,139,250,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-fuchsia-300/25 hover:shadow-[0_0_0_1px_rgba(167,139,250,0.14),0_0_42px_rgba(167,139,250,0.16),0_0_110px_rgba(168,85,247,0.14),0_28px_80px_rgba(2,6,23,0.58)]",
  },
  {
    title: "Web platforms",
    description:
      "Modern web applications built for performance, scalability and technical credibility.",
    icon: <WebIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(34,211,238,0.10),0_0_30px_rgba(34,211,238,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(34,211,238,0.44),rgba(34,211,238,0.08),rgba(103,232,249,0.24))]",
    iconBg: "bg-[rgba(34,211,238,0.10)] border-[rgba(34,211,238,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-cyan-300/28 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_0_42px_rgba(34,211,238,0.16),0_0_110px_rgba(6,182,212,0.14),0_28px_80px_rgba(2,6,23,0.58)]",
  },
  {
    title: "Product strategy",
    description:
      "Product thinking focused on real operational value and long-term product structure.",
    icon: <StrategyIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(52,211,153,0.10),0_0_30px_rgba(52,211,153,0.12),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(52,211,153,0.44),rgba(52,211,153,0.08),rgba(110,231,183,0.24))]",
    iconBg: "bg-[rgba(52,211,153,0.10)] border-[rgba(52,211,153,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-emerald-300/25 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.14),0_0_42px_rgba(52,211,153,0.16),0_0_110px_rgba(16,185,129,0.14),0_28px_80px_rgba(2,6,23,0.58)]",
  },
];

const technologies: {
  name: string;
  icon: ReactNode;
  glow: string;
  border: string;
  iconBg: string;
  hover: string;
}[] = [
  {
    name: "React",
    icon: <ReactIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(97,218,251,0.12),0_0_34px_rgba(97,218,251,0.14),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(97,218,251,0.50),rgba(97,218,251,0.08),rgba(97,218,251,0.30))]",
    iconBg: "bg-[rgba(97,218,251,0.10)] border-[rgba(97,218,251,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_0_0_1px_rgba(97,218,251,0.14),0_0_40px_rgba(97,218,251,0.16),0_0_100px_rgba(34,211,238,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(49,120,198,0.12),0_0_34px_rgba(49,120,198,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(49,120,198,0.52),rgba(49,120,198,0.08),rgba(125,211,252,0.28))]",
    iconBg: "bg-[rgba(49,120,198,0.10)] border-[rgba(49,120,198,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-blue-300/25 hover:shadow-[0_0_0_1px_rgba(49,120,198,0.14),0_0_40px_rgba(49,120,198,0.16),0_0_100px_rgba(59,130,246,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    name: "Vite",
    icon: <ViteIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(189,52,254,0.10),0_0_34px_rgba(189,52,254,0.14),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(65,209,255,0.46),rgba(189,52,254,0.12),rgba(189,52,254,0.34))]",
    iconBg: "bg-[rgba(189,52,254,0.08)] border-[rgba(189,52,254,0.16)]",
    hover:
      "hover:-translate-y-1 hover:border-fuchsia-300/25 hover:shadow-[0_0_0_1px_rgba(189,52,254,0.14),0_0_40px_rgba(189,52,254,0.16),0_0_100px_rgba(168,85,247,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    name: "Node.js",
    icon: <NodeIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(83,158,67,0.12),0_0_34px_rgba(83,158,67,0.14),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(83,158,67,0.46),rgba(83,158,67,0.10),rgba(134,239,172,0.24))]",
    iconBg: "bg-[rgba(83,158,67,0.10)] border-[rgba(83,158,67,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-emerald-300/25 hover:shadow-[0_0_0_1px_rgba(83,158,67,0.14),0_0_40px_rgba(83,158,67,0.16),0_0_100px_rgba(16,185,129,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    name: "PostgreSQL",
    icon: <PostgresIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(51,103,145,0.12),0_0_34px_rgba(51,103,145,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(51,103,145,0.50),rgba(51,103,145,0.10),rgba(125,211,252,0.24))]",
    iconBg: "bg-[rgba(51,103,145,0.10)] border-[rgba(51,103,145,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-sky-300/25 hover:shadow-[0_0_0_1px_rgba(51,103,145,0.14),0_0_40px_rgba(51,103,145,0.16),0_0_100px_rgba(56,189,248,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    name: "Cloud infrastructure",
    icon: <CloudIcon />,
    glow:
      "shadow-[0_0_0_1px_rgba(56,189,248,0.12),0_0_34px_rgba(56,189,248,0.16),0_18px_50px_rgba(2,6,23,0.42)]",
    border:
      "before:bg-[linear-gradient(135deg,rgba(56,189,248,0.50),rgba(56,189,248,0.10),rgba(125,211,252,0.28))]",
    iconBg: "bg-[rgba(56,189,248,0.10)] border-[rgba(56,189,248,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.14),0_0_40px_rgba(56,189,248,0.16),0_0_100px_rgba(34,211,238,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
];

const reasons: {
  title: string;
  text: string;
  icon: ReactNode;
  iconBg: string;
  hover: string;
}[] = [
  {
    title: "Design-led execution",
    text: "We care about visual precision, spacing, interaction quality and product polish from the start.",
    icon: <PrecisionIcon />,
    iconBg: "bg-[rgba(56,189,248,0.10)] border-[rgba(56,189,248,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-cyan-300/24 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.14),0_0_36px_rgba(56,189,248,0.14),0_0_90px_rgba(34,211,238,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    title: "Engineering discipline",
    text: "We build with structure, maintainability and long-term scalability in mind.",
    icon: <EngineeringIcon />,
    iconBg: "bg-[rgba(96,165,250,0.10)] border-[rgba(96,165,250,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-blue-300/24 hover:shadow-[0_0_0_1px_rgba(96,165,250,0.14),0_0_36px_rgba(96,165,250,0.14),0_0_90px_rgba(59,130,246,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    title: "Operational thinking",
    text: "Our products are shaped around real workflows, real teams and real business needs.",
    icon: <WorkflowIcon />,
    iconBg: "bg-[rgba(34,211,238,0.10)] border-[rgba(34,211,238,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-cyan-300/24 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_0_36px_rgba(34,211,238,0.14),0_0_90px_rgba(6,182,212,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    title: "Premium positioning",
    text: "Everything is designed to feel sharp, modern, credible and enterprise-ready.",
    icon: <PremiumIcon />,
    iconBg: "bg-[rgba(167,139,250,0.10)] border-[rgba(167,139,250,0.18)]",
    hover:
      "hover:-translate-y-1 hover:border-fuchsia-300/24 hover:shadow-[0_0_0_1px_rgba(167,139,250,0.14),0_0_36px_rgba(167,139,250,0.14),0_0_90px_rgba(168,85,247,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
];

const serviceOsPillars: {
  title: string;
  text: string;
  icon: ReactNode;
  tone: string;
  hover: string;
}[] = [
  {
    title: "AI Order Assistant",
    text: "The app listens to the guest conversation and suggests items automatically based on the menu.",
    icon: <ServiceIcon />,
    tone: "border-cyan-300/18 bg-cyan-300/8 text-cyan-200",
    hover:
      "hover:-translate-y-1 hover:border-cyan-300/28 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_0_36px_rgba(34,211,238,0.14),0_0_90px_rgba(34,211,238,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    title: "AI Table Awareness",
    text: "Knows which table is waiting, how long they have waited and whether they need attention.",
    icon: <PrecisionIcon />,
    tone: "border-blue-300/18 bg-blue-300/8 text-blue-200",
    hover:
      "hover:-translate-y-1 hover:border-blue-300/28 hover:shadow-[0_0_0_1px_rgba(96,165,250,0.14),0_0_36px_rgba(96,165,250,0.14),0_0_90px_rgba(59,130,246,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    title: "Smart Timing System",
    text: "AI analyzes kitchen timing, restaurant flow and table status, then tells the server what to do next.",
    icon: <WorkflowIcon />,
    tone: "border-emerald-300/18 bg-emerald-300/8 text-emerald-200",
    hover:
      "hover:-translate-y-1 hover:border-emerald-300/28 hover:shadow-[0_0_0_1px_rgba(52,211,153,0.14),0_0_36px_rgba(52,211,153,0.14),0_0_90px_rgba(16,185,129,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    title: "AI Upselling Engine",
    text: "Suggests upsells in real time while the service interaction is happening.",
    icon: <StrategyIcon />,
    tone: "border-fuchsia-300/18 bg-fuchsia-300/8 text-fuchsia-200",
    hover:
      "hover:-translate-y-1 hover:border-fuchsia-300/28 hover:shadow-[0_0_0_1px_rgba(167,139,250,0.14),0_0_36px_rgba(167,139,250,0.14),0_0_90px_rgba(168,85,247,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    title: "Table Memory System",
    text: "Remembers returning guests and helps bring continuity to the dining experience.",
    icon: <PremiumIcon />,
    tone: "border-sky-300/18 bg-sky-300/8 text-sky-200",
    hover:
      "hover:-translate-y-1 hover:border-sky-300/28 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.14),0_0_36px_rgba(56,189,248,0.14),0_0_90px_rgba(14,165,233,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    title: "Voice Interface",
    text: "Servers can add items and interact with the system by voice while staying focused on the floor.",
    icon: <VoiceIcon />,
    tone: "border-violet-300/18 bg-violet-300/8 text-violet-200",
    hover:
      "hover:-translate-y-1 hover:border-violet-300/28 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.14),0_0_36px_rgba(139,92,246,0.14),0_0_90px_rgba(124,58,237,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    title: "Performance Analytics",
    text: "Structured analytics for waiter performance, service timing and floor execution.",
    icon: <AnalyticsIcon />,
    tone: "border-cyan-300/18 bg-cyan-300/8 text-cyan-200",
    hover:
      "hover:-translate-y-1 hover:border-cyan-300/28 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_0_36px_rgba(34,211,238,0.14),0_0_90px_rgba(34,211,238,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
  },
  {
    title: "AI Planning Tables",
    text: "Builds table plans from exact restaurant dimensions, reservations, time slots, party sizes and walk-in availability, with exportable floor plans.",
    icon: <MapIcon />,
    tone: "border-amber-300/18 bg-amber-300/8 text-amber-200",
    hover:
      "hover:-translate-y-1 hover:border-amber-300/28 hover:shadow-[0_0_0_1px_rgba(251,191,36,0.14),0_0_36px_rgba(251,191,36,0.14),0_0_90px_rgba(245,158,11,0.12),0_26px_70px_rgba(2,6,23,0.58)]",
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
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/55 backdrop-blur-xl">
        {eyebrow}
      </span>
      <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-white/62 sm:text-lg">{description}</p>
    </div>
  );
}

export default function App() {
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });

  function handleHeroMove(event: React.MouseEvent<HTMLDivElement>) {
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
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#050816]" />

        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(59,130,246,0.08),transparent_22%),radial-gradient(circle_at_78%_62%,rgba(168,85,247,0.07),transparent_24%),radial-gradient(circle_at_22%_82%,rgba(16,185,129,0.05),transparent_20%)]" />

        <div className="absolute left-[-12rem] top-[-8rem] h-[32rem] w-[32rem] rounded-full bg-cyan-400/8 blur-[140px]" />
        <div className="absolute right-[-10rem] top-[8rem] h-[28rem] w-[28rem] rounded-full bg-blue-500/8 blur-[130px]" />
        <div className="absolute bottom-[-8rem] left-[18%] h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/7 blur-[130px]" />

        <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[24rem] bg-[linear-gradient(180deg,transparent,rgba(3,7,18,0.42))]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#050816]/70 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="UnderStack" className="h-10 w-auto object-contain" />
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] text-white">UnderStack</div>
              <div className="text-[11px] uppercase tracking-[0.28em] text-white/40">
                AI Systems · Software Engineering
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-white/65 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#packages" className="transition hover:text-white">Packages</a>
            <a href="#products" className="transition hover:text-white">Products</a>
            <a href="#pipeline" className="transition hover:text-white">In development</a>
            <a href="#technology" className="transition hover:text-white">Technology</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-14 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[36rem] w-[90%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.08),transparent_58%)] blur-3xl" />

          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-cyan-200"
              >
                Advanced software systems
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                We build premium digital products for modern companies.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg"
              >
                UnderStack creates high-quality software systems, operational platforms and
                refined digital products with strong engineering foundations and modern
                interface design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="#products"
                  className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/14"
                >
                  View products
                </a>
                <a
                  href="#pipeline"
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-white/88 transition hover:bg-white/8"
                >
                  Explore what’s next
                </a>
              </motion.div>

              <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
                {[
                  { label: "Status", value: "Active" },
                  { label: "Products", value: "1" },
                  { label: "Next project", value: "1" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.24 + index * 0.06 }}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
                  >
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/40">
                      {item.label}
                    </div>
                    <div className="mt-3 text-2xl font-semibold text-white">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              onMouseMove={handleHeroMove}
              onMouseLeave={resetHeroMove}
              className="relative"
            >
              <div className="pointer-events-none absolute inset-[-12%] -z-10 rounded-[40px] bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_58%)] blur-3xl" />

              <div
                className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,28,0.92),rgba(6,10,22,0.82))] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-7"
                style={{
                  transform: `perspective(1400px) rotateX(${heroTilt.x}deg) rotateY(${heroTilt.y}deg)`,
                  transition: "transform 140ms ease-out",
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.10),transparent_30%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-cyan-200/20 to-transparent" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_18%,transparent_82%,rgba(255,255,255,0.02))]" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.22em] text-white/38">
                        Company overview
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">UnderStack</h3>
                    </div>
                    <span className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-emerald-200">
                      Live
                    </span>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/38">
                        Focus
                      </div>
                      <div className="mt-3 text-lg font-medium text-white">
                        AI systems, software engineering, modern infrastructure
                      </div>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                      <div className="text-[11px] uppercase tracking-[0.22em] text-white/38">
                        Product
                      </div>
                      <div className="mt-3 text-lg font-medium text-white">GastroApp</div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[24px] border border-cyan-300/14 bg-cyan-300/8 p-5">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/76">
                      Positioning
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/74">
                      Premium execution, leaner structure, sharper delivery. UnderStack is
                      built to give companies a more sophisticated result without the
                      overhead of a traditional agency model.
                    </p>
                  </div>

                  <div className="mt-6 rounded-[24px] border border-fuchsia-300/12 bg-fuchsia-300/[0.06] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.22em] text-fuchsia-200/75">
                          In development
                        </div>
                        <div className="mt-2 text-lg font-semibold text-white">ServiceOS</div>
                      </div>
                      <span className="rounded-full border border-fuchsia-300/18 bg-fuchsia-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-fuchsia-200">
                        Next
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/72">
                      AI-native service operating system for waitstaff: order assistance,
                      table awareness, voice actions, upselling and floor intelligence.
                    </p>
                  </div>

                  <div className="mt-6">
                    <VisitCounter />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="About"
            title="A software studio built around clarity and execution"
            description="UnderStack focuses on software products, premium web experiences and operational systems that feel modern, credible and commercially sharp."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
              className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/18 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_0_36px_rgba(34,211,238,0.12),0_0_90px_rgba(34,211,238,0.10),0_24px_70px_rgba(2,6,23,0.58)]"
            >
              <h3 className="text-xl font-semibold text-white">What we build</h3>
              <p className="mt-4 text-sm leading-8 text-white/68">
                We design and engineer products that combine robust frontend execution,
                structured systems thinking and premium visual quality. The goal is not
                just software that works, but software that looks trustworthy and feels
                strategically positioned.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-300/18 hover:shadow-[0_0_0_1px_rgba(167,139,250,0.12),0_0_36px_rgba(167,139,250,0.12),0_0_90px_rgba(168,85,247,0.10),0_24px_70px_rgba(2,6,23,0.58)]"
            >
              <h3 className="text-xl font-semibold text-white">How we approach it</h3>
              <p className="mt-4 text-sm leading-8 text-white/68">
                UnderStack keeps process lean and quality high. That means better
                communication, more precise design decisions, stronger product direction
                and technical implementation that scales cleanly over time.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Services"
            title="Built for companies that want more than a generic website"
            description="We help brands and operators create digital products that are useful internally, credible externally and structured for long-term growth."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-[30px] border border-white/8 bg-[rgba(8,12,24,0.76)] p-6 backdrop-blur-2xl transition-all duration-300 ${service.glow} ${service.hover}`}
              >
                <div className={`pointer-events-none absolute inset-0 opacity-90 before:absolute before:inset-0 ${service.border}`} />
                <div className="relative z-10">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${service.iconBg} text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">{service.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <MarketComparison />

        <PricingCards />

        <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Why UnderStack"
            title="Premium quality with stronger price-to-value ratio"
            description="We are not trying to imitate a big agency. We are building a sharper model: more direct, more disciplined and more commercially efficient."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason, index) => (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl transition-all duration-300 ${reason.hover}`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${reason.iconBg} text-white`}>
                  {reason.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{reason.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Products"
            title="Current flagship product"
            description="UnderStack is already building software products for real operational environments."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.55 }}
            className="mt-14 overflow-hidden rounded-[34px] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(10,14,28,0.92),rgba(6,10,22,0.82))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/24 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.14),0_0_40px_rgba(34,211,238,0.14),0_0_100px_rgba(6,182,212,0.12),0_28px_80px_rgba(2,6,23,0.58)]"
          >
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <span className="inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-cyan-200">
                  Featured product
                </span>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                  GastroApp
                </h3>
                <p className="mt-4 text-sm leading-8 text-white/68">
                  GastroApp is an operational platform for restaurants covering kitchen
                  management, inventory, production structure, internal workflow clarity
                  and team coordination.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-white/74">
                  <li className="flex gap-3">
                    <span className="text-cyan-300">●</span>
                    <span>Kitchen operations and production planning</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-300">●</span>
                    <span>Inventory visibility and workflow structure</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-cyan-300">●</span>
                    <span>Designed for real-world hospitality operations</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <a
                    href={GASTROAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/14"
                  >
                    Visit GastroApp
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Restaurant operations",
                  "Inventory structure",
                  "Production planning",
                  "Team coordination",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 text-sm font-medium text-white/80 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/18 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.10),0_0_28px_rgba(34,211,238,0.10),0_0_70px_rgba(6,182,212,0.08),0_20px_60px_rgba(2,6,23,0.56)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="pipeline" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="In development"
            title="ServiceOS — next generation service operating system"
            description="A premium AI-first floor system for waitstaff, dining rooms and service operations."
          />

          <div className="mt-14 overflow-hidden rounded-[34px] border border-fuchsia-300/14 bg-[linear-gradient(180deg,rgba(12,14,30,0.94),rgba(7,10,22,0.84))] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <span className="inline-flex items-center rounded-full border border-fuchsia-300/18 bg-fuchsia-300/8 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-fuchsia-200">
                  Upcoming product
                </span>

                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">
                  ServiceOS
                </h3>

                <p className="mt-4 text-sm leading-8 text-white/70">
                  ServiceOS is designed for the front of house: a real-time operating layer
                  for service teams that combines AI assistance, table awareness, timing
                  intelligence, floor planning and performance analytics.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-white/42">
                      Core direction
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/72">
                      ServiceOS is not just a waiter app. It is a service intelligence
                      system designed to help staff know what to do, when to do it and
                      how to improve the guest experience in real time.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-cyan-300/12 bg-cyan-300/[0.06] p-5">
                    <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/76">
                      High-value differentiators
                    </div>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-white/74">
                      <li>• Real-time AI support during live service</li>
                      <li>• Floor awareness instead of static POS logic</li>
                      <li>• Voice-driven interaction for faster execution</li>
                      <li>• Table planning with reservations, dimensions and walk-ins</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {serviceOsPillars.map((item) => (
                  <div
                    key={item.title}
                    className={`group rounded-[26px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition-all duration-300 ${item.hover}`}
                  >
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${item.tone}`}>
                      {item.icon}
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-white">{item.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="technology" className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
          <SectionHeader
            eyebrow="Technology"
            title="Modern stack, serious execution"
            description="We build with proven tools that support maintainability, speed, scalability and modern product development."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech, index) => (
              <motion.article
                key={tech.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/8 bg-[rgba(8,12,24,0.76)] p-6 backdrop-blur-2xl transition-all duration-300 ${tech.glow} ${tech.hover}`}
              >
                <div className={`pointer-events-none absolute inset-0 opacity-90 before:absolute before:inset-0 ${tech.border}`} />
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${tech.iconBg}`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-7xl px-6 pb-28 pt-24 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 0.55 }}
            className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,28,0.94),rgba(6,10,22,0.86))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.44)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_0_36px_rgba(34,211,238,0.12),0_0_100px_rgba(6,182,212,0.10),0_26px_70px_rgba(2,6,23,0.58)] sm:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/55">
                  Contact
                </span>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Let’s build something sharp.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/64">
                  If you want a premium site, a custom platform or a product with stronger
                  strategic positioning, UnderStack is built for that conversation.
                </p>
              </div>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/18 bg-cyan-300/10 px-7 py-3.5 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/14"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}