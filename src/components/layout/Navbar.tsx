"use client";

import Image from "next/image";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CONTACT, navigation, whatsappUrl } from "@/config/site";
import { services, serviceAreas, type ServiceArea } from "@/data/services";
import { motionConfig } from "@/lib/utils";

interface NavigationService {
  number: string;
  label: string;
  href: string;
  area: ServiceArea;
}

const serviceNavigation: NavigationService[] = services.map((service) => ({
  number: service.number,
  label: service.title,
  href: `#${service.anchor}`,
  area: service.area,
}));

const serviceAreasOrder: ServiceArea[] = ["marketing", "technology"];

interface ServiceNavigationGroupsProps {
  className: string;
  onNavigate?: () => void;
}

function ServiceNavigationGroups({ className, onNavigate }: ServiceNavigationGroupsProps) {
  return (
    <div className={className}>
      {serviceAreasOrder.map((area) => (
        <section className={`service-nav-group service-nav-group--${area}`} key={area} aria-labelledby={`${className}-${area}`}>
          <h3 id={`${className}-${area}`}>{serviceAreas[area].label}</h3>
          <ul>
            {serviceNavigation.filter((service) => service.area === area).map((service) => (
              <li key={service.href}>
                <a href={service.href} onClick={onNavigate}>
                  <span>{service.number}</span>
                  <strong>{service.label}</strong>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const reduced = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileFirstLinkRef = useRef<HTMLAnchorElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const desktopServicesRef = useRef<HTMLLIElement>(null);
  const desktopServicesButtonRef = useRef<HTMLButtonElement>(null);
  const wasMobileOpenRef = useRef(false);
  const scrolledRef = useRef(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const closeAllMenus = () => {
    closeMobileMenu();
    setDesktopServicesOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const nextScrolled = window.scrollY > 30;
      if (nextScrolled === scrolledRef.current) return;
      scrolledRef.current = nextScrolled;
      setScrolled(nextScrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      wasMobileOpenRef.current = true;
      const frame = requestAnimationFrame(() => mobileFirstLinkRef.current?.focus());
      return () => cancelAnimationFrame(frame);
    }

    if (wasMobileOpenRef.current) {
      wasMobileOpenRef.current = false;
      menuButtonRef.current?.focus({ preventScroll: true });
    }
  }, [mobileOpen]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 901px)");
    const onViewportChange = () => {
      if (media.matches) closeMobileMenu();
      else setDesktopServicesOpen(false);
    };

    media.addEventListener("change", onViewportChange);
    return () => media.removeEventListener("change", onViewportChange);
  }, []);

  useEffect(() => {
    if (!mobileOpen && !desktopServicesOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (mobileOpen) closeMobileMenu();
        if (desktopServicesOpen) {
          setDesktopServicesOpen(false);
          desktopServicesButtonRef.current?.focus({ preventScroll: true });
        }
        return;
      }

      if (event.key !== "Tab" || !mobileOpen) return;
      const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (desktopServicesRef.current?.contains(event.target as Node)) return;
      setDesktopServicesOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    if (desktopServicesOpen) document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [desktopServicesOpen, mobileOpen]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${mobileOpen ? "navbar--menu-open" : ""}`}>
      <nav className="navbar__inner" aria-label="Navegación principal">
        <a className="navbar__brand" href="#inicio" aria-label="EXPANDE+, ir al inicio" onClick={closeAllMenus}>
          <Image className="navbar__wordmark" src="/expande-plus/logo-wordmark-expande-plus.png" alt="EXPANDE+" width={1099} height={335} sizes="(max-width: 640px) 1px, 186px" />
          <Image className="navbar__symbol" src="/expande-plus/logo-symbol-expande-plus.png" alt="" width={405} height={370} sizes="(max-width: 640px) 46px, 1px" />
        </a>

        <ul className="navbar__links">
          {navigation.map((item) => item.label === "Servicios" ? (
            <li
              className="navbar__services"
              key={item.href}
              ref={desktopServicesRef}
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) setDesktopServicesOpen(false);
              }}
              onFocusCapture={() => setDesktopServicesOpen(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) setDesktopServicesOpen(false);
              }}
            >
              <button
                ref={desktopServicesButtonRef}
                type="button"
                aria-expanded={desktopServicesOpen}
                aria-controls="services-mega-menu"
                aria-haspopup="dialog"
                onClick={() => setDesktopServicesOpen((current) => !current)}
              >
                Servicios <ChevronDown size={14} aria-hidden="true" />
              </button>
              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div
                    className="mega-menu"
                    id="services-mega-menu"
                    role="dialog"
                    aria-label="Servicios"
                    initial={reduced ? false : { opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: reduced ? 0 : -6 }}
                    transition={reduced ? { duration: 0 } : motionConfig.fast}
                  >
                    <ServiceNavigationGroups className="mega-menu__grid" onNavigate={() => setDesktopServicesOpen(false)} />
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ) : (
            <li key={item.href}><a href={item.href} onClick={closeAllMenus}>{item.label}</a></li>
          ))}
        </ul>

        <a className="navbar__cta" href="#contacto">Hablemos <ArrowUpRight size={17} aria-hidden="true" /></a>
        <button
          className="navbar__menu"
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-haspopup="dialog"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={reduced ? false : { opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: reduced ? 0 : 20 }}
              transition={reduced ? { duration: 0 } : motionConfig.fast}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="mobile-menu"
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduced ? { duration: 0 } : motionConfig.fast}
          >
            <div className="mobile-menu__brand" aria-hidden="true">
              <Image src="/expande-plus/logo-wordmark-expande-plus.png" alt="" width={1099} height={335} sizes="158px" />
            </div>
            <nav className="mobile-menu__scroll" aria-label="Navegación móvil">
              <ul className="mobile-menu__links">
                {navigation.map((item, index) => item.label === "Servicios" ? (
                  <motion.li
                    className="mobile-menu__services"
                    key={item.href}
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...motionConfig.normal, delay: reduced ? 0 : index * 0.055 }}
                  >
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-list"
                      onClick={() => setMobileServicesOpen((current) => !current)}
                    >
                      <span>0{index + 1}</span><strong>Servicios</strong><motion.i animate={reduced ? undefined : { rotate: mobileServicesOpen ? 45 : 0 }}>+</motion.i>
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileServicesOpen && (
                        <motion.div
                          className="mobile-services"
                          id="mobile-services-list"
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={reduced ? { duration: 0 } : motionConfig.normal}
                        >
                          <ServiceNavigationGroups className="mobile-services__groups" onNavigate={closeMobileMenu} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ) : (
                  <motion.li
                    key={item.href}
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...motionConfig.normal, delay: reduced ? 0 : index * 0.055 }}
                  >
                    <a ref={index === 0 ? mobileFirstLinkRef : undefined} href={item.href} onClick={closeMobileMenu}>
                      <span>0{index + 1}</span><strong>{item.label}</strong><ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mobile-menu__footer">
                <a className="mobile-menu__cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                  Hablemos <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <div>
                  <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Instagram</a>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>WhatsApp</a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
