import { ValueFlow } from "@/components/sections/ValueFlow";
import { Reveal } from "@/components/ui/Reveal";

const flow = ["Marketing", "Atención", "Tecnología", "Conversión", "Crecimiento"];

export function ValueProposition() {
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
        <ValueFlow items={flow} />
      </div>
    </section>
  );
}
