"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Metric = {
  value: number;
  suffix?: string;
  display?: string;
  label: string;
};

const metrics: Metric[] = [
  { value: 150, suffix: "+", label: "Professionals" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 0, display: "24×7", label: "Support" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section ref={ref} className="py-6 bg-ivory border-y border-navy/8">
      <div className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={[
                "py-4 px-4 sm:px-6 flex items-center gap-4",
                i % 2 === 1 ? "border-l border-navy/8" : "",
                i >= 2 ? "border-t border-navy/8 lg:border-t-0" : "",
                i > 0 ? "lg:border-l lg:border-navy/8" : "",
              ].join(" ")}
            >
              <div className="font-display text-[28px] sm:text-[32px] leading-none tracking-tight text-navy">
                {m.display ? (
                  m.display
                ) : (
                  <Counter
                    value={m.value}
                    suffix={m.suffix}
                    inView={inView}
                    delay={i * 0.08}
                  />
                )}
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-navy/60 font-semibold leading-tight">
                {m.label}
              </div>
            </motion.div>
          ))}
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
      duration: 1.4,
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
      {suffix}
    </span>
  );
}
