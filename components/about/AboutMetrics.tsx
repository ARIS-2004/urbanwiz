"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type Metric = {
  value: number;
  suffix?: string;
  display?: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
};

const metrics: Metric[] = [
  {
    value: 150,
    suffix: "+",
    label: "Operators",
    sub: "Trained, in-house",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2.2" />
        <path d="M3 19c.8-3 3.2-5 6-5s5.2 2 6 5" />
        <path d="M14 18c.5-2 2-3.4 4-3.4s3.5 1.4 4 3.4" />
      </svg>
    ),
  },
  {
    value: 8,
    suffix: "+",
    label: "Years",
    sub: "Building operations",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <path d="M4 7h16v13H4z" />
        <path d="M4 11h16M8 4v6M16 4v6" />
      </svg>
    ),
  },
  {
    value: 60,
    suffix: "+",
    label: "Clients served",
    sub: "Across sectors",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 11l9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    value: 12,
    suffix: "+",
    label: "Countries",
    sub: "Reached & supported",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </svg>
    ),
  },
  {
    value: 0,
    display: "6",
    label: "Languages",
    sub: "Voice & written",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" {...stroke}>
        <path d="M3 5h12M9 3v2M11 5c0 5-3 9-7 11M5 9c1 5 4 9 8 10" />
        <path d="M14 21l4-10 4 10M15.5 17h5" />
      </svg>
    ),
  },
];

export default function AboutMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      ref={ref}
      className="relative border-y border-navy/8 overflow-hidden py-10 sm:py-14 lg:py-16 bg-ivory"
    >
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute -top-24 right-0 w-[440px] h-[440px] rounded-full pointer-events-none opacity-65"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.08), rgba(255,87,34,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 left-0 w-[420px] h-[420px] rounded-full pointer-events-none opacity-55"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.06), rgba(30,58,186,0) 70%)",
        }}
      />

      <div className="container-content relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-3"
          >
            <span className="block w-7 h-[2px] bg-orange" />
            <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
              By the numbers
            </span>
            <span className="block w-7 h-[2px] bg-orange" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="mt-4 font-display text-[26px] sm:text-[34px] xl:text-[40px] tracking-[-0.025em] leading-[1.05] text-navy font-bold"
          >
            Eight quiet years of <span className="text-orange">careful work.</span>
          </motion.h2>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3.5 lg:gap-4">
          {metrics.map((m, i) => {
            const isBlue = i % 2 === 1;
            return (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: i * 0.07,
                  ease,
                }}
                className="group relative rounded-xl sm:rounded-2xl bg-white border border-navy/8 p-3 sm:p-5 shadow-[0_1px_2px_rgba(15,19,48,0.03),0_18px_36px_-22px_rgba(15,19,48,0.18)] hover:border-navy/15 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(15,19,48,0.03),0_28px_50px_-22px_rgba(15,19,48,0.26)] transition-all duration-500 ease-editorial overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute top-0 left-6 right-6 h-px bg-white pointer-events-none"
                />
                <span
                  aria-hidden
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: isBlue
                      ? "radial-gradient(closest-side, rgba(30,58,186,0.14), rgba(30,58,186,0) 70%)"
                      : "radial-gradient(closest-side, rgba(255,87,34,0.16), rgba(255,87,34,0) 70%)",
                  }}
                />

                <motion.span
                  whileHover={{ rotate: -8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`relative grid place-items-center w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${
                    isBlue ? "text-blue-deep" : "text-orange"
                  }`}
                  style={{
                    background: isBlue ? "rgba(30,58,186,0.08)" : "#FFF2EB",
                    boxShadow: isBlue
                      ? "0 8px 18px -6px rgba(30,58,186,0.28), inset 0 1px 0 rgba(255,255,255,0.7)"
                      : "0 8px 18px -6px rgba(255,87,34,0.28), inset 0 1px 0 rgba(255,255,255,0.7)",
                  }}
                >
                  {m.icon}
                </motion.span>

                <div className="relative mt-2.5 sm:mt-4 font-display text-[22px] sm:text-[32px] xl:text-[36px] leading-none tracking-[-0.025em] text-navy font-bold">
                  {m.display ? (
                    m.display
                  ) : (
                    <Counter
                      value={m.value}
                      suffix={m.suffix}
                      inView={inView}
                      delay={i * 0.07}
                    />
                  )}
                </div>

                <span
                  aria-hidden
                  className={`relative block mt-2 sm:mt-3 w-6 sm:w-8 h-[2px] rounded-full ${
                    isBlue ? "bg-blue-deep/30" : "bg-orange/40"
                  }`}
                />

                <div className="relative mt-2 sm:mt-3">
                  <div className="text-[9px] sm:text-[10.5px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-navy font-bold leading-tight">
                    {m.label}
                  </div>
                  <div className="mt-0.5 sm:mt-1 text-[9.5px] sm:text-[11px] text-navy/50 leading-tight">
                    {m.sub}
                  </div>
                </div>

                <span
                  className={`absolute left-0 right-0 bottom-0 h-[2px] transition-colors duration-500 ${
                    isBlue
                      ? "bg-transparent group-hover:bg-blue-deep"
                      : "bg-transparent group-hover:bg-orange"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Counter({
  value,
  suffix = "",
  inView,
  delay = 0,
}: {
  value: number;
  suffix?: string;
  inView: boolean;
  delay?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, value, delay, count, rounded]);

  return (
    <span className="tabular-nums">
      <span ref={ref}>0</span>
      <span className="text-orange">{suffix}</span>
    </span>
  );
}
