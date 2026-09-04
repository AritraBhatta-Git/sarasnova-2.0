import React from "react";
import type { Metadata } from "next";
import { IntegrationsHero } from "@/components/integrations/IntegrationsHero";
import { CentralCoreVisual } from "@/components/integrations/CentralCoreVisual";
import { IntegrationShowcases } from "@/components/integrations/IntegrationShowcases";
import { DataPipelineSection } from "@/components/integrations/DataPipelineSection";
import { IntegrationsCTA } from "@/components/integrations/IntegrationsCTA";

export const metadata: Metadata = {
  title: "Integrations | Sarasnova 2.0 — AI CFO for India",
  description:
    "Connect Sarasnova 2.0 with TallyPrime, WhatsApp, Email, PDF, and Excel to build one unified financial intelligence view.",
};

export default function IntegrationsPage() {
  return (
    <div className="bg-slate-950 text-white selection:bg-purple-500 selection:text-white">
      <IntegrationsHero />
      <CentralCoreVisual />
      <IntegrationShowcases />
      <DataPipelineSection />
      <IntegrationsCTA />
    </div>
  );
}
