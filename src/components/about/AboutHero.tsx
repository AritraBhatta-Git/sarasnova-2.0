"use client";

import React from "react";
import { Sparkles, ArrowRight, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            OUR MISSION
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            We’re building the intelligence layer <br />
            <span className="gradient-text-purple-blue">for modern Indian businesses.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            SARASnova was created to solve a fundamental problem facing Indian business owners: having financial data everywhere in Tally, but missing the instant clarity needed to make fast, confident decisions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" variant="primary" size="lg" className="group">
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a
              href="#why-sarasnova"
              className="px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <span>Explore SARASnova</span>
              <ArrowDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
