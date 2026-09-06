"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function DataToDecision() {
  const steps = [
    {
      step: "01",
      title: "DATA",
      subtitle: "Unified Business Sources",
      icon: Database,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/30",
      desc: "Connect Tally ERP 9 / TallyPrime ledgers, sales vouchers, overdue receivables, and inventory balances silently in the background.",
      features: ["Native Tally connector", "Automated ledger cleaning", "Background cloud warehouse"],
    },
    {
      step: "02",
      title: "INTELLIGENCE",
      subtitle: "SARAS AI Engine",
      icon: Cpu,
      color: "text-purple-500 bg-purple-500/10 border-purple-500/30",
      desc: "SARAS AI interprets working capital runway, SKU margin leakage, customer payment delays, and dead stock aging.",
      features: ["Overdue risk detection", "SKU margin diagnostics", "SARAS Natural Language Copilot"],
    },
    {
      step: "03",
      title: "ACTION",
      subtitle: "Decision Support & Execution",
      icon: Zap,
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30",
      desc: "Business leaders receive clear 1-click pathways: WhatsApp payment reminders, stock re-allocation alerts, and morning briefings.",
      features: ["7:30 AM WhatsApp briefings", "1-click payment reminders", "Proactive executive alerts"],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 transition-colors">
      <Container size="xl" className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple">SIGNATURE ARCHITECTURE</Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            From Data to Decision
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            SARASnova is not simply another reporting dashboard—it is an active intelligence layer that transforms fragmented raw data into clearer operational decisions.
          </p>
        </div>

        {/* 3-Stage Connected Architecture Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="rounded-3xl border border-slate-200 dark:border-purple-500/20 bg-white dark:bg-slate-900/90 p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-lg dark:shadow-2xl relative group hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-2xl border ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-300 dark:text-slate-700">
                      {item.step}
                    </span>
                  </div>

                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <div className="text-xs font-bold text-purple-600 dark:text-purple-400 mt-0.5">
                      {item.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
