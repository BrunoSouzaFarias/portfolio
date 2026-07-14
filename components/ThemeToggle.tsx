"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Alternar tema claro/escuro"
      className="fixed bottom-4 left-1/2 z-50 h-7 w-13 -translate-x-1/2 rounded-full bg-accent px-1"
    >
      <span className="theme-knob block h-5 w-5 rounded-full bg-[#1c1c1a] transition-transform duration-300" />
    </button>
  );
}
