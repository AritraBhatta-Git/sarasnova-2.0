import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/40 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 shadow-lg",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-600 text-white shadow-purple-500/25 dark:shadow-purple-900/40 border border-purple-400/30 hover:shadow-xl hover:shadow-purple-500/30",
    secondary:
      "bg-purple-100/80 dark:bg-slate-800/80 hover:bg-purple-200/80 dark:hover:bg-slate-700/90 text-purple-950 dark:text-purple-100 border border-purple-200 dark:border-slate-700",
    outline:
      "border border-purple-300/60 dark:border-purple-500/30 bg-transparent hover:bg-purple-500/10 text-purple-900 dark:text-purple-200",
    ghost:
      "bg-transparent hover:bg-purple-500/10 text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400",
    whatsapp:
      "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20 border border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-600/30",
  };

  const combinedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
