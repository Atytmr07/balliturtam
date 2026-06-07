"use client";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";

// A mock "official certificate" declaring Deniz the one true Ballı Turtam.
export default function Certificate() {
  const seal = () => {
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ffd34e", "#DC143C", "#FF69B4"],
      scalar: 1.5,
    });
  };

  return (
    <section className="relative z-10 flex items-center justify-center bg-rose-100 px-4 py-24">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ rotate: [0, -1, 1, 0] }}
        className="relative w-full max-w-2xl rounded-lg border-[10px] border-double border-crimson bg-[#fffdf7] p-8 text-center shadow-2xl sm:p-12"
      >
        <div className="absolute inset-3 rounded-md border-2 border-hotpink/50" />

        <p className="font-comic text-sm font-bold uppercase tracking-[0.3em] text-fuchsia-700">
          Uluslararası Vıcık Vıcık Romantizm Konseyi
        </p>
        <h2 className="mt-4 font-cursive text-4xl text-crimson sm:text-5xl">
          Resmî Ballı Turtam Sertifikası
        </h2>
        <p className="mt-6 font-comic text-base text-rose-900">
          İşbu belge ile
        </p>
        <p className="my-3 font-script text-5xl font-bold text-hotpink">
          Deniz Yalçın
        </p>
        <p className="mx-auto max-w-md font-comic text-base text-rose-900">
          adlı kaslı şahsın, evrendeki <b>tek ve gerçek Ballı Turtam</b> olduğu;
          21 yaşına bal gibi tatlı bir biçimde ulaştığı ve Atay'ın kalbini
          ironik ölçüde işgal ettiği resmen tasdik edilir.
        </p>

        <div className="mt-8 flex items-end justify-between">
          <div className="text-left">
            <div className="font-script text-2xl text-crimson">Atay</div>
            <div className="border-t border-rose-400 font-comic text-xs text-rose-600">
              Baş Hayran &amp; İmza
            </div>
          </div>
          <button
            onClick={seal}
            className="grid h-20 w-20 place-items-center rounded-full bg-crimson font-comic text-xs font-bold leading-tight text-yellow-200 shadow-lg transition hover:rotate-12"
            title="Mührü bas turtam"
          >
            🍯 RESMÎ MÜHÜR 🍯
          </button>
        </div>

        <p className="mt-6 font-comic text-xs text-rose-500">
          Geçerlilik: sonsuza dek 💞 • Seri No: TURTA-2026-0001
        </p>
      </motion.div>
    </section>
  );
}
