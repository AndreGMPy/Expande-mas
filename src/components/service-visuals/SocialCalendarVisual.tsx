"use client";

import { motion, useReducedMotion } from "motion/react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

const days = [
  { day: "L", date: "10" }, { day: "M", date: "11", item: "Reel", tone: "purple" },
  { day: "M", date: "12" }, { day: "J", date: "13", item: "Historia", tone: "cyan" },
  { day: "V", date: "14", item: "Post", tone: "violet" },
];

const postVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index: number) => ({ opacity: 1, scale: 1, transition: { delay: 0.18 + index * 0.08 } }),
};

export function SocialCalendarVisual() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="product-visual social-calendar"
      aria-hidden="true"
      initial={reduced ? "visible" : "hidden"}
      animate={reduced ? "visible" : undefined}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
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
                custom={index}
                variants={postVariants}
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
      <motion.div className="social-calendar__ready" variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { delay: reduced ? 0 : 0.75 } } }}>Contenido programado</motion.div>
    </motion.div>
  );
}
