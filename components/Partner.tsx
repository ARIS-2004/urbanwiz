"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    title: "Human-Centered Operations",
    body: "Reliable teams built around your business, not around shift patterns.",
    meta: "People",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.5" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 19c0-3 2.7-5.2 6-5.2s6 2.2 6 5.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15 19c0-2.4 2-4.2 4.5-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Technology-Led Workflows",
    body: "Efficiency through automation and AI — humans where judgment matters.",
    meta: "Systems",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 20h6M12 17v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 11l2.5 2.5L13 10l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Long-Term Partnerships",
    body: "We operate as an extension of your team, measured in years not quarters.",
    meta: "Tenure",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-4.5-7-10a5 5 0 019-3 5 5 0 019 3c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Scalable Support",
    body: "From early-stage startups to enterprises serving millions.",
    meta: "Range",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l5-5 4 4 8-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease, delay },
});

export default function Partner() {
  return (
    <section
      id="partner"
      className="relative py-16 lg:py-20 bg-ivory overflow-hidden"
    >
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.08), rgba(255,87,34,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-0 w-[460px] h-[460px] rounded-full pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.06), rgba(30,58,186,0) 70%)",
        }}
      />

      <div className="container-content relative">
        {/* Editorial header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
          className="flex items-center gap-3"
        >
          <span className="block w-7 h-[2px] bg-orange" />
          <span className="text-[11px] uppercase tracking-[0.28em] text-orange font-semibold">
            Why Urbanwiz
          </span>
          <span
            className="hidden sm:block flex-1 max-w-[160px] h-[1.5px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,87,34,0.6), rgba(30,58,186,0.45) 60%, transparent)",
            }}
          />
        </motion.div>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="lg:col-span-8 font-display text-[38px] sm:text-[50px] xl:text-[60px] tracking-[-0.025em] leading-[0.98] text-navy font-bold"
          >
            A partner that <span className="text-orange">earns</span> trust
            quietly.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-4 lg:pb-3 text-[14px] leading-[1.7] text-navy/55 max-w-sm lg:ml-auto lg:text-right"
          >
            We&apos;ve spent years building a calm, careful operations
            practice — the kind founders return to because the work
            speaks for itself.
          </motion.p>
        </div>

        {/* Image + cards row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left — editorial image */}
          <motion.div
            {...reveal(0)}
            className="lg:col-span-5 relative"
          >
            {/* Decorative orange ring peeking from top-right */}
            <motion.span
              aria-hidden
              initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, delay: 0.3, ease }}
              className="hidden lg:block absolute -top-6 -right-6 w-28 h-28 rounded-full border border-orange/30 pointer-events-none z-10"
            />

            <div className="relative h-full min-h-[460px] overflow-hidden rounded-3xl border border-navy/8 shadow-[0_2px_4px_rgba(15,19,48,0.03),0_30px_70px_-24px_rgba(15,19,48,0.25)]">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                alt="Urbanwiz operations team"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-[1400ms] ease-editorial hover:scale-[1.04]"
              />
              {/* Strong gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/45 to-navy/15 pointer-events-none" />
              {/* Dot grid */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none opacity-[0.22]"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                  maskImage:
                    "linear-gradient(to top, black 40%, transparent 80%)",
                  WebkitMaskImage:
                    "linear-gradient(to top, black 40%, transparent 80%)",
                }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-ivory/10 rounded-3xl pointer-events-none" />

              {/* Top-left location pill */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/12 backdrop-blur-md border border-white/15 px-3 py-1.5">
                <span className="grid place-items-center w-3.5 h-3.5 text-orange">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-white font-semibold">
                  Salt Lake · Kolkata
                </span>
              </div>

              {/* Bottom editorial caption */}
              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8 text-ivory">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="block w-6 h-[2px] bg-orange" />
                  <span className="text-[10px] uppercase tracking-[0.24em] text-orange font-semibold">
                    Our practice
                  </span>
                </div>
                <div className="font-display text-[24px] sm:text-[28px] xl:text-[30px] tracking-[-0.02em] leading-[1.15] font-bold">
                  Trust is built in the small,{" "}
                  <span className="text-orange">unseen details.</span>
                </div>

                {/* Stats strip */}
                <div className="mt-6 pt-5 border-t border-ivory/15 flex items-center gap-5 lg:gap-7">
                  {[
                    { v: "150+", l: "Operators" },
                    { v: "8+", l: "Years" },
                    { v: "24×7", l: "Coverage" },
                  ].map((stat, idx) => (
                    <div key={stat.l} className="flex items-center gap-5 lg:gap-7">
                      <div>
                        <div className="font-display text-[24px] sm:text-[26px] text-ivory leading-none tabular-nums font-bold">
                          {stat.v}
                        </div>
                        <div className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-ivory/55 font-semibold">
                          {stat.l}
                        </div>
                      </div>
                      {idx < 2 && (
                        <span className="block w-px h-10 bg-ivory/15" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom gradient hairline */}
              <span
                aria-hidden
                className="absolute left-0 right-0 bottom-0 h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,87,34,0.7) 0%, rgba(30,58,186,0.6) 100%)",
                }}
              />
            </div>
          </motion.div>

          {/* Right — pillar cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
            }}
            className="lg:col-span-7 grid grid-cols-1 gap-3"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, x: 18 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
                }}
              >
                <PillarCard p={p} i={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  p,
  i,
}: {
  p: typeof pillars[number];
  i: number;
}) {
  return (
    <div className="group relative overflow-hidden flex items-center gap-5 bg-white border border-navy/8 rounded-2xl px-5 sm:px-6 py-5 transition-all duration-500 ease-editorial hover:border-navy/15 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgba(15,19,48,0.20)] shadow-[0_1px_2px_rgba(15,19,48,0.03)]">
      {/* Inner top highlight */}
      <span
        aria-hidden
        className="absolute top-0 left-6 right-6 h-px bg-white pointer-events-none"
      />

      {/* Corner orange wash on hover */}
      <span
        aria-hidden
        className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.14), rgba(255,87,34,0) 70%)",
        }}
      />

      {/* Big watermark number behind content */}
      <span
        aria-hidden
        className="absolute top-1 right-3 font-display text-[64px] sm:text-[72px] leading-none font-black tracking-[-0.04em] pointer-events-none select-none"
        style={{ color: "rgba(8,18,59,0.045)" }}
      >
        {String(i + 1).padStart(2, "0")}
      </span>

      {/* Icon tile */}
      <motion.span
        whileHover={{ rotate: -6, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="relative shrink-0 grid place-items-center w-14 h-14 rounded-2xl text-orange"
        style={{
          background: "#FFF2EB",
          boxShadow:
            "0 8px 18px -6px rgba(255,87,34,0.25), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        {p.icon}
      </motion.span>

      {/* Content */}
      <div className="relative min-w-0 flex-1">
        <div className="flex items-center gap-3 mb-1.5">
          <span className="font-display text-[12px] text-navy/40 tabular-nums font-semibold">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="block w-3 h-px bg-orange/60" />
          <span className="text-[9.5px] uppercase tracking-[0.24em] text-orange font-semibold">
            {p.meta}
          </span>
        </div>
        <h3 className="font-display text-[17px] sm:text-[19px] tracking-[-0.01em] text-navy leading-tight font-bold">
          {p.title}
        </h3>
        <p className="mt-1.5 text-[12.5px] sm:text-[13px] leading-[1.55] text-navy/55 max-w-md">
          {p.body}
        </p>
      </div>

      {/* Reveal arrow */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="relative shrink-0 text-orange opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-editorial"
      >
        <path
          d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Bottom orange hairline that fills on hover */}
      <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange/0 group-hover:bg-orange transition-colors duration-500" />
    </div>
  );
}
