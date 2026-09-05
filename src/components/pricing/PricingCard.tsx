"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function PricingCard() {
  const [showDetails, setShowDetails] = useState(false);

  const features = [
    "All 8 Core Intelligence Modules included",
    "Daily Pulse 7:30 AM WhatsApp executive briefing",
    "Automated Problems Indicator & critical risk detection",
    "30-90 Day Cash Flow Runway & working capital forecasting",
    "Profitability & Net Margin analysis per SKU & customer",
    "Receivables Recovery with 1-click WhatsApp payment reminders",
    "Dead Stock & slow-moving inventory liquidation alerts",
    "Supplier Risk & vendor credit period tracking",
    "SARAS AI Natural Language Financial Copilot",
    "Native Tally ERP 9 & TallyPrime 2-way sync",
    "Bank-grade 256-bit SSL encryption & privacy protection",
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xl relative overflow-hidden space-y-8"
        >
          {/* Top Badge */}
          <div className="absolute top-0 right-8 transform -translate-y-1/2">
            <span className="px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-extrabold shadow-sm">
              MOST POPULAR FOR INDIAN SMBs
            </span>
          </div>

          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
              <Sparkles className="w-4 h-4" />
              <span>ANNUAL PLATFORM SUBSCRIPTION</span>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">SARASnova Complete Platform</h2>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Full AI CFO suite connected to your live Tally ledgers.
            </p>

            <div className="pt-2 flex items-baseline justify-center sm:justify-start gap-2">
              <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">₹X</span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">/ year (Custom Plan)</span>
            </div>
            <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">
              * Final pricing is customized based on your transaction volume &amp; Tally ledgers.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Button href="/contact" variant="primary" size="lg" className="flex-1 justify-center">
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Features List */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              What&apos;s Included in SARASnova:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {features.slice(0, 6).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <div className="p-1 rounded-full bg-indigo-100 dark:bg-indigo-600/30 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2"
                >
                  {features.slice(6).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                      <div className="p-1 rounded-full bg-indigo-100 dark:bg-indigo-600/30 text-indigo-600 dark:text-indigo-400 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                <span>{showDetails ? "Show Less" : "View All Features & Capabilities"}</span>
                {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              <a href="/features" className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                Explore Detailed Features →
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
