"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
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
    { num: "01", title: "Tell us about your business", desc: "Share your Tally ledgers volume & current pain points." },
    { num: "02", title: "See Sarasnova in action", desc: "1-on-1 walkthrough with custom sample data." },
    { num: "03", title: "Decide with clarity", desc: "Get transparent pricing & instant setup plan." },
  ];

  return (
    <section className="py-12 pb-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Container size="xl" className="space-y-16">
        {/* 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-purple-500/30 bg-white dark:bg-slate-900/90 backdrop-blur-2xl shadow-xl dark:shadow-2xl space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Send an Enquiry</h2>
              <p className="text-xs text-slate-500 dark:text-slate-300">Fill out your details below and our team will get in touch.</p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-500/50 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">Enquiry Received!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Thank you, <span className="text-purple-600 dark:text-purple-300 font-bold">{formData.name}</span>. Our financial intelligence team will contact you at <span className="text-purple-600 dark:text-purple-300 font-bold">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline pt-2"
                >
                  Send another message
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
                    <label className="text-slate-700 dark:text-slate-300">Business Name</label>
                    <input
                      type="text"
                      placeholder="Sharma Textiles"
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
                    <label className="text-slate-700 dark:text-slate-300">Phone Number</label>
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
                  <label className="text-slate-700 dark:text-slate-300">What are you looking for?</label>
                  <select
                    value={formData.lookingFor}
                    onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white outline-none focus:border-purple-500 transition-colors"
                  >
                    <option>Full AI CFO Platform Demo</option>
                    <option>Tally Integration Technical Inquiries</option>
                    <option>Custom Enterprise Plan Pricing</option>
                    <option>Partner &amp; Accountant Inquiries</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 dark:text-slate-300">Message / Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business ledgers or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full justify-center gap-2">
                  <span>Send Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            )}
          </div>

          {/* RIGHT: Talk to Sarasnova Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl border border-slate-200 dark:border-purple-500/30 bg-white dark:bg-slate-900/90 space-y-6 shadow-md dark:shadow-none">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Talk to Sarasnova</h3>
              
              <div className="space-y-4 text-xs font-semibold">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-slate-900 dark:text-white font-bold">WhatsApp Direct</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">Fastest response for Indian business owners</div>
                    </div>
                  </div>
                  <Button href="https://wa.me/919876543210" variant="whatsapp" size="sm">
                    Chat
                  </Button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-slate-900 dark:text-white font-bold">Email Support</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">support@sarasnova.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Bank-grade security &amp; strict confidentiality guaranteed.</span>
              </div>
            </div>
          </div>
        </div>

        {/* What Happens Next Section */}
        <div className="space-y-8 pt-8 border-t border-purple-500/15">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">What happens next?</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Our simple 3-step consultation process.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-purple-500/20 space-y-3 relative shadow-md dark:shadow-none">
                <div className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 w-fit border border-purple-200 dark:border-purple-500/30">
                  {step.num}
                </div>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">{step.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
