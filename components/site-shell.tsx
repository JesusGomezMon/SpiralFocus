"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoLockup, LogoMark } from "@/components/logo";
import { EMAIL, INSTAGRAM, tagline, waLink } from "@/lib/brand";

const nav = [
  { href: "/personas", label: "Personas" },
  { href: "/empresas", label: "Empresas" },
  { href: "/#trabajo", label: "Trabajo" },
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
        <a
          className="sf-cta hidden md:inline-flex"
          href={waLink("Hola, quiero hablar sobre imágenes con Spiral Focus.")}
          rel="noreferrer"
          target="_blank"
        >
          Hablemos
        </a>
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
          <a className="hover:text-[var(--terracota)]" href={waLink("Hola, quiero hablar sobre imágenes con Spiral Focus.")} rel="noreferrer" target="_blank">
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
      href={waLink("Hola, quiero hablar sobre imágenes con Spiral Focus.")}
      rel="noreferrer"
      style={{ backgroundColor: "#25D366", color: "#ffffff" }}
      target="_blank"
    >
      <svg aria-hidden fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
}
