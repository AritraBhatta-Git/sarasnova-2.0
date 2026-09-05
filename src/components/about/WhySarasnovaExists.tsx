"use client";

import React from "react";
import { AlertCircle, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function WhySarasnovaExists() {
  return (
    <section id="why-sarasnova" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white scroll-mt-24 transition-colors">
      <Container size="xl" className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            THE PURPOSE
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Why SARASnova Exists
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Most business owners in India don&apos;t suffer from a lack of financial data—they suffer from data fragmentation and delayed reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="p-8 rounded-3xl border border-rose-200 dark:border-rose-500/30 bg-white dark:bg-slate-900/90 space-y-4">
            <div className="p-3 rounded-2xl bg-rose-100 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-500/40 text-rose-600 dark:text-rose-400 w-fit">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">The Old Reality</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Founders waiting until month-end for accounting statements, discovering overdue payments after 90 days, and finding margin erosion long after products were sold.
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-3xl border border-indigo-200 dark:border-indigo-500/30 bg-white dark:bg-slate-900/90 space-y-4">
            <div className="p-3 rounded-2xl bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-500/40 text-indigo-600 dark:text-indigo-400 w-fit">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">The SARASnova Reality</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Every morning at 7:30 AM, your business status is waiting on WhatsApp. Overdue collections are triggered in 1 click, and margin drops are flagged before they accumulate.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
