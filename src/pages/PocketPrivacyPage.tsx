import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

const sections = [
  {
    title: "Information Pocket stores",
    body: "UnderStack AI Pocket is a local-first Android application. Conversations, downloaded local models, generated images, approved memories, plans and audit records are stored on the device unless you explicitly choose an Android share action or use a feature that requires an external provider.",
  },
  {
    title: "Device permissions",
    body: "Pocket requests permissions only when you use the related feature, including camera, location, contacts, calendar and notifications. Sensitive actions require a visible plan approval. The Google Play version does not request broad installed-app inventory and does not use Android Accessibility for AI-driven automation.",
  },
  {
    title: "External services",
    body: "Google sign-in is optional. When enabled, authentication data is processed by Google and Firebase under their policies. If you ask Pocket to search the web, the query is sent directly from your device to the selected public search service and public pages are retrieved directly from your device. Pocket does not operate a chat or search backend. Optional Google Calendar, Gmail and WhatsApp Business integrations require separate consent and are not enabled simply by installing Pocket.",
  },
  {
    title: "Retention and your controls",
    body: "You can review, edit, disable or delete local memories in Brain; delete conversations and generated images; cancel queued reminders; and export or clear the local audit. If you sign in, you can delete your Pocket account and associated local Pocket data through Settings > Account > Delete account and local data. Uninstalling Pocket removes app-private local data, subject to Android backup settings.",
  },
  {
    title: "Contact",
    body: "For privacy questions or support, email dev.team@understack.com.",
  },
];

export default function PocketPrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <PageMeta title="Privacy Policy — UnderStack AI Pocket" description="Privacy Policy for UnderStack AI Pocket, a local-first Android AI assistant." path="/privacy" lang="en" />
      <header className="border-b border-white/10 bg-slate-950/85">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link to="/en/" className="text-sm font-semibold uppercase tracking-[0.28em] text-white">UnderStack</Link>
          <Link to="/en/apps" className="text-sm text-cyan-100 hover:text-white">Apps</Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">UnderStack AI Pocket</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-5 text-sm text-white/60">Effective date: September 1, 2026</p>
        <div className="mt-12 grid gap-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-7">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/45">© 2026 UnderStack. All rights reserved.</footer>
    </div>
  );
}
