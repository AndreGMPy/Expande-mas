import { FusionVisual } from "@/components/sections/FusionVisual";
import { Reveal } from "@/components/ui/Reveal";

export function MarketingTechnology() {
  return (
    <section className="fusion" id="soluciones" data-mouse-glow>
      <div className="container fusion__inner">
        <Reveal className="fusion__intro">
          <p>Atraemos atención y construimos la tecnología para convertirla en resultados.</p>
        </Reveal>
        <FusionVisual />
        <div className="fusion__secondary">
          <div><span>CONNECTED</span><code>const growth = marketing + technology;</code></div>
        </div>
      </div>
    </section>
  );
}
