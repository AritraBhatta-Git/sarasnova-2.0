import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <Container size="sm" className="w-full max-w-md p-8 rounded-3xl bg-slate-900 border border-purple-500/20 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center font-bold text-white text-lg">
              S
            </div>
            <span className="font-extrabold text-xl">Sarasnova 2.0</span>
          </Link>
          <h2 className="text-2xl font-bold">Sign in to your AI CFO</h2>
          <p className="text-xs text-slate-400">Enter your credentials or phone number to access your console</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Mobile / Email</label>
            <input
              type="text"
              placeholder="e.g. +91 98765 43210 or rajesh@abc.com"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <Button type="button" variant="primary" className="w-full justify-center">
            Sign In
          </Button>
        </form>

        <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800">
          Don&apos;t have an account?{" "}
          <Link href="/#demo" className="text-purple-400 font-semibold hover:underline">
            Book a Demo
          </Link>
        </div>
      </Container>
    </div>
  );
}
