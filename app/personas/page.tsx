import Image from "next/image";
import { ContactSection, Faq, ProcessSteps } from "@/components/blocks";
import { SiteFooter, SiteHeader, WhatsAppFab } from "@/components/site-shell";
import { faqPersonas, personas, proceso } from "@/lib/brand";
import { metaFor } from "@/lib/image-meta";

const heroSrc = "/img/danny.webp";

export const metadata = {
  title: "Para ti | Spiral Focus",
  description: "Conservar una etapa antes de que cambie: imágenes de personas y familias en las que de verdad te reconoces, sin poses rígidas.",
};

export default function PersonasPage() {
  return (
    <div className="sf-shell">
      <SiteHeader />

      <main>
        {/* Hero — conservar una etapa */}
        <section className="relative min-h-[80dvh] overflow-hidden">
          <Image
            alt=""
            blurDataURL={metaFor(heroSrc).blurDataURL}
            className="sf-photo sf-hero-image object-cover"
            fill
            placeholder="blur"
            priority
            quality={90}
            sizes="100vw"
            src={heroSrc}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--negro)] via-[var(--negro)]/55 to-[var(--negro)]/20" />
          <div className="sf-wrap relative z-10 flex min-h-[80dvh] flex-col justify-end pb-16 pt-28">
            <p className="sf-eyebrow text-[var(--terracota)]">{personas.hero.eyebrow}</p>
            <div aria-hidden className="sf-rule-dorado mt-5" />
            <h1 className="sf-display mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] text-[var(--crema)]">
              {personas.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[0.9375rem] font-normal leading-relaxed text-[var(--arena)]">{personas.hero.sub}</p>
            <a className="sf-cta mt-10 w-fit" href="#contacto">
              {personas.hero.cta}
            </a>
          </div>
        </section>

        {/* Miedos reconocidos + respuesta */}
        <section className="sf-section">
          <div className="sf-wrap">
            <h2 className="sf-display max-w-2xl text-4xl md:text-5xl">{personas.fearsTitle}</h2>
            <div className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
              {personas.fears.map((f) => (
                <div className="bg-[var(--bg)] p-8" key={f.fear}>
                  <p className="sf-quote text-[var(--accent)]">{f.fear}</p>
                  <p className="mt-4 text-[var(--muted)]">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso como respuesta a esos miedos */}
        <section className="sf-section sf-section-dark">
          <div className="sf-wrap">
            <p className="sf-eyebrow">El proceso</p>
            <h2 className="sf-display mt-5 max-w-2xl text-4xl">{personas.processNote}</h2>
            <ProcessSteps steps={proceso} />
          </div>
        </section>

        {/* Preguntas frecuentes de personas */}
        <section className="sf-section">
          <div className="sf-wrap grid gap-16 lg:grid-cols-2">
            <div>
              <p className="sf-eyebrow">Preguntas</p>
              <h2 className="sf-display mt-5 text-4xl">Lo que suelen preguntarme.</h2>
            </div>
            <Faq items={faqPersonas} />
          </div>
        </section>
      </main>

      <ContactSection
        body="Cuéntame qué etapa quieres conservar y de quién. Te respondo yo, en persona, en menos de 24 horas."
        ctaLabel={personas.cta}
        eyebrow="Hablemos"
        title="Cuéntame qué quieres conservar."
        topicPlaceholder="¿Qué etapa quieres conservar?"
        waMessage="Hola, quiero conservar una etapa con Spiral Focus. Te cuento:"
      />

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
