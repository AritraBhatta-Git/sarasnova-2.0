"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Sparkles, MessageCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function DataFlowSection() {
  const signalNodes = [
    { title: "Tally Vouchers & Ledgers", subtitle: "Real-time sync every 15m", icon: Database, color: "text-purple-600 dark:text-purple-400" },
    { title: "Bank Statements & OD Limits", subtitle: "Automated liquidity tracking", icon: Cpu, color: "text-blue-600 dark:text-blue-400" },
    { title: "Customer Receivables & Ageing", subtitle: "Due date tracking > 30-90d", icon: AlertTriangle, color: "text-amber-600 dark:text-amber-400" },
    { title: "WhatsApp & Executive Briefing", subtitle: "Instant morning notifications", icon: MessageCircle, color: "text-emerald-600 dark:text-emerald-400" },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden border-t border-purple-500/10 transition-colors">
      <Container size="xl" className="space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="blue" icon={<Sparkles className="w-3.5 h-3.5" />}>
            INTELLIGENCE ARCHITECTURE
          </Badge>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How business signals connect into <br />
            <span className="gradient-text-purple-blue">Sarasnova AI</span>
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 font-normal">
            Instead of separate disconnected reports, Sarasnova fuses accounting data, banking limits, receivables ageing, and stock velocity into a unified intelligence feed.
          </p>
        </div>

        {/* Signal Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {signalNodes.map((node, idx) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-purple-500/20 backdrop-blur-xl space-y-3 relative group hover:border-purple-500/50 transition-all shadow-md dark:shadow-none"
              >
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 w-fit border border-slate-200 dark:border-slate-800">
                  <Icon className={`w-5 h-5 ${node.color}`} />
                </div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">{node.title}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{node.subtitle}</div>
                
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-purple-600 dark:text-purple-400">
                    <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
