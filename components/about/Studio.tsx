"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

// Google Maps embed for Ecospace Business Park, Action Area II, New Town, Kolkata
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4726!2d88.4614!3d22.5763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEcospace%20Business%20Park!5e0!3m2!1sen!2sin!4v1700000000000";
const MAP_LINK =
  "https://www.google.com/maps/place/Ecospace+Business+Park,+Action+Area+II,+Newtown,+Kolkata";

export default function Studio() {
  return (
    <section
      id="office"
      className="relative overflow-hidden py-20 lg:py-28 bg-white"
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
        {/* Header — matches OriginStory / Leadership system */}
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
              Where we work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, duration: 0.85, ease }}
            className="mt-6 font-display text-[36px] sm:text-[52px] xl:text-[60px] tracking-[-0.03em] leading-[0.98] text-navy font-bold"
          >
            Our office in{" "}
            <span className="text-orange">Ecospace</span>,
            <br />
            <span className="text-blue-deep">New Town</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.25, duration: 0.85, ease }}
            className="mt-6 text-[15px] sm:text-[16px] leading-[1.75] text-navy/70 max-w-xl"
          >
            Eastern India&apos;s most established technology corridor — the
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
                  Office · Kolkata
                </span>
              </div>

              <h3 className="mt-4 font-display text-[24px] sm:text-[28px] tracking-[-0.02em] text-navy font-bold leading-tight">
                Ecospace Business Park
              </h3>

              <address className="mt-4 not-italic text-[15px] text-navy/70 leading-[1.7]">
                Ecospace Business Park, Action Area II
                <br />
                New Town, Kolkata 700160
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
                    href="tel:+919038816866"
                    className="mt-1 block text-[12.5px] text-navy font-semibold leading-tight tabular-nums hover:text-orange transition-colors"
                  >
                    +91 90388 16866
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
                title="Urbanwiz office location — Ecospace Business Park, New Town, Kolkata"
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
                  Ecospace · New Town, Kolkata
                </span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
