import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { AppStoreBadge, EMAIL, Footer, Header } from "@/components/site";

const TITLE = "EZMedia Pro VIP | Remote TV for iPhone";
const DESC =
  "Remote TV by EZMedia Pro VIP is a modern smart TV remote-control experience for iPhone, designed for simple control and intelligent media experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://ezflyeu.com" },
    ],
    links: [{ rel: "canonical", href: "https://ezflyeu.com" }],
  }),
  component: Index,
});

const features = [
  ["Smart TV Control", "Control essential TV functions directly from your phone."],
  ["Simple Interface", "Designed around the controls people actually use."],
  ["Fast Connection", "A streamlined experience for connecting to compatible TVs."],
  ["Built for iPhone", "A mobile-first experience designed with iPhone users in mind."],
];

const ai = [
  "Natural-language content discovery",
  "Multilingual assistance",
  "Contextual recommendations",
  "Smarter media discovery",
  "AI-assisted user support",
];

function Key({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`flex items-center justify-center rounded-2xl bg-secondary text-xs font-semibold text-foreground transition hover:bg-muted active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}

function RemoteMockup() {
  return (
    <div className="mx-auto w-[280px] rounded-[3rem] border-[10px] border-secondary bg-card p-5 shadow-2xl shadow-glow/20 sm:w-[300px]">
      <div className="mx-auto mb-5 h-5 w-24 rounded-full bg-background" />
      <div className="mb-5 flex items-center justify-between text-xs text-muted-foreground">
        <span>Living room TV</span>
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-accent" />Connected</span>
      </div>
      <div className="mb-5 flex justify-between">
        <Key label="Power" className="h-12 w-12 rounded-full text-destructive">⏻</Key>
        <Key label="Mute" className="h-12 w-12 rounded-full">🔇</Key>
      </div>
      <div className="relative mx-auto mb-5 h-44 w-44 rounded-full bg-secondary">
        {[["Up", "▲", "left-1/2 top-2 -translate-x-1/2"], ["Down", "▼", "bottom-2 left-1/2 -translate-x-1/2"], ["Left", "◀", "left-2 top-1/2 -translate-y-1/2"], ["Right", "▶", "right-2 top-1/2 -translate-y-1/2"]].map(([l, s, p]) => (
          <button key={l} type="button" aria-label={l} className={`absolute p-3 text-xs text-muted-foreground hover:text-foreground ${p}`}>{s}</button>
        ))}
        <button type="button" aria-label="OK" className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-background text-sm font-semibold">OK</button>
      </div>
      <div className="mb-5 grid grid-cols-2 gap-3">
        <Key label="Back" className="h-11">Back</Key>
        <Key label="Home" className="h-11">Home</Key>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[["Volume", "VOL"], ["Channel", "CH"]].map(([l, s]) => (
          <div key={l} className="flex flex-col items-center rounded-2xl bg-secondary py-2">
            <button type="button" aria-label={`${l} up`} className="px-4 py-1 text-lg">+</button>
            <span className="text-[10px] tracking-widest text-muted-foreground">{s}</span>
            <button type="button" aria-label={`${l} down`} className="px-4 py-1 text-lg">−</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Index() {
  return (
    <>
      <Header />
      <main>
        <section id="remote" className="relative overflow-hidden bg-glow pt-36 md:pt-44">
          <div className="fade-up mx-auto max-w-4xl px-5 text-center">
            <p className="eyebrow">Remote TV for iPhone</p>
            <h1 className="text-gradient mt-5 text-5xl font-bold leading-[1.02] sm:text-7xl md:text-8xl">
              Your TV.<br />One smart remote.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              A simple, modern way to control your smart TV from your iPhone. Fast access to the controls you use every day, with intelligent features being developed for what comes next.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <AppStoreBadge />
              <a href="#features" className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-secondary">Explore features</a>
            </div>
          </div>
          <div className="fade-up mx-auto mt-16 max-w-6xl px-5 [animation-delay:200ms]">
            <img src={hero} alt="iPhone showing the Remote TV interface in front of a smart TV" width={1600} height={1000} className="w-full rounded-3xl border" />
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-5 py-28 md:py-36">
          <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">Everything you need. Nothing you don’t.</h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border bg-border sm:grid-cols-2">
            {features.map(([t, d], i) => (
              <div key={t} className="bg-background p-8 md:p-10">
                <span className="font-display text-sm text-accent">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ai" className="relative overflow-hidden border-y bg-glow py-28 md:py-36">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <p className="eyebrow">Intelligence, built in</p>
            <h2 className="mt-5 text-4xl font-bold sm:text-6xl">A smarter way to find what to watch.</h2>
            <span className="mt-6 inline-block rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">In development</span>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground sm:text-lg">
              We’re exploring AI-assisted experiences that can make interacting with your TV more natural — from multilingual assistance and contextual recommendations to natural-language content discovery.
            </p>
            <ul className="mt-10 flex flex-wrap justify-center gap-3">
              {ai.map((a) => (
                <li key={a} className="glass rounded-full px-4 py-2 text-sm">
                  {a} <span className="ml-1 text-xs text-muted-foreground">· Coming soon</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-16 px-5 py-28 md:grid-cols-2 md:py-36">
          <div>
            <p className="eyebrow">The app</p>
            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">Remote control, rethought.</h2>
            <p className="mt-6 max-w-md text-muted-foreground sm:text-lg">
              Power, volume, channels, navigation, Home, Back and Mute — the essentials, laid out clearly so you never hunt for a button.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Interface preview. Final design may change before release.</p>
          </div>
          <RemoteMockup />
        </section>

        <section className="border-t">
          <div className="mx-auto grid max-w-6xl gap-16 px-5 py-28 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Built by EZMedia Pro VIP</h2>
              <p className="mt-6 text-muted-foreground">
                EZMedia Pro VIP is a Slovenia-based technology company developing practical digital products for modern connected experiences. Remote TV is currently in active development for iPhone, with a focus on simplicity, reliability and intelligent user experiences.
              </p>
            </div>
            <div id="support">
              <h2 className="text-3xl font-bold sm:text-4xl">Need help?</h2>
              <p className="mt-6 text-muted-foreground">For product questions, support or business enquiries, contact us at:</p>
              <a href={`mailto:${EMAIL}`} className="mt-4 inline-block font-display text-2xl font-semibold text-accent hover:underline">{EMAIL}</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
