"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SarasContextNodeProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  color?: "purple" | "blue" | "green" | "amber" | "rose";
  positionClass?: string;
  onClick?: () => void;
}

export function SarasContextNode({
  title,
  value,
  subtitle,
  icon,
  color = "purple",
  positionClass,
  onClick,
}: SarasContextNodeProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 shadow-md backdrop-blur-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:z-30",
        positionClass
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shrink-0">
          {icon}
        </div>
        <div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">{title}</div>
          <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{value}</div>
          <div className="text-[9px] text-slate-500 dark:text-slate-400 mt-0.5">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
