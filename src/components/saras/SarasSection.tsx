"use client";

import React from "react";
import { Sparkles, ArrowRight, Zap, Search, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SarasConversation } from "./SarasConversation";

export function SarasSection() {
  const valueProps = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Answers in Seconds, Not Hours",
      description:
        "Type or speak your question naturally. Saras parses your sales, accounts, and inventory data instantly—no spreadsheet formulas or ERP navigation needed.",
    },
    {
      icon: <Search className="w-5 h-5 text-indigo-500" />,
      title: "Root-Cause Analysis, Not Just Raw Numbers",
      description:
        "Ask not just what happened, but why. If sales dipped or cash is locked, Saras flags the specific client, product line, or overdue cycle causing the variance.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
      title: "Available 24/7 Across Devices & WhatsApp",
      description:
        "Get strategic clarity while traveling, before client meetings, or late at night without opening a laptop.",
    },
  ];

  return (
    <section id="saras" className="py-12 md:py-20 relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors overflow-hidden">
      <Container size="xl">
        {/* SECTION HEADER INTRO */}
        <div className="max-w-3xl mb-8 md:mb-10 space-y-3">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            SARAS AI COPILOT
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            Just ask anything about your <br />
            <span className="gradient-text-purple-blue">business from SARAS</span>
          </h2>
        </div>

        {/* TWO-COLUMN PRODUCT SHOWCASE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: 42% WIDTH EDITORIAL VALUE PROPOSITIONS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm transition-all hover:border-indigo-500/30">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 mt-0.5">
                    {prop.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Button href="/contact" variant="primary" size="lg" className="group">
                <span>Chat with SARAS →</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: 58% WIDTH MONITOR-STYLE INTERACTIVE SARAS AI COPILOT INTERFACE */}
          <div className="lg:col-span-7 relative w-full flex justify-center">
            <SarasConversation />
          </div>
        </div>
      </Container>
    </section>
  );
}
