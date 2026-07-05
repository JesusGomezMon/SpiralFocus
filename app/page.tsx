"use client";

import { FormEvent } from "react";
import Image from "next/image";
import { LogoMark } from "@/components/logo";
import { SiteFooter, SiteHeader, WhatsAppFab } from "@/components/site-shell";
import {
  artDirectionImage,
  authority,
  concerns,
  ctaMicro,
  experienceSteps,
  filter,
  gallery,
  hero,
  heroImage,
  identityClose,
  INSTAGRAM,
  offer,
  pain,
  phrases,
  portfolioIntro,
  risk,
  testimonials,
  urgency,
  villain,
  vision,
  waLink,
  type GalleryPhoto,
} from "@/lib/brand";
import { metaFor } from "@/lib/image-meta";

/** Microcopy de fricción que acompaña a los CTA (Ley del ancla de salida + Patrones de microcopy). */
function CtaMicro({ className = "" }: { className?: string }) {
  return <p className={`mt-4 text-xs leading-relaxed tracking-wide text-[var(--muted)] ${className}`}>{ctaMicro}</p>;
}

const instagramUrl = `https://instagram.com/${INSTAGRAM}`;

const quoteAccentImage = "/img/faro.webp";
const gallerySizes = "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw";

type GalleryCell =
  | { type: "photo"; photo: GalleryPhoto }
  | { type: "quote" }
  | { type: "reserve" };

/** Recorre la galería en orden y la reparte en un flujo masonry, respetando la orientación real de cada foto. */
const galleryCells: GalleryCell[] = gallery.map((item) =>
  item.kind === "photo"
    ? { type: "photo", photo: item }
    : item.variant === "quote"
      ? { type: "quote" }
      : { type: "reserve" },
);

function GalleryImage({ orient, src }: { src: string; orient: GalleryPhoto["orient"] }) {
  const photo = metaFor(src);
  return (
    <figure className="sf-gallery-photo overflow-hidden">
      <Image
        alt=""
        blurDataURL={photo.blurDataURL}
        className="sf-gallery-img"
        data-orient={orient}
        height={photo.height}
        loading="lazy"
        placeholder="blur"
        quality={90}
        sizes={gallerySizes}
        src={src}
        width={photo.width}
      />
    </figure>
  );
}

function GalleryCellContent({ cell }: { cell: GalleryCell }) {
  if (cell.type === "photo") {
    return <GalleryImage orient={cell.photo.orient} src={cell.photo.src} />;
  }
  if (cell.type === "quote") {
    return (
      <div className="sf-gallery-quote relative overflow-hidden">
        <Image
          alt=""
          blurDataURL={metaFor(quoteAccentImage).blurDataURL}
          className="sf-photo object-cover object-center"
          fill
          loading="lazy"
          placeholder="blur"
          quality={90}
          sizes={gallerySizes}
          src={quoteAccentImage}
        />
        <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--negro)_68%,transparent)]" />
        <div className="sf-gallery-accent relative z-10 h-full border-0 bg-transparent">
          <LogoMark className="mb-4 h-10 w-10 opacity-90" />
          <div aria-hidden className="sf-rule-dorado mb-6" />
          <p className="sf-quote sf-quote-accent text-[var(--crema)]">&ldquo;{phrases[0]}&rdquo;</p>
          <p className="sf-label mt-6 text-[var(--dorado)]">Voz de marca</p>
        </div>
      </div>
    );
  }
  return (
    <div className="sf-gallery-accent min-h-[14rem]">
      <p className="sf-eyebrow">{portfolioIntro.eyebrow}</p>
      <p className="sf-display mt-4 text-2xl text-[var(--crema)]">{hero.eyebrow}</p>
      <a className="sf-cta mt-8 w-fit" href="#reserva">
        Iniciar conversación
      </a>
    </div>
  );
}

export default function HomePage() {
  function onReserve(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = [
      "Hola, quiero iniciar una conversación con Spiral Focus.",
      `Nombre: ${fd.get("nombre")}`,
      `Correo: ${fd.get("correo")}`,
      `WhatsApp: ${fd.get("whatsapp")}`,
      `Momento a fotografiar: ${fd.get("momento")}`,
      `Fecha tentativa: ${fd.get("fecha")}`,
      `Mensaje: ${fd.get("mensaje")}`,
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="sf-shell">
      <SiteHeader />

      <main>
        {/* A · Atención con reconocimiento — la tensión del lector, no la presentación del estudio */}
        <section className="relative min-h-[100dvh] overflow-hidden">
          <Image
            alt=""
            className="sf-photo sf-hero-image object-cover"
            fill
            priority
            quality={90}
            sizes="100vw"
            src={heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--negro)] via-[var(--negro)]/55 to-[var(--negro)]/20" />
          <div className="sf-wrap relative z-10 flex min-h-[100dvh] flex-col justify-end pb-16 pt-28">
            <p className="sf-eyebrow text-[var(--terracota)]">{hero.eyebrow}</p>
            <div aria-hidden className="sf-rule-dorado mt-5" />
            <h1 className="sf-display mt-5 max-w-4xl text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] text-[var(--crema)]">
              {hero.titleLead} <em className="text-[var(--terracota)]">{hero.titleEm}</em>
            </h1>
            <p className="mt-6 max-w-2xl text-[0.9375rem] font-normal leading-relaxed text-[var(--arena)]">{hero.sub}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a className="sf-cta" href="#reserva">
                {hero.ctaPrimary}
              </a>
              <a className="sf-cta sf-cta-ghost !border-[var(--crema)] !text-[var(--crema)]" href="#galeria">
                {hero.ctaGhost}
              </a>
            </div>
            <CtaMicro className="!text-[var(--arena)]" />
          </div>
        </section>

        {/* Filtro de audiencia — autoselección + autoexclusión explícita */}
        <section className="sf-section">
          <div className="sf-wrap grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="sf-eyebrow">{filter.eyebrow}</p>
              <h2 className="sf-display mt-5 text-4xl md:text-5xl">{filter.title}</h2>
            </div>
            <div className="lg:col-span-7">
              <p className="sf-quote mb-10 text-[var(--text)]">{filter.twoTypes}</p>
              <ul className="space-y-4">
                {filter.forYou.map((item) => (
                  <li className="flex gap-4" key={item}>
                    <span aria-hidden className="mt-1 text-[var(--terracota)]">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="sf-quote mt-10 border-l border-[var(--dorado)] pl-6 text-[var(--muted)]">
                {filter.notForYou}
              </p>
            </div>
          </div>
        </section>

        {/* Evidencia temprana — el portafolio es la prueba (galería masonry intacta) */}
        <section className="sf-section sf-section-dark" id="galeria">
          <div className="sf-wrap mb-10">
            <p className="sf-eyebrow">{portfolioIntro.eyebrow}</p>
            <h2 className="sf-display mt-5 text-4xl">{portfolioIntro.title}</h2>
            <p className="mt-4 max-w-xl text-[var(--arena)]">{portfolioIntro.sub}</p>
            <a
              className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--dorado)] transition-colors hover:text-[var(--terracota)]"
              href={instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="sf-label">{portfolioIntro.proofLabel}</span>
              <span aria-hidden>· {portfolioIntro.proofCta} →</span>
            </a>
          </div>
          <div className="sf-masonry">
            {galleryCells.map((cell, i) => (
              <div className="sf-masonry-item" key={i}>
                <GalleryCellContent cell={cell} />
              </div>
            ))}
          </div>
        </section>

        {/* R · Villano nombrado — externaliza la causa, nunca culpa al lector */}
        <section className="sf-section">
          <div className="sf-wrap grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="sf-eyebrow">{villain.eyebrow}</p>
              <p className="sf-display mt-5 text-2xl italic text-[var(--terracota)]">&ldquo;{villain.name}&rdquo;</p>
              <h2 className="sf-display mt-4 text-4xl">{villain.title}</h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[var(--muted)]">
              {villain.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Cuantificación del dolor — costo de la inacción (tensión) */}
        <section className="sf-section sf-section-dark">
          <div className="sf-wrap max-w-3xl">
            <p className="sf-eyebrow">{pain.eyebrow}</p>
            <h2 className="sf-display mt-5 text-4xl text-[var(--crema)] md:text-5xl">{pain.title}</h2>
            <p className="sf-quote mt-8 text-[var(--arena)]">{pain.body}</p>
          </div>
        </section>

        {/* Visión del futuro deseado — válvula de alivio, escena sensorial */}
        <section className="sf-section">
          <div className="sf-wrap max-w-3xl">
            <p className="sf-eyebrow">{vision.eyebrow}</p>
            <h2 className="sf-display mt-5 text-4xl md:text-5xl">{vision.title}</h2>
            <p className="mt-6 text-[var(--muted)]">{vision.body}</p>
          </div>
        </section>

        {/* Presentación de la oferta — consecuencia lógica + qué pasa tras el primer mensaje */}
        <section className="sf-section sf-section-dark" id="proceso">
          <div className="sf-wrap">
            <p className="sf-eyebrow">{offer.eyebrow}</p>
            <h2 className="sf-display mt-5 max-w-2xl text-4xl">{offer.title}</h2>
            <p className="mt-6 max-w-2xl text-[var(--arena)]">{offer.intro}</p>
            <div className="mt-12">
              {experienceSteps.map((step, i) => (
                <div className="grid gap-4 border-t border-[#3a342f] py-6 md:grid-cols-[4rem_1fr]" key={step}>
                  <p className="sf-display text-2xl italic text-[var(--terracota)]">{String(i + 1).padStart(2, "0")}</p>
                  <p className="text-[var(--crema)]">{step}</p>
                </div>
              ))}
            </div>
            <p className="sf-quote mt-12 max-w-2xl border-l border-[var(--dorado)] pl-6 text-[var(--arena)]">
              {offer.transparency}
            </p>
            <a className="sf-cta mt-10" href="#reserva">
              {offer.cta}
            </a>
            <CtaMicro className="!text-[var(--arena)]" />
          </div>
        </section>

        {/* Reducción de riesgo — riesgo invertido (peso visual proporcional al riesgo) */}
        <section className="sf-section">
          <div className="sf-wrap">
            <div className="mx-auto max-w-3xl border border-[var(--dorado)] bg-[var(--surface)] p-8 md:p-12">
              <p className="sf-eyebrow">{risk.eyebrow}</p>
              <h2 className="sf-display mt-5 text-4xl">{risk.title}</h2>
              <p className="mt-6 text-[var(--muted)]">{risk.body}</p>
              <a
                className="sf-cta mt-8"
                href={waLink("Hola, quiero hacer una primera consulta sin compromiso con Spiral Focus.")}
                rel="noreferrer"
                target="_blank"
              >
                {risk.cta}
              </a>
              <CtaMicro />
            </div>
          </div>
        </section>

        {/* Autoridad narrativa — transformación personal, con imagen de dirección de arte */}
        <section className="sf-section sf-section-dark">
          <div className="sf-wrap grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                alt=""
                blurDataURL={metaFor(artDirectionImage).blurDataURL}
                className="sf-photo object-cover object-center"
                fill
                loading="lazy"
                placeholder="blur"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={artDirectionImage}
              />
            </div>
            <div>
              <p className="sf-eyebrow">{authority.eyebrow}</p>
              <h2 className="sf-display mt-5 text-4xl text-[var(--crema)]">{authority.title}</h2>
              <p className="mt-6 text-[var(--arena)]">{authority.body}</p>
              <p className="sf-quote mt-6 text-[var(--crema)]">{authority.bridge}</p>
            </div>
          </div>
        </section>

        {/* Prueba social — solo se muestra cuando existan testimonios reales */}
        {testimonials.length > 0 && (
          <section className="sf-section">
            <div className="sf-wrap">
              <p className="sf-eyebrow">Lo que dicen</p>
              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                  <figure className="border border-[var(--line)] p-6" key={t.name}>
                    <blockquote className="sf-quote text-[var(--text)]">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="sf-label mt-6 text-[var(--muted)]">
                      {t.name} · {t.context}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Manejo de objeciones — incluye descalificación honesta */}
        <section className="sf-section">
          <div className="sf-wrap grid gap-16 lg:grid-cols-2">
            <div>
              <p className="sf-eyebrow">Antes de reservar</p>
              <h2 className="sf-display mt-5 text-4xl">Las dudas que sí importan</h2>
            </div>
            <div>
              <div className="sf-faq divide-y divide-[var(--line)] border border-[var(--line)]">
                {concerns.map((c) => (
                  <details className="group p-5" key={c.q}>
                    <summary className="cursor-pointer">{c.q}</summary>
                    <p className="mt-3">{c.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cierre de urgencia — escasez real (agenda limitada), sin urgencia falsa */}
        <section className="sf-section">
          <div className="sf-wrap max-w-3xl border-l-2 border-[var(--terracota)] pl-8">
            <p className="sf-eyebrow">{urgency.eyebrow}</p>
            <h2 className="sf-display mt-5 text-4xl">{urgency.title}</h2>
            <p className="mt-6 text-[var(--muted)]">{urgency.body}</p>
            <a className="sf-cta mt-8" href="#reserva">
              {urgency.cta}
            </a>
            <CtaMicro />
          </div>
        </section>

        {/* A · Cierre emocional / identidad futura + acción final */}
        <section className="sf-section sf-section-dark" id="reserva">
          <div className="sf-wrap">
            <div className="max-w-3xl">
              <p className="sf-eyebrow">{identityClose.eyebrow}</p>
              <h2 className="sf-display mt-5 text-4xl text-[var(--crema)] md:text-5xl">{identityClose.title}</h2>
              <p className="sf-quote mt-6 text-[var(--arena)]">{identityClose.body}</p>
            </div>
            <div className="mt-14 grid gap-12 lg:grid-cols-2">
              <div>
                <p className="sf-eyebrow">Reservar</p>
                <h3 className="sf-display mt-5 text-3xl text-[var(--crema)]">Iniciemos la conversación</h3>
                <p className="mt-6 text-[var(--arena)]">
                  Respuesta personal en menos de 24 horas —yo, no un formulario automático. Cuéntame tu historia y vemos juntos el siguiente paso.
                </p>
                <a
                  className="sf-cta mt-8"
                  href={waLink("Hola, quiero iniciar una conversación sobre una sesión con Spiral Focus.")}
                  rel="noreferrer"
                  target="_blank"
                >
                  {identityClose.cta}
                </a>
                <CtaMicro className="!text-[var(--arena)]" />
              </div>
              <form className="grid gap-3 border border-[#3a342f] p-6" onSubmit={onReserve}>
                <input className="border border-[#3a342f] bg-transparent p-3 text-sm text-[var(--crema)]" name="nombre" placeholder="Nombre" required />
                <input className="border border-[#3a342f] bg-transparent p-3 text-sm text-[var(--crema)]" name="correo" placeholder="Correo" required type="email" />
                <input className="border border-[#3a342f] bg-transparent p-3 text-sm text-[var(--crema)]" name="whatsapp" placeholder="WhatsApp" required />
                <input className="border border-[#3a342f] bg-transparent p-3 text-sm text-[var(--crema)]" name="momento" placeholder="¿Qué momento quieres fotografiar?" required />
                <input className="border border-[#3a342f] bg-transparent p-3 text-sm text-[var(--crema)]" name="fecha" type="date" />
                <textarea className="border border-[#3a342f] bg-transparent p-3 text-sm text-[var(--crema)]" name="mensaje" placeholder="Cuéntame la historia" rows={4} />
                <button className="sf-cta w-full cursor-pointer border-0" type="submit">
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
