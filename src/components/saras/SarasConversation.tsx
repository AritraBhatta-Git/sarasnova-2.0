"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, MessageCircle, Send, Mic, ShieldCheck, Cpu } from "lucide-react";

export function SarasConversation() {
  const fullQuery = "Show me customers over 60 days overdue with more than ₹1 lakh outstanding.";
  
  // States: 'typing' -> 'thinking' -> 'result'
  const [phase, setPhase] = useState<"typing" | "thinking" | "result">("typing");
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (phase === "typing") {
      if (typedText.length < fullQuery.length) {
        timeoutId = setTimeout(() => {
          setTypedText(fullQuery.slice(0, typedText.length + 1));
        }, 40); // Type next character every 40ms
      } else {
        // Typing finished, move to thinking state
        timeoutId = setTimeout(() => {
          setPhase("thinking");
        }, 500);
      }
    } else if (phase === "thinking") {
      // Thinking for 1.2s before showing result
      timeoutId = setTimeout(() => {
        setPhase("result");
      }, 1200);
    } else if (phase === "result") {
      // Show result for 6s then restart loop
      timeoutId = setTimeout(() => {
        setPhase("typing");
        setTypedText("");
      }, 6000);
    }

    return () => clearTimeout(timeoutId);
  }, [phase, typedText, fullQuery]);

  const tableData = [
    { customer: "Sharma Textiles", amount: "₹8.90L", overdue: "94 days" },
    { customer: "Anand Traders", amount: "₹4.20L", overdue: "71 days" },
    { customer: "MG Retail Ltd", amount: "₹3.60L", overdue: "66 days" },
    { customer: "Verma & Sons", amount: "₹2.70L", overdue: "63 days" },
  ];

  return (
    <div className="w-full max-w-3xl rounded-3xl border border-slate-800 bg-slate-950 text-slate-100 shadow-2xl overflow-hidden font-sans relative">
      {/* 1. Desktop Monitor Header Bar */}
      <div className="px-5 py-3.5 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          {/* Monitor Window Control Dots */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          <div className="relative w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center font-black text-white text-xs shadow-md">
            S
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-white">SARASnova AI</span>
              <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-[10px] font-black uppercase">
                AI CFO
              </span>
            </div>
            <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>● Online • Live business data</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 bg-slate-900/90 px-3 py-1.5 rounded-full border border-slate-800">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Tally Sync Active</span>
        </div>
      </div>

      {/* 2. Messages & Table Workspace */}
      <div className="p-5 sm:p-6 space-y-4 text-xs sm:text-sm min-h-[380px] flex flex-col justify-start">
        {/* User Query Bubble with Live Typing Effect */}
        <div className="flex items-start gap-3 flex-row-reverse">
          <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center font-bold text-white shrink-0 text-xs shadow">
            <User className="w-4 h-4" />
          </div>
          <div className="max-w-[88%] p-3.5 rounded-2xl bg-indigo-600 text-white rounded-tr-none font-medium leading-relaxed shadow-sm text-xs sm:text-sm min-h-[44px]">
            <span>{typedText}</span>
            {phase === "typing" && (
              <span className="inline-block w-1.5 h-4 ml-1 bg-white animate-pulse align-middle" />
            )}
          </div>
        </div>

        {/* SARAS AI Thinking State */}
        {phase === "thinking" && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 text-indigo-400 text-xs font-semibold py-3 px-1"
          >
            <Cpu className="w-4 h-4 animate-spin text-indigo-400" />
            <span className="animate-pulse">SARAS AI is analyzing Tally ledgers &amp; 60+ day overdue accounts...</span>
          </motion.div>
        )}

        {/* SARAS AI Result Response */}
        {phase === "result" && (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center font-bold text-white shrink-0 text-xs shadow">
                <Bot className="w-4 h-4" />
              </div>

              <div className="max-w-[92%] p-4 sm:p-5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 rounded-tl-none space-y-4 shadow-md w-full">
                <p className="leading-relaxed font-bold text-slate-100 text-xs sm:text-sm">
                  Found 4 customers with &gt; ₹1 lakh outstanding &amp; 60+ days overdue.
                </p>

                {/* Structured Data Table */}
                <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950/90 p-2.5 space-y-1">
                  <div className="grid grid-cols-3 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 pb-1.5 border-b border-slate-800 px-2">
                    <span>Customer</span>
                    <span className="text-right">Outstanding</span>
                    <span className="text-right">Age / Status</span>
                  </div>
                  {tableData.map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className="grid grid-cols-3 text-xs text-slate-200 px-2 py-1.5 rounded hover:bg-slate-800/50 transition-colors"
                    >
                      <span className="font-bold text-white truncate">{row.customer}</span>
                      <span className="text-right text-rose-400 font-extrabold">{row.amount}</span>
                      <span className="text-right text-amber-400 font-semibold">{row.overdue}</span>
                    </div>
                  ))}
                </div>

                {/* Recommended Action */}
                <div className="p-3.5 rounded-xl bg-indigo-950/60 border border-indigo-800/60 text-xs space-y-1">
                  <div className="text-[10px] font-black uppercase text-indigo-400 tracking-wider">
                    Recommended Action
                  </div>
                  <div className="text-slate-200 font-medium leading-relaxed">
                    Prioritize top 2 overdue accounts to recover ₹13.10L in locked working capital.
                  </div>
                </div>

                {/* Action CTA Button */}
                <button className="w-full py-2.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg">
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Send WhatsApp Payment Reminders →</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* 3. Live Animated Chat Input Bar */}
      <div className="p-3.5 bg-slate-900 border-t border-slate-800 flex items-center gap-2 shrink-0">
        <div className="relative flex-1">
          <input
            type="text"
            readOnly
            value={phase === "typing" ? typedText : "Ask SARAS anything about your business..."}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-400 cursor-default"
          />
          <div className="absolute right-3 top-2.5 text-slate-400" title="Voice Input">
            <Mic className="w-4 h-4" />
          </div>
        </div>
        <button className="p-2.5 rounded-xl bg-indigo-600 text-white font-semibold shrink-0 hover:bg-indigo-500 transition-colors">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
