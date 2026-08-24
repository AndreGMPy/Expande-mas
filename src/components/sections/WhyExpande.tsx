import { Combine, Eye, Settings2, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  { number: "01", title: "Más visibilidad", description: "Creamos una presencia digital preparada para atraer nuevas oportunidades.", icon: Eye },
  { number: "02", title: "Todo conectado", description: "Contenido, marketing y tecnología trabajan juntos.", icon: Combine },
  { number: "03", title: "Menos procesos manuales", description: "Construimos sistemas y automatizaciones que simplifican operaciones.", icon: Settings2 },
  { number: "04", title: "Soluciones para crecer", description: "Cada proyecto se adapta a las necesidades reales del negocio.", icon: TrendingUp },
];

export function WhyExpande() {
  return (
    <section className="why">
      <div className="container">
        <SectionHeading
          eyebrow="EXPANDE+"
          title="¿Por qué EXPANDE+?"
          description="Marketing, tecnología y estrategia trabajando hacia un mismo objetivo."
        />
        <div className="why__grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal className="why-card" delay={index * 0.06} key={reason.number}>
                <div className="why-card__top"><span>{reason.number}</span><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{reason.title}</h3><p>{reason.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
