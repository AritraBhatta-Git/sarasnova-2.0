"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ArrowDown, Database, Cpu, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  const signalPhrases = [
    "Numbers become clarity.",
    "Clarity becomes action.",
    "Action becomes growth.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % signalPhrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [signalPhrases.length]);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors border-b border-slate-200 dark:border-slate-800/60">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT COLUMN: Editorial Story Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
              OUR MISSION &amp; VISION
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-slate-900 dark:text-white">
              We’re building the intelligence layer <br className="hidden sm:inline" />
              <span className="gradient-text-purple-blue">for modern Indian businesses.</span>
            </h1>

            {/* Lightweight Live Text Animation */}
            <div className="h-8 flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.35 }}
                  className="text-base sm:text-lg font-bold text-purple-600 dark:text-purple-400 tracking-wide"
                >
                  {signalPhrases[index]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              SARASnova was created to solve a fundamental challenge: Indian business owners have financial data everywhere across Tally and spreadsheets, but lack the instant clarity needed to make fast, confident operational decisions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="primary" size="lg" className="group">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <a
                href="#why-sarasnova"
                className="px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <span>Explore SARASnova</span>
                <ArrowDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive React/CSS Intelligence Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-slate-200 dark:border-purple-500/30 bg-slate-50 dark:bg-slate-900/90 p-6 sm:p-7 shadow-2xl space-y-5 overflow-hidden backdrop-blur-xl">
              {/* Subtle visual header */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-black tracking-wider uppercase text-slate-700 dark:text-slate-200">
                    SARAS Intelligence Engine
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  LIVE PIPELINE
                </span>
              </div>

              {/* Connected Pipeline Flow Nodes */}
              <div className="space-y-3">
                {/* Node 1: Raw Data */}
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 dark:text-white">1. Business Data</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Tally ERP 9 / TallyPrime ledgers &amp; vouchers</div>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                </div>

                {/* Animated Arrow Connector */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500 to-purple-500" />
                </div>

                {/* Node 2: SARAS AI Intelligence */}
                <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/80 flex items-center justify-between gap-3 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-600 text-white">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 dark:text-white">2. SARAS AI Copilot</div>
                      <div className="text-[10px] text-purple-700 dark:text-purple-300 font-medium">Margin risk, dead stock &amp; cash flow analysis</div>
                    </div>
                  </div>
                  <Sparkles className="w-4 h-4 text-purple-500 animate-spin-slow shrink-0" />
                </div>

                {/* Animated Arrow Connector */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-purple-500 to-emerald-500" />
                </div>

                {/* Node 3: Clear Decision & Action */}
                <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-slate-900 dark:text-white">3. Clear Decision</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">WhatsApp payment reminders &amp; daily pulse</div>
                    </div>
                  </div>
                  <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0" />
                </div>
              </div>

              {/* Bottom metric card */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                <span>Outcome: Zero Month-End Surprises</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Instant Clarity</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
