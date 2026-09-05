"use client";

import React from "react";
import { Sparkles, ArrowRight, ArrowDown, Database, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function IntegrationsHero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            SARASnova ECOSYSTEM
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            Everything connected. <br />
            <span className="gradient-text-purple-blue">One intelligent business view.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            SARASnova plugs directly into your existing accounting systems and communication channels to turn isolated data into continuous, actionable business intelligence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" variant="primary" size="lg" className="group">
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a
              href="#integrations-list"
              className="px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <span>Explore Integrations</span>
              <ArrowDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
            <span className="flex items-center gap-1.5 text-indigo-700 dark:text-indigo-300">
              <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> TallyPrime Native Sync
            </span>
            <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Instant WhatsApp Alerts
            </span>
            <span className="flex items-center gap-1.5 text-blue-700 dark:text-blue-300">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Bank-grade Encryption
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
