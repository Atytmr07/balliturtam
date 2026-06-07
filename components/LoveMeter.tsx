"use client";

import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import confetti from "canvas-confetti";

const STAGES = [
  { at: 0, label: "Henüz bana 'Ballı Turtam' demedin... 🥺", emoji: "😶" },
  { at: 20, label: "Kalbim ısınıyor turtam... 💗", emoji: "🥰" },
  { at: 45, label: "AŞK SEVİYESİ KRİTİK! 🔥", emoji: "😍" },
  { at: 70, label: "VICIK VICIK MODU AKTİF 🍯🍯", emoji: "🫠" },
  { at: 95, label: "AŞKÖLÇER PATLADI!!! 💥💖💥", emoji: "💞" },
];

// "Aşkölçer": every click pumps a love meter and shakes the whole screen.
export default function LoveMeter() {
  const [love, setLove] = useState(0);
  const controls = useAnimationControls();

  const pump = () => {
    const next = Math.min(100, love + 7 + Math.floor(Math.random() * 6));
    setLove(next);

    // Shake the world. Harder the fuller the meter gets.
    const mag = 4 + (next / 100) * 18;
    controls.start({
      x: [0, -mag, mag, -mag, mag, 0],
      y: [0, mag, -mag, mag, -mag, 0],
      rotate: [0, -1.5, 1.5, -1, 1, 0],
      transition: { duration: 0.4 },
    });

    confetti({
      particleCount: 30 + next,
      spread: 70 + next,
      origin: { y: 0.6 },
      colors: ["#DC143C", "#FF69B4", "#ffd34e", "#db2777"],
      scalar: 1.2,
    });

    if (next >= 100) {
      confetti({
        particleCount: 220,
        spread: 360,
        startVelocity: 40,
        origin: { y: 0.5 },
        colors: ["#DC143C", "#FF69B4", "#ffd34e"],
        scalar: 1.8,
      });
    }
  };

  const stage = [...STAGES].reverse().find((s) => love >= s.at) ?? STAGES[0];

  return (
    <motion.section
      animate={controls}
      className="relative z-10 flex min-h-screen flex-col items-center justify-center bg-rose-200 px-4 py-24 text-center"
    >
      <h2 className="mb-2 font-cursive text-4xl text-crimson drop-shadow sm:text-6xl">
        Resmî Aşkölçer 9000™
      </h2>
      <p className="mb-10 font-comic text-lg font-bold text-fuchsia-700">
        Bas bakalım turtam, sana olan sevgimi bilimsel olarak ölçelim 🔬💘
      </p>

      <div className="mb-6 text-7xl">{stage.emoji}</div>

      {/* meter */}
      <div className="relative h-12 w-full max-w-xl overflow-hidden rounded-full border-4 border-white bg-white/60 shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-rose-400 via-hotpink to-crimson"
          animate={{ width: `${love}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        />
        <span className="absolute inset-0 flex items-center justify-center font-comic text-xl font-extrabold text-white drop-shadow">
          %{love} AŞK
        </span>
      </div>

      <p className="mt-6 min-h-[2rem] font-script text-2xl font-bold text-rose-700 sm:text-3xl">
        {stage.label}
      </p>

      <motion.button
        onClick={pump}
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.05 }}
        className="mt-8 rounded-full border-8 border-white bg-crimson px-10 py-6 font-comic text-2xl font-extrabold text-white shadow-[0_15px_40px_rgba(220,20,60,0.6)]"
      >
        AŞKI YÜKSELT 💘
      </motion.button>
    </motion.section>
  );
}
