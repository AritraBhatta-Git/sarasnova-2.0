import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { DashboardShowcase } from "@/components/dashboard/DashboardShowcase";
import { SarasSection } from "@/components/saras/SarasSection";
import { WorkflowSection } from "@/components/workflow/WorkflowSection";
import { IntegrationsSection } from "@/components/integrations/IntegrationsSection";
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

      {/* 5. Integrations Orbit Section */}
      <IntegrationsSection />

      {/* 6. Final CTA Section */}
      <FinalCTA />
    </div>
  );
}
