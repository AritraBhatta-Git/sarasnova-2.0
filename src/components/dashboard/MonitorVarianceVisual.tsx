"use client";

import React from "react";
import { Activity, ArrowUpRight, ArrowDownRight, RefreshCw, CheckCircle2, SlidersHorizontal } from "lucide-react";

export function MonitorVarianceVisual() {
  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-2xl flex flex-col justify-between font-sans text-slate-900 dark:text-white transition-colors">
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              Live Variance &amp; Performance Guard
              <span className="px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px] font-black uppercase">
                Real-Time Guard
              </span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Target vs Actual Calibration • Automated Course Correction</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
          <RefreshCw className="w-4 h-4 animate-spin" />
          <span>Real-time Tally Sync</span>
        </div>
      </div>

      {/* Target vs Actual Grid */}
      <div className="space-y-4 my-4">
        {/* Metric 1: Monthly Sales Variance */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800/80 space-y-2 hover:border-indigo-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
            <span className="text-slate-900 dark:text-white">Monthly Revenue Target</span>
            <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-0.5">
              <ArrowUpRight className="w-4 h-4" /> +12.4% Ahead of Target
            </span>
          </div>
          <div className="flex items-baseline justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Actual: ₹18.85L / Target: ₹16.75L</span>
            <span className="font-black text-indigo-600 dark:text-indigo-400">112% Achieved</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full w-[100%]" />
          </div>
        </div>

        {/* Metric 2: Collection DSO Variance */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800/80 space-y-2 hover:border-amber-500/40 transition-colors">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold">
            <span className="text-slate-900 dark:text-white">Days Sales Outstanding (DSO)</span>
            <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400 flex items-center gap-0.5">
              <ArrowDownRight className="w-4 h-4" /> +4 Days Variance Slip
            </span>
          </div>
          <div className="flex items-baseline justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Actual: 42 Days / Target: 38 Days</span>
            <span className="font-black text-amber-600 dark:text-amber-400">Course Correcting</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full rounded-full w-[78%]" />
          </div>
        </div>
      </div>

      {/* Auto Calibration Banner */}
      <div className="p-3.5 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span className="font-extrabold text-slate-900 dark:text-white">Dynamic Target Recalibration Active</span>
        </div>
        <span className="font-black text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Auto-Synced
        </span>
      </div>
    </div>
  );
}
