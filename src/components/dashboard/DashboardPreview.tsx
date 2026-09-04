"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Bot,
  Activity,
  AlertCircle,
  TrendingUp,
  DollarSign,
  BarChart3,
  Settings,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function DashboardPreview() {
  const sidebarItems = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "AI Copilot", icon: Bot },
    { label: "Daily Pulse", icon: Activity },
    { label: "Problems", icon: AlertCircle },
    { label: "Cash Flow", icon: TrendingUp },
    { label: "Profitability", icon: DollarSign },
    { label: "Sales Performance", icon: BarChart3 },
    { label: "Settings", icon: Settings },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: 6, rotateY: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 4, rotateY: -6 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full rounded-3xl border border-purple-500/25 bg-slate-950/95 text-slate-100 shadow-2xl shadow-purple-950/80 backdrop-blur-2xl overflow-hidden font-sans transform perspective-1000"
    >
      {/* Top Header Bar inside laptop UI */}
      <div className="px-5 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="text-xs font-bold text-slate-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            Sarasnova 2.0 Console
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Tally Sync Active</span>
          </div>
          <div className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
            Business Overview
          </div>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="grid grid-cols-12 min-h-[460px]">
        {/* Simplified Sidebar (8 Items Only) */}
        <div className="col-span-3 bg-slate-900/60 border-r border-slate-800/80 p-3 space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1 mb-1">
            Menu
          </div>
          {sidebarItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                  item.active
                    ? "bg-purple-600/90 text-white shadow-md shadow-purple-600/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Dashboard Main Workspace */}
        <div className="col-span-9 p-4 space-y-4 bg-slate-950/60">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-white">Dashboard</h3>
              <p className="text-[11px] text-slate-400">Real-time business performance overview</p>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
              ● Live Sync
            </span>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-4 gap-2.5">
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-semibold">Sales (This Month)</div>
              <div className="text-sm font-extrabold text-white mt-1">₹18.85L</div>
              <div className="text-[9px] text-emerald-400 font-bold mt-0.5 flex items-center gap-0.5">
                <ArrowUpRight className="w-2.5 h-2.5" /> +408.2%
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-semibold">Net Bank Balance</div>
              <div className="text-sm font-extrabold text-emerald-400 mt-1">₹1.35Cr</div>
              <div className="text-[9px] text-slate-400 mt-0.5">Live 3 Accounts</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-semibold">Receivables</div>
              <div className="text-sm font-extrabold text-amber-400 mt-1">₹48.07L</div>
              <div className="text-[9px] text-amber-400 font-bold mt-0.5">5 customers</div>
            </div>

            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-[10px] text-slate-400 font-semibold">OD / Overdraft</div>
              <div className="text-sm font-extrabold text-rose-400 mt-1">-₹62.00L</div>
              <div className="text-[9px] text-slate-400 mt-0.5">Limit ₹1.00Cr</div>
            </div>
          </div>

          {/* Lower Grid: Chart & Business Health Score */}
          <div className="grid grid-cols-12 gap-3">
            {/* Monthly Sales Trend Chart */}
            <div className="col-span-7 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold text-white">Monthly Sales Trend</div>
                <div className="flex gap-1 text-[9px] font-bold text-slate-400">
                  <span className="px-1.5 py-0.5 rounded bg-slate-800">6M</span>
                  <span className="px-1.5 py-0.5 rounded bg-purple-600 text-white">1Y</span>
                </div>
              </div>

              {/* Animated SVG Chart Line */}
              <div className="h-32 w-full relative pt-2">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,80 Q 50,40 100,60 T 200,30 T 300,10 L 300,100 L 0,100 Z"
                    fill="url(#chartGrad)"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M 0,80 Q 50,40 100,60 T 200,30 T 300,10"
                    fill="none"
                    stroke="#A855F7"
                    strokeWidth="3"
                  />
                </svg>
              </div>

              <div className="flex justify-between text-[9px] text-slate-500 font-semibold pt-1 border-t border-slate-800/80">
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
              </div>
            </div>

            {/* Business Health Score */}
            <div className="col-span-5 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
              <div className="text-xs font-bold text-white flex items-center justify-between">
                <span>Business Health Score</span>
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-full border-4 border-purple-500/80 border-t-purple-400 flex items-center justify-center font-extrabold text-base text-white shadow-lg">
                  68
                  <span className="text-[9px] text-slate-400 font-normal">/100</span>
                </div>
                <div>
                  <div className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30">
                    Needs Attention
                  </div>
                  <div className="text-[9px] text-slate-400 mt-1">2 high risk alerts</div>
                </div>
              </div>

              {/* Mini Health Breakdown Bars */}
              <div className="space-y-1.5 text-[10px]">
                <div>
                  <div className="flex justify-between text-slate-400 mb-0.5">
                    <span>Cash Flow</span>
                    <span className="text-emerald-400 font-bold">93%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[93%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-0.5">
                    <span>Profitability</span>
                    <span className="text-amber-400 font-bold">62%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 w-[62%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-slate-400 mb-0.5">
                    <span>Receivables Risk</span>
                    <span className="text-rose-400 font-bold">50%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-rose-500 w-[50%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
