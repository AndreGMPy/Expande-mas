const items = ["Marketing digital", "Contenido", "Desarrollo web", "E-commerce", "Inteligencia artificial", "Automatización", "Sistemas", "Estrategia"];

export function ServicesMarquee() {
  const sequence = [...items, ...items];
  return (
    <div className="marquee" id="descubre" aria-label="Áreas de especialidad">
      <div className="marquee__track">
        {sequence.map((item, index) => <span key={`${item}-${index}`}>{item}<b>+</b></span>)}
      </div>
    </div>
  );
}
