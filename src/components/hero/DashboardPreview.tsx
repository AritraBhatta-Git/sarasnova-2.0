"use client";

import React from "react";
import {
  TrendingUp,
  AlertCircle,
  Building2,
  DollarSign,
  ShieldAlert,
  PieChart,
  Layers,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { SAMPLE_DASHBOARD_DATA } from "@/lib/constants";

export function DashboardPreview() {
  return (
    <div className="w-full max-w-2xl rounded-2xl border border-purple-500/20 bg-slate-900/90 text-slate-100 shadow-2xl shadow-purple-950/50 backdrop-blur-xl overflow-hidden text-xs">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="ml-2 font-semibold text-slate-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            Sarasnova 2.0 BI Console
          </div>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span className="text-emerald-400 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Tally Connected
          </span>
          <span>{SAMPLE_DASHBOARD_DATA.companyName}</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-4 space-y-4">
        {/* Top 4 Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="text-[10px] text-slate-400 font-medium">Sales (This Month)</div>
            <div className="text-base font-bold text-white mt-1">{SAMPLE_DASHBOARD_DATA.sales}</div>
            <div className="text-[10px] text-emerald-400 font-medium flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-0.5" /> +408.2%
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="text-[10px] text-slate-400 font-medium">Net Bank Balance</div>
            <div className="text-base font-bold text-emerald-400 mt-1">{SAMPLE_DASHBOARD_DATA.netBankBalance}</div>
            <div className="text-[10px] text-slate-400 mt-1">Live • 3 Accounts</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="text-[10px] text-slate-400 font-medium">Receivables</div>
            <div className="text-base font-bold text-amber-400 mt-1">{SAMPLE_DASHBOARD_DATA.receivables}</div>
            <div className="text-[10px] text-amber-400/90 mt-1">5 customers</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
            <div className="text-[10px] text-slate-400 font-medium">OD / Overdraft</div>
            <div className="text-base font-bold text-rose-400 mt-1">{SAMPLE_DASHBOARD_DATA.odOverdraft}</div>
            <div className="text-[10px] text-rose-400/90 mt-1">Live Limit</div>
          </div>
        </div>

        {/* Center Grid: Chart + Health Score */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Monthly Sales Trend */}
          <div className="sm:col-span-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-200">Monthly Sales Trend</span>
              <div className="flex gap-1">
                <span className="px-1.5 py-0.5 text-[9px] rounded bg-purple-600/30 text-purple-300">6M</span>
                <span className="px-1.5 py-0.5 text-[9px] rounded bg-slate-800 text-slate-400">1Y</span>
                <span className="px-1.5 py-0.5 text-[9px] rounded bg-slate-800 text-slate-400">All</span>
              </div>
            </div>

            {/* SVG Trend Wave */}
            <div className="my-2 h-20 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                <defs>
                  <linearGradient id="gradientWave" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 60 Q 50 75, 100 40 T 200 50 T 300 15 L 300 80 L 0 80 Z"
                  fill="url(#gradientWave)"
                />
                <path
                  d="M0 60 Q 50 75, 100 40 T 200 50 T 300 15"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="3"
                />
                <circle cx="300" cy="15" r="4" fill="#A855F7" className="animate-ping" />
                <circle cx="300" cy="15" r="4" fill="#A855F7" />
              </svg>
            </div>

            <div className="flex justify-between text-[9px] text-slate-400 pt-1 border-t border-slate-800/60">
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span className="text-purple-300 font-bold">Sep</span>
            </div>
          </div>

          {/* Business Health Score */}
          <div className="p-3 rounded-xl bg-slate-950/60 border border-purple-500/30 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-2 left-2 text-[10px] text-slate-400 font-medium">
              Health Score
            </div>
            <div className="my-1 relative w-16 h-16 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="32" cy="32" r="26" stroke="#1E293B" strokeWidth="6" fill="transparent" />
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  stroke="#F59E0B"
                  strokeWidth="6"
                  strokeDasharray="163"
                  strokeDashoffset="52"
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute text-center">
                <div className="text-base font-extrabold text-white">68</div>
                <div className="text-[8px] text-slate-400">/100</div>
              </div>
            </div>
            <div className="text-[10px] font-bold text-amber-400">Needs Attention</div>
            <div className="w-full mt-2 space-y-1 text-[9px] text-slate-300">
              <div className="flex justify-between">
                <span>Cash Flow</span>
                <span className="text-emerald-400">69%</span>
              </div>
              <div className="flex justify-between">
                <span>Profitability</span>
                <span className="text-amber-400">62%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live AI Copilot Bar */}
        <div className="p-2.5 rounded-xl bg-gradient-to-r from-purple-950/70 via-indigo-950/70 to-purple-950/70 border border-purple-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            <span className="text-[11px] font-semibold text-purple-200">
              SARAS Insight: ₹14.2L tied in dead stock &gt; 90 days. Liquidate to optimize cash flow.
            </span>
          </div>
          <span className="text-[10px] font-bold text-purple-400 hover:text-purple-300 cursor-pointer flex items-center">
            Take Action <ArrowUpRight className="w-3 h-3 ml-0.5" />
          </span>
        </div>
      </div>
    </div>
  );
}
