import Hero from "@/components/Hero";
import AboutIntro from "@/components/AboutIntro";
import ServicesGrid from "@/components/ServicesGrid";
import Ecosystem from "@/components/Ecosystem";
import Partner from "@/components/Partner";
import Process from "@/components/Process";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <ServicesGrid />
      <Ecosystem />
      <Partner />
      <Process />
      <CTA />
    </>
  );
}
