"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  TrendingDown,
  DollarSign,
  BarChart3,
  Truck,
  Users,
  PackageX,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function IntelligenceModules() {
  const [isPaused, setIsPaused] = useState(false);

  const modules = [
    {
      name: "Daily Pulse",
      desc: "Your executive summary every morning with key metrics, alerts & flags.",
      icon: <Activity className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      tag: "REAL-TIME",
      tagColor: "bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-500/30",
      borderColor: "border-purple-200 dark:border-purple-500/30 hover:border-purple-500 shadow-sm dark:shadow-purple-950/30",
      accentIconBg: "bg-purple-50 dark:bg-purple-950/80 border-purple-200 dark:border-purple-500/30",
      ctaColor: "text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300",
    },
    {
      name: "Problems Indicator",
      desc: "AI detects issues in cash, inventory, payables & more before they become critical.",
      icon: <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      tag: "ALERTS",
      tagColor: "bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-500/30",
      borderColor: "border-rose-200 dark:border-rose-500/30 hover:border-rose-500 shadow-sm dark:shadow-rose-950/30",
      accentIconBg: "bg-rose-50 dark:bg-rose-950/80 border-rose-200 dark:border-rose-500/30",
      ctaColor: "text-rose-600 dark:text-rose-400 group-hover:text-rose-700 dark:group-hover:text-rose-300",
    },
    {
      name: "Cash Flow Risk",
      desc: "Predictive 30-90 day runway & working capital forecasting.",
      icon: <TrendingDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      tag: "PREDICTIVE",
      tagColor: "bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-500/30",
      borderColor: "border-blue-200 dark:border-blue-500/30 hover:border-blue-500 shadow-sm dark:shadow-blue-950/30",
      accentIconBg: "bg-blue-50 dark:bg-blue-950/80 border-blue-200 dark:border-blue-500/30",
      ctaColor: "text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300",
    },
    {
      name: "Profitability Risk",
      desc: "Track net margins, discount abuse & rising product costs.",
      icon: <DollarSign className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      tag: "HEALTHY",
      tagColor: "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30",
      borderColor: "border-emerald-200 dark:border-emerald-500/30 hover:border-emerald-500 shadow-sm dark:shadow-emerald-950/30",
      accentIconBg: "bg-emerald-50 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-500/30",
      ctaColor: "text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
    },
    {
      name: "Sales Performance",
      desc: "Product & customer breakdown with growth momentum analytics.",
      icon: <BarChart3 className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      tag: "GROWTH",
      tagColor: "bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 border-violet-300 dark:border-violet-500/30",
      borderColor: "border-violet-200 dark:border-violet-500/30 hover:border-violet-500 shadow-sm dark:shadow-violet-950/30",
      accentIconBg: "bg-violet-50 dark:bg-violet-950/80 border-violet-200 dark:border-violet-500/30",
      ctaColor: "text-violet-600 dark:text-violet-400 group-hover:text-violet-700 dark:group-hover:text-violet-300",
    },
    {
      name: "Supplier Risk",
      desc: "Monitor vendor terms, credit periods & price hike exposure.",
      icon: <Truck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      tag: "VENDOR",
      tagColor: "bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-500/30",
      borderColor: "border-cyan-200 dark:border-cyan-500/30 hover:border-cyan-500 shadow-sm dark:shadow-cyan-950/30",
      accentIconBg: "bg-cyan-50 dark:bg-cyan-950/80 border-cyan-200 dark:border-cyan-500/30",
      ctaColor: "text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300",
    },
    {
      name: "Receivables Recovery",
      desc: "Recover outstanding receivables faster with automated reminders.",
      icon: <Users className="w-5 h-5 text-pink-600 dark:text-pink-400" />,
      tag: "RECOVERY",
      tagColor: "bg-pink-100 dark:bg-pink-950/80 text-pink-700 dark:text-pink-300 border-pink-300 dark:border-pink-500/30",
      borderColor: "border-pink-200 dark:border-pink-500/30 hover:border-pink-500 shadow-sm dark:shadow-pink-950/30",
      accentIconBg: "bg-pink-50 dark:bg-pink-950/80 border-pink-200 dark:border-pink-500/30",
      ctaColor: "text-pink-600 dark:text-pink-400 group-hover:text-pink-700 dark:group-hover:text-pink-300",
    },
    {
      name: "Dead Stock",
      desc: "Identify slow & non-moving stock to free up capital.",
      icon: <PackageX className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      tag: "WATCH",
      tagColor: "bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-500/30",
      borderColor: "border-indigo-200 dark:border-indigo-500/30 hover:border-indigo-500 shadow-sm dark:shadow-indigo-950/30",
      accentIconBg: "bg-indigo-50 dark:bg-indigo-950/80 border-indigo-200 dark:border-indigo-500/30",
      ctaColor: "text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300",
    },
  ];

  const marqueeItems = [...modules, ...modules];

  return (
    <section id="features" className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      {/* Atmospheric glow behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            8 CORE INTELLIGENCE MODULES
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            Designed for complete <br />
            business visibility. <br />
            <span className="gradient-text-purple-blue">Zero manual entry.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Every module continuously analyzes your live Tally ledgers to surface opportunities, reduce risk, and save capital.
          </p>
        </div>
      </Container>

      {/* Infinite Horizontal Marquee Container */}
      <div
        className="w-full overflow-hidden py-6 mt-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="flex gap-5 w-max px-4"
        >
          {marqueeItems.map((mod, idx) => (
            <div
              key={idx}
              className={`group w-72 sm:w-80 p-6 rounded-2xl border bg-white dark:bg-slate-900/90 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${mod.borderColor} hover:-translate-y-1.5 shadow-md dark:shadow-xl`}
            >
              <div className="space-y-4">
                {/* Top Row: Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl border ${mod.accentIconBg}`}>
                    {mod.icon}
                  </div>
                  <span
                    className={`text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${mod.tagColor}`}
                  >
                    {mod.tag}
                  </span>
                </div>

                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors">
                  {mod.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {mod.desc}
                </p>
              </div>

              {/* Bottom CTA Link */}
              <div className="pt-5 mt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-bold">
                <span className={mod.ctaColor}>Explore module</span>
                <ArrowRight className={`w-3.5 h-3.5 ${mod.ctaColor} group-hover:translate-x-1 transition-transform`} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Trust Line */}
      <div className="mt-8 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-2.5 rounded-full bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-purple-500/20 text-xs font-semibold text-slate-700 dark:text-slate-300 backdrop-blur-md shadow-sm">
          <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span>100% Tally Secure</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>Bank-level Security</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>Made for Indian Businesses</span>
        </div>
      </div>
    </section>
  );
}
