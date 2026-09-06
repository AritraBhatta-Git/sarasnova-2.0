"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Lightbulb, Compass, Sparkles, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function SarasnovaDifference() {
  // Lightweight live text animation sequence
  const signalLines = [
    "See the signal.",
    "Understand the reason.",
    "Take the next step.",
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % signalLines.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [signalLines.length]);

  const pillars = [
    {
      step: "01",
      title: "See the signal",
      desc: "Proactive automated alerts flag cash flow bottlenecks, margin drops, and high-risk receivables before they impact your P&L.",
      icon: Eye,
    },
    {
      step: "02",
      title: "Understand the reason",
      desc: "SARAS AI performs instant root-cause analysis on customer balances, stockout causes, and vendor credit periods.",
      icon: Lightbulb,
    },
    {
      step: "03",
      title: "Take the next step",
      desc: "Execute decisions instantly with 1-click WhatsApp payment reminders and automated inventory re-allocation alerts.",
      icon: Compass,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 transition-colors">
      <Container size="xl" className="space-y-16">
        {/* Section Header with Live Signal Loop */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            THE OPERATIONAL ADVANTAGE
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            The SARASnova Difference
          </h2>

          {/* Live text animation banner */}
          <div className="h-10 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-lg sm:text-xl font-black text-purple-600 dark:text-purple-400 tracking-wide"
              >
                {signalLines[activeIdx]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-purple-500/20 space-y-4 shadow-md dark:shadow-xl relative"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 dark:text-slate-700">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section 9: Vision Statement ("What We Are Building Toward") */}
        <div className="p-8 rounded-3xl bg-purple-950/40 border border-purple-800/60 text-purple-100 max-w-4xl mx-auto space-y-3 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-purple-400">
            <Rocket className="w-4 h-4" />
            <span>What We Are Building Toward</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Democratizing Executive Financial Intelligence
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Our vision is to empower every Indian business owner with an AI CFO that turns raw Tally accounting data into daily clarity, operational confidence, and strategic growth.
          </p>
        </div>
      </Container>
    </section>
  );
}
