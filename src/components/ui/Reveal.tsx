"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { motionConfig } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...motionConfig.normal, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
