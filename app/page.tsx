import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Clients from "@/components/Clients";
import ServicesGrid from "@/components/ServicesGrid";
import IndustriesStrip from "@/components/IndustriesStrip";
import Partner from "@/components/Partner";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Clients />
      <ServicesGrid />
      <IndustriesStrip />
      <Partner />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
