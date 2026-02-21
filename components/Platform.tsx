import FadeIn from "./FadeIn";

const pillars = [
  {
    title: "Response Coordination",
    detail:
      "Unified mission control for governments, NGOs, and logistics operators in active crises.",
  },
  {
    title: "Aid Accessibility",
    detail:
      "Field-ready interfaces for rapid distribution, eligibility checks, and accountability.",
  },
  {
    title: "Operational Continuity",
    detail:
      "Fallback infrastructure designed to remain functional when traditional systems fail.",
  },
];

export default function Platform() {
  return (
    <section id="platform" className="mx-auto w-full max-w-6xl px-6 py-24">
      <FadeIn>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Platform</h2>
      </FadeIn>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {pillars.map((pillar) => (
          <FadeIn key={pillar.title}>
            <article className="h-full rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-zinc-700">
              <h3 className="text-xl font-semibold text-zinc-100">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {pillar.detail}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
