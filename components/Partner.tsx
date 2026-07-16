"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const pillars = [
  {
    title: "Human-Centered Approach",
    body: "People are at the heart of everything we do — from onboarding to delivery.",
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
    title: "Tailored Business Solutions",
    body: "Every engagement is designed around your unique needs — never a template.",
    meta: "Fit",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 4l6 6M14 14l6 6M4 20l6-6M14 10l6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Operational Excellence",
    body: "Structured processes and clear SLAs that deliver consistent results, day after day.",
    meta: "Rigour",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Scalable Growth",
    body: "Flexible support that evolves with your business — from first hire to enterprise volume.",
    meta: "Range",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l5-5 4 4 8-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Transparency & Accountability",
    body: "Open communication and measurable outcomes — reported clearly, on schedule.",
    meta: "Trust",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Partnership Beyond Service",
    body: "Long-lasting relationships built on shared success, not transactional handoffs.",
    meta: "Tenure",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-4.5-7-10a5 5 0 019-3 5 5 0 019 3c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
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
      className="relative py-16 lg:py-20 bg-ivory dark:bg-[#0B0E24] overflow-hidden transition-colors duration-300"
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
            Why partner with Urbanwiz
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
            className="lg:col-span-8 font-display text-[38px] sm:text-[50px] xl:text-[60px] tracking-[-0.025em] leading-[0.98] text-navy dark:text-ivory font-bold"
          >
            Six reasons companies <span className="text-orange">stay</span>{" "}
            with us.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-4 lg:pb-3 text-[14px] leading-[1.7] text-navy/55 dark:text-ivory/50 max-w-sm lg:ml-auto lg:text-right"
          >
            The principles that guide every account — from the first
            conversation through the long, quiet years of running
            operations alongside your team.
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

            <div className="relative h-full min-h-[460px] overflow-hidden rounded-3xl border border-navy/8 dark:border-white/10 shadow-[0_2px_4px_rgba(15,19,48,0.03),0_30px_70px_-24px_rgba(15,19,48,0.25)]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
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
                  Ecospace · New Town, Kolkata
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
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 auto-rows-fr"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={{
                  hidden: { opacity: 0, x: 18 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
                }}
                className="h-full"
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
  const num = String(i + 1).padStart(2, "0");
  return (
    <div className="group relative h-full overflow-hidden bg-white dark:bg-[#12173a] border border-navy/8 dark:border-white/10 rounded-[20px] pl-7 pr-6 sm:pr-7 py-7 transition-all duration-500 ease-editorial hover:border-orange/25 hover:-translate-y-1 hover:shadow-[0_30px_60px_-28px_rgba(15,19,48,0.26)] shadow-[0_1px_2px_rgba(15,19,48,0.03)]">
      {/* Inner top highlight */}
      <span
        aria-hidden
        className="absolute top-0 left-6 right-6 h-px bg-white dark:bg-white/10 pointer-events-none"
      />

      {/* Left accent rail — grows on hover */}
      <span
        aria-hidden
        className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-orange origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-editorial"
      />

      {/* Corner orange wash on hover */}
      <span
        aria-hidden
        className="absolute -top-16 -right-16 w-44 h-44 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.13), rgba(255,87,34,0) 70%)",
        }}
      />

      {/* Big watermark number — the visual anchor (replaces the icon) */}
      <span
        aria-hidden
        className="absolute -top-4 right-2 font-display text-[88px] sm:text-[104px] leading-none font-black tracking-[-0.06em] pointer-events-none select-none transition-all duration-500 group-hover:scale-105 text-orange/[0.07] dark:text-orange/25"
      >
        {num}
      </span>

      {/* Header row: number + meta chip */}
      <div className="relative flex items-center gap-3">
        <span
          className="font-display text-[13px] tabular-nums font-black leading-none"
          style={{ color: "#FF5722" }}
        >
          {num}
        </span>
        <span className="inline-flex items-center rounded-full bg-navy/[0.04] px-2.5 py-1 text-[9px] uppercase tracking-[0.24em] text-navy/55 dark:text-ivory/50 font-bold group-hover:bg-orange/10 group-hover:text-orange transition-colors duration-300">
          {p.meta}
        </span>
      </div>

      {/* Title + body */}
      <h3 className="relative mt-5 font-display text-[19px] sm:text-[21px] tracking-[-0.018em] text-navy dark:text-ivory leading-[1.14] font-bold">
        {p.title}
      </h3>
      <span
        aria-hidden
        className="relative mt-3.5 block w-8 h-[2px] rounded-full bg-orange/30 origin-left transition-all duration-500 ease-editorial group-hover:w-12 group-hover:bg-orange/60"
      />
      <p className="relative mt-3.5 text-[13px] leading-[1.7] text-navy/60 dark:text-ivory/55">
        {p.body}
      </p>
    </div>
  );
}
