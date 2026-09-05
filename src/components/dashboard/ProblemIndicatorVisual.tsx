"use client";

import React from "react";
import { AlertTriangle, AlertCircle, TrendingDown, ArrowUpRight, ShieldAlert, FileText, CheckCircle2 } from "lucide-react";

export function ProblemIndicatorVisual() {
  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-2xl flex flex-col justify-between font-sans text-slate-900 dark:text-white transition-colors">
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              Data Audit &amp; Health Check
              <span className="px-2 py-0.5 rounded-md bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 text-[10px] font-black uppercase">
                Attention Required
              </span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">4 Critical Financial &amp; Operational Leaks Detected</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400">
          <FileText className="w-4 h-4" /> Live Ledger Audit
        </div>
      </div>

      {/* Main Signal Rows */}
      <div className="space-y-3.5 my-4">
        {/* Signal 1: Overdue Receivables */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between hover:border-rose-500/40 transition-colors">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 shrink-0 border border-amber-200 dark:border-amber-800">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Aging Receivables (&gt;60 Days)</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">5 clients past due date • Risk level: High</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm sm:text-base font-extrabold text-amber-600 dark:text-amber-400">₹48.07L</div>
            <div className="text-[10px] text-slate-400 font-semibold">Locked Working Capital</div>
          </div>
        </div>

        {/* Signal 2: Dead Stock Alert */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between hover:border-rose-500/40 transition-colors">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 shrink-0 border border-rose-200 dark:border-rose-800">
              <TrendingDown className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Dead Stock (&gt;90 Days Inactive)</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">14 SKU categories un-moved</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm sm:text-base font-extrabold text-rose-600 dark:text-rose-400">₹14.20L</div>
            <div className="text-[10px] text-slate-400 font-semibold">Capital Trapped</div>
          </div>
        </div>

        {/* Signal 3: Margin Leakage */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between hover:border-indigo-500/40 transition-colors">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 shrink-0 border border-indigo-200 dark:border-indigo-800">
              <ArrowUpRight className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Low-Margin SKU Overruns</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Discounting erosion across 3 distributors</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm sm:text-base font-extrabold text-indigo-600 dark:text-indigo-400">-4.8% Margin</div>
            <div className="text-[10px] text-slate-400 font-semibold">Net Profit Impact</div>
          </div>
        </div>
      </div>

      {/* Footer Audit Banner */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
        <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4 text-amber-500" /> Automated Risk Audit Completed
        </span>
        <span className="text-indigo-600 dark:text-indigo-400 font-extrabold flex items-center gap-1">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Ready for Strategy Phase
        </span>
      </div>
    </div>
  );
}
