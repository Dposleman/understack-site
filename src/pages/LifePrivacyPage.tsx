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
    <div className="min-h-screen bg-[#fafbf8] text-[#1e2920]">
      <PageMeta title="Privacy Policy — Life" description="Privacy Policy for Life, UnderStack’s local-first personal organization app." path="/life/privacy" lang="en" />
      <header className="border-b border-[#dce7d9] bg-[#fafbf8]/95">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link to="/en/apps" className="flex items-center gap-2 text-sm font-semibold text-[#42664a] hover:text-[#2f4d36]">
            <span className="grid size-8 place-items-center rounded-full bg-[#eff3eb] text-base" aria-hidden="true">✦</span>
            Life
          </Link>
          <span className="rounded-full bg-[#eff3eb] px-3 py-1 text-xs font-medium text-[#42664a]">Private by design</span>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <div className="rounded-[2rem] border border-[#dce7d9] bg-[#f0f5ed] px-7 py-9 sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#42664a]">Life · Privacy</p>
          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-[#243126] sm:text-5xl">Your life stays yours.</h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#5b675d]">Life is built to organize your personal information without turning it into a service that watches you.</p>
          <p className="mt-7 text-sm text-[#69736b]">Effective date: September 5, 2026</p>
        </div>
        <div className="mt-7 grid gap-4">
          {sections.map((section) => (
            <section key={section.title} className="rounded-3xl border border-[#e0e7dd] bg-white p-7 shadow-[0_1px_2px_rgba(32,52,35,0.04)]">
              <h2 className="text-xl font-semibold text-[#2d4231]">{section.title}</h2>
              <p className="mt-3 text-base leading-7 text-[#5d685f]">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
      <footer className="border-t border-[#dce7d9] px-6 py-8 text-center text-xs text-[#758078]">© 2026 Life by UnderStack</footer>
    </div>
  );
}
