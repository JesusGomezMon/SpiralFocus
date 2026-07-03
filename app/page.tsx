"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

const gallery = [
  { src: "/img/pareja.jpeg", kind: "Parejas" },
  { src: "/img/danny2.jpg", kind: "Retratos" },
  { src: "/img/moto.jpeg", kind: "Lifestyle" },
  { src: "/img/edificios.jpeg", kind: "Viajes" },
  { src: "/img/barbershop.jpg", kind: "Branding" },
  { src: "/img/cafe de olla.jpg", kind: "Editorial" },
  { src: "/img/estatua.jpg", kind: "Bodas" },
  { src: "/img/faro.jpg", kind: "Familias" },
] as const;

const filters = ["All", "Parejas", "Bodas", "Viajes", "Lifestyle", "Retratos", "Branding", "Familias", "Editorial"];

export default function HomePage() {
  const [filter, setFilter] = useState("All");
  const [city, setCity] = useState("Cancún");
  const [kind, setKind] = useState("Parejas");
  const [people, setPeople] = useState(2);
  const [hours, setHours] = useState(2);

  const result = useMemo(() => {
    const base = kind === "Branding" ? 7000 : 4500;
    const cityFee = city === "Riviera Maya" ? 1200 : city === "Isla Mujeres" ? 1800 : 0;
    const peopleFee = Math.max(0, people - 2) * 450;
    const hourFee = Math.max(0, hours - 2) * 900;
    const min = base + cityFee + peopleFee + hourFee;
    const max = min + 2500;
    return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(min) +
      " y " +
      new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(max);
  }, [city, kind, people, hours]);

  const filtered = filter === "All" ? gallery : gallery.filter((g) => g.kind === filter);

  return (
    <div className="sf-shell">
      <SiteHeader page="home" />

      <main>
        <section className="relative min-h-[92dvh] overflow-hidden">
          <Image alt="Hero SpiralFocus" className="object-cover object-center" fill priority src="/img/silla corte.jpeg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
          <div className="sf-section relative z-10 flex min-h-[92dvh] flex-col justify-end pb-14">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--sand)]">Premium Photography Experience</p>
            <h1 className="max-w-4xl text-4xl leading-tight md:text-6xl">
              Imágenes que se sienten como recuerdos.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-[var(--sand)] md:text-lg">
              Fotografía y video cinematográfico para personas y marcas en Cancún y Riviera Maya.
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">Dos formas de contar una historia. Elige la que buscas.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="sf-button sf-button-solid" href="#reserva">Reservar experiencia</a>
              <a className="sf-button sf-button-ghost" href="#colecciones">Ver colecciones</a>
            </div>
          </div>
        </section>

        <section className="sf-section grid gap-6 md:grid-cols-2">
          <article className="sf-card p-6">
            <h2 className="mb-2 text-2xl">Sobre mí</h2>
            <p className="text-[var(--muted)]">
              Mi trabajo nace de una idea simple: una imagen debe devolverte al latido exacto del momento.
              Combino cine, documental y estética editorial para crear memoria emocional.
            </p>
          </article>
          <article className="sf-card overflow-hidden">
            <Image alt="Fotógrafo SpiralFocus" className="h-full w-full object-cover" height={700} src="/img/estatua.jpg" width={700} />
          </article>
        </section>

        <section className="sf-section" id="colecciones">
          <div className="mb-6 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button className="sf-chip" key={f} onClick={() => setFilter(f)} type="button">
                {f}
              </button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((item) => (
              <motion.figure
                animate={{ opacity: 1, y: 0 }}
                className="sf-card overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                key={`${item.src}-${item.kind}`}
                transition={{ duration: 0.6 }}
              >
                <Image alt={item.kind} className="h-56 w-full object-cover" height={480} loading="lazy" src={item.src} width={480} />
                <figcaption className="p-3 text-sm text-[var(--muted)]">{item.kind}</figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        <section className="sf-section grid gap-4 md:grid-cols-7">
          {["Primer contacto", "Planeación", "Propuesta creativa", "Sesión", "Selección", "Edición", "Entrega"].map((step, i) => (
            <article className="sf-card p-4 text-center" key={step}>
              <p className="text-xs tracking-[0.2em] text-[var(--accent)]">0{i + 1}</p>
              <h3 className="mt-2 text-sm">{step}</h3>
            </article>
          ))}
        </section>

        <section className="sf-section" id="cotizador">
          <div className="sf-card grid gap-4 p-6 md:grid-cols-2">
            <div>
              <h2 className="text-2xl">Cotizador inteligente</h2>
              <p className="mt-2 text-[var(--muted)]">Tu inversión estimada es entre:</p>
              <p className="mt-3 text-3xl text-[var(--accent)]">{result}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="text-sm">Ciudad<select className="sf-card mt-1 w-full p-2" onChange={(e) => setCity(e.target.value)} value={city}><option>Cancún</option><option>Riviera Maya</option><option>Isla Mujeres</option></select></label>
              <label className="text-sm">Tipo<select className="sf-card mt-1 w-full p-2" onChange={(e) => setKind(e.target.value)} value={kind}><option>Parejas</option><option>Bodas</option><option>Viajes</option><option>Lifestyle</option><option>Retratos</option><option>Branding</option><option>Familias</option><option>Editorial</option></select></label>
              <label className="text-sm">Personas<input className="sf-card mt-1 w-full p-2" min={1} onChange={(e) => setPeople(Number(e.target.value))} type="number" value={people} /></label>
              <label className="text-sm">Duración (h)<input className="sf-card mt-1 w-full p-2" min={1} onChange={(e) => setHours(Number(e.target.value))} type="number" value={hours} /></label>
            </div>
          </div>
        </section>

        <section className="sf-section grid gap-4 md:grid-cols-3">
          {["Sentimos calma desde la primera llamada.", "La sesión fue cuidada de principio a fin.", "Las fotos parecen escenas de una película."].map((text) => (
            <article className="sf-card p-5" key={text}>
              <p className="text-sm text-[var(--sand)]">★★★★★</p>
              <p className="mt-3 text-[var(--muted)]">{text}</p>
            </article>
          ))}
        </section>

        <section className="sf-section" id="reserva">
          <div className="sf-card p-6">
            <h2 className="text-2xl">Reserva tu experiencia</h2>
            <form className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Nombre", "Correo", "WhatsApp", "Ciudad", "Tipo de sesión", "Fecha", "Número de personas"].map((f) => (
                <input className="sf-card p-3 text-sm" key={f} placeholder={f} required />
              ))}
              <textarea className="sf-card p-3 text-sm sm:col-span-2" placeholder="Mensaje" rows={5} />
              <button className="sf-button sf-button-solid sm:col-span-2" type="submit">Enviar solicitud</button>
            </form>
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-card divide-y divide-[var(--line)]">
            {[
              "¿Cuánto anticipo se requiere?",
              "¿Cuándo se entrega?",
              "¿Cuántas revisiones incluye?",
              "¿Facturación disponible?",
            ].map((q) => (
              <details className="p-4" key={q}>
                <summary className="cursor-pointer">{q}</summary>
                <p className="mt-2 text-sm text-[var(--muted)]">Te lo confirmo en tu propuesta personalizada según ciudad y fecha.</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
