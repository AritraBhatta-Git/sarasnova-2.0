import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
  glow?: boolean;
}

export function Card({ children, className, interactive = false, glow = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300",
        "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md",
        "border-purple-500/15 dark:border-purple-500/20",
        "shadow-lg shadow-purple-500/5 dark:shadow-black/50",
        interactive && "hover:-translate-y-1 hover:border-purple-500/35 hover:shadow-xl hover:shadow-purple-500/15",
        glow && "relative overflow-hidden before:absolute before:-inset-px before:bg-gradient-to-r before:from-purple-500/20 before:to-blue-500/20 before:rounded-2xl before:-z-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
