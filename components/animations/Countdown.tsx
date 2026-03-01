"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeUnit {
  label: string;
  value: number;
}

export function Countdown() {
  const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([
    { label: "Days", value: 90 },
    { label: "Hours", value: 0 },
    { label: "Mins", value: 0 },
    { label: "Secs", value: 0 },
  ]);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // 90 days in milliseconds
      const totalMS = 90 * 24 * 60 * 60 * 1000;
      const endTime = new Date().getTime() + totalMS;

      const timer = setInterval(() => {
        const now = new Date().getTime();
        const remaining = endTime - now;

        if (remaining <= 0) {
          setTimeUnits([
            { label: "Days", value: 0 },
            { label: "Hours", value: 0 },
            { label: "Mins", value: 0 },
            { label: "Secs", value: 0 },
          ]);
          clearInterval(timer);
        } else {
          const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((remaining / 1000 / 60) % 60);
          const seconds = Math.floor((remaining / 1000) % 60);

          setTimeUnits([
            { label: "Days", value: days },
            { label: "Hours", value: hours },
            { label: "Mins", value: minutes },
            { label: "Secs", value: seconds },
          ]);
        }
      }, 1000);

      return () => clearInterval(timer);
    };

    return calculateTimeRemaining();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full mb-8 sm:mb-12"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl mx-auto">
        {timeUnits.map((unit) => (
          <motion.div
            key={unit.label}
            variants={itemVariants}
            className="flex flex-col items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-accent/20 bg-accent/5 backdrop-blur-sm"
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-accent mb-1 sm:mb-2">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-text-secondary text-xs sm:text-sm font-medium">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
