import React from "react";
import { RefreshCw, CheckCircle, Zap, ShieldAlert } from "lucide-react";

export function PerformanceStrip() {
  const items = [
    {
      icon: <RefreshCw className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      title: "Real-time Sync",
      value: "Every 15 mins",
    },
    {
      icon: <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      title: "Data Accuracy",
      value: "98.8%",
    },
    {
      icon: <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      title: "Processing Speed",
      value: "Super Fast",
    },
    {
      icon: <ShieldAlert className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "Uptime",
      value: "99.9%",
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-purple-500/15 dark:border-purple-500/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl p-4 shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-purple-500/10 dark:divide-purple-500/20">
        {items.map((item, idx) => (
          <div key={idx} className={`flex items-center gap-3 ${idx > 0 ? "pt-3 md:pt-0 md:pl-4" : ""}`}>
            <div className="p-2 rounded-xl bg-purple-500/10 dark:bg-purple-950/60 shrink-0">
              {item.icon}
            </div>
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.title}</div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
