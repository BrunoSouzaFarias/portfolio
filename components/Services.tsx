import { servicos } from "@/lib/data";
import { Reveal, SplitTitle } from "./Reveal";

export default function Services() {
  return (
    <section id="servicos" className="mx-auto w-full max-w-6xl px-4 py-24 md:py-32">
      <SplitTitle text="O que eu faço" className="section-title mb-4" />
      <Reveal delay={0.15}>
        <p className="mb-14 max-w-xl text-fg-muted">
          Da operação de TI ao código: serviços que unem desenvolvimento,
          automação e gestão para gerar resultado de verdade.
        </p>
      </Reveal>
      <div className="flex flex-col">
        {servicos.map((servico, i) => (
          <Reveal key={servico.numero} delay={i * 0.05}>
            <div className="group grid grid-cols-1 gap-4 border-t border-line py-10 transition-colors hover:bg-bg-elevated/40 md:grid-cols-[80px_1fr_1.2fr_auto] md:items-center md:gap-8 md:px-4">
              <span className="font-display text-2xl text-fg-muted">{servico.numero}</span>
              <h3 className="font-display text-3xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                {servico.titulo}
              </h3>
              <p className="text-fg-muted">{servico.descricao}</p>
              <div className="flex max-w-[220px] flex-wrap gap-2 justify-self-start md:justify-self-end">
                {servico.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
}
