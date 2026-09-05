import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

const sections = [
  {
    title: "Data handling",
    body: "Life is a local-first personal organization application. It does not require an account and does not send notes, tasks, documents, receipts, photos, OCR text, searches, Life AI questions, or other personal content to UnderStack or third parties. Internet access is used only when you explicitly start an optional local-model download; no personal content is attached to that request.",
  },
  {
    title: "Local storage and protection",
    body: "Your content is stored in Life’s protected app storage on your device. Canonical content, encrypted attachments, and the relational database use local encryption. Key material is protected by device security facilities where available.",
  },
  {
    title: "Device permissions",
    body: "Camera access is used only when you choose to scan a document or receipt. Notifications are used only for reminders you create. Biometric access is used only if you enable the optional app lock. You can revoke permissions in Android settings; the related feature will remain unavailable until you restore that permission.",
  },
  {
    title: "Backups, retention, and deletion",
    body: "Life exports a backup only when you request it and choose a destination. Portable backups are protected by a password you choose; UnderStack does not store or recover that password. Your data remains on your device until you delete it, clear Life’s storage, or uninstall the app.",
  },
  {
    title: "Optional local AI model",
    body: "An optional local GGUF model can improve the wording of Life AI answers. You choose it from Life’s reviewed catalog; each download has a fixed HTTPS source and SHA-256 verification, is stored in protected app storage, and runs on your device. Life works without the model.",
  },
  {
    title: "Changes and contact",
    body: "If Life adds a networked personal-data service or changes how personal data is handled, this policy and the Google Play Data Safety declaration will be updated before that release. For privacy questions or support, email dev.team@understack.dk.",
  },
];

export default function LifePrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <PageMeta title="Privacy Policy — Life" description="Privacy Policy for Life, UnderStack’s local-first personal organization app." path="/life/privacy" lang="en" />
      <header className="border-b border-white/10 bg-slate-950/85">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link to="/en/" className="text-sm font-semibold uppercase tracking-[0.28em] text-white">UnderStack</Link>
          <Link to="/en/apps" className="text-sm text-cyan-100 hover:text-white">Apps</Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">Life</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-5 text-sm text-white/60">Effective date: September 5, 2026</p>
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
