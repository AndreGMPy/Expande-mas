"use client";

import { ArrowUpRight, AtSign, Mail, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { CONTACT, createWhatsappUrl, whatsappUrl } from "@/config/site";
import { ActionLink } from "@/components/ui/ActionLink";
import { Reveal } from "@/components/ui/Reveal";

const options = [
  "Marketing digital", "Creación de contenido", "Administración de redes", "Página web", "Tienda online",
  "Sistema a medida", "Inteligencia artificial / chatbot", "Automatización", "Otro",
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "invalid">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setStatus("invalid");
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const value = (field: string) => String(formData.get(field) ?? "").trim();
    const message = [
      "Hola, vi la página de EXPANDE+ y me gustaría solicitar información.",
      "",
      `Nombre: ${value("name")}`,
      `Negocio / empresa: ${value("business")}`,
      `Teléfono: ${value("phone")}`,
      `Correo: ${value("email")}`,
      `Servicio de interés: ${value("service")}`,
      "",
      "Mensaje:",
      value("message"),
    ].join("\n");

    setStatus("idle");
    window.open(createWhatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact" id="contacto" data-mouse-glow>
      <div className="container contact__cta">
        <Reveal>
          <span className="eyebrow"><i />El siguiente paso</span>
          <h2>¿Listo para expandir tu negocio?</h2>
          <p>Cuéntanos qué quieres lograr y diseñaremos una solución adaptada a tu empresa.</p>
          <div className="contact__actions">
            <ActionLink href="#formulario" variant="light">Solicitar una cotización</ActionLink>
            <ActionLink href={whatsappUrl} variant="secondary" icon={<MessageCircle size={18} />} target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</ActionLink>
          </div>
        </Reveal>
        <div className="contact__plus" aria-hidden="true"><span>+</span><i /><i /></div>
      </div>

      <div className="container contact__form-wrap" id="formulario">
        <Reveal className="contact__aside">
          <span>Cuéntanos sobre tu proyecto</span>
          <h3>Empecemos con una buena conversación.</h3>
          <div className="contact__channels">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} /><span><small>WhatsApp</small>{CONTACT.whatsappDisplay}</span><ArrowUpRight size={15} />
            </a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">
              <AtSign size={18} /><span><small>Instagram</small>{CONTACT.instagramHandle}</span><ArrowUpRight size={15} />
            </a>
          </div>
          {CONTACT.email && <a href={`mailto:${CONTACT.email}`}><Mail size={17} />{CONTACT.email}</a>}
        </Reveal>
        <Reveal className="contact-form" delay={0.1}>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <label>Nombre<input name="name" type="text" autoComplete="name" placeholder="Tu nombre" required /></label>
              <label>Negocio / empresa<input name="business" type="text" autoComplete="organization" placeholder="Nombre de tu negocio" required /></label>
              <label>Teléfono<input name="phone" type="tel" autoComplete="tel" placeholder="Tu número" required /></label>
              <label>Correo<input name="email" type="email" autoComplete="email" placeholder="nombre@empresa.com" required /></label>
            </div>
            <label>¿En qué podemos ayudarte?
              <select name="service" defaultValue="" required>
                <option value="" disabled>Selecciona una opción</option>
                {options.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
            <label>Mensaje<textarea name="message" rows={5} placeholder="Cuéntanos qué quieres lograr..." required /></label>
            <button type="submit">Enviar solicitud por WhatsApp <MessageCircle size={18} /></button>
            <p className={`form-status ${status !== "idle" ? "is-visible" : ""}`} role="status">
              {status === "invalid" && "Revisa los campos marcados para continuar."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
