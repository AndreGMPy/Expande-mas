"use client";

import { MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { createWhatsappUrl } from "@/config/site";

const options = [
  "Marketing digital", "Creación de contenido", "Administración de redes", "Página web", "Tienda online",
  "Sistema a medida", "Inteligencia artificial / chatbot", "Automatización", "Otro",
];

export function ContactForm() {
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
  );
}
