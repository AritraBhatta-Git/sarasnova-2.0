"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function AboutCTA() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Container size="xl">
        <div className="relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-sm text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Build a clearer business <span className="gradient-text-purple-blue">with SARASnova.</span>
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Experience the AI CFO platform designed specifically for Indian SMBs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
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
