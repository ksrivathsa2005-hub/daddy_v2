"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { CountUp } from "@/components/animations/CountUp";
import { capitalBreakdown, capitalHighlights } from "@/lib/data";

export function CapitalSection() {
  return (
    <section id="capital" className="relative py-16 sm:py-24 lg:py-32 bg-surface/30">
      <Container>
        <SectionHeading label="Capital Efficiency" title="" />

        {/* Hero number */}
        <ScrollReveal className="text-center mb-10 sm:mb-16">
          <div className="mb-3 sm:mb-4">
            <span className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-display font-bold text-white">
              ₹<CountUp target={3.75} suffix="L" duration={2.5} decimals={2} />
            </span>
          </div>
          <p className="text-base sm:text-xl lg:text-2xl text-text-secondary max-w-xl mx-auto">
            to launch a multi-country food platform.
          </p>
        </ScrollReveal>

        {/* Breakdown cards */}
        <StaggerContainer
          stagger={0.1}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16"
        >
          {capitalBreakdown.map((item) => (
            <StaggerItem key={item.title}>
              <div className="relative p-5 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 text-center">
                <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">{item.icon}</span>
                <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-1 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Highlights */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            {capitalHighlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl border border-accent/20 bg-accent/[0.04]"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-white">{highlight}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
