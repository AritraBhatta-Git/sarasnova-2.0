import React from "react";
import type { Metadata } from "next";
import { FeaturesHero } from "@/components/features/FeaturesHero";
import { DataFlowSection } from "@/components/features/DataFlowSection";
import { CapabilityShowcases } from "@/components/features/CapabilityShowcases";
import { SystemSynergySection } from "@/components/features/SystemSynergySection";
import { FeaturesCTA } from "@/components/features/FeaturesCTA";

export const metadata: Metadata = {
  title: "Features | Sarasnova 2.0 — AI CFO for India",
  description:
    "Explore Sarasnova 2.0 eight core intelligence modules: Daily Pulse, Problems Indicator, Cash Flow Risk, Profitability Risk, Sales Performance, Supplier Risk, Receivables Recovery, and Dead Stock.",
};

export default function FeaturesPage() {
  return (
    <div className="bg-slate-950 text-white selection:bg-purple-500 selection:text-white">
      <FeaturesHero />
      <DataFlowSection />
      <CapabilityShowcases />
      <SystemSynergySection />
      <FeaturesCTA />
    </div>
  );
}
