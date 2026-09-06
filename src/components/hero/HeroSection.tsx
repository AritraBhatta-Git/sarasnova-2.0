"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, RefreshCw, ShieldCheck, Users, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  const checkItems = [
    "Full Tally Integration",
    "WhatsApp Alerts",
    "Bank-grade Security",
  ];

  const trustItems = [
    {
      icon: <RefreshCw className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />,
      title: "Live Data Sync",
      subtitle: "Always up-to-date",
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />,
      title: "Bank-Level Security",
      subtitle: "Your data is safe",
    },
    {
      icon: <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />,
      title: "500+ Businesses",
      subtitle: "Trust SARASnova",
    },
    {
      icon: <MapPin className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />,
      title: "Made for India",
      subtitle: "From the ground up",
    },
  ];

  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      {/* Subtle Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-4 items-center">
          {/* LEFT SIDE: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 z-10">
            <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
              REAL-TIME BUSINESS INTELLIGENCE FOR GROWING ENTERPRISES
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] text-slate-900 dark:text-white">
              A financial brain <br />
              <span className="gradient-text-purple-blue">for your business</span> <br />
              Get clear decisions <br />
              <span className="gradient-text-purple-blue">in seconds</span>
            </h1>

            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-normal">
              Sarasnova syncs directly with your accounting software to monitor cash flow, track inventory health, recover overdue payments, and give you a daily operational pulse.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-1 sm:pt-2">
              <Button href="/contact" variant="primary" size="lg" className="group w-full sm:w-auto text-center justify-center">
                <span>Book a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Sub-CTA Checkmarks */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              {checkItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Compact Trust Indicators Strip */}
            <div className="pt-5 sm:pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {trustItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <div className="p-1.5 rounded-lg bg-white dark:bg-slate-950 shrink-0 border border-slate-200 dark:border-slate-800">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-slate-100">{item.title}</div>
                      <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Straight Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center pt-2 lg:pt-0">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
