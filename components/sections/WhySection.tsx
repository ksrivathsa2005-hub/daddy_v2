"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { pillars } from "@/lib/data";

export function WhySection() {
  const closingRef = useRef(null);
  const closingInView = useInView(closingRef, { once: true, margin: "-80px" });

  return (
    <section id="why" className="relative py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          label="Why This Wins"
          title="Architecture Wins."
          description="Not features. Not hype. Architecture. The foundation that compounds."
        />

        {/* Pillars Grid */}
        <StaggerContainer
          stagger={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24"
        >
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="group relative p-5 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 h-full">
                <span className="text-3xl mb-4 block">{pillar.icon}</span>
                <h3 className="font-display font-bold text-white text-lg mb-2">
                  {pillar.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {pillar.description}
                </p>

                <div className="absolute inset-0 rounded-2xl bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Closing Statement */}
        <div ref={closingRef} className="max-w-4xl mx-auto text-center py-10 sm:py-16 lg:py-24">
          <div className="space-y-2 sm:space-y-4">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={closingInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-display text-headline text-text-secondary"
              >
                I am not here to build a website.
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={closingInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-display text-headline text-white"
              >
                I am here to build a scalable
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={closingInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                className="font-display text-headline bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent"
              >
                food-tech ecosystem.
              </motion.p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
