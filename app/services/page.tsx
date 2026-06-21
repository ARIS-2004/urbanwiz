import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — UrbanWizz",
  description:
    "Customer support, finance operations, IT helpdesk, virtual assistance and back office services from UrbanWizz.",
};

type Feature = { t: string; b: string };

const services: {
  id: string;
  n: string;
  name: string;
  tag: string;
  lead: string;
  features: Feature[];
  image: string;
}[] = [
  {
    id: "customer-support",
    n: "01",
    name: "Customer Support",
    tag: "CX",
    lead:
      "24/7 omnichannel support staffed by career specialists — voice, chat, email and social.",
    features: [
      { t: "Trained specialists", b: "Career operators, not interchangeable seats." },
      { t: "Tiered escalation", b: "T1 through T3 paths with senior ownership." },
      { t: "Weekly SLA reviews", b: "Performance reviewed against agreed targets." },
      { t: "Transparent metrics", b: "CSAT, AHT and FCR visible in your dashboard." },
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "virtual-assistance",
    n: "02",
    name: "Virtual Assistance",
    tag: "EA",
    lead:
      "Administrative leverage for founders, executives and growing teams.",
    features: [
      { t: "Inbox & calendar", b: "Daily ownership of communications and scheduling." },
      { t: "Research & vendors", b: "Procurement and vendor management at pace." },
      { t: "CRM & documents", b: "Pipeline hygiene and document preparation." },
      { t: "Senior assistants", b: "Operators with five or more years experience." },
    ],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "finance",
    n: "03",
    name: "Finance Process Outsourcing",
    tag: "FP&A",
    lead:
      "Day-to-day finance operations handled with audit-grade discipline.",
    features: [
      { t: "Bookkeeping & close", b: "Accurate records and timely financial close." },
      { t: "AP & AR", b: "Efficient management of payables and receivables." },
      { t: "Reconciliations", b: "Clean, accurate reconciliations across accounts." },
      { t: "Reporting", b: "Insightful reports for better decisions and control." },
    ],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "back-office",
    n: "04",
    name: "Back Office Operations",
    tag: "Ops",
    lead:
      "Data, documents and workflows handled quietly and accurately at scale.",
    features: [
      { t: "Data operations", b: "Entry, enrichment and migration at volume." },
      { t: "Document processing", b: "Indexing and structured extraction." },
      { t: "Order & returns", b: "Order operations and returns management." },
      { t: "Quality assurance", b: "QA, audit support and exception handling." },
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "it-helpdesk",
    n: "05",
    name: "IT Helpdesk",
    tag: "ITSM",
    lead: "ITIL-aligned service desk operations with documented SLAs.",
    features: [
      { t: "T1 & T2 support", b: "Technical triage with clean ticket discipline." },
      { t: "Endpoint lifecycle", b: "Provisioning, asset hygiene and offboarding." },
      { t: "Incident workflows", b: "Incident, problem and change processes." },
      { t: "After-hours cover", b: "Weekend and overnight coverage where needed." },
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "automation",
    n: "06",
    name: "Process Automation",
    tag: "Auto",
    lead:
      "Lightweight automation where it earns its keep — without the platform bloat.",
    features: [
      { t: "Workflow mapping", b: "Bottleneck analysis before tooling decisions." },
      { t: "Low-code integrations", b: "Connecting the tools you already run." },
      { t: "Selective RPA", b: "Used only where repetition justifies it." },
      { t: "Documented hand-off", b: "Returned to your team with full documentation." },
    ],
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Operations,"
        serif="handled."
        description="Six interlocking practices designed to be adopted alone or together. Same standards, same accountability, same senior ownership."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
        imageAlt=""
        ctaPrimary={{ label: "Explore our services", href: "#customer-support" }}
        ctaSecondary={{ label: "Talk to a partner", href: "/contact" }}
        trustEmphasis="150+ operators"
        trustLabel="standing by — senior owner on every account."
      />

      {/* Service index — quick nav */}
      <section className="py-8 bg-ivory border-y border-navy/8">
        <div className="container-content">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-7 h-[2px] bg-orange" />
              <span className="text-[11px] uppercase tracking-[0.26em] text-orange font-semibold">
                Jump to
              </span>
            </div>
          </FadeUp>
          <Stagger gap={0.04} className="flex flex-wrap gap-2">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <Link
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white border border-navy/10 px-4 py-2 text-[13px] text-navy hover:border-navy/30 hover:-translate-y-0.5 transition-all duration-300 shadow-[0_1px_2px_rgba(15,19,48,0.04)]"
                >
                  <span className="text-[10px] tracking-[0.2em] text-orange font-semibold tabular-nums">
                    {s.n}
                  </span>
                  <span className="font-medium">{s.name}</span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-10 lg:py-12 bg-white">
        <div className="container-content space-y-5 lg:space-y-6">
          {services.map((s, i) => (
            <ServiceBlock key={s.id} s={s} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

function FeatureIcon({ i }: { i: number }) {
  const s = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (i % 4) {
    case 0:
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" {...s}>
          <path d="M7 3h7l5 5v13H7z" />
          <path d="M14 3v5h5" />
        </svg>
      );
    case 1:
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" {...s}>
          <path d="M4 7h12M16 7l-3-3M16 7l-3 3" />
          <path d="M20 17H8M8 17l3-3M8 17l3 3" />
        </svg>
      );
    case 2:
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" {...s}>
          <path d="M4 10l8-5 8 5" />
          <path d="M6 10v8h12v-8" />
          <path d="M10 18v-4h4v4" />
        </svg>
      );
    default:
      return (
        <svg width="13" height="13" viewBox="0 0 24 24" {...s}>
          <path d="M5 19V9M11 19V5M17 19v-7" />
          <path d="M4 19h16" />
        </svg>
      );
  }
}

function ServiceBlock({
  s,
  flip,
}: {
  s: typeof services[number];
  flip: boolean;
}) {
  return (
    <article
      id={s.id}
      className="group relative rounded-2xl border border-navy/8 bg-white shadow-[0_1px_2px_rgba(15,19,48,0.03),0_12px_30px_-18px_rgba(15,19,48,0.12)] overflow-hidden scroll-mt-32 transition-all duration-500 ease-editorial hover:shadow-[0_1px_2px_rgba(15,19,48,0.03),0_20px_40px_-22px_rgba(15,19,48,0.18)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Image side */}
        <FadeUp className={`lg:col-span-4 ${flip ? "lg:order-2" : ""}`}>
          <div className="relative overflow-hidden h-full min-h-[180px] lg:min-h-[260px] bg-navy">
            <Image
              src={s.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 360px"
              className="object-cover opacity-90 transition-transform duration-[1100ms] ease-editorial group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/85 via-navy/55 to-navy/25 pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />

            {/* Editorial number — top-left */}
            <div className="absolute top-5 left-5 text-white">
              <div className="font-display text-[40px] sm:text-[44px] leading-[0.85] tracking-[-0.04em] font-semibold">
                {s.n}
              </div>
              <div className="mt-1 flex items-center gap-1 text-[10px] font-medium tabular-nums">
                <span className="text-orange">/</span>
                <span className="text-white/75">06</span>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Content side */}
        <div
          className={`lg:col-span-8 p-5 lg:p-7 flex flex-col ${
            flip ? "lg:order-1" : ""
          }`}
        >
          <FadeUp>
            <div className="flex items-center gap-2.5">
              <span className="block w-5 h-[2px] bg-orange" />
              <span className="text-[10px] uppercase tracking-[0.24em] text-orange font-semibold">
                Service {s.n}
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h2 className="mt-2 font-display text-[20px] sm:text-[24px] xl:text-[26px] tracking-[-0.02em] leading-[1.15] text-navy font-semibold">
              {s.name}
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-2 text-[12.5px] leading-[1.55] text-navy/60 max-w-lg">
              {s.lead}
            </p>
          </FadeUp>

          {/* 2x2 feature grid — compact */}
          <FadeUp delay={0.12}>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {s.features.map((f, idx) => (
                <div
                  key={f.t}
                  className="rounded-xl bg-white border border-navy/8 px-3 py-2.5 transition-all duration-300 hover:border-navy/15"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="shrink-0 grid place-items-center w-7 h-7 rounded-lg bg-orange/10 text-orange">
                      <FeatureIcon i={idx} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12px] font-semibold text-navy leading-tight">
                        {f.t}
                      </div>
                      <div className="mt-1 text-[11px] leading-[1.45] text-navy/55">
                        {f.b}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Footer row */}
          <FadeUp delay={0.18}>
            <div className="mt-4 pt-3 border-t border-navy/8 flex items-center justify-between gap-3 flex-wrap">
              <Link
                href="/contact"
                className="group/btn inline-flex h-9 items-center gap-1.5 rounded-full bg-navy px-4 text-[11.5px] font-medium text-white hover:bg-blue-deep transition-colors"
              >
                Discuss this service
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform group-hover/btn:translate-x-1"
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

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {services.map((d) => (
                    <span
                      key={d.id}
                      className={`block rounded-full transition-all ${
                        d.id === s.id
                          ? "w-3 h-1 bg-orange"
                          : "w-1 h-1 bg-navy/15"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-navy/45 font-semibold tabular-nums">
                  {s.n} / 06
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </article>
  );
}
