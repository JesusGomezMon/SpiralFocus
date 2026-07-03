import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "SpiralFocus | Fotógrafo de experiencias premium",
  description:
    "Fotografía premium en Cancún y Riviera Maya. Sesiones personales y comerciales con estética editorial minimalista.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.variable} lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
