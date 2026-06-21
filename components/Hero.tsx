"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative -mt-24 pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20 lg:pb-28 overflow-hidden bg-white">
      {/* Soft brand wash behind the right column */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(80% 70% at 70% 40%, rgba(30,58,186,0.10), rgba(30,58,186,0) 70%)",
        }}
      />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-10 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-6">
            <motion.div
              {...reveal(2.8)}
              className="flex items-center gap-3"
            >
              <span className="block w-7 h-[2px] bg-orange" />
              <span className="text-[11px] uppercase tracking-[0.28em] text-orange font-semibold">
                UrbanWizz · Est. Kolkata
              </span>
            </motion.div>

            <motion.h1
              {...reveal(2.95)}
              className="mt-4 sm:mt-5 font-display text-[34px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[72px] leading-[1.05] sm:leading-[1.02] tracking-[-0.02em] text-navy font-semibold"
            >
              Outsource the busy work.
              <br />
              Keep the{" "}
              <span className="text-orange">customer obsession.</span>
            </motion.h1>

            <motion.p
              {...reveal(3.1)}
              className="mt-5 sm:mt-7 max-w-xl text-[14.5px] sm:text-[15.5px] leading-[1.65] text-navy/60"
            >
              UrbanWizz runs the customer support, finance and back-office
              operations behind growing companies — with senior owners,
              transparent SLAs and zero hand-off drama.
            </motion.p>

            {/* CTAs */}
            <motion.div {...reveal(3.25)} className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-navy px-6 text-[13.5px] font-medium text-ivory hover:bg-blue-deep transition-colors"
              >
                Book a Conversation
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/services"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-white border border-navy/12 px-6 text-[13.5px] font-medium text-navy hover:border-navy/30 transition-colors"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Trust line */}
            <motion.div
              {...reveal(3.45)}
              className="mt-10 flex items-center gap-5"
            >
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=3&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=3&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=80&h=80&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=3&w=80&h=80&q=80",
                ].map((src) => (
                  <span
                    key={src}
                    className="block w-8 h-8 rounded-full ring-2 ring-ivory bg-cover bg-center"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                ))}
              </div>
              <div className="text-[12.5px] text-navy/55 leading-snug">
                <span className="font-medium text-navy">150+ operators</span>{" "}
                supporting teams across India and beyond.
              </div>
            </motion.div>
          </div>

          {/* Right — hero image */}
          <div className="lg:col-span-6 self-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[6/5] lg:aspect-[7/6] max-w-[720px] mx-auto"
            >
              <Image
                src="/herosection.png"
                alt="UrbanWizz operations dashboard"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain object-center"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.0, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-[480px] sm:h-[540px]"
    >
      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.1, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-6 w-[88%] sm:w-[78%] rounded-2xl bg-white border border-navy/10 shadow-[0_30px_60px_-30px_rgba(15,19,48,0.25)] overflow-hidden"
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-navy/8 bg-ivory/40">
          <div className="flex items-center gap-1.5">
            <span className="block w-2.5 h-2.5 rounded-full bg-navy/15" />
            <span className="block w-2.5 h-2.5 rounded-full bg-navy/15" />
            <span className="block w-2.5 h-2.5 rounded-full bg-navy/15" />
          </div>
          <div className="text-[10.5px] uppercase tracking-[0.2em] text-navy/45 font-semibold">
            Operations · Live
          </div>
          <div className="flex items-center gap-1.5 text-[10.5px] text-navy/55">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-orange animate-ping opacity-70" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-orange" />
            </span>
            All systems
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          {/* Metric row */}
          <div className="grid grid-cols-3 gap-3">
            <Metric label="Response" value="42s" trend="+12%" />
            <Metric label="Resolution" value="96%" trend="+3%" />
            <Metric label="CSAT" value="4.9" trend="—" subtle />
          </div>

          {/* Chart */}
          <div className="mt-4 rounded-xl border border-navy/8 p-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-[0.18em] text-navy/55 font-semibold">
                Tickets today
              </div>
              <div className="text-[11px] text-navy/45 tabular-nums">
                412 closed
              </div>
            </div>
            <div className="mt-3">
              <Sparkline />
            </div>
          </div>

          {/* Recent activity */}
          <div className="mt-4 space-y-2.5">
            {[
              { name: "Arijit C.", role: "Customer Support", action: "resolved 14 tickets" },
              { name: "Soumyajit B.", role: "Finance Ops", action: "reconciled 3 accounts" },
            ].map((r) => (
              <div
                key={r.name}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-ivory/50 border border-navy/6"
              >
                <span className="grid place-items-center w-7 h-7 rounded-full bg-navy text-ivory text-[10px] font-semibold tracking-tight">
                  {r.name.split(" ").map((x) => x[0]).join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[12px] text-navy font-medium leading-tight">
                    {r.name}
                  </div>
                  <div className="text-[10.5px] text-navy/50 leading-tight">
                    {r.role} · {r.action}
                  </div>
                </div>
                <span className="text-[10px] text-navy/40 tabular-nums">just now</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating message card — top left */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 3.4, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 w-[230px] rounded-2xl bg-white border border-navy/10 shadow-[0_20px_50px_-20px_rgba(15,19,48,0.25)] p-4"
      >
        <div className="flex items-center gap-2">
          <span className="grid place-items-center w-6 h-6 rounded-full bg-orange/10 text-orange">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
              <path d="M2 4.5c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2H6l-3 2.5v-2.5H4c-1.1 0-2-.9-2-2v-5z" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
          <div className="text-[11px] uppercase tracking-[0.18em] text-navy/55 font-semibold">
            New message
          </div>
        </div>
        <div className="mt-2.5 text-[12.5px] text-navy leading-snug">
          &ldquo;Thanks for the quick fix on the billing query — saved us hours.&rdquo;
        </div>
        <div className="mt-2.5 flex items-center justify-between text-[10px] text-navy/45">
          <span>Srijan Realty</span>
          <span className="tabular-nums">2 min ago</span>
        </div>
      </motion.div>

      {/* Floating SLA card — bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 3.55, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-2 bottom-4 w-[220px] rounded-2xl bg-navy text-ivory border border-navy shadow-[0_20px_50px_-20px_rgba(15,19,48,0.45)] p-4"
      >
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-[0.2em] text-ivory/55 font-semibold">
            SLA this month
          </div>
          <span className="text-[10px] text-orange uppercase tracking-[0.18em] font-semibold">
            Met
          </span>
        </div>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="font-display text-[32px] tracking-tight tabular-nums">
            99.4
          </span>
          <span className="text-[14px] text-ivory/60">%</span>
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-ivory/15 overflow-hidden">
          <div className="h-full w-[99%] bg-orange rounded-full" />
        </div>
        <div className="mt-2.5 text-[10.5px] text-ivory/55">
          Target 98%. We don&apos;t miss.
        </div>
      </motion.div>
    </motion.div>
  );
}

function Metric({
  label,
  value,
  trend,
  subtle = false,
}: {
  label: string;
  value: string;
  trend: string;
  subtle?: boolean;
}) {
  return (
    <div className="rounded-xl border border-navy/8 p-3">
      <div className="text-[10px] uppercase tracking-[0.2em] text-navy/45 font-semibold">
        {label}
      </div>
      <div className="mt-1.5 font-display text-[22px] tracking-tight text-navy tabular-nums">
        {value}
      </div>
      <div
        className={`mt-0.5 text-[10.5px] tabular-nums ${subtle ? "text-navy/40" : "text-orange"}`}
      >
        {trend}
      </div>
    </div>
  );
}

function Sparkline() {
  // Simple SVG sparkline
  const points = [22, 28, 24, 32, 30, 38, 34, 42, 38, 48, 44, 54];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const w = 240;
  const h = 56;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / (max - min)) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const area = `${path} L${w},${h} L0,${h} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-14" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF5722" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FF5722" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#sparkFill)" />
      <path d={path} fill="none" stroke="#FF5722" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
