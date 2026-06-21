"use client";

import Image from "next/image";
import { FadeUp, Stagger, StaggerItem } from "./Reveal";

const steps = [
  {
    title: "Share",
    body: "Tell us about your business and the operational friction you're feeling.",
    meta: "Today",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Respond",
    body: "A senior team member reviews your needs and replies personally.",
    meta: "Within 24 hours",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Connect",
    body: "A thirty-minute conversation about goals, scope and solutions.",
    meta: "On your schedule",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Launch",
    body: "Documented playbooks, phased ramp and a smooth onboarding into operations.",
    meta: "Within days",
    image:
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 lg:py-20 bg-white">
      <div className="container-content">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-8">
            <FadeUp>
              <div className="flex items-center gap-3">
                <span className="block w-7 h-[2px] bg-orange" />
                <span className="text-[11px] uppercase tracking-[0.26em] text-orange font-semibold">
                  How we work
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-5 font-display text-[36px] sm:text-[48px] xl:text-[56px] tracking-tight leading-[1.05] text-navy font-semibold">
                From first note to{" "}
                <span className="text-orange">live operations.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1} className="lg:col-span-4">
            <p className="text-[14px] leading-[1.65] text-navy/55 max-w-sm lg:ml-auto lg:text-right">
              A four-step path designed to feel deliberate, not transactional.
            </p>
          </FadeUp>
        </div>

        {/* Cards */}
        <Stagger
          gap={0.08}
          className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {/* Connector rail behind chips */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[10%] right-[10%] top-[176px] h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(15,19,48,0) 0%, rgba(255,87,34,0.3) 20%, rgba(255,87,34,0.3) 80%, rgba(15,19,48,0) 100%)",
            }}
          />

          {steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-white border border-navy/8 shadow-[0_2px_4px_rgba(15,19,48,0.03)] transition-all duration-500 ease-editorial hover:border-navy/15 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,19,48,0.18)] flex flex-col">
                {/* Image header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-[1000ms] ease-editorial group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/25 to-navy/5 pointer-events-none" />

                  {/* Meta floating pill — top left */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-ivory/15 backdrop-blur-md border border-ivory/15 px-2.5 py-1">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-orange">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[9.5px] uppercase tracking-[0.22em] text-ivory font-semibold">
                      {s.meta}
                    </span>
                  </div>

                  {/* Title overlay bottom-left */}
                  <h3 className="absolute left-5 right-5 bottom-4 font-display text-[24px] sm:text-[26px] tracking-tight text-ivory leading-tight font-semibold">
                    {s.title}
                  </h3>
                </div>

                {/* Numbered chip floating on the rail */}
                <div className="relative h-0">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-10">
                    <div className="grid place-items-center w-12 h-12 rounded-full bg-orange text-ivory font-display text-[13px] font-semibold tabular-nums shadow-[0_10px_24px_-6px_rgba(255,87,34,0.55)] ring-[5px] ring-white transition-transform duration-500 group-hover:scale-110">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pt-10 pb-6 flex-1 flex flex-col">
                  <p className="text-[13px] leading-[1.65] text-navy/60">
                    {s.body}
                  </p>

                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] text-navy font-semibold">
                      <span className="block w-3 h-[1.5px] bg-orange rounded-full" />
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10.5px] tracking-[0.18em] text-navy/35 tabular-nums font-medium">
                      0{i + 1} / 04
                    </span>
                  </div>
                </div>

                {/* Bottom orange hairline */}
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange/0 group-hover:bg-orange transition-colors duration-500" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
