"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check, ShoppingBag } from "lucide-react";

export function WebsiteResponsiveVisual() {
  const reduced = useReducedMotion();
  return (
    <div className="product-visual website-visual" aria-hidden="true">
      <div className="website-visual__labels"><span>Desktop</span><span>+</span><span>Mobile</span></div>
      <motion.div className="browser-mockup" whileHover={reduced ? undefined : { y: -3, rotateX: 1.2 }}>
        <div className="browser-mockup__bar"><i /><i /><i /><span>expande-demo.com</span></div>
        <div className="browser-mockup__nav"><b>MARCA</b><span>Inicio&nbsp;&nbsp; Productos&nbsp;&nbsp; Contacto</span><ShoppingBag size={14} /></div>
        <div className="browser-mockup__hero"><small>NUEVA COLECCIÓN</small><strong>Diseñado para convertir.</strong><span>Explorar <ArrowUpRight size={12} /></span></div>
        <div className="browser-mockup__products"><i /><i /><i /></div>
      </motion.div>
      <motion.div className="phone-mockup" initial={reduced ? false : { y: 10, opacity: 0.7 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} whileHover={reduced ? undefined : { y: -5, rotate: 1 }}>
        <div className="phone-mockup__notch" />
        <div className="phone-mockup__brand">MARCA <ShoppingBag size={11} /></div>
        <div className="phone-mockup__image" />
        <strong>Producto destacado</strong><span>Conoce más</span>
      </motion.div>
      <div className="website-visual__quality"><Check size={13} />Rápido&nbsp;&nbsp;·&nbsp;&nbsp;Responsive&nbsp;&nbsp;·&nbsp;&nbsp;A medida</div>
    </div>
  );
}
