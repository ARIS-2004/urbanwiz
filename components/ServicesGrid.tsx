"use client";

import Image from "next/image";
import Link from "next/link";
import { Stagger, StaggerItem, FadeUp } from "./Reveal";

const services = [
  {
    n: "01",
    title: "Customer Support",
    body: "Voice, email and chat support staffed by trained specialists who learn your product.",
    href: "/services#customer-support",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "02",
    title: "Virtual Assistance",
    body: "Administrative support for founders and growing teams — calendars, research, vendor coordination.",
    href: "/services#virtual-assistance",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "03",
    title: "Finance Operations",
    body: "Bookkeeping, accounts payable, reconciliations and management reporting at audit standard.",
    href: "/services#finance",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "04",
    title: "Back Office",
    body: "Data processing, document workflows, order operations and quality assurance at scale.",
    href: "/services#back-office",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "05",
    title: "IT Helpdesk",
    body: "Tiered technical support and service-desk operations with documented SLAs.",
    href: "/services#it-helpdesk",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "06",
    title: "Process Automation",
    body: "Workflow design and lightweight automation that quietly removes repetitive work.",
    href: "/services#automation",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 bg-ivory">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="flex items-center gap-4">
                <span className="block w-8 h-[2px] bg-orange" />
                <span className="text-[11.5px] uppercase tracking-[0.24em] text-orange font-semibold">
                  Services
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-6 font-display text-[40px] sm:text-[52px] tracking-tight leading-[1.0] text-navy">
                Six practices.{" "}
                <span className="text-orange">
                  One operating standard.
                </span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1} className="lg:col-span-5">
            <p className="text-[14.5px] leading-[1.65] text-navy/55 max-w-sm lg:ml-auto lg:text-right">
              Adopt one or run them all together. The same senior owners,
              the same SLAs, the same transparency.
            </p>
          </FadeUp>
        </div>

        <Stagger gap={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <Link
                href={s.href}
                className="group relative block h-full overflow-hidden rounded-2xl border border-navy/8 bg-white shadow-[0_2px_4px_rgba(15,19,48,0.03)] transition-all duration-500 ease-editorial hover:border-navy/15 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(15,19,48,0.18)]"
              >
                {/* Image header */}
                <div className="relative aspect-[16/10] bg-navy/10 overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-[1000ms] ease-editorial group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/20 to-transparent pointer-events-none" />

                  {/* Service title overlaid on image */}
                  <h3 className="absolute left-5 right-5 bottom-4 font-display text-[22px] sm:text-[24px] tracking-tight text-ivory leading-tight font-semibold">
                    {s.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">
                  <p className="text-[13.5px] leading-[1.65] text-navy/60">
                    {s.body}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-navy/8">
                    <span className="inline-flex items-center gap-2 text-[12px] font-medium text-navy group-hover:text-orange transition-colors">
                      Explore service
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
                      {s.n}/06
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
