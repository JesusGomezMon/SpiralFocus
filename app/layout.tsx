import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const body = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Spiral Focus | El arte de enfocar lo irrepetible",
  description:
    "Firma de fotografía cinematográfica en Cancún y Riviera Maya. Bodas, retratos y momentos de vida con mirada de autor y trato boutique.",
  metadataBase: new URL("https://spiralfocus.mx"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${display.variable} ${body.variable}`} lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
