"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, Plus } from "lucide-react";
import { useId, useState } from "react";

interface ServiceDetailsProps {
  highlights: string[];
  details: string[];
}

export function ServiceDetails({ highlights, details }: ServiceDetailsProps) {
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();
  const detailsId = useId();

  return (
    <div className="service-details">
      <ul className="service-highlights">
        {highlights.map((feature) => (
          <li key={feature}><Check size={15} strokeWidth={2.2} aria-hidden="true" />{feature}</li>
        ))}
      </ul>
      {details.length > 0 && (
        <>
          <button
            type="button"
            className="service-details__toggle"
            aria-expanded={expanded}
            aria-controls={detailsId}
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded ? "Mostrar menos" : "Ver todo lo que podemos hacer"}
            <motion.span animate={reduced ? undefined : { rotate: expanded ? 45 : 0 }}><Plus size={17} /></motion.span>
          </button>
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.ul
                id={detailsId}
                className="service-details__expanded"
                initial={reduced ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: reduced ? 0 : 0.3 }}
              >
                {details.map((detail) => <li key={detail}>{detail}</li>)}
              </motion.ul>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
