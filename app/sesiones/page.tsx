import Image from "next/image";
import { SiteFooter, SiteHeader, WhatsAppFab } from "@/components/site-shell";
import { gallery, process, waLink } from "@/lib/content";

const sessionGallery = gallery.filter((g) => ["Parejas", "Retratos", "Lifestyle", "Editorial"].includes(g.kind));

export default function SesionesPage() {
  return (
    <div className="sf-shell">
      <SiteHeader page="sesiones" />
      <main>
        <section className="relative min-h-[78dvh] overflow-hidden">
          <Image alt="Sesiones Spiral Focus" className="object-cover object-center" fill priority src="/img/pareja.jpeg" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--noche)] via-[var(--noche)]/60 to-transparent" />
          <div className="sf-wrap relative z-10 flex min-h-[78dvh] flex-col justify-end pb-14 pt-28">
            <p className="sf-eyebrow">Sesiones personales</p>
            <h1 className="sf-serif mt-6 max-w-3xl text-4xl md:text-6xl">
              No tomo fotografías.
              <br />
              <em className="text-[var(--accent)]">Capturo cómo se siente un momento.</em>
            </h1>
            <p className="mt-6 max-w-xl text-[var(--muted)]">
              En un mundo lleno de imágenes rápidas, Spiral Focus crea recuerdos que permanecen. Cada sesión está
              pensada para transmitir algo real: la energía de una mirada, el silencio de un instante íntimo, la
              nostalgia de una noche o la sensación de estar exactamente donde debes estar.
            </p>
            <a className="sf-button sf-button-solid mt-8 w-fit" href={waLink("Hola, quiero reservar una sesión personal con Spiral Focus.")} rel="noreferrer" target="_blank">
              Reservar sesión
            </a>
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-wrap grid gap-10 md:grid-cols-2">
            <div>
              <p className="sf-eyebrow">Para quién</p>
              <h2 className="sf-serif mt-4 text-3xl">Experiencias cinematográficas en Cancún y Riviera Maya</h2>
              <p className="mt-5 text-[var(--muted)]">
                Sesiones para parejas, retratos personales, lifestyle y viajeros. Dirección cuidada, ritmo tranquilo y
                edición editorial para que tus fotos se sientan como escenas, no como poses.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Parejas", "Retratos personales", "Lifestyle", "Viajeros", "Creadores"].map((item) => (
                  <span className="sf-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <Image alt="Retrato Spiral Focus" className="sf-card aspect-[4/5] w-full object-cover" height={900} src="/img/DSC02449.jpg" width={720} />
          </div>
        </section>

        <section className="sf-section">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Galería</p>
            <h2 className="sf-serif mt-4 text-3xl">Colección personal</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sessionGallery.map((item) => (
                <Image alt={item.kind} className="sf-card aspect-[4/5] w-full object-cover" height={600} key={item.src} src={item.src} width={480} />
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section sf-dark">
          <div className="sf-wrap">
            <p className="sf-eyebrow">Proceso</p>
            <h2 className="sf-serif mt-4 text-3xl">De la idea a las fotos que vas a guardar para siempre</h2>
            <div className="mt-8">
              {process.map((step, i) => (
                <div className="grid gap-4 border-t border-[var(--line)] py-5 md:grid-cols-[3.5rem_1fr]" key={step}>
                  <p className="sf-serif text-2xl italic text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</p>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sf-section" id="reserva">
          <div className="sf-wrap sf-card p-8 text-center md:p-12">
            <h2 className="sf-serif text-3xl italic">Hagamos algo que puedas sentir</h2>
            <p className="mx-auto mt-4 max-w-lg text-[var(--muted)]">
              Cuéntame tu idea por WhatsApp. Te respondo con disponibilidad, propuesta y siguiente paso — sin presión.
            </p>
            <a className="sf-button sf-button-solid mt-8" href={waLink("Hola, quiero reservar una sesión personal. Me interesa conocer fechas y paquetes.")} rel="noreferrer" target="_blank">
              Reservar por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFab message="Hola, quiero reservar una sesión personal con Spiral Focus." />
    </div>
  );
}
