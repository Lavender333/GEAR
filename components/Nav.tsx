export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-semibold tracking-[0.2em] text-zinc-100">
          GEAR
        </a>
        <div className="flex items-center gap-6 text-sm uppercase tracking-wider text-zinc-300">
          <a href="#platform" className="transition hover:text-white">
            Platform
          </a>
          <a href="#market" className="transition hover:text-white">
            Market
          </a>
          <a href="#invest" className="rounded border border-yellow-400 px-3 py-1.5 text-yellow-300 transition hover:bg-yellow-400/10">
            Invest
          </a>
        </div>
      </nav>
    </header>
  );
}
