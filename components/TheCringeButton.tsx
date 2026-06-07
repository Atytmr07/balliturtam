"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

type Splat = {
  id: number;
  top: number;
  left: number;
  rotate: number;
  size: number;
  hue: string;
  text: string;
};

const HUES = ["#DC143C", "#FF69B4", "#ffd34e", "#db2777", "#f472b6"];

const PHRASES = [
  "BALLI TURTAM 🥺",
  "KASLI TURTAM 💪",
  "BİRİCİĞİM 💖",
  "TURTAM 🍯",
  "AŞKIM 💞",
];

// Fire a burst of heart / honey colored confetti from the button.
function honeyHeartBurst() {
  const heart = confetti.shapeFromText
    ? confetti.shapeFromText({ text: "🥺", scalar: 2 })
    : undefined;
  confetti({
    particleCount: 60,
    spread: 90,
    startVelocity: 45,
    origin: { y: 0.7 },
    colors: HUES,
    shapes: heart ? [heart, "circle"] : ["circle"],
    scalar: 1.6,
  });
}

export default function TheCringeButton() {
  const [count, setCount] = useState(0);
  const [splats, setSplats] = useState<Splat[]>([]);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
    honeyHeartBurst();
    // After a while each press spits out two splats — full screen takeover.
    setSplats((prev) => {
      const batch = (prev.length > 18 ? 2 : 1);
      const made: Splat[] = Array.from({ length: batch }, () => ({
        id: Date.now() + Math.random(),
        top: Math.random() * 92,
        left: Math.random() * 88,
        rotate: Math.random() * 60 - 30,
        size: 1 + Math.random() * 2.6,
        hue: HUES[Math.floor(Math.random() * HUES.length)],
        text: PHRASES[Math.floor(Math.random() * PHRASES.length)],
      }));
      return [...prev, ...made];
    });
  }, []);

  const reset = () => setSplats([]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-fuchsia-300 px-4 py-24">
      {/* The viewport slowly fills with BALLI TURTAM as he keeps clicking */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {splats.map((s) => (
          <motion.span
            key={s.id}
            initial={{ scale: 0, rotate: s.rotate - 40, opacity: 0 }}
            animate={{ scale: 1, rotate: s.rotate, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 12 }}
            className="absolute font-cursive font-bold drop-shadow"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              fontSize: `${s.size}rem`,
              color: s.hue,
            }}
          >
            {s.text}
          </motion.span>
        ))}
      </div>

      <h2 className="relative z-10 mb-10 max-w-3xl text-center font-cursive text-4xl text-crimson drop-shadow sm:text-5xl">
        Hadi turtam, utanma...
      </h2>

      <motion.button
        onClick={handleClick}
        whileTap={{ scale: 0.85 }}
        className="animate-jiggle relative z-10 rounded-full border-8 border-white bg-hotpink px-10 py-8 font-comic text-2xl font-extrabold text-white shadow-[0_15px_40px_rgba(219,39,119,0.7)] sm:text-3xl"
      >
        Bana Bir Kez Daha Ballı Turtam De! 🍯
      </motion.button>

      <motion.p
        key={count}
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 mt-10 font-script text-3xl font-bold text-rose-700"
      >
        {count === 0
          ? "Tıkla da kalbim taşsın 💗"
          : `${count} kez ballı turtam dedin 🥺 (ve ekranım taştı)`}
      </motion.p>

      {count >= 15 && (
        <p className="relative z-10 mt-4 max-w-md text-center font-comic text-lg font-bold text-fuchsia-900">
          Tamam tamam anladık ne kadar sevdiğini... ama durma yine de 💞
        </p>
      )}

      {splats.length > 0 && (
        <button
          onClick={reset}
          className="relative z-10 mt-6 rounded-full border-2 border-crimson bg-white/80 px-5 py-2 font-comic text-sm font-bold text-crimson shadow transition hover:bg-white"
        >
          (yeter turtam, ekranı temizle) 🧹
        </button>
      )}
    </section>
  );
}
