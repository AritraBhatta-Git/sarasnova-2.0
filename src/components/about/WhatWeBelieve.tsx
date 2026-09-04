"use client";

import React from "react";
import { Eye, Zap, ShieldCheck, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function WhatWeBelieve() {
  const principles = [
    {
      title: "Clarity over complexity",
      desc: "Financial data should simplify decision-making, not obscure it under hundreds of raw ledger tables.",
      icon: Eye,
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Intelligence that leads to action",
      desc: "An alert is useless if it doesn't give you a 1-click pathway to resolve the underlying issue.",
      icon: Zap,
      color: "text-emerald-600 dark:text-emerald-400",
    },
    {
      title: "Data-driven confidence",
      desc: "Ground your growth decisions in verified Tally accounting ledgers rather than guesswork.",
      icon: ShieldCheck,
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Technology around your business",
      desc: "Sarasnova fits into your daily routine on WhatsApp without forcing your team to change how they work.",
      icon: Cpu,
      color: "text-indigo-600 dark:text-indigo-400",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-t border-purple-500/10 transition-colors">
      <Container size="xl" className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple">CORE PHILOSOPHY</Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            What We Believe
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 font-normal">
            Four guiding principles that shape how we design Sarasnova 2.0.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-purple-500/20 space-y-3 shadow-md dark:shadow-none">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 w-fit">
                  <Icon className={`w-5 h-5 ${p.color}`} />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
