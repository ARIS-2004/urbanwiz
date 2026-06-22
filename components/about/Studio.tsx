"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const MAP_EMBED =
  "https://www.google.com/maps?q=Salt+Lake+Sector+V,+Kolkata&output=embed";
const MAP_LINK =
  "https://www.google.com/maps/place/Salt+Lake+Sector+V,+Kolkata";

export default function Studio() {
  return (
    <section
      id="studio"
      className="relative overflow-hidden py-14 lg:py-16 bg-white"
    >
      <div className="container-content relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-3"
          >
            <span className="block w-7 h-[2px] bg-orange" />
            <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
              Where we work
            </span>
            <span className="block w-7 h-[2px] bg-orange" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="mt-5 font-display text-[28px] sm:text-[36px] xl:text-[44px] tracking-[-0.025em] leading-[1.05] text-navy font-bold"
          >
            Our studio in{" "}
            <span className="text-orange">Salt Lake.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-4 text-[13.5px] text-navy/55 leading-[1.65] max-w-md mx-auto"
          >
            Eastern India&apos;s most established outsourcing corridor — the
            talent pool that quietly powers global operations.
          </motion.p>
        </div>

        {/* Map + address card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease }}
          className="relative rounded-3xl bg-white border border-navy/8 overflow-hidden shadow-[0_1px_2px_rgba(15,19,48,0.03),0_28px_56px_-26px_rgba(15,19,48,0.22)]"
        >
          {/* Top gradient strip */}
          <span
            aria-hidden
            className="absolute top-0 left-0 right-0 h-[3px] z-10"
            style={{
              background:
                "linear-gradient(90deg, #FF5722 0%, #1E3ABA 100%)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Address column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 order-2 lg:order-1 flex flex-col">
              <div className="flex items-center gap-3">
                <span className="block w-5 h-[2px] bg-orange" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-orange font-bold">
                  Studio · Kolkata
                </span>
              </div>

              <h3 className="mt-4 font-display text-[24px] sm:text-[28px] tracking-[-0.02em] text-navy font-bold leading-tight">
                Salt Lake Sector V
              </h3>

              <address className="mt-4 not-italic text-[13.5px] text-navy/70 leading-[1.7]">
                Plot · Block · Salt Lake Sector V
                <br />
                Kolkata 700091
                <br />
                West Bengal, India
              </address>

              {/* Quick details */}
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <div className="rounded-xl bg-white border border-navy/8 px-3.5 py-2.5">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-navy/55 font-bold">
                    Hours
                  </div>
                  <div className="mt-1 text-[12.5px] text-navy font-semibold leading-tight">
                    Mon–Fri · 09:30–18:30 IST
                  </div>
                </div>
                <div className="rounded-xl bg-white border border-navy/8 px-3.5 py-2.5">
                  <div className="text-[9px] uppercase tracking-[0.2em] text-navy/55 font-bold">
                    Phone
                  </div>
                  <Link
                    href="tel:+919051234876"
                    className="mt-1 block text-[12.5px] text-navy font-semibold leading-tight tabular-nums hover:text-orange transition-colors"
                  >
                    +91 90512 34876
                  </Link>
                </div>
              </div>

              {/* Directions CTA */}
              <Link
                href={MAP_LINK}
                target="_blank"
                className="group mt-6 inline-flex items-center justify-between gap-3 rounded-full bg-navy text-ivory pl-5 pr-2 py-2 text-[11px] uppercase tracking-[0.22em] font-bold hover:bg-orange transition-colors duration-300 w-fit"
                style={{
                  boxShadow:
                    "0 16px 32px -12px rgba(15,19,48,0.50), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                Get directions
                <span className="grid place-items-center w-8 h-8 rounded-full bg-orange text-ivory group-hover:bg-ivory group-hover:text-orange transition-colors">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Map column */}
            <div className="lg:col-span-7 relative order-1 lg:order-2 min-h-[260px] lg:min-h-[400px] bg-navy/5">
              <iframe
                src={MAP_EMBED}
                title="Urbanwiz studio location — Salt Lake Sector V, Kolkata"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
              />
              {/* Top-left pin badge overlay */}
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-[0_8px_18px_-6px_rgba(15,19,48,0.30)] pointer-events-none">
                <span className="relative grid place-items-center w-5 h-5 rounded-full bg-orange/15 text-orange">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                    <circle cx="12" cy="9" r="2" fill="currentColor" />
                  </svg>
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-navy font-bold">
                  Salt Lake · Kolkata
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
