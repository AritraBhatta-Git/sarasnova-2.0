"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function PricingHero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            REVENUE &amp; PRICING MODEL
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            Transparent pricing. <br />
            <span className="gradient-text-purple-blue">Scalable business intelligence.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            A highly scalable B2B revenue model designed to grow alongside client transaction volumes and strategic complexity.
          </p>

          <div className="pt-2 flex items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" className="group">
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
            <span className="flex items-center gap-1.5 text-indigo-700 dark:text-indigo-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-500" /> Instant Tally / ERP Data Extraction
            </span>
            <span className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> SARAS AI Chatbot Included
            </span>
            <span className="flex items-center gap-1.5 text-blue-700 dark:text-blue-300">
              <ShieldCheck className="w-4 h-4 text-blue-500" /> Enterprise-Grade Security
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
