"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { site } from "@/lib/data";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function TitleWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="overflow-hidden inline-block align-top pb-[0.16em] -mb-[0.16em] pt-[0.14em] -mt-[0.14em]">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const fotoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const tituloY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
    >
      {/* nome acima, alinhado ao início do bloco do título — como no template */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease }}
        className="font-display z-20 mb-2 w-full max-w-6xl text-center text-xl tracking-widest md:mb-0 md:text-left md:text-2xl"
      >
        {site.primeiroNome}
      </motion.p>

      {/* FULL-STACK [foto] DEVELOPER, com as palavras avançando sobre a foto */}
      <div className="relative flex w-full max-w-6xl flex-col items-center md:flex-row md:justify-center">
        <motion.h1
          style={{ y: tituloY }}
          className="font-display hero-title z-20 order-2 flex flex-col items-center text-center md:order-none md:contents"
        >
          <span className="md:z-20 md:-mr-14 md:text-right">
            <TitleWord word={site.titulo[0]} delay={0.35} />
          </span>
          <span className="md:z-20 md:-ml-14 md:order-3 md:text-left">
            <TitleWord word={site.titulo[1]} delay={0.5} />
          </span>
        </motion.h1>

        <motion.div
          style={{ y: fotoY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease }}
          className="relative z-10 order-1 mb-4 shrink-0 md:order-2 md:mb-0"
          data-cursor="hi"
        >
          <Image
            src={site.foto}
            alt={site.nome}
            width={340}
            height={440}
            priority
            className="h-[46svh] max-h-[440px] w-auto min-w-[240px] rounded-xl object-cover"
          />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease }}
        className="z-20 mt-8 w-full max-w-6xl text-center text-fg-muted md:text-right"
      >
        <span className="inline-block max-w-md">{site.subtitulo}</span>
      </motion.p>
    </section>
  );
}
