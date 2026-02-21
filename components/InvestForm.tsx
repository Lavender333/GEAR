"use client";

import { useState } from "react";

const MIN_AMOUNT = 10_000;

export default function InvestForm() {
  const [amount, setAmount] = useState(MIN_AMOUNT);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInvest = async () => {
    if (amount < MIN_AMOUNT) {
      setError(`Minimum investment is $${MIN_AMOUNT.toLocaleString()}.`);
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      if (!res.ok) {
        throw new Error("Unable to start checkout session.");
      }

      const data: { url?: string } = await res.json();

      if (!data.url) {
        throw new Error("Checkout URL missing.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/70 p-8">
      <label htmlFor="amount" className="mb-2 block text-sm text-zinc-300">
        Investment Amount (Min $10,000)
      </label>
      <input
        id="amount"
        type="number"
        min={MIN_AMOUNT}
        value={amount}
        onChange={(event) => setAmount(Number(event.target.value))}
        className="mb-4 w-full border border-zinc-700 bg-black p-3 outline-none transition focus:border-zinc-500"
      />
      <button
        onClick={handleInvest}
        disabled={loading}
        className="w-full bg-red-700 py-3 font-bold uppercase transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Redirecting..." : "Invest via SAFE"}
      </button>
      {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
    </div>
  );
}
