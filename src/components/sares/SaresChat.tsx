"use client";

import React, { useState } from "react";
import { Send, Bot, User, MessageCircle, Globe, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface ChatMessage {
  sender: "user" | "saras";
  text: string;
  tableData?: { customer: string; amount: string; days: string }[];
  actionBtn?: string;
}

export function SaresChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "user",
      text: "Show me customers over 60 days overdue with more than ₹1 lakh outstanding.",
    },
    {
      sender: "saras",
      text: "Found 4 customers with > ₹1 lakh outstanding & 60+ days overdue.",
      tableData: [
        { customer: "Sharma Textiles", amount: "₹8.90L", days: "94 days" },
        { customer: "Anand Traders", amount: "₹4.20L", days: "71 days" },
        { customer: "MG Retail Ltd", amount: "₹3.60L", days: "66 days" },
        { customer: "Verma & Sons", amount: "₹2.70L", days: "63 days" },
      ],
      actionBtn: "Send WhatsApp Payment Reminders",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "saras",
          text: `Analyzed Tally ledgers for "${userText}". Total projected cash flow remains healthy with ₹1.35Cr runway. Would you like me to export a PDF summary?`,
          actionBtn: "Export PDF Summary",
        },
      ]);
    }, 800);
  };

  const samplePrompts = [
    "Which items have margins below 15%?",
    "Predict cash flow for next 45 days",
    "Show top 5 dead stock items > 90 days",
  ];

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-slate-200 dark:border-purple-500/25 bg-white dark:bg-slate-950/90 text-slate-900 dark:text-slate-100 shadow-xl dark:shadow-2xl dark:shadow-purple-950/80 backdrop-blur-2xl overflow-hidden font-sans">
      {/* Header Bar */}
      <div className="px-5 py-3.5 bg-slate-100 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white shadow-md shadow-purple-500/30">
            <Bot className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-white dark:border-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-900 dark:text-white">SARAS AI Copilot</span>
              <Badge variant="purple" className="text-[9px] py-0">LIVE TALLY</Badge>
            </div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
              <span>Online • Speaks English &amp; Hinglish</span>
            </div>
          </div>
        </div>

        {/* Channels */}
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700" title="Web App Enabled">
            <Globe className="w-3.5 h-3.5" />
          </span>
          <span className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30" title="WhatsApp Sync Active">
            <MessageCircle className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="p-5 space-y-4 max-h-[380px] overflow-y-auto text-xs">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 ${
              msg.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Avatar */}
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[10px] shrink-0 ${
                msg.sender === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-purple-600 text-white"
              }`}
            >
              {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[85%] p-3.5 rounded-2xl ${
                msg.sender === "user"
                  ? "bg-indigo-600 text-white rounded-tr-none"
                  : "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-purple-500/20 text-slate-900 dark:text-slate-100 rounded-tl-none space-y-3"
              }`}
            >
              <p className="leading-relaxed font-medium">{msg.text}</p>

              {/* Structured Data Table */}
              {msg.tableData && (
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-950/60 p-2 space-y-1.5">
                  <div className="grid grid-cols-3 text-[10px] font-bold uppercase text-slate-500 dark:text-slate-400 pb-1 border-b border-slate-200 dark:border-slate-800 px-1">
                    <span>Customer</span>
                    <span className="text-right">Outstanding</span>
                    <span className="text-right">Age</span>
                  </div>
                  {msg.tableData.map((row, rIdx) => (
                    <div
                      key={rIdx}
                      className="grid grid-cols-3 text-[11px] text-slate-800 dark:text-slate-200 px-1 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800/50"
                    >
                      <span className="font-semibold text-slate-900 dark:text-slate-100 truncate">{row.customer}</span>
                      <span className="text-right text-rose-600 dark:text-rose-400 font-bold">{row.amount}</span>
                      <span className="text-right text-slate-500 dark:text-slate-400">{row.days}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Button */}
              {msg.actionBtn && (
                <button className="w-full py-2 px-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors shadow-md">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{msg.actionBtn}</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Prompt Chips */}
      <div className="px-5 py-2 bg-slate-100 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/60 flex items-center gap-2 overflow-x-auto no-scrollbar text-[10px]">
        <span className="text-slate-500 font-semibold uppercase tracking-wider shrink-0">Try asking:</span>
        {samplePrompts.map((prompt, pIdx) => (
          <button
            key={pIdx}
            onClick={() => setInput(prompt)}
            className="px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 hover:bg-purple-200 dark:hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/20 shrink-0 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSend} className="p-3 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask SARAS anything about your business..."
          className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-purple-500"
        />
        <button
          type="submit"
          className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-colors shrink-0"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
