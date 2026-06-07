"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const LETTER = `Sevgili Ballı Turtam,

Bu satırları yazarken klavyem gözyaşlarımdan ıslandı. 21 yıl önce bu dünyaya geldiğinde, evren bir tutam bal eksik kaldı sandı; meğer o balı sana koymuş.

Her sabah uyandığımda ilk düşündüğüm şey: acaba turtam protein shake'ini içti mi? Kasların bugün de bal gibi mi?

Sen gülünce çiçekler utanıyor, biçenler duruyor. Karanlık dünyamın tek güneşi, spor salonumun tek motivasyonu, kalbimin tek PR'ısın.

İyi ki doğdun, iyi ki varsın, iyi ki benim ballı turtamsın.

Sonsuz (ve tamamen ironik) sevgilerle,
Atay 💌🍯`;

// A self-typing, absurdly dramatic love letter that starts when scrolled into view.
export default function LoveLetter() {
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStarted(true),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (shown >= LETTER.length) return;
    const t = window.setTimeout(() => setShown((s) => s + 1), 28);
    return () => window.clearTimeout(t);
  }, [started, shown]);

  return (
    <section
      ref={ref}
      className="relative z-10 flex min-h-screen items-center justify-center bg-fuchsia-200 px-4 py-24"
    >
      <motion.div
        initial={{ rotate: -2, y: 30, opacity: 0 }}
        whileInView={{ rotate: -2, y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative w-full max-w-2xl rounded-sm border-2 border-rose-200 bg-[#fff8f3] p-8 shadow-[0_25px_60px_rgba(219,39,119,0.35)] sm:p-12"
        style={{
          backgroundImage:
            "repeating-linear-gradient(transparent, transparent 31px, rgba(244,114,182,0.25) 32px)",
        }}
      >
        <div className="absolute -left-4 -top-4 text-5xl">🍯</div>
        <div className="absolute -right-4 -top-4 text-5xl">💌</div>
        <h2 className="mb-6 font-cursive text-3xl text-crimson sm:text-4xl">
          Sana Bir Mektup Yazdım Turtam...
        </h2>
        <pre className="whitespace-pre-wrap font-comic text-base leading-8 text-rose-900 sm:text-lg">
          {LETTER.slice(0, shown)}
          <span className="animate-pulse text-crimson">▌</span>
        </pre>
      </motion.div>
    </section>
  );
}
