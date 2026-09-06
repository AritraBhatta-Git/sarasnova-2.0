"use client";

import React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function PricingCard() {
  const tiers = [
    {
      tierLabel: "TIER I",
      name: "CORE AI",
      price: "₹10,000",
      period: "/ month",
      setup: "+ ₹50,000 one-time setup",
      target: "Early-stage MSMEs transitioning to automated digital operations.",
      deliverables:
        "Instant AI Chatbot (SARAS AI) access, seamless Tally/ERP data extraction, automated data cleaning, and secure cloud data warehousing.",
      isPopular: false,
      ctaText: "Choose Core AI",
    },
    {
      tierLabel: "TIER II",
      name: "AI STRATEGY",
      price: "₹15,000",
      period: "/ month",
      setup: "+ ₹50,000 one-time setup",
      target: "Mid-market businesses requiring proactive financial intelligence.",
      deliverables:
        "Includes Tier I, plus deep-dive bottleneck diagnostics, automated strategy generation, and continuous AI variance monitoring.",
      isPopular: true,
      ctaText: "Choose AI Strategy",
    },
    {
      tierLabel: "TIER III",
      name: "VIRTUAL CFO",
      price: "₹20,000",
      period: "/ month",
      setup: "+ ₹50,000 one-time setup",
      target: "High-growth enterprises needing executive-level financial oversight.",
      deliverables:
        "Includes Tier I & II, plus direct monthly strategy reviews backed by our 7 years of top-tier corporate finance and Chartered Accountant expertise.",
      isPopular: false,
      ctaText: "Choose Virtual CFO",
    },
    {
      tierLabel: "TIER IV",
      name: "ENTERPRISE",
      price: "Custom",
      period: "",
      setup: "Scoped to your business",
      target: "Large-scale companies with complex, highly fragmented data environments.",
      deliverables:
        "Full platform customization, bespoke ecosystem modules, custom automation workflows, and a dedicated analyst team.",
      isPopular: false,
      ctaText: "Contact Enterprise",
    },
  ];

  return (
    <section className="py-12 pb-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Container size="xl" className="space-y-10">
        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative transition-all duration-200 ${
                tier.isPopular
                  ? "bg-slate-900 text-white dark:bg-slate-900 border-2 border-indigo-500 shadow-2xl ring-1 ring-indigo-500/50"
                  : "bg-white dark:bg-slate-900/80 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-lg"
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full bg-indigo-600 text-white text-[10px] font-black tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div className="space-y-5">
                {/* Header */}
                <div>
                  <div className="text-[10px] font-black tracking-widest uppercase text-indigo-600 dark:text-indigo-400">
                    {tier.tierLabel}
                  </div>
                  <h3 className="text-xl font-black tracking-tight uppercase text-slate-900 dark:text-white mt-1">
                    {tier.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="space-y-1 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 italic">
                    {tier.setup}
                  </div>
                </div>

                {/* Target */}
                <div className="space-y-1">
                  <div className="text-[11px] font-extrabold uppercase text-slate-400">Target:</div>
                  <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                    {tier.target}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="space-y-1">
                  <div className="text-[11px] font-extrabold uppercase text-slate-400">Deliverables:</div>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
                    {tier.deliverables}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Button
                  href="/contact"
                  variant={tier.isPopular ? "primary" : "outline"}
                  size="md"
                  className="w-full justify-center text-xs font-bold"
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Economics Banner */}
        <div className="p-6 rounded-2xl bg-indigo-950 border border-indigo-800 text-indigo-100 space-y-2 text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-bold text-white">Blended ARPU (Annual Revenue Per User):</span>{" "}
              <span className="text-indigo-200">Targeting ~ ₹1.8 Lakhs per year</span>
            </div>
            <div>
              <span className="font-bold text-white">Target Economics:</span>{" "}
              <span className="text-emerald-400 font-semibold">75%+ gross margins</span> driven by automated software delivery and low marginal cost of replication
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
