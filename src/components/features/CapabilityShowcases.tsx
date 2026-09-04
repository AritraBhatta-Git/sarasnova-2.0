"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  TrendingDown,
  DollarSign,
  BarChart3,
  Users,
  PackageX,
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function CapabilityShowcases() {
  return (
    <div className="space-y-24 py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      {/* 1. DAILY BUSINESS INTELLIGENCE / DAILY PULSE */}
      <section id="daily-pulse" className="scroll-mt-24">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT: Copy */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="purple" icon={<Activity className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />}>
                01. DAILY BUSINESS INTELLIGENCE
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                Daily Pulse: Your morning executive summary, <br />
                <span className="gradient-text-purple-blue">delivered on WhatsApp.</span>
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Start every business day with crystal clarity. At 7:30 AM, Sarasnova scans your latest Tally transactions and delivers yesterday&apos;s sales, net bank balance, urgent overdue collections, and operational flags directly to your WhatsApp.
              </p>

              <div className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Yesterday&apos;s sales &amp; growth vs. previous week</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Net available cash + Overdraft headroom</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Overdue customer flags requiring immediate action</span>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" className="gap-2">
                  <span>See Daily Pulse Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* RIGHT: WhatsApp Daily Pulse Mockup Card */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-sm rounded-3xl border border-slate-200 dark:border-purple-500/30 bg-white dark:bg-slate-900/95 p-5 shadow-xl dark:shadow-2xl dark:shadow-purple-950/50 space-y-4 font-sans"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center font-extrabold text-white text-xs">
                      S
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">Sarasnova Daily Pulse</div>
                      <div className="text-[9px] text-slate-500 dark:text-slate-400">7:30 AM • WhatsApp Verified</div>
                    </div>
                  </div>
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>

                {/* Message Body */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-purple-700 dark:text-purple-300">
                    Good morning, Rajesh 👋 Here&apos;s your business pulse for Monday, 4 May:
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase">Yesterday&apos;s Sales</div>
                    <div className="text-sm font-extrabold text-slate-900 dark:text-white">₹8,42,300 <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">up 14% vs last Mon</span></div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">Cash + OD headroom: ₹6.1L</div>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-500/30 space-y-1">
                    <div className="text-[10px] text-rose-700 dark:text-rose-300 font-bold uppercase flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 text-rose-600 dark:text-rose-400" /> 3 Customers Crossed 30 Days Overdue
                    </div>
                    <div className="text-[10px] text-rose-800 dark:text-rose-200">
                      Sharma Textiles • Anand Traders • MG Retail — ₹4.7L total to collect.
                    </div>
                  </div>

                  <div className="flex gap-2 pt-1">
                    <button className="flex-1 py-1.5 rounded-lg bg-purple-600 text-white text-[10px] font-bold">
                      Send Reminders
                    </button>
                    <button className="flex-1 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300 text-[10px] font-bold">
                      View Full Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. PROBLEMS & RISK DETECTION */}
      <section id="problems-indicator" className="scroll-mt-24 pt-8">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT: Realistic UI Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-md rounded-3xl border border-slate-200 dark:border-purple-500/30 bg-white dark:bg-slate-900/95 p-5 shadow-xl dark:shadow-2xl dark:shadow-purple-950/50 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Active Risk Monitor</span>
                  </div>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/30">
                    2 Critical Flags
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Card 1: Critical */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-rose-200 dark:border-rose-500/30 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-slate-900 dark:text-white">Receivables Concentration Risk</span>
                      <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300">
                        CRITICAL
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300">Single customer (Sharma Textiles) accounts for 42% of total overdue balance.</p>
                  </div>

                  {/* Card 2: Warning */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-amber-200 dark:border-amber-500/30 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-slate-900 dark:text-white">Margin Compression Warning</span>
                      <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300">
                        WARNING
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300">Raw material price hike increased product COST-B by 8.4% this month.</p>
                  </div>

                  {/* Card 3: Healthy */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-emerald-200 dark:border-emerald-500/30 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-slate-900 dark:text-white">Bank OD Headroom</span>
                      <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                        HEALTHY
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300">Available overdraft limit is ₹38.00L with zero penalty risk.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <Badge variant="purple" icon={<AlertTriangle className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />}>
                02. PROBLEMS &amp; RISK DETECTION
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                Problems Indicator: Spot cash leaks <br />
                <span className="gradient-text-purple-blue">before they hit your bottom line.</span>
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Sarasnova continuously monitors your books for operational anomalies—uncovering hidden discount abuse, delayed vendor payments, shrinking margins, and customer default risks before they become emergencies.
              </p>

              <div className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>Real-time detection across cash flow, inventory &amp; payables</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>Clear risk severity tags (Critical, Warning, Healthy)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>Instant actionable steps to fix each identified leak</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. CASH FLOW & FINANCIAL HEALTH */}
      <section id="cash-flow-risk" className="scroll-mt-24 pt-8">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT: Copy */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="blue" icon={<TrendingDown className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}>
                03. CASH FLOW &amp; FINANCIAL HEALTH
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                Cash Flow Risk: Predict 30–90 day runway <br />
                <span className="gradient-text-purple-blue">with absolute confidence.</span>
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Never get surprised by sudden cash crunches. Sarasnova projects your future cash inflows and commitments by factoring in recurring vendor payments, upcoming GST payouts, and expected customer collection dates.
              </p>

              <div className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>68-day available liquidity runway projection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Working capital pressure &amp; OD limit tracking</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Predictive inflow vs outflow timeline</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Cash Flow Forecast UI Card */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-md rounded-3xl border border-slate-200 dark:border-blue-500/30 bg-white dark:bg-slate-900/95 p-5 shadow-xl dark:shadow-2xl dark:shadow-blue-950/50 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Cash Flow Runway Forecast</span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
                    68 Days Runway
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">Expected Inflow (30d)</div>
                    <div className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">₹42.80L</div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-400">Based on 14 invoices</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">Committed Outflow (30d)</div>
                    <div className="text-sm font-extrabold text-rose-600 dark:text-rose-400 mt-1">₹28.40L</div>
                    <div className="text-[9px] text-slate-500 dark:text-slate-400">Vendor + Payroll + GST</div>
                  </div>
                </div>

                {/* Animated Chart */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-[11px] font-bold text-slate-900 dark:text-white">30-Day Liquidity Curve</div>
                  <div className="h-24 w-full pt-1">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                      <path d="M 0,60 Q 70,30 150,40 T 300,15 L 300,80 L 0,80 Z" fill="rgba(59, 130, 246, 0.15)" />
                      <path d="M 0,60 Q 70,30 150,40 T 300,15" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. PROFITABILITY & SALES INTELLIGENCE */}
      <section id="profitability-risk" className="scroll-mt-24 pt-8">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT: UI Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-md rounded-3xl border border-slate-200 dark:border-emerald-500/30 bg-white dark:bg-slate-900/95 p-5 shadow-xl dark:shadow-2xl dark:shadow-purple-950/50 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Profitability &amp; Margin Breakdown</span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30">
                    Net Margin 18.2%
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-slate-900 dark:text-white">
                      <span>Category A (High Margin)</span>
                      <span className="text-emerald-600 dark:text-emerald-400">28.4% Margin</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[78%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-slate-900 dark:text-white">
                      <span>Category B (Standard)</span>
                      <span className="text-amber-600 dark:text-amber-400">14.1% Margin</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 w-[45%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                    <div className="flex justify-between text-xs font-bold text-slate-900 dark:text-white">
                      <span>Category C (Discounted)</span>
                      <span className="text-rose-600 dark:text-rose-400">4.2% Margin</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 w-[15%]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <Badge variant="purple" icon={<BarChart3 className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />}>
                04. PROFITABILITY &amp; SALES INTELLIGENCE
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                Profitability &amp; Sales: Know exactly <br />
                <span className="gradient-text-purple-blue">where your real profit comes from.</span>
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Higher sales don&apos;t always mean higher profit. Sarasnova breaks down net margins by SKU, customer group, and sales channel—helping you eliminate unprofitable sales and double down on high-margin products.
              </p>

              <div className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Real net profit tracking post discounts &amp; transport costs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Sales growth momentum analytics per product line</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Unprofitable customer &amp; discount abuse alerts</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. RECEIVABLES & COLLECTIONS */}
      <section id="receivables-recovery" className="scroll-mt-24 pt-8">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT: Copy */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="purple" icon={<Users className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />}>
                05. RECEIVABLES &amp; COLLECTIONS
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                Receivables Recovery: Recover overdue bills <br />
                <span className="gradient-text-purple-blue">3x faster on WhatsApp.</span>
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Trapped receivables are the #1 cash flow killer for Indian businesses. Sarasnova automatically categorizes overdue customer accounts by age (30, 60, 90+ days) and allows you to dispatch payment reminders in 1 click.
              </p>

              <div className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span>Automated customer ageing analysis (30-60-90+ days)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span>1-click WhatsApp payment reminders with invoice PDF link</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span>Priority collection ledger for high-value accounts</span>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" className="gap-2">
                  <span>Start Recovering Overdue</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* RIGHT: Receivables UI Table Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-md rounded-3xl border border-slate-200 dark:border-pink-500/30 bg-white dark:bg-slate-900/95 p-5 shadow-xl dark:shadow-2xl dark:shadow-purple-950/50 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Priority Collections Ledger</span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/30">
                    ₹48.07L Overdue
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-extrabold text-slate-900 dark:text-white">Sharma Textiles</div>
                      <div className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold">94 Days Overdue</div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-rose-700 dark:text-rose-300">₹8,90,000</div>
                      <button className="text-[9px] font-bold text-purple-600 dark:text-purple-400 hover:underline mt-0.5">
                        Remind →
                      </button>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-extrabold text-slate-900 dark:text-white">Anand Traders</div>
                      <div className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">71 Days Overdue</div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-amber-700 dark:text-amber-300">₹4,20,000</div>
                      <button className="text-[9px] font-bold text-purple-600 dark:text-purple-400 hover:underline mt-0.5">
                        Remind →
                      </button>
                    </div>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-extrabold text-slate-900 dark:text-white">MG Retail Ltd</div>
                      <div className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">66 Days Overdue</div>
                    </div>
                    <div className="text-right">
                      <div className="font-extrabold text-amber-700 dark:text-amber-300">₹3,60,000</div>
                      <button className="text-[9px] font-bold text-purple-600 dark:text-purple-400 hover:underline mt-0.5">
                        Remind →
                      </button>
                    </div>
                  </div>
                </div>

                <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Send WhatsApp Reminders to All (3)</span>
                </button>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. INVENTORY & SUPPLIER INTELLIGENCE */}
      <section id="supplier-risk" className="scroll-mt-24 pt-8">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT: UI Mockup */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-md rounded-3xl border border-slate-200 dark:border-indigo-500/30 bg-white dark:bg-slate-900/95 p-5 shadow-xl dark:shadow-2xl dark:shadow-purple-950/50 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <PackageX className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Dead Stock &amp; Inventory Liquidation</span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/30">
                    ₹18.40L Trapped Capital
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-extrabold text-slate-900 dark:text-white">Item Code #A-890</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Zero movement for 124 days</div>
                    </div>
                    <span className="font-extrabold text-indigo-600 dark:text-indigo-400">₹8.20L Stock</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-extrabold text-slate-900 dark:text-white">Item Code #B-412</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Zero movement for 98 days</div>
                    </div>
                    <span className="font-extrabold text-indigo-600 dark:text-indigo-400">₹6.10L Stock</span>
                  </div>
                </div>

                <div id="dead-stock" className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30 text-[10px] text-indigo-800 dark:text-indigo-200 leading-snug font-medium">
                  💡 Liquidation Recommendation: Run a 15% clearout discount to release ₹14.30L liquidity within 14 days.
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Copy */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <Badge variant="purple" icon={<PackageX className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />}>
                06. INVENTORY &amp; SUPPLIER INTELLIGENCE
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                Dead Stock &amp; Vendor Risk: Free up <br />
                <span className="gradient-text-purple-blue">trapped capital sitting on shelves.</span>
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Inventory sitting idle over 90 days silently locks up working capital. Sarasnova identifies slow-moving stock, evaluates supplier credit terms, and warns you before vendor payment due dates expire.
              </p>

              <div className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Automatic identification of non-moving stock &gt; 90 days</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Supplier payment terms, credit limits &amp; discount tracking</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Liquidation suggestions to convert slow inventory to cash</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
