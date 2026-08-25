"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Bot, MessageCircle } from "lucide-react";
import { Fragment } from "react";

const messages = [
  { from: "Cliente", text: "Hola, ¿tienen disponible este producto?", side: "client" },
  { from: "Asistente", text: "¡Hola! Sí, tenemos disponibilidad. ¿Quieres que te muestre las opciones?", side: "assistant" },
  { from: "Cliente", text: "Sí.", side: "client" },
  { from: "Asistente", text: "Perfecto. ¿Buscas compra individual o mayoreo?", side: "assistant" },
];

const messageDelays = [0.12, 1.25, 2.05, 3.18];

const messageVariants = {
  hidden: { opacity: 0, y: 9 },
  visible: (index: number) => ({ opacity: 1, y: 0, transition: { delay: messageDelays[index], duration: 0.4 } }),
};

export function AIChatVisual() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="product-visual ai-visual"
      aria-hidden="true"
      initial={reduced ? "visible" : "hidden"}
      animate={reduced ? "visible" : undefined}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="ai-visual__ambient"><Image src="/expande-plus/service-ai-chatbot.png" alt="" width={615} height={675} sizes="(max-width: 640px) 1px, 112px" /></div>
      <div className="ai-visual__window">
        <div className="product-visual__topbar"><span><MessageCircle size={15} />Asistente digital</span><span className="visual-status"><i /> AI ACTIVE</span></div>
        <div className="ai-visual__messages">
          {messages.map((message, index) => (
            <Fragment key={`${message.from}-${index}`}>
              {message.side === "assistant" && (
                <motion.div
                  className="ai-typing"
                  variants={{
                    hidden: { opacity: 0, height: 0 },
                    visible: reduced
                      ? { opacity: 0, height: 0 }
                      : { opacity: [0, 1, 1, 0], height: [0, 26, 26, 0], transition: { duration: 0.72, delay: index === 1 ? 0.48 : 2.42 } },
                  }}
                ><i /><i /><i /></motion.div>
              )}
              <motion.div
                className={`ai-message ai-message--${message.side}`}
                custom={index}
                variants={messageVariants}
              >
                <small>{message.side === "assistant" && <Bot size={11} />}{message.from}</small>{message.text}
              </motion.div>
            </Fragment>
          ))}
        </div>
        <div className="ai-visual__input"><span>Escribe un mensaje…</span><i>↑</i></div>
      </div>
    </motion.div>
  );
}
