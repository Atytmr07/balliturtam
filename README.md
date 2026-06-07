# 🍯 Ballı Turtam — Deniz Yalçın'ın 21. Yaş Sitesi 🥺💖

Atay'ın, en yakın bro'su Deniz için yaptığı, **vıcık vıcık romantik** (ve tamamen
ironik) bir 21. yaş kutlama landing page'i. İç espri: Deniz, Atay'a "Ballı Turtam"
der. Bu site o lakabı acımasızca Deniz'e geri çevirir.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** (göz yakan pembe paleti)
- **framer-motion** (atan kalpler, uçan bal kavanozları, zıplayan buton)
- **canvas-confetti** (kalp/pembe/bal renkli konfeti)
- Fontlar: **Pacifico** & **Dancing Script** (başlıklar) + **Comic Sans MS** (gövde)

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Bölümler

| Dosya | Ne yapar |
| --- | --- |
| `components/CringeHero.tsx` | Emoji duvar kağıdı, dev kursiv başlık, sürekli atan kalp-şeklinde foto çerçevesi, uçan 🍯'lar |
| `components/TheDenizMuseum.tsx` | Masonry galeri; hover'da kalp fışkırır + foto 360° döner; cringe captionlar |
| `components/TheCringeButton.tsx` | Zıplayan dev buton; her tık ekrana rastgele "BALLI TURTAM 🥺" basar + konfeti |
| `components/AudioToggle.tsx` | Sağ altta "Careless Whisper" 🎷 toggle'ı |
| `app/page.tsx` | Hepsini birleştirir |

## Kişiselleştirme

`public/README.txt` dosyasına bak — `deniz.jpg` ve `careless-whisper.mp3`
eklersen site tam kıvamına gelir. 💌
