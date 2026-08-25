import { ArrowUpRight, AtSign, Mail, MessageCircle } from "lucide-react";
import { CONTACT, whatsappUrl } from "@/config/site";
import { ActionLink } from "@/components/ui/ActionLink";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
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
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
