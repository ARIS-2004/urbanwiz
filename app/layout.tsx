import type { Metadata } from "next";
import { Jost, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider, themeInitScript } from "@/components/ThemeProvider";

// Primary — Futura (real Futura if licensed locally, else Jost as the closest free geometric substitute)
const futura = Jost({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-futura",
  display: "swap",
});

// Secondary — Rubik (Light family)
const rubik = Rubik({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Urbanwiz — Operations that move business forward",
  description:
    "Urbanwiz is a business process outsourcing partner delivering customer support, finance operations and IT-enabled services for businesses that value reliability.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BRAND_WEBSITE || "https://urbanwiz.co.in"
  ),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Urbanwiz — Guiding with strength. Growing with care.",
    description:
      "Human-centered outsourcing for businesses that value reliability, operational excellence and lasting partnerships.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${futura.variable} ${rubik.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-ivory text-navy antialiased dark:bg-[#0B0E24] dark:text-ivory transition-colors duration-300">
        <ThemeProvider>
          <Loader />
          <SmoothScroll />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
