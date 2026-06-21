"use client";

import Image from "next/image";
import { FadeUp, Stagger, StaggerItem } from "./Reveal";

const pillars = [
  {
    title: "Human-Centered Operations",
    body: "Reliable teams built around your business, not around shift patterns.",
    meta: "People",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16.5" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M3 19c0-3 2.7-5.2 6-5.2s6 2.2 6 5.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M15 19c0-2.4 2-4.2 4.5-4.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Technology-Led Workflows",
    body: "Efficiency through automation and AI — humans where judgment matters.",
    meta: "Systems",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 20h6M12 17v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M7 11l2.5 2.5L13 10l4 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Long-Term Partnerships",
    body: "We operate as an extension of your team, measured in years not quarters.",
    meta: "Tenure",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21s-7-4.5-7-10a5 5 0 019-3 5 5 0 019 3c0 5.5-7 10-7 10z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Scalable Support",
    body: "From early-stage startups to enterprises serving millions.",
    meta: "Range",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 17l5-5 4 4 8-9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 7h5v5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Partner() {
  return (
    <section id="partner" className="py-16 lg:py-20 bg-ivory">
      <div className="container-content">
        {/* Editorial header */}
        <FadeUp>
          <div className="flex items-center gap-3">
            <span className="block w-7 h-[2px] bg-orange" />
            <span className="text-[11px] uppercase tracking-[0.26em] text-orange font-semibold">
              Why UrbanWizz
            </span>
          </div>
        </FadeUp>
        <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-12">
          <FadeUp delay={0.05} className="lg:col-span-8">
            <h2 className="font-display text-[36px] sm:text-[48px] xl:text-[56px] tracking-tight leading-[1.05] text-navy font-semibold">
              A partner that <span className="text-orange">earns</span> trust
              quietly.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1} className="lg:col-span-4 lg:pb-3">
            <p className="text-[14px] leading-[1.65] text-navy/60 max-w-sm lg:ml-auto lg:text-right">
              We&apos;ve spent years building a calm, careful operations
              practice — the kind founders return to because the work
              speaks for itself.
            </p>
          </FadeUp>
        </div>

        {/* Image + cards row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left — editorial image */}
          <FadeUp className="lg:col-span-5">
            <div className="relative h-full min-h-[460px] overflow-hidden rounded-3xl border border-navy/8 shadow-[0_2px_4px_rgba(15,19,48,0.03),0_24px_60px_-24px_rgba(15,19,48,0.18)]">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80"
                alt="UrbanWizz operations team"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-navy/10 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-ivory/10 rounded-3xl pointer-events-none" />

              {/* Bottom editorial caption */}
              <div className="absolute inset-x-0 bottom-0 p-7 text-ivory">
                <div className="flex items-center gap-2.5">
                  <span className="block w-6 h-[2px] bg-orange" />
                  <span className="text-[10.5px] uppercase tracking-[0.22em] font-semibold">
                    Salt Lake · Kolkata
                  </span>
                </div>
                <div className="mt-3 font-display text-[22px] sm:text-[26px] tracking-tight leading-[1.2] font-semibold">
                  Trust is built in the small,{" "}
                  <span className="text-orange">unseen details.</span>
                </div>
                <div className="mt-4 flex items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-ivory/55 font-medium">
                  <div>
                    <div className="font-display text-[24px] text-ivory leading-none tabular-nums font-semibold">
                      150+
                    </div>
                    <div className="mt-1.5">Operators</div>
                  </div>
                  <span className="block w-px h-10 bg-ivory/15" />
                  <div>
                    <div className="font-display text-[24px] text-ivory leading-none tabular-nums font-semibold">
                      8+
                    </div>
                    <div className="mt-1.5">Years</div>
                  </div>
                  <span className="block w-px h-10 bg-ivory/15" />
                  <div>
                    <div className="font-display text-[24px] text-ivory leading-none tabular-nums font-semibold">
                      24×7
                    </div>
                    <div className="mt-1.5">Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Right — pillar cards */}
          <div className="lg:col-span-7">
            <Stagger gap={0.08} className="space-y-3 h-full">
              {pillars.map((p, i) => (
                <StaggerItem key={p.title}>
                  <div className="group relative flex items-center gap-4 sm:gap-5 bg-white border border-navy/8 rounded-2xl px-5 sm:px-6 py-5 transition-all duration-500 ease-editorial hover:border-navy/15 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-24px_rgba(15,19,48,0.18)]">
                    {/* Icon tile */}
                    <span className="shrink-0 grid place-items-center w-14 h-14 rounded-2xl bg-orange/10 text-orange transition-all duration-500 group-hover:bg-orange group-hover:text-ivory group-hover:shadow-[0_10px_24px_-6px_rgba(255,87,34,0.5)]">
                      {p.icon}
                    </span>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-display text-[12.5px] text-navy/35 tabular-nums font-semibold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[9.5px] uppercase tracking-[0.24em] text-orange font-semibold">
                          {p.meta}
                        </span>
                      </div>
                      <h3 className="font-display text-[17px] sm:text-[18px] tracking-tight text-navy leading-tight font-semibold">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-[12.5px] sm:text-[13px] leading-[1.55] text-navy/60 max-w-md">
                        {p.body}
                      </p>
                    </div>

                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
