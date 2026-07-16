"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ClosingPromise() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20 bg-white dark:bg-[#12173a]">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(15,19,48,0.10) 50%, transparent 100%)",
        }}
      />

      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="relative rounded-[24px] overflow-hidden px-8 sm:px-12 lg:px-16 py-10 lg:py-12"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(255,87,34,0.14), transparent 42%), linear-gradient(135deg, #07133d, #0c1d57)",
            boxShadow: "0 30px 80px rgba(8,15,45,0.18)",
          }}
        >
          {/* dotted texture — bottom left */}
          <span
            aria-hidden
            className="absolute -bottom-10 -left-6 w-[32%] h-[80%] pointer-events-none opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,87,34,0.4) 1px, transparent 1.4px)",
              backgroundSize: "16px 16px",
              maskImage:
                "radial-gradient(120% 120% at 0% 100%, black, transparent 60%)",
              WebkitMaskImage:
                "radial-gradient(120% 120% at 0% 100%, black, transparent 60%)",
            }}
          />
          <span
            aria-hidden
            className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px] pointer-events-none"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left — copy */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1, duration: 0.6, ease }}
                className="inline-flex items-center gap-3"
              >
                <span className="block w-8 h-[1.5px] rounded-full bg-orange/70" />
                <span className="text-[11px] uppercase tracking-[0.34em] text-ivory/70 font-bold">
                  Work With Us
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.18, duration: 0.85, ease }}
                className="mt-5 font-display text-[20px] sm:text-[26px] xl:text-[30px] tracking-[-0.02em] leading-[1.3] text-ivory font-bold"
              >
                Every client is more than a contract, every employee is more than
                a resource, and every challenge is an{" "}
                <span className="text-orange">
                  opportunity to create lasting impact.
                </span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.8, ease }}
                className="mt-5 flex items-center gap-3 text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.3em] text-ivory/65 font-bold"
              >
                <span aria-hidden className="block w-6 h-[1.5px] bg-orange/70" />
                We are Human, before we are Corporate.
              </motion.p>
            </div>

            {/* Right — buttons stacked */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.85, ease }}
              className="lg:col-span-4 flex flex-col gap-3 lg:pl-8 lg:border-l border-white/10"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-between gap-3 rounded-xl bg-orange text-ivory px-6 py-3.5 text-[13px] font-bold tracking-[-0.01em] transition-colors duration-300 hover:bg-orange-soft"
                style={{
                  boxShadow:
                    "0 16px 34px -14px rgba(255,87,34,0.55), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                Let&apos;s Work Together
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center justify-between gap-3 rounded-xl border border-ivory/25 text-ivory px-6 py-3.5 text-[13px] font-bold tracking-[-0.01em] transition-all duration-300 hover:border-ivory/50 hover:bg-white/5"
              >
                Explore Our Services
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
