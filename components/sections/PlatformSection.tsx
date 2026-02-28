"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { archLayers } from "@/lib/data";

const layerColors: Record<string, string> = {
  "Interface Layer": "border-emerald-500/30 hover:border-emerald-500/60",
  "API Gateway": "border-accent/30 hover:border-accent/60",
  "Data Layer": "border-amber-500/30 hover:border-amber-500/60",
  Infrastructure: "border-rose-500/30 hover:border-rose-500/60",
};

const layerAccents: Record<string, string> = {
  "Interface Layer": "bg-emerald-500",
  "API Gateway": "bg-accent",
  "Data Layer": "bg-amber-500",
  Infrastructure: "bg-rose-500",
};

export function PlatformSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="platform" className="relative py-16 sm:py-24 lg:py-32 bg-surface/30">
      <Container>
        <SectionHeading
          label="Platform Architecture"
          title="Scalable Multi-Tenant Architecture."
          description="Built for infinite horizontal scaling. One codebase powers every kitchen, every brand, every country."
        />

        <div ref={ref} className="max-w-4xl mx-auto space-y-6">
          {archLayers.map((layer, layerIdx) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: layerIdx * 0.15 }}
            >
              {/* Layer label */}
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-2 h-2 rounded-full ${layerAccents[layer.label] || "bg-white"}`} />
                <span className="text-xs font-semibold uppercase tracking-widest text-text-secondary">
                  {layer.label}
                </span>
              </div>

              {/* Layer items */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {layer.items.map((item, itemIdx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: layerIdx * 0.15 + itemIdx * 0.05 }}
                    className={`group relative px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl border bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 cursor-default ${layerColors[layer.label] || "border-white/10"}`}
                  >
                    <span className="text-xs sm:text-sm font-medium text-white">{item}</span>

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-b from-white/[0.04] to-transparent" />
                  </motion.div>
                ))}
              </div>

              {/* Connector line */}
              {layerIdx < archLayers.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.4, delay: layerIdx * 0.15 + 0.3 }}
                  className="flex justify-center py-2"
                >
                  <div className="w-px h-8 bg-gradient-to-b from-white/20 to-white/5" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10 sm:mt-16"
        >
          {["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker", "TypeScript", "CI/CD"].map(
            (tech) => (
              <span
                key={tech}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium bg-white/[0.04] border border-white/[0.06] text-text-secondary"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </Container>
    </section>
  );
}
