"use client";

import { motion, useReducedMotion } from "motion/react";
import { CalendarCheck, Database, FileText, MessageCircleMore } from "lucide-react";

const nodes = [
  { label: "Formulario", caption: "Nuevo prospecto", icon: FileText },
  { label: "Base de datos", caption: "Registro creado", icon: Database },
  { label: "WhatsApp", caption: "Mensaje enviado", icon: MessageCircleMore },
  { label: "Cliente", caption: "Seguimiento recibido", icon: CalendarCheck },
];

export function AutomationFlowVisual() {
  const reduced = useReducedMotion();
  return (
    <div className="product-visual automation-visual" aria-hidden="true">
      <div className="product-visual__topbar"><span>Flujo automatizado</span><small>AUTOMATION</small></div>
      <div className="automation-visual__canvas">
        <svg className="automation-visual__line" viewBox="0 0 700 90" preserveAspectRatio="none" role="presentation">
          <path d="M82 45H618" />
          <motion.path className="automation-visual__progress" d="M82 45H618" initial={reduced ? { pathLength: 1 } : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 1.45 }} />
        </svg>
        {nodes.map((node, index) => {
          const Icon = node.icon;
          return (
            <motion.div className="automation-node" key={node.label} initial={reduced ? false : { opacity: 0.25, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: reduced ? 0 : 0.12 + index * 0.3 }}>
              <i><Icon size={19} /></i><strong>{node.label}</strong><span>{node.caption}</span>
            </motion.div>
          );
        })}
        <motion.i className="automation-visual__pulse" initial={reduced ? { opacity: 0 } : { x: 0, opacity: 0 }} whileInView={reduced ? { opacity: 0 } : { x: [0, 126, 252, 380], opacity: [0, 1, 1, 0] }} viewport={{ once: true }} transition={{ duration: 1.45, delay: 0.08, ease: "easeInOut" }} />
      </div>
      <div className="automation-visual__footer"><i /> API connected · Flujo sincronizado</div>
    </div>
  );
}
