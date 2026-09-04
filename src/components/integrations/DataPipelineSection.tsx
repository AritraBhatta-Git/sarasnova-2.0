"use client";

import React from "react";
import { Database, Cpu, Sparkles, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function DataPipelineSection() {
  const steps = [
    { title: "Business Data", desc: "Tally vouchers & bank ledgers sync continuously.", icon: Database, color: "text-purple-600 dark:text-purple-400" },
    { title: "Sarasnova Core", desc: "AI computes margins, runway & risk indicators.", icon: Cpu, color: "text-blue-600 dark:text-blue-400" },
    { title: "Executive Insights", desc: "Clear flags on overdue, margin drops & stock.", icon: Sparkles, color: "text-emerald-600 dark:text-emerald-400" },
    { title: "Automated Actions", desc: "WhatsApp briefings & 1-click collections.", icon: Send, color: "text-violet-600 dark:text-violet-400" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden border-t border-purple-500/10 transition-colors">
      <Container size="xl" className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            INTELLIGENCE PIPELINE
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Your data flows in. <br />
            <span className="gradient-text-purple-blue">Intelligence flows out.</span>
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 font-normal">
            Sarasnova transforms raw accounting ledgers into clear financial decisions through a continuous 4-stage pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-purple-500/20 space-y-3 relative shadow-md dark:shadow-none">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 w-fit">
                  <Icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">{step.title}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{step.desc}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
