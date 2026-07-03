"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { waLink } from "@/lib/content";

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
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (href: string, label: string, active: boolean) => (
    <Link className={active ? "text-[var(--text)]" : "text-[var(--muted)]"} href={href}>
      {label}
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? "border-[var(--line)] bg-[color-mix(in_hsl,var(--bg),transparent_12%)] backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="sf-wrap flex items-center justify-between py-5">
        <nav className="flex items-center gap-5 text-sm md:gap-8">
          {link("/", "Inicio", page === "home")}
          {link("/sesiones", "Sesiones", page === "sesiones")}
          {link("/comercial", "Comercial", page === "comercial")}
        </nav>

        <Link className="sf-serif text-lg italic" href="/">
          Spiral <span className="text-[var(--accent)]">Focus</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            aria-label="Cambiar tema"
            className="sf-chip"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            type="button"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <Link className="sf-button sf-button-solid hidden md:inline-flex" href="#reserva">
            Reservar
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="sf-dark border-t border-[var(--line)] py-16 text-center">
      <div className="sf-wrap">
        <p className="sf-serif mx-auto max-w-2xl text-2xl italic leading-snug md:text-3xl">
          ¿Esto ayuda a que tu marca <span className="text-[var(--accent)]">crezca</span>, o solo se ve bonito?
        </p>
        <p className="mt-4 text-sm text-[var(--muted)]">Si la respuesta es la segunda, se elimina.</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--muted)]">
          <a href="https://instagram.com/spiralfocus_" rel="noreferrer" target="_blank">
            Instagram
          </a>
          <a href={waLink("Hola, quiero información sobre Spiral Focus.")} rel="noreferrer" target="_blank">
            WhatsApp
          </a>
          <a href="mailto:jesusgomezmon@gmail.com">jesusgomezmon@gmail.com</a>
        </div>
        <p className="mt-12 text-xs uppercase tracking-[0.14em] text-[var(--acero)]">
          © 2026 Spiral Focus · Fotografía comercial y contenido digital · Cancún
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFab({ message = "Hola, quiero reservar una sesión con Spiral Focus." }: { message?: string }) {
  return (
    <a aria-label="WhatsApp" className="sf-fab" href={waLink(message)} rel="noreferrer" target="_blank">
      WhatsApp
    </a>
  );
}
