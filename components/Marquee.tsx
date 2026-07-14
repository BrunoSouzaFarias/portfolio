"use client";

import { motion, useReducedMotion } from "motion/react";
import { skillsMarquee } from "@/lib/data";

export default function Marquee() {
  const reducedMotion = useReducedMotion();
  const items = [...skillsMarquee, ...skillsMarquee];

  return (
    <div className="relative overflow-hidden border-y border-line py-5">
      <motion.div
        className="flex w-max items-center gap-10"
        animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={reducedMotion ? undefined : { duration: 28, ease: "linear", repeat: Infinity }}
      >
        {items.map((skill, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-3xl md:text-4xl">{skill}</span>
            <span className="text-accent text-2xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
