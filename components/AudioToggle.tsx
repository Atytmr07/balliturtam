"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Floating cheesy-music toggle. Drop a `careless-whisper.mp3` into /public
// and it'll serenade Deniz; otherwise it just wiggles dramatically.
export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [missing, setMissing] = useState(false);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    try {
      if (playing) {
        el.pause();
        setPlaying(false);
      } else {
        await el.play();
        setPlaying(true);
      }
    } catch {
      // No file dropped in /public yet — fail cringe-ily, not loudly.
      setMissing(true);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <audio ref={audioRef} loop src="/careless-whisper.mp3" preload="none" />

      {missing && (
        <span className="rounded-full bg-white/90 px-3 py-1 font-comic text-xs font-bold text-crimson shadow">
          🎷 /public/careless-whisper.mp3 ekle turtam
        </span>
      )}

      <motion.button
        onClick={toggle}
        animate={playing ? { rotate: [0, -12, 12, 0] } : {}}
        transition={{ duration: 0.6, repeat: playing ? Infinity : 0 }}
        className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-rose-400 text-3xl shadow-[0_8px_24px_rgba(244,63,94,0.6)]"
        title="Careless Whisper 🎷"
      >
        {playing ? "🎶" : "🎷"}
      </motion.button>
    </div>
  );
}
