"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Photo = {
  caption: string;
  src: string;
};

const CAPTIONS = [
  "Bu gülüşe ömrümü veririm...",
  "Karanlık dünyamın güneşi...",
  "Kaslı ballı turtam...",
  "Sabah uyandığında ilk aklıma gelen...",
  "Bir bakışın yetiyor turtam...",
  "Protein shake'in kadar tatlısın...",
  "Kaşların kaderim oldu...",
  "Sen benim PR'ımsın (kişisel rekorum)...",
  "Saçların rüzgarda... ah turtam...",
  "Bu açıyı kim çekti, ödül versinler 📸",
  "Gözlerine bakınca bal akıyor 🍯",
  "Efsane duruş, efsane turta 💪",
  "Bu kareye bakınca kalbim hop ediyor 💗",
  "Dünyalar senin olsun biriciğim 🌍",
  "Sen gülünce bahar geliyor 🌸",
  "Bu pozun afiş olmalı turtam 🪧",
  "Tatlılıktan dişim ağrıdı 🦷",
  "Kalbimin tek motivasyonu sensin 🏋️",
  "İşte benim 21'lik efsanem 🎂",
  "Seninle her kare bir mucize ✨",
];

// 20 photos dropped into /public, each paired with a cringe caption.
const PHOTOS: Photo[] = Array.from({ length: 20 }, (_, i) => ({
  src: `/deniz-${String(i + 1).padStart(2, "0")}.jpeg`,
  caption: CAPTIONS[i % CAPTIONS.length],
}));

// One photo tile: spins 360° on hover and erupts a swarm of floating hearts.
function MuseumCard({ photo, index }: { photo: Photo; index: number }) {
  const [hearts, setHearts] = useState<number[]>([]);

  const erupt = () => {
    const batch = Array.from({ length: 4 }, (_, i) => Date.now() + i);
    setHearts((h) => [...h, ...batch]);
    // clean them up after they float away
    window.setTimeout(() => {
      setHearts((h) => h.slice(batch.length));
    }, 1400);
  };

  const heartGlyphs = ["💖", "💗", "💓", "🥺", "🍯", "💞"];

  return (
    <motion.div
      onHoverStart={erupt}
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="relative rounded-3xl border-4 border-pink-300 bg-white p-3 shadow-[0_10px_30px_rgba(244,114,182,0.5)]"
    >
      {/* erupting hearts */}
      {hearts.map((id, i) => (
        <span
          key={id}
          className="floating-heart"
          style={{
            left: `${(i * 9 + 5) % 90}%`,
            top: `${(i * 13) % 70}%`,
          }}
        >
          {heartGlyphs[i % heartGlyphs.length]}
        </span>
      ))}

      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 to-fuchsia-200">
        <img
          src={photo.src}
          alt={photo.caption}
          loading="lazy"
          className="w-full rounded-2xl object-cover"
          style={{ minHeight: 180 + (index % 3) * 60 }}
        />
      </div>
      <p className="mt-3 text-center font-script text-2xl font-bold text-crimson">
        {photo.caption}
      </p>
    </motion.div>
  );
}

export default function TheDenizMuseum() {
  return (
    <section className="relative bg-rose-100 px-4 py-24">
      <h2 className="mb-4 text-center font-cursive text-4xl text-hotpink drop-shadow sm:text-6xl">
        Seninle Geçen 21 Yıllık Mucize ✨
      </h2>
      <p className="mx-auto mb-14 max-w-2xl text-center font-comic text-lg font-bold text-fuchsia-700">
        (Üstüne gel ki kalbim gibi etrafına minik kalpler saçılsın, tıpkı seni
        her gördüğümde içimin kıpır kıpır olduğu gibi 🥺)
      </p>

      <div className="museum-masonry mx-auto max-w-6xl">
        {PHOTOS.map((photo, i) => (
          <MuseumCard key={photo.caption} photo={photo} index={i} />
        ))}
      </div>
    </section>
  );
}
