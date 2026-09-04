"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function PricingFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is included in Sarasnova 2.0?",
      a: "Sarasnova 2.0 includes all 8 core intelligence modules (Daily Pulse, Problems Indicator, Cash Flow Risk, Profitability Risk, Sales Performance, Supplier Risk, Receivables Recovery, and Dead Stock), native TallyPrime 2-way sync, WhatsApp daily briefings, and SARAS AI Copilot.",
    },
    {
      q: "How does pricing work?",
      a: "Sarasnova 2.0 is billed as a straightforward annual platform subscription tailored to your transaction volume and ledger size. Book a demo to get a customized quote for your business.",
    },
    {
      q: "Can I see a demo before subscribing?",
      a: "Yes! You can book a free 15-minute live demo with your own sample Tally data to see how Sarasnova surfaces cash flow risks, overdue receivables, and morning WhatsApp briefings.",
    },
    {
      q: "Does Sarasnova work with TallyPrime?",
      a: "Absolutely. Sarasnova is built from the ground up for Indian SMBs using Tally ERP 9 and TallyPrime. Data syncs securely in the background with zero manual voucher export.",
    },
    {
      q: "Can I use Sarasnova on mobile?",
      a: "Yes. Sarasnova is fully responsive across mobile browsers, and key daily summaries, critical alerts, and payment reminder actions are delivered directly to your WhatsApp.",
    },
    {
      q: "Can I communicate with Sarasnova through WhatsApp?",
      a: "Yes. You receive your 7:30 AM Daily Pulse on WhatsApp, get instant alerts when bills cross due dates, and can send payment reminders to customers in 1 click.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-t border-purple-500/10 transition-colors">
      <Container size="xl" className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<HelpCircle className="w-3.5 h-3.5" />}>
            FREQUENTLY ASKED QUESTIONS
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Got questions about <span className="gradient-text-purple-blue">Sarasnova pricing?</span>
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
                  {isOpen ? <ChevronUp className="w-4 h-4 text-purple-600 dark:text-purple-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed font-normal pt-3 border-t border-slate-200 dark:border-slate-800">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
