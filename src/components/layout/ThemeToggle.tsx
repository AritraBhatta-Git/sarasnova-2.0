"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative p-2 rounded-full border border-purple-500/20 dark:border-purple-400/20 bg-purple-50/50 dark:bg-slate-800/60 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-slate-700/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/40"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-4 h-4 text-purple-600 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>
    </button>
  );
}
