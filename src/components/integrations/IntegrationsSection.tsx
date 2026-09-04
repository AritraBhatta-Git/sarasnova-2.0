"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Database, MessageCircle, Mail, FileSpreadsheet, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function IntegrationsSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="integrations" className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <Container size="xl" className="space-y-12">
        {/* Top Eyebrow */}
        <div className="text-center">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            EASY INTEGRATIONS
          </Badge>
        </div>

        {/* Desktop 3-Column Layout / Mobile Stacked Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT COLUMN: Heading & Supporting Text */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              Seamless integrations. <br />
              <span className="gradient-text-purple-blue">Stronger decisions.</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              Sarasnova 2.0 plugs directly into your existing tools and lets you turn everything into one intelligent business view.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 pt-2">
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Lock className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> Secure Sync
              </span>
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> No Manual Entry
              </span>
              <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Bank-grade Security
              </span>
            </div>
          </div>

          {/* CENTER COLUMN: Central Sarasnova Core & Integration Nodes */}
          <div
            className="lg:col-span-5 relative min-h-[340px] flex items-center justify-center py-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* SVG Connecting Vector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-purple-400/40 dark:stroke-purple-500/30" strokeWidth="1.5" fill="none">
              {/* Tally to Core */}
              <line x1="20%" y1="20%" x2="50%" y2="50%" strokeDasharray="4 4" />
              {/* Email to Core */}
              <line x1="20%" y1="80%" x2="50%" y2="50%" strokeDasharray="4 4" />
              {/* WhatsApp to Core */}
              <line x1="80%" y1="20%" x2="50%" y2="50%" strokeDasharray="4 4" />
              {/* Excel to Core */}
              <line x1="80%" y1="80%" x2="50%" y2="50%" strokeDasharray="4 4" />
            </svg>

            {/* Central Sarasnova Core */}
            <motion.div
              animate={{ scale: isHovered ? 1.05 : [1, 1.03, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20 w-36 h-36 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-purple-500 p-0.5 shadow-xl dark:shadow-2xl dark:shadow-purple-600/40 border border-purple-400/30"
            >
              <div className="w-full h-full rounded-[22px] bg-slate-900 dark:bg-slate-950 p-3 flex flex-col items-center justify-center text-center space-y-1.5">
                <div className="w-10 h-10 rounded-xl bg-slate-950 dark:bg-slate-900 border border-purple-500/40 p-1 flex items-center justify-center overflow-hidden shadow-md">
                  <Image
                    src="/images/sarasnova-logo.png"
                    alt="Sarasnova Logo"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="font-extrabold text-xs text-white tracking-wider">SARASNOVA</div>
                <div className="text-[9px] text-purple-300 font-medium">Intelligence Core</div>
              </div>
            </motion.div>

            {/* Integration Nodes */}
            {/* Top Left: TallyPrime */}
            <div className="absolute top-2 left-0 sm:left-4 z-20 p-2.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-purple-500/30 shadow-lg dark:shadow-xl flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-600 text-white font-bold shrink-0">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">TallyPrime</div>
                <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">Live 2-Way Sync</div>
              </div>
            </div>

            {/* Bottom Left: Email / PDF */}
            <div className="absolute bottom-2 left-0 sm:left-4 z-20 p-2.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-blue-500/30 shadow-lg dark:shadow-xl flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-600 text-white font-bold shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Email / PDF</div>
                <div className="text-[9px] text-blue-600 dark:text-blue-400 font-semibold">Daily Briefing</div>
              </div>
            </div>

            {/* Top Right: WhatsApp */}
            <div className="absolute top-2 right-0 sm:right-4 z-20 p-2.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/30 shadow-lg dark:shadow-xl flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-600 text-white font-bold shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">WhatsApp</div>
                <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">Instant Alerts</div>
              </div>
            </div>

            {/* Bottom Right: Excel / CSV */}
            <div className="absolute bottom-2 right-0 sm:right-4 z-20 p-2.5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-emerald-500/30 shadow-lg dark:shadow-xl flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-500 text-white font-bold shrink-0">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">Excel / CSV</div>
                <div className="text-[9px] text-slate-500 dark:text-slate-400 font-medium">Export Ready</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Data Flow Statement & Security Indicators */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-snug">
                Your data flows in. <br />
                Intelligence flows out. <br />
                <span className="gradient-text-purple-blue">Decisions get better.</span>
              </h3>
            </div>

            <div className="pt-2 space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Secure Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>No Manual Entry</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Bank-grade Security</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
