import React from "react";
import type { Metadata } from "next";
import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingCard } from "@/components/pricing/PricingCard";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";

export const metadata: Metadata = {
  title: "Pricing | Sarasnova 2.0 — AI CFO for India",
  description:
    "Simple annual pricing for Sarasnova 2.0 AI CFO platform. Includes all 8 core intelligence modules, Tally integration, and WhatsApp daily pulse.",
};

export default function PricingPage() {
  return (
    <div className="bg-slate-950 text-white selection:bg-purple-500 selection:text-white">
      <PricingHero />
      <PricingCard />
      <PricingFAQ />
    </div>
  );
}
