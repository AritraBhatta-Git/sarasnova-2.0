"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Database, MessageCircle, Mail, FileSpreadsheet } from "lucide-react";

export function IntegrationOrbit() {
  const [isPaused, setIsPaused] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const rotatingTexts = [
    "Tally ledger data",
    "Customer communication",
    "Invoices & payments",
    "Business reports",
    "One unified view",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative w-full max-w-xl mx-auto h-[380px] sm:h-[440px] flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Background Orbit Rings */}
      <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border border-purple-500/20" />
      <div className="absolute w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border border-blue-500/20" />

      {/* Rotating Ring Container */}
      <motion.div
        animate={{ rotate: isPaused ? undefined : 360 }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full pointer-events-none"
      >
        {/* Node 1: TallyPrime (Top Left) */}
        <div className="absolute -top-4 left-10 transform -translate-x-1/2 p-3 rounded-2xl bg-slate-900 border border-purple-500/40 shadow-xl flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-purple-600 text-white font-bold">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">TallyPrime</div>
            <div className="text-[9px] text-emerald-400 font-semibold">Live 2-Way Sync</div>
          </div>
        </div>

        {/* Node 2: WhatsApp (Top Right) */}
        <div className="absolute top-10 -right-4 transform translate-x-1/2 p-3 rounded-2xl bg-slate-900 border border-emerald-500/40 shadow-xl flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-600 text-white font-bold">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">WhatsApp</div>
            <div className="text-[9px] text-emerald-400 font-semibold">Instant Alerts</div>
          </div>
        </div>

        {/* Node 3: Email / PDF (Bottom Right) */}
        <div className="absolute -bottom-4 right-10 transform translate-x-1/2 p-3 rounded-2xl bg-slate-900 border border-blue-500/40 shadow-xl flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-blue-600 text-white font-bold">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Email / PDF</div>
            <div className="text-[9px] text-blue-400 font-semibold">Daily Briefing</div>
          </div>
        </div>

        {/* Node 4: Excel / CSV (Bottom Left) */}
        <div className="absolute bottom-10 -left-4 transform -translate-x-1/2 p-3 rounded-2xl bg-slate-900 border border-emerald-500/40 shadow-xl flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-500 text-white font-bold">
            <FileSpreadsheet className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Excel / CSV</div>
            <div className="text-[9px] text-slate-400 font-medium">Export Ready</div>
          </div>
        </div>
      </motion.div>

      {/* CENTER SARASNOVA INTELLIGENCE CORE */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-500 p-0.5 shadow-2xl shadow-purple-600/40 flex flex-col items-center justify-center border border-purple-300/30">
          <div className="w-full h-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center p-2 space-y-1">
            <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
              S
            </div>
            <span className="text-[10px] font-extrabold text-white tracking-wider uppercase">
              SARASNOVA
            </span>
          </div>
        </div>

        {/* Fading Data Text beneath core */}
        <motion.div
          key={textIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.5 }}
          className="mt-4 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-semibold"
        >
          {rotatingTexts[textIndex]}
        </motion.div>
      </div>
    </div>
  );
}
