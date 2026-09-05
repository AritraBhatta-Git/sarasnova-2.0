"use client";

import React from "react";
import { MessageCircle, CheckCircle2, Send, Zap, Clock, Bell, UserCheck } from "lucide-react";

export function DailyPulseVisual() {
  return (
    <div className="w-full h-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-2xl flex flex-col justify-between font-sans text-slate-900 dark:text-white transition-colors">
      {/* Visual Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shrink-0">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              Daily WhatsApp Action Engine
              <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-black uppercase">
                7:30 AM Alert
              </span>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Automated Daily Execution Prompt • Direct to Decision Makers</div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
          <Clock className="w-4 h-4" />
          <span>Live WhatsApp Sync</span>
        </div>
      </div>

      {/* WhatsApp Message Interface Preview */}
      <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 text-slate-100 border border-slate-800 space-y-3.5 my-3 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-xs text-white shadow-md">
              S
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                SARAS Executive Pulse
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-[10px] text-emerald-400 font-semibold">Tally Ledger Sync Active</div>
            </div>
          </div>
          <span className="text-[10px] text-slate-400 font-medium">Today, 7:30 AM</span>
        </div>

        <div className="text-xs sm:text-sm text-slate-200 space-y-2 leading-relaxed">
          <p className="font-semibold text-white">Good Morning Rajesh 👋 Here is today&apos;s operational execution briefing:</p>
          <div className="space-y-2 pt-1 text-xs">
            <div className="flex items-center justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-300 font-medium">🎯 Daily Revenue Target:</span>
              <span className="font-extrabold text-white">₹3.20L</span>
            </div>
            <div className="flex items-center justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-300 font-medium">💰 Priority Collection Target:</span>
              <span className="font-extrabold text-emerald-400">₹2.50L</span>
            </div>
            <div className="flex items-center justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800">
              <span className="text-slate-300 font-medium">⚠️ Overdue Client Alert:</span>
              <span className="font-extrabold text-amber-400">Sharma Textiles (₹8.90L)</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-lg">
          <Send className="w-4 h-4" />
          <span>Send Automated WhatsApp Payment Reminder to Sharma Textiles</span>
        </button>
      </div>

      {/* Footer Stat */}
      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
        <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero App Fatigue • No Login Required
        </span>
        <span className="text-indigo-600 dark:text-indigo-400 font-extrabold flex items-center gap-1">
          <UserCheck className="w-4 h-4" /> Direct to Founders &amp; CFOs
        </span>
      </div>
    </div>
  );
}
