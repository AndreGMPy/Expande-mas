"use client";

import { motion, useReducedMotion } from "motion/react";
import { BarChart3, MousePointerClick, Radio, Users } from "lucide-react";

const metrics = [
  { label: "Visibilidad", value: "Monitoreo", icon: Radio },
  { label: "Interacción", value: "Seguimiento", icon: MousePointerClick },
  { label: "Oportunidades", value: "Captura", icon: Users },
];

export function MarketingAnalyticsVisual() {
  const reduced = useReducedMotion();
  return (
    <div className="product-visual analytics-visual" aria-hidden="true">
      <div className="product-visual__topbar">
        <span><BarChart3 size={15} />Rendimiento de marketing</span><small>Vista ilustrativa</small>
      </div>
      <div className="analytics-visual__metrics">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return <motion.div key={metric.label} initial={reduced ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: reduced ? 0 : index * 0.09 }}><Icon size={15} /><span>{metric.label}<b>{metric.value}</b></span></motion.div>;
        })}
      </div>
      <div className="analytics-visual__chart">
        <div className="analytics-visual__chart-head"><span>Contenido y campañas</span><small>Últimos 30 días</small></div>
        <svg viewBox="0 0 420 150" role="presentation">
          <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#20d8ee" stopOpacity=".25" /><stop offset="1" stopColor="#20d8ee" stopOpacity="0" /></linearGradient></defs>
          <path className="analytics-grid-line" d="M10 35H410M10 75H410M10 115H410" />
          <motion.path className="analytics-area" d="M10 124 C55 115 60 86 105 91 S170 112 205 68 S270 48 305 58 S365 27 410 25 L410 140 L10 140 Z" initial={reduced ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.6 }} />
          <motion.path className="analytics-line" d="M10 124 C55 115 60 86 105 91 S170 112 205 68 S270 48 305 58 S365 27 410 25" initial={reduced ? false : { pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 1.05 }} />
          {[[105,91], [205,68], [305,58], [410,25]].map(([cx, cy], index) => <motion.circle className="analytics-point" key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" initial={reduced ? false : { opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: reduced ? 0 : 0.85 + index * 0.08 }} />)}
        </svg>
        <div className="analytics-visual__bars">
          {[42, 67, 52, 82, 72, 94].map((height, index) => <motion.i key={height} initial={reduced ? { scaleY: 1 } : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: reduced ? 0 : index * 0.06 }} style={{ height: `${height}%` }} />)}
        </div>
      </div>
    </div>
  );
}
