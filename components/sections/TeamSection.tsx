"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { StaggerContainer } from "@/components/animations/StaggerContainer";
import { StaggerItem } from "@/components/animations/StaggerItem";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { teamRoles } from "@/lib/data";

export function TeamSection() {
  return (
    <section id="team" className="relative py-16 sm:py-24 lg:py-32">
      <Container>
        <SectionHeading
          label="Build Team"
          title="Lean. Focused. Execution-Driven."
          description="A tight team with a 3-month sprint engagement model. Build → Ship → Scale."
        />

        <StaggerContainer
          stagger={0.1}
          className="max-w-2xl mx-auto space-y-4"
        >
          {teamRoles.map((role) => (
            <StaggerItem key={role.role}>
              <div
                className={`relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                  role.highlighted
                    ? "border-accent/30 bg-accent/[0.04]"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display font-bold text-white text-lg">
                        {role.role}
                      </h3>
                      {role.highlighted && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-accent/20 text-accent">
                          Lead
                        </span>
                      )}
                    </div>
                    {role.name && (
                      <p className="text-white/80 text-sm font-medium">{role.name}</p>
                    )}
                    {role.count && (
                      <p className="text-text-secondary text-sm">
                        {role.count} positions
                      </p>
                    )}
                  </div>
                  <span className="text-text-secondary text-sm font-medium whitespace-nowrap">
                    {role.stipend}
                  </span>
                </div>

                {/* Accent left bar for lead */}
                {role.highlighted && (
                  <div className="absolute left-0 top-4 bottom-4 w-px bg-accent rounded-full" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Sprint model */}
        <ScrollReveal delay={0.3} className="mt-10 sm:mt-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent" />
                <span className="text-xs sm:text-sm font-medium text-white">3-Month Sprint</span>
              </div>
              <span className="text-text-tertiary text-xs sm:text-base">→</span>
              <span className="text-xs sm:text-sm text-text-secondary">Build</span>
              <span className="text-text-tertiary text-xs sm:text-base">→</span>
              <span className="text-xs sm:text-sm text-text-secondary">Ship</span>
              <span className="text-text-tertiary text-xs sm:text-base">→</span>
              <span className="text-xs sm:text-sm text-white font-medium">Scale</span>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
