"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Database, MessageCircle, Mail, FileSpreadsheet, Lock } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CentralCoreVisual() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      <Container size="xl">
        <div className="relative p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-purple-500/25 bg-white dark:bg-slate-900/90 backdrop-blur-2xl shadow-xl dark:shadow-2xl min-h-[420px] flex items-center justify-center">
          {/* Animated SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-purple-500/30" strokeWidth="1.5" fill="none">
            <line x1="25%" y1="25%" x2="50%" y2="50%" strokeDasharray="4 4" />
            <line x1="25%" y1="75%" x2="50%" y2="50%" strokeDasharray="4 4" />
            <line x1="75%" y1="25%" x2="50%" y2="50%" strokeDasharray="4 4" />
            <line x1="75%" y1="75%" x2="50%" y2="50%" strokeDasharray="4 4" />
          </svg>

          {/* Central Sarasnova Core */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-44 h-44 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-500 p-0.5 shadow-2xl shadow-purple-600/50 border border-purple-400/40"
          >
            <div className="w-full h-full rounded-[22px] bg-slate-950 p-4 flex flex-col items-center justify-center text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-purple-500/40 p-1.5 flex items-center justify-center shadow-md">
                <Image
                  src="/images/sarasnova-logo.png"
                  alt="Sarasnova Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="font-extrabold text-sm text-white tracking-wider">SARASNOVA</div>
              <div className="text-[10px] text-purple-300 font-semibold flex items-center gap-1">
                <Lock className="w-3 h-3 text-purple-400" /> Intelligence Core
              </div>
            </div>
          </motion.div>

          {/* TallyPrime Node (Top-Left) */}
          <div className="absolute top-6 left-6 md:left-12 z-20 p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-purple-500/40 shadow-xl flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-600 text-white font-bold shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white">TallyPrime</div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Live 2-Way Sync</div>
            </div>
          </div>

          {/* Email / PDF Node (Bottom-Left) */}
          <div className="absolute bottom-6 left-6 md:left-12 z-20 p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-blue-500/40 shadow-xl flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600 text-white font-bold shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white">Email / PDF</div>
              <div className="text-[10px] text-blue-600 dark:text-blue-400 font-bold">Daily Briefings</div>
            </div>
          </div>

          {/* WhatsApp Node (Top-Right) */}
          <div className="absolute top-6 right-6 md:right-12 z-20 p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-emerald-500/40 shadow-xl flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-600 text-white font-bold shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white">WhatsApp</div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Instant Alerts &amp; Actions</div>
            </div>
          </div>

          {/* Excel / CSV Node (Bottom-Right) */}
          <div className="absolute bottom-6 right-6 md:right-12 z-20 p-3.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-emerald-500/40 shadow-xl flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500 text-white font-bold shrink-0">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white">Excel / CSV</div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Export Ready</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
