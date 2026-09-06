"use client";

import React from "react";
import Link from "next/link";
import { X, ChevronRight, MessageCircle, Sparkles } from "lucide-react";
import { navItems } from "@/data/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 shadow-xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                SARAS<span className="gradient-text-purple-blue">nova</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-2 text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                {item.dropdownItems && (
                  <div className="ml-3 pl-3 border-l border-slate-200 dark:border-slate-800 space-y-2 mt-1">
                    {item.dropdownItems.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={onClose}
                        className="block text-xs text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 py-1"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* CTAs */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <Button
            href="/login"
            variant="secondary"
            className="w-full justify-center"
            onClick={onClose}
          >
            Login
          </Button>

          <Button
            href="/contact"
            variant="primary"
            className="w-full justify-center gap-2"
            onClick={onClose}
          >
            <Sparkles className="w-4 h-4" />
            Book a Demo
          </Button>

          <Button
            href="https://wa.me/919876543210"
            variant="whatsapp"
            className="w-full justify-center gap-2 text-xs"
            onClick={onClose}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp Support</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
