import Image from "next/image";
import { Check, CloudCog, Database, Globe2, LockKeyhole } from "lucide-react";

const statuses = [
  { label: "Sitio web", value: "Online", icon: Globe2, tone: "online" },
  { label: "Base de datos", value: "Online", icon: Database, tone: "online" },
  { label: "Backup", value: "Completado", icon: CloudCog, tone: "done" },
  { label: "SSL", value: "Seguro", icon: LockKeyhole, tone: "done" },
];

export function InfrastructureVisual() {
  return (
    <div className="product-visual infrastructure-visual" aria-hidden="true">
      <div className="infrastructure-visual__asset"><Image src="/expande-plus/service-security.png" alt="" width={633} height={627} sizes="(max-width: 640px) 1px, 108px" /></div>
      <div className="infrastructure-visual__panel">
        <div className="product-visual__topbar"><span>Status de infraestructura</span><small>SYSTEM ONLINE</small></div>
        <div className="infrastructure-visual__uptime"><div><small>Estado general</small><strong>Todos los sistemas operando</strong></div><i><Check size={17} /></i></div>
        <div className="infrastructure-visual__rows">
          {statuses.map((status) => {
            const Icon = status.icon;
            return (
              <div key={status.label}>
                <Icon size={16} /><strong>{status.label}</strong><span className={`infra-status infra-status--${status.tone}`}><i />{status.value}</span>
              </div>
            );
          })}
        </div>
        <div className="infrastructure-visual__footer"><span>secure connection</span><b>SYNCED</b></div>
      </div>
    </div>
  );
}
