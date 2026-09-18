import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Music2, Pause, Play, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import envelopeFront from "@/assets/letter-envelope-front.png.asset.json";
import envelopeOpen from "@/assets/letter-envelope-open.png.asset.json";
import { Button } from "@/components/ui/button";

const pages = ["opening", "true love", "the color black", "dear rey"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For Rey 🖤" },
      { name: "description", content: "A little love letter, made only for Rey." },
      { property: "og:title", content: "For Rey 🖤" },
      { property: "og:description", content: "A little love letter, made only for Rey." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoveLetter,
});

function LoveLetter() {
  const [intro, setIntro] = useState<0 | 1 | 2 | 3>(0);
  const [page, setPage] = useState(0);
  const [musicOpen, setMusicOpen] = useState(false);
  const introTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openLetter = useCallback(() => {
    if (intro !== 0) return;
    setIntro(1);
    introTimer.current = setTimeout(() => setIntro(2), 850);
    setTimeout(() => setIntro(3), 1850);
  }, [intro]);

  useEffect(() => () => {
    if (introTimer.current) clearTimeout(introTimer.current);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (intro < 3 && (event.key === "Enter" || event.key === " ")) openLetter();
      if (intro === 3 && event.key === "ArrowRight") setPage((value) => Math.min(3, value + 1));
      if (intro === 3 && event.key === "ArrowLeft") setPage((value) => Math.max(0, value - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [intro, openLetter]);

  const resetIntro = () => {
    setPage(0);
    setIntro(0);
  };

  return (
    <main className="min-h-screen bg-foreground">
      <button
        type="button"
        aria-label="Open letter for Rey"
        onClick={openLetter}
        className={`fixed inset-0 z-50 flex cursor-pointer flex-col items-center justify-center overflow-hidden bg-foreground px-5 transition-[opacity,visibility] duration-1000 ${intro === 3 ? "pointer-events-none invisible opacity-0" : "visible opacity-100"}`}
      >
        <div className="relative flex h-[min(62vw,31rem)] w-full max-w-2xl items-center justify-center [perspective:1200px]">
          <img
            src={envelopeOpen.url}
            alt="An invitation into my heart"
            className={`absolute w-full rounded-sm shadow-2xl transition-all duration-1000 ease-out ${intro === 0 ? "translate-y-8 scale-90 -rotate-3 opacity-45 brightness-75" : intro === 1 ? "-translate-y-2 scale-100 rotate-0 opacity-100" : "-translate-y-24 scale-125 rotate-2 opacity-0 blur-md"}`}
          />
          <img
            src={envelopeFront.url}
            alt="Miss you envelope"
            className={`absolute w-full rounded-sm shadow-2xl transition-all duration-1000 ease-out ${intro === 0 ? "scale-100 opacity-100" : "-translate-y-[70%] -rotate-6 scale-105 opacity-0"}`}
          />
        </div>
        <div className={`mt-6 flex items-center gap-3 font-sans text-[10px] uppercase tracking-[.35em] text-primary-foreground transition-opacity duration-500 ${intro === 0 ? "prompt-pulse" : "opacity-0"}`}>
          <span className="h-px w-6 bg-primary" /> click to open letter for Rey 🖤 <span className="h-px w-6 bg-primary" />
        </div>
      </button>

      <div className={`mx-auto min-h-screen max-w-[1200px] bg-background shadow-2xl transition-opacity duration-1000 ${intro === 3 ? "opacity-100" : "opacity-0"}`}>
        <div className="fixed right-4 top-4 z-40 flex gap-2 sm:right-6 sm:top-6">
          <Button variant="letter" size="icon" onClick={resetIntro} title="Replay intro" aria-label="Replay intro"><RotateCcw /></Button>
          <Button variant="letter" size="icon" onClick={() => setMusicOpen((value) => !value)} title="Play Cinderella" aria-label="Play Cinderella">
            {musicOpen ? <Pause /> : <Music2 />}
          </Button>
        </div>

        <div className={`fixed right-4 top-16 z-40 w-[min(88vw,360px)] origin-top-right transition-all duration-500 ${musicOpen ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-3 scale-95 opacity-0"}`}>
          <iframe
            title="Cinderella by Mac Miller on Spotify"
            src="https://open.spotify.com/embed/track/2lpygKqzPFtItQ4ss3cgfb?utm_source=generator&theme=0"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-md border-0 shadow-2xl"
          />
        </div>

        <div className="relative min-h-screen overflow-hidden">
          <div className="flex transition-transform duration-1000 ease-[cubic-bezier(.65,0,.35,1)]" style={{ transform: `translateX(-${page * 100}%)` }}>
            <section className="paper-grain flex min-h-screen w-full shrink-0 flex-col items-center justify-center px-6 py-24 text-center sm:px-12">
              <div className="letter-reveal flex w-full max-w-4xl items-center justify-between text-primary" key={`header-${page}`}>
                <span className="font-sans text-xs tracking-[.4em]">09</span><span className="h-px flex-1 bg-primary/25 mx-5" /><span className="font-sans text-xs tracking-[.4em]">02</span>
              </div>
              <div className="letter-reveal mt-10" style={{ animationDelay: "100ms" }}>
                <h1 className="font-script text-6xl leading-none text-primary sm:text-8xl">You too divine</h1>
                <p className="mt-2 font-serif text-3xl italic text-foreground sm:text-5xl">to just be [ MINE ]</p>
                <p className="mx-auto mt-10 max-w-2xl text-xl font-light italic leading-9 sm:text-2xl sm:leading-10">
                  You deserve to be loved, rey. And somehow, out of all the people in this world, my heart found its way to you.
                </p>
                <p className="mt-7 font-sans text-[10px] uppercase tracking-[.32em] text-primary">my favorite person · my safest place · the one i keep choosing</p>
              </div>
              <div className="letter-reveal mt-12 w-full max-w-3xl border-y border-primary/20 py-5 font-sans text-[9px] uppercase tracking-[.38em] text-muted-foreground" style={{ animationDelay: "250ms" }}>
                made with all my love, for rey 🖤 · made by ecliwcze
              </div>
            </section>

            <section className="paper-grain flex min-h-screen w-full shrink-0 flex-col items-center justify-center bg-secondary px-6 py-24 sm:px-12">
              <div className="w-full max-w-3xl text-center">
                <p className="font-sans text-[10px] uppercase tracking-[.38em] text-primary">true love · songs that remind me of you</p>
                <h2 className="mt-8 font-script text-6xl leading-none text-primary sm:text-8xl">Rey, i'm so in love with You</h2>
                <p className="mt-3 font-sans text-[10px] uppercase tracking-[.35em] text-muted-foreground">cinderella — mac miller</p>
                <div className="mx-auto my-9 flex h-24 w-24 items-center justify-center rounded-full bg-foreground shadow-xl">
                  <div className="vinyl-spin flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"><Play className="ml-0.5 size-4" /></div>
                </div>
                <div className="border-y border-primary/20 py-9 text-lg font-light italic leading-8 sm:text-xl sm:leading-9">
                  <p>rey, sometimes i wonder how one person can become such a big part of my life. and then i remember all the little things about you — the way you talk, the way you care, the random things you say.</p>
                  <p className="mt-5">i didn't fall in love with one big moment. i fell in love with all the little pieces of you, one by one, until loving you became the most natural thing in my life.</p>
                  <p className="mt-5 text-primary">if there's one person i'd want beside me through all the versions of myself, it's you.</p>
                </div>
              </div>
            </section>

            <section className="paper-grain relative flex min-h-screen w-full shrink-0 flex-col justify-center overflow-hidden bg-background px-6 py-24 sm:px-12">
              <span className="absolute left-10 top-12 font-script text-7xl text-primary/15">✦</span><span className="absolute bottom-16 right-12 font-script text-8xl text-primary/15">✦</span>
              <header className="mb-12 text-center"><p className="text-3xl font-light italic">You remind me of the color</p><h2 className="font-script text-8xl leading-none text-primary sm:text-9xl">black</h2></header>
              <div className="mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-3">
                {[
                  ["01", "you feel like home", "when everything feels too loud, somehow, you make my world a little quieter."],
                  ["02", "my favorite person", "i could have a thousand things going on, and my mind still finds its way to you."],
                  ["03", "a little apology", "i'm still learning how to love you better, how to understand you, and how to communicate."],
                ].map(([number, title, body]) => (
                  <article key={number} className="group text-center">
                    <p className="font-sans text-[10px] tracking-[.35em] text-muted-foreground">{number}</p>
                    <div className="relative mx-auto my-6 aspect-square w-44">
                      <div className="absolute inset-1 rounded-full bg-foreground shadow-xl transition-transform duration-700 group-hover:translate-x-7 group-hover:rotate-90">
                        <div className="absolute inset-[34%] rounded-full border-[10px] border-primary bg-secondary" />
                      </div>
                      <div className="absolute inset-y-0 left-0 w-[74%] border border-border bg-secondary shadow-lg transition-transform duration-500 group-hover:-translate-x-2"><div className="flex h-full items-center justify-center p-5 font-script text-3xl text-primary">for rey</div></div>
                    </div>
                    <h3 className="font-sans text-xs font-semibold lowercase tracking-[.18em] text-primary">{title}</h3>
                    <p className="mt-4 text-lg italic leading-7 text-muted-foreground">{body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="paper-grain flex min-h-screen w-full shrink-0 items-center justify-center bg-secondary px-5 py-24 sm:px-12">
              <article className="relative w-full max-w-3xl border border-primary/20 bg-background px-7 py-12 text-center shadow-xl sm:px-16 sm:py-16">
                <span className="absolute left-4 top-4 h-8 w-8 border-l border-t border-primary/50" /><span className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-primary/50" />
                <h2 className="font-script text-6xl text-primary sm:text-7xl">Dear rey,</h2>
                <div className="mt-8 space-y-5 text-lg font-light leading-8 sm:text-xl sm:leading-9">
                  <p>if i could put everything i feel for you into words, i probably still wouldn't be able to explain it completely.</p>
                  <p>but i hope you know that i love you genuinely. not just for the good days, but also through the confusing days, the little arguments, and the moments when we don't understand each other.</p>
                  <p>i'm sorry for every time i've made you feel anything less than loved. i'm still trying, because you're someone worth trying for.</p>
                  <p>i don't want a perfect relationship. i want ours — where we grow, learn, and keep choosing each other even when things aren't perfect.</p>
                </div>
                <div className="mt-9 font-script text-4xl leading-tight text-primary sm:text-5xl">it's you.<br />it has always been you.<br /><span className="text-3xl">and i hope, for a very long time, it gets to be us. 🖤</span></div>
              </article>
            </section>
          </div>
        </div>

        <nav aria-label="Letter pages" className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-md border border-primary/20 bg-background/90 p-2 shadow-xl backdrop-blur-md sm:bottom-6">
          <Button variant="letterGhost" size="icon" disabled={page === 0} onClick={() => setPage((value) => Math.max(0, value - 1))} aria-label="Previous page"><ChevronLeft /></Button>
          <div className="min-w-28 text-center font-sans text-[9px] uppercase tracking-[.2em] text-muted-foreground"><span className="text-primary">{pages[page]}</span><br />{page + 1} / 4</div>
          <Button variant="letterGhost" size="icon" disabled={page === 3} onClick={() => setPage((value) => Math.min(3, value + 1))} aria-label="Next page"><ChevronRight /></Button>
        </nav>
      </div>
    </main>
  );
}