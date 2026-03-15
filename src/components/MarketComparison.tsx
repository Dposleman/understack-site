import { motion } from "motion/react";

const comparisonData = [
  {
    label: "UnderStack",
    price: 4500,
    note: "Premium landing / starter website",
    accent: "from-cyan-400/95 via-sky-400/90 to-blue-500/95",
    glow: "shadow-[0_0_28px_rgba(56,189,248,0.22)]",
    ring: "ring-1 ring-cyan-400/20",
    badge: "bg-cyan-400/10 text-cyan-200 border border-cyan-300/20",
  },
  {
    label: "Freelancer",
    price: 12000,
    note: "Typical Danish starter package",
    accent: "from-violet-400/90 via-fuchsia-400/85 to-purple-500/90",
    glow: "shadow-[0_0_28px_rgba(168,85,247,0.18)]",
    ring: "ring-1 ring-violet-400/15",
    badge: "bg-violet-400/10 text-violet-200 border border-violet-300/20",
  },
  {
    label: "Agency",
    price: 30000,
    note: "Typical Danish agency project",
    accent: "from-amber-300/90 via-orange-400/85 to-rose-400/90",
    glow: "shadow-[0_0_28px_rgba(251,146,60,0.18)]",
    ring: "ring-1 ring-orange-300/15",
    badge: "bg-orange-400/10 text-orange-200 border border-orange-300/20",
  },
];

const maxPrice = Math.max(...comparisonData.map((item) => item.price));

function formatDKK(value: number) {
  return new Intl.NumberFormat("en-DK").format(value) + " DKK";
}

function savingsVs(referencePrice: number, understackPrice: number) {
  return Math.round(((referencePrice - understackPrice) / referencePrice) * 100);
}

export default function MarketComparison() {
  const understackPrice = comparisonData[0].price;
  const freelancerSavings = savingsVs(comparisonData[1].price, understackPrice);
  const agencySavings = savingsVs(comparisonData[2].price, understackPrice);

  return (
    <section
      id="pricing"
      className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-10"
    >
      <div className="absolute inset-x-0 top-10 -z-10 mx-auto h-72 w-[78%] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.10),transparent_68%)] blur-3xl" />

      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-white/55 backdrop-blur-xl">
          Market comparison
        </span>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Danish market pricing vs UnderStack
        </h2>

        <p className="mt-4 text-base leading-7 text-white/62 sm:text-lg">
          A premium site should feel expensive in quality, not in overhead.
          UnderStack is positioned to deliver a sharper result with a leaner structure.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/38">
                Entry-level website pricing
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Visual comparison
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-right backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                UnderStack starts at
              </div>
              <div className="mt-1 text-lg font-semibold text-cyan-200">
                {formatDKK(understackPrice)}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {comparisonData.map((item, index) => {
              const width = `${(item.price / maxPrice) * 100}%`;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`rounded-[24px] border border-white/8 bg-white/[0.03] p-4 sm:p-5 ${item.ring}`}
                >
                  <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] ${item.badge}`}
                        >
                          {item.label}
                        </span>
                        <span className="text-sm text-white/45">{item.note}</span>
                      </div>
                    </div>

                    <div className="text-lg font-semibold text-white">
                      {formatDKK(item.price)}
                    </div>
                  </div>

                  <div className="h-4 overflow-hidden rounded-full bg-white/6 ring-1 ring-inset ring-white/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width }}
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{ duration: 0.9, delay: 0.15 + index * 0.08 }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.accent} ${item.glow}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/8 bg-black/20 p-4 backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                UnderStack
              </div>
              <div className="mt-2 text-2xl font-semibold text-white">
                {formatDKK(understackPrice)}
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-black/20 p-4 backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                vs freelancer
              </div>
              <div className="mt-2 text-2xl font-semibold text-violet-200">
                {freelancerSavings}% less
              </div>
            </div>

            <div className="rounded-2xl border border-white/8 bg-black/20 p-4 backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                vs agency
              </div>
              <div className="mt-2 text-2xl font-semibold text-orange-200">
                {agencySavings}% less
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <p className="text-sm uppercase tracking-[0.24em] text-white/38">
            Why it matters
          </p>

          <h3 className="mt-3 text-2xl font-semibold text-white">
            Strong value without “cheap” positioning
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/62">
            This section works because it frames UnderStack as efficient, modern and
            commercially smart — not low-end. The message is that clients get a
            cleaner process, premium visual execution and better price-to-quality
            ratio.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Premium visual quality aligned with modern SaaS positioning",
              "A leaner delivery model than traditional agencies",
              "Clearer entry price for small businesses and founders",
              "Better conversion than a generic “contact for quote” message",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-3 backdrop-blur-xl"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.7)]" />
                <span className="text-sm leading-6 text-white/72">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[24px] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(8,145,178,0.10),rgba(255,255,255,0.03))] p-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/70">
              Recommended message
            </div>
            <p className="mt-3 text-sm leading-7 text-white/78">
              UnderStack delivers a more premium result than typical low-end
              freelance work, while staying far more efficient than the pricing
              structure of a traditional Danish agency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}