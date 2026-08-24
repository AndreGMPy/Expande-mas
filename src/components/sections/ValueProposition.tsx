"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const flow = ["Marketing", "Atención", "Tecnología", "Conversión", "Crecimiento"];

export function ValueProposition() {
  const reduced = useReducedMotion();
  return (
    <section className="value-section" id="nosotros" data-mouse-glow>
      <div className="container value-section__grid">
        <div className="value-section__copy">
          <Reveal><span className="eyebrow"><i />La propuesta EXPANDE+</span></Reveal>
          <Reveal delay={0.08}><h2>Una sola agencia.<br /><span>Todo conectado.</span></h2></Reveal>
          <Reveal delay={0.15}>
            <p className="value-section__lead">Unimos marketing creativo y desarrollo tecnológico para atraer oportunidades y construir las herramientas que tu negocio necesita.</p>
          </Reveal>
        </div>
        <div className="value-flow">
          <div className="value-flow__rail" aria-hidden="true">
            <motion.i initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduced ? 0 : 0.85 }} />
            <motion.b initial={reduced ? false : { opacity: 0, y: 0 }} whileInView={reduced ? { opacity: 0 } : { opacity: [0, 1, 1, 0], y: 320 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.5, delay: 0.25 }} />
          </div>
          {flow.map((item, index) => (
            <motion.div
              className={`value-flow__item ${index === flow.length - 1 ? "is-final" : ""}`}
              key={item}
              initial={reduced ? false : { opacity: 0.2, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.55 }}
              transition={{ delay: reduced ? 0 : index * 0.1 }}
            >
              <span>0{index + 1}</span><strong>{item}</strong>
              {index < flow.length - 1 && <ArrowDown size={17} aria-hidden="true" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
