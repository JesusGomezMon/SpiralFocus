import Image from "next/image";
import Link from "next/link";
import { LogoMark } from "@/components/logo";
import { ContactSection, Faq, ProcessSteps } from "@/components/blocks";
import { SiteFooter, SiteHeader, WhatsAppFab } from "@/components/site-shell";
import {
  caseStudies,
  faqInicio,
  gallery,
  heroImage,
  inicio,
  INSTAGRAM,
  phrases,
  photographer,
  proceso,
  testimonials,
  type GalleryPhoto,
} from "@/lib/brand";
import { metaFor } from "@/lib/image-meta";

const gallerySizes = "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw";
const instagramUrl = `https://instagram.com/${INSTAGRAM}`;

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
          blurDataURL={metaFor("/img/faro.webp").blurDataURL}
          className="sf-photo object-cover object-center"
          fill
          loading="lazy"
          placeholder="blur"
          quality={90}
          sizes={gallerySizes}
          src="/img/faro.webp"
        />
        <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--negro)_68%,transparent)]" />
        <div className="sf-gallery-accent relative z-10 h-full border-0 bg-transparent">
          <LogoMark className="mb-4 h-10 w-10 opacity-90" />
          <div aria-hidden className="sf-rule-dorado mb-6" />
          <p className="sf-quote sf-quote-accent text-[var(--crema)]">&ldquo;{phrases[0]}&rdquo;</p>
        </div>
      </div>
    );
  }
  return (
    <div className="sf-gallery-accent min-h-[14rem]">
      <p className="sf-eyebrow">Trabajo reciente</p>
      <p className="sf-display mt-4 text-2xl text-[var(--crema)]">{phrases[1]}</p>
      <a className="sf-cta mt-8 w-fit" href="#contacto">
        Hablemos
      </a>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="sf-shell">
      <SiteHeader />

      <main>
        {/* 1 · Hero con la idea central */}
        <section className="relative min-h-[100dvh] overflow-hidden">
          <Image alt="" className="sf-photo sf-hero-image object-cover" fill priority quality={90} sizes="100vw" src={heroImage} />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--negro)] via-[var(--negro)]/55 to-[var(--negro)]/20" />
          <div className="sf-wrap relative z-10 flex min-h-[100dvh] flex-col justify-end pb-16 pt-28">
            <p className="sf-eyebrow text-[var(--terracota)]">{inicio.hero.eyebrow}</p>
            <div aria-hidden className="sf-rule-dorado mt-5" />
            <h1 className="sf-display mt-5 max-w-4xl text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] text-[var(--crema)]">
              {inicio.hero.titleLead} <em className="text-[var(--terracota)]">{inicio.hero.titleEm}</em>
            </h1>
            <p className="mt-6 max-w-2xl text-[0.9375rem] font-normal leading-relaxed text-[var(--arena)]">{inicio.hero.sub}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a className="sf-cta" href="#caminos">
                {inicio.hero.cta}
              </a>
              <a className="sf-cta sf-cta-ghost !border-[var(--crema)] !text-[var(--crema)]" href="#trabajo">
                Ver trabajo
              </a>
            </div>
          </div>
        </section>

        {/* 2 · Reconocimiento del problema */}
        <section className="sf-section">
          <div className="sf-wrap max-w-3xl">
            <p className="sf-eyebrow">{inicio.problem.eyebrow}</p>
            <h2 className="sf-display mt-5 text-4xl md:text-5xl">{inicio.problem.title}</h2>
            <p className="mt-6 text-[var(--muted)]">{inicio.problem.body}</p>
          </div>
        </section>

        {/* 3 · Dos caminos: personas / empresas */}
        <section className="sf-section sf-section-dark" id="caminos">
          <div className="sf-wrap">
            <p className="sf-eyebrow">{inicio.caminos.eyebrow}</p>
            <h2 className="sf-display mt-5 text-4xl text-[var(--crema)]">{inicio.caminos.title}</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[inicio.caminos.personas, inicio.caminos.empresas].map((path) => (
                <Link
                  className="group flex flex-col border border-[color-mix(in_srgb,var(--dorado)_45%,var(--negro))] bg-[color-mix(in_srgb,var(--dorado)_8%,var(--negro))] p-8 transition-colors hover:border-[var(--terracota)]"
                  href={path.href}
                  key={path.href}
                >
                  <p className="sf-label text-[var(--dorado)]">{path.label}</p>
                  <h3 className="sf-display mt-4 text-3xl text-[var(--crema)]">{path.title}</h3>
                  <p className="mt-4 text-[var(--arena)]">{path.desc}</p>
                  <span className="sf-cta mt-8 w-fit">{path.cta}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · Diferencia entre tener fotografías y tener imágenes propias */}
        <section className="sf-section">
          <div className="sf-wrap">
            <p className="sf-eyebrow">{inicio.difference.eyebrow}</p>
            <h2 className="sf-display mt-5 max-w-2xl text-4xl md:text-5xl">{inicio.difference.title}</h2>
            <div className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
              {[inicio.difference.fotografias, inicio.difference.imagenes].map((col, i) => (
                <div className={`p-8 ${i === 0 ? "bg-[var(--surface)]" : "bg-[var(--bg)]"}`} key={col.title}>
                  <h3 className={`sf-display text-2xl ${i === 0 ? "text-[var(--muted)]" : "text-[var(--terracota)]"}`}>{col.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {col.items.map((item) => (
                      <li className="flex gap-3 text-[var(--text)]" key={item}>
                        <span aria-hidden className="mt-1 text-[var(--dorado)]">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portafolio visual (trabajo real) — galería masonry, orientación intacta */}
        <section className="sf-section sf-section-dark" id="trabajo">
          <div className="sf-wrap mb-10">
            <p className="sf-eyebrow">Trabajo</p>
            <h2 className="sf-display mt-5 text-4xl">Imágenes reales, de personas y lugares reales.</h2>
            <a
              className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--dorado)] transition-colors hover:text-[var(--terracota)]"
              href={instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="sf-label">Más trabajo en Instagram</span>
              <span aria-hidden>→</span>
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

        {/* 5 · Proceso general */}
        <section className="sf-section sf-section-dark">
          <div className="sf-wrap">
            <p className="sf-eyebrow">{inicio.proceso.eyebrow}</p>
            <h2 className="sf-display mt-5 text-4xl">{inicio.proceso.title}</h2>
            <p className="mt-6 max-w-2xl text-[var(--arena)]">{inicio.proceso.intro}</p>
            <ProcessSteps steps={proceso} />
          </div>
        </section>

        {/* 6 · Espacio para casos/historias */}
        {/* PENDIENTE: casos/historias reales de clientes (con nombre y contexto). No fabricar. */}
        <section className="sf-section">
          <div className="sf-wrap max-w-3xl">
            <p className="sf-eyebrow">Casos</p>
            <h2 className="sf-display mt-5 text-4xl">Historias de clientes.</h2>
            {caseStudies.length > 0 ? (
              <div className="mt-8 space-y-6">
                {caseStudies.map((c) => (
                  <article className="border border-[var(--line)] p-6" key={c.title}>
                    <h3 className="sf-display text-2xl">{c.title}</h3>
                    <p className="mt-3 text-[var(--muted)]">{c.summary}</p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-[var(--muted)]">
                Estoy documentando casos reales de clientes. Aquí irán, con nombre y contexto, cuando el material lo permita. No invento historias para llenar el espacio.
              </p>
            )}
          </div>
        </section>

        {/* 7 · Espacio para testimonios */}
        {/* PENDIENTE: testimonios reales con arco (miedo antes → qué pasó → qué se reconoció al final). No fabricar. */}
        <section className="sf-section sf-section-dark">
          <div className="sf-wrap max-w-3xl">
            <p className="sf-eyebrow">Testimonios</p>
            <h2 className="sf-display mt-5 text-4xl text-[var(--crema)]">Lo que dicen quienes ya lo vivieron.</h2>
            {testimonials.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {testimonials.map((t) => (
                  <figure className="border border-[#3a342f] p-6" key={t.name}>
                    <blockquote className="sf-quote text-[var(--crema)]">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="sf-label mt-6 text-[var(--arena)]">{t.name} · {t.context}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <p className="mt-6 text-[var(--arena)]">
                Prefiero no poner frases sueltas. Cuando tenga testimonios reales, de personas dispuestas a contar qué sentían antes y qué reconocieron al final, irán aquí, con su nombre.
              </p>
            )}
          </div>
        </section>

        {/* 8 · Presentación del fotógrafo (sin formato "quién dirige") */}
        <section className="sf-section">
          <div className="sf-wrap max-w-3xl">
            <p className="sf-eyebrow">{photographer.eyebrow}</p>
            <h2 className="sf-display mt-5 text-4xl md:text-5xl">{photographer.title}</h2>
            <div className="mt-6 space-y-6 text-[var(--muted)]">
              {photographer.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* 9 · Preguntas frecuentes */}
        <section className="sf-section">
          <div className="sf-wrap grid gap-16 lg:grid-cols-2">
            <div>
              <p className="sf-eyebrow">Preguntas</p>
              <h2 className="sf-display mt-5 text-4xl">Antes de escribir.</h2>
            </div>
            <Faq items={faqInicio} />
          </div>
        </section>
      </main>

      {/* 10 · Llamado a conversación */}
      <ContactSection
        body={inicio.contacto.body}
        ctaLabel="Escríbeme por WhatsApp"
        eyebrow={inicio.contacto.eyebrow}
        title={inicio.contacto.title}
        topicPlaceholder="¿Qué quieres conservar o mostrar?"
        waMessage="Hola, quiero hablar sobre imágenes con Spiral Focus."
      />

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
