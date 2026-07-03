import Image from "next/image";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function SesionesPage() {
  return (
    <div className="sf-shell">
      <SiteHeader page="sesiones" />
      <main>
        <section className="sf-section grid items-center gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--sand)]">Sesiones personales</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-6xl">Fotografías para recordar cómo se sintió.</h1>
            <p className="mt-4 max-w-xl text-[var(--muted)]">
              Sesiones cinematográficas para parejas, retratos y lifestyle en Cancún y Riviera Maya.
            </p>
          </div>
          <Image alt="Sesiones SpiralFocus" className="sf-card h-[28rem] w-full object-cover" height={900} src="/img/pareja.jpeg" width={800} />
        </section>

        <section className="sf-section">
          <div className="sf-card p-6">
            <h2 className="text-2xl">¿Para quién es esta experiencia?</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Parejas", "Retratos personales", "Lifestyle", "Viajeros", "Creadores"].map((item) => (
                <span className="sf-chip" key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section grid gap-4 md:grid-cols-3">
          {["/img/danny2.jpg", "/img/faro.jpg", "/img/edificios.jpeg", "/img/moto.jpeg", "/img/estatua.jpg", "/img/silla corte.jpeg"].map((src) => (
            <Image alt="Colección sesiones" className="sf-card h-64 w-full object-cover" height={480} key={src} src={src} width={480} />
          ))}
        </section>

        <section className="sf-section">
          <div className="sf-card p-6">
            <h2 className="text-2xl">Reserva tu sesión</h2>
            <p className="mt-3 text-[var(--muted)]">WhatsApp directo para disponibilidad y propuesta personalizada.</p>
            <a className="sf-button sf-button-solid mt-5 inline-flex" href="https://wa.me/529981225937">Reservar sesión</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
