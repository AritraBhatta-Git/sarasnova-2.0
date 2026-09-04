"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SaresContextNodeProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  color?: "purple" | "blue" | "green" | "amber" | "rose";
  positionClass?: string;
  onClick?: () => void;
}

export function SaresContextNode({
  title,
  value,
  subtitle,
  icon,
  color = "purple",
  positionClass,
  onClick,
}: SaresContextNodeProps) {
  const colorMap = {
    purple: "border-purple-500/30 text-purple-400 bg-purple-950/40 shadow-purple-500/10",
    blue: "border-blue-500/30 text-blue-400 bg-blue-950/40 shadow-blue-500/10",
    green: "border-emerald-500/30 text-emerald-400 bg-emerald-950/40 shadow-emerald-500/10",
    amber: "border-amber-500/30 text-amber-400 bg-amber-950/40 shadow-amber-500/10",
    rose: "border-rose-500/30 text-rose-400 bg-rose-950/40 shadow-rose-500/10",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "p-3 rounded-2xl border backdrop-blur-xl shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 hover:z-30",
        colorMap[color],
        positionClass
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/60 shrink-0">
          {icon}
        </div>
        <div>
          <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{title}</div>
          <div className="text-xs font-bold text-slate-100">{value}</div>
          <div className="text-[9px] text-slate-400 mt-0.5">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
