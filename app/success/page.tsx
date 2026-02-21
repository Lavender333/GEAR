import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center px-6">
      <div className="w-full rounded-xl border border-emerald-800 bg-emerald-900/20 p-8 text-center">
        <h1 className="text-3xl font-bold text-emerald-300">Investment Received</h1>
        <p className="mt-3 text-zinc-300">
          Thank you for investing in GEAR. Our team will follow up with next
          steps for SAFE documentation.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block border border-zinc-700 px-5 py-2 text-sm uppercase transition hover:bg-zinc-800"
        >
          Back to Platform
        </Link>
      </div>
    </main>
  );
}
