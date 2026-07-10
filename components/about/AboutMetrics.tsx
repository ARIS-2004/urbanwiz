"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Stat = {
  value: number;
  suffix?: string;
  display?: string;
  label: string;
  sub: string;
};

const stats: Stat[] = [
  { value: 8, suffix: "+", label: "Years", sub: "Founded 2017" },
  { value: 50, suffix: "+", label: "Operators", sub: "Trained, in-house" },
  { value: 25, suffix: "+", label: "Clients served", sub: "Across sectors" },
  { value: 6, suffix: "", label: "Countries", sub: "IN · UK · US · UAE · SG · AU" },
  { value: 3, display: "3", label: "Languages", sub: "English · Hindi · Bengali" },
];

function Counter({
  target,
  suffix = "",
  display,
}: {
  target: number;
  suffix?: string;
  display?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = display ?? v;
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [count, rounded, target, isInView, display]);

  return (
    <span className="inline-flex items-baseline tabular-nums">
      <span ref={ref}>{display ?? "0"}</span>
      {suffix && <span className="text-orange">{suffix}</span>}
    </span>
  );
}

export default function AboutMetrics() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ backgroundColor: "#FAF8F6" }}
    >
      {/* Editorial rule */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(15,19,48,0.10) 50%, transparent 100%)",
        }}
      />

      <div className="container-content relative">
        {/* Header — same editorial system */}
        <div className="max-w-3xl mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-3"
          >
            <span className="block w-6 h-[2px] bg-orange" />
            <span className="text-[10.5px] uppercase tracking-[0.32em] text-navy/55 font-bold">
              By the numbers
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.85, ease }}
            className="mt-6 font-display text-[36px] sm:text-[52px] xl:text-[60px] tracking-[-0.03em] leading-[0.98] text-navy font-bold"
          >
            Eight years of{" "}
            <span className="text-orange">careful</span> work.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.25, duration: 0.85, ease }}
            className="mt-6 text-[15px] sm:text-[16px] leading-[1.75] text-navy/70 max-w-xl"
          >
            Modest, honest numbers. We would rather grow slowly and earn every
            client than promise more than we can deliver.
          </motion.p>
        </div>

        {/* Stats band — editorial magazine layout */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="relative rounded-3xl bg-white border border-navy/10 overflow-hidden shadow-[0_1px_2px_rgba(15,19,48,0.03),0_28px_56px_-30px_rgba(15,19,48,0.20)]"
        >
          <span
            aria-hidden
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, #FF5722 0%, #1E3ABA 100%)",
            }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-5 divide-x divide-navy/10 divide-y lg:divide-y-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`relative p-6 sm:p-7 lg:p-8 ${
                  i === stats.length - 1 && stats.length % 2 !== 0
                    ? "col-span-2 lg:col-span-1"
                    : ""
                }`}
              >
                <div className="font-display text-[42px] sm:text-[54px] xl:text-[64px] leading-none tracking-[-0.03em] text-navy font-black">
                  <Counter
                    target={s.value}
                    suffix={s.suffix}
                    display={s.display}
                  />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="block w-4 h-[2px] bg-orange" />
                  <div className="text-[10px] uppercase tracking-[0.24em] text-navy font-bold">
                    {s.label}
                  </div>
                </div>
                <div className="mt-1.5 text-[11.5px] text-navy/50 leading-tight">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
