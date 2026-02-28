"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { buildStages } from "@/lib/data";

export function BuildPlanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="build-plan" className="relative py-16 sm:py-24 lg:py-32 bg-surface/30">
      <Container>
        <SectionHeading
          label="90-Day Build Plan"
          title="Launch Ready — May 2026"
          description="Three focused sprints from zero to a production-grade, multi-country platform."
        />

        <div ref={ref} className="relative">
          {/* Progress line — desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-white/[0.08]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-accent origin-left"
            />
          </div>

          {/* Progress line — mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-4 sm:left-6 w-px bg-white/[0.08]">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute inset-0 bg-gradient-to-b from-accent via-accent-light to-accent origin-top"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {buildStages.map((stage, i) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                className="relative pl-12 sm:pl-16 lg:pl-0"
              >
                {/* Dot */}
                <div className="absolute left-2 sm:left-4 lg:left-8 top-0 lg:top-10 w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-accent bg-background flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
                </div>

                {/* Card */}
                <div className="lg:pt-20 p-4 sm:p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                  {/* Stage number */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="text-3xl sm:text-4xl font-display font-bold text-white/10">
                      {String(stage.stage).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-white text-lg">
                        {stage.title}
                      </h3>
                      <span className="text-accent text-sm font-medium">
                        {stage.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <ul className="space-y-2.5">
                    {stage.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
