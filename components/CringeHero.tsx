"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

// A tiled wall of desperate, affectionate emojis behind the whole hero.
function EmojiWallpaper() {
  const row = "🥺 💖 🍯 ".repeat(40);
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 select-none overflow-hidden leading-loose opacity-30"
    >
      {Array.from({ length: 24 }).map((_, i) => (
        <div
          key={i}
          className="whitespace-nowrap text-3xl tracking-widest sm:text-4xl"
          style={{ transform: `translateX(${i % 2 === 0 ? "-2rem" : "-5rem"})` }}
        >
          {row}
        </div>
      ))}
    </div>
  );
}

// Emojis orbiting around the heart photo frame, like planets around the sun.
function OrbitingLove() {
  const items = ["🐝", "💖", "🍯", "🥺", "💞", "✨"];
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 [animation:spin-orbit_14s_linear_infinite]"
    >
      {items.map((g, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        const r = 190;
        return (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 text-3xl"
            style={{
              transform: `translate(-50%, -50%) translate(${Math.cos(angle) * r}px, ${
                Math.sin(angle) * r
              }px)`,
            }}
          >
            {g}
          </span>
        );
      })}
    </div>
  );
}

const NICKNAMES = [
  "Biricik Ballı Turtam...",
  "Kaslı Bal Kavanozum...",
  "Karanlık Dünyamın Güneşi...",
  "Kalbimin Tek PR'ı...",
  "Vıcık Vıcık Aşkım...",
];

export default function CringeHero() {
  const [idx, setIdx] = useState(0);

  // Cycle the cringe nickname under the headline.
  useEffect(() => {
    const t = window.setInterval(
      () => setIdx((i) => (i + 1) % NICKNAMES.length),
      2200
    );
    return () => window.clearInterval(t);
  }, []);

  // A celebratory confetti pop the moment the page loads.
  useEffect(() => {
    const heart = confetti.shapeFromText
      ? confetti.shapeFromText({ text: "🥺", scalar: 2 })
      : undefined;
    const fire = () =>
      confetti({
        particleCount: 90,
        spread: 110,
        startVelocity: 45,
        origin: { y: 0.35 },
        colors: ["#DC143C", "#FF69B4", "#ffd34e", "#db2777"],
        shapes: heart ? [heart, "circle"] : ["circle"],
        scalar: 1.5,
      });
    const t = window.setTimeout(fire, 350);
    return () => window.clearTimeout(t);
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 text-center [animation:gradient-shift_12s_ease_infinite] [background-size:300%_300%] [background-image:linear-gradient(120deg,#fbcfe8,#fecdd3,#f5d0fe,#fbcfe8)]">
      <EmojiWallpaper />

      {/* Floating honey jars drifting up the sides */}
      {["8%", "88%", "22%", "75%", "50%"].map((left, i) => (
        <motion.div
          key={left}
          className="pointer-events-none absolute bottom-0 text-5xl"
          style={{ left }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [-20, -700], opacity: [0, 1, 0], rotate: [0, 25, -25, 0] }}
          transition={{
            duration: 7 + i,
            repeat: Infinity,
            delay: i * 1.1,
            ease: "easeInOut",
          }}
        >
          🍯
        </motion.div>
      ))}

      {/* 21st birthday badge */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: -8 }}
        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
        className="relative z-10 mb-6"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="rounded-full border-4 border-white bg-crimson px-6 py-2 font-comic text-sm font-extrabold uppercase tracking-widest text-yellow-200 shadow-xl sm:text-base"
        >
          🎂 21. Yaş Özel • Sadece Senin İçin Turtam 🍯
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 9 }}
        className="relative z-10 font-cursive text-5xl leading-tight drop-shadow-[0_3px_0_rgba(255,255,255,0.9)] sm:text-7xl"
      >
        <span className="bg-gradient-to-r from-crimson via-hotpink to-fuchsia-600 bg-clip-text text-transparent">
          İyi ki Doğdun,
        </span>
      </motion.h1>

      {/* Rotating cringe nickname */}
      <div className="relative z-10 mt-3 flex h-16 items-center justify-center sm:h-20">
        <AnimatePresence mode="wait">
          <motion.span
            key={idx}
            initial={{ y: 24, opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -24, opacity: 0, rotateX: 90 }}
            transition={{ duration: 0.45 }}
            className="font-script text-4xl font-bold text-hotpink drop-shadow sm:text-6xl"
          >
            {NICKNAMES[idx]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* The pulsing heart-shaped photo frame with orbiting love */}
      <div className="relative z-10 mt-14 grid place-items-center">
        <OrbitingLove />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* glowing aura */}
          <div className="absolute -inset-6 -z-10 animate-pulse rounded-full bg-fuchsia-400/50 blur-2xl" />
          <div className="heart-shape h-72 w-72 bg-gradient-to-br from-rose-300 via-pink-300 to-fuchsia-400 shadow-2xl ring-8 ring-white/70">
            <img
              src="/deniz-01.jpeg"
              alt="Biricik Ballı Turtam Deniz"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.button
        onClick={scrollDown}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.92 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ y: { duration: 1.6, repeat: Infinity } }}
        className="relative z-10 mt-16 rounded-full border-4 border-white bg-hotpink px-8 py-4 font-comic text-xl font-extrabold text-white shadow-[0_12px_30px_rgba(219,39,119,0.6)]"
      >
        Aşağı kaydır da sana olan aşkımı gör 👇💞
      </motion.button>
    </section>
  );
}
