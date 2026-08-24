"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function MarketingTechnology() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const leftX = useTransform(scrollYProgress, [0.15, 0.6], reduced ? [0, 0] : [-80, 0]);
  const rightX = useTransform(scrollYProgress, [0.15, 0.6], reduced ? [0, 0] : [80, 0]);
  const centerOpacity = useTransform(scrollYProgress, [0.42, 0.64], reduced ? [1, 1] : [0.1, 1]);
  const resultY = useTransform(scrollYProgress, [0.5, 0.72], reduced ? [0, 0] : [18, 0]);

  return (
    <section className="fusion" id="soluciones" ref={ref} data-mouse-glow>
      <div className="container fusion__inner">
        <Reveal className="fusion__intro">
          <p>Atraemos atención y construimos la tecnología para convertirla en resultados.</p>
        </Reveal>
        <div className="fusion__words">
          <motion.div className="fusion__word fusion__word--left" style={{ x: leftX }}>
            <strong>MARKETING</strong>
          </motion.div>
          <motion.div className="fusion__mark" style={{ opacity: centerOpacity }}>+</motion.div>
          <motion.div className="fusion__word fusion__word--right" style={{ x: rightX }}>
            <strong>TECNOLOGÍA</strong>
          </motion.div>
        </div>
        <svg className="fusion__connection" viewBox="0 0 800 40" aria-hidden="true">
          <motion.path d="M20 20H780" initial={reduced ? { pathLength: 1 } : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: reduced ? 0 : 0.85 }} />
          <motion.circle r="4" cy="20" initial={reduced ? { cx: 780, opacity: 0 } : { cx: 20, opacity: 0 }} whileInView={reduced ? { cx: 780, opacity: 0 } : { cx: 780, opacity: [0, 1, 1, 0] }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.35, delay: 0.25 }} />
        </svg>
        <motion.div className="fusion__equals" style={{ opacity: centerOpacity }} aria-hidden="true">=</motion.div>
        <motion.div className="fusion__result" style={{ opacity: centerOpacity, y: resultY }}>
          <b>EXPANDE+</b>
        </motion.div>
        <div className="fusion__secondary">
          <div><span>CONNECTED</span><code>const growth = marketing + technology;</code></div>
        </div>
      </div>
    </section>
  );
}
