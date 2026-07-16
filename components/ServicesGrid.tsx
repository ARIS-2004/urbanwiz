"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

type Service = {
  n: string;
  title: string;
  body: string;
  points: string[];
  href: string;
  image: string;
  dark: boolean;
  icon: React.ReactNode;
  floatingNote?: string;
};

const services: Service[] = [
  {
    n: "01",
    title: "Customer Support Services",
    body: "Deliver exceptional customer experiences through professional, responsive support — voice, email and chat handled by specialists who learn your product.",
    points: [
      "Omnichannel support",
      "SLA-driven responses",
      "Customer satisfaction focus",
    ],
    href: "/services#customer-support",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
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
    points: [
      "Accurate data management",
      "Process & document handling",
      "Workflow automation",
    ],
    href: "/services#back-office",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    dark: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <ellipse cx="12" cy="6" rx="7" ry="2.5" />
        <path d="M5 6v6c0 1.5 3 2.5 7 2.5s7-1 7-2.5V6M5 12v6c0 1.5 3 2.5 7 2.5s7-1 7-2.5v-6" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Business Process Support",
    body: "Streamline workflows and optimise processes for better productivity — from operations design to continuous improvement, delivered with senior ownership.",
    points: [
      "End-to-end process support",
      "Performance improvement",
      "Scalable operations",
    ],
    href: "/services#automation",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
    dark: true,
    floatingNote: "People.\nProcess.\nProgress.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 12h18" />
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-10 lg:mb-14">
          <div className="lg:col-span-7">
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
              Adopt one or run them all together. The same senior owners, the
              same SLAs, the same transparency — from customer support to data
              operations and full business process support.
            </motion.p>
          </div>

          {/* Right rail */}
          <div className="lg:col-span-5 lg:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="lg:ml-auto lg:max-w-xs text-[13.5px] text-navy/55 leading-[1.65]"
            >
              <span
                aria-hidden
                className="mb-4 block w-8 h-[2px] rounded-full bg-orange/70 lg:ml-auto"
              />
              Integrated services. Measurable outcomes. Built around the way
              your business runs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="mt-6 lg:flex lg:justify-end"
            >
              <Link
                href="/services"
                className="group inline-flex h-12 items-center gap-3 rounded-full px-7 text-[13px] font-semibold text-ivory transition-all shadow-[0_20px_40px_-12px_rgba(8,18,59,0.35)] hover:shadow-[0_20px_40px_-8px_rgba(8,18,59,0.45)]"
                style={{ background: "#08123B" }}
              >
                Explore all services
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-orange transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
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
      className={`group relative flex h-full flex-col rounded-[28px] overflow-hidden transition-all duration-500 ease-editorial hover:-translate-y-2 ${
        dark
          ? "shadow-[0_24px_60px_-16px_rgba(8,18,59,0.40)] hover:shadow-[0_40px_80px_-16px_rgba(8,18,59,0.55)]"
          : "bg-white border border-[#ECECEC] shadow-[0_10px_40px_rgba(16,24,40,0.05)] hover:shadow-[0_28px_60px_rgba(16,24,40,0.12)]"
      }`}
      style={dark ? { backgroundColor: "#08123B" } : undefined}
    >
      {/* Background image bleeding into the card */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={s.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className={`object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.06] ${
            dark ? "opacity-100" : "opacity-100"
          }`}
        />
        {/* Overlay: dark cards fade from solid navy (left) to reveal image (right);
            light card keeps a white left column with the photo on the right. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: dark
              ? "linear-gradient(100deg, #08123B 0%, #08123B 42%, rgba(8,18,59,0.72) 62%, rgba(8,18,59,0.35) 100%)"
              : "linear-gradient(100deg, #FFFFFF 0%, #FFFFFF 46%, rgba(255,255,255,0.75) 62%, rgba(255,255,255,0.15) 100%)",
          }}
        />
      </div>

      {/* Inner top highlight */}
      <span
        aria-hidden
        className="absolute top-0 left-8 right-8 h-px pointer-events-none z-10"
        style={{
          background: dark
            ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)"
            : "linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col p-7 lg:p-8">
        {/* Number */}
        <span
          className="font-display text-[20px] font-bold tabular-nums leading-none"
          style={{ color: dark ? "#FF5722" : s.n === "02" ? "#1E3ABA" : "#FF5722" }}
        >
          {s.n}
        </span>
        <span
          aria-hidden
          className="mt-1.5 block w-7 h-[2px] rounded-full"
          style={{ background: s.n === "02" ? "rgba(30,58,186,0.4)" : "rgba(255,87,34,0.5)" }}
        />

        {/* Icon tile */}
        <span
          className="mt-6 grid place-items-center w-14 h-14 rounded-2xl text-ivory"
          style={{
            background:
              s.n === "02"
                ? "linear-gradient(150deg, #1E3ABA, #172A8A)"
                : "linear-gradient(150deg, #FF5722, #FF7A4D)",
            boxShadow:
              s.n === "02"
                ? "0 14px 28px -10px rgba(30,58,186,0.55), inset 0 1px 0 rgba(255,255,255,0.3)"
                : "0 14px 28px -10px rgba(255,87,34,0.55), inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
        >
          {s.icon}
        </span>

        {/* Title */}
        <h3
          style={{ color: dark ? "#FFFFFF" : "#08123B" }}
          className="mt-5 font-display text-[24px] sm:text-[26px] tracking-[-0.022em] leading-[1.08] font-bold"
        >
          {s.title}
        </h3>

        {/* Orange rule */}
        <span
          className="mt-3 block w-9 h-[2px] rounded-full"
          style={{ background: s.n === "02" ? "#1E3ABA" : "#FF5722" }}
        />

        {/* Body */}
        <p
          style={{
            color: dark ? "rgba(255,255,255,0.72)" : "rgba(8,18,59,0.6)",
          }}
          className="mt-4 text-[13px] leading-[1.65] max-w-[300px]"
        >
          {s.body}
        </p>

        {/* Checklist */}
        <ul className="mt-6 space-y-0">
          {s.points.map((p) => (
            <li
              key={p}
              className="flex items-center gap-2.5 py-2.5 border-t"
              style={{
                borderColor: dark
                  ? "rgba(255,255,255,0.12)"
                  : "rgba(8,18,59,0.10)",
              }}
            >
              <span
                className="grid place-items-center w-4 h-4 rounded-full shrink-0"
                style={{
                  background: s.n === "02" ? "#1E3ABA" : "#FF5722",
                }}
              >
                <svg width="9" height="9" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7.5l2.5 2.5L11 4"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span
                className="text-[12.5px] font-medium leading-tight"
                style={{ color: dark ? "rgba(255,255,255,0.85)" : "#08123B" }}
              >
                {p}
              </span>
            </li>
          ))}
        </ul>

        {/* Explore link */}
        <div className="mt-auto pt-7">
          <span
            className="inline-flex items-center gap-3 text-[11.5px] uppercase tracking-[0.2em] font-semibold"
            style={{ color: s.n === "02" ? "#1E3ABA" : "#FF5722" }}
          >
            Explore service
            <span
              className="grid place-items-center w-8 h-8 rounded-full text-ivory transition-transform duration-500 ease-editorial group-hover:translate-x-1"
              style={{
                background: s.n === "02" ? "#1E3ABA" : "#FF5722",
                boxShadow:
                  s.n === "02"
                    ? "0 8px 20px -6px rgba(30,58,186,0.55)"
                    : "0 8px 20px -6px rgba(255,87,34,0.55)",
              }}
            >
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

      {/* Floating note pill on card 3 */}
      {s.floatingNote && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 right-6 z-20 inline-flex items-start gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.22),0_1px_0_rgba(255,255,255,0.8)_inset]"
        >
          <span className="mt-0.5 grid place-items-center w-4 h-4 rounded-full bg-orange text-ivory shrink-0">
            <svg width="9" height="9" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7.5l2.5 2.5L11 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[12.5px] font-semibold text-navy leading-[1.25] whitespace-pre-line">
            {s.floatingNote}
          </span>
        </motion.div>
      )}

      {/* Bottom accent hairline that fills on hover */}
      <span
        aria-hidden
        className="absolute left-0 right-0 bottom-0 h-[2px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            s.n === "02"
              ? "linear-gradient(90deg, rgba(30,58,186,0.7), rgba(255,87,34,0.6))"
              : "linear-gradient(90deg, rgba(255,87,34,0.7), rgba(30,58,186,0.6))",
        }}
      />
    </Link>
  );
}
