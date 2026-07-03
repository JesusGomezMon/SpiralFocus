export const WA = "529981225937";
export const EMAIL = "jesusgomezmon@gmail.com";

export const gallery = [
  { src: "/img/DSC02422.jpg", kind: "Retratos" },
  { src: "/img/DSC02449.jpg", kind: "Editorial" },
  { src: "/img/DSC02507.jpg", kind: "Lifestyle" },
  { src: "/img/DSC02599.jpg", kind: "Retratos" },
  { src: "/img/DSC02862.jpg", kind: "Editorial" },
  { src: "/img/DSC02882.jpg", kind: "Parejas" },
  { src: "/img/DSC03950.jpg", kind: "Comercial" },
  { src: "/img/DSC03960.jpg", kind: "Gastronomía" },
  { src: "/img/DSC03978.jpg", kind: "Espacios" },
  { src: "/img/barbershop.jpg", kind: "Comercial" },
  { src: "/img/cafe de olla.jpg", kind: "Gastronomía" },
  { src: "/img/carros.jpg", kind: "Lifestyle" },
  { src: "/img/danny.jpg", kind: "Retratos" },
  { src: "/img/danny2.jpg", kind: "Retratos" },
  { src: "/img/edificios.jpeg", kind: "Espacios" },
  { src: "/img/estatua.jpg", kind: "Editorial" },
  { src: "/img/faro.jpg", kind: "Lifestyle" },
  { src: "/img/moto.jpeg", kind: "Lifestyle" },
  { src: "/img/pareja.jpeg", kind: "Parejas" },
  { src: "/img/popusa.jpg", kind: "Gastronomía" },
  { src: "/img/silla corte.jpeg", kind: "Comercial" },
  { src: "/img/b3d817f9-5b13-4716-bd60-22df3db0a706.jpg", kind: "Editorial" },
  { src: "/img/bf03157f-33cc-4174-abea-14a10fada772.jpg", kind: "Retratos" },
] as const;

export const galleryFilters = ["Todos", "Comercial", "Gastronomía", "Retratos", "Lifestyle", "Editorial", "Parejas", "Espacios"] as const;

export const services = [
  { n: "01", title: "Fotografía de Producto", desc: "Pack shots, lifestyle y editorial. Fondo blanco o ambiental. Listo para e-commerce y redes." },
  { n: "02", title: "Fotografía Gastronómica", desc: "Platillos, bebidas y espacios. Dirección de alimentos, luz natural o artificial controlada." },
  { n: "03", title: "Contenido para Redes", desc: "Paquetes mensuales con fotografía y estrategia visual para Instagram y Facebook." },
  { n: "04", title: "Video y Reels", desc: "Cortos de 15–60 seg para Reels. Edición dinámica con música, texto y motion." },
] as const;

export const process = [
  "Descubrimiento del proyecto",
  "Briefing y objetivos",
  "Propuesta creativa",
  "Planeación de sesión",
  "Producción",
  "Selección y edición",
  "Entrega y seguimiento",
] as const;

export const traits = [
  { label: "Profesional", yes: "Procesos claros, comunicación directa", no: "Promesas vacías o copia genérica" },
  { label: "Confiable", yes: "Plazos definidos, transparencia en alcance", no: "Sorpresas en precio o entrega" },
  { label: "Estratégica", yes: "Cada imagen ligada a un objetivo de negocio", no: "Fotos bonitas sin propósito comercial" },
  { label: "Cercana", yes: "Trato directo, acompañamiento continuo", no: "Frialdad corporativa" },
] as const;

export const faq = [
  { q: "¿Cuánto anticipo se requiere?", a: "50% para confirmar fecha. Saldo al recibir materiales." },
  { q: "¿Cuántas revisiones incluye?", a: "Hasta 2 rondas de ajustes incluidas en cada paquete." },
  { q: "¿Cuándo se entrega?", a: "Galería digital privada en alta resolución. Entrega entre 5 y 7 días según paquete." },
  { q: "¿Facturación disponible?", a: "Sí. Tarifas vigentes hasta diciembre 2026." },
  { q: "¿Cobertura geográfica?", a: "Cancún y zona hotelera sin costo de traslado. Fuera de zona: cotización." },
] as const;

export const productPkgs = [
  { tier: "Básico", name: "Essential", price: "$800", unit: "MXN · sesión única", items: ["Hasta 5 productos", "10 fotos editadas", "1 ángulo por producto", "Fondo blanco/neutro", "Entrega en 5 días"], hi: false },
  { tier: "Profesional", name: "Studio", price: "$1,600", unit: "MXN · sesión única", items: ["Hasta 10 productos", "25 fotos editadas", "2–3 ángulos por producto", "Pack shot + lifestyle", "Retoque avanzado", "Entrega en 5 días"], hi: true },
  { tier: "Premium", name: "Catalogue", price: "$2,800", unit: "MXN · sesión única", items: ["Hasta 20 productos", "50+ fotos editadas", "Ángulos completos", "Dirección de arte", "Retoque maestro", "Entrega en 7 días"], hi: false },
] as const;

export const foodPkgs = [
  { tier: "Básico", name: "Menú", price: "$1,000", unit: "MXN · en restaurante", items: ["Hasta 8 platillos", "16 fotos editadas", "Luz natural preferente", "Entrega en 5 días"], hi: false },
  { tier: "Completo", name: "Editorial", price: "$2,000", unit: "MXN · en restaurante", items: ["Hasta 15 platillos", "35 fotos editadas", "Dirección de alimentos", "Ambiental + detalle", "Entrega en 5 días"], hi: true },
  { tier: "Premium", name: "Full Brand", price: "$3,500", unit: "MXN · sesión + estrategia", items: ["Menú completo", "60+ fotos editadas", "Video teaser 30 seg", "Kit para redes incluido", "Entrega en 7 días"], hi: false },
] as const;

export const socialPkgs = [
  { name: "Starter", desc: "8 fotos + 4 stories / mes", price: "$1,200", unit: "MXN / mes", hi: false },
  { name: "Grow", desc: "16 fotos + 8 stories + 2 reels / mes", price: "$2,400", unit: "MXN / mes", hi: true },
  { name: "Scale", desc: "24 fotos + 12 stories + 4 reels / mes", price: "$3,800", unit: "MXN / mes", hi: true },
  { name: "Full Presence", desc: "Contenido + estrategia + comunidad", price: "Cotizar", unit: "a medida", hi: false },
] as const;

export function waLink(text: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}
