import Image from "next/image";
import { SiteFooter, SiteHeader, WhatsAppFab } from "@/components/site-shell";
import { faq, foodPkgs, gallery, productPkgs, services, socialPkgs, waLink } from "@/lib/content";

const commercialGallery = gallery.filter((g) => ["Comercial", "Gastronomía", "Espacios"].includes(g.kind));

const videoPkgs = [
  { name: "Reel Express", price: "$900", unit: "MXN", items: ["Video 15–30 seg", "Edición + música", "Formato Reels / TikTok"], hi: false },
  { name: "Brand Story", price: "$1,800", unit: "MXN", items: ["Video 30–60 seg", "Guión + storyboard", "Color grading + 2 cortes"], hi: true },
  { name: "Pack 4 Reels", price: "$2,800", unit: "MXN", items: ["4 reels 15–30 seg", "Sesión de 2 horas", "Captions incluidos"], hi: false },
  { name: "Campaña Mensual", price: "$4,800", unit: "MXN / mes", items: ["8 reels / mes", "Foto + video combinado", "Estrategia de publicación"], hi: true },
] as const;

const extras = [
  { name: "Headshots / Retrato corporativo", sub: "por persona, 5 fotos editadas", price: "$450" },
  { name: "Fotografía de espacios", sub: "interior / exterior, 20 fotos", price: "$1,400" },
  { name: "Retoque adicional", sub: "fuera de paquete, por foto", price: "$80" },
  { name: "Entrega urgente 48 h", sub: "sobre tarifa base", price: "+30%" },
  { name: "Traslado zona hotelera", sub: "Cancún y corredor", price: "Sin costo" },
] as const;

function PkgCard({ tier, name, price, unit, items, hi }: { tier: string; name: string; price: string; unit: string; items: readonly string[]; hi: boolean }) {
  return (
    <article className={`sf-card p-6 ${hi ? "border-[var(--accent)]" : ""}`}>
      {hi && <span className="mb-3 inline-block bg-[var(--accent)] px-2 py-1 text-[0.65rem] uppercase tracking-[0.14em] text-[var(--noche)]">Popular</span>}
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent)]">{tier}</p>
      <h3 className="sf-serif mt-2 text-xl">{name}</h3>
      <p className="sf-serif mt-2 text-3xl text-[var(--accent)]">{price}</p>
      <p className="text-sm text-[var(--muted)]">{unit}</p>
      <ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]">
        {items.map((item) => (
          <li key={item}>– {item}</li>
        ))}
      </ul>
      <a
        className="sf-button sf-button-ghost mt-6 w-full"
        href={waLink(`Hola, me interesa el paquete ${name} (${tier}). ¿Podemos agendar?`)}
        rel="noreferrer"
        target="_blank"
      >
        Solicitar paquete
      </a>
    </article>
  );
}

export default function ComercialPage() {
  return (
    <div className="sf-shell">
      <SiteHeader page="comercial" />
      <main>
        <section className="relative min-h-[78dvh] overflow-hidden">
          <Image alt="Comercial Spiral Focus" className="object-cover object-center" fill priority src="/img/cafe de olla.jpg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--noche)] via-[var(--noche)]/60 to-transparent" />
          <div className="sf-wrap relative z-10 flex min-h-[78dvh] flex-col justify-end pb-14 pt-28">
            <p className="sf-eyebrow">Marcas y negocios</p>
            <h1 className="sf-serif mt-6 max-w-3xl text-4xl md:text-6xl">
              Imágenes que comunican <em className="text-[var(--accent)]">y convierten.</em>
            </h1>
            <p className="mt-6 max-w-xl text-[var(--muted)]">
              Contenido visual para restaurantes, hoteles, cafeterías, marcas y emprendedores. Cada proyecto resuelve un
              problema real — nunca se hace únicamente porque se ve bonito.
            </p>
            <a className="sf-button sf-button-solid mt-8 w-fit" href="#paquetes">
              Ver paquetes y tarifas
            </a>
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-wrap grid gap-4 md:grid-cols-2">
            <article className="sf-card p-7">
              <h2 className="sf-serif text-2xl">El problema</h2>
              <p className="mt-3 text-[var(--muted)]">
                Muchos negocios publican contenido inconsistente y pierden oportunidades de venta y confianza. La imagen
                no acompaña la calidad de lo que ofrecen.
              </p>
            </article>
            <article className="sf-card p-7">
              <h2 className="sf-serif text-2xl">La solución</h2>
              <p className="mt-3 text-[var(--muted)]">
                Spiral Focus construye una línea visual coherente con dirección creativa, entregables claros y enfoque en
                conversión para redes y campañas.
              </p>
            </article>
          </div>
        </section>

        <section className="sf-section sf-dark">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Servicios</p>
            <div className="mt-8 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
              {services.map((s) => (
                <article className="bg-[var(--noche)] p-7" key={s.n}>
                  <p className="sf-serif text-sm italic text-[var(--accent)]">{s.n}</p>
                  <h3 className="sf-serif mt-2 text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section" id="paquetes">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Fotografía de producto</p>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {productPkgs.map((p) => (
                <PkgCard hi={p.hi} items={p.items} key={p.name} name={p.name} price={p.price} tier={p.tier} unit={p.unit} />
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Fotografía gastronómica</p>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {foodPkgs.map((p) => (
                <PkgCard hi={p.hi} items={p.items} key={p.name} name={p.name} price={p.price} tier={p.tier} unit={p.unit} />
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section sf-dark">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Paquetes mensuales</p>
            <h2 className="sf-serif mt-4 text-3xl">Contenido para redes sociales</h2>
            <div className="mt-8 grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
              {socialPkgs.map((p) => (
                <article className={`flex items-start justify-between gap-4 bg-[var(--noche)] p-6 ${p.hi ? "border border-[var(--accent)]" : ""}`} key={p.name}>
                  <div>
                    <h3 className="sf-serif text-lg">{p.name}</h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">{p.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="sf-serif text-2xl text-[var(--accent)]">{p.price}</p>
                    <p className="text-xs text-[var(--muted)]">{p.unit}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Incluye: briefing, sesión mensual, postproducción y entrega en formatos optimizados.
            </p>
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Video y reels</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {videoPkgs.map((p) => (
                <article className={`sf-card p-6 ${p.hi ? "border-[var(--accent)]" : ""}`} key={p.name}>
                  <h3 className="sf-serif text-xl">{p.name}</h3>
                  <p className="sf-serif mt-2 text-2xl text-[var(--accent)]">
                    {p.price} <span className="text-sm text-[var(--muted)]">{p.unit}</span>
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
                    {p.items.map((item) => (
                      <li key={item}>– {item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Portafolio comercial</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {commercialGallery.map((item) => (
                <Image alt={item.kind} className="sf-card aspect-[4/5] w-full object-cover" height={600} key={item.src} src={item.src} width={480} />
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Extras</p>
            <div className="mt-6 divide-y divide-[var(--line)] border border-[var(--line)]">
              {extras.map((x) => (
                <div className="flex items-center justify-between gap-4 p-4" key={x.name}>
                  <div>
                    <p>{x.name}</p>
                    <p className="text-sm text-[var(--muted)]">{x.sub}</p>
                  </div>
                  <p className="sf-serif text-lg text-[var(--accent)]">{x.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section" id="reserva">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Condiciones</p>
            <div className="mt-6 divide-y divide-[var(--line)] border border-[var(--line)]">
              {faq.map((item) => (
                <details className="p-5" key={item.q}>
                  <summary className="cursor-pointer font-medium">{item.q}</summary>
                  <p className="mt-3 text-sm text-[var(--muted)]">{item.a}</p>
                </details>
              ))}
            </div>
            <a className="sf-button sf-button-solid mt-8" href={waLink("Hola, quiero una propuesta comercial para mi negocio.")} rel="noreferrer" target="_blank">
              Solicitar propuesta
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFab message="Hola, quiero una propuesta comercial con Spiral Focus." />
    </div>
  );
}
