"use client";

import React from "react";
import { Plug, BarChart2, Sparkles, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkflowStepProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: "Plug" | "BarChart2" | "Sparkles" | "Send";
  color: "purple" | "blue" | "green" | "violet";
  isLast?: boolean;
}

const iconMap = {
  Plug: <Plug className="w-6 h-6" />,
  BarChart2: <BarChart2 className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Send: <Send className="w-6 h-6" />,
};

export function WorkflowStep({
  number,
  title,
  subtitle,
  description,
  iconName,
  color,
  isLast,
}: WorkflowStepProps) {
  const icon = iconMap[iconName];

  const colorStyles = {
    purple: {
      border: "border-purple-500/30 dark:border-purple-500/40 hover:border-purple-500",
      glow: "shadow-purple-500/20",
      badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30",
      line: "from-purple-500 to-blue-500",
      iconBg: "bg-purple-600 text-white",
    },
    blue: {
      border: "border-blue-500/30 dark:border-blue-500/40 hover:border-blue-500",
      glow: "shadow-blue-500/20",
      badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
      line: "from-blue-500 to-emerald-500",
      iconBg: "bg-blue-600 text-white",
    },
    green: {
      border: "border-emerald-500/30 dark:border-emerald-500/40 hover:border-emerald-500",
      glow: "shadow-emerald-500/20",
      badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      line: "from-emerald-500 to-violet-500",
      iconBg: "bg-emerald-600 text-white",
    },
    violet: {
      border: "border-violet-500/30 dark:border-violet-500/40 hover:border-violet-500",
      glow: "shadow-violet-500/20",
      badge: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/30",
      line: "from-violet-500 to-purple-500",
      iconBg: "bg-violet-600 text-white",
    },
  };

  const currentTheme = colorStyles[color];

  return (
    <div className="relative flex-1 group">
      {/* Connector line for desktop */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-gradient-to-r from-purple-500/40 via-blue-500/40 to-emerald-500/40 z-0" />
      )}

      {/* Step Card Container */}
      <div
        className={cn(
          "relative z-10 p-6 rounded-2xl border transition-all duration-300 backdrop-blur-md flex flex-col justify-between h-full",
          "bg-white/80 dark:bg-slate-900/80 hover:-translate-y-2 hover:shadow-xl",
          currentTheme.border,
          currentTheme.glow
        )}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className={cn("p-3 rounded-2xl shadow-lg", currentTheme.iconBg)}>
              {icon}
            </div>
            <span className={cn("px-2.5 py-1 rounded-full text-xs font-extrabold border", currentTheme.badge)}>
              0{number}
            </span>
          </div>

          {/* Titles */}
          <h3 className="font-extrabold text-xl text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <div className="text-xs font-semibold text-purple-600 dark:text-purple-300 mt-0.5">
            {subtitle}
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-purple-500/10 dark:border-purple-500/20 text-[10px] uppercase tracking-wider font-bold text-slate-400">
          Stage {number} Process
        </div>
      </div>
    </div>
  );
}
