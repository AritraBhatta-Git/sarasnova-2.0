"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function ContactHero() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            LET&apos;S TALK
          </Badge>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            Ready to make <br />
            <span className="gradient-text-purple-blue">better business decisions?</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Speak with our business intelligence team or request a live 1-on-1 demonstration using sample Tally data.
          </p>
        </div>
      </Container>
    </section>
  );
}
