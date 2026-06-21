import type { Metadata } from "next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// ── Brand Fonts (Penpot: Witty Identity System) ───────────────────────────
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Witty Networks — Intelligent Infrastructure",
  description:
    "Managed infrastructure, intelligent systems, and field engineering services built around reliability and deep technical knowledge.",
  openGraph: {
    title: "Witty Networks",
    description: "Intelligent infrastructure. Reliable partnerships. Built for the field.",
    siteName: "Witty Networks",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-wn-midnight text-wn-text">{children}</body>
    </html>
  );
}
