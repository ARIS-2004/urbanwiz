import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";
import CTA from "@/components/CTA";
import { FadeUp, Stagger, StaggerItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services — Urbanwiz",
  description:
    "Customer support, finance operations, IT helpdesk, virtual assistance and back office services from Urbanwiz.",
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
      <ServicesHero />

      {/* Service index — quick nav */}
      <section
        className="relative py-10 lg:py-12 border-y border-navy/8 overflow-hidden"
        style={{ backgroundColor: "#FAF8F6" }}
      >
        {/* Ambient washes */}
        <div
          aria-hidden
          className="absolute -top-20 right-0 w-[360px] h-[360px] rounded-full pointer-events-none opacity-65"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,87,34,0.08), rgba(255,87,34,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-20 left-0 w-[340px] h-[340px] rounded-full pointer-events-none opacity-55"
          style={{
            background:
              "radial-gradient(closest-side, rgba(30,58,186,0.06), rgba(30,58,186,0) 70%)",
          }}
        />

        <div className="container-content relative">
          <FadeUp>
            <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="block w-7 h-[2px] bg-orange" />
                <span className="text-[10.5px] uppercase tracking-[0.3em] text-orange font-semibold">
                  Jump to a service
                </span>
              </div>
              <span className="text-[10.5px] uppercase tracking-[0.22em] text-navy/45 font-semibold tabular-nums">
                06 practices
              </span>
            </div>
          </FadeUp>
          <Stagger gap={0.05} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <Link
                  href={`#${s.id}`}
                  className="group relative flex flex-col items-start gap-1.5 rounded-xl bg-white border border-navy/10 px-3.5 py-3 hover:border-orange/40 hover:-translate-y-0.5 transition-all duration-500 ease-editorial shadow-[0_1px_2px_rgba(15,19,48,0.03),0_14px_28px_-22px_rgba(15,19,48,0.18)] overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(255,87,34,0.14), rgba(255,87,34,0) 70%)",
                    }}
                  />
                  <span className="relative text-[10px] tracking-[0.22em] text-orange font-bold tabular-nums">
                    {s.n}
                  </span>
                  <span className="relative text-[12.5px] text-navy font-bold leading-tight group-hover:text-orange transition-colors">
                    {s.name}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
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
      className="group relative rounded-3xl border border-navy/8 bg-white shadow-[0_1px_2px_rgba(15,19,48,0.03),0_18px_40px_-22px_rgba(15,19,48,0.16)] overflow-hidden scroll-mt-32 transition-all duration-500 ease-editorial hover:border-navy/15 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(15,19,48,0.03),0_30px_56px_-22px_rgba(15,19,48,0.24)]"
    >
      {/* Inner top highlight */}
      <span
        aria-hidden
        className="absolute top-0 left-7 right-7 h-px bg-white pointer-events-none z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Image side */}
        <FadeUp className={`lg:col-span-5 order-1 ${flip ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative overflow-hidden h-full min-h-[200px] lg:min-h-[300px] bg-navy">
            <Image
              src={s.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover opacity-95 transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/85 via-navy/45 to-navy/15 pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />

            {/* Big editorial watermark number */}
            <span
              aria-hidden
              className="absolute -bottom-6 -right-2 font-display text-[140px] sm:text-[180px] leading-none font-black tracking-[-0.05em] text-ivory pointer-events-none select-none"
              style={{ opacity: 0.10 }}
            >
              {s.n}
            </span>

            {/* Index pill — top-left */}
            <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-[0_8px_18px_-6px_rgba(15,19,48,0.30)]">
              <span className="block w-1.5 h-1.5 rounded-full bg-orange" />
              <span className="text-[10px] uppercase tracking-[0.22em] text-navy font-bold tabular-nums">
                {s.n} / 06
              </span>
            </div>

            {/* Tag chip — bottom-left */}
            <div className="absolute bottom-5 left-5">
              <span className="inline-block rounded-full bg-orange text-ivory text-[9.5px] uppercase tracking-[0.24em] font-bold px-3 py-1.5 shadow-[0_10px_22px_-8px_rgba(255,87,34,0.55)]">
                {s.tag}
              </span>
            </div>
          </div>
        </FadeUp>

        {/* Content side */}
        <div
          className={`lg:col-span-7 p-6 lg:p-8 flex flex-col order-2 ${
            flip ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <FadeUp>
            <div className="flex items-center gap-2.5">
              <span className="block w-5 h-[2px] bg-orange" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-orange font-bold">
                Service · {s.n}
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h2 className="mt-3 font-display text-[24px] sm:text-[28px] xl:text-[32px] tracking-[-0.022em] leading-[1.1] text-navy font-bold">
              {s.name}
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-3 text-[13.5px] leading-[1.65] text-navy/60 max-w-lg">
              {s.lead}
            </p>
          </FadeUp>

          {/* 2x2 feature grid */}
          <FadeUp delay={0.12}>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {s.features.map((f, idx) => (
                <div
                  key={f.t}
                  className="group/feat relative rounded-xl bg-white border border-navy/8 px-3.5 py-3 transition-all duration-500 ease-editorial hover:border-orange/30 hover:-translate-y-0.5 overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-0 group-hover/feat:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(255,87,34,0.12), rgba(255,87,34,0) 70%)",
                    }}
                  />
                  <div className="relative flex items-start gap-3">
                    <span
                      className="shrink-0 grid place-items-center w-8 h-8 rounded-lg text-orange"
                      style={{
                        background: "#FFF2EB",
                        boxShadow:
                          "0 4px 10px -3px rgba(255,87,34,0.22), inset 0 1px 0 rgba(255,255,255,0.7)",
                      }}
                    >
                      <FeatureIcon i={idx} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-[12.5px] font-bold text-navy leading-tight">
                        {f.t}
                      </div>
                      <div className="mt-1 text-[11px] leading-[1.5] text-navy/55">
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
            <div className="mt-5 pt-4 border-t border-navy/8 flex items-center justify-between gap-3 flex-wrap">
              <Link
                href="/contact"
                className="group/btn inline-flex items-center justify-between gap-3 rounded-full bg-navy text-ivory pl-4 pr-1.5 py-1.5 text-[10.5px] uppercase tracking-[0.22em] font-bold hover:bg-orange transition-colors duration-300"
                style={{
                  boxShadow:
                    "0 12px 24px -10px rgba(15,19,48,0.50), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                Discuss this service
                <span className="grid place-items-center w-7 h-7 rounded-full bg-orange text-ivory transition-all duration-300 group-hover/btn:bg-ivory group-hover/btn:text-orange">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
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
              </Link>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {services.map((d) => (
                    <span
                      key={d.id}
                      className={`block rounded-full transition-all ${
                        d.id === s.id
                          ? "w-4 h-1 bg-orange"
                          : "w-1 h-1 bg-navy/15"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-navy/50 font-bold tabular-nums">
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
