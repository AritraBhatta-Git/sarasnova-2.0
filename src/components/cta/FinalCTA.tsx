"use client";

import React from "react";
import { ArrowRight, Rocket, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section id="demo" className="py-16 md:py-24 relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      <Container size="xl">
        {/* Wide Elegant CTA Panel */}
        <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-sm overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content with Rocket Icon */}
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 items-center justify-center shrink-0">
                <Rocket className="w-8 h-8" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Ready to take <span className="gradient-text-purple-blue">control</span> of your business?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal">
                  Book a demo and see SARASnova in action with your own data.
                </p>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <Button href="/contact" variant="primary" size="lg" className="group">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Bottom Security Note */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Your data is encrypted and protected by bank-level security.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
