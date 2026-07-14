import Image from "next/image";
import Link from "next/link";
import { site, sobre } from "@/lib/data";
import Counter from "./Counter";
import SocialIcons from "./SocialIcons";
import { Reveal, SplitTitle } from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="mx-auto w-full max-w-6xl px-4 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr] md:gap-20">
        <div>
          <SplitTitle text="Sobre mim" className="section-title mb-8" />
          <Reveal delay={0.1}>
            <p className="mb-4 text-lg leading-relaxed">{sobre.resumo}</p>
            <p className="mb-10 text-fg-muted leading-relaxed">{sobre.detalhe}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mb-10 grid grid-cols-3 gap-6">
              {sobre.stats.map((stat) => (
                <div key={stat.label}>
                  <Counter
                    value={stat.valor}
                    suffix={stat.sufixo}
                    className="font-display block text-5xl text-accent md:text-6xl"
                  />
                  <span className="mt-2 block text-sm text-fg-muted">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <span className="mb-1 block font-semibold">Me liga :</span>
                <a href={site.telefoneHref} className="text-fg-muted hover:text-accent">
                  {site.telefone}
                </a>
              </div>
              <div>
                <span className="mb-1 block font-semibold">Email :</span>
                <a href={`mailto:${site.email}`} className="text-fg-muted hover:text-accent">
                  {site.email}
                </a>
              </div>
            </div>
            <SocialIcons className="mb-10" />
            <Link href="/sobre" className="btn-pill">
              Minha história
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="order-first md:order-none">
          <div className="md:rotate-3 md:transition-transform md:duration-500 md:hover:rotate-0">
            <Image
              src={site.foto}
              alt={site.nome}
              width={460}
              height={560}
              className="w-full rounded-2xl object-cover"
              data-cursor="hi"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
