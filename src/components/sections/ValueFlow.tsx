"use client";

import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const item = {
  hidden: { opacity: 0.2, x: 24 },
  show: (index: number) => ({ opacity: 1, x: 0, transition: { delay: index * 0.1 } }),
};

export function ValueFlow({ items }: { items: string[] }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="value-flow"
      initial={reduced ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="value-flow__rail" aria-hidden="true">
        <motion.i variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: reduced ? 0 : 0.85 } } }} />
        <motion.b
          variants={reduced ? undefined : {
            hidden: { opacity: 0, y: 0 },
            show: { opacity: [0, 1, 1, 0], y: 320, transition: { duration: 1.5, delay: 0.25 } },
          }}
        />
      </div>
      {items.map((entry, index) => (
        <motion.div
          className={`value-flow__item ${index === items.length - 1 ? "is-final" : ""}`}
          custom={index}
          variants={reduced ? undefined : item}
          key={entry}
        >
          <span>0{index + 1}</span><strong>{entry}</strong>
          {index < items.length - 1 && <ArrowDown size={17} aria-hidden="true" />}
        </motion.div>
      ))}
    </motion.div>
  );
}
