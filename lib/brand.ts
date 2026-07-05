export const WA = "529981225937";
export const EMAIL = "jesusgomezmon@gmail.com";
export const INSTAGRAM = "spiralfocus_";

export const tagline = "El arte de enfocar lo irrepetible.";
export const slogan = "Enfocamos momentos, no fotos.";

/* ============================================================
   Copy de conversión — Sistema ARCA™
   Orden: reconocimiento → filtro → evidencia → villano → dolor →
   visión → oferta → riesgo → autoridad → objeciones → urgencia → identidad
   ============================================================ */

/** A — Atención con reconocimiento. Habla de la tensión del lector, no del estudio. */
export const hero = {
  eyebrow: slogan,
  titleLead: "Lo irrepetible pasa una sola vez.",
  titleEm: "Que no se quede en mil fotos que nadie vuelve a abrir.",
  sub: "Bodas, retratos y momentos de vida dirigidos como cine —para que dentro de diez años sigas sintiendo el instante, no revisando una foto más.",
  ctaPrimary: "Iniciar la conversación",
  ctaGhost: "Ver el trabajo",
};

/** Filtro de audiencia — incluye autoexclusión explícita (Ley de autoselección). */
export const filter = {
  eyebrow: "¿Es para ti?",
  title: "Esto no es para todos. A propósito.",
  // Autoidentificación dolorosa con salida clara (ARCA Fase 11): el lector se reconoce, sin sentirse humillado.
  twoTypes:
    "Hay dos tipos de personas frente a un momento que no se repite: las que dan por hecho que “alguien tomará fotos”, y las que deciden cómo se va a recordar. Casi todos somos del primer tipo —hasta que perdemos algo. Si estás leyendo esto, quizá ya no quieras serlo.",
  forYou: [
    "Estás por vivir algo que no se repite y quieres que quede dirigido, no solo capturado.",
    "Entiendes que un buen recuerdo se construye, no se improvisa.",
    "Buscas una mirada de autor y un trato cercano, no una fábrica de fotos.",
  ],
  notForYou:
    "Si lo que buscas son cientos de fotos el mismo día al precio más bajo, hay estudios excelentes para eso. No somos nosotros —y preferimos decírtelo desde el principio.",
};

/** Evidencia temprana — la galería es la prueba. Aquí solo la enmarcamos. */
export const portfolioIntro = {
  eyebrow: "La prueba está en el trabajo",
  title: "No te pido que me creas. Te pido que mires.",
  sub: "Cada imagen es un fotograma dirigido: luz esperada, gesto real, encuadre con intención. Ahí se ve la diferencia entre una foto y un recuerdo.",
  proofLabel: "Portafolio vivo, actualizado cada semana",
  proofCta: "Verlo en Instagram",
};

/** Microcopy de fricción — acompaña a cada CTA (Patrones de microcopy ARCA). */
export const ctaMicro = "Respuesta personal en menos de 24 h · Sin compromiso · Agenda limitada al mes";

/** R — Villano nombrado. Externo, nunca el lector ni un competidor con nombre. */
export const villain = {
  name: "La fotografía de volumen",
  eyebrow: "El verdadero problema",
  title: "No es que tus fotos salgan mal. Es que nadie las dirige.",
  body: [
    "Se instaló una forma de fotografiar sobre toda la industria: disparar cientos de veces para no fallar una sola. Cantidad como seguro contra el error.",
    "El resultado son 500 fotos correctas y ninguna que sientas tuya. Por eso las fotos de tu último evento probablemente sigan guardadas, sin abrir. No fue tu culpa: no se dirigieron, solo se capturaron.",
  ],
};

/** Cuantificación del dolor — cualitativa y honesta (sin cifras inventadas). */
export const pain = {
  eyebrow: "Lo que está en juego",
  title: "Lo irrepetible no tiene segunda toma.",
  body: "La luz de esa tarde. El gesto de esa persona. La versión de ti que fuiste ese día. O queda dirigido para siempre, o se pierde para siempre. Es el único costo que ningún reembolso cubre.",
};

/** Visión del futuro deseado — sensorial y concreta (válvula de alivio tras el dolor). */
export const vision = {
  eyebrow: "Cómo se siente hacerlo bien",
  title: "Que abrir tus fotos sea volver a entrar al día.",
  body: "No un carrete que revisas por obligación: una narrativa que reconoces como tuya. El calor de la hora dorada. La risa a media frase. La mano que apretaste. Intacto, dentro de diez años.",
};

/** Oferta — el proceso como consecuencia lógica. Sin precio, con el siguiente paso revelado. */
export const offer = {
  eyebrow: "Cómo trabajamos",
  title: "Una experiencia dirigida, de principio a fin.",
  intro:
    "Todo empieza con un mensaje. Respondo yo, en persona, en menos de 24 horas —nunca un formulario automático. Conversamos tu historia y, solo si hay match, avanzamos a dirección y fecha.",
  // Transparencia como munición (ARCA Fase 11): explicar el porqué del "sin precio" en vez de dejar que el lector sospeche.
  transparency:
    "No verás una tarifa en esta página a propósito: cada proyecto se dirige distinto, así que se cotiza a la medida. Los números los vemos en la primera conversación —claros, completos y sin sorpresas.",
  cta: "Cuéntame tu historia",
};

export const experienceSteps = [
  "Primera conversación — entender la historia y el tono emocional",
  "Dirección narrativa — ubicación, luz y ritmo de la sesión",
  "La sesión — presencia, tacto y mirada de autor",
  "Selección curada — coherencia narrativa, no cantidad",
  "Edición cinematográfica — tonos cálidos y grano fílmico sutil",
  "Entrega — una narrativa visual que puedas reconocer como tuya",
] as const;

/** Reducción de riesgo — riesgo invertido, sin prometer reembolsos que no existen. */
export const risk = {
  eyebrow: "Sin riesgo para empezar",
  title: "La primera conversación no cuesta nada. Y no es una venta.",
  body: "Es una charla para entender tu historia y decirte con honestidad si somos —o no— para ti. Si no encajamos, te lo digo y te recomiendo a alguien que sí. No pierdes nada por preguntar; solo por no hacerlo.",
  cta: "Escribir sin compromiso",
};

/** Autoridad narrativa — transformación personal (Ley del origen no lineal).
 *  BORRADOR honesto: reemplázalo con tus 2-3 líneas reales cuando las tengas. */
export const authority = {
  eyebrow: "Quién dirige",
  title: "No siempre dirigí.",
  // Epiphany Bridge comprimido (ARCA Fase 11.2): ordinario → intento fallido → quiebre → hallazgo → transformación → puente al lector.
  body: "Antes disparaba como todos: cientos de fotos y la esperanza de que alguna dijera algo. Ninguna lo hacía. El día que entendí por qué —las imágenes que me marcaban no eran las más nítidas, sino las más dirigidas— dejé de capturar y empecé a dirigir.",
  bridge: "Si a mí me tomó años descubrirlo, tú puedes empezar hoy del lado correcto: con un momento dirigido desde la primera conversación.",
};

/** Objeciones — incluye una respuesta que descalifica honestamente. */
export const concerns = [
  { q: "¿Me veré natural frente a la cámara?", a: "La dirección existe para acompañarte con tacto. No actúas: revelas. Cada sesión empieza en la conversación, no en el disparo." },
  { q: "¿El estilo coincidirá con lo que imagino?", a: "Trabajamos con dirección narrativa previa para que el resultado tenga una identidad visual reconocible, no un filtro genérico." },
  { q: "¿Vale la pena la inversión?", a: "Competimos por criterio, no por volumen. El precio refleja una experiencia boutique y un resultado que seguirá emocionando dentro de diez años." },
  { q: "¿Son para mí si busco muchas fotos al mejor precio?", a: "Con honestidad: no. Si tu prioridad es cantidad y precio, hay estudios excelentes para eso. Si es que un momento quede dirigido para siempre, hablemos." },
] as const;

/** Urgencia honesta — escasez real (agenda limitada), sin cuentas regresivas falsas. */
export const urgency = {
  eyebrow: "Agenda",
  title: "Tomo pocos proyectos al mes. A propósito.",
  body: "Para que cada sesión reciba dirección real —y no producción en serie— limito el número de proyectos que acepto cada mes. Cuando el mes se llena, la siguiente fecha se recorre. Si tu momento ya tiene fecha, conviene empezar con tiempo.",
  cta: "Ver disponibilidad",
};

/** A — Cierre de identidad futura (no transaccional). */
export const identityClose = {
  eyebrow: "Antes de decidir",
  title: "Dentro de diez años vas a mirar atrás.",
  body: "La única pregunta es qué vas a tener para mirar: un carrete más, o el día —dirigido y hecho tuyo para siempre.",
  cta: "Reservar mi fecha",
};

/** Prueba social — vacío por ahora. La sección no se renderiza hasta que existan testimonios reales. */
export type Testimonial = { quote: string; name: string; context: string };
export const testimonials: Testimonial[] = [];

export const phrases = [
  "No fotografiamos eventos, dirigimos historias.",
  "Cada sesión empieza antes de la cámara: en la conversación.",
  "La luz correcta no se persigue, se espera.",
] as const;

/* ============================================================
   Galería — orient: h = horizontal, v = vertical, sq = cuadrada
   ============================================================ */
export type GalleryPhoto = {
  kind: "photo";
  src: string;
  orient: "h" | "v" | "sq";
  featured?: boolean;
};

export type GalleryAccent = {
  kind: "accent";
  orient: "h" | "v";
  variant: "quote" | "reserve";
};

export type GalleryItem = GalleryPhoto | GalleryAccent;

export const gallery: GalleryItem[] = [
  { kind: "photo", src: "/img/DSC02507.webp", orient: "h", featured: true },
  { kind: "photo", src: "/img/DSC02449.webp", orient: "v" },
  { kind: "accent", orient: "v", variant: "quote" },
  { kind: "photo", src: "/img/DSC03960.webp", orient: "h" },
  { kind: "photo", src: "/img/DSC02599.webp", orient: "h" },
  { kind: "photo", src: "/img/danny.webp", orient: "h" },
  { kind: "photo", src: "/img/DSC02862.webp", orient: "v" },
  { kind: "photo", src: "/img/DSC02882.webp", orient: "v" },
  { kind: "photo", src: "/img/DSC03950.webp", orient: "v" },
  { kind: "photo", src: "/img/DSC03978.webp", orient: "v" },
  { kind: "accent", orient: "h", variant: "reserve" },
  { kind: "photo", src: "/img/bf03157f-33cc-4174-abea-14a10fada772.webp", orient: "h" },
  { kind: "photo", src: "/img/b3d817f9-5b13-4716-bd60-22df3db0a706.webp", orient: "h" },
  { kind: "photo", src: "/img/edificios.webp", orient: "v" },
  { kind: "photo", src: "/img/estatua.webp", orient: "v" },
  { kind: "photo", src: "/img/pareja.webp", orient: "v" },
  { kind: "photo", src: "/img/faro.webp", orient: "v" },
  { kind: "photo", src: "/img/moto.webp", orient: "v" },
  { kind: "photo", src: "/img/barbershop.webp", orient: "v" },
  { kind: "photo", src: "/img/cafe-de-olla.webp", orient: "sq" },
  { kind: "photo", src: "/img/silla-corte.webp", orient: "v" },
  { kind: "photo", src: "/img/carros.webp", orient: "v" },
];

export const heroImage = "/img/DSC02599.webp";
export const artDirectionImage = "/img/bf03157f-33cc-4174-abea-14a10fada772.webp";

export function galleryAspect(orient: "h" | "v" | "sq", featured?: boolean) {
  if (orient === "h") return "aspect-[16/10]";
  if (orient === "sq") return "aspect-square";
  return featured ? "aspect-[3/4]" : "aspect-[4/5]";
}

export function waLink(text: string) {
  return `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
}
