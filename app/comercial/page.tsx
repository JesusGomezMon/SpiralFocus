import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function ComercialPage() {
  return (
    <div className="sf-shell">
      <SiteHeader page="comercial" />
      <main>
        <section className="sf-section grid items-center gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--sand)]">Marcas y negocios</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-6xl">Fotografía y video para negocios que quieren destacar.</h1>
            <p className="mt-4 text-[var(--muted)]">
              Contenido visual para restaurantes, hoteles, cafeterías, marcas y emprendedores en Cancún y Riviera Maya.
            </p>
          </div>
          <Image alt="Comercial SpiralFocus" className="sf-card h-[28rem] w-full object-cover" height={900} src="/img/cafe de olla.jpg" width={800} />
        </section>

        <section className="sf-section grid gap-4 md:grid-cols-2">
          <article className="sf-card p-6">
            <h2 className="text-2xl">El problema</h2>
            <p className="mt-3 text-[var(--muted)]">
              Muchos negocios publican contenido inconsistente y pierden oportunidades de venta y confianza.
            </p>
          </article>
          <article className="sf-card p-6">
            <h2 className="text-2xl">La solución</h2>
            <p className="mt-3 text-[var(--muted)]">
              SpiralFocus construye una línea visual coherente y profesional con dirección creativa y edición cuidada.
            </p>
          </article>
        </section>

        <section className="sf-section">
          <div className="grid gap-3 md:grid-cols-5">
            {["Fotografía gastronómica", "Fotografía de producto", "Redes sociales", "Reels", "Retrato corporativo"].map((s) => (
              <article className="sf-card p-4 text-sm" key={s}>{s}</article>
            ))}
          </div>
        </section>

        <section className="sf-section grid gap-4 md:grid-cols-2">
          <article className="sf-card p-5">
            <Image alt="Caso comercial" className="h-52 w-full rounded-xl object-cover" height={500} src="/img/barbershop.jpg" width={700} />
            <h3 className="mt-3 text-xl">Caso de estudio</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">Contenido consistente para negocio local con enfoque editorial.</p>
          </article>
          <article className="sf-card p-5">
            <Image alt="Caso gastronomía" className="h-52 w-full rounded-xl object-cover" height={500} src="/img/cafe de olla.jpg" width={700} />
            <h3 className="mt-3 text-xl">Resultado</h3>
            <p className="mt-2 text-sm text-[var(--muted)]">Mayor percepción premium y piezas listas para campañas digitales.</p>
          </article>
        </section>

        <section className="sf-section">
          <div className="sf-card divide-y divide-[var(--line)]">
            {["Anticipo", "Entrega", "Revisiones", "Facturación", "Cobertura geográfica"].map((q) => (
              <details className="p-4" key={q}>
                <summary className="cursor-pointer">{q}</summary>
                <p className="mt-2 text-sm text-[var(--muted)]">Se define en propuesta comercial según alcance y ciudad.</p>
              </details>
            ))}
          </div>
          <a className="sf-button sf-button-solid mt-6 inline-flex" href="https://wa.me/529981225937">Solicita una propuesta</a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
