"use client";

import React from "react";
import { ArrowUpRight, AlertTriangle, Sparkles } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto">
      {/* Realistic Smartphone Frame - Still */}
      <div className="relative rounded-[44px] border-[6px] border-slate-800 dark:border-slate-800 bg-slate-950 shadow-xl overflow-hidden font-sans">
        {/* Notch / Speaker */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-900 rounded-b-2xl z-30 flex items-center justify-center">
          <div className="w-10 h-1 bg-slate-800 rounded-full" />
        </div>

        {/* Screen Content */}
        <div className="pt-6 pb-5 px-4 space-y-3 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 min-h-[580px]">
          {/* Top Bar */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-[10px] text-white">
                S
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-1">
                  SARASnova AI
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-[9px] text-emerald-400 font-semibold">Live Tally Sync</div>
              </div>
            </div>
            <div className="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] text-slate-300 font-medium">
              Rajesh • ABC Ltd
            </div>
          </div>

          {/* Greeting Box */}
          <div className="p-3.5 rounded-2xl bg-slate-900 border border-indigo-500/20">
            <div className="text-[10px] text-indigo-400 font-extrabold uppercase tracking-wider">
              Good Morning, Rajesh 👋
            </div>
            <div className="text-xs font-bold text-white mt-0.5">
              Here&apos;s your daily business pulse
            </div>
          </div>

          {/* 2x2 Metric Grid */}
          <div className="grid grid-cols-2 gap-2">
            {/* Sales */}
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="text-[9px] text-slate-400 font-semibold">Sales (This Month)</div>
              <div className="text-sm font-extrabold text-white">₹18.85L</div>
              <div className="text-[9px] text-emerald-400 font-semibold flex items-center gap-0.5">
                <ArrowUpRight className="w-2.5 h-2.5" /> +408.2% vs last mo
              </div>
            </div>

            {/* Net Bank Balance */}
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="text-[9px] text-slate-400 font-semibold">Net Bank Balance</div>
              <div className="text-sm font-extrabold text-white">₹1.35Cr</div>
              <div className="text-[9px] text-slate-400">Live 3 Accounts</div>
            </div>

            {/* Receivables */}
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="text-[9px] text-slate-400 font-semibold">Receivables</div>
              <div className="text-sm font-extrabold text-white">₹48.07L</div>
              <div className="text-[9px] text-amber-400 font-semibold">5 overdue clients</div>
            </div>

            {/* OD / Overdraft */}
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
              <div className="text-[9px] text-slate-400 font-semibold">OD / Overdraft</div>
              <div className="text-sm font-extrabold text-white">-₹62.00L</div>
              <div className="text-[9px] text-slate-400">Limit ₹1.00Cr</div>
            </div>
          </div>

          {/* Business Health Score */}
          <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full border-4 border-amber-500/80 border-t-amber-400 flex items-center justify-center font-extrabold text-xs text-white">
                68
              </div>
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Business Health</div>
                <div className="text-xs font-bold text-amber-400">Needs Attention</div>
              </div>
            </div>
            <button className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-[10px] font-semibold hover:bg-indigo-500 transition-colors">
              View Details →
            </button>
          </div>

          {/* Urgent Alert Card */}
          <div className="p-3 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-rose-200 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-300">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              <span>3 customers crossed 30 days overdue</span>
            </div>
            <div className="text-[10px] text-rose-200/80 leading-snug">
              Total outstanding: ₹1.07Cr. Tap to send automated WhatsApp payment reminders.
            </div>
          </div>

          {/* Ask SARAS Bar */}
          <div className="p-2.5 rounded-xl bg-slate-900 border border-indigo-500/30 flex items-center justify-between text-indigo-200">
            <div className="flex items-center gap-2 text-[11px] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ask SARAS: &ldquo;Show dead stock &gt; 90d&rdquo;</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-indigo-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
