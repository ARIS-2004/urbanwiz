"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function LetsTalk() {
  return (
    <section
      id="letstalk"
      className="relative overflow-hidden py-10 lg:py-12"
      style={{ backgroundColor: "#FAF8F6" }}
    >
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute -top-24 left-0 w-[360px] h-[360px] rounded-full pointer-events-none opacity-55"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.08), rgba(30,58,186,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 right-0 w-[360px] h-[360px] rounded-full pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.08), rgba(255,87,34,0) 70%)",
        }}
      />

      <div className="container-content relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="relative rounded-2xl bg-white border border-navy/8 px-5 sm:px-7 py-5 sm:py-6 shadow-[0_1px_2px_rgba(15,19,48,0.03),0_22px_44px_-22px_rgba(15,19,48,0.18)] overflow-hidden"
        >
          {/* Orange→blue gradient strip on left */}
          <span
            aria-hidden
            className="absolute left-0 top-0 bottom-0 w-[3px]"
            style={{
              background:
                "linear-gradient(180deg, #FF5722 0%, #1E3ABA 100%)",
            }}
          />

          {/* Soft corner wash */}
          <span
            aria-hidden
            className="absolute -top-16 -right-16 w-44 h-44 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,87,34,0.10), rgba(255,87,34,0) 70%)",
            }}
          />

          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
            {/* Left — copy */}
            <div className="min-w-0">
              <div className="flex items-center gap-2.5">
                <span className="block w-5 h-[2px] bg-orange" />
                <span className="text-[9.5px] uppercase tracking-[0.28em] text-orange font-semibold">
                  Prefer a conversation?
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2 className="font-display text-[22px] sm:text-[26px] xl:text-[30px] leading-[1.05] tracking-[-0.02em] text-navy font-bold">
                  Let&apos;s <span className="text-orange">talk.</span>
                </h2>
                <p className="text-[15px] leading-[1.5] text-navy/55">
                  20-minute call. No obligation.
                </p>
              </div>
            </div>

            {/* Right — CTA */}
            <Link
              href="mailto:urbanwiz@info.co.in?subject=Book%20a%20call"
              className="group shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-navy text-ivory px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] font-semibold hover:bg-orange transition-colors duration-300 w-fit"
              style={{
                boxShadow:
                  "0 14px 28px -12px rgba(15,19,48,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              Book a call
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
