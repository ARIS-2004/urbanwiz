"use client";

import Image from "next/image";
import Link from "next/link";
import { Stagger, StaggerItem, FadeUp } from "./Reveal";

const insights = [
  {
    category: "Customer Experience",
    title: "The Future of Customer Support",
    excerpt:
      "How layered automation and senior human judgment will define the next decade of CX operations.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
    read: "8 min read",
  },
  {
    category: "Operations",
    title: "Human + AI Operations",
    excerpt:
      "Where workflows benefit from automation, where they don't, and the cost of getting that line wrong.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    read: "6 min read",
  },
  {
    category: "Scale",
    title: "Building Scalable Processes",
    excerpt:
      "A practical guide for founders moving from ad-hoc operations to documented, repeatable systems.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
    read: "11 min read",
  },
];

export default function ThoughtLeadership() {
  return (
    <section className="py-16">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-7">
            <FadeUp>
              <div className="flex items-center gap-4">
                <span className="block w-8 h-[2px] bg-orange" />
                <span className="text-[11.5px] uppercase tracking-[0.24em] text-orange font-semibold">
                  Insights
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.05}>
              <h2 className="mt-6 font-display text-[40px] sm:text-[52px] tracking-tight leading-[1.0] text-navy">
                Field notes from{" "}
                <span className="font-serif italic text-orange">operations.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1} className="lg:col-span-5 lg:justify-self-end">
            <Link
              href="#"
              className="group inline-flex items-center gap-2 text-[14px] text-navy hover:text-orange transition-colors"
            >
              All insights
              <svg
                width="13"
                height="13"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </FadeUp>
        </div>

        <Stagger gap={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {insights.map((it) => (
            <StaggerItem key={it.title}>
              <Link
                href="#"
                className="group block h-full overflow-hidden rounded-2xl border border-navy/8 bg-white transition-all duration-500 ease-editorial hover:border-navy/20 hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/10] bg-navy/10 overflow-hidden">
                  <Image
                    src={it.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-ivory/95 backdrop-blur-sm px-3 py-1 text-[10px] tracking-[0.18em] uppercase text-orange font-semibold">
                    {it.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col h-[180px]">
                  <h3 className="font-display text-[20px] tracking-tight text-navy leading-tight">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-[13px] text-navy/55 leading-[1.6] flex-1">
                    {it.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-navy/8 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-navy/45 font-medium">
                    <span>{it.read}</span>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="text-navy/40 group-hover:text-orange transition-colors duration-500"
                    >
                      <path
                        d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
