import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UrbanWizz — Operations that move business forward",
  description:
    "UrbanWizz is a business process outsourcing partner delivering customer support, finance operations and IT-enabled services for businesses that value reliability.",
  metadataBase: new URL("https://urbanwizz.com"),
  openGraph: {
    title: "UrbanWizz — Guiding with strength. Growing with care.",
    description:
      "Human-centered outsourcing for businesses that value reliability, operational excellence and lasting partnerships.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable}`}>
      <body className="bg-ivory text-navy antialiased">
        <Loader />
        <SmoothScroll />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
