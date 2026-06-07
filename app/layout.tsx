import type { Metadata } from "next";
import { Pacifico, Dancing_Script } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

const dancing = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "İyi ki Doğdun Ballı Turtam 🥺🍯💖",
  description:
    "Deniz Yalçın'ın 21. yaşına özel, vıcık vıcık romantik bir saygı duruşu. Atay'dan sevgilerle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${pacifico.variable} ${dancing.variable}`}>
      <body className="font-comic text-crimson selection:bg-hotpink selection:text-white">
        {children}
      </body>
    </html>
  );
}
