"use client";

import Image from "next/image";
import Link from "next/link";
import { Stagger, StaggerItem, FadeUp } from "./Reveal";

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
    <section id="industries" className="py-16">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-end">
          <div className="lg:col-span-8">
            <FadeUp>
              <div className="flex items-center gap-3">
                <span className="block w-7 h-[2px] bg-orange" />
                <span className="text-[11px] uppercase tracking-[0.26em] text-orange font-semibold">
                  Industries
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-5 font-display text-[36px] sm:text-[48px] xl:text-[56px] tracking-tight leading-[1.05] text-navy font-semibold">
                Industry depth.{" "}
                <span className="text-orange">Not surface knowledge.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1} className="lg:col-span-4">
            <p className="text-[14px] leading-[1.65] text-navy/55 max-w-sm lg:ml-auto lg:text-right">
              We bring sector-specific playbooks, vocabulary and compliance
              posture so onboarding is short and the work is right from week one.
            </p>
          </FadeUp>
        </div>

        <Stagger
          gap={0.06}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {industries.map((it, i) => (
            <StaggerItem key={it.id}>
              <Link
                href={`/industries#${it.id}`}
                className="group relative block h-full overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-[0_2px_4px_rgba(15,19,48,0.03)] transition-all duration-500 ease-editorial hover:border-navy/15 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(15,19,48,0.18)]"
              >
                {/* Image header — consistent aspect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                  <Image
                    src={it.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent pointer-events-none" />

                  {/* Industry name overlay */}
                  <h3 className="absolute left-5 right-5 bottom-4 font-display text-[24px] tracking-tight text-ivory leading-tight font-semibold">
                    {it.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">
                  <p className="text-[13.5px] leading-[1.6] text-navy/60">
                    {it.body}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-navy/8">
                    <span className="inline-flex items-center gap-2 text-[12px] font-medium text-navy group-hover:text-orange transition-colors">
                      Explore industry
                      <svg
                        width="11"
                        height="11"
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
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-navy/35 tabular-nums">
                      0{i + 1}/06
                    </span>
                  </div>
                </div>

                {/* Bottom orange hairline */}
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange/0 group-hover:bg-orange transition-colors duration-500" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
