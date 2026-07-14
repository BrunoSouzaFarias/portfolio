import { site } from "@/lib/data";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-accent px-4 pb-16 pt-14 text-accent-fg">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <span className="mb-1 block text-sm font-semibold">Email :</span>
            <a href={`mailto:${site.email}`} className="text-lg font-medium hover:underline">
              {site.email}
            </a>
          </div>
          <div>
            <span className="mb-1 block text-sm font-semibold">Me liga :</span>
            <a href={site.telefoneHref} className="text-lg font-medium hover:underline">
              {site.telefone}
            </a>
          </div>
          <div className="md:justify-self-end">
            <span className="mb-2 block text-sm font-semibold">Social :</span>
            <SocialIcons />
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-accent-fg/20 pt-6 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.</p>
          <p>
            Feito com Next.js em {site.local}
          </p>
        </div>
      </div>
    </footer>
  );
}
