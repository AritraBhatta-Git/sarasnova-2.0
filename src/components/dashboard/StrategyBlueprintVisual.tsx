"use client";

import React from "react";
import { Target, Calendar, CheckCircle2, TrendingUp, Layers, Compass } from "lucide-react";

export function StrategyBlueprintVisual() {
  const quarters = [
    { q: "Q1", title: "Receivables Liquidation", target: "₹35L Recovered", progress: 100, status: "Achieved", color: "text-emerald-600 dark:text-emerald-400", bar: "bg-emerald-500" },
    { q: "Q2", title: "Inventory Optimization", target: "Dead Stock < 5%", progress: 75, status: "In Progress", color: "text-indigo-600 dark:text-indigo-400", bar: "bg-indigo-600" },
    { q: "Q3", title: "SKU Margin Expansion", target: "+6.5% Net Margin", progress: 30, status: "Upcoming", color: "text-slate-500 dark:text-slate-400", bar: "bg-indigo-400" },
    { q: "Q4", title: "Working Capital Reserve", target: "90-Day Runway", progress: 10, status: "Planned", color: "text-slate-500 dark:text-slate-400", bar: "bg-slate-300 dark:bg-slate-700" },
  ];

  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-2xl flex flex-col justify-between font-sans text-slate-900 dark:text-white transition-colors">
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              12-Month Target Architecture
              <span className="px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[10px] font-black uppercase">
                Active Roadmap
              </span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Strategic Business Blueprint • FY 2026-27</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
          <Calendar className="w-4 h-4" />
          <span>4 Quarters Active</span>
        </div>
      </div>

      {/* Quarterly Roadmap Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        {quarters.map((quarter, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800/80 space-y-2 hover:border-indigo-500/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                {quarter.q} Target
              </span>
              <span className={`text-xs font-bold ${quarter.color} flex items-center gap-1`}>
                {quarter.status === "Achieved" && <CheckCircle2 className="w-3.5 h-3.5" />}
                {quarter.status}
              </span>
            </div>
            <div className="text-xs font-extrabold text-slate-900 dark:text-white pt-1">{quarter.title}</div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">{quarter.target}</div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className={`${quarter.bar} h-full rounded-full`} style={{ width: `${quarter.progress}%` }} />
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Summary Bar */}
      <div className="p-3.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            Working Capital &amp; Liquidity Blueprint
          </span>
          <span className="font-black text-indigo-600 dark:text-indigo-400">Overall Target: 82% On Track</span>
        </div>
      </div>
    </div>
  );
}
