import React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { WhySarasnovaExists } from "@/components/about/WhySarasnovaExists";
import { WhatWeBelieve } from "@/components/about/WhatWeBelieve";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Us | Sarasnova 2.0 — AI CFO for India",
  description:
    "Learn why Sarasnova 2.0 was built to bring instant financial visibility and intelligence to modern Indian businesses.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white selection:bg-purple-500 selection:text-white">
      <AboutHero />
      <WhySarasnovaExists />
      <WhatWeBelieve />
      <AboutCTA />
    </div>
  );
}
