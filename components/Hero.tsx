"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(127,29,29,0.35),transparent_65%)]"
        animate={{ opacity: [0.6, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative z-10 grid w-full max-w-6xl gap-16 md:grid-cols-2">
        <FadeIn>
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.24em] text-yellow-300">
              Now Seeking Strategic Partners
            </p>

            <h1 className="mb-6 text-5xl leading-tight font-black sm:text-6xl">
              GLOBAL <br /> EMERGENCY <br /> AID RESPONSE
            </h1>

            <p className="mb-8 max-w-md text-zinc-400">
              GEAR builds the emergency infrastructure the world needs —
              coordinated, accessible, and operational when traditional systems
              fail.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#platform"
                className="bg-red-700 px-6 py-3 text-sm font-bold uppercase transition hover:bg-red-600"
              >
                Explore Platform
              </a>
              <a
                href="#invest"
                className="border border-yellow-400 px-6 py-3 text-sm uppercase text-yellow-200 transition hover:bg-yellow-400/10"
              >
                Investment Overview
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex items-center justify-center">
            <div className="h-64 w-64 rounded-full border border-zinc-700 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-[0_0_80px_rgba(127,29,29,0.35)] sm:h-80 sm:w-80" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
