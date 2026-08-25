"use client";

import { motion, useReducedMotion } from "motion/react";

interface ProcessStep {
  number: string;
  title: string;
  text: string;
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: (index: number) => ({ opacity: 1, y: 0, transition: { delay: index * 0.08 } }),
};

export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="process__timeline"
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="process__line" aria-hidden="true">
        <motion.i variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: reduced ? 0 : 1.1 } } }} />
      </div>
      {steps.map((step, index) => (
        <motion.article className="process-step" custom={index} variants={reduced ? undefined : item} key={step.number}>
          <span>{step.number}</span><i aria-hidden="true" /><h3>{step.title}</h3><p>{step.text}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
