"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const industries = [
  {
    id: "real-estate",
    name: "Real Estate",
    body: "Lead qualification, listing operations and tenant support across asset classes — from residential developers to commercial REITs.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "finance",
    name: "Finance",
    body: "Reconciliations, KYC support, compliance documentation and reporting.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    body: "Patient coordination, eligibility verification and HIPAA-aligned support.",
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    body: "Order operations, returns management and customer experience for D2C brands.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "technology",
    name: "Technology",
    body: "Tiered helpdesk, customer success operations and SaaS onboarding.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "professional",
    name: "Professional Services",
    body: "Document workflows, scheduling and back-office for consultancies and firms — handled with discretion.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
];

export default function IndustriesStrip() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden py-16 lg:py-20"
      style={{ backgroundColor: "#FAF8F6" }}
    >
      {/* Ambient washes */}
      <div
        aria-hidden
        className="absolute -top-32 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-65"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,87,34,0.10), rgba(255,87,34,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-0 w-[460px] h-[460px] rounded-full pointer-events-none opacity-55"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,58,186,0.08), rgba(30,58,186,0) 70%)",
        }}
      />

      <div className="container-content relative">
        {/* Top header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-14">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3"
            >
              <span className="block w-7 h-[2px] bg-orange" />
              <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
                Industries
              </span>
              <span
                className="hidden sm:block flex-1 max-w-[200px] h-[1.5px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,87,34,0.6), rgba(30,58,186,0.45) 60%, transparent)",
                }}
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              className="mt-5 font-display text-[34px] sm:text-[44px] xl:text-[52px] tracking-[-0.025em] leading-[0.98] text-navy font-bold"
            >
              Industry <span className="text-orange">depth.</span>{" "}
              <span className="text-blue-deep">Not surface knowledge.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-5 lg:pb-2 text-[13.5px] text-navy/55 leading-[1.65] max-w-md lg:ml-auto lg:text-right"
          >
            We bring sector-specific playbooks, vocabulary and compliance
            posture so onboarding is short and the work is right from week one.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {industries.map((it, i) => {
            const isBlue = i % 2 === 1;
            return (
              <motion.div
                key={it.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                }}
                className="relative"
              >
                <Link
                  href={`/industries#${it.id}`}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-navy/8 bg-white shadow-[0_1px_2px_rgba(15,19,48,0.03),0_22px_44px_-22px_rgba(15,19,48,0.20)] transition-all duration-500 ease-editorial hover:border-navy/15 hover:-translate-y-1.5 hover:shadow-[0_1px_2px_rgba(15,19,48,0.03),0_36px_64px_-22px_rgba(15,19,48,0.32)]"
                >
                  {/* Inner top highlight */}
                  <span
                    aria-hidden
                    className="absolute top-0 left-7 right-7 h-px bg-white pointer-events-none z-30"
                  />

                  {/* Image area */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={it.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-navy/10 pointer-events-none" />
                    <div
                      aria-hidden
                      className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none"
                    />

                    {/* Big watermark numeral on image */}
                    <span
                      aria-hidden
                      className="absolute top-3 left-5 font-display text-[80px] sm:text-[90px] leading-none font-black tracking-[-0.05em] pointer-events-none select-none text-ivory"
                      style={{ opacity: 0.18 }}
                    >
                      0{i + 1}
                    </span>

                    {/* Top-right hairline marker */}
                    <span
                      aria-hidden
                      className="absolute top-6 right-6 flex items-center gap-2 pointer-events-none"
                    >
                      <span className="block w-8 h-px bg-ivory/40" />
                      <span className="block w-1.5 h-1.5 rounded-full bg-orange" />
                    </span>

                    {/* Industry name overlay */}
                    <div className="absolute left-6 right-6 bottom-5">
                      <div className={`text-[9.5px] uppercase tracking-[0.28em] font-bold mb-2 ${isBlue ? "text-blue-deep" : "text-orange"}`}>
                        <span className="inline-block px-2 py-1 rounded-full bg-white/95 backdrop-blur-md">
                          Sector · 0{i + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-[26px] sm:text-[28px] tracking-[-0.022em] text-ivory leading-[1.05] font-bold">
                        {it.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 flex flex-col gap-5">
                    {/* Corner orange wash on hover */}
                    <span
                      aria-hidden
                      className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: isBlue
                          ? "radial-gradient(closest-side, rgba(30,58,186,0.12), rgba(30,58,186,0) 70%)"
                          : "radial-gradient(closest-side, rgba(255,87,34,0.14), rgba(255,87,34,0) 70%)",
                      }}
                    />

                    <p className="relative text-[13px] leading-[1.65] text-navy/65">
                      {it.body}
                    </p>

                    <div className="relative flex items-center justify-between pt-4 border-t border-navy/8">
                      <span className="inline-flex items-center gap-2.5 text-[11.5px] uppercase tracking-[0.22em] font-bold text-navy group-hover:text-orange transition-colors">
                        Explore industry
                      </span>
                      <span
                        className={`grid place-items-center w-9 h-9 rounded-full transition-all duration-300 ${
                          isBlue
                            ? "bg-blue-deep/10 text-blue-deep group-hover:bg-blue-deep group-hover:text-ivory"
                            : "bg-orange/10 text-orange group-hover:bg-orange group-hover:text-ivory"
                        }`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          <path
                            d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Bottom hairline that fills on hover */}
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-[2.5px] transition-colors duration-500 ${
                      isBlue
                        ? "bg-transparent group-hover:bg-blue-deep"
                        : "bg-transparent group-hover:bg-orange"
                    }`}
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
