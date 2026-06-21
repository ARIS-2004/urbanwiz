# UrbanWizz — Premium BPO website

A handcrafted Next.js 15 + TypeScript + Tailwind + Framer Motion site for UrbanWizz, a business process outsourcing partner.

Design references: Apple, Stripe, Linear, Ramp. Editorial, premium, restrained.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** with a custom editorial design system
- **Framer Motion** for page transitions, reveals and the loader
- **Lenis** for smooth scrolling
- Fonts: **Satoshi**, **General Sans** (Fontshare), **Instrument Serif** (Google)

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Pages

- `/` — Home (hero, partner story, services grid, industries strip, process timeline, testimonials, CTA)
- `/services` — Six practices with detail blocks
- `/industries` — Real Estate, Finance, Healthcare, E-commerce, Technology, Startups
- `/contact` — Inquiry form, direct lines, three office cards

## Key components

- `components/Loader.tsx` — 2.8s lighthouse-beam intro
- `components/Navbar.tsx` — sticky transparent → glass on scroll
- `components/Cursor.tsx` — custom dot + ring cursor (auto-hides on touch)
- `components/PageTransition.tsx` — Framer Motion route fade
- `components/SmoothScroll.tsx` — Lenis scroll smoothing
- `components/Reveal.tsx` — `FadeUp`, `Stagger`, `StaggerItem`, `Eyebrow`
- `components/CTA.tsx`, `Process.tsx`, `Testimonials.tsx`, `IndustriesStrip.tsx`, `ServicesGrid.tsx`, `Partner.tsx`, `Hero.tsx`, `Marquee.tsx`

## Design tokens

- Deep navy `#0F1330` · Primary blue `#1E3ABA` · Orange accent `#FF5722` · Ivory `#FAFAFA`
- Section spacing `160px` · Content width `1200px` · Wide width `1440px`
- Rounded `28px` · Button height `56px` · Hero `~72px`

## Content

Markdown briefs live in `/content` and are the source of truth for copy direction.
