"use client";

import React, { useState } from "react";
import { Sparkles, Layers, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { productModules } from "@/data/modules";
import { ProductModule } from "./ProductModule";
import { ProductDashboard } from "./ProductDashboard";

export function IntelligenceSection() {
  const [selectedModuleId, setSelectedModuleId] = useState<string>("daily-pulse");

  return (
    <section id="features" className="py-20 md:py-28 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container size="xl" className="space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            ALL-IN-ONE BUSINESS INTELLIGENCE
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything important. <br />
            <span className="gradient-text-purple-blue">One intelligent dashboard.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Get a 360° view of your business health, performance and risks in real-time. Sarasnova connects with your Tally data and surfaces what matters most.
          </p>
        </div>

        {/* Real Product Dashboard Showcase */}
        <div className="relative">
          <ProductDashboard />
        </div>

        {/* 8 Real Sarasnova Modules Showcase */}
        <div className="space-y-8 pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-purple-500/15 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>8 Core Intelligence Modules</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Explore specialized modules designed specifically for Indian SMB operations
              </p>
            </div>
            <Button href="#demo" variant="outline" size="sm">
              Request Full Module Walkthrough <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>

          {/* Module Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productModules.map((module) => (
              <ProductModule
                key={module.id}
                module={module}
                isActive={selectedModuleId === module.id}
                onSelect={() => setSelectedModuleId(module.id)}
                variant="card"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
