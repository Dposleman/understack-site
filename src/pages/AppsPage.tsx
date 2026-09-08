import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { CONTACT_EMAIL, portfolioProjects } from "../seoContent";

function ProductCard({ project }: { project: (typeof portfolioProjects)[number] }) {
  return (
    <article className="overflow-hidden rounded-[18px] border border-white/12 bg-white/[0.045] p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/48">{project.category}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">{project.name}</h2>
        </div>
        {project.status ? <span className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1 text-xs text-white/72">{project.status}</span> : null}
      </div>
      <p className="mt-4 text-sm leading-7 text-white/66">{project.description}</p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {project.capabilities.map((capability) => (
          <li key={capability} className="rounded-xl border border-white/10 bg-black/15 px-3 py-2 text-sm text-white/70">{capability}</li>
        ))}
      </ul>
      {project.cta ? (
        <a className="mt-6 inline-flex rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-sm font-medium text-white" href={project.cta.href}>
          {project.cta.label}
        </a>
      ) : null}
    </article>
  );
}

export default function AppsPage() {
  const completed = portfolioProjects.filter((project) => project.status?.startsWith("Completed") || project.status === "Working product");
  const inProgress = portfolioProjects.filter((project) => !completed.includes(project));

  return (
    <div className="min-h-screen text-white">
      <PageMeta title="Products - UnderStack" description="UnderStack products in completed, review and active development states." path="/apps" />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link to="/en/" className="text-sm font-semibold uppercase tracking-[0.28em] text-white">UnderStack</Link>
          <nav className="flex items-center gap-5 text-sm text-white/65">
            <Link to="/en/portfolio" className="hover:text-white">Portfolio</Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <section className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/48">UnderStack products</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Products with a clear state of readiness.</h1>
          <p className="mt-6 text-base leading-8 text-white/65">A factual view of completed work, products in review, and active development across UnderStack.</p>
        </section>

        <section className="mt-16">
          <div className="mb-7"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/48">Completed and working</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Ready products</h2></div>
          <div className="grid gap-5 lg:grid-cols-2">{completed.map((project) => <ProductCard key={project.name} project={project} />)}</div>
        </section>

        <section className="mt-16">
          <div className="mb-7"><p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/48">In progress</p><h2 className="mt-3 text-3xl font-semibold tracking-tight">Active development</h2></div>
          <div className="grid gap-5 lg:grid-cols-2">{inProgress.map((project) => <ProductCard key={project.name} project={project} />)}</div>
        </section>
      </main>
    </div>
  );
}
