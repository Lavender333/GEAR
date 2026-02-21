import FadeIn from "./FadeIn";

export default function Market() {
  return (
    <section id="market" className="border-y border-zinc-900 bg-zinc-950/80">
      <div className="mx-auto w-full max-w-6xl px-6 py-24">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Market</h2>
          <p className="mt-4 max-w-3xl text-zinc-400">
            Climate pressure, geopolitical instability, and infrastructure
            fragility are increasing the frequency and complexity of emergency
            events. GEAR is positioned as core infrastructure for high-reliability
            response operations.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <FadeIn>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
              <p className="text-3xl font-bold text-white">$100B+</p>
              <p className="mt-2 text-sm text-zinc-400">Addressable response + resilience spend</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
              <p className="text-3xl font-bold text-white">Global</p>
              <p className="mt-2 text-sm text-zinc-400">Cross-border partner and deployment model</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
              <p className="text-3xl font-bold text-white">Mission-Critical</p>
              <p className="mt-2 text-sm text-zinc-400">Designed for continuity in degraded environments</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
