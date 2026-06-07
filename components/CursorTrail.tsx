"use client";

import { useEffect, useState } from "react";

type Trail = { id: number; x: number; y: number; glyph: string };

const GLYPHS = ["💖", "🍯", "🥺", "💗", "✨"];

// Hearts/honey that bloom and fade wherever the cursor goes.
export default function CursorTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - last < 60) return; // throttle so it stays tasteful-ish
      last = now;
      const t: Trail = {
        id: now + Math.random(),
        x: e.clientX,
        y: e.clientY,
        glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      };
      setTrails((prev) => [...prev.slice(-18), t]);
      window.setTimeout(() => {
        setTrails((prev) => prev.filter((p) => p.id !== t.id));
      }, 900);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40">
      {trails.map((t) => (
        <span
          key={t.id}
          className="absolute text-xl"
          style={{
            left: t.x,
            top: t.y,
            transform: "translate(-50%, -50%)",
            animation: "trail-pop 0.9s ease-out forwards",
          }}
        >
          {t.glyph}
        </span>
      ))}
    </div>
  );
}
