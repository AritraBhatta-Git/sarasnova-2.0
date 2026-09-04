"use client";

import React from "react";
import { CheckCircle2, Sparkles, MessageCircle, BarChart3, Users, DollarSign, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SaresChat } from "./SaresChat";
import { SaresContextNode } from "./SaresContextNode";

export function SaresSection() {
  const sarasFeatures = [
    "Ask in English or Hinglish",
    "Instant answers from live business data",
    "Export charts, reports & insights",
    "Works on Web + WhatsApp",
  ];

  return (
    <section id="saras" className="py-20 md:py-28 relative overflow-hidden bg-slate-50 dark:bg-slate-900/20 text-slate-900 dark:text-white transition-colors">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT SIDE CONTENT */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
              SARAS AI COPILOT
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Ask SARAS. <br />
              <span className="gradient-text-purple-blue">Get answers.</span> <br />
              Take actions.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Your AI CFO understands your business, speaks plain English, and helps you take the right actions instantly without digging through complex reports.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {sarasFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="/contact" variant="primary" size="lg" className="group">
                <span>Chat with SARAS Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button href="#features" variant="ghost" size="lg">
                See How It Works →
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE CONTEXTUAL INTELLIGENCE INTERFACE */}
          <div className="lg:col-span-7 relative flex flex-col items-center justify-center">
            {/* Desktop Floating Context Nodes around Central Chat */}
            <div className="hidden md:block">
              <SaresContextNode
                title="Receivables Alert"
                value="₹48.07L Overdue"
                subtitle="5 Priority accounts"
                icon={<Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />}
                color="purple"
                positionClass="absolute -top-6 -left-6 z-20"
              />

              <SaresContextNode
                title="Cash Runway"
                value="68 Days Available"
                subtitle="Healthy liquidity"
                icon={<DollarSign className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                color="green"
                positionClass="absolute -top-6 -right-6 z-20"
              />

              <SaresContextNode
                title="Channel Sync"
                value="WhatsApp + Web"
                subtitle="Instant 2-way query"
                icon={<MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
                color="green"
                positionClass="absolute -bottom-6 -left-6 z-20"
              />

              <SaresContextNode
                title="Sales Intelligence"
                value="+408.2% Growth"
                subtitle="ABC Electronics"
                icon={<BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                color="blue"
                positionClass="absolute -bottom-6 -right-6 z-20"
              />
            </div>

            {/* Central SARAS Chat */}
            <div className="relative z-10 w-full">
              <SaresChat />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
