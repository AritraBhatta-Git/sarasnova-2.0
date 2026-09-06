"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

import { ProblemIndicatorVisual } from "./ProblemIndicatorVisual";
import { StrategyBlueprintVisual } from "./StrategyBlueprintVisual";
import { DailyPulseVisual } from "./DailyPulseVisual";
import { MonitorVarianceVisual } from "./MonitorVarianceVisual";

const STEP_DURATION = 6000; // 6 seconds auto-rotation loop

export function DashboardShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const steps = [
    {
      num: "01",
      category: "PROBLEM INDICATOR",
      title: "Identify Hidden Leaks & Bottlenecks",
      summary:
        "We deep-dive into your operational and financial data to uncover what’s actually holding your margins, cash, and turnaround times back.",
      highlights: [
        "Pinpoint aging receivables and blocked working capital.",
        "Identify dead stock (>90 days) eating into cash reserves.",
        "Uncover low-margin product lines or hidden cost overruns.",
      ],
      tag: "🔍 Data Audit & Health Check",
    },
    {
      num: "02",
      category: "STRATEGY",
      title: "Build Your Custom Annual Growth Blueprint",
      summary:
        "Turn raw insights into an achievable 12-month roadmap tailored to fix inefficiencies, safeguard liquidity, and accelerate revenue.",
      highlights: [
        "Clear financial and operational targets broken down by quarter.",
        "Working capital optimization strategies to free locked cash.",
        "Practical margin-protection guidelines your team can follow.",
      ],
      tag: "🎯 12-Month Target Architecture",
    },
    {
      num: "03",
      category: "DAILY PULSE",
      title: "Receive Micro-Targets on WhatsApp Every Morning",
      summary:
        "Strategy fails when it stays inside a spreadsheet. We convert annual roadmaps into actionable daily prompts delivered straight where you work.",
      highlights: [
        "Daily revenue and collection targets sent directly to decision-makers.",
        "Priority task alerts (e.g., high-value overdue client follow-ups).",
        "Zero app fatigue—no complex software dashboards required for daily tasks.",
      ],
      tag: "📲 Daily WhatsApp Action Engine",
    },
    {
      num: "04",
      category: "MONITOR",
      title: "Track Real-Time Variances & Course-Correct Fast",
      summary:
        "Don't wait until quarter-end to realize you missed target. Real-time variance tracking catches discrepancies before they become expensive problems.",
      highlights: [
        "Automated alerts when actual numbers deviate from plan.",
        "Root-cause analysis to explain why margins or sales dipped.",
        "Dynamic target recalibration to stay on track all year long.",
      ],
      tag: "📊 Live Variance & Performance Guard",
    },
  ];

  const handleNextStep = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  }, [steps.length]);

  // Automatic 6-second timer loop with pause capability
  useEffect(() => {
    if (isPaused) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const interval = setInterval(() => {
      handleNextStep();
    }, STEP_DURATION);

    return () => clearInterval(interval);
  }, [isPaused, handleNextStep]);

  const renderVisual = (index: number) => {
    switch (index) {
      case 0:
        return <ProblemIndicatorVisual />;
      case 1:
        return <StrategyBlueprintVisual />;
      case 2:
        return <DailyPulseVisual />;
      case 3:
        return <MonitorVarianceVisual />;
      default:
        return <ProblemIndicatorVisual />;
    }
  };

  return (
    <section
      id="roadmap"
      className="py-20 md:py-32 relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors overflow-hidden"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION INTRO */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            THE ROADMAP TO SUSTAINED GROWTH
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            A 4-step operating rhythm <br className="hidden sm:inline" />
            <span className="gradient-text-purple-blue">designed to scale your business.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Most businesses fail to hit annual targets not from a lack of ambition, but from a breakdown between yearly strategy and daily execution. Here is how Sarasnova closes that gap.
          </p>
        </div>

        {/* INTERACTIVE 4-STEP LIVE SHOWCASE CONTAINER (HOVER TO PAUSE) */}
        <div
          className="space-y-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* STEP NAVIGATION PILLS WITH LIVE PROGRESS FILL */}
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 overflow-x-auto pb-3 pt-1 px-1 sm:px-0 scrollbar-none snap-x touch-pan-x">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPaused(true);
                  }}
                  className={`relative overflow-hidden px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 sm:gap-2 shrink-0 snap-center border ${
                    isActive
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-md scale-105"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-400"
                  }`}
                  aria-label={`Step ${step.num}: ${step.category}`}
                >
                  <span className="font-black">{step.num}</span>
                  <span>{step.category}</span>

                  {/* Subtle 6-Second Active Progress Bar */}
                  {isActive && !isPaused && (
                    <motion.div
                      key={`progress-${idx}-${activeStep}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/80 origin-left"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* DESKTOP 2-COLUMN CANVAS (Visible lg and above) */}
          <div className="hidden lg:grid grid-cols-12 gap-12 lg:gap-16 items-center min-h-[580px]">
            {/* LEFT COLUMN: ~45% WIDTH TEXT STORY */}
            <div className="col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Category & Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
                      {steps[activeStep].category}
                    </span>
                    <span className="text-4xl font-black text-slate-300 dark:text-slate-800">
                      {steps[activeStep].num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {steps[activeStep].title}
                  </h3>

                  {/* Summary */}
                  <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {steps[activeStep].summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-3 pt-2">
                    {steps[activeStep].highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                        <div className="p-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 mt-1 shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* UI Tag */}
                  <div className="pt-2">
                    <span className="inline-block px-4 py-2 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs font-bold border border-slate-200 dark:border-slate-800 shadow-sm">
                      {steps[activeStep].tag}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* RIGHT COLUMN: ~55% WIDTH LARGE PRODUCT VISUAL */}
            <div className="col-span-7 h-[580px] w-full">
              <div className="relative w-full h-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-3 sm:p-5 shadow-2xl overflow-hidden backdrop-blur-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    {renderVisual(activeStep)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* MOBILE & TABLET STACKED LAYOUT (Visible below lg) */}
          <div className="lg:hidden space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Text Content */}
                <div className="p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-5 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
                      {steps[activeStep].category}
                    </span>
                    <span className="text-2xl font-black text-slate-300 dark:text-slate-700">
                      {steps[activeStep].num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {steps[activeStep].title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {steps[activeStep].summary}
                  </p>

                  <div className="space-y-2 pt-1">
                    {steps[activeStep].highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700">
                      {steps[activeStep].tag}
                    </span>
                  </div>
                </div>

                {/* Large Product Visual */}
                <div className="min-h-[460px] sm:min-h-[500px] w-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-2.5 sm:p-3 shadow-xl overflow-hidden">
                  {renderVisual(activeStep)}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BRIDGE CTA AT BOTTOM */}
        <div className="mt-12 md:mt-16 text-center space-y-4">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
            Ready to replace end-of-month surprises <span className="gradient-text-purple-blue">with daily clarity?</span>
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <Button href="/contact" variant="primary" size="md" className="group">
              <span>Book a Free Discovery Session</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              href="https://wa.me/919876543210"
              variant="outline"
              size="md"
              className="group border-emerald-500/40 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
            >
              <MessageCircle className="w-4 h-4 mr-1 text-emerald-500 fill-current" />
              <span>Talk to an Expert on WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
