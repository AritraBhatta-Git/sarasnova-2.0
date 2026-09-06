"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Mail, Phone, Building2, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function CompanyIntro() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Company Identity Story */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="purple" icon={<Building2 className="w-3.5 h-3.5" />}>
              CORPORATE IDENTITY
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              The Company Behind <br className="hidden sm:inline" />
              <span className="gradient-text-purple-blue">SARASnova</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
              <strong>SARASnova Insights Private Limited</strong> is an AI-driven financial intelligence company dedicated to empowering Indian business owners with instant clarity over their Tally ledgers, cash flows, and working capital.
            </p>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-purple-500/20 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs font-semibold">
                <div className="text-slate-400 uppercase text-[10px] font-bold">Business Presence &amp; Regional Operations</div>
                <div className="text-slate-900 dark:text-white font-extrabold text-sm mt-0.5">
                  Bihar • Jharkhand • Kolkata
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Corporate Fact Sheet Box */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 dark:border-purple-500/30 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xl relative overflow-hidden space-y-6"
            >
              <div className="space-y-1">
                <div className="text-[10px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Official Entity Information
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  SARASnova Insights Pvt Ltd
                </h3>
              </div>

              <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-semibold">
                {/* Brand */}
                <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Brand Name</span>
                  <span className="text-slate-900 dark:text-white font-bold">SARASnova</span>
                </div>

                {/* Sector */}
                <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/60">
                  <span className="text-slate-500 dark:text-slate-400">Sector</span>
                  <span className="text-purple-600 dark:text-purple-400 font-bold">MSME Enablement / AI</span>
                </div>

                {/* Website */}
                <a
                  href="https://www.sarasnova.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/60 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
                >
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-purple-500" /> Website
                  </span>
                  <span className="text-slate-900 dark:text-white font-bold group-hover:underline flex items-center gap-1">
                    www.sarasnova.com <ArrowRight className="w-3 h-3" />
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@sarasnova.com"
                  className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800/60 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-indigo-500" /> Email
                  </span>
                  <span className="text-slate-900 dark:text-white font-bold group-hover:underline">
                    info@sarasnova.com
                  </span>
                </a>

                {/* Mobile */}
                <a
                  href="tel:+918961631650"
                  className="flex items-center justify-between py-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
                >
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-500" /> Mobile
                  </span>
                  <span className="text-slate-900 dark:text-white font-bold group-hover:underline">
                    +91 8961631650
                  </span>
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>Enterprise compliance &amp; bank-grade encryption standard.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
