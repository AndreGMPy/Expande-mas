"use client";

import { motion, useReducedMotion } from "motion/react";
import { BarChart3, Boxes, CircleUserRound, LayoutDashboard, PackageCheck, ShoppingCart, UsersRound } from "lucide-react";

const nav = [
  { label: "Inicio", icon: LayoutDashboard }, { label: "Ventas", icon: BarChart3 },
  { label: "Pedidos", icon: ShoppingCart }, { label: "Clientes", icon: UsersRound },
  { label: "Inventario", icon: Boxes }, { label: "Reportes", icon: PackageCheck },
];

const orders = [
  { id: "#1048", status: "Preparando", tone: "purple" },
  { id: "#1049", status: "Enviado", tone: "cyan" },
  { id: "#1050", status: "Nuevo", tone: "green" },
];

const barVariants = {
  hidden: { scaleY: 0 },
  visible: (index: number) => ({ scaleY: 1, transition: { delay: index * 0.05 } }),
};

const orderVariants = {
  hidden: { opacity: 0, x: 8 },
  visible: (index: number) => ({ opacity: 1, x: 0, transition: { delay: 0.45 + index * 0.09 } }),
};

export function AdminDashboardVisual() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="product-visual admin-visual"
      aria-hidden="true"
      initial={reduced ? "visible" : "hidden"}
      animate={reduced ? "visible" : undefined}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.aside className="admin-visual__sidebar" variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } }}>
        <b>E<span>+</span></b>
        <nav>{nav.map((item, index) => { const Icon = item.icon; return <span className={index === 1 ? "is-active" : ""} key={item.label}><Icon size={14} />{item.label}</span>; })}</nav>
        <CircleUserRound size={22} />
      </motion.aside>
      <div className="admin-visual__main">
        <motion.i className="admin-visual__scanner" variants={{ hidden: { opacity: 0, y: 0 }, visible: reduced ? { opacity: 0 } : { opacity: [0, 0.5, 0], y: 330, transition: { duration: 1.25, delay: 0.25 } } }} />
        <div className="admin-visual__heading"><div><small>Panel administrativo</small><strong>Ventas</strong></div><span>Vista ilustrativa</span></div>
        <div className="admin-visual__stats"><div><span>Operación</span><b>Todo en orden</b></div><div><span>Pedidos activos</span><b>18</b></div></div>
        <div className="admin-visual__graph">
          <div><strong>Actividad</strong><small>Esta semana</small></div>
          <div className="admin-visual__bars">
            {[46, 64, 54, 81, 70, 92, 76].map((height, index) => (
              <motion.i key={`${height}-${index}`} custom={index} variants={barVariants} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
        <div className="admin-visual__orders"><strong>Pedidos recientes</strong>{orders.map((order, index) => <motion.div key={order.id} custom={index} variants={orderVariants}><b>{order.id}</b><span className={`order-status order-status--${order.tone}`}>{order.status}</span></motion.div>)}</div>
      </div>
    </motion.div>
  );
}
