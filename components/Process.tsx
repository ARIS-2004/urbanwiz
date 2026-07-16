"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const steps = [
  {
    n: "01",
    eyebrow: "Step one",
    title: "Listen",
    body: "Before offering solutions, we listen — to your business, your people, and the friction you're feeling.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M4 12a8 8 0 0116 0v3" />
        <path d="M4 15v-3M20 15v-3M6 15h2v5H6zM16 15h2v5h-2z" />
      </svg>
    ),
  },
  {
    n: "02",
    eyebrow: "Step two",
    title: "Build",
    body: "We design operational systems that fit your organisation — never the other way around.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 21V10l9-6 9 6v11" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    n: "03",
    eyebrow: "Step three",
    title: "Support",
    body: "Our teams become a reliable extension of yours — delivering consistent, high-quality service every day.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M4 13a8 8 0 1116 0v3a2 2 0 01-2 2h-1v-6h3" />
        <path d="M4 13v3a2 2 0 002 2h1v-6H4" />
      </svg>
    ),
  },
  {
    n: "04",
    eyebrow: "Step four",
    title: "Improve",
    body: "Through continuous feedback, innovation and collaboration, we help your business grow stronger over time.",
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 17l5-5 4 4 8-9" />
        <path d="M15 7h5v5" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-16 lg:py-20 bg-[#FAF8F6] dark:bg-[#0E1230] transition-colors duration-300"
    >
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[460px] h-[460px] rounded-full pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.08), rgba(255,87,34,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-0 w-[440px] h-[440px] rounded-full pointer-events-none opacity-55"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.06), rgba(30,58,186,0) 70%)",
        }}
      />

      <div className="container-wide relative">
        {/* Top header — single row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3"
            >
              <span className="block w-7 h-[2px] bg-orange" />
              <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
                How we work
              </span>
              <span
                className="hidden sm:block flex-1 max-w-[200px] h-[1.5px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,87,34,0.6), rgba(30,58,186,0.45) 60%, transparent)",
                }}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-5 font-display text-[36px] sm:text-[46px] xl:text-[54px] tracking-[-0.025em] leading-[0.98] text-navy dark:text-ivory font-bold"
            >
              Listen. <span className="text-orange">Build.</span>{" "}
              <span className="text-blue-deep">Support. Improve.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-4 lg:pb-2 lg:ml-auto max-w-md"
          >
            <span
              aria-hidden
              className="block w-9 h-[2px] rounded-full bg-orange/60 lg:ml-auto"
            />
            <p className="mt-4 text-[15px] text-navy/60 dark:text-ivory/72 leading-[1.75] lg:text-right tracking-[-0.002em]">
              A four-step path designed to feel deliberate, not transactional.
              Built around clarity, communication and outcomes.
            </p>
          </motion.div>
        </div>

        {/* 4-step timeline */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
          }}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-7"
        >
          {steps.map((step, idx) => {
            const isBlue = idx % 2 === 1;
            const accent = isBlue ? "#1E3ABA" : "#FF5722";
            return (
              <motion.div
                key={step.n}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                }}
                className="group relative"
              >
                {/* Image area + overlapping icon */}
                <div className="relative pb-8">
                  {/* Big watermark number — peeks out top-left from behind the image */}
                  <span
                    aria-hidden
                    className="absolute -top-7 -left-3 z-0 font-display text-[104px] sm:text-[124px] xl:text-[140px] leading-none font-black tracking-[-0.05em] pointer-events-none select-none"
                    style={{
                      color: isBlue
                        ? "rgba(30,58,186,0.12)"
                        : "rgba(255,87,34,0.14)",
                    }}
                  >
                    {step.n}
                  </span>

                  {/* Accent offset plate behind the image */}
                  <span
                    aria-hidden
                    className="absolute z-0 -bottom-2 left-3 right-5 h-full rounded-[26px] transition-transform duration-500 ease-editorial group-hover:translate-y-1"
                    style={{ background: `${accent}14` }}
                  />

                  {/* Image card — clean rounded frame (no skew) */}
                  <div className="relative z-10 aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_26px_50px_-20px_rgba(15,19,48,0.30)] transition-all duration-500 ease-editorial group-hover:-translate-y-1 group-hover:shadow-[0_40px_70px_-24px_rgba(15,19,48,0.42)]">
                    <Image
                      src={step.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.06]"
                    />
                    {/* Refined tint — subtle top-down navy + accent floor */}
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(15,19,48,0.10) 0%, rgba(15,19,48,0) 40%, rgba(15,19,48,0.18) 100%)",
                      }}
                    />
                    {/* Inner ring for crispness */}
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/15 pointer-events-none"
                    />
                    {/* Accent hairline along the bottom, grows on hover */}
                    <span
                      aria-hidden
                      className="absolute left-5 right-5 bottom-0 h-[2px] rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-editorial"
                      style={{ background: accent }}
                    />
                  </div>

                  {/* Icon badge — overlaps the image bottom-left */}
                  <motion.span
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="absolute z-20 bottom-0 left-5 grid place-items-center w-14 h-14 rounded-2xl bg-white dark:bg-[#12173a] border border-navy/8 dark:border-white/10"
                    style={{
                      color: accent,
                      boxShadow: `0 18px 36px -10px ${accent}80, inset 0 1px 0 rgba(255,255,255,0.85)`,
                    }}
                  >
                    {step.icon}
                  </motion.span>
                </div>

                {/* Text below — more premium hierarchy */}
                <div className="mt-6 pl-1">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="block w-5 h-[2px] rounded-full"
                      style={{ background: accent }}
                    />
                    <div
                      className="text-[10px] uppercase tracking-[0.3em] font-bold"
                      style={{ color: accent }}
                    >
                      {step.eyebrow}
                    </div>
                  </div>
                  <h3 className="mt-3.5 font-display text-[26px] sm:text-[29px] xl:text-[32px] tracking-[-0.025em] leading-[1.02] text-navy dark:text-ivory font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] sm:text-[15px] leading-[1.75] text-navy/65 dark:text-ivory/75 max-w-[262px] tracking-[-0.002em]">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
