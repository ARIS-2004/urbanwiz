import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OriginStory from "@/components/about/OriginStory";
import MissionValues from "@/components/about/MissionValues";
import Leadership from "@/components/about/Leadership";
import ClosingPromise from "@/components/about/ClosingPromise";

export const metadata: Metadata = {
  title: "Story of Urbanwiz & The Three Pillars",
  description:
    "We are Human, before we are Corporate.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OriginStory />
      <MissionValues />
      <Leadership />
      <ClosingPromise />
    </>
  );
}
