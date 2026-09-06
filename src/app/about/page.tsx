import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { FoundingTeam } from "@/components/about/FoundingTeam";
import { WhySarasnovaExists } from "@/components/about/WhySarasnovaExists";
import { DataToDecision } from "@/components/about/DataToDecision";
import { BuiltForIndianSMBs } from "@/components/about/BuiltForIndianSMBs";
import { WhatWeBelieve } from "@/components/about/WhatWeBelieve";
import { SarasnovaDifference } from "@/components/about/SarasnovaDifference";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | SARASnova — AI Financial Intelligence for India",
  description:
    "Learn about SARASnova Insights Private Limited, our mission, core philosophy, and our rare CA + Data-Science founding pair building financial intelligence for Indian enterprises.",
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors selection:bg-purple-500 selection:text-white">
      {/* 1. Hero / Mission & Vision + Interactive UI Pipeline */}
      <AboutHero />

      {/* 2. Founding Leadership Section (Aniket & Visesh Jaiswal) */}
      <FoundingTeam />

      {/* 4. Why SARASnova Exists (Old Reality → The Gap → SARASnova Reality) */}
      <WhySarasnovaExists />

      {/* 5. From Data to Decision (Signature Architecture Stage) */}
      <DataToDecision />

      {/* 6. Built for How Indian Businesses Actually Work (Tally & WhatsApp Alignment) */}
      <BuiltForIndianSMBs />

      {/* 7. What We Believe (Company Manifesto & 4 Principles) */}
      <WhatWeBelieve />

      {/* 8. The SARASnova Difference & Vision */}
      <SarasnovaDifference />

      {/* 9. Final Closing CTA */}
      <AboutCTA />
    </div>
  );
}
