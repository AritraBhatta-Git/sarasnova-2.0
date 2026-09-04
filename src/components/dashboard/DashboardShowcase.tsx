"use client";

import React from "react";
import { Sparkles, Activity, ShieldAlert, Compass, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { DashboardPreview } from "./DashboardPreview";

export function DashboardShowcase() {
  const benefits = [
    {
      icon: <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      title: "Real-time Metrics",
      subtitle: "Live from Tally",
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "AI Insights",
      subtitle: "What matters most",
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: "Risk Detection",
      subtitle: "Before it hits you",
    },
    {
      icon: <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Actionable Guidance",
      subtitle: "What to do next",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Copy & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
              ALL-IN-ONE BUSINESS INTELLIGENCE
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              Everything important. <br />
              <span className="gradient-text-purple-blue">One intelligent dashboard.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              Get a 360° view of your business health, performance and risks in real-time without building complex spreadsheets.
            </p>

            {/* 2x2 Benefits Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-purple-500/15 backdrop-blur-md space-y-1 hover:border-purple-500/40 shadow-sm dark:shadow-none transition-colors"
                >
                  <div className="p-2 rounded-xl bg-purple-50 dark:bg-slate-950/80 w-fit border border-purple-100 dark:border-slate-800">
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white pt-1">{item.title}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{item.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Tilted Dashboard Preview */}
          <div className="lg:col-span-7 flex justify-center">
            <DashboardPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}
