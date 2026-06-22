"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function OriginStory() {
  return (
    <section
      id="story"
      className="relative overflow-hidden py-14 lg:py-16"
      style={{ backgroundColor: "#FAF8F6" }}
    >
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute -top-24 right-0 w-[460px] h-[460px] rounded-full pointer-events-none opacity-65"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.10), rgba(255,87,34,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 left-0 w-[440px] h-[440px] rounded-full pointer-events-none opacity-55"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.08), rgba(30,58,186,0) 70%)",
        }}
      />

      {/* Decorative dot grids */}
      <div
        aria-hidden
        className="absolute top-16 left-8 hidden lg:block w-28 h-20 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,87,34,0.45) 1px, transparent 1px)",
          backgroundSize: "11px 11px",
          maskImage: "radial-gradient(closest-side, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(closest-side, black, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-16 right-8 hidden lg:block w-28 h-20 opacity-60 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,58,186,0.50) 1px, transparent 1px)",
          backgroundSize: "11px 11px",
          maskImage: "radial-gradient(closest-side, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(closest-side, black, transparent 80%)",
        }}
      />

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — eyebrow + headline */}
          <div className="lg:col-span-5 relative">
            {/* Big "01" watermark */}
            <span
              aria-hidden
              className="absolute -top-10 -left-3 font-display text-[150px] sm:text-[180px] xl:text-[210px] leading-none font-black tracking-[-0.05em] pointer-events-none select-none"
              style={{ color: "rgba(15,19,48,0.04)" }}
            >
              01
            </span>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease }}
              className="relative flex items-center gap-3"
            >
              <span className="block w-7 h-[2px] bg-orange" />
              <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
                Origin story
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="relative mt-5 font-display text-[32px] sm:text-[42px] xl:text-[50px] tracking-[-0.025em] leading-[1.02] text-navy font-bold"
            >
              Built quietly in{" "}
              <span className="text-orange">Kolkata</span>
              <span className="text-navy">,</span>
              <br />
              <span className="text-blue-deep">trusted globally.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="relative mt-5 max-w-md text-[13.5px] text-navy/55 leading-[1.7]"
            >
              Founded in 2017 in Salt Lake Sector V, Urbanwiz began with a simple
              idea: outsourcing should feel like an extension of your team, not a
              vendor relationship measured by tickets closed.
            </motion.p>
          </div>

          {/* Right — founder card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl bg-white border border-navy/8 overflow-hidden shadow-[0_1px_2px_rgba(15,19,48,0.03),0_28px_56px_-26px_rgba(15,19,48,0.22)]">
              {/* Top gradient strip */}
              <span
                aria-hidden
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, #FF5722 0%, #1E3ABA 100%)",
                }}
              />

              {/* Corner orange wash */}
              <span
                aria-hidden
                className="absolute -top-16 -right-16 w-44 h-44 rounded-full pointer-events-none opacity-70"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,87,34,0.10), rgba(255,87,34,0) 70%)",
                }}
              />

              <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
                  {/* Founder initials chip */}
                  <span
                    className="shrink-0 grid place-items-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl font-display text-[28px] sm:text-[32px] font-extrabold text-orange bg-orange/10 ring-4 ring-white"
                    style={{
                      boxShadow:
                        "0 16px 32px -10px rgba(255,87,34,0.40), inset 0 1px 0 rgba(255,255,255,0.7)",
                    }}
                  >
                    A
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="text-[10.5px] uppercase tracking-[0.28em] text-orange font-bold">
                      Founder
                    </div>
                    <h3 className="mt-1 font-display text-[24px] sm:text-[28px] tracking-[-0.02em] text-navy font-bold leading-tight">
                      Abc
                    </h3>
                    <p className="mt-1 text-[12.5px] text-navy/55">
                      Operations · Strategy · Client partnerships
                    </p>

                    {/* Social links */}
                    <div className="mt-4 flex items-center gap-2">
                      <Link
                        href="https://www.linkedin.com"
                        target="_blank"
                        aria-label="LinkedIn"
                        className="group inline-flex items-center gap-2 rounded-full bg-white border border-navy/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] font-bold text-navy hover:border-orange hover:text-orange transition-colors"
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.72V1.73C24 .77 23.2 0 22.22 0z" />
                        </svg>
                        LinkedIn
                      </Link>
                      <Link
                        href="mailto:hello@urbanwiz.com"
                        aria-label="Email founder"
                        className="group inline-flex items-center gap-2 rounded-full bg-white border border-navy/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] font-bold text-navy hover:border-orange hover:text-orange transition-colors"
                      >
                        <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                          <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M3 5l5 3.5L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Email
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-7 pt-7 border-t border-navy/8 relative">
                  <span
                    aria-hidden
                    className="absolute -top-3 left-0 font-display text-[80px] leading-none font-black text-orange pointer-events-none select-none"
                    style={{ opacity: 0.10 }}
                  >
                    &ldquo;
                  </span>
                  <p className="relative pl-2 font-display text-[15px] sm:text-[16px] leading-[1.6] text-navy/75 italic">
                    I wanted a partner I&apos;d want to call back. The kind that
                    treats your business like their own — careful, accountable,
                    and quietly excellent.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
