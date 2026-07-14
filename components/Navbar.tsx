"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { site } from "@/lib/data";

const links = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Formação", href: "/#formacao" },
];

function MobileMenu({ onClose }: { onClose: () => void }) {
  // trava scroll do body enquanto menu aberto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex flex-col bg-bg/95 backdrop-blur-md"
    >
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          aria-label="Fechar menu"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-elevated text-xl"
        >
          ✕
        </button>
      </div>
      <nav className="flex flex-1 flex-col items-center justify-center gap-8">
        {links.map((link, i) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="font-display text-4xl transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: links.length * 0.08, duration: 0.3 }}
        >
          <Link
            href="/#contato"
            onClick={onClose}
            className="btn-pill mt-4"
          >
            Contato
          </Link>
        </motion.div>
      </nav>
    </motion.div>
  );
}

export default function Navbar() {
  const { scrollY } = useScroll();
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => scrollY.on("change", (v) => setCompact(v > 120)), [scrollY]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <AnimatePresence mode="wait" initial={false}>
          {compact ? (
            <motion.div
              key="badge"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="flex items-center gap-3 rounded-full bg-bg-elevated/90 py-2 pl-2 pr-5 shadow-lg backdrop-blur"
            >
              <Image
                src={site.foto}
                alt={site.nome}
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <Link href="/#contato" className="text-sm font-medium">
                {site.disponivel}
              </Link>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
            </motion.div>
          ) : (
            <motion.nav
              key="nav"
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              className="flex items-center gap-2 rounded-full bg-bg-elevated/90 p-2 shadow-lg backdrop-blur sm:gap-6 sm:pl-3"
            >
              <Link href="/" aria-label="Home">
                <Image
                  src={site.foto}
                  alt={site.nome}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </Link>
              <ul className="hidden items-center gap-6 sm:flex">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* hamburger mobile */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-card sm:hidden"
              >
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="0" y1="1" x2="18" y2="1" />
                  <line x1="0" y1="7" x2="18" y2="7" />
                  <line x1="0" y1="13" x2="18" y2="13" />
                </svg>
              </button>
              <Link
                href="/#contato"
                className="hidden rounded-full bg-bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-fg sm:block"
              >
                Contato
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
