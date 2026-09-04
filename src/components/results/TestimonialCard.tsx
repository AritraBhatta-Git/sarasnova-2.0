"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Building } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export function TestimonialCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="p-8 rounded-3xl border border-purple-500/20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden">
      {/* Quote Icon watermark */}
      <Quote className="absolute top-4 right-6 w-20 h-20 text-purple-500/10 dark:text-purple-400/10 pointer-events-none" />

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[...Array(current.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
        ))}
        <span className="ml-2 text-xs font-bold text-slate-700 dark:text-slate-300">
          5.0 Customer Rating
        </span>
      </div>

      {/* Quote Text */}
      <blockquote className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed italic">
        &ldquo;{current.quote}&rdquo;
      </blockquote>

      {/* Metric Impact Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-500/20">
        Impact: {current.metricHighlight}
      </div>

      {/* Author Details + Carousel Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-purple-500/15">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
            {current.avatar}
          </div>
          <div>
            <div className="font-extrabold text-sm text-slate-900 dark:text-white">
              {current.author}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="flex items-center gap-1">
                <Building className="w-3 h-3 text-purple-500" /> {current.company}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-purple-500" /> {current.location}
              </span>
            </div>
          </div>
        </div>

        {/* Carousel buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full border border-purple-500/20 text-slate-700 dark:text-slate-300 hover:bg-purple-500/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-semibold text-slate-400">
            {currentIndex + 1} / {testimonialsData.length}
          </span>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-full border border-purple-500/20 text-slate-700 dark:text-slate-300 hover:bg-purple-500/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
