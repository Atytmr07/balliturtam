"use client";

import CringeHero from "@/components/CringeHero";
import TheDenizMuseum from "@/components/TheDenizMuseum";
import TheCringeButton from "@/components/TheCringeButton";
import AudioToggle from "@/components/AudioToggle";
import HeartRain from "@/components/HeartRain";
import CursorTrail from "@/components/CursorTrail";
import CringeMarquee from "@/components/CringeMarquee";
import LoveMeter from "@/components/LoveMeter";
import LoveLetter from "@/components/LoveLetter";
import ReasonsGrid from "@/components/ReasonsGrid";
import Certificate from "@/components/Certificate";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Page-wide chaotic atmosphere */}
      <HeartRain />
      <CursorTrail />
      <AudioToggle />

      <CringeHero />

      <CringeMarquee />

      <TheDenizMuseum />

      <ReasonsGrid />

      <LoveMeter />

      <LoveLetter />

      <TheCringeButton />

      <Certificate />

      <CringeMarquee />

      {/* The desperate, oversharing footer */}
      <footer className="relative z-10 bg-rose-100 px-4 py-16 text-center">
        <p className="font-cursive text-3xl text-crimson sm:text-4xl">
          21. yaşın kutlu olsun Deniz Yalçın 🥺💖🍯
        </p>
        <p className="mx-auto mt-4 max-w-xl font-comic text-base font-bold text-fuchsia-700">
          Bu site, sana olan sonsuz (ve tamamen ironik) sevgimle, Atay tarafından
          gözyaşları içinde kodlandı. Seni seviyorum kaslı ballı turtam. 💪🍯
        </p>
        <p className="mt-6 font-script text-xl text-rose-500">
          — Ballı Turtan, Atay 💌
        </p>
      </footer>
    </main>
  );
}
