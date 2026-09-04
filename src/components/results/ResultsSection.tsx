"use client";

import React, { useState } from "react";
import { Sparkles, Zap, ShieldCheck, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function ResultsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Sarasnova 2.0 changed the way we manage our business. Cash flow visibility improved, overdue reduced, and our decision speed is now better than ever.",
      author: "Nikhil Patel",
      role: "Finance Head • Manufacturing",
      avatar: "NP",
      impact: "35% reduction in overdue receivables",
    },
    {
      quote:
        "Every morning I get my Daily Pulse on WhatsApp. I no longer ask accountants for basic sales and bank balance figures.",
      author: "Rajesh Sharma",
      role: "Founder • Sharma Textiles",
      avatar: "RS",
      impact: "Saved 12+ hours weekly on financial reporting",
    },
    {
      quote:
        "SARAS AI identified ₹48L in dead stock that was sitting in our warehouse for 120+ days. We liquidated it within weeks.",
      author: "Anand Verma",
      role: "Managing Director • Anand Traders",
      avatar: "AV",
      impact: "Recovered ₹48L trapped inventory capital",
    },
  ];

  return (
    <section id="results" className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <Container size="xl" className="space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
            RESULTS THAT MATTER
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            See your business grow. <br />
            <span className="gradient-text-purple-blue">Confidently.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Join 500+ Indian businesses who trust Sarasnova 2.0 to manage numbers, reduce risk and make faster decisions every day.
          </p>
        </div>

        {/* Impact Panel + Testimonial Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT PANEL: Business Impact Overview Dashboard */}
          <div className="lg:col-span-7 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-purple-500/25 bg-white dark:bg-slate-900/90 backdrop-blur-2xl shadow-xl dark:shadow-2xl dark:shadow-purple-950/40 flex flex-col justify-between space-y-6">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">Business Impact Overview</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Real results from businesses using Sarasnova 2.0</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  ● Live Sync
                </span>
                <select className="bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-2.5 py-1 text-xs text-slate-700 dark:text-slate-300 font-semibold outline-none">
                  <option>Last 12 Months</option>
                  <option>Last 6 Months</option>
                </select>
              </div>
            </div>

            {/* 3 Top Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-600/30 text-purple-600 dark:text-purple-400 font-bold shrink-0">
                  ₹
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 dark:text-white">₹250Cr+</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Transactions Analyzed</div>
                  <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">↑ 28% vs last year</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-600/30 text-blue-600 dark:text-blue-400 shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 dark:text-white">30%</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Faster Decision Making</div>
                  <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">↑ Proven Impact</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-600/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 dark:text-white">95%</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Better Control &amp; Clarity</div>
                  <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">↑ Customer Rating</div>
                </div>
              </div>
            </div>

            {/* Business Performance Trend Chart */}
            <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900 dark:text-white">Business Performance Trend</span>
                <div className="flex items-center gap-4 text-[10px] font-semibold">
                  <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                    <span className="w-2 h-0.5 bg-purple-500 rounded-full" /> Revenue
                  </span>
                  <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400">
                    <span className="w-2 h-0.5 bg-cyan-400 rounded-full" /> Cash Flow
                  </span>
                </div>
              </div>

              {/* Dual-Line SVG Chart */}
              <div className="h-36 w-full relative pt-2">
                {/* Tooltip for July 2025 */}
                <div className="absolute top-2 right-1/4 p-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-purple-500/30 shadow-xl text-[10px] space-y-0.5 z-20">
                  <div className="text-slate-500 dark:text-slate-400 font-bold">July 2025</div>
                  <div className="text-purple-600 dark:text-purple-300 font-semibold">Revenue: ₹3.42Cr</div>
                  <div className="text-cyan-600 dark:text-cyan-300 font-semibold">Cash Flow: ₹2.81Cr</div>
                </div>

                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120">
                  <defs>
                    <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#A855F7" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Revenue Area & Line */}
                  <path d="M 0,90 Q 70,60 140,75 T 280,30 T 400,20 L 400,120 L 0,120 Z" fill="url(#revenueGrad)" />
                  <path d="M 0,90 Q 70,60 140,75 T 280,30 T 400,20" fill="none" stroke="#A855F7" strokeWidth="2.5" />

                  {/* Cash Flow Line */}
                  <path d="M 0,100 Q 70,75 140,90 T 280,50 T 400,40" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="3 3" />
                </svg>
              </div>

              <div className="flex justify-between text-[9px] text-slate-500 font-semibold pt-1 border-t border-slate-200 dark:border-slate-800/80">
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
              </div>
            </div>

            <div className="text-[10px] text-slate-500 font-medium">
              All metrics are <span className="text-purple-600 dark:text-purple-400 font-semibold">illustrative/demo</span> for marketing purposes.
            </div>
          </div>

          {/* RIGHT PANEL: Testimonial Panel */}
          <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-purple-500/25 bg-white dark:bg-slate-900/90 backdrop-blur-2xl shadow-xl dark:shadow-2xl dark:shadow-purple-950/40 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Rating & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200 ml-1.5">5.0 Customer Rating</span>
                </div>
                <div className="text-3xl font-serif text-purple-500/40 select-none">“</div>
              </div>

              {/* Quote text */}
              <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium italic">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>

              {/* Impact Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-bold">
                Impact: {testimonials[activeTestimonial].impact}
              </div>
            </div>

            {/* Author Footer & Controls */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-extrabold flex items-center justify-center text-xs shadow-md">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white">{testimonials[activeTestimonial].author}</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>

              {/* Pagination controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                  {activeTestimonial + 1} / {testimonials.length}
                </span>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* TRUSTED BY STRIP */}
        <div className="pt-6 text-center space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Trusted by growing businesses across India
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            <div className="flex items-center gap-1">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-purple-600 border border-white dark:border-slate-950 flex items-center justify-center text-[9px] font-bold text-white">A</div>
                <div className="w-7 h-7 rounded-full bg-blue-600 border border-white dark:border-slate-950 flex items-center justify-center text-[9px] font-bold text-white">S</div>
                <div className="w-7 h-7 rounded-full bg-emerald-600 border border-white dark:border-slate-950 flex items-center justify-center text-[9px] font-bold text-white">M</div>
              </div>
              <span className="text-xs font-bold text-slate-900 dark:text-white ml-2">+500 Businesses</span>
            </div>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Tally <span className="text-[10px] text-slate-500 font-medium">POWER OF SIMPLICITY</span></span>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Zoho Books</span>
            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Busy Accounting</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
