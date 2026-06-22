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
    title: "Share",
    body: "Tell us about your business and the operational friction you're feeling.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M21 12a9 9 0 11-3.5-7.1L21 4l-1 3.5A8.96 8.96 0 0121 12z" />
        <path d="M8 11h8M8 14h5" />
      </svg>
    ),
  },
  {
    n: "02",
    eyebrow: "Step two",
    title: "Respond",
    body: "A senior team member reviews your needs and replies personally.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    ),
  },
  {
    n: "03",
    eyebrow: "Step three",
    title: "Connect",
    body: "A thirty-minute conversation about goals, scope and solutions.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </svg>
    ),
  },
  {
    n: "04",
    eyebrow: "Step four",
    title: "Launch",
    body: "Documented playbooks, phased ramp and a smooth onboarding into operations.",
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}>
        <path d="M5 19c0-3 2-7 7-12 5 5 7 9 7 12-2 1-4 1-7 1s-5 0-7-1z" />
        <circle cx="12" cy="10" r="1.6" />
        <path d="M7 21l-1-3M17 21l1-3" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden py-14 lg:py-16"
      style={{ backgroundColor: "#FAF8F6" }}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-14">
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
              className="mt-5 font-display text-[36px] sm:text-[46px] xl:text-[54px] tracking-[-0.025em] leading-[0.98] text-navy font-bold"
            >
              From first note to{" "}
              <span className="text-orange">live</span>{" "}
              <span className="text-blue-deep">operations.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-4 lg:pb-2 text-[13.5px] text-navy/55 leading-[1.65] max-w-md lg:ml-auto lg:text-right"
          >
            A four-step path designed to feel deliberate, not transactional.
            Built around clarity, communication and outcomes.
          </motion.p>
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
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 lg:gap-x-6"
        >
          {steps.map((step, idx) => {
            const isBlue = idx % 2 === 1;
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
                    className="absolute -top-6 -left-3 z-0 font-display text-[110px] sm:text-[130px] xl:text-[150px] leading-none font-black tracking-[-0.05em] pointer-events-none select-none"
                    style={{
                      color: isBlue
                        ? "rgba(30,58,186,0.14)"
                        : "rgba(255,87,34,0.16)",
                    }}
                  >
                    {step.n}
                  </span>

                  {/* Image card */}
                  <div
                    className="relative z-10 aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_28px_50px_-18px_rgba(15,19,48,0.32)] transition-transform duration-500 ease-editorial group-hover:scale-[1.02]"
                    style={{ transform: "skewX(-5deg)" }}
                  >
                    <div
                      style={{ transform: "skewX(5deg) scale(1.12)" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={step.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 280px"
                        className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.08]"
                      />
                    </div>
                    <div
                      aria-hidden
                      className="absolute inset-0 ring-1 ring-inset ring-white/15 pointer-events-none"
                      style={{ transform: "skewX(5deg)" }}
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent pointer-events-none"
                      style={{ transform: "skewX(5deg)" }}
                    />
                  </div>

                  {/* Icon badge — overlaps the image bottom-left */}
                  <motion.span
                    whileHover={{ rotate: -8, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`absolute z-20 -bottom-0 left-4 grid place-items-center w-14 h-14 rounded-2xl bg-white border border-navy/8 ${
                      isBlue ? "text-blue-deep" : "text-orange"
                    }`}
                    style={{
                      boxShadow: isBlue
                        ? "0 18px 36px -10px rgba(30,58,186,0.45), inset 0 1px 0 rgba(255,255,255,0.85)"
                        : "0 18px 36px -10px rgba(255,87,34,0.50), inset 0 1px 0 rgba(255,255,255,0.85)",
                    }}
                  >
                    {step.icon}
                  </motion.span>

                </div>

                {/* Text below */}
                <div className="mt-4 pl-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`block w-3 h-[1.5px] rounded-full ${
                        isBlue ? "bg-blue-deep" : "bg-orange"
                      }`}
                    />
                    <div
                      className={`text-[10px] uppercase tracking-[0.26em] font-semibold ${
                        isBlue ? "text-blue-deep" : "text-orange"
                      }`}
                    >
                      {step.eyebrow}
                    </div>
                  </div>
                  <h3 className="mt-2.5 font-display text-[22px] sm:text-[24px] xl:text-[28px] tracking-[-0.02em] leading-[1.08] text-navy font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[12.5px] leading-[1.6] text-navy/55 max-w-[260px]">
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
