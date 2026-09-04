"use client";

import React from "react";
import { ArrowRight, MessageCircle, Sparkles, RefreshCw, ShieldCheck, Users, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "./PhoneMockup";

export function HeroSection() {
  const trustItems = [
    {
      icon: <RefreshCw className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />,
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
      subtitle: "Trust Sarasnova",
    },
    {
      icon: <MapPin className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />,
      title: "Made for India",
      subtitle: "From the ground up",
    },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      {/* Subtle Visual Atmosphere Behind Phone & Hero */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
              AI CFO FOR INDIAN BUSINESSES
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
              The AI CFO <br />
              that <span className="gradient-text-purple-blue">runs numbers.</span> <br />
              So you can run <br />
              <span className="gradient-text-purple-blue">your business.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-normal">
              Sarasnova 2.0 connects with Tally, reads your data in real-time, and turns it into clarity, insights, and action—every single day.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
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

            {/* Compact Trust Indicators Strip */}
            <div className="pt-6 border-t border-purple-500/15">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-purple-500/10">
                    <div className="p-1.5 rounded-lg bg-white dark:bg-slate-950 shrink-0 border border-slate-200 dark:border-slate-800">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{item.title}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">{item.subtitle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ONE Dominant Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <PhoneMockup />
          </div>
        </div>
      </Container>
    </section>
  );
}
