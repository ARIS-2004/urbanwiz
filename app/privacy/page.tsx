import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Urbanwiz",
  description:
    "How Urbanwiz collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      updated="July 2026"
      intro="At {{name}}, your privacy matters. This policy explains what information we collect when you use our website or engage our services, how we use it, and the choices you have."
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "We collect information you provide directly to us — such as when you fill out our contact or enquiry form. This typically includes your name, email address, phone number, company name, and the details of your enquiry.",
          ],
          bullets: [
            "Contact details you submit (name, email, phone, company).",
            "The content of the messages and enquiries you send us.",
            "Basic technical data your browser shares automatically, such as device and usage information, to help us keep the site secure and reliable.",
          ],
        },
        {
          heading: "How we use your information",
          bullets: [
            "To respond to your enquiries and provide the services you request.",
            "To communicate with you about your project, proposals, and support.",
            "To improve our website, services, and customer experience.",
            "To meet our legal, accounting, and regulatory obligations.",
          ],
        },
        {
          heading: "How we protect it",
          paragraphs: [
            "We apply reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. Enquiry submissions are transmitted securely and are only accessible to authorised members of our team.",
          ],
        },
        {
          heading: "Sharing your information",
          paragraphs: [
            "We do not sell your personal information. We only share it with trusted service providers who help us operate our business (for example, email delivery), and only to the extent necessary. These providers are bound to keep your information confidential.",
          ],
        },
        {
          heading: "Data retention",
          paragraphs: [
            "We keep your information only for as long as needed to fulfil the purposes described in this policy, to maintain our business records, or as required by law. When it is no longer needed, we securely delete or anonymise it.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You may request access to, correction of, or deletion of the personal information we hold about you. To make a request, email us at {{email}} and we will respond within a reasonable timeframe.",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Our website may use minimal cookies and similar technologies to remember your preferences (such as light or dark theme) and to understand how the site is used. You can control cookies through your browser settings.",
          ],
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We may update this policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review it periodically.",
          ],
        },
      ]}
    />
  );
}
