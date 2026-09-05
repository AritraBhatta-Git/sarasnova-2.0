"use client";

import React from "react";
import { PhoneMockup } from "./PhoneMockup";

export function HeroVisual() {
  return (
    <div className="relative w-full py-4 flex items-center justify-center">
      {/* CENTER: Straight Smartphone Mockup */}
      <div className="relative z-10">
        <PhoneMockup />
      </div>
    </div>
  );
}
