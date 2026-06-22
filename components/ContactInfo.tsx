"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Variant = "tintOrange" | "white" | "tintBlue" | "fillNavy";

const items: {
  label: string;
  value: string;
  href: string;
  cta: string;
  variant: Variant;
  icon: React.ReactNode;
}[] = [
  {
    label: "General enquiries",
    value: "hello@urbanwiz.com",
    href: "mailto:hello@urbanwiz.com",
    cta: "Send",
    variant: "tintOrange",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Partnerships",
    value: "partners@urbanwiz.com",
    href: "mailto:partners@urbanwiz.com",
    cta: "Send",
    variant: "white",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17" cy="11" r="2.3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 19c.8-3 3.2-5 6-5s5.2 2 6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M14 18.5c.5-2 2-3.4 4-3.4s3.5 1.4 4 3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Careers",
    value: "careers@urbanwiz.com",
    href: "mailto:careers@urbanwiz.com",
    cta: "Send",
    variant: "tintBlue",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 90512 34876",
    href: "tel:+919051234876",
    cta: "Call now",
    variant: "fillNavy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 4h2.6L10.6 8 8.4 9.6c1.4 2.5 3.5 4.6 6 6L16 13.4 20 15.4V18c0 .8-.7 1.5-1.5 1.5-8.6 0-15.5-6.9-15.5-15.5C3 3.7 3.7 3 4.5 3z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const variants: Record<
  Variant,
  {
    card: string;
    tile: string;
    label: string;
    value: string;
    cta: string;
    arrow: string;
    bar: string;
    seq: string;
    glow: string;
  }
> = {
  tintOrange: {
    card:
      "bg-orange/[0.06] border-orange/15 hover:border-orange/35 hover:shadow-[0_18px_32px_-18px_rgba(255,87,34,0.35)]",
    tile: "bg-white text-orange shadow-[0_2px_6px_rgba(255,87,34,0.18)] group-hover:bg-orange group-hover:text-ivory",
    label: "text-navy/55",
    value: "text-navy group-hover:text-orange",
    cta: "text-orange",
    arrow: "group-hover:text-orange",
    bar: "group-hover:bg-orange",
    seq: "text-navy/35",
    glow:
      "radial-gradient(closest-side, rgba(255,87,34,0.22), rgba(255,87,34,0) 70%)",
  },
  white: {
    card:
      "bg-white border-navy/10 hover:border-blue-deep/35 hover:shadow-[0_18px_32px_-18px_rgba(30,58,186,0.30)]",
    tile: "bg-blue-deep/10 text-blue-deep group-hover:bg-blue-deep group-hover:text-ivory",
    label: "text-navy/55",
    value: "text-navy group-hover:text-blue-deep",
    cta: "text-blue-deep",
    arrow: "group-hover:text-blue-deep",
    bar: "group-hover:bg-blue-deep",
    seq: "text-navy/35",
    glow:
      "radial-gradient(closest-side, rgba(30,58,186,0.18), rgba(30,58,186,0) 70%)",
  },
  tintBlue: {
    card:
      "bg-blue-deep/[0.06] border-blue-deep/15 hover:border-blue-deep/40 hover:shadow-[0_18px_32px_-18px_rgba(30,58,186,0.32)]",
    tile: "bg-white text-blue-deep shadow-[0_2px_6px_rgba(30,58,186,0.18)] group-hover:bg-blue-deep group-hover:text-ivory",
    label: "text-navy/55",
    value: "text-navy group-hover:text-blue-deep",
    cta: "text-blue-deep",
    arrow: "group-hover:text-blue-deep",
    bar: "group-hover:bg-blue-deep",
    seq: "text-navy/35",
    glow:
      "radial-gradient(closest-side, rgba(30,58,186,0.20), rgba(30,58,186,0) 70%)",
  },
  fillNavy: {
    card:
      "bg-navy text-ivory border-navy/20 hover:border-orange/40 hover:shadow-[0_18px_32px_-18px_rgba(15,19,48,0.45)]",
    tile: "bg-orange/15 text-orange group-hover:bg-orange group-hover:text-ivory",
    label: "text-ivory/55",
    value: "text-ivory group-hover:text-orange",
    cta: "text-orange",
    arrow: "group-hover:text-orange",
    bar: "group-hover:bg-orange",
    seq: "text-ivory/35",
    glow:
      "radial-gradient(closest-side, rgba(255,87,34,0.30), rgba(255,87,34,0) 70%)",
  },
};

export default function ContactInfo() {
  return (
    <section className="relative bg-white border-y border-navy/8 overflow-hidden">
      {/* Soft ambient washes */}
      <div
        aria-hidden
        className="absolute -top-20 right-0 w-[45%] h-[120%] pointer-events-none opacity-70"
        style={{
          background:
            "radial-gradient(50% 60% at 70% 40%, rgba(255,87,34,0.06), rgba(255,87,34,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-1/3 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(60% 100% at 20% 50%, rgba(30,58,186,0.05), rgba(30,58,186,0) 70%)",
        }}
      />

      <div className="container-content relative py-10 lg:py-12">
        {/* Centered section header */}
        <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-9">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center justify-center gap-3"
          >
            <span
              className="block w-12 h-[1.5px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,87,34,0.7))",
              }}
            />
            <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
              Direct lines
            </span>
            <span
              className="block w-12 h-[1.5px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(30,58,186,0.55), transparent)",
              }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="mt-5 font-display text-[26px] sm:text-[34px] xl:text-[40px] tracking-[-0.025em] leading-[1.05] text-navy font-bold"
          >
            Reach the right team{" "}
            <span className="text-orange">within </span>
            <span className="text-blue-deep">one business day.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-4 text-[13px] text-navy/55 leading-[1.65] max-w-md mx-auto"
          >
            Every channel is read by a real person in our Salt Lake studio.
          </motion.p>
        </div>

        {/* 4 cards — centered, max-width */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-6xl mx-auto"
        >
          {items.map((it, i) => {
            const v = variants[it.variant];
            const isPhone = it.variant === "fillNavy";
            return (
              <motion.div
                key={it.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
              >
                <Link
                  href={it.href}
                  className={`group relative h-full rounded-2xl border ${v.card} px-3 pt-4 pb-4 sm:px-5 sm:pt-5 sm:pb-5 transition-all duration-500 ease-editorial hover:-translate-y-1 overflow-hidden flex flex-col items-center text-center`}
                >
                  {/* Top inset highlight */}
                  <span
                    aria-hidden
                    className={`absolute top-0 left-5 right-5 h-px ${
                      isPhone ? "bg-ivory/15" : "bg-white"
                    } pointer-events-none`}
                  />

                  {/* Corner glow on hover */}
                  <span
                    aria-hidden
                    className="absolute -top-14 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: v.glow }}
                  />

                  {/* Dot grid pattern (only on dark filled card) */}
                  {isPhone && (
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none opacity-[0.3]"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "14px 14px",
                      }}
                    />
                  )}

                  {/* Centered icon tile */}
                  <motion.span
                    whileHover={{ rotate: -6, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`relative mt-1 grid place-items-center w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl transition-all duration-500 ease-editorial ${v.tile}`}
                  >
                    {it.icon}
                  </motion.span>

                  {/* Label */}
                  <div
                    className={`relative mt-3 sm:mt-4 text-[9px] sm:text-[11px] uppercase tracking-[0.22em] sm:tracking-[0.26em] font-semibold ${v.label}`}
                  >
                    {it.label}
                  </div>

                  {/* Value */}
                  <div
                    className={`relative mt-1.5 sm:mt-2 text-[11.5px] sm:text-[15.5px] xl:text-[16px] font-semibold transition-colors duration-300 break-all leading-tight ${v.value}`}
                  >
                    {it.value}
                  </div>

                  {/* Bottom accent hairline */}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-[2.5px] bg-transparent ${v.bar} transition-colors duration-500`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
