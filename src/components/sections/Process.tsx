import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
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
  return (
    <section className="process" data-mouse-glow>
      <div className="container">
        <SectionHeading eyebrow="Proceso" title="Así trabajamos" light />
        <ProcessTimeline steps={steps} />
      </div>
    </section>
  );
}
