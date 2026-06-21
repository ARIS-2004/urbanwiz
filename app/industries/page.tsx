import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Industries — UrbanWizz",
  description:
    "UrbanWizz serves operations teams across real estate, finance, healthcare, e-commerce, technology and startups.",
};

const industries = [
  {
    id: "real-estate",
    name: "Real Estate",
    body:
      "Lead qualification, listings, transactions and tenant communications — handled with discretion.",
    items: [
      "Lead intake",
      "Showing coord.",
      "Tenant support",
      "Document ops",
    ],
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "finance",
    name: "Finance",
    body:
      "Back-office finance ops, KYC support, reconciliations and compliance documentation — operated to audit standards.",
    items: [
      "Reconciliations",
      "KYC / KYB",
      "Compliance docs",
      "Reporting ops",
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    body:
      "Patient coordination, claims and HIPAA-aligned support for clinics, payers and digital health teams.",
    items: [
      "Patient coord.",
      "Eligibility",
      "Billing & claims",
      "Front-office",
    ],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    body:
      "Customer experience, order operations and returns management for D2C brands and marketplaces.",
    items: [
      "Order ops",
      "Returns",
      "CX support",
      "Catalog mgmt.",
    ],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "technology",
    name: "Technology",
    body:
      "Tiered helpdesk, customer success ops and onboarding for B2B SaaS and infrastructure businesses.",
    items: [
      "T1/T2 helpdesk",
      "Onboarding",
      "CS admin",
      "Internal IT",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "startups",
    name: "Startups",
    body:
      "Founder leverage — operations, finance and support to scale from day one without full-time hires.",
    items: [
      "Founder ops",
      "Bookkeeping",
      "First-line",
      "Vendor coord.",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        title="Built for"
        serif="your category."
        description="We bring industry-specific playbooks, vocabulary and compliance posture — so onboarding is short and the work is right from week one."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80"
        imageAlt=""
        ctaPrimary={{ label: "See all categories", href: "#real-estate" }}
        ctaSecondary={{ label: "Talk to a partner", href: "/contact" }}
        trustEmphasis="Six categories"
        trustLabel="served — playbooks tuned to each."
      />

      <section className="py-12 lg:py-14 bg-white">
        <div className="container-content">
          <Stagger gap={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((it, i) => (
              <StaggerItem key={it.id}>
                <article
                  id={it.id}
                  className="group relative h-full rounded-2xl overflow-hidden bg-white border border-navy/8 shadow-[0_1px_2px_rgba(15,19,48,0.03)] transition-all duration-500 ease-editorial hover:border-navy/15 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-22px_rgba(15,19,48,0.18)] scroll-mt-32 flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-navy/5">
                    <Image
                      src={it.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover transition-transform duration-[1100ms] ease-editorial group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/25 to-navy/5 pointer-events-none" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />

                    <div className="absolute left-4 right-4 bottom-3 flex items-end justify-between gap-3">
                      <h2 className="font-display text-[18px] sm:text-[20px] tracking-tight text-white leading-tight font-semibold">
                        {it.name}
                      </h2>
                      <span className="text-[9.5px] uppercase tracking-[0.2em] text-white/65 tabular-nums font-semibold">
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-[12.5px] leading-[1.55] text-navy/60">
                      {it.body}
                    </p>

                    <ul className="mt-4 grid grid-cols-2 gap-1.5">
                      {it.items.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-1.5 text-[11.5px] text-navy/70 leading-tight"
                        >
                          <span className="shrink-0 grid place-items-center w-3 h-3 rounded-full bg-orange/15 text-orange">
                            <svg width="7" height="7" viewBox="0 0 14 14" fill="none">
                              <path
                                d="M3 7.5L6 10.5L11.5 4"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className="truncate">{p}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-4 border-t border-navy/8">
                      <Link
                        href="/contact"
                        className="group/link inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-navy hover:text-orange transition-colors"
                      >
                        Discuss this category
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="transition-transform group-hover/link:translate-x-1"
                        >
                          <path
                            d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-orange/0 group-hover:bg-orange transition-colors duration-500" />
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pb-12 lg:pb-14 bg-white">
        <div className="container-content">
          <FadeUp>
            <div
              data-theme="dark"
              className="relative overflow-hidden rounded-3xl bg-navy text-ivory px-8 sm:px-12 py-10 md:py-12"
            >
              <div className="absolute inset-0 ring-1 ring-inset ring-ivory/10 rounded-3xl pointer-events-none" />
              <div
                aria-hidden
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(255,87,34,0.15), rgba(255,87,34,0) 70%)",
                }}
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="block w-6 h-[2px] bg-orange" />
                    <span className="text-[10.5px] uppercase tracking-[0.22em] text-orange font-semibold">
                      Not listed here
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[28px] sm:text-[36px] tracking-tight leading-[1.1] font-semibold">
                    Don&apos;t see <span className="text-orange">yours?</span>
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.65] text-ivory/65 max-w-lg">
                    The categories above are where we operate today, but the
                    operating model translates. If your team works with
                    structured workflows, customer interactions or documents
                    at volume — we likely fit.
                  </p>
                </div>
                <div className="lg:col-span-5 lg:flex lg:justify-end">
                  <Link
                    href="/contact"
                    className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-orange px-6 text-[13.5px] font-medium text-ivory hover:bg-orange-soft transition-colors shadow-[0_10px_24px_-8px_rgba(255,87,34,0.55)]"
                  >
                    Tell us about the work
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
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
