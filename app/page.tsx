"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { SiteFooter, SiteHeader, WhatsAppFab } from "@/components/site-shell";
import { faq, gallery, galleryFilters, process, services, traits, waLink } from "@/lib/content";

export default function HomePage() {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]>("Todos");

  const filtered = useMemo(
    () => (filter === "Todos" ? gallery : gallery.filter((g) => g.kind === filter)),
    [filter],
  );

  function onReserve(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = [
      "Hola, quiero reservar con Spiral Focus.",
      `Nombre: ${fd.get("nombre")}`,
      `Correo: ${fd.get("correo")}`,
      `WhatsApp: ${fd.get("whatsapp")}`,
      `Tipo: ${fd.get("tipo")}`,
      `Fecha tentativa: ${fd.get("fecha")}`,
      `Mensaje: ${fd.get("mensaje")}`,
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="sf-shell">
      <SiteHeader page="home" />

      <main>
        <section className="relative min-h-[92dvh] overflow-hidden">
          <Image alt="Spiral Focus" className="object-cover object-center" fill priority src="/img/DSC02882.jpg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--noche)] via-[var(--noche)]/55 to-transparent" />
          <div className="sf-wrap relative z-10 flex min-h-[92dvh] flex-col justify-end pb-16 pt-28">
            <p className="sf-eyebrow">Fotografía comercial y contenido digital · Cancún</p>
            <h1 className="sf-serif mt-6 max-w-4xl text-4xl leading-tight md:text-6xl">
              No vendemos fotos genéricas.
              <br />
              Diseñamos <em className="text-[var(--accent)]">imágenes que convierten.</em>
            </h1>
            <p className="mt-6 max-w-xl text-[var(--muted)]">
              Producción visual estratégica para marcas y negocios en Cancún y Riviera Maya. Fotografía de producto,
              gastronomía y contenido para redes que comunica y convierte.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a className="sf-button sf-button-solid" href="#reserva">
                Agendar diagnóstico inicial
              </a>
              <a className="sf-button sf-button-ghost" href="#portafolio">
                Ver portafolio
              </a>
            </div>
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-wrap grid gap-4 md:grid-cols-2">
            <Link className="sf-card group p-8 transition hover:border-[var(--accent)]" href="/comercial">
              <p className="sf-eyebrow">Para negocios</p>
              <h2 className="sf-serif mt-4 text-3xl">Comercial y contenido digital</h2>
              <p className="mt-3 text-[var(--muted)]">
                Producto, gastronomía, redes y video. Paquetes claros, entregables definidos y enfoque en resultados.
              </p>
              <span className="mt-6 inline-block text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                Ver paquetes →
              </span>
            </Link>
            <Link className="sf-card group p-8 transition hover:border-[var(--accent)]" href="/sesiones">
              <p className="sf-eyebrow">Para personas</p>
              <h2 className="sf-serif mt-4 text-3xl">Sesiones personales</h2>
              <p className="mt-3 text-[var(--muted)]">
                Parejas, retratos y lifestyle. Imágenes cinematográficas pensadas para recordar cómo se sintió el momento.
              </p>
              <span className="mt-6 inline-block text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                Reservar sesión →
              </span>
            </Link>
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-wrap grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="sf-eyebrow">Acerca de</p>
              <h2 className="sf-serif mt-4 text-3xl md:text-4xl">
                Cada imagen es una decisión estratégica, <em className="text-[var(--accent)]">no solo estética.</em>
              </h2>
              <p className="mt-5 text-[var(--muted)]">
                Estudio de fotografía comercial con sede en Cancún. Trabajamos con negocios locales —restaurantes,
                tiendas, marcas y emprendedores— para construir presencia visual con criterio creativo y enfoque en
                resultados. Desde el briefing hasta la entrega, cada proyecto se gestiona con puntualidad y atención al
                detalle.
              </p>
            </div>
            <Image
              alt="Trabajo Spiral Focus"
              className="sf-card aspect-[4/5] w-full object-cover"
              height={900}
              src="/img/DSC03950.jpg"
              width={720}
            />
          </div>
        </section>

        <section className="sf-section sf-dark">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Servicios</p>
            <h2 className="sf-serif mt-4 text-3xl">Seis pilares, un objetivo: que tu marca se vea y venda mejor</h2>
            <div className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
              {services.map((s) => (
                <article className="bg-[var(--noche)] p-7" key={s.n}>
                  <p className="sf-serif text-sm italic text-[var(--accent)]">{s.n}</p>
                  <h3 className="sf-serif mt-2 text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{s.desc}</p>
                </article>
              ))}
            </div>
            <a className="sf-button sf-button-solid mt-8" href="/comercial">
              Ver tarifas y paquetes
            </a>
          </div>
        </section>

        <section className="sf-section" id="portafolio">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Portafolio</p>
            <h2 className="sf-serif mt-4 text-3xl">Trabajo reciente</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {galleryFilters.map((f) => (
                <button
                  className={`sf-chip ${filter === f ? "sf-chip-active" : ""}`}
                  key={f}
                  onClick={() => setFilter(f)}
                  type="button"
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => (
                <figure className="sf-card overflow-hidden" key={item.src}>
                  <Image alt={item.kind} className="aspect-[4/5] w-full object-cover" height={600} src={item.src} width={480} />
                  <figcaption className="p-3 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{item.kind}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Cómo trabajamos</p>
            <h2 className="sf-serif mt-4 max-w-2xl text-3xl">
              Proceso claro para que sepas exactamente qué va a pasar en cada etapa
            </h2>
            <div className="mt-10">
              {process.map((step, i) => (
                <div className="grid gap-4 border-t border-[var(--line)] py-5 md:grid-cols-[3.5rem_1fr]" key={step}>
                  <p className="sf-serif text-2xl italic text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</p>
                  <p className="font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section sf-dark">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Voz de marca</p>
            <h2 className="sf-serif mt-4 text-3xl">Directo, sin promesas vacías</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="border border-[var(--line)] p-6 opacity-70">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--acero)]">Evitar</p>
                <q className="sf-serif mt-4 block text-xl italic">
                  ¡Creamos fotos increíbles a precios accesibles para tu negocio!
                </q>
              </div>
              <div className="border border-[var(--accent)] bg-[color-mix(in_hsl,var(--accent),transparent_92%)] p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--accent)]">Spiral Focus</p>
                <q className="sf-serif mt-4 block text-xl italic">
                  No vendemos fotos genéricas. Diseñamos imágenes que resuelven un problema específico de tu negocio —
                  y nos quedamos para que sigan funcionando.
                </q>
              </div>
            </div>
            <div className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)]">
              {traits.map((t) => (
                <div className="grid bg-[var(--noche)] md:grid-cols-[9rem_1fr_1fr]" key={t.label}>
                  <div className="sf-serif border-b border-[var(--line)] p-5 italic text-[var(--accent)] md:border-b-0 md:border-r">
                    {t.label}
                  </div>
                  <div className="border-b border-[var(--line)] p-5 text-sm md:border-b-0 md:border-r">{t.yes}</div>
                  <div className="p-5 text-sm text-[var(--acero)] line-through">{t.no}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section" id="reserva">
          <div className="sf-wrap grid gap-10 md:grid-cols-2">
            <div>
              <p className="sf-eyebrow">Reserva</p>
              <h2 className="sf-serif mt-4 text-3xl">Hablemos de tu proyecto</h2>
              <p className="mt-4 text-[var(--muted)]">
                Respuesta en menos de 24 horas · Cotización sin compromiso. Un primer contacto claro, sin formularios
                eternos.
              </p>
              <a className="sf-button sf-button-solid mt-8" href={waLink("Hola, quiero agendar un diagnóstico inicial con Spiral Focus.")} rel="noreferrer" target="_blank">
                WhatsApp directo
              </a>
            </div>
            <form className="sf-card grid gap-3 p-6 sm:grid-cols-2" onSubmit={onReserve}>
              <input className="border border-[var(--line)] bg-transparent p-3 text-sm sm:col-span-2" name="nombre" placeholder="Nombre" required />
              <input className="border border-[var(--line)] bg-transparent p-3 text-sm" name="correo" placeholder="Correo" required type="email" />
              <input className="border border-[var(--line)] bg-transparent p-3 text-sm" name="whatsapp" placeholder="WhatsApp" required />
              <select className="border border-[var(--line)] bg-transparent p-3 text-sm sm:col-span-2" name="tipo" required>
                <option value="">Tipo de proyecto</option>
                <option>Producto</option>
                <option>Gastronomía</option>
                <option>Contenido mensual</option>
                <option>Video / Reels</option>
                <option>Sesión personal</option>
              </select>
              <input className="border border-[var(--line)] bg-transparent p-3 text-sm sm:col-span-2" name="fecha" placeholder="Fecha tentativa" type="date" />
              <textarea className="border border-[var(--line)] bg-transparent p-3 text-sm sm:col-span-2" name="mensaje" placeholder="Cuéntame tu proyecto" rows={4} />
              <button className="sf-button sf-button-solid sm:col-span-2" type="submit">
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-wrap">
            <p className="sf-eyebrow">FAQ</p>
            <h2 className="sf-serif mt-4 text-3xl">Condiciones de trabajo</h2>
            <div className="mt-8 divide-y divide-[var(--line)] border border-[var(--line)]">
              {faq.map((item) => (
                <details className="group p-5" key={item.q}>
                  <summary className="cursor-pointer font-medium">{item.q}</summary>
                  <p className="mt-3 text-sm text-[var(--muted)]">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
