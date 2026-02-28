"use client";

import { motion } from "framer-motion";

interface GradientGlowProps {
  className?: string;
}

export function GradientGlow({ className }: GradientGlowProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}>
      {/* Primary accent glow */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-accent/[0.07] blur-[80px] sm:blur-[100px] lg:blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Secondary glow */}
      <motion.div
        className="absolute top-1/3 left-1/4 sm:left-1/3 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-accent-light/[0.04] blur-[80px] sm:blur-[100px]"
        animate={{
          scale: [1.1, 1, 1.1],
          x: [0, 50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
