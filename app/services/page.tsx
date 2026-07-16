import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceHighlight from "@/components/services/ServiceHighlight";
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
        className="relative py-10 lg:py-12 border-y border-navy/8 dark:border-white/10 overflow-hidden bg-[#FAF8F6] dark:bg-[#0E1230] transition-colors duration-300"
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
              <span className="text-[10.5px] uppercase tracking-[0.22em] text-navy/45 dark:text-ivory/45 font-semibold tabular-nums">
                06 practices
              </span>
            </div>
          </FadeUp>
          <Stagger gap={0.05} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <Link
                  href={`#${s.id}`}
                  className="group relative flex flex-col h-full min-h-[178px] rounded-[20px] bg-white dark:bg-[#12173a] border border-navy/10 dark:border-white/10 p-6 hover:border-orange/45 hover:-translate-y-1.5 transition-all duration-500 ease-editorial shadow-[0_1px_2px_rgba(15,19,48,0.03),0_18px_38px_-24px_rgba(15,19,48,0.22)] hover:shadow-[0_1px_2px_rgba(15,19,48,0.03),0_32px_58px_-24px_rgba(15,19,48,0.32)] overflow-hidden"
                >
                  {/* corner wash */}
                  <span
                    aria-hidden
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(255,87,34,0.15), rgba(255,87,34,0) 70%)",
                    }}
                  />
                  {/* top accent that fills on hover */}
                  <span
                    aria-hidden
                    className="absolute top-0 left-0 right-0 h-[3px] bg-orange origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-editorial"
                  />

                  {/* Header: number + tag chip */}
                  <div className="relative flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-display text-[15px] font-black tabular-nums text-orange leading-none">
                        {s.n}
                      </span>
                      <span className="block w-6 h-[2px] rounded-full bg-orange/40 origin-left transition-transform duration-500 ease-editorial group-hover:scale-x-150" />
                    </div>
                    <span className="text-[8.5px] uppercase tracking-[0.2em] text-navy/40 dark:text-ivory/40 font-bold rounded-full bg-navy/[0.04] px-2 py-1 group-hover:bg-orange/10 group-hover:text-orange transition-colors duration-300">
                      {s.tag}
                    </span>
                  </div>

                  <span className="relative mt-5 font-display text-[16px] sm:text-[17px] tracking-[-0.015em] text-navy dark:text-ivory font-bold leading-[1.15] group-hover:text-orange transition-colors">
                    {s.name}
                  </span>

                  {/* Footer: view hint */}
                  <div className="relative mt-auto pt-4 flex items-center gap-2 text-navy/40 dark:text-ivory/40 group-hover:text-orange transition-colors duration-300">
                    <span className="text-[9.5px] uppercase tracking-[0.2em] font-bold">
                      View service
                    </span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white dark:bg-[#12173a]">
        <div className="container-content space-y-5 lg:space-y-6">
          {services.map((s, i) => (
            <ServiceHighlight key={s.id} id={s.id}>
              <ServiceBlock s={s} flip={i % 2 === 1} />
            </ServiceHighlight>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
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
      className="group relative rounded-3xl border border-navy/8 dark:border-white/10 bg-white dark:bg-[#12173a] shadow-[0_1px_2px_rgba(15,19,48,0.03),0_18px_40px_-22px_rgba(15,19,48,0.16)] overflow-hidden scroll-mt-32 transition-all duration-500 ease-editorial hover:border-navy/15 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(15,19,48,0.03),0_30px_56px_-22px_rgba(15,19,48,0.24)]"
    >
      {/* Inner top highlight */}
      <span
        aria-hidden
        className="absolute top-0 left-7 right-7 h-px bg-white dark:bg-white/10 pointer-events-none z-10"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Image side */}
        <FadeUp className={`lg:col-span-5 order-1 ${flip ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative overflow-hidden h-full min-h-[220px] lg:min-h-[320px] bg-navy">
            <Image
              src={s.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover transition-transform duration-[1400ms] ease-editorial group-hover:scale-[1.06]"
            />
            {/* refined tint — clean, no floating overlays */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(120deg, rgba(15,19,48,0.55) 0%, rgba(15,19,48,0.20) 50%, rgba(15,19,48,0.10) 100%)",
              }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />

            {/* Big editorial watermark number */}
            <span
              aria-hidden
              className="absolute -bottom-7 -right-1 font-display text-[150px] sm:text-[190px] leading-none font-black tracking-[-0.05em] text-ivory pointer-events-none select-none"
              style={{ opacity: 0.12 }}
            >
              {s.n}
            </span>
          </div>
        </FadeUp>

        {/* Content side */}
        <div
          className={`lg:col-span-7 p-7 lg:p-10 flex flex-col justify-center order-2 ${
            flip ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <FadeUp>
            <div className="flex items-center gap-2.5">
              <span className="block w-6 h-[2px] bg-orange" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-orange font-bold">
                Service · {s.n}
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h2 className="mt-4 font-display text-[26px] sm:text-[30px] xl:text-[34px] tracking-[-0.025em] leading-[1.08] text-navy dark:text-ivory font-bold">
              {s.name}
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-navy/60 dark:text-ivory/55 max-w-xl">
              {s.lead}
            </p>
          </FadeUp>

          {/* Feature list — elegant ledger rows */}
          <FadeUp delay={0.12}>
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              {s.features.map((f, idx) => (
                <div
                  key={f.t}
                  className={`group/feat py-4 border-t border-navy/8 ${
                    idx < 2 ? "sm:border-t" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-[12px] font-black tabular-nums text-orange/70 leading-none shrink-0 transition-colors duration-300 group-hover/feat:text-orange">
                      0{idx + 1}
                    </span>
                    <div>
                      <div className="text-[15.5px] font-bold text-navy dark:text-ivory leading-tight tracking-[-0.01em]">
                        {f.t}
                      </div>
                      <div className="mt-1.5 text-[13.5px] leading-[1.6] text-navy/60 dark:text-ivory/55">
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
            <div className="mt-7 pt-5 border-t border-navy/8 dark:border-white/10 flex items-center justify-between gap-3 flex-wrap">
              <Link
                href="/contact"
                className="group/btn inline-flex items-center justify-between gap-3 rounded-full bg-navy text-ivory pl-5 pr-2 py-2 text-[11px] uppercase tracking-[0.22em] font-bold hover:bg-orange transition-colors duration-300"
                style={{
                  boxShadow:
                    "0 12px 24px -10px rgba(15,19,48,0.50), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                Discuss this service
                <span className="grid place-items-center w-8 h-8 rounded-full bg-orange text-ivory transition-all duration-300 group-hover/btn:bg-ivory group-hover/btn:text-orange">
                  <svg
                    width="11"
                    height="11"
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
                <span className="text-[10px] uppercase tracking-[0.22em] text-navy/50 dark:text-ivory/45 font-bold tabular-nums">
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
