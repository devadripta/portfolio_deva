import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Devadripta Jadhav | Applied ML Researcher",
  description:
    "Portfolio of Devadripta Jadhav — Applied ML Researcher, PhD Student at BITS Pilani Goa. Specializing in NLP, LLMs, Biomedical AI, and Computer Vision.",
  keywords: [
    "Machine Learning",
    "NLP",
    "LLM",
    "Deep Learning",
    "Biomedical AI",
    "Computer Vision",
    "BITS Pilani",
    "Researcher",
  ],
  authors: [{ name: "Devadripta Jadhav" }],
  openGraph: {
    title: "Devadripta Jadhav | Applied ML Researcher",
    description:
      "Portfolio of Devadripta Jadhav — Applied ML Researcher & PhD Student at BITS Pilani Goa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#0a0012] text-white`}
        style={{ fontFamily: "var(--font-inter), 'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
