import { experiencias, statDestaque } from "@/lib/data";
import Counter from "./Counter";
import { Reveal, SplitTitle } from "./Reveal";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto w-full max-w-6xl px-4 py-24 md:py-32">
      <SplitTitle text="Experiência" className="section-title mb-4" />
      <Reveal delay={0.15}>
        <p className="mb-14 max-w-xl text-fg-muted">
          Mais de uma década entre varejo e tecnologia — liderando pessoas,
          processos e agora operações de TI na saúde pública.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* card verde destacado, como o "200% Growth" do template */}
        <Reveal className="sm:row-span-2">
          <div className="flex h-full flex-col justify-between rounded-2xl bg-accent p-7 text-accent-fg">
            <p className="text-lg font-medium leading-snug">{statDestaque.texto}</p>
            <div className="mt-10">
              <Counter
                value={statDestaque.valor}
                suffix={statDestaque.sufixo}
                className="font-display block text-7xl"
              />
              <span className="mt-1 block text-sm">{statDestaque.label}</span>
            </div>
          </div>
        </Reveal>

        {experiencias.map((exp, i) => (
          <Reveal key={exp.cargo} delay={i * 0.06}>
            <div className="flex h-full flex-col rounded-2xl bg-bg-card p-7">
              <span className="tag-pill mb-5 self-start">{exp.periodo}</span>
              <h3 className="font-display text-2xl">{exp.cargo}</h3>
              <p className="mb-4 mt-1 text-sm text-accent">{exp.empresa}</p>
              <p className="text-sm leading-relaxed text-fg-muted">{exp.descricao}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
