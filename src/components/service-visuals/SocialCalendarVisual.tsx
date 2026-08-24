"use client";

import { motion, useReducedMotion } from "motion/react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

const days = [
  { day: "L", date: "10" }, { day: "M", date: "11", item: "Reel", tone: "purple" },
  { day: "M", date: "12" }, { day: "J", date: "13", item: "Historia", tone: "cyan" },
  { day: "V", date: "14", item: "Post", tone: "violet" },
];

export function SocialCalendarVisual() {
  const reduced = useReducedMotion();
  return (
    <div className="product-visual social-calendar" aria-hidden="true">
      <div className="product-visual__topbar">
        <span><CalendarDays size={15} />Calendario editorial</span>
        <small>Vista ilustrativa</small>
      </div>
      <div className="social-calendar__month"><span><ChevronLeft size={15} /></span><strong>Agosto 2026</strong><span><ChevronRight size={15} /></span></div>
      <div className="social-calendar__week">
        {days.map((entry, index) => (
          <div className="social-calendar__day" key={`${entry.day}-${entry.date}`}>
            <span>{entry.day}</span><b>{entry.date}</b>
            {entry.item && (
              <motion.i
                className={`calendar-post calendar-post--${entry.tone}`}
                initial={reduced ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: reduced ? 0 : 0.18 + index * 0.08 }}
              >
                <em />{entry.item}
              </motion.i>
            )}
          </div>
        ))}
      </div>
      <div className="social-calendar__summary">
        <span><b>REEL</b> programado</span>
        <span><b>POST</b> programado</span>
        <span><b>HISTORIA</b> programada</span>
      </div>
      <motion.div className="social-calendar__ready" initial={reduced ? false : { opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: reduced ? 0 : 0.75 }}>Contenido programado</motion.div>
    </div>
  );
}
