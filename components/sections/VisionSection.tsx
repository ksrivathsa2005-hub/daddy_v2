"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { brands, expansionTimeline } from "@/lib/data";

export function VisionSection() {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="relative py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          label="The Vision"
          title="A Multi-Brand, Multi-Country Food Platform."
          description="Six distinct brands, one unified platform. Each brand optimized for its market, powered by shared infrastructure."
        />

        {/* Brand Cards Grid */}
        <StaggerContainer
          stagger={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-16 sm:mb-24"
        >
          {brands.map((brand) => (
            <StaggerItem key={brand.number}>
              <div className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 h-full">
                {/* Number */}
                <span className="text-text-tertiary text-sm font-mono mb-4 block">
                  {brand.number}
                </span>
                {/* Icon */}
                <span className="text-3xl mb-3 block">{brand.icon}</span>
                {/* Name */}
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  {brand.name}
                </h3>
                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {brand.description}
                </p>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Expansion Timeline */}
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-display text-title text-white mb-3">
              Global Expansion Roadmap
            </h3>
            <p className="text-text-secondary text-base sm:text-lg">
              From two countries to six in three years.
            </p>
          </div>
        </ScrollReveal>

        <div ref={timelineRef} className="relative">
          {/* Timeline line — desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-white/[0.08] -translate-y-1/2">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={timelineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-accent/60 via-accent to-accent/60 origin-left"
            />
          </div>

          {/* Timeline line — mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-6 w-px bg-white/[0.08]">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="absolute inset-0 bg-gradient-to-b from-accent/60 via-accent to-accent/60 origin-top"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 relative">
            {expansionTimeline.map((node, i) => (
              <motion.div
                key={node.year}
                initial={{ opacity: 0, y: 30 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className="relative pl-16 lg:pl-0 lg:text-center"
              >
                {/* Node dot */}
                <div className="absolute left-4 lg:left-1/2 top-0 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-5 h-5 rounded-full border-2 border-accent bg-background flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="lg:pt-14">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent mb-3">
                    {node.year}
                  </span>
                  <h4 className="font-display font-bold text-white text-xl mb-2">
                    {node.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {node.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
