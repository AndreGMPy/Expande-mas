import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ActionLink } from "@/components/ui/ActionLink";

export function Hero() {
  return (
    <section id="inicio" className="hero" data-mouse-glow>
      <div className="hero__ambient hero__ambient--purple" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--cyan" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__eyebrow hero__enter hero__enter--1">
            <span /> MARKETING + TECNOLOGÍA
          </div>
          <h1 className="hero__enter hero__enter--2">
            Hacemos que tu negocio <span>se expanda <b className="hero__plus">+</b></span>
          </h1>
          <p className="hero__enter hero__enter--3">
            Marketing, contenido y soluciones tecnológicas trabajando juntos para hacer crecer tu negocio.
          </p>
          <div className="hero__actions hero__enter hero__enter--4">
            <ActionLink href="#contacto">Quiero expandir mi negocio</ActionLink>
            <ActionLink href="#servicios" variant="secondary" icon={<ArrowDown size={18} />}>Explorar servicios</ActionLink>
          </div>
          <div className="hero__microcopy hero__enter hero__enter--5">
            <span>ESTRATEGIA</span><i /><span>CREATIVIDAD</span><i /><span>TECNOLOGÍA</span>
          </div>
        </div>

        <div className="hero__visual hero__enter hero__enter--visual">
          <div className="orbit orbit--outer" aria-hidden="true"><i /><i /><i /></div>
          <div className="orbit orbit--inner" aria-hidden="true"><i /><i /></div>
          <div className="hero__symbol">
            <Image src="/expande-plus/logo-symbol.png" alt="Isotipo de EXPANDE+" width={1275} height={1170} preload sizes="(max-width: 640px) 192px, (max-width: 900px) 242px, 358px" />
          </div>
          <div className="hero__badge hero__badge--top"><span>01</span>ATRAER</div>
          <div className="hero__badge hero__badge--bottom"><span>02</span>CONVERTIR</div>
          <span className="hero__decor-plus hero__decor-plus--one">+</span>
          <span className="hero__decor-plus hero__decor-plus--two">+</span>
        </div>
      </div>
      <a href="#descubre" className="scroll-cue">Descubre más <span><i /><ArrowDown size={15} /></span></a>
      <a className="hero__side-label" href="#contacto">Construyamos algo que crezca <ArrowUpRight size={14} /></a>
    </section>
  );
}
