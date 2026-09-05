"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ArrowDown, Database, Cpu, Activity, Send, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function FeaturesHero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Copy */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
              SARASnova INTELLIGENCE
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              Eight intelligence modules. <br />
              <span className="gradient-text-purple-blue">One clearer view</span> <br />
              of your business.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl">
              SARASnova connects directly with your Tally accounting ledgers to translate raw financial transactions into continuous visibility, early warnings, predictive insights, and automated action.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="primary" size="lg" className="group">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <a
                href="#daily-pulse"
                className="px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <span>Explore Intelligence</span>
                <ArrowDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </a>
            </div>

            {/* Key Value Badges */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
              <span className="flex items-center gap-1.5 text-indigo-700 dark:text-indigo-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> Zero Manual Entry
              </span>
              <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> 100% Tally Synchronized
              </span>
              <span className="flex items-center gap-1.5 text-blue-700 dark:text-blue-300">
                <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Proactive Warnings
              </span>
            </div>
          </div>

          {/* RIGHT: Animated Data Architecture Network Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 backdrop-blur-2xl shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                  <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>SARASnova Data Flow Engine</span>
                </div>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
                  Active Sync
                </span>
              </div>

              {/* Data Flow Diagram Nodes */}
              <div className="space-y-4 text-xs font-semibold">
                {/* Node 1: Raw Tally Ledgers */}
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-600/30 text-indigo-600 dark:text-indigo-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-900 dark:text-white font-bold">Raw Tally Ledgers</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Vouchers, Stock &amp; Invoices</div>
                    </div>
                  </div>
                  <span className="text-[9px] text-indigo-600 dark:text-indigo-400 font-bold">RAW DATA</span>
                </motion.div>

                {/* Connection Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full"
                  />
                </div>

                {/* Node 2: SARAS AI Intelligence Core */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-indigo-500/40 space-y-2 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center font-extrabold text-white text-[10px]">
                        S
                      </div>
                      <span className="text-white font-bold">SARAS Core Engine</span>
                    </div>
                    <Activity className="w-4 h-4 text-indigo-400 animate-pulse" />
                  </div>
                  <div className="text-[10px] text-slate-300 leading-relaxed">
                    Analyzing cash flow, margin drops, customer overdue risks &amp; inventory velocity in real-time.
                  </div>
                </div>

                {/* Connection Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-emerald-500 rounded-full"
                  />
                </div>

                {/* Node 3: Executive Output & Action */}
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-600/30 text-emerald-600 dark:text-emerald-400">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-900 dark:text-white font-bold">Automated Output &amp; Action</div>
                      <div className="text-[10px] text-emerald-600 dark:text-emerald-400">WhatsApp Daily Pulse &amp; Reminders</div>
                    </div>
                  </div>
                  <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold">ACTION READY</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
