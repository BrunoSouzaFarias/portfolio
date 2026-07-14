import { formacao } from "@/lib/data";
import { Reveal, SplitTitle } from "./Reveal";

export default function Education() {
  return (
    <section id="formacao" className="mx-auto w-full max-w-6xl px-4 py-24 md:py-32">
      <SplitTitle text="Formação & Certificações" className="section-title mb-4" />
      <Reveal delay={0.15}>
        <p className="mb-14 max-w-xl text-fg-muted">
          Aprendizado contínuo: da graduação em Cibersegurança ao bootcamp
          full-stack e certificações em cloud e desenvolvimento web.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {formacao.map((item, i) => (
          <Reveal key={item.titulo} delay={i * 0.06}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="link"
              className="group block"
            >
              <div className="mb-5 flex items-center gap-4">
                <span className="tag-pill">{item.tag}</span>
                <span className="text-sm text-fg-muted">{item.data}</span>
              </div>
              <h3 className="font-display mb-3 text-3xl transition-colors group-hover:text-accent md:text-4xl">
                {item.titulo}
              </h3>
              <p className="text-fg-muted">{item.descricao}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
