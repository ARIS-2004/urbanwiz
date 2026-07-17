import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — Urbanwiz",
  description:
    "The terms that govern your use of the Urbanwiz website and services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="July 2026"
      intro="These terms govern your use of the {{name}} website and the services we provide. By accessing our website or engaging our services, you agree to these terms."
      sections={[
        {
          heading: "About these terms",
          paragraphs: [
            "These Terms & Conditions form an agreement between you and {{name}}. If you do not agree with any part of these terms, please do not use our website or services.",
          ],
        },
        {
          heading: "Use of our website",
          bullets: [
            "You may use our website for lawful purposes only.",
            "You agree not to misuse the site, attempt to gain unauthorised access, or disrupt its normal operation.",
            "All content on this site, including text, graphics, logos, and design, is the property of {{name}} unless stated otherwise and may not be reproduced without permission.",
          ],
        },
        {
          heading: "Our services",
          paragraphs: [
            "{{name}} provides business process outsourcing and related services, including customer support, virtual assistance, finance operations, back-office support, IT helpdesk, and process automation. The specific scope, deliverables, and pricing of any engagement are set out in a separate agreement or proposal.",
          ],
        },
        {
          heading: "Enquiries and communication",
          paragraphs: [
            "When you submit an enquiry through our website, you consent to us contacting you in response. Submitting an enquiry does not create a binding contract; any engagement begins only once a formal agreement is in place.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "Unless otherwise agreed in writing, all intellectual property created by {{name}} in the course of delivering a service remains subject to the terms of the applicable engagement agreement. You may not copy, distribute, or exploit our materials without prior consent.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "Our website and its content are provided on an “as is” basis. To the fullest extent permitted by law, {{name}} is not liable for any indirect or consequential loss arising from your use of the website. Nothing in these terms limits liability that cannot be excluded under applicable law.",
          ],
        },
        {
          heading: "Third-party links",
          paragraphs: [
            "Our website may contain links to third-party sites. We are not responsible for the content or practices of those sites, and their inclusion does not imply endorsement.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of India, and any disputes will be subject to the jurisdiction of the courts of Kolkata, West Bengal.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "If you have any questions about these terms, please contact us at {{email}} or {{phone}}.",
          ],
        },
      ]}
    />
  );
}
