"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, MessageSquare, Cpu, TrendingUp, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function BuiltForIndianSMBs() {
  const nodes = [
    {
      title: "TALLY",
      role: "Financial Foundation",
      desc: "Connects natively to Tally ERP 9 & TallyPrime without disturbing your accounting voucher workflow.",
      icon: Database,
      badgeColor: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    },
    {
      title: "WHATSAPP",
      role: "Daily Communication",
      desc: "Delivers 7:30 AM Daily Pulse briefings and 1-click overdue payment reminder triggers on WhatsApp.",
      icon: MessageSquare,
      badgeColor: "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    },
    {
      title: "SARAS",
      role: "Intelligence Layer",
      desc: "Parses complex multi-ledger tables and converts them into natural-language business answers.",
      icon: Cpu,
      badgeColor: "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    },
    {
      title: "BUSINESS",
      role: "Decisions & Action",
      desc: "Empowers founders and leaders to operate with clear cash flow visibility and zero month-end surprises.",
      icon: TrendingUp,
      badgeColor: "bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 transition-colors">
      <Container size="xl" className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <Badge variant="purple">LOCAL WORKFLOW COMPATIBILITY</Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Built for How Indian Businesses <br className="hidden sm:inline" />
            <span className="gradient-text-purple-blue">Actually Work</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            <strong className="text-slate-900 dark:text-white">Core Philosophy:</strong> Technology should adapt to the business—not force the business to adapt to technology.
          </p>
        </div>

        {/* 4 Connected Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node, idx) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-purple-500/20 space-y-4 shadow-md flex flex-col justify-between hover:border-purple-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-purple-600 dark:text-purple-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-md border ${node.badgeColor}`}>
                      {node.title}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">{node.role}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {node.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
