"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faq } from "@/lib/data";
import { Reveal, SplitTitle } from "./Reveal";

export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="mx-auto w-full max-w-6xl px-4 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div>
          <SplitTitle text="Perguntas frequentes" className="section-title mb-6" />
          <Reveal delay={0.15}>
            <p className="text-fg-muted">
              Respostas para as dúvidas mais comuns que recebo. Se a sua não
              estiver aqui, é só me chamar — terei prazer em ajudar!
            </p>
          </Reveal>
        </div>

        <div role="region" aria-label="Perguntas frequentes">
          {faq.map((item, i) => {
            const panelId = `${baseId}-panel-${i}`;
            const triggerId = `${baseId}-trigger-${i}`;
            const isOpen = aberta === i;

            return (
              <Reveal key={item.pergunta} delay={i * 0.04}>
                <div className="border-b border-line">
                  <button
                    id={triggerId}
                    onClick={() => setAberta(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="font-display text-xl md:text-2xl">{item.pergunta}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-accent"
                      aria-hidden="true"
                    >
                      ⌃
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-fg-muted">{item.resposta}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
