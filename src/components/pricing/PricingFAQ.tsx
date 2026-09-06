"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What plans are available in SARASnova?",
      a: "SARASnova offers 4 structured tiers: Tier I (Core AI at ₹10,000/mo), Tier II (AI Strategy at ₹15,000/mo), Tier III (Virtual CFO at ₹20,000/mo), and Tier IV (Custom Enterprise). Tiers I, II, and III have a standard ₹50,000 one-time setup fee.",
    },
    {
      q: "What is included in the ₹50,000 one-time setup fee?",
      a: "The one-time setup fee covers seamless Tally/ERP connector setup, custom ledger mapping, initial data cleaning, automated cloud warehouse pipeline configuration, and team onboarding.",
    },
    {
      q: "Can I upgrade between tiers as my business grows?",
      a: "Yes. You can upgrade from Tier I (Core AI) to Tier II (AI Strategy) or Tier III (Virtual CFO) at any time to unlock bottleneck diagnostics, continuous variance monitoring, and monthly CA strategy reviews.",
    },
    {
      q: "Does SARASnova work with TallyPrime & Tally ERP 9?",
      a: "Yes. SARASnova connects directly with Tally ERP 9 and TallyPrime. Data syncs securely in the background with zero manual voucher export.",
    },
    {
      q: "Can I see a demo with my own business data before choosing a plan?",
      a: "Absolutely. You can book a free 1-on-1 discovery session with our team to see SARASnova run on sample or live Tally data.",
    },
    {
      q: "How does WhatsApp integration work?",
      a: "Your daily business pulse, critical margin alerts, and overdue payment notifications are delivered directly to your WhatsApp. You can also trigger 1-click payment reminder messages to customers.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 transition-colors">
      <Container size="xl" className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<HelpCircle className="w-3.5 h-3.5" />}>
            FREQUENTLY ASKED QUESTIONS
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Got questions about <span className="gradient-text-purple-blue">SARASnova pricing?</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-purple-500/20 transition-all cursor-pointer hover:border-purple-500/40"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
              >
                <div className="flex items-center justify-between font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </div>

                {isOpen && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed font-normal pt-3 border-t border-slate-200 dark:border-slate-800">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
