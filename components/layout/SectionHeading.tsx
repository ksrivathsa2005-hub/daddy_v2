"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <ScrollReveal className={`max-w-3xl mb-10 sm:mb-16 lg:mb-20 ${alignClass}`}>
      {label && (
        <span className="inline-block text-accent font-medium text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
          {label}
        </span>
      )}
      <h2 className="font-display text-headline text-white mb-3 sm:mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-base sm:text-lg lg:text-xl leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
