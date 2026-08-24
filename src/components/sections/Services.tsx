import { services, serviceAreas, type ServiceArea } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceVisual } from "@/components/ui/ServiceVisual";
import { ServiceDetails } from "@/components/ui/ServiceDetails";
import { Reveal } from "@/components/ui/Reveal";

const areas: ServiceArea[] = ["marketing", "technology"];

export function Services() {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <SectionHeading
          eyebrow="Servicios"
          title="Marketing que atrae. Tecnología que convierte."
        />

        {areas.map((area) => {
          const areaData = serviceAreas[area];
          const areaServices = services.filter((service) => service.area === area);

          return (
            <div className={`service-area service-area--${area}`} key={area}>
              <Reveal className="service-area__intro">
                <div className="service-area__index">{area === "marketing" ? "ÁREA 01" : "ÁREA 02"}</div>
                <div>
                  <span>{areaData.label}</span>
                  <h3>{areaData.headline}</h3>
                </div>
              </Reveal>

              <div className="services__list">
                {areaServices.map((service) => {
                  const globalIndex = services.findIndex((item) => item.id === service.id);
                  return (
                    <article
                      className={`service ${globalIndex % 2 === 1 ? "service--reverse" : ""} ${service.id === "web" ? "service--featured" : ""}`}
                      id={service.anchor}
                      key={service.id}
                    >
                      <Reveal className="service__visual"><ServiceVisual service={service} /></Reveal>
                      <div className="service__content">
                        <Reveal className="service__intro-copy">
                          <div className="service__meta"><span>{service.number}</span><b aria-hidden="true">—</b><strong>{service.title}</strong></div>
                          <h4>{service.headline}</h4>
                          <p className="service__description">{service.description}</p>
                        </Reveal>
                        <Reveal className="service__details-block" delay={0.08}>
                          <ServiceDetails highlights={service.highlights} details={service.details} />
                        </Reveal>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
