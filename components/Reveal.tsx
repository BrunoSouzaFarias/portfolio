"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

const wordVariants: Variants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.75,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

/**
 * Título gigante com stagger palavra a palavra, subindo de um clip — como no
 * template. O whileInView fica no contêiner (as palavras nascem clipadas pelo
 * overflow-hidden, então um observer nelas nunca dispararia).
 */
export function SplitTitle({
  text,
  className = "",
  as: Tag = "h2",
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const words = text.split(" ");
  return (
    <Tag className={`font-display ${className}`}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden
        className="flex flex-wrap gap-x-[0.28em]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="overflow-hidden pb-[0.16em] -mb-[0.16em] pt-[0.14em] -mt-[0.14em]"
          >
            <motion.span className="inline-block" variants={wordVariants} custom={i}>
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
