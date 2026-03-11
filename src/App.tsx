import { motion } from "motion/react";

const services = [
  {
    title: "Custom software",
    description:
      "Business platforms and operational systems engineered for real-world workflows, performance, and scale.",
  },
  {
    title: "UI / UX design",
    description:
      "High-end interfaces with product thinking, clean interaction models, and premium visual execution.",
  },
  {
    title: "Web platforms",
    description:
      "Fast, modern websites and applications built to communicate trust, clarity, and technical maturity.",
  },
  {
    title: "Product strategy",
    description:
      "From concept to launch, we shape products with a focus on usefulness, adoption, and long-term value.",
  },
];

const products = [
  {
    name: "GastroApp",
    status: "Live product",
    description:
      "Restaurant operations platform built to support kitchen workflows, staff coordination, inventory control, and daily management.",
  },
];

const pipeline = [
  {
    name: "Under development",
    description:
      "A growing set of internal software products currently being defined, designed, and prepared for launch under the UnderStack ecosystem.",
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
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-medium tracking-[0.24em] text-slate-500 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]">
              <span className="text-sm font-semibold tracking-[0.2em] text-slate-900">
                U
              </span>
            </div>
            <div>
              <p className="text-[0.72rem] font-medium tracking-[0.28em] text-slate-500 uppercase">
                UnderStack
              </p>
              <p className="text-sm text-slate-900">Software systems & design</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a className="transition hover:text-slate-950" href="#about">
              About
            </a>
            <a className="transition hover:text-slate-950" href="#services">
              Services
            </a>
            <a className="transition hover:text-slate-950" href="#products">
              Products
            </a>
            <a className="transition hover:text-slate-950" href="#location">
              Location
            </a>
          </nav>

          <a
            href="mailto:hello@understack.dev"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>
      </header>

      <main id="home">
        <section className="relative overflow-hidden px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
            <div className="absolute right-[10%] top-24 h-40 w-40 rounded-full bg-slate-200/50 blur-3xl" />
            <div className="absolute left-[8%] top-52 h-52 w-52 rounded-full bg-slate-300/30 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-[0_10px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
                Premium software systems, thoughtfully designed
              </div>

              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 md:text-7xl">
                We build refined digital products for modern businesses.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                UnderStack creates elegant software, premium interfaces, and
                reliable business platforms designed to perform beautifully in
                the real world.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5"
                >
                  View our work
                </a>
                <a
                  href="#about"
                  className="rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl transition hover:-translate-y-0.5"
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
              <div className="rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur-2xl">
                <div className="rounded-[1.6rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium tracking-[0.24em] text-slate-500 uppercase">
                        Featured company
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                        UnderStack
                      </h3>
                    </div>
                    <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      Active
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-sm text-slate-500">Focus</p>
                      <p className="mt-2 text-lg font-medium text-slate-950">
                        Software systems, product design, web platforms
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-sm text-slate-500">Positioning</p>
                      <p className="mt-2 text-lg font-medium text-slate-950">
                        Premium digital products with enterprise-grade design quality
                      </p>
                    </div>
                    <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-sm text-slate-500">Location</p>
                      <p className="mt-2 text-lg font-medium text-slate-950">
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
              <p className="text-sm font-medium tracking-[0.24em] text-slate-500 uppercase">
                About
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Built with product taste, engineering discipline, and visual precision.
              </h2>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/75 p-8 text-lg leading-8 text-slate-600 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              UnderStack is a software and product design company focused on
              creating elegant, reliable, and scalable digital systems. We
              combine engineering, UI craftsmanship, and product thinking to
              build software that feels premium, communicates trust, and solves
              real operational needs.
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Services"
              title="What we do"
              description="We design and build software experiences that look refined, work reliably, and feel intentional at every layer."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[1.75rem] border border-white/70 bg-white/80 p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] backdrop-blur-xl"
                >
                  <div className="mb-6 h-11 w-11 rounded-2xl border border-slate-200 bg-slate-50" />
                  <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
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
              description="A growing portfolio of software products developed with a strong focus on usability, operations, and premium design standards."
            />

            <div className="grid gap-6 lg:grid-cols-2">
              {products.map((product, index) => (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_65px_rgba(15,23,42,0.08)] backdrop-blur-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium tracking-[0.2em] text-slate-500 uppercase">
                        Featured product
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold text-slate-950">
                        {product.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                      {product.status}
                    </span>
                  </div>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                    {product.description}
                  </p>

                  <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] p-6">
                    <div className="mb-4 flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-slate-300" />
                      <span className="h-3 w-3 rounded-full bg-slate-300" />
                      <span className="h-3 w-3 rounded-full bg-slate-300" />
                    </div>
                    <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                      <div className="rounded-[1.2rem] border border-white bg-white p-5 shadow-sm">
                        <div className="h-4 w-32 rounded-full bg-slate-200" />
                        <div className="mt-4 space-y-3">
                          <div className="h-3 w-full rounded-full bg-slate-100" />
                          <div className="h-3 w-4/5 rounded-full bg-slate-100" />
                          <div className="h-3 w-3/5 rounded-full bg-slate-100" />
                        </div>
                      </div>
                      <div className="rounded-[1.2rem] border border-white bg-slate-950 p-5 shadow-sm">
                        <div className="h-4 w-24 rounded-full bg-slate-700" />
                        <div className="mt-4 space-y-3">
                          <div className="h-3 w-full rounded-full bg-slate-800" />
                          <div className="h-3 w-5/6 rounded-full bg-slate-800" />
                          <div className="h-3 w-2/3 rounded-full bg-slate-800" />
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
              description="Beyond current products, we are shaping the next generation of software experiences inside the UnderStack ecosystem."
            />

            <div className="grid gap-6">
              {pipeline.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_20px_65px_rgba(15,23,42,0.08)] backdrop-blur-xl"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-slate-950">{item.name}</h3>
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                      In progress
                    </span>
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="location" className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2.25rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(248,250,252,0.88)_100%)] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-12">
              <p className="text-sm font-medium tracking-[0.24em] text-slate-500 uppercase">
                Location
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
                Based in Copenhagen, building for ambitious teams everywhere.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                UnderStack operates from Copenhagen, Denmark, with a product mindset
                shaped for modern companies that value clarity, efficiency, and
                design excellence.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 pb-10 pt-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-slate-200/80 pt-6 text-sm text-slate-500 md:flex-row md:items-center">
          <p>© 2026 UnderStack. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a className="transition hover:text-slate-900" href="mailto:hello@understack.dev">
              hello@understack.dev
            </a>
            <a className="transition hover:text-slate-900" href="#home">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;