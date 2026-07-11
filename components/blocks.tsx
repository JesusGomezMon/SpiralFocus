"use client";

import { FormEvent } from "react";
import { ctaMicro, waLink } from "@/lib/brand";

/** Microcopy humano junto a los CTA (sin urgencia artificial). */
export function CtaMicro({ className = "" }: { className?: string }) {
  return <p className={`mt-4 text-xs leading-relaxed tracking-wide text-[var(--muted)] ${className}`}>{ctaMicro}</p>;
}

/** Pasos de proceso numerados — concreto, sin tecnicismos. */
export function ProcessSteps({ steps }: { steps: readonly { n: string; title: string; desc: string }[] }) {
  return (
    <div className="mt-12">
      {steps.map((s) => (
        <div className="grid gap-4 border-t border-[#3a342f] py-6 md:grid-cols-[4rem_1fr]" key={s.n}>
          <p className="sf-display text-2xl italic text-[var(--terracota)]">{s.n}</p>
          <div>
            <h3 className="sf-display text-2xl text-[var(--crema)]">{s.title}</h3>
            <p className="mt-2 text-[var(--arena)]">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/** Preguntas frecuentes. */
export function Faq({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="sf-faq divide-y divide-[var(--line)] border border-[var(--line)]">
      {items.map((c) => (
        <details className="group p-5" key={c.q}>
          <summary className="cursor-pointer">{c.q}</summary>
          <p className="mt-3">{c.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Sección de contacto + formulario que abre WhatsApp. Compartida por las tres rutas. */
export function ContactSection({
  id = "contacto",
  eyebrow,
  title,
  body,
  ctaLabel,
  waMessage,
  topicPlaceholder,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  waMessage: string;
  topicPlaceholder: string;
}) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = [
      "Hola, quiero hablar con Spiral Focus.",
      `Nombre: ${fd.get("nombre")}`,
      `Correo: ${fd.get("correo")}`,
      `WhatsApp: ${fd.get("whatsapp")}`,
      `Sobre: ${fd.get("tema")}`,
      `Mensaje: ${fd.get("mensaje")}`,
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="sf-section sf-section-dark" id={id}>
      <div className="sf-wrap grid gap-12 lg:grid-cols-2">
        <div>
          <p className="sf-eyebrow">{eyebrow}</p>
          <h2 className="sf-display mt-5 text-4xl text-[var(--crema)] md:text-5xl">{title}</h2>
          <p className="mt-6 text-[var(--arena)]">{body}</p>
          <a className="sf-cta mt-8" href={waLink(waMessage)} rel="noreferrer" target="_blank">
            {ctaLabel}
          </a>
          <CtaMicro className="!text-[var(--arena)]" />
        </div>
        <form className="grid gap-3 border border-[#3a342f] p-6" onSubmit={onSubmit}>
          <input className="border border-[#3a342f] bg-transparent p-3 text-sm text-[var(--crema)]" name="nombre" placeholder="Nombre" required />
          <input className="border border-[#3a342f] bg-transparent p-3 text-sm text-[var(--crema)]" name="correo" placeholder="Correo" required type="email" />
          <input className="border border-[#3a342f] bg-transparent p-3 text-sm text-[var(--crema)]" name="whatsapp" placeholder="WhatsApp" required />
          <input className="border border-[#3a342f] bg-transparent p-3 text-sm text-[var(--crema)]" name="tema" placeholder={topicPlaceholder} required />
          <textarea className="border border-[#3a342f] bg-transparent p-3 text-sm text-[var(--crema)]" name="mensaje" placeholder="Cuéntame un poco más" rows={4} />
          <button className="sf-cta w-full cursor-pointer border-0" type="submit">
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
