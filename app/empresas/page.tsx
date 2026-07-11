import Image from "next/image";
import { ContactSection, Faq, ProcessSteps } from "@/components/blocks";
import { SiteFooter, SiteHeader, WhatsAppFab } from "@/components/site-shell";
import { empresas, faqEmpresas } from "@/lib/brand";
import { metaFor } from "@/lib/image-meta";

const heroSrc = "/img/edificios.webp";

export const metadata = {
  title: "Para tu empresa | Spiral Focus",
  description: "Convertimos el trabajo real de tu empresa en imágenes que tus clientes puedan reconocer y creer.",
};

export default function EmpresasPage() {
  return (
    <div className="sf-shell">
      <SiteHeader />

      <main>
        {/* Hero — mostrar la realidad de tu marca */}
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
            <p className="sf-eyebrow text-[var(--terracota)]">{empresas.hero.eyebrow}</p>
            <div aria-hidden className="sf-rule-dorado mt-5" />
            <h1 className="sf-display mt-5 max-w-3xl text-[clamp(2.25rem,6vw,4.25rem)] leading-[1.08] text-[var(--crema)]">
              {empresas.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[0.9375rem] font-normal leading-relaxed text-[var(--arena)]">{empresas.hero.sub}</p>
            <a className="sf-cta mt-10 w-fit" href="#contacto">
              {empresas.hero.cta}
            </a>
          </div>
        </section>

        {/* El problema */}
        <section className="sf-section">
          <div className="sf-wrap max-w-3xl">
            <p className="sf-eyebrow">{empresas.problem.eyebrow}</p>
            <h2 className="sf-display mt-5 text-4xl md:text-5xl">{empresas.problem.title}</h2>
            <p className="mt-6 text-[var(--muted)]">{empresas.problem.body}</p>
          </div>
        </section>

        {/* La propuesta */}
        <section className="sf-section sf-section-dark">
          <div className="sf-wrap max-w-3xl">
            <p className="sf-eyebrow">{empresas.proposal.eyebrow}</p>
            <p className="sf-display mt-6 text-3xl leading-snug text-[var(--crema)] md:text-4xl">{empresas.proposal.statement}</p>
            <p className="mt-6 text-[var(--arena)]">{empresas.proposal.detail}</p>
          </div>
        </section>

        {/* IA vs. fotografía real */}
        <section className="sf-section">
          <div className="sf-wrap max-w-3xl">
            <p className="sf-eyebrow">{empresas.iaVsReal.eyebrow}</p>
            <p className="mt-6 text-[var(--muted)]">{empresas.iaVsReal.legit}</p>
            <div className="my-10 border-l-2 border-[var(--terracota)] pl-6">
              <p className="sf-display text-2xl italic text-[var(--muted)] md:text-3xl">
                Una imagen generada puede representar una idea.
              </p>
              <p className="sf-display mt-2 text-2xl italic text-[var(--terracota)] md:text-3xl">
                Una fotografía puede demostrar una realidad.
              </p>
            </div>
            <p className="text-[var(--muted)]">{empresas.iaVsReal.body}</p>
          </div>
        </section>

        {/* Proceso empresas */}
        <section className="sf-section sf-section-dark">
          <div className="sf-wrap">
            <p className="sf-eyebrow">{empresas.procesoIntro.eyebrow}</p>
            <h2 className="sf-display mt-5 max-w-2xl text-4xl">{empresas.procesoIntro.title}</h2>
            <ProcessSteps steps={empresas.proceso} />
          </div>
        </section>

        {/* Preguntas frecuentes de empresas */}
        <section className="sf-section">
          <div className="sf-wrap grid gap-16 lg:grid-cols-2">
            <div>
              <p className="sf-eyebrow">Preguntas</p>
              <h2 className="sf-display mt-5 text-4xl">Lo que suelen preguntar las marcas.</h2>
            </div>
            <Faq items={faqEmpresas} />
          </div>
        </section>
      </main>

      <ContactSection
        body="Cuéntame qué hace tu empresa y qué sientes que no se está viendo. Reviso tu caso y te respondo yo, en persona."
        ctaLabel={empresas.cta}
        eyebrow="Hablemos"
        title="Revisemos qué no está comunicando tu marca."
        topicPlaceholder="¿Qué necesita mostrar tu marca?"
        waMessage="Hola, quiero hablar sobre las imágenes de mi empresa con Spiral Focus. Te cuento:"
      />

      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
