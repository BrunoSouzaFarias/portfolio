import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import SocialIcons from "@/components/SocialIcons";
import { Reveal, SplitTitle } from "@/components/Reveal";
import { site, sobre } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre — Bruno Souza Farias",
  description: sobre.resumo,
};

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto flex min-h-svh w-full max-w-6xl items-center px-4 pt-28 pb-16">
          <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <SplitTitle text="Sobre mim" as="h1" className="hero-title mb-8" />
              <Reveal delay={0.15}>
                <p className="font-display mb-6 text-2xl">{site.nome}</p>
                <p className="mb-4 text-lg leading-relaxed">{sobre.resumo}</p>
                <p className="mb-8 text-fg-muted leading-relaxed">{sobre.detalhe}</p>
                <SocialIcons />
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Image
                src={site.foto}
                alt={site.nome}
                width={460}
                height={560}
                priority
                className="mx-auto w-full max-w-sm rounded-2xl object-cover"
                data-cursor="hi"
              />
            </Reveal>
          </div>
        </section>
        <Marquee />
        <Experience />
        <Education />
        <section className="mx-auto w-full max-w-6xl px-4 pb-24 text-center">
          <Reveal>
            <Link href="/#contato" className="btn-pill">
              Vamos trabalhar juntos
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
