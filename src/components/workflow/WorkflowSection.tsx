"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plug, BarChart2, Sparkles, Send, RefreshCw, CheckCircle2, Zap, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      number: "01",
      title: "CONNECT",
      desc: "Securely connect your Tally data in minutes.",
      icon: <Plug className="w-6 h-6" />,
      color: "purple",
      glowBg: "from-purple-600/30 to-indigo-600/30",
      activeBorder: "border-purple-500 shadow-purple-500/50",
      activeText: "text-purple-600 dark:text-purple-400",
    },
    {
      number: "02",
      title: "ANALYZE",
      desc: "Sarasnova analyzes thousands of ledger entries in real-time.",
      icon: <BarChart2 className="w-6 h-6" />,
      color: "blue",
      glowBg: "from-blue-600/30 to-cyan-600/30",
      activeBorder: "border-blue-500 shadow-blue-500/50",
      activeText: "text-blue-600 dark:text-blue-400",
    },
    {
      number: "03",
      title: "INSIGHT",
      desc: "Get AI-powered insights, margin warnings, and cash flow forecasts.",
      icon: <Sparkles className="w-6 h-6" />,
      color: "emerald",
      glowBg: "from-emerald-600/30 to-teal-600/30",
      activeBorder: "border-emerald-500 shadow-emerald-500/50",
      activeText: "text-emerald-600 dark:text-emerald-400",
    },
    {
      number: "04",
      title: "ACT",
      desc: "Take action with confidence, recover receivables, and grow your business.",
      icon: <Send className="w-6 h-6" />,
      color: "violet",
      glowBg: "from-violet-600/30 to-purple-600/30",
      activeBorder: "border-violet-500 shadow-violet-500/50",
      activeText: "text-violet-600 dark:text-violet-400",
    },
  ];

  const statusItems = [
    { icon: <RefreshCw className="w-4 h-4 text-purple-600 dark:text-purple-400" />, label: "Real-time Sync", value: "Every 15 mins" },
    { icon: <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />, label: "Data Accuracy", value: "99.8%" },
    { icon: <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />, label: "Processing Speed", value: "Super Fast" },
    { icon: <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />, label: "Uptime", value: "99.9%" },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            SIMPLE 4-STEP PROCESS
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            From data to decisions in <br />
            <span className="gradient-text-purple-blue">4 simple steps</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            No complex setup or training required. Sarasnova turns raw accounting data into clear financial action automatically.
          </p>
        </div>

        {/* DESKTOP CONNECTED PROCESS VISUALIZATION */}
        <div className="hidden lg:block relative py-8">
          {/* Background Connecting Line */}
          <div className="absolute top-[88px] left-[10%] right-[10%] h-1 bg-slate-200 dark:bg-slate-800 rounded-full z-0" />

          {/* Traveling Active Signal Line */}
          <motion.div
            className="absolute top-[88px] left-[10%] h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 rounded-full z-0 shadow-lg shadow-purple-500/50"
            animate={{
              width: `${(activeStep / 3) * 80}%`,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const isActive = idx === activeStep;

              return (
                <div key={idx} className="flex flex-col items-center text-center space-y-4">
                  {/* Circular Node */}
                  <motion.div
                    animate={
                      isActive
                        ? { scale: 1.15, boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)" }
                        : { scale: 1, boxShadow: "0 0 0px rgba(0, 0, 0, 0)" }
                    }
                    transition={{ duration: 0.4 }}
                    className={`w-24 h-24 rounded-full border-2 flex items-center justify-center relative cursor-pointer transition-all ${
                      isActive
                        ? `${step.activeBorder} bg-white dark:bg-slate-900 ${step.activeText}`
                        : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-500 dark:text-slate-400 hover:border-purple-300"
                    }`}
                    onClick={() => setActiveStep(idx)}
                  >
                    {step.icon}

                    {/* Step Badge */}
                    <span className="absolute -bottom-2 text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-900 dark:bg-slate-950 border border-slate-700 text-white">
                      {step.number}
                    </span>
                  </motion.div>

                  {/* Title & Description */}
                  <div className="space-y-1 max-w-[220px]">
                    <h3 className={`font-extrabold text-base tracking-wider ${isActive ? step.activeText : "text-slate-900 dark:text-white"}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE VERTICAL CONNECTED FLOW */}
        <div className="lg:hidden space-y-6 relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 max-w-md mx-auto">
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;

            return (
              <div key={idx} className="relative space-y-2">
                {/* Node Bullet */}
                <div
                  className={`absolute -left-[31px] top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold ${
                    isActive
                      ? "bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-500/50 scale-125"
                      : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {step.number}
                </div>

                <div
                  className={`p-4 rounded-2xl border transition-all ${
                    isActive
                      ? "bg-white dark:bg-slate-900 border-purple-500/50 shadow-lg"
                      : "bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={isActive ? step.activeText : "text-slate-500 dark:text-slate-400"}>
                      {step.icon}
                    </div>
                    <h3 className={`font-extrabold text-base ${isActive ? step.activeText : "text-slate-900 dark:text-white"}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM SYSTEM PERFORMANCE STRIP */}
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-purple-500/20 bg-white dark:bg-slate-900/80 backdrop-blur-xl shadow-lg dark:shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
            {statusItems.map((item, idx) => (
              <div key={idx} className={`flex items-center gap-3 ${idx > 0 ? "pt-3 md:pt-0 md:pl-4" : ""}`}>
                <div className="p-2 rounded-xl bg-purple-50 dark:bg-slate-950 shrink-0 border border-purple-100 dark:border-slate-800">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{item.label}</div>
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
