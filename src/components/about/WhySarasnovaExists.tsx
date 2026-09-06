"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Sparkles, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function WhySarasnovaExists() {
  return (
    <section id="why-sarasnova" className="py-16 md:py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white scroll-mt-24 transition-colors">
      <Container size="xl" className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            THE PURPOSE &amp; ORIGIN
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Why SARASnova Exists
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Most business owners in India don&apos;t suffer from a lack of financial data—they suffer from the gap between raw Tally ledgers and actionable business clarity.
          </p>
        </div>

        {/* 3-Stage Transformation Narrative Flow: OLD REALITY → THE GAP → SARASnova REALITY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* STAGE 1: THE OLD REALITY */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4 rounded-3xl border border-rose-200 dark:border-rose-500/30 bg-rose-50/40 dark:bg-slate-900/90 p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-md"
          >
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-rose-100 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 w-fit">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  BEFORE SARASnova
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  The Old Reality
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Founders waiting until month-end for accounting statements, discovering overdue payments after 90 days, and finding margin erosion long after products were sold.
              </p>
            </div>
            <div className="pt-4 border-t border-rose-200 dark:border-rose-900/50 text-[11px] font-bold text-rose-600 dark:text-rose-400">
              • Delayed Reporting &amp; Fragmented Ledgers
            </div>
          </motion.div>

          {/* STAGE 2: THE GAP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-4 rounded-3xl border border-purple-200 dark:border-purple-500/40 bg-purple-500/10 dark:bg-purple-950/60 p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-lg relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-purple-200 dark:bg-purple-900 text-purple-700 dark:text-purple-300 w-fit">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  THE MISSING LINK
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  The Operational Gap
                </h3>
              </div>
              <blockquote className="text-xs sm:text-sm font-bold italic text-slate-800 dark:text-purple-200 leading-relaxed pt-1 border-l-2 border-purple-500 pl-3">
                &ldquo;The numbers already exist in Tally. What is missing is the intelligent decision-making layer to interpret them in real-time.&rdquo;
              </blockquote>
            </div>
            <div className="pt-4 border-t border-purple-200 dark:border-purple-800/80 text-[11px] font-bold text-purple-700 dark:text-purple-300">
              • From Static Ledgers to Active Intelligence
            </div>
          </motion.div>

          {/* STAGE 3: THE SARASnova REALITY */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:col-span-4 rounded-3xl border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50/40 dark:bg-slate-900/90 p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-md"
          >
            <div className="space-y-4">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 w-fit">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  WITH SARASnova
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  The SARASnova Reality
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                Every morning at 7:30 AM, your business status is waiting on WhatsApp. Overdue collections are triggered in 1 click, and margin drops are flagged before they accumulate.
              </p>
            </div>
            <div className="pt-4 border-t border-emerald-200 dark:border-emerald-900/50 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              • Proactive Visibility &amp; 1-Click Action
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
