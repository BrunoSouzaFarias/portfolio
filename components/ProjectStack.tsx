"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { projetos } from "@/lib/data";
import { Reveal, SplitTitle } from "./Reveal";

function Card({
  projeto,
  index,
  total,
  progress,
}: {
  projeto: (typeof projetos)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="hidden md:sticky md:top-0 md:flex h-svh items-center justify-center px-4">
      <motion.a
        href={projeto.url}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="link"
        style={{ scale, top: `calc(4rem + ${index * 14}px)` }}
        className="relative flex h-[72svh] w-full max-w-5xl flex-col items-center justify-center overflow-hidden rounded-3xl p-8 text-center"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(140deg, ${projeto.cor}33 0%, #202020 55%, ${projeto.cor}22 100%), #232321`,
          }}
        />
        <div
          className="absolute -top-24 left-1/2 h-72 w-[130%] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: projeto.cor }}
        />
        <div className="relative z-10 flex flex-col items-center gap-5">
          <span className="rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-fg">
            {projeto.tag}
          </span>
          <h3 className="font-display text-5xl text-white md:text-7xl">{projeto.titulo}</h3>
          <p className="max-w-xl text-neutral-300">{projeto.descricao}</p>
          <span className="mt-2 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-accent-fg transition-transform duration-300 hover:rotate-45">
            ↗
          </span>
        </div>
      </motion.a>
    </div>
  );
}

function MobileCard({ projeto }: { projeto: (typeof projetos)[number] }) {
  return (
    <Reveal>
      <a
        href={projeto.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex min-h-[50svh] flex-col items-center justify-center overflow-hidden rounded-2xl p-6 text-center"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(140deg, ${projeto.cor}33 0%, #202020 55%, ${projeto.cor}22 100%), #232321`,
          }}
        />
        <div
          className="absolute -top-16 left-1/2 h-48 w-[130%] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: projeto.cor }}
        />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-fg">
            {projeto.tag}
          </span>
          <h3 className="font-display text-3xl text-white">{projeto.titulo}</h3>
          <p className="max-w-sm text-sm text-neutral-300">{projeto.descricao}</p>
          <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-xl text-accent-fg">
            ↗
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function ProjectStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.4,
  });

  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-4">
        <SplitTitle text="Projetos em destaque" className="section-title mb-4" />
        <Reveal delay={0.15}>
          <p className="mb-8 max-w-xl text-fg-muted">
            Projetos que refletem minha paixão por unir estratégia e código —
            resolvendo problemas reais com soluções práticas.
          </p>
        </Reveal>
      </div>

      {/* mobile: grid simples */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-4 md:hidden">
        {projetos.map((projeto) => (
          <MobileCard key={projeto.slug} projeto={projeto} />
        ))}
      </div>

      {/* desktop: stack sticky */}
      <div ref={ref} className="hidden md:block">
        {projetos.map((projeto, i) => (
          <Card
            key={projeto.slug}
            projeto={projeto}
            index={i}
            total={projetos.length}
            progress={progress}
          />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="https://github.com/BrunoSouzaFarias?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill"
        >
          Ver todos no GitHub
        </a>
      </div>
    </section>
  );
}
