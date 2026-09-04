import React from "react";
import { MetricData } from "@/data/metrics";

export function MetricCard({ metric }: { metric: MetricData }) {
  return (
    <div className="p-6 rounded-2xl border border-purple-500/15 dark:border-purple-500/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg space-y-2 hover:-translate-y-1 transition-all">
      <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white gradient-text-purple-blue">
        {metric.value}
      </div>
      <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
        {metric.label}
      </div>
      <div className="text-xs text-slate-500 dark:text-slate-400">
        {metric.sublabel}
      </div>
      <div className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider pt-2 border-t border-purple-500/10">
        {metric.trend}
      </div>
    </div>
  );
}
