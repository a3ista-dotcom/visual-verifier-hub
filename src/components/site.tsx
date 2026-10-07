import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const EMAIL = "info@ezflyeu.com";

export function AppStoreBadge({ small }: { small?: boolean }) {
  return (
    <span
      aria-label="Coming to the App Store"
      className={`inline-flex items-center gap-2 rounded-full bg-primary font-semibold text-primary-foreground ${small ? "px-4 py-2 text-xs" : "px-6 py-3 text-sm"}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1zM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.5z" />
      </svg>
      Coming to the App Store
    </span>
  );
}

export function Header() {
  const links = [
    ["Remote TV", "/#remote"],
    ["Features", "/#features"],
    ["AI", "/#ai"],
  ] as const;
  return (
    <header className="fixed inset-x-0 top-0 z-50 glass border-x-0 border-t-0">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-display text-base font-bold tracking-tight">
          EZMedia <span className="text-muted-foreground">Pro VIP</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="transition-colors hover:text-foreground">{l}</a>
          ))}
          <Link to="/support" className="transition-colors hover:text-foreground">Support</Link>
        </div>
        <AppStoreBadge small />
      </nav>
      <div className="flex justify-center gap-6 pb-3 text-xs text-muted-foreground md:hidden">
        {links.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
        <Link to="/support">Support</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:justify-between">
        <div>
          <p className="font-display font-bold">EZMedia Pro VIP</p>
          <p className="mt-1 text-sm text-muted-foreground">Slovenia, European Union</p>
          <a href={`mailto:${EMAIL}`} className="mt-3 block text-sm hover:text-accent">{EMAIL}</a>
        </div>
        <nav aria-label="Footer" className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/support" className="hover:text-foreground">Support</Link>
          <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-foreground">Terms of Use</Link>
        </nav>
      </div>
      <p className="pb-10 text-center text-xs text-muted-foreground">© 2026 EZMedia Pro VIP. All rights reserved.</p>
    </footer>
  );
}

export function LegalPage({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        {updated && <p className="mt-3 text-sm text-muted-foreground">{updated}</p>}
        <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_a]:text-accent">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
