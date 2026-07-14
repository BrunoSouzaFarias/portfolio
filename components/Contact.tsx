"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { servicosContato, site } from "@/lib/data";
import { Reveal, SplitTitle } from "./Reveal";

export default function Contact() {
  const [enviado, setEnviado] = useState(false);

  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);

    // honeypot — bot preenche, humano não vê
    if (dados.get("website")) return;

    const assunto = encodeURIComponent(
      `Contato pelo portfólio — ${dados.get("servico") || "Geral"}`
    );
    const corpo = encodeURIComponent(
      `Nome: ${dados.get("nome")}\nEmail: ${dados.get("email")}\n\n${dados.get("mensagem")}`
    );
    window.location.href = `mailto:${site.email}?subject=${assunto}&body=${corpo}`;
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section id="contato" className="mx-auto w-full max-w-6xl px-4 py-24 md:py-32">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal className="hidden md:block">
          <Image
            src={site.foto}
            alt={site.nome}
            width={460}
            height={560}
            className="w-full max-w-sm rounded-2xl object-cover"
            data-cursor="hi"
          />
        </Reveal>

        <div>
          <SplitTitle text="Vamos trabalhar juntos" className="section-title mb-4" />
          <Reveal delay={0.1}>
            <p className="mb-10 text-fg-muted">
              Vamos construir algo impactante juntos — seja o seu site, uma
              automação ou a sua próxima grande ideia.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={enviar} className="flex flex-col gap-5">
              {/* honeypot — escondido de humanos */}
              <input
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-accent">
                  Nome
                  <input name="nome" required placeholder="Seu nome" />
                </label>
                <label className="flex flex-col gap-2 text-sm text-accent">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="voce@email.com"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-accent">
                Serviço desejado?
                <select name="servico" defaultValue="">
                  <option value="" disabled>
                    Selecione...
                  </option>
                  {servicosContato.map((servico) => (
                    <option key={servico} value={servico}>
                      {servico}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-accent">
                Como posso ajudar?
                <textarea
                  name="mensagem"
                  rows={5}
                  required
                  placeholder="Olá, gostaria de saber mais sobre..."
                />
              </label>
              <div className="flex items-center gap-4">
                <button type="submit" className="btn-pill self-start">
                  Enviar
                </button>
                <AnimatePresence>
                  {enviado && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-accent"
                    >
                      ✓ Abrindo seu email…
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
