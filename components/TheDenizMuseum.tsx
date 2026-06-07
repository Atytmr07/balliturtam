"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Photo = {
  caption: string;
  emoji: string;
};

const PHOTOS: Photo[] = [
  { caption: "Bu gülüşe ömrümü veririm...", emoji: "😁" },
  { caption: "Karanlık dünyamın güneşi...", emoji: "🌞" },
  { caption: "Kaslı ballı turtam...", emoji: "💪" },
  { caption: "Sabah uyandığında ilk aklıma gelen...", emoji: "🥱" },
  { caption: "Bir bakışın yetiyor turtam...", emoji: "👀" },
  { caption: "Protein shake'in kadar tatlısın...", emoji: "🥤" },
  { caption: "Kaşların kaderim oldu...", emoji: "🫠" },
  { caption: "Sen benim PR'ımsın (kişisel rekorum)...", emoji: "🏋️" },
  { caption: "Saçların rüzgarda... ah turtam...", emoji: "💇" },
];

// One photo tile: spins 360° on hover and erupts a swarm of floating hearts.
function MuseumCard({ photo, index }: { photo: Photo; index: number }) {
  const [hearts, setHearts] = useState<number[]>([]);

  const erupt = () => {
    const batch = Array.from({ length: 10 }, (_, i) => Date.now() + i);
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
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
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

      <div
        className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-fuchsia-200 text-7xl"
        style={{ minHeight: 180 + (index % 3) * 60 }}
      >
        {photo.emoji}
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
        (Üstüne gel ki kalbim gibi etrafına kalpler saçılsın ve fotoğrafın aşktan
        kendi etrafında dönsün, tıpkı dünyam senin etrafında döndüğü gibi 🥺)
      </p>

      <div className="museum-masonry mx-auto max-w-6xl">
        {PHOTOS.map((photo, i) => (
          <MuseumCard key={photo.caption} photo={photo} index={i} />
        ))}
      </div>
    </section>
  );
}
