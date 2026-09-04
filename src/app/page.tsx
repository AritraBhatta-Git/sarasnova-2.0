import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { DashboardShowcase } from "@/components/dashboard/DashboardShowcase";
import { SarasSection } from "@/components/saras/SarasSection";
import { WorkflowSection } from "@/components/workflow/WorkflowSection";
import { IntelligenceModules } from "@/components/modules/IntelligenceModules";
import { IntegrationsSection } from "@/components/integrations/IntegrationsSection";
import { ResultsSection } from "@/components/results/ResultsSection";
import { FinalCTA } from "@/components/cta/FinalCTA";

export default function HomePage() {
  return (
    <div className="relative bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden font-sans transition-colors">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Dashboard Showcase Section */}
      <DashboardShowcase />

      {/* 3. Ask SARAS AI Copilot Section */}
      <SarasSection />

      {/* 4. 4-Step Workflow Section */}
      <WorkflowSection />

      {/* 5. 8 Core Intelligence Modules Marquee */}
      <IntelligenceModules />

      {/* 6. Integrations Orbit Section */}
      <IntegrationsSection />

      {/* 7. Results & Business Growth Section */}
      <ResultsSection />

      {/* 8. Final CTA Section */}
      <FinalCTA />
    </div>
  );
}
