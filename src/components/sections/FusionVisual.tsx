"use client";

import { motion, useReducedMotion } from "motion/react";

const viewport = { once: true, amount: 0.35 } as const;

export function FusionVisual() {
  const reduced = useReducedMotion();
  const instant = reduced ? { duration: 0 } : undefined;

  return (
    <>
      <div className="fusion__words">
        <motion.div
          className="fusion__word fusion__word--left"
          initial={reduced ? false : { opacity: 0.45, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={instant}
        >
          <strong>MARKETING</strong>
        </motion.div>
        <motion.div className="fusion__mark" initial={reduced ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport} transition={instant}>+</motion.div>
        <motion.div
          className="fusion__word fusion__word--right"
          initial={reduced ? false : { opacity: 0.45, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewport}
          transition={instant}
        >
          <strong>TECNOLOGÍA</strong>
        </motion.div>
      </div>
      <svg className="fusion__connection" viewBox="0 0 800 40" aria-hidden="true">
        <motion.path d="M20 20H780" initial={reduced ? { pathLength: 1 } : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: reduced ? 0 : 0.85 }} />
        <motion.circle r="4" cy="20" initial={reduced ? { cx: 780, opacity: 0 } : { cx: 20, opacity: 0 }} whileInView={reduced ? { cx: 780, opacity: 0 } : { cx: 780, opacity: [0, 1, 1, 0] }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: reduced ? 0 : 1.35, delay: reduced ? 0 : 0.25 }} />
      </svg>
      <motion.div className="fusion__equals" initial={reduced ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport} transition={instant} aria-hidden="true">=</motion.div>
      <motion.div className="fusion__result" initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={instant}>
        <b>EXPANDE+</b>
      </motion.div>
    </>
  );
}
