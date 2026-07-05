"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoLockup, LogoMark } from "@/components/logo";
import { EMAIL, INSTAGRAM, tagline, waLink } from "@/lib/brand";

const nav = [
  { href: "#galeria", label: "Trabajo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#reserva", label: "Reservar" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "border-b border-[var(--line)] bg-[color-mix(in_hsl,var(--bg),transparent_8%)] backdrop-blur-md" : ""
      }`}
    >
      <div className="sf-wrap flex items-center justify-between gap-4 py-4">
        <Link className="sf-logo-lockup" href="/">
          <LogoMark className="sf-logo-mark" priority />
          <span className="sf-logo-text hidden sm:block">
            Spiral <em>Focus</em>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              className="sf-label text-[var(--muted)] transition-colors hover:text-[var(--terracota)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="sf-cta hidden md:inline-flex" href="#reserva">
          Iniciar conversación
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="sf-section-dark border-t border-[#3a342f]">
      <div className="sf-wrap text-center">
        <LogoLockup centered className="mx-auto mb-6 text-[var(--crema)]" />
        <p className="sf-quote mx-auto max-w-xl text-[var(--crema)]">{tagline}</p>
        <p className="sf-label mt-8 text-[var(--arena)]">Cancún · Riviera Maya · México</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--arena)]">
          <a className="hover:text-[var(--terracota)]" href={`https://instagram.com/${INSTAGRAM}`} rel="noreferrer" target="_blank">
            Instagram
          </a>
          <a className="hover:text-[var(--terracota)]" href={waLink("Hola, quiero iniciar una conversación sobre una sesión con Spiral Focus.")} rel="noreferrer" target="_blank">
            WhatsApp
          </a>
          <a className="hover:text-[var(--terracota)]" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
        <p className="sf-label mt-12 text-[var(--arena)]">© 2026 Spiral Focus</p>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      aria-label="WhatsApp"
      className="sf-fab"
      href={waLink("Hola, quiero reservar una experiencia con Spiral Focus.")}
      rel="noreferrer"
      style={{ backgroundColor: "#25D366", color: "#ffffff" }}
      target="_blank"
    >
      WhatsApp
    </a>
  );
}
