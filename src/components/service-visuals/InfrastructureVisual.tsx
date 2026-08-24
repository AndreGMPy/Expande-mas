"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Check, CloudCog, Database, Globe2, LockKeyhole } from "lucide-react";

const statuses = [
  { label: "Sitio web", value: "Online", icon: Globe2, tone: "online" },
  { label: "Base de datos", value: "Online", icon: Database, tone: "online" },
  { label: "Backup", value: "Completado", icon: CloudCog, tone: "done" },
  { label: "SSL", value: "Seguro", icon: LockKeyhole, tone: "done" },
];

export function InfrastructureVisual() {
  const reduced = useReducedMotion();
  return (
    <div className="product-visual infrastructure-visual" aria-hidden="true">
      <div className="infrastructure-visual__asset"><Image src="/expande-plus/service-security.png" alt="" width={633} height={627} sizes="105px" /></div>
      <div className="infrastructure-visual__panel">
        <div className="product-visual__topbar"><span>Status de infraestructura</span><small>SYSTEM ONLINE</small></div>
        <div className="infrastructure-visual__uptime"><div><small>Estado general</small><strong>Todos los sistemas operando</strong></div><i><Check size={17} /></i></div>
        <div className="infrastructure-visual__rows">
          {statuses.map((status, index) => {
            const Icon = status.icon;
            return (
              <motion.div key={status.label} initial={reduced ? false : { opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: reduced ? 0 : index * 0.09 }}>
                <Icon size={16} /><strong>{status.label}</strong><span className={`infra-status infra-status--${status.tone}`}><i />{status.value}</span>
              </motion.div>
            );
          })}
        </div>
        <div className="infrastructure-visual__footer"><span>secure connection</span><b>SYNCED</b></div>
      </div>
    </div>
  );
}
