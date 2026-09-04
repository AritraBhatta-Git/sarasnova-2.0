import React from "react";
import { RefreshCw, ShieldCheck, Users, Flag } from "lucide-react";

export function TrustIndicators() {
  const trustItems = [
    {
      icon: <RefreshCw className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      title: "Live Data Sync",
      subtitle: "Always up-to-date",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      title: "Bank-level Security",
      subtitle: "Your data is 100% safe",
    },
    {
      icon: <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "500+ Businesses",
      subtitle: "Trust Sarasnova",
    },
    {
      icon: <Flag className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      title: "Made for India",
      subtitle: "From the ground up",
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-purple-500/10 dark:border-purple-500/20">
      {trustItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-purple-500/10 dark:border-purple-500/20 backdrop-blur-sm shadow-sm"
        >
          <div className="p-2 rounded-lg bg-purple-500/10 dark:bg-purple-950/50 flex items-center justify-center shrink-0">
            {item.icon}
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{item.title}</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">{item.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
