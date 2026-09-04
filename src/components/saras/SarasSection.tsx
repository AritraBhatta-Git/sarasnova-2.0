"use client";

import React from "react";
import { Sparkles, CheckCircle2, ArrowRight, Users, DollarSign, MessageCircle, BarChart3 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SarasConversation } from "./SarasConversation";
import { SarasContextNode } from "./SarasContextNode";

export function SarasSection() {
  const features = [
    "Ask in English or Hinglish",
    "Instant answers from live business data",
    "Export charts, reports & insights",
    "Works on Web + WhatsApp",
  ];

  return (
    <section id="saras" className="py-20 md:py-28 relative bg-slate-950 text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT: Copy */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
              SARAS AI COPILOT
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ask SARAS. <br />
              <span className="gradient-text-purple-blue">Get answers.</span> <br />
              Take actions.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Your AI CFO understands your business, speaks plain English, and helps you take the right actions instantly.
            </p>

            <div className="space-y-3 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-purple-500/20 text-purple-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button href="#demo" variant="primary" size="lg" className="group shadow-xl shadow-purple-600/30">
                <span>Chat with SARAS Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* RIGHT: Laptop Screen containing SarasConversation with Floating Context Nodes */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            {/* Floating Context Nodes */}
            <div className="hidden md:block">
              <SarasContextNode
                title="Receivables Alert"
                value="₹48.07L Overdue"
                subtitle="5 Priority accounts"
                icon={<Users className="w-4 h-4 text-purple-400" />}
                color="purple"
                positionClass="absolute -top-6 -left-6 z-20"
              />

              <SarasContextNode
                title="Cash Runway"
                value="68 Days Available"
                subtitle="Healthy liquidity"
                icon={<DollarSign className="w-4 h-4 text-emerald-400" />}
                color="green"
                positionClass="absolute -top-6 -right-6 z-20"
              />

              <SarasContextNode
                title="Channel Sync"
                value="WhatsApp + Web"
                subtitle="Instant 2-way query"
                icon={<MessageCircle className="w-4 h-4 text-emerald-400" />}
                color="green"
                positionClass="absolute -bottom-6 -left-6 z-20"
              />

              <SarasContextNode
                title="Sales Intelligence"
                value="+408.2% Growth"
                subtitle="Live metrics"
                icon={<BarChart3 className="w-4 h-4 text-blue-400" />}
                color="blue"
                positionClass="absolute -bottom-6 -right-6 z-20"
              />
            </div>

            {/* Laptop UI Screen */}
            <div className="relative z-10 w-full">
              <SarasConversation />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
