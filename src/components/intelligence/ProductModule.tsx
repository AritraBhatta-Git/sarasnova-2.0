"use client";

import React from "react";
import {
  Zap,
  AlertTriangle,
  TrendingDown,
  ShieldAlert,
  BarChart3,
  Truck,
  Receipt,
  Boxes,
  ArrowUpRight,
} from "lucide-react";
import { ProductModuleData } from "@/data/modules";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-5 h-5" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5" />,
  TrendingDown: <TrendingDown className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
  Receipt: <Receipt className="w-5 h-5" />,
  Boxes: <Boxes className="w-5 h-5" />,
};

interface ProductModuleProps {
  module: ProductModuleData;
  isActive?: boolean;
  onSelect?: () => void;
  variant?: "card" | "row" | "compact";
}

export function ProductModule({ module, isActive, onSelect, variant = "card" }: ProductModuleProps) {
  const icon = iconMap[module.iconName] || <Zap className="w-5 h-5" />;

  const accentColorClasses = {
    purple: "text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20",
    blue: "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20",
    green: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    violet: "text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/20",
    amber: "text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/20",
    indigo: "text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  };

  if (variant === "row") {
    return (
      <div
        onClick={onSelect}
        className={cn(
          "p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4",
          "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md",
          isActive
            ? "border-purple-500/50 shadow-lg shadow-purple-500/10 bg-purple-50/50 dark:bg-slate-800/80"
            : "border-purple-500/10 dark:border-purple-500/20 hover:border-purple-500/30"
        )}
      >
        <div className="flex items-center gap-3.5">
          <div className={cn("p-2.5 rounded-xl border", accentColorClasses[module.accentColor])}>
            {icon}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{module.title}</h4>
              <Badge variant={module.badgeType}>{module.badgeText}</Badge>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{module.tagline}</p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <div className="font-extrabold text-sm text-slate-900 dark:text-white">{module.metric}</div>
          {module.change && <div className="text-[11px] text-slate-500 dark:text-slate-400">{module.change}</div>}
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div
        onClick={onSelect}
        className={cn(
          "p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-3",
          "bg-white/70 dark:bg-slate-900/70 border-purple-500/15 hover:border-purple-500/40 hover:scale-[1.02]",
          isActive && "border-purple-500 bg-purple-50 dark:bg-purple-950/40"
        )}
      >
        <div className={cn("p-2 rounded-lg border shrink-0", accentColorClasses[module.accentColor])}>
          {icon}
        </div>
        <div className="min-w-0">
          <div className="font-bold text-xs text-slate-900 dark:text-slate-100 truncate">{module.title}</div>
          <div className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 truncate">
            {module.metric}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onSelect}
      className={cn(
        "p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group",
        "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md",
        isActive
          ? "border-purple-500 shadow-xl shadow-purple-500/15 ring-2 ring-purple-500/20"
          : "border-purple-500/15 dark:border-purple-500/20 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-lg"
      )}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className={cn("p-2.5 rounded-xl border", accentColorClasses[module.accentColor])}>
            {icon}
          </div>
          <Badge variant={module.badgeType}>{module.badgeText}</Badge>
        </div>

        <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {module.title}
        </h3>
        <p className="text-xs font-semibold text-purple-600 dark:text-purple-300 mt-0.5">{module.tagline}</p>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
          {module.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-purple-500/10 dark:border-purple-500/20 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase font-bold text-slate-400">Live Indicator</span>
          <div className="font-extrabold text-sm text-slate-900 dark:text-slate-100">{module.metric}</div>
        </div>
        <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
}
