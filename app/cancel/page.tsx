import Link from "next/link";

export default function CancelPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-6">
      <div className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 p-8 text-center">
        <h1 className="text-3xl font-bold text-zinc-100">Checkout Cancelled</h1>
        <p className="mt-3 text-zinc-400">
          No payment was processed. You can return and restart your SAFE
          investment at any time.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block border border-zinc-700 px-5 py-2 text-sm uppercase transition hover:bg-zinc-800"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
