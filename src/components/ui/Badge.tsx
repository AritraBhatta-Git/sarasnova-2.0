import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "purple"
    | "blue"
    | "green"
    | "amber"
    | "rose"
    | "neutral"
    | "warning"
    | "success"
    | "danger";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({ children, variant = "purple", className, icon }: BadgeProps) {
  const variantStyles: Record<string, string> = {
    purple:
      "bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60",
    blue: "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60",
    green:
      "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60",
    success:
      "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60",
    amber:
      "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60",
    warning:
      "bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/60",
    rose: "bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60",
    danger:
      "bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60",
    neutral:
      "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border tracking-wide uppercase",
        variantStyles[variant] || variantStyles.purple,
        className
      )}
    >
      {icon && <span className="w-3 h-3 flex items-center justify-center">{icon}</span>}
      {children}
    </span>
  );
}
