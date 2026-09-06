"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutCTA() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors border-t border-slate-200 dark:border-slate-800">
      <Container size="xl">
        <div className="relative rounded-3xl border border-slate-200 dark:border-purple-500/30 bg-white dark:bg-slate-900 p-8 sm:p-14 shadow-2xl text-center space-y-6 overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="space-y-4 max-w-2xl mx-auto relative">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSFORM YOUR BUSINESS DATA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Build a clearer business <br className="hidden sm:inline" />
              <span className="gradient-text-purple-blue">with SARASnova.</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Experience the AI CFO platform designed specifically for Indian enterprises. Connect your Tally ledgers and turn raw numbers into daily operational clarity.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-4 relative">
            <Button href="/contact" variant="primary" size="lg" className="group">
              <span>Book a Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button href="/features" variant="outline" size="lg">
              Explore SARASnova Features
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
