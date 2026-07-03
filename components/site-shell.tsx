"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

type Lang = "es" | "en";

const copy = {
  es: { reserve: "Reservar experiencia", collections: "Ver colecciones", faq: "FAQ" },
  en: { reserve: "Book experience", collections: "View collections", faq: "FAQ" },
};

export function useLang() {
  const [lang, setLang] = useState<Lang>("es");
  useEffect(() => {
    const stored = localStorage.getItem("sf-lang");
    if (stored === "en" || stored === "es") setLang(stored);
  }, []);
  useEffect(() => {
    localStorage.setItem("sf-lang", lang);
  }, [lang]);
  return { lang, setLang };
}

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    const stored = localStorage.getItem("sf-theme");
    if (stored === "light" || stored === "dark") setTheme(stored);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("sf-theme", theme);
  }, [theme]);
  return { theme, setTheme };
}

export function SiteHeader({ page }: { page: "home" | "sesiones" | "comercial" }) {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = useMemo(() => copy[lang], [lang]);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[color-mix(in_hsl,var(--surface),transparent_25%)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <nav className="flex items-center gap-4 text-sm text-[var(--muted)] md:gap-8">
          <Link className={page === "home" ? "text-[var(--text)]" : ""} href="/">
            Home
          </Link>
          <Link className={page === "sesiones" ? "text-[var(--text)]" : ""} href="/sesiones">
            Sesiones
          </Link>
          <Link className={page === "comercial" ? "text-[var(--text)]" : ""} href="/comercial">
            Comercial
          </Link>
        </nav>

        <img alt="SpiralFocus" className="h-10 w-auto opacity-95" src="/img/logo con texto svg.svg" />

        <div className="flex items-center gap-2">
          <button className="sf-chip" onClick={() => setLang(lang === "es" ? "en" : "es")} type="button">
            {lang.toUpperCase()}
          </button>
          <button
            aria-label="Cambiar tema"
            className="sf-chip"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            type="button"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link className="sf-button sf-button-solid hidden md:inline-flex" href="#reserva">
            {t.reserve}
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <img alt="SpiralFocus" className="mb-3 h-8 w-auto" src="/img/logo svg.svg" />
          <p className="text-sm text-[var(--muted)]">Cancún · Riviera Maya · Latinoamérica</p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--muted)]">
          <a href="https://instagram.com/spiralfocus_" rel="noreferrer" target="_blank">
            Instagram
          </a>
          <a href="https://wa.me/529981225937" rel="noreferrer" target="_blank">
            WhatsApp
          </a>
          <a href="mailto:jesusgomezmon@gmail.com">Correo</a>
        </div>
      </div>
    </footer>
  );
}
