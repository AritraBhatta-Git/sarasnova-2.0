"use client";

import React from "react";
import { Database, MessageCircle, Mail, FileSpreadsheet, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function IntegrationShowcases() {
  return (
    <div id="integrations-list" className="space-y-20 py-12 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      {/* 1. TALLYPRIME INTEGRATION */}
      <section className="scroll-mt-24">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="purple" icon={<Database className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />}>
                NATIVE ACCOUNTING FOUNDATION
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                TallyPrime: Automatic, secure 2-way data sync.
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Connect your Tally desktop installation in under 3 minutes. Sarasnova syncs vouchers, sales ledgers, customer credit terms, and stock entries automatically in the background without affecting your computer performance.
              </p>

              <div className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>100% compatible with Tally ERP 9 &amp; TallyPrime</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Zero manual data entry or voucher export required</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Bank-grade 256-bit SSL encrypted data tunnel</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md p-6 rounded-3xl border border-slate-200 dark:border-purple-500/30 bg-white dark:bg-slate-900/95 space-y-4 shadow-xl dark:shadow-none">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                    <Database className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span>TallyPrime Sync Status</span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
                    Connected (Live)
                  </span>
                </div>

                <div className="space-y-2.5 text-xs font-semibold">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Last Synced</span>
                    <span className="text-slate-900 dark:text-white">Just now (15m cycle)</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Ledgers Synchronized</span>
                    <span className="text-purple-700 dark:text-purple-300">4,820 Vouchers</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex justify-between">
                    <span className="text-slate-500 dark:text-slate-400">Security Encryption</span>
                    <span className="text-emerald-700 dark:text-emerald-400">256-bit Bank Grade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. WHATSAPP INTEGRATION */}
      <section className="scroll-mt-24">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="w-full max-w-md p-6 rounded-3xl border border-slate-200 dark:border-emerald-500/30 bg-white dark:bg-slate-900/95 space-y-4 shadow-xl dark:shadow-none">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
                    <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>WhatsApp Intelligence Feed</span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30">
                    Official API
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold">📲 Sarasnova Alert</div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Sharma Textiles crossed 90 days overdue on invoice #INV-4081 (₹4.2L).
                  </p>
                  <button className="w-full py-2 rounded-xl bg-emerald-600 text-white font-bold text-[11px] mt-2 shadow-md">
                    Send WhatsApp Reminder PDF →
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <Badge variant="purple" icon={<MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />}>
                COMMUNICATION &amp; ACTION CHANNEL
              </Badge>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
                WhatsApp: Receive executive briefs &amp; send payment reminders.
              </h2>

              <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Turn WhatsApp into your financial command center. Receive your Daily Pulse morning summary, get urgent risk notifications, and collect overdue payments directly via interactive WhatsApp messages.
              </p>

              <div className="space-y-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>7:30 AM automated Daily Business Briefing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>1-click WhatsApp customer payment reminders</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Real-time critical risk &amp; margin drop alerts</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. EMAIL & PDF / EXCEL */}
      <section className="scroll-mt-24">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email / PDF */}
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-blue-500/30 bg-white dark:bg-slate-900/90 space-y-4 shadow-md dark:shadow-none">
              <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 w-fit">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Email &amp; Executive PDF Briefings</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Automated weekly and monthly PDF reports sent straight to your inbox, ready for board meetings or banker presentations.
              </p>
            </div>

            {/* Excel / CSV */}
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-emerald-500/30 bg-white dark:bg-slate-900/90 space-y-4 shadow-md dark:shadow-none">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 w-fit">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Excel &amp; CSV Custom Export</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Export clean, formatted financial data, ageing schedules, and product margin analyses directly into Excel for custom modeling.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
