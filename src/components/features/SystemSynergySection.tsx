"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Activity, TrendingUp, Users, DollarSign, PackageX, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function SystemSynergySection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const chainNodes = [
    { title: "Sales Signal", desc: "Tally voucher generated", icon: TrendingUp, color: "text-purple-600 dark:text-purple-400" },
    { title: "Receivables", desc: "Due date & ageing set", icon: Users, color: "text-pink-600 dark:text-pink-400" },
    { title: "Cash Flow", desc: "Runway updated", icon: Activity, color: "text-blue-600 dark:text-blue-400" },
    { title: "Profitability", desc: "Net margin calculated", icon: DollarSign, color: "text-emerald-600 dark:text-emerald-400" },
    { title: "Inventory", desc: "Stock velocity updated", icon: PackageX, color: "text-indigo-600 dark:text-indigo-400" },
    { title: "Business Health", desc: "Overall score computed", icon: ShieldCheck, color: "text-purple-600 dark:text-purple-300" },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden border-t border-purple-500/10 transition-colors">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <Container size="xl" className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            CONNECTED SYSTEM SYNERGY
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            The real power is how <br />
            <span className="gradient-text-purple-blue">everything connects</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Sarasnova doesn&apos;t just display isolated reports. A single sale instantly updates your cash forecast, evaluates customer credit risk, calculates net margin, and adjusts inventory liquidation priorities.
          </p>
        </div>

        {/* Intelligence Chain Visualization */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative py-4">
          {chainNodes.map((node, idx) => {
            const Icon = node.icon;
            const isActive = idx === activeStep;

            return (
              <div key={idx} className="relative flex flex-col items-center text-center space-y-3">
                <motion.div
                  animate={isActive ? { scale: 1.1, boxShadow: "0 0 25px rgba(124, 58, 237, 0.4)" } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-2xl border transition-all ${
                    isActive
                      ? "bg-purple-100 dark:bg-purple-950 border-purple-500 text-purple-900 dark:text-white"
                      : "bg-slate-50 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${isActive ? "text-purple-600 dark:text-purple-300" : node.color}`} />
                </motion.div>

                <div>
                  <div className={`text-xs font-extrabold ${isActive ? "text-purple-700 dark:text-purple-300" : "text-slate-900 dark:text-white"}`}>
                    {node.title}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{node.desc}</div>
                </div>

                {idx < 5 && (
                  <div className="hidden md:block absolute -right-2 top-6 text-slate-300 dark:text-slate-700">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
