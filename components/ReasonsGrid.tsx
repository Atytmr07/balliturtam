"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const REASONS = [
  "Gülüşün bal gibi 🍯",
  "Kasların kader 💪",
  "Protein shake estetiğin 🥤",
  "Sabah surat asışın bile tatlı 🥱",
  "Kaşların ayrı sanat 🫠",
  "Squat formun şiir gibi 🏋️",
  "Bana ballı turtam demen 🥺",
  "Saçların rüzgarda 💇",
  "Kahkahan deprem gibi 🌋",
  "Spor çantanın kokusu (şaka) 🎒",
  "Selfie açın profesyonel 🤳",
  "Bana sürekli bağırman 📣",
  "Cömert kalbin 💖",
  "Komik dansların 🕺",
  "Yemek yiyişin iştah açıyor 🍗",
  "Whatsapp'ta geç cevap verişin bile çekici 📱",
  "Filmde uyuyakalman 😴",
  "Araba kullanırken şarkı söylemen 🚗",
  "Bana attığın absürt memeler 😂",
  "Sadık dostluğun 🤝",
  "Sadece... sen olman 🥹",
];

// 21 reasons — one per year. Each card flips to reveal the cringe on tap/hover.
function ReasonCard({ index, text }: { index: number; text: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      className="group h-32 [perspective:1000px]"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative h-full w-full [transform-style:preserve-3d]"
      >
        {/* front */}
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-hotpink to-crimson text-4xl font-extrabold text-white shadow-lg [backface-visibility:hidden]">
          {index + 1}
        </div>
        {/* back */}
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl border-4 border-pink-300 bg-white p-3 text-center font-comic text-sm font-bold text-crimson shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {text}
        </div>
      </motion.div>
    </button>
  );
}

export default function ReasonsGrid() {
  return (
    <section className="relative z-10 bg-pink-100 px-4 py-24">
      <h2 className="mb-3 text-center font-cursive text-4xl text-hotpink drop-shadow sm:text-6xl">
        Seni Sevmemin 21 Sebebi 🥺
      </h2>
      <p className="mx-auto mb-12 max-w-xl text-center font-comic text-lg font-bold text-fuchsia-700">
        Her yaşın için bir sebep. Kartların üstüne gel de itiraf edeyim 💞
      </p>
      <div className="mx-auto grid max-w-4xl grid-cols-3 gap-3 sm:grid-cols-7">
        {REASONS.map((r, i) => (
          <ReasonCard key={r} index={i} text={r} />
        ))}
      </div>
    </section>
  );
}
