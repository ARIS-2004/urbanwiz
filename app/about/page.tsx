import type { Metadata } from "next";
import CTA from "@/components/CTA";
import AboutHero from "@/components/about/AboutHero";
import OriginStory from "@/components/about/OriginStory";
import MissionValues from "@/components/about/MissionValues";
import Leadership from "@/components/about/Leadership";
import AboutMetrics from "@/components/about/AboutMetrics";
import Studio from "@/components/about/Studio";
import Timeline from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: "About — Urbanwiz",
  description:
    "Urbanwiz is a Kolkata-based business process outsourcing partner — built on senior operators, transparent SLAs and long-term relationships.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OriginStory />
      <MissionValues />
      <AboutMetrics />
      <Leadership />
      <Studio />
      <Timeline />

      <CTA />
    </>
  );
}
