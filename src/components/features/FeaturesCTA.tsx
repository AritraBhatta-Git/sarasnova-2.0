"use client";

import React from "react";
import { ArrowRight, MessageCircle, Rocket, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FeaturesCTA() {
  return (
    <section className="py-16 md:py-24 relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Container size="xl">
        <div className="relative rounded-3xl border border-purple-500/30 bg-white dark:bg-gradient-to-r dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-8 sm:p-12 shadow-xl dark:shadow-2xl dark:shadow-purple-950/60 overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-600/20 border border-purple-200 dark:border-purple-500/40 text-purple-600 dark:text-purple-400 items-center justify-center shrink-0 shadow-md">
                <Rocket className="w-8 h-8" />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  See what Sarasnova can <span className="gradient-text-purple-blue">uncover</span> in your business.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal">
                  Book a free demo and discover hidden cash flow insights in your Tally data in under 15 minutes.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <Button href="/contact" variant="primary" size="lg" className="group shadow-xl shadow-purple-600/30">
                <span>Book a Free Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                href="https://wa.me/919876543210"
                variant="whatsapp"
                size="lg"
                className="gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>100% Secure Tally integration • No credit card required.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
