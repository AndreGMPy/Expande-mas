"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { number: "01", title: "Conocemos", text: "Entendemos tu negocio y tus objetivos." },
  { number: "02", title: "Planeamos", text: "Definimos la estrategia y las soluciones necesarias." },
  { number: "03", title: "Creamos", text: "Diseñamos, producimos y desarrollamos." },
  { number: "04", title: "Implementamos", text: "Ponemos todo en funcionamiento." },
  { number: "05", title: "Medimos", text: "Analizamos qué está funcionando." },
  { number: "06", title: "Expandimos", text: "Mejoramos y hacemos crecer la estrategia." },
];

export function Process() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section className="process" ref={ref} data-mouse-glow>
      <div className="container">
        <SectionHeading eyebrow="Proceso" title="Así trabajamos" light />
        <div className="process__timeline">
          <div className="process__line" aria-hidden="true"><motion.i style={{ scaleX: reduced ? 1 : progress }} /></div>
          {steps.map((step, index) => (
            <motion.article className="process-step" key={step.number} initial={reduced ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: reduced ? 0 : index * 0.08 }}>
              <span>{step.number}</span><i aria-hidden="true" /><h3>{step.title}</h3><p>{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
