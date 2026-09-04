import React from "react";
import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | Sarasnova 2.0 — AI CFO for India",
  description:
    "Get in touch with the Sarasnova 2.0 financial intelligence team. Book a live demo or ask questions about Tally integration.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-white selection:bg-purple-500 selection:text-white">
      <ContactHero />
      <ContactFormSection />
    </div>
  );
}
