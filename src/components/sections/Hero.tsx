"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import type { PointerEvent } from "react";
import { ActionLink } from "@/components/ui/ActionLink";
import { motionConfig } from "@/lib/utils";

export function Hero() {
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 45, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 45, damping: 18 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduced || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="inicio" className="hero" onPointerMove={handlePointerMove} data-mouse-glow>
      <div className="hero__ambient hero__ambient--purple" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--cyan" aria-hidden="true" />
      <div className="container hero__inner">
        <motion.div className="hero__copy" initial={reduced ? false : "hidden"} animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}>
          <motion.div className="hero__eyebrow" variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}>
            <span /> MARKETING + TECNOLOGÍA
          </motion.div>
          <motion.h1 variants={{ hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0 } }}>
            Hacemos que tu negocio <span>se expanda <motion.b className="hero__plus" initial={reduced ? false : { opacity: 0, scale: 0.72 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...motionConfig.slow, delay: reduced ? 0 : 0.45 }}>+</motion.b></span>
          </motion.h1>
          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
            Marketing, contenido y soluciones tecnológicas trabajando juntos para hacer crecer tu negocio.
          </motion.p>
          <motion.div className="hero__actions" variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
            <ActionLink href="#contacto">Quiero expandir mi negocio</ActionLink>
            <ActionLink href="#servicios" variant="secondary" icon={<ArrowDown size={18} />}>Explorar servicios</ActionLink>
          </motion.div>
          <motion.div className="hero__microcopy" variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
            <span>ESTRATEGIA</span><i /><span>CREATIVIDAD</span><i /><span>TECNOLOGÍA</span>
          </motion.div>
        </motion.div>

        <motion.div className="hero__visual" style={reduced ? undefined : { rotateX, rotateY }}>
          <div className="orbit orbit--outer" aria-hidden="true"><i /><i /><i /></div>
          <div className="orbit orbit--inner" aria-hidden="true"><i /><i /></div>
          <motion.div className="hero__symbol" animate={reduced ? undefined : { y: [0, -10, 0], rotate: [-1, 1, -1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
            <Image src="/expande-plus/logo-symbol.png" alt="Isotipo de EXPANDE+" width={1275} height={1170} priority sizes="(max-width: 768px) 62vw, 390px" />
          </motion.div>
          <div className="hero__badge hero__badge--top"><span>01</span>ATRAER</div>
          <div className="hero__badge hero__badge--bottom"><span>02</span>CONVERTIR</div>
          <span className="hero__decor-plus hero__decor-plus--one">+</span>
          <span className="hero__decor-plus hero__decor-plus--two">+</span>
        </motion.div>
      </div>
      <a href="#descubre" className="scroll-cue">Descubre más <span><i /><ArrowDown size={15} /></span></a>
      <a className="hero__side-label" href="#contacto">Construyamos algo que crezca <ArrowUpRight size={14} /></a>
    </section>
  );
}
