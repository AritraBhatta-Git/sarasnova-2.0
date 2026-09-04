"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Sparkles, Menu } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { navItems } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-purple-500/15 py-3 shadow-md dark:shadow-lg dark:shadow-purple-950/20"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LEFT: Official Sarasnova Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-xl bg-slate-900 border border-purple-500/30 p-0.5 overflow-hidden shadow-md group-hover:scale-105 transition-transform">
              <Image
                src="/images/sarasnova-logo.png"
                alt="Sarasnova Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                Sarasnova <span className="text-purple-600 dark:text-purple-400">2.0</span>
              </span>
            </div>
          </Link>

          {/* CENTER: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/40 p-1.5 rounded-full border border-purple-500/15 backdrop-blur-md">
            {navItems.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdownItems && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white transition-colors rounded-full hover:bg-purple-500/10 flex items-center gap-1"
                >
                  <span>{link.label}</span>
                  {link.dropdownItems && <ChevronDown className="w-3 h-3 opacity-60" />}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdownItems && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 w-60 rounded-2xl bg-white dark:bg-slate-900/95 border border-purple-500/20 shadow-2xl backdrop-blur-xl p-2 z-50 space-y-1">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block p-2.5 rounded-xl hover:bg-purple-500/10 transition-colors"
                      >
                        <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{item.label}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT: [Theme Toggle] [Login] [Book a Demo] */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/login"
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-white transition-colors"
            >
              Login
            </Link>

            <Button href="/contact" variant="primary" size="sm" className="gap-1.5 shadow-md shadow-purple-600/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book a Demo</span>
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl border border-purple-500/20 text-slate-700 dark:text-slate-300 hover:bg-purple-500/10"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
