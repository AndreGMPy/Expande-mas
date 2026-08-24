"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Film, Pause, Play, Scissors } from "lucide-react";

export function ContentStudioVisual() {
  const reduced = useReducedMotion();

  return (
    <div className="product-visual content-studio" aria-hidden="true">
      <div className="product-visual__topbar">
        <span><Film size={15} />Estudio de contenido</span>
        <span className="visual-status"><i /> Grabando</span>
      </div>
      <div className="content-studio__workspace">
        <div className="content-studio__tools">
          <span className="is-active">9:16</span><span>1:1</span><span>16:9</span>
        </div>
        <motion.div
          className="content-studio__preview"
          initial={reduced ? false : { opacity: 0.75, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="content-studio__preview-grid" />
          <div className="content-studio__subject">
            <Image
              src="/expande-plus/service-social-media.png"
              alt=""
              width={609}
              height={615}
              sizes="96px"
            />
          </div>
          <span className="content-studio__rec"><i /> REC</span>
          <span className="content-studio__time">00:12</span>
          <span className="content-studio__play"><Play size={19} fill="currentColor" /></span>
        </motion.div>
        <div className="content-studio__edit">
          <div className="content-studio__controls"><Pause size={14} /><span>00:12 / 00:18</span><Scissors size={14} /></div>
          <div className="content-studio__timeline"><motion.i initial={reduced ? { scaleX: 1 } : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.85 }} /><b /></div>
          <div className="content-studio__formats"><span className="is-active">Reel</span><span>Historia</span><span>Post</span></div>
        </div>
      </div>
    </div>
  );
}
