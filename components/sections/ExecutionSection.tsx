"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { caseStudies } from "@/lib/data";

export function ExecutionSection() {
  return (
    <section id="execution" className="relative py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          label="Proven Execution"
          title="Not Theoretical. Shipped. Live. Real."
          description="Every system we've built has been deployed, used, and validated in production."
        />

        <StaggerContainer
          stagger={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {caseStudies.map((study) => (
            <StaggerItem key={study.title}>
              <div className="group relative h-full p-5 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300">
                {/* Accent top border */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

                {/* Badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent mb-5">
                  {study.badge}
                </span>

                {/* Title */}
                <h3 className="font-display font-bold text-white text-lg sm:text-xl mb-3">
                  {study.title}
                </h3>

                {/* Metric */}
                <p className="text-xl sm:text-2xl font-display font-bold text-white/90 mb-3 sm:mb-4">
                  {study.metric}
                </p>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed">
                  {study.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
