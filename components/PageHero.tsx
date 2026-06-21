"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  Variants,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const wordContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const wordItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease },
  },
};

export type StripItem = {
  name: string;
  sub: string;
  icon: React.ReactNode;
};

export default function PageHero({
  title,
  serif,
  description,
  image,
  imageAlt = "",
  ctaPrimary,
  ctaSecondary,
  trustLabel,
  trustEmphasis,
}: {
  eyebrow?: string;
  title: string;
  serif?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  statusTitle?: string;
  statusSub?: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; sub?: string; href: string };
  badgeTitle?: string;
  badgeSub?: string;
  locationTitle?: string;
  locationSub?: string;
  items?: StripItem[];
  trustLabel?: string;
  trustEmphasis?: string;
}) {
  const headlineWords = title.split(" ");

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Ambient layered glows */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-y-0 right-0 w-full lg:w-3/5 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 55% at 65% 45%, rgba(255,87,34,0.08), rgba(255,87,34,0) 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-0 left-0 w-2/3 h-2/3 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 30% 20%, rgba(30,58,186,0.06), rgba(30,58,186,0) 70%)",
        }}
      />

      {/* Vertical hairline frame */}
      <motion.div
        aria-hidden
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.3, duration: 1.2, ease }}
        className="hidden lg:block absolute left-10 top-32 bottom-10 w-px origin-top bg-gradient-to-b from-transparent via-navy/8 to-transparent pointer-events-none"
      />

      {/* Floating orange dot accents */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease }}
        className="hidden lg:block absolute top-32 right-[8%] w-2 h-2 rounded-full bg-orange/40"
      />
      <motion.span
        aria-hidden
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.8, ease }}
        className="hidden lg:block absolute bottom-24 right-[14%] w-1.5 h-1.5 rounded-full bg-orange/60"
      />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left — copy */}
          <div className="lg:col-span-6 xl:col-span-6 lg:max-w-[560px]">
            <h1 className="font-display text-[40px] sm:text-[48px] xl:text-[56px] leading-[1.05] tracking-[-0.02em] text-navy font-semibold">
              <motion.span
                variants={wordContainer}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {headlineWords.map((w, i) => (
                  <motion.span
                    key={`${w}-${i}`}
                    variants={wordItem}
                    className="inline-block mr-[0.25em]"
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.span>
              {serif && (
                <motion.span
                  variants={wordItem}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.55, duration: 0.9, ease }}
                  className="inline-block text-orange"
                >
                  {serif}
                </motion.span>
              )}
            </h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8, ease }}
                className="mt-5 max-w-md text-[14px] leading-[1.65] text-navy/55"
              >
                {description}
              </motion.p>
            )}

            {/* Trust line */}
            {(trustLabel || trustEmphasis) && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.8, ease }}
                className="mt-7 flex items-center gap-3"
              >
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=3&w=80&h=80&q=80",
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=3&w=80&h=80&q=80",
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=3&w=80&h=80&q=80",
                  ].map((src, i) => (
                    <motion.span
                      key={src}
                      initial={{ opacity: 0, scale: 0, x: -10 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ delay: 1.0 + i * 0.08, duration: 0.5, ease }}
                      whileHover={{ y: -2, scale: 1.08, zIndex: 10 }}
                      className="block w-7 h-7 rounded-full ring-2 ring-white bg-cover bg-center cursor-default"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  ))}
                </div>
                <div className="text-[12px] text-navy/55 leading-snug">
                  {trustEmphasis && (
                    <span className="font-medium text-navy">{trustEmphasis}</span>
                  )}{" "}
                  {trustLabel}
                </div>
              </motion.div>
            )}

            {/* CTAs */}
            {(ctaPrimary || ctaSecondary) && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8, ease }}
                className="mt-7 flex flex-wrap gap-2.5"
              >
                {ctaPrimary && (
                  <MagneticCTA
                    href={ctaPrimary.href}
                    primary
                    label={ctaPrimary.label}
                    icon={
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                )}
                {ctaSecondary && (
                  <MagneticCTA
                    href={ctaSecondary.href}
                    label={ctaSecondary.label}
                    icon={
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 7h9m0 0L7.5 3.5M11 7l-3.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                )}
              </motion.div>
            )}

            {/* Contact row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.15, duration: 0.8, ease }}
              className="mt-7 pt-5 border-t border-navy/8 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-[12.5px] text-navy/75"
            >
              <a
                href="mailto:hello@urbanwizz.com"
                className="group inline-flex items-center gap-2 hover:text-orange transition-colors"
              >
                <span className="grid place-items-center w-6 h-6 rounded-full bg-orange/10 text-orange group-hover:bg-orange group-hover:text-ivory transition-colors">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M3 5l5 3.5L13 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                hello@urbanwizz.com
              </a>
              <span className="block w-px h-3.5 bg-navy/15" />
              <a
                href="tel:+919051234876"
                className="group inline-flex items-center gap-2 hover:text-orange transition-colors tabular-nums"
              >
                <span className="grid place-items-center w-6 h-6 rounded-full bg-orange/10 text-orange group-hover:bg-orange group-hover:text-ivory transition-colors">
                  <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 3h1.8L7 6 5.5 7c.9 1.7 2.3 3.1 4 4L10.5 9.5 13.5 11V13c0 .55-.45 1-1 1-5.8 0-10.5-4.7-10.5-10.5 0-.55.45-1 1-1z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                +91 90512 34876
              </a>
            </motion.div>
          </div>

          {/* Right — image */}
          {image && (
            <div className="lg:col-span-6 xl:col-span-6 self-start relative lg:-mt-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1.1, ease }}
                className="relative w-full aspect-[5/4] max-w-[760px] mx-auto rounded-3xl overflow-hidden border border-navy/8 shadow-[0_2px_4px_rgba(15,19,48,0.03),0_30px_70px_-24px_rgba(15,19,48,0.25)]"
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function MagneticCTA({
  href,
  label,
  icon,
  primary = false,
  iconLeft = false,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  primary?: boolean;
  iconLeft?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex h-12 items-center gap-2.5 rounded-xl px-6 text-[13.5px] font-medium overflow-hidden transition-shadow duration-300";
  const variant = primary
    ? "bg-orange text-ivory hover:shadow-[0_18px_36px_-12px_rgba(255,87,34,0.7)]"
    : "bg-ivory text-navy shadow-[4px_4px_10px_rgba(15,19,48,0.06),-3px_-3px_8px_rgba(255,255,255,0.95)] hover:shadow-[6px_6px_14px_rgba(15,19,48,0.08),-4px_-4px_10px_rgba(255,255,255,0.95)]";

  return (
    <motion.a
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${variant}`}
    >
      {primary && (
        <span className="absolute inset-0 bg-gradient-to-r from-orange to-orange-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      {iconLeft && <span className="relative">{icon}</span>}
      <span className="relative">{label}</span>
      {!iconLeft && (
        <span className="relative transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.a>
  );
}
