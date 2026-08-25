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

const statusVariants = {
  hidden: { opacity: 0, x: 8 },
  visible: (index: number) => ({ opacity: 1, x: 0, transition: { delay: index * 0.09 } }),
};

export function InfrastructureVisual() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="product-visual infrastructure-visual"
      aria-hidden="true"
      initial={reduced ? "visible" : "hidden"}
      animate={reduced ? "visible" : undefined}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="infrastructure-visual__asset"><Image src="/expande-plus/service-security.png" alt="" width={633} height={627} sizes="(max-width: 640px) 1px, 108px" /></div>
      <div className="infrastructure-visual__panel">
        <div className="product-visual__topbar"><span>Status de infraestructura</span><small>SYSTEM ONLINE</small></div>
        <div className="infrastructure-visual__uptime"><div><small>Estado general</small><strong>Todos los sistemas operando</strong></div><i><Check size={17} /></i></div>
        <div className="infrastructure-visual__rows">
          {statuses.map((status, index) => {
            const Icon = status.icon;
            return (
              <motion.div key={status.label} custom={index} variants={statusVariants}>
                <Icon size={16} /><strong>{status.label}</strong><span className={`infra-status infra-status--${status.tone}`}><i />{status.value}</span>
              </motion.div>
            );
          })}
        </div>
        <div className="infrastructure-visual__footer"><span>secure connection</span><b>SYNCED</b></div>
      </div>
    </motion.div>
  );
}
