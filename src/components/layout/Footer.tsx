import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CONTACT, navigation, siteConfig, whatsappUrl } from "@/config/site";

const serviceLinks = ["Marketing digital", "Manejo de redes", "Desarrollo web", "Sistemas", "Inteligencia artificial", "Automatización"];

export function Footer() {
  const socialLinks: Array<{ label: string; value: string; href: string }> = [];

  if (CONTACT.instagram) {
    socialLinks.push({ label: "Instagram", value: CONTACT.instagramHandle, href: CONTACT.instagram });
  }

  if (CONTACT.whatsapp) {
    socialLinks.push({ label: "WhatsApp", value: CONTACT.whatsappDisplay, href: whatsappUrl });
  }

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Image src="/expande-plus/logo-wordmark-expande-plus.png" alt="EXPANDE+" width={1099} height={335} sizes="190px" />
          <p>{siteConfig.slogan}</p>
        </div>
        <div className="footer__column">
          <span>Servicios</span>
          {serviceLinks.map((item) => <a href="#servicios" key={item}>{item}</a>)}
        </div>
        <div className="footer__column">
          <span>EXPANDE+</span>
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div className="footer__column">
          <span>Redes</span>
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.label}: ${item.value}`}>
              {item.label}<ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} EXPANDE+. Todos los derechos reservados.</span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
