"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Sparkles, MessageCircle, Globe, Send, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function SarasConversation() {
  const [step, setStep] = useState(0);

  // Animation cycle: 0 = User query, 1 = Typing indicator, 2 = Response & Table, 3 = Action highlight
  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1200);
    const timer2 = setTimeout(() => setStep(2), 2500);
    const timer3 = setTimeout(() => setStep(3), 4500);
    const timerReset = setTimeout(() => setStep(0), 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerReset);
    };
  }, [step === 0]);

  const tableData = [
    { customer: "Sharma Textiles", amount: "₹8.90L", overdue: "94 days" },
    { customer: "Anand Traders", amount: "₹4.20L", overdue: "71 days" },
    { customer: "MG Retail Ltd", amount: "₹3.60L", overdue: "66 days" },
    { customer: "Verma & Sons", amount: "₹2.70L", overdue: "63 days" },
  ];

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-purple-500/30 bg-slate-950/95 text-slate-100 shadow-2xl shadow-purple-950/90 backdrop-blur-2xl overflow-hidden font-sans">
      {/* Laptop Header Bar */}
      <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center font-extrabold text-white text-xs shadow-md">
            S
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs text-white">SARAS AI Copilot</span>
              <Badge variant="purple" className="text-[9px] py-0">LIVE TALLY</Badge>
            </div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-1">
              <span>Online • Speaks English & Hinglish</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="p-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700" title="Web App">
            <Globe className="w-3.5 h-3.5" />
          </span>
          <span className="p-1.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-500/30" title="WhatsApp Sync">
            <MessageCircle className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Messages Scroll Workspace */}
      <div className="p-5 space-y-4 min-h-[340px] max-h-[380px] overflow-y-auto text-xs">
        {/* User Query */}
        <AnimatePresence>
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2.5 flex-row-reverse"
            >
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shrink-0 text-[10px]">
                <User className="w-3.5 h-3.5" />
              </div>
              <div className="max-w-[85%] p-3 rounded-2xl bg-indigo-600 text-white rounded-tr-none">
                Show me customers over 60 days overdue with more than ₹1 lakh outstanding.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Typing Indicator */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-purple-400 text-xs py-2"
          >
            <Bot className="w-4 h-4" />
            <span className="animate-pulse">SARAS is analyzing Tally ledgers...</span>
          </motion.div>
        )}

        {/* SARAS Response & Table */}
        <AnimatePresence>
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2.5"
            >
              <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center font-bold text-white shrink-0 text-[10px]">
                <Bot className="w-3.5 h-3.5" />
              </div>

              <div className="max-w-[90%] p-3.5 rounded-2xl bg-slate-900 border border-purple-500/20 text-slate-100 rounded-tl-none space-y-3 shadow-xl">
                <p className="leading-relaxed font-medium">
                  Found <span className="text-purple-400 font-bold">4 customers</span> with &gt; ₹1 lakh outstanding &amp; 60+ days overdue.
                </p>

                {/* Structured Breakdown Table */}
                <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950/70 p-2 space-y-1">
                  <div className="grid grid-cols-3 text-[9px] font-bold uppercase text-slate-400 pb-1 border-b border-slate-800 px-1">
                    <span>Customer</span>
                    <span className="text-right">Outstanding</span>
                    <span className="text-right">Age</span>
                  </div>
                  {tableData.map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className="grid grid-cols-3 text-[11px] text-slate-200 px-1 py-1 rounded hover:bg-slate-800/50"
                    >
                      <span className="font-semibold text-slate-100 truncate">{row.customer}</span>
                      <span className="text-right text-rose-400 font-bold">{row.amount}</span>
                      <span className="text-right text-slate-400">{row.overdue}</span>
                    </div>
                  ))}
                </div>

                {/* Animated Action Button */}
                <motion.button
                  animate={
                    step >= 3
                      ? { scale: [1, 1.03, 1], boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)" }
                      : {}
                  }
                  className={`w-full py-2 px-3 rounded-xl font-bold text-[11px] flex items-center justify-center gap-2 transition-all ${
                    step >= 3
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                      : "bg-purple-600/80 text-white"
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Send WhatsApp Payment Reminders</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Prompt Box */}
      <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
        <input
          type="text"
          readOnly
          value="Ask SARAS anything about your business..."
          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-400 cursor-not-allowed"
        />
        <button className="p-2.5 rounded-xl bg-purple-600 text-white font-semibold shrink-0">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
