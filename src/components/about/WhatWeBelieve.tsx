"use client";

import React from "react";
import { Eye, Zap, ShieldCheck, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function WhatWeBelieve() {
  const principles = [
    {
      num: "01",
      title: "Clarity over complexity",
      desc: "Financial data should simplify decision-making, not obscure it under hundreds of raw ledger tables.",
      icon: Eye,
      color: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950",
    },
    {
      num: "02",
      title: "Intelligence that leads to action",
      desc: "An alert is useless if it doesn't give you a 1-click pathway to resolve the underlying operational issue.",
      icon: Zap,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950",
    },
    {
      num: "03",
      title: "Data-driven confidence",
      desc: "Ground your growth decisions in verified Tally accounting ledgers rather than guesswork.",
      icon: ShieldCheck,
      color: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950",
    },
    {
      num: "04",
      title: "Technology around your business",
      desc: "SARASnova fits into your daily routine on WhatsApp without forcing your team to change how they work.",
      icon: Cpu,
      color: "text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 transition-colors">
      <Container size="xl" className="space-y-12">
        {/* Central Manifesto Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple">COMPANY MANIFESTO</Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            What We Believe
          </h2>

          <p className="text-lg sm:text-xl font-bold text-purple-600 dark:text-purple-400 max-w-2xl mx-auto italic">
            &ldquo;Clarity should make business easier — not more complicated.&rdquo;
          </p>
        </div>

        {/* Editorial Manifesto Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-purple-500/20 space-y-4 shadow-md dark:shadow-xl hover:border-purple-500/40 transition-colors flex items-start gap-5"
              >
                <div className={`p-3.5 rounded-2xl ${p.color} shrink-0 border border-slate-200/60 dark:border-slate-800`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <div className="text-[10px] font-black text-slate-400 tracking-wider uppercase">
                    PRINCIPLE {p.num}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
