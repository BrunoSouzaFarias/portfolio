"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

type CursorMode = "default" | "hi" | "link";

function subscribePointer(onChange: () => void) {
  const mq = window.matchMedia("(pointer: fine)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

export default function Cursor() {
  const enabled = useSyncExternalStore(
    subscribePointer,
    () => window.matchMedia("(pointer: fine)").matches,
    () => false
  );
  const [mode, setMode] = useState<CursorMode>("default");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 35 });
  const sy = useSpring(y, { stiffness: 400, damping: 35 });

  useEffect(() => {
    if (!enabled) return;
    document.body.dataset.customCursor = "true";

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const alvo = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor]");
      if (alvo) {
        setMode(alvo.dataset.cursor as CursorMode);
      } else if (
        (e.target as HTMLElement).closest(
          "a, button, [role='button'], input, select, textarea, label"
        )
      ) {
        setMode("link");
      } else {
        setMode("default");
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      delete document.body.dataset.customCursor;
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = mode === "hi" ? 96 : mode === "link" ? 56 : 18;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full bg-accent text-accent-fg font-display select-none"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ width: size, height: size }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {mode === "hi" && <span className="text-2xl">Oi</span>}
      {mode === "link" && <span className="text-xl">↗</span>}
    </motion.div>
  );
}
