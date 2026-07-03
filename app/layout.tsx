import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Spiral Focus | Fotografía comercial y contenido digital · Cancún",
  description:
    "Producción visual estratégica para marcas y negocios en Cancún y Riviera Maya. Fotografía de producto, gastronomía y contenido para redes que comunica y convierte.",
  metadataBase: new URL("https://spiralfocus.mx"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.variable} ${fraunces.variable}`} lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
