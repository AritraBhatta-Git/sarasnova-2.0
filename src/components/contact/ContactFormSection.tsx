"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, Globe, MapPin, ArrowRight, CheckCircle2, ShieldCheck, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    lookingFor: "Full AI CFO Platform Demo",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const steps = [
    { num: "01", title: "Tell us about your business", desc: "Share your Tally ledger volume & operational goals." },
    { num: "02", title: "See SARASnova in action", desc: "Interactive 1-on-1 walkthrough with sample data." },
    { num: "03", title: "Decide with clarity", desc: "Get transparent plan pricing & zero-downtime setup." },
  ];

  return (
    <section className="py-12 pb-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Container size="xl" className="space-y-16">
        {/* 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Official Company Details & Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-purple-500/30 bg-white dark:bg-slate-900/90 space-y-6 shadow-lg dark:shadow-2xl">
              <div>
                <div className="text-[10px] font-black uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Company Identity
                </div>
                <h2 className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  SARASnova Insights Private Limited
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Brand: <strong className="text-slate-800 dark:text-slate-200">SARASnova</strong> • Sector: <strong className="text-slate-800 dark:text-slate-200">MSME Enablement / AI</strong>
                </p>
              </div>

              <div className="space-y-3.5 text-xs font-semibold pt-2 border-t border-slate-200 dark:border-slate-800">
                {/* Website */}
                <a
                  href="https://www.sarasnova.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-colors group"
                >
                  <div className="p-2 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Website</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                      www.sarasnova.com
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@sarasnova.com"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-colors group"
                >
                  <div className="p-2 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Email Us</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      info@sarasnova.com
                    </div>
                  </div>
                </a>

                {/* Mobile */}
                <a
                  href="tel:+918961631650"
                  className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-purple-500/50 transition-colors group"
                >
                  <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase">Company Mobile</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      +91 8961631650
                    </div>
                  </div>
                </a>

                {/* Business Locations */}
                <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-1">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span>Business Presence / Locations</span>
                  </div>
                  <div className="text-xs font-extrabold text-slate-900 dark:text-white pl-6">
                    Bihar • Jharkhand • Kolkata
                  </div>
                </div>

                {/* Direct WhatsApp Button */}
                <div className="pt-2">
                  <Button
                    href="https://wa.me/918961631650"
                    variant="whatsapp"
                    size="md"
                    className="w-full justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Chat on WhatsApp (+91 8961631650)</span>
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Bank-grade security &amp; strict confidentiality guaranteed.</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact & Demo Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-purple-500/30 bg-white dark:bg-slate-900/90 backdrop-blur-2xl shadow-xl dark:shadow-2xl space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Request a Demo / Talk to SARASnova</h2>
              <p className="text-xs text-slate-500 dark:text-slate-300 mt-1">
                Fill out your business details below and our financial intelligence team will contact you promptly.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/50 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">Demo Request Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto">
                  Thank you, <span className="text-purple-600 dark:text-purple-300 font-bold">{formData.name}</span>. Our business intelligence team will get back to you at <span className="text-purple-600 dark:text-purple-300 font-bold">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline pt-2 inline-block"
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 dark:text-slate-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 dark:text-slate-300">Business / Company Name</label>
                    <input
                      type="text"
                      placeholder="Sharma Textiles Pvt Ltd"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 dark:text-slate-300">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="rajesh@sharmatextiles.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-700 dark:text-slate-300">Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300">What would you like to discuss?</label>
                  <select
                    value={formData.lookingFor}
                    onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:border-purple-500 transition-colors"
                  >
                    <option>Full AI CFO Platform Demo</option>
                    <option>Tier I - Core AI Plan (₹10,000/mo)</option>
                    <option>Tier II - AI Strategy Plan (₹15,000/mo)</option>
                    <option>Tier III - Virtual CFO Plan (₹20,000/mo)</option>
                    <option>Tier IV - Custom Enterprise Plan</option>
                    <option>Tally Technical Data Integration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300">Message / Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business, Tally ledgers, or specific financial intelligence requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full justify-center gap-2">
                  <span>Request a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* What Happens Next Section */}
        <div className="space-y-8 pt-8 border-t border-purple-500/15">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">What happens next?</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Our simple 3-step consultation process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-purple-500/20 space-y-3 relative shadow-md dark:shadow-none">
                <div className="text-xs font-black px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 w-fit border border-purple-200 dark:border-purple-500/30">
                  {step.num}
                </div>
                <h4 className="text-base font-black text-slate-900 dark:text-white">{step.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
