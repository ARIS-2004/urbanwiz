"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Brand = {
  name: string;
  style: string;
  mark?: string;
  accent?: "orange" | "blue";
};

const rowOne: Brand[] = [
  { name: "Shree Ganesh Realty", style: "font-display font-bold tracking-[-0.02em] text-navy text-[18px]" },
  { name: "MERLIN", style: "font-display font-black tracking-[0.3em] text-navy text-[16px]", mark: "GROUP", accent: "orange" },
  { name: "Indus Health", style: "font-display italic font-semibold text-blue-deep text-[18px]" },
  { name: "Bengal Mercantile", style: "font-display font-bold tracking-tight text-navy text-[17px]", accent: "blue" },
  { name: "Wayside", style: "font-display font-black tracking-[-0.04em] text-orange text-[20px]", mark: "logistics" },
  { name: "Lotus Capital", style: "font-display font-semibold tracking-wide text-navy text-[17px]" },
  { name: "Calcutta Holdings", style: "font-display font-bold tracking-tight text-blue-deep text-[16px]", accent: "blue" },
];

const rowTwo: Brand[] = [
  { name: "Sundar Steelworks", style: "font-display font-bold tracking-tight text-navy text-[17px]", accent: "orange" },
  { name: "EASTERN", style: "font-display font-black tracking-[0.22em] text-navy text-[16px]", mark: "Capital" },
  { name: "Pioneer Foods", style: "font-display font-semibold tracking-tight text-orange text-[19px]" },
  { name: "Ganga Realty", style: "font-display italic font-bold text-blue-deep text-[18px]", accent: "blue" },
  { name: "Salt Lake Ventures", style: "font-display font-bold tracking-tight text-navy text-[16px]" },
  { name: "Atlas", style: "font-display font-black tracking-[-0.05em] text-navy text-[22px]", mark: "industries", accent: "orange" },
  { name: "Howrah Mills", style: "font-display font-semibold tracking-tight text-navy text-[17px]" },
];

export default function Clients() {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-14 lg:py-16"
      style={{ backgroundColor: "#FAF8F6" }}
    >
      {/* Layered ambient washes */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.06, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.14), rgba(255,87,34,0) 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-32 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.12), rgba(30,58,186,0) 70%)",
        }}
      />

      {/* Faint diagonal hairline pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(15,19,48,0.025) 0 1px, transparent 1px 22px)",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Decorative dot grids */}
      <div
        aria-hidden
        className="absolute top-12 left-8 hidden lg:block w-28 h-20 opacity-70 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,87,34,0.42) 1px, transparent 1px)",
          backgroundSize: "11px 11px",
          maskImage:
            "radial-gradient(closest-side, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(closest-side, black, transparent 80%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-12 right-8 hidden lg:block w-28 h-20 opacity-70 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(30,58,186,0.40) 1px, transparent 1px)",
          backgroundSize: "11px 11px",
          maskImage:
            "radial-gradient(closest-side, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(closest-side, black, transparent 80%)",
        }}
      />

      {/* Top + bottom hairline gradients */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease }}
        className="absolute top-0 left-0 right-0 h-px origin-left"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,87,34,0.5) 50%, transparent)",
        }}
      />
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease }}
        className="absolute bottom-0 left-0 right-0 h-px origin-right"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(30,58,186,0.5) 50%, transparent)",
        }}
      />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, ease }}
            className="font-display text-[24px] sm:text-[36px] xl:text-[52px] tracking-[-0.025em] leading-[1.05] text-navy font-bold"
          >
            Powering{" "}
            <span className="text-orange">150+ growing teams</span>{" "}
            <span className="text-blue-deep">across India.</span>
          </motion.h2>

          {/* Rating card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-white border border-navy/8 pl-3 pr-5 py-2 shadow-[0_1px_2px_rgba(15,19,48,0.03),0_14px_28px_-18px_rgba(15,19,48,0.20)]"
          >
            <span className="flex items-center gap-0.5 text-orange">
              {Array.from({ length: 5 }).map((_, s) => (
                <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M7 1l1.8 3.7L13 5.4l-3 2.9.7 4.2L7 10.6 3.3 12.5 4 8.3 1 5.4l4.2-.7L7 1z" />
                </svg>
              ))}
            </span>
            <span className="font-display text-[14px] text-navy font-bold tabular-nums">
              4.9<span className="text-navy/55">/5</span>
            </span>
            <span className="block w-px h-3.5 bg-navy/15" />
            <span className="text-[11.5px] text-navy/60 font-medium">
              From real businesses we work with every day
            </span>
          </motion.div>
        </div>

        {/* Logos — two marquee rows */}
        <div className="relative space-y-3.5">
          {/* Fade masks */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-28 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #FAF8F6 0%, rgba(250,248,246,0) 100%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 w-28 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(270deg, #FAF8F6 0%, rgba(250,248,246,0) 100%)",
            }}
          />

          <MarqueeRow brands={rowOne} duration={42} />
          <MarqueeRow brands={rowTwo} duration={48} reverse />
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({
  brands,
  duration,
  reverse = false,
}: {
  brands: Brand[];
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex items-stretch gap-3.5 w-max"
      >
        {[...brands, ...brands].map((b, i) => (
          <BrandCard key={`${b.name}-${i}`} brand={b} />
        ))}
      </motion.div>
    </div>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  const accent = brand.accent;
  return (
    <div
      className={`group shrink-0 w-[140px] sm:w-[200px] lg:w-[220px] h-[68px] sm:h-[92px] grid place-items-center rounded-xl sm:rounded-2xl border px-3 sm:px-5 overflow-hidden relative transition-all duration-500 ease-editorial hover:-translate-y-0.5 ${
        accent === "orange"
          ? "bg-white border-orange/15 hover:border-orange/35"
          : accent === "blue"
          ? "bg-white border-blue-deep/15 hover:border-blue-deep/40"
          : "bg-white border-navy/8 hover:border-navy/15"
      }`}
      style={{
        boxShadow:
          accent === "orange"
            ? "0 1px 2px rgba(15,19,48,0.03), 0 14px 28px -22px rgba(255,87,34,0.30)"
            : accent === "blue"
            ? "0 1px 2px rgba(15,19,48,0.03), 0 14px 28px -22px rgba(30,58,186,0.30)"
            : "0 1px 2px rgba(15,19,48,0.03), 0 14px 28px -22px rgba(15,19,48,0.18)",
      }}
    >
      {/* Inner top highlight */}
      <span
        aria-hidden
        className="absolute top-0 left-5 right-5 h-px bg-white pointer-events-none"
      />

      {/* Accent corner wash */}
      {accent && (
        <span
          aria-hidden
          className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              accent === "orange"
                ? "radial-gradient(closest-side, rgba(255,87,34,0.18), rgba(255,87,34,0) 70%)"
                : "radial-gradient(closest-side, rgba(30,58,186,0.18), rgba(30,58,186,0) 70%)",
          }}
        />
      )}

      {/* Tiny accent dot top-left */}
      {accent && (
        <span
          aria-hidden
          className={`absolute top-3 left-3 block w-1.5 h-1.5 rounded-full ${
            accent === "orange" ? "bg-orange" : "bg-blue-deep"
          }`}
        />
      )}

      <div className="relative text-center leading-tight scale-75 sm:scale-100 origin-center">
        <div className={brand.style}>{brand.name}</div>
        {brand.mark && (
          <div className="mt-1 text-[9.5px] uppercase tracking-[0.28em] text-navy/45 font-semibold">
            {brand.mark}
          </div>
        )}
      </div>

      {/* Bottom accent hairline that fills on hover */}
      {accent && (
        <span
          className={`absolute left-0 right-0 bottom-0 h-[2px] transition-colors duration-500 ${
            accent === "orange"
              ? "bg-transparent group-hover:bg-orange"
              : "bg-transparent group-hover:bg-blue-deep"
          }`}
        />
      )}
    </div>
  );
}
