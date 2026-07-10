"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type Service = {
  n: string;
  title: string;
  body: string;
  href: string;
  image: string;
  dark: boolean;
  icon: React.ReactNode;
  floatingNote?: string;
};

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    n: "01",
    title: "Customer Support Services",
    body: "Deliver exceptional customer experiences through professional, responsive support — voice, email and chat handled by specialists who learn your product.",
    href: "/services#customer-support",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    dark: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <path d="M4 13a8 8 0 1116 0v3a2 2 0 01-2 2h-1v-6h3" />
        <path d="M4 13v3a2 2 0 002 2h1v-6H4" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Data Operations",
    body: "Improve efficiency by outsourcing routine administrative and operational tasks — data entry, document processing, and structured workflows managed with discipline.",
    href: "/services#data-operations",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    dark: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" />
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Business Process Support",
    body: "Streamline workflows and optimise processes for better productivity — from operations design to continuous improvement, delivered with senior ownership.",
    href: "/services#business-process",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
    dark: true,
    floatingNote: "People. Process. Progress.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    ),
  },
];


export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.8), rgba(248,246,244,0.95))",
        backgroundColor: "#FAF8F6",
      }}
    >
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.08), rgba(255,87,34,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 -left-32 w-[480px] h-[480px] rounded-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.05), rgba(30,58,186,0) 70%)",
        }}
      />

      <div className="container-wide relative">
        {/* Top header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end mb-10 lg:mb-12">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3"
            >
              <span className="block w-6 h-[2px] bg-orange" />
              <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
                Services
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-4 font-display text-[40px] sm:text-[52px] xl:text-[60px] tracking-[-0.025em] leading-[0.98] text-navy font-bold"
            >
              Three core practices.
              <br />
              <span className="text-orange">One operating standard.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="mt-5 max-w-[550px] text-[15px] text-navy/55 leading-[1.7]"
            >
              Adopt one or run them all together. The same senior owners,
              the same SLAs, the same transparency — from customer support to
              data operations and full business process support.
            </motion.p>
          </div>

          <div className="lg:col-span-6 lg:flex lg:flex-col lg:items-end gap-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center gap-3 rounded-full px-7 text-[13px] font-medium text-ivory transition-all shadow-[0_20px_40px_-12px_rgba(8,18,59,0.35)] hover:shadow-[0_20px_40px_-8px_rgba(8,18,59,0.45)]"
                style={{ background: "#08123B" }}
              >
                Explore our services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-orange transition-transform group-hover:translate-x-1">
                  <path d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* 3-card grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.n}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
            >
              <ServiceCard s={s} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function ServiceCard({ s }: { s: Service }) {
  const dark = s.dark;
  return (
    <Link
      href={s.href}
      className={`group relative block h-full rounded-[30px] overflow-hidden transition-all duration-500 ease-editorial hover:-translate-y-2 ${
        dark
          ? "shadow-[0_24px_60px_-16px_rgba(8,18,59,0.40)] hover:shadow-[0_40px_80px_-16px_rgba(8,18,59,0.55)]"
          : "bg-white border border-[#ECECEC] shadow-[0_10px_40px_rgba(16,24,40,0.05)] hover:shadow-[0_28px_60px_rgba(16,24,40,0.12)]"
      }`}
      style={dark ? { backgroundColor: "#08123B" } : undefined}
    >
      {/* Inner top highlight (premium signature) */}
      <span
        aria-hidden
        className="absolute top-0 left-8 right-8 h-px pointer-events-none"
        style={{
          background: dark
            ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)"
            : "linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)",
        }}
      />

      {/* Ambient orange wash on dark cards */}
      {dark && (
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-[320px] h-[320px] rounded-full pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,87,34,0.25), rgba(255,87,34,0) 70%)",
          }}
        />
      )}

      {/* Subtle dot grid on dark cards */}
      {dark && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "linear-gradient(to right, black 30%, transparent 70%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 30%, transparent 70%)",
          }}
        />
      )}

      <div className="relative grid grid-cols-12 min-h-[300px] sm:min-h-[320px]">
        {/* Content — left */}
        <div
          className={`relative z-10 col-span-12 sm:col-span-7 p-7 lg:p-8 flex flex-col order-2 sm:order-1 ${
            dark ? "text-ivory" : "text-navy"
          }`}
        >
          {/* Huge faint watermark number */}
          <span
            aria-hidden
            className="absolute top-3 right-4 font-display text-[110px] sm:text-[130px] leading-none font-black tracking-[-0.04em] pointer-events-none select-none"
            style={{
              color: dark ? "rgba(255,255,255,0.05)" : "rgba(8,18,59,0.045)",
            }}
          >
            {s.n}
          </span>

          {/* Title */}
          <h3
            style={{ color: dark ? "#FFFFFF" : "#08123B" }}
            className="relative font-display text-[26px] sm:text-[30px] xl:text-[34px] tracking-[-0.022em] leading-[1.05] font-bold"
          >
            {s.title}
          </h3>

          {/* Orange line */}
          <span className="relative block mt-3 w-10 h-[2px] bg-orange rounded-full" />

          {/* Body */}
          <p
            style={{
              color: dark ? "rgba(255,255,255,0.72)" : "rgba(8,18,59,0.6)",
            }}
            className="relative mt-4 text-[13px] leading-[1.65] max-w-[320px]"
          >
            {s.body}
          </p>

          {/* Explore link with arrow circle */}
          <div className="relative mt-auto pt-7">
            <span className="inline-flex items-center gap-3 text-[11.5px] uppercase tracking-[0.2em] font-semibold text-orange">
              Explore service
              <span className="grid place-items-center w-8 h-8 rounded-full bg-orange text-ivory transition-transform duration-500 ease-editorial group-hover:translate-x-1 group-hover:rotate-[-30deg] shadow-[0_8px_20px_-6px_rgba(255,87,34,0.55)]">
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>

        {/* Image — right */}
        <div className="relative col-span-12 sm:col-span-5 min-h-[180px] sm:min-h-0 overflow-hidden order-1 sm:order-2">
          <Image
            src={s.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.07]"
          />
          {/* Soft fade so image blends into the card (top-down on mobile, side on desktop) */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none hidden sm:block"
            style={{
              background: dark
                ? "linear-gradient(90deg, rgba(8,18,59,0.95), rgba(8,18,59,0.4) 40%, transparent 70%)"
                : "linear-gradient(90deg, rgba(255,255,255,0.7), transparent 40%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none sm:hidden"
            style={{
              background: dark
                ? "linear-gradient(180deg, transparent 50%, rgba(8,18,59,0.85))"
                : "linear-gradient(180deg, transparent 60%, rgba(255,255,255,0.85))",
            }}
          />
          {/* Inner ring */}
          <div
            aria-hidden
            className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"
          />

          {/* Floating note on card 6 */}
          {s.floatingNote && (
            <div className="absolute bottom-5 right-5 sm:max-w-[260px]">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.18),0_1px_0_rgba(255,255,255,0.8)_inset]"
              >
                <span className="grid place-items-center w-5 h-5 rounded-full bg-orange text-ivory shrink-0">
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 7.5l2.5 2.5L11 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[12px] font-medium text-navy leading-tight">
                  {s.floatingNote}
                </span>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom orange→blue hairline that fills on hover (dark cards only) */}
      {dark && (
        <span
          aria-hidden
          className="absolute left-0 right-0 bottom-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,87,34,0.7) 0%, rgba(30,58,186,0.6) 100%)",
          }}
        />
      )}
      {/* Bottom orange hairline that fills on hover (light cards) */}
      {!dark && (
        <span
          aria-hidden
          className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange/0 group-hover:bg-orange transition-colors duration-500"
        />
      )}
    </Link>
  );
}
