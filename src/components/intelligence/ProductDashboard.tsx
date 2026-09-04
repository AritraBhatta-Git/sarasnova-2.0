"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  Bot,
  Zap,
  AlertTriangle,
  TrendingDown,
  ShieldAlert,
  BarChart3,
  Truck,
  Receipt,
  Boxes,
  FileText,
  Settings,
  Search,
  ChevronDown,
  TrendingUp,
  RefreshCw,
  SlidersHorizontal,
} from "lucide-react";
import { SAMPLE_DASHBOARD_DATA } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export function ProductDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [timeRange, setTimeRange] = useState("6M");

  const sidebarItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: "AI Copilot", icon: <Bot className="w-4 h-4" />, badge: "SARAS" },
    { name: "Daily Pulse", icon: <Zap className="w-4 h-4" /> },
    { name: "Problems", icon: <AlertTriangle className="w-4 h-4" />, count: "4" },
    { name: "Cash Flow", icon: <TrendingDown className="w-4 h-4" /> },
    { name: "Profitability", icon: <ShieldAlert className="w-4 h-4" /> },
    { name: "Sales Performance", icon: <BarChart3 className="w-4 h-4" /> },
    { name: "Supplier Risk", icon: <Truck className="w-4 h-4" /> },
    { name: "Receivables", icon: <Receipt className="w-4 h-4" />, count: "5" },
    { name: "Dead Stock", icon: <Boxes className="w-4 h-4" /> },
    { name: "Reports", icon: <FileText className="w-4 h-4" /> },
    { name: "Settings", icon: <Settings className="w-4 h-4" /> },
  ];

  return (
    <div className="w-full rounded-3xl border border-purple-500/20 bg-slate-950 text-slate-100 shadow-2xl shadow-purple-950/60 overflow-hidden font-sans">
      {/* Top Console Bar */}
      <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* Left Logo + Company Selector */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white text-xs">
            S
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200">
            <span>{SAMPLE_DASHBOARD_DATA.companyName}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>

        {/* Center Search */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950 border border-slate-800 text-xs text-slate-400 w-64">
          <Search className="w-3.5 h-3.5" />
          <span className="truncate">Search ledgers, invoices, customers...</span>
        </div>

        {/* Right Status */}
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-medium">
            <RefreshCw className="w-3 h-3 animate-spin" />
            <span>Tally Live Syncing</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-purple-600/30 border border-purple-500/40 flex items-center justify-center font-bold text-purple-300 text-xs">
            A
          </div>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Sidebar */}
        <div className="lg:col-span-3 bg-slate-900/60 border-r border-slate-800/80 p-3 space-y-1">
          <div className="px-3 py-2 text-[10px] uppercase tracking-wider font-bold text-slate-500">
            Navigation
          </div>
          {sidebarItems.map((item) => {
            const isSelected = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-purple-600 text-white font-semibold shadow-md shadow-purple-900/50"
                    : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-purple-400/20 text-purple-300">
                    {item.badge}
                  </span>
                )}
                {item.count && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500/20 text-rose-300">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-9 p-5 space-y-5 bg-slate-950/40">
          {/* Header Title */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Dashboard Overview</span>
                <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  Updated 2 mins ago
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Real-time financial status synced directly with Tally Prime
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5 hover:bg-slate-800">
                <SlidersHorizontal className="w-3.5 h-3.5" /> Filter
              </button>
            </div>
          </div>

          {/* 4 Primary Key Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-purple-500/20 relative overflow-hidden">
              <div className="text-xs text-slate-400 font-medium">Sales (This Month)</div>
              <div className="text-2xl font-extrabold text-white mt-1">{SAMPLE_DASHBOARD_DATA.sales}</div>
              <div className="text-xs text-emerald-400 font-semibold flex items-center mt-2">
                <TrendingUp className="w-3.5 h-3.5 mr-1" /> +408.2% vs last month
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/20 relative overflow-hidden">
              <div className="text-xs text-slate-400 font-medium">Net Bank Balance</div>
              <div className="text-2xl font-extrabold text-emerald-400 mt-1">{SAMPLE_DASHBOARD_DATA.netBankBalance}</div>
              <div className="text-xs text-slate-400 flex items-center mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1.5" /> 3 Accounts Live
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/20 relative overflow-hidden">
              <div className="text-xs text-slate-400 font-medium">Receivables</div>
              <div className="text-2xl font-extrabold text-amber-400 mt-1">{SAMPLE_DASHBOARD_DATA.receivables}</div>
              <div className="text-xs text-amber-400/90 flex items-center mt-2">
                5 customers overdue &gt; 30d
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-rose-500/20 relative overflow-hidden">
              <div className="text-xs text-slate-400 font-medium">OD / Overdraft</div>
              <div className="text-2xl font-extrabold text-rose-400 mt-1">{SAMPLE_DASHBOARD_DATA.odOverdraft}</div>
              <div className="text-xs text-rose-400/90 flex items-center mt-2">
                Limit ₹1.00Cr • Utilization 62%
              </div>
            </div>
          </div>

          {/* Chart + Health Score Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Sales Chart */}
            <div className="lg:col-span-8 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-200">Monthly Sales & Collection Trend</h3>
                  <p className="text-xs text-slate-400">Comparing gross turnover against cash collection</p>
                </div>
                <div className="flex gap-1.5">
                  {["6M", "1Y", "All"].map((r) => (
                    <button
                      key={r}
                      onClick={() => setTimeRange(r)}
                      className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors ${
                        timeRange === r
                          ? "bg-purple-600 text-white"
                          : "bg-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart SVG */}
              <div className="my-4 h-44 w-full relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="500" y2="30" stroke="#1E293B" strokeDasharray="4" />
                  <line x1="0" y1="75" x2="500" y2="75" stroke="#1E293B" strokeDasharray="4" />
                  <line x1="0" y1="120" x2="500" y2="120" stroke="#1E293B" strokeDasharray="4" />

                  {/* Wave Area */}
                  <path
                    d="M 0 110 Q 80 130, 160 80 T 320 90 T 500 30 L 500 150 L 0 150 Z"
                    fill="url(#chartGradient)"
                  />
                  {/* Wave Line */}
                  <path
                    d="M 0 110 Q 80 130, 160 80 T 320 90 T 500 30"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="3"
                  />
                  {/* Active Tooltip point */}
                  <circle cx="500" cy="30" r="5" fill="#A855F7" className="animate-ping" />
                  <circle cx="500" cy="30" r="5" fill="#A855F7" />
                </svg>
              </div>

              <div className="flex justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span className="text-purple-300 font-bold">Sep (Current)</span>
              </div>
            </div>

            {/* Health Score Gauge */}
            <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-900/90 border border-purple-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-sm text-slate-200">Business Health Score</h3>
                  <Badge variant="amber">Needs Attention</Badge>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">Composite index based on 14 KPIs</p>
              </div>

              <div className="my-3 flex flex-col items-center justify-center">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="56" cy="56" r="46" stroke="#1E293B" strokeWidth="8" fill="transparent" />
                    <circle
                      cx="56"
                      cy="56"
                      r="46"
                      stroke="#F59E0B"
                      strokeWidth="8"
                      strokeDasharray="289"
                      strokeDashoffset="92"
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <div className="text-3xl font-extrabold text-white">68</div>
                    <div className="text-xs text-slate-400">/ 100</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                {SAMPLE_DASHBOARD_DATA.breakdown.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex justify-between text-slate-300 font-medium text-[11px]">
                      <span>{item.label}</span>
                      <span>{item.score}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
