"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function FoundingTeam() {
  const founders = [
    {
      name: "ANIKET JAISWAL",
      role: "Co-Founder & CEO",
      badge: "CHARTERED ACCOUNTANT | 7+ YEARS",
      image: "/images/aniket-jaiswal.png",
      bio: "A seasoned strategist with 7+ years at the world's leading Big 4 consultancies. Aniket ensures your business strategy is grounded and scaled through robust Financial Planning frameworks.",
    },
    {
      name: "VISESH JAISWAL",
      role: "Co-Founder & CTO",
      badge: "DATA SCIENTIST | 5+ YEARS",
      image: "/images/visesh-jaiswal.png",
      bio: "After years of refining data strategies in the USA, Visesh returned to India to solve the \"insight gap\" in domestic enterprises. He specializes in transforming complex data into actionable business intelligence.",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
      <Container size="xl" className="space-y-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <Badge variant="purple">FOUNDING LEADERSHIP</Badge>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white">
            A RARE CA + DATA-SCIENCE FOUNDING PAIR
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Bridging the gap between elite corporate finance and scalable technology
          </p>
        </div>

        {/* Founder Cards - 100% Uncropped Full Photograph Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl border border-slate-200 dark:border-purple-500/20 bg-white dark:bg-slate-900/90 p-5 sm:p-6 shadow-md dark:shadow-xl space-y-4 flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Uncropped Frame Container with object-contain */}
                <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] rounded-xl overflow-hidden bg-slate-900 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center p-2">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-contain object-center group-hover:scale-[1.01] transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Info & Typography */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
                      {founder.name}
                    </h3>
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                      {founder.role}
                    </span>
                  </div>

                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 text-[10px] font-bold uppercase tracking-wider border border-purple-200 dark:border-purple-800">
                      {founder.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal pt-1">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
