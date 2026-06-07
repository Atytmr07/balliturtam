"use client";

const LINES = [
  "BALLI TURTAM 🥺",
  "KASLI BAL KAVANOZUM 💪🍯",
  "DÜNYAMIN GÜNEŞİ ☀️",
  "BİRİCİK PROTEİNİM 🥤",
  "KALBİMİN PR'I 🏋️",
  "ŞEKERİM 🍬",
  "VICIK VICIK AŞKIM 💞",
  "21 YAŞINDA EFSANE 🎂",
];

// An infinitely scrolling band of unhinged compliments. Two rows, opposite ways.
export default function CringeMarquee() {
  const content = LINES.join("  •  ");
  return (
    <div className="relative z-10 overflow-hidden border-y-4 border-white bg-crimson py-3">
      <div className="flex whitespace-nowrap will-change-transform [animation:marquee_18s_linear_infinite]">
        {[0, 1].map((k) => (
          <span
            key={k}
            className="px-6 font-cursive text-2xl tracking-wide text-white sm:text-3xl"
          >
            {content} •&nbsp;
          </span>
        ))}
      </div>
      <div className="flex whitespace-nowrap will-change-transform [animation:marquee-reverse_22s_linear_infinite]">
        {[0, 1].map((k) => (
          <span
            key={k}
            className="px-6 font-script text-2xl tracking-wide text-yellow-200 sm:text-3xl"
          >
            {content} •&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
