"use client";

import { useEffect, useState } from "react";

type Drop = {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
  glyph: string;
};

const GLYPHS = ["💖", "🍯", "🥺", "💗", "💞", "🐝", "💌", "🌸"];

// A permanent, gentle rain of affectionate emojis over the entire page.
export default function HeartRain({ count = 28 }: { count?: number }) {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    setDrops(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 7 + Math.random() * 9,
        delay: Math.random() * 10,
        size: 0.9 + Math.random() * 1.8,
        glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      }))
    );
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      {drops.map((d) => (
        <span
          key={d.id}
          className="absolute -top-16 will-change-transform"
          style={{
            left: `${d.left}%`,
            fontSize: `${d.size}rem`,
            animation: `heart-rain ${d.duration}s linear ${d.delay}s infinite`,
          }}
        >
          {d.glyph}
        </span>
      ))}
    </div>
  );
}
