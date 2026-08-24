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

export function AdminDashboardVisual() {
  const reduced = useReducedMotion();
  return (
    <div className="product-visual admin-visual" aria-hidden="true">
      <motion.aside className="admin-visual__sidebar" initial={reduced ? false : { opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <b>E<span>+</span></b>
        <nav>{nav.map((item, index) => { const Icon = item.icon; return <span className={index === 1 ? "is-active" : ""} key={item.label}><Icon size={14} />{item.label}</span>; })}</nav>
        <CircleUserRound size={22} />
      </motion.aside>
      <div className="admin-visual__main">
        <motion.i className="admin-visual__scanner" initial={reduced ? { opacity: 0 } : { opacity: 0, y: 0 }} whileInView={reduced ? { opacity: 0 } : { opacity: [0, 0.5, 0], y: 330 }} viewport={{ once: true }} transition={{ duration: 1.25, delay: 0.25 }} />
        <div className="admin-visual__heading"><div><small>Panel administrativo</small><strong>Ventas</strong></div><span>Vista ilustrativa</span></div>
        <div className="admin-visual__stats"><div><span>Operación</span><b>Todo en orden</b></div><div><span>Pedidos activos</span><b>18</b></div></div>
        <div className="admin-visual__graph">
          <div><strong>Actividad</strong><small>Esta semana</small></div>
          <div className="admin-visual__bars">
            {[46, 64, 54, 81, 70, 92, 76].map((height, index) => (
              <motion.i key={`${height}-${index}`} style={{ height: `${height}%` }} initial={reduced ? { scaleY: 1 } : { scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: reduced ? 0 : index * 0.05 }} />
            ))}
          </div>
        </div>
        <div className="admin-visual__orders"><strong>Pedidos recientes</strong>{orders.map((order, index) => <motion.div key={order.id} initial={reduced ? false : { opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: reduced ? 0 : 0.45 + index * 0.09 }}><b>{order.id}</b><span className={`order-status order-status--${order.tone}`}>{order.status}</span></motion.div>)}</div>
      </div>
    </div>
  );
}
