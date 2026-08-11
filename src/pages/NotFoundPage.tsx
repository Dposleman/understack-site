import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020617] px-6 text-center text-white">
      <PageMeta title="Page not found — UnderStack" description="The requested UnderStack page could not be found." path="/404" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">404</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight">Page not found.</h1>
        <p className="mt-4 text-white/65">The page may have moved or no longer exists.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-100">
          Return home
        </Link>
      </div>
    </main>
  );
}
