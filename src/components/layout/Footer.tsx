import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 py-16">
      <Container size="xl" className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-600 text-white font-bold text-xl">
                S
              </div>
              <span className="font-extrabold text-xl text-slate-900 dark:text-white tracking-tight">
                SARAS<span className="gradient-text-purple-blue">nova</span>
              </span>
            </Link>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Bank-grade 256-bit SSL encryption</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Product Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/features" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Features &amp; Modules
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Solutions for SMBs
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Tally &amp; WhatsApp Integrations
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/#saras" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Ask SARAS AI Copilot
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-slate-100">
              Company &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  About SARASnova
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright strip */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} SARASnova AI Inc. All rights reserved. Made for Indian Businesses 🇮🇳
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/contact" className="hover:underline">
              Support
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
