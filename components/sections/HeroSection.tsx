"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { GradientGlow } from "@/components/animations/GradientGlow";
import { CountUp } from "@/components/animations/CountUp";
import { Countdown } from "@/components/animations/Countdown";
import { heroMetrics } from "@/lib/data";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <GradientGlow />

      <Container className="relative z-10 pt-24 sm:pt-20 pb-20 sm:pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-text-secondary text-xs sm:text-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse" />
              Daddy&apos;s Cloud Kitchen Ltd
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-display text-display text-white"
            >
              Building the Digital
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-display text-display bg-gradient-to-r from-white via-accent-light to-accent bg-clip-text text-transparent"
            >
              Backbone.
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base sm:text-xl lg:text-2xl text-text-secondary max-w-2xl mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Designed for 1 kitchen today.{" "}
            <span className="text-white">50 tomorrow.</span>
          </motion.p>

          {/* Countdown Timer */}
          <Countdown />

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 w-full max-w-3xl"
          >
            {heroMetrics.map((metric, i) => (
              <div
                key={metric.label}
                className="group relative px-3 sm:px-6 py-3 sm:py-5 rounded-xl sm:rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-0.5 sm:mb-1">
                  <CountUp target={metric.value} suffix={metric.suffix} duration={2 + i * 0.3} />
                </div>
                <div className="text-text-secondary text-xs sm:text-sm">{metric.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => {
                const el = document.getElementById("platform");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-medium border border-white/[0.12] text-white rounded-xl hover:bg-white/[0.06] transition-all duration-200 hover:border-white/[0.2]"
            >
              View Technical Blueprint
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-medium bg-accent hover:bg-accent-dark text-white rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
            >
              <motion.div className="w-1 h-2 rounded-full bg-white/40" />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
