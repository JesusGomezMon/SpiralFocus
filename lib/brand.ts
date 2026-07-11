export const WA = "529981225937";
export const EMAIL = "jesusgomezmon@gmail.com";
export const INSTAGRAM = "spiralfocus_";

/** Línea de firma en el footer. */
export const tagline = "Imágenes que realmente son tuyas.";

/* ============================================================
   MENSAJE DE MARCA — Spiral Focus
   Idea central: ayudar a personas y empresas a tener imágenes
   que les pertenecen y representan algo verdadero.
   Dos audiencias: personas (/personas) y empresas (/empresas),
   con un hub de inicio compartido (/).
   ============================================================ */

/** Frase central de la marca. */
export const central = "No necesitas más fotografías. Necesitas imágenes que realmente sean tuyas.";

/** Microcopy junto a los CTA — humano, sin urgencia artificial. */
export const ctaMicro = "Respuesta personal en menos de 24 h. Sin compromiso.";

/* ---------- INICIO (hub) ---------- */

export const inicio = {
  hero: {
    eyebrow: "Fotografía y producción audiovisual · Cancún y Riviera Maya",
    titleLead: "No necesitas más fotografías.",
    titleEm: "Necesitas imágenes que realmente sean tuyas.",
    sub: "Trabajo con personas y con empresas para producir imágenes en las que se reconozcan: no un banco de archivos, sino fotografías que muestran algo verdadero sobre quién eres o lo que haces.",
    cta: "¿Qué te trajo hasta aquí?",
  },
  problem: {
    eyebrow: "El punto de partida",
    title: "Tienes miles de fotos. Casi ninguna te representa.",
    body: "El teléfono está lleno; hay fotos de casi todo. Pero cuando buscas una que muestre de verdad cómo eras en cierta etapa, o cómo es tu empresa por dentro, casi nunca aparece. Tener muchas fotos y no tener ninguna propia es más común de lo que parece.",
  },
  caminos: {
    eyebrow: "Dos caminos",
    title: "¿Qué te trajo hasta aquí?",
    personas: {
      label: "Para ti",
      title: "Quiero conservar una etapa",
      desc: "Un momento de tu vida, tu familia, tu manera de ser ahora mismo, antes de que cambie.",
      cta: "Hablemos de esta etapa",
      href: "/personas",
    },
    empresas: {
      label: "Para tu empresa",
      title: "Quiero mostrar la realidad de mi marca",
      desc: "Tu equipo, tu producto, tu forma de trabajar, mostrado con imágenes que son tuyas y de nadie más.",
      cta: "Hablemos de lo que tu marca necesita mostrar",
      href: "/empresas",
    },
  },
  difference: {
    eyebrow: "La diferencia",
    title: "Tener fotografías no es lo mismo que tener imágenes propias.",
    fotografias: {
      title: "Una fotografía cualquiera",
      items: [
        "Existe porque alguien apretó el botón",
        "Podría ser de cualquier persona o de cualquier marca",
        "Se acumula: cientos que nadie vuelve a ver",
        "Se ve correcta, pero no dice nada de ti",
      ],
    },
    imagenes: {
      title: "Una imagen que es tuya",
      items: [
        "Existe porque alguien te observó antes de fotografiar",
        "No funcionaría con nadie más en tu lugar",
        "Se guarda: pocas, elegidas por lo que muestran",
        "Te reconoces en ella sin tener que explicarla",
      ],
    },
  },
  proceso: {
    eyebrow: "El proceso",
    title: "Cómo trabajo, en concreto.",
    intro: "Sin fórmulas ni promesas vagas. Esto es lo que pasa, paso a paso.",
  },
  contacto: {
    eyebrow: "Hablemos",
    title: "Cuéntame qué quieres conservar o mostrar.",
    body: "Un mensaje basta para empezar. Te respondo yo, en persona, en menos de 24 horas. Sin compromiso y sin discurso de venta.",
  },
};

/** Proceso general — concreto, reutilizado en inicio y personas. */
export const proceso = [
  {
    n: "01",
    title: "Conversamos antes de la sesión",
    desc: "Hablamos de qué quieres conservar o mostrar, y de qué te preocupa. Esa conversación define la sesión más que cualquier equipo.",
  },
  {
    n: "02",
    title: "Indicaciones simples, no poses",
    desc: "Te digo qué hacer con las manos, hacia dónde mirar, cómo moverte. No tienes que actuar ni saber posar: solo seguir indicaciones fáciles.",
  },
  {
    n: "03",
    title: "Revisamos durante la sesión",
    desc: "Te muestro las tomas mientras trabajamos. Si algo no te representa, lo ajustamos ahí mismo, no cuando ya es tarde.",
  },
  {
    n: "04",
    title: "Selección y entrega",
    desc: "Recibes imágenes elegidas por lo que dicen de ti o de tu marca, no un volcado de todos los archivos para que tú decidas.",
  },
] as const;

/* ---------- PERSONAS (/personas) ---------- */

export const personas = {
  hero: {
    eyebrow: "Para ti",
    title: "Conservar una etapa antes de que cambie.",
    sub: "Cómo eres ahora (tu cara, tu gente, tu manera de estar en el mundo) no va a volver igual. Estas imágenes existen para que puedas volver a eso sin que se haya deformado en el recuerdo.",
    cta: "Cuéntame qué quieres conservar",
  },
  fearsTitle: "Lo que casi todos sienten antes (y está bien sentir).",
  fears: [
    {
      fear: "“No me gusta cómo salgo en las fotos.”",
      answer: "Casi nadie se gusta cuando le disparan sin dirección. El trabajo previo existe justo para eso: encontrar cómo te ves cuando estás cómodo, no cuando te congelan.",
    },
    {
      fear: "“No sé posar.”",
      answer: "No necesitas saber. Yo te doy indicaciones simples durante toda la sesión. Tú no diriges: solo sigues.",
    },
    {
      fear: "“Me siento falso frente a la cámara.”",
      answer: "Se nota cuando alguien actúa. Por eso no te pido que actúes; empezamos hablando hasta que la cámara deja de pesar.",
    },
    {
      fear: "“Tengo miles de fotos y ninguna que me represente.”",
      answer: "Ese es exactamente el problema que resolvemos. La meta no son más fotos: son pocas en las que te reconozcas.",
    },
  ],
  processNote: "Por eso el proceso está pensado como respuesta a esos miedos:",
  cta: "Hablemos de esta etapa",
};

/* ---------- EMPRESAS (/empresas) ---------- */

export const empresas = {
  hero: {
    eyebrow: "Para tu empresa",
    title: "Tu empresa hace buen trabajo. Tus imágenes no lo demuestran.",
    sub: "Cuando lo que muestras podría ser de cualquiera, el cliente duda, aunque no sepa por qué. Aquí las imágenes tienen que demostrar que tu trabajo existe y que es tuyo.",
    cta: "Revisemos qué no está comunicando tu marca",
  },
  problem: {
    eyebrow: "El problema",
    title: "Lo que muestras podría ser de cualquier competidor.",
    body: "Tu sitio y tus redes se llenan de bancos de imágenes genéricos, contenido generado por IA o fotos que, siendo honestos, podrían ser de cualquiera de tu sector. El cliente lo percibe aunque no lo sepa nombrar: algo no termina de convencer.",
  },
  proposal: {
    eyebrow: "La propuesta",
    statement: "Convertimos el trabajo real de tu empresa en imágenes que tus clientes puedan reconocer y creer.",
    detail: "Tu equipo real, tu producto real, tu forma de trabajar real, fotografiados para que se vea que existen, que son tuyos y que nadie más los tiene.",
  },
  iaVsReal: {
    eyebrow: "IA vs. fotografía real",
    legit: "La imagen generada por IA tiene usos legítimos: explorar conceptos, probar ideas rápido, armar referencias antes de producir. No es el enemigo.",
    thesis: "Una imagen generada puede representar una idea. Una fotografía puede demostrar una realidad.",
    body: "Cuando un cliente decide en quién confiar, esa diferencia pesa: representar algo no es lo mismo que demostrar que existe. Para todo lo que tu marca sí puede demostrar, conviene mostrarlo de verdad.",
  },
  procesoIntro: {
    eyebrow: "Cómo trabajamos juntos",
    title: "Del trabajo real a la imagen que lo demuestra.",
  },
  proceso: [
    {
      n: "01",
      title: "Entendemos qué haces distinto",
      desc: "Antes de producir nada, vemos qué hace tu empresa que la competencia no, y qué de eso no se está viendo hoy.",
    },
    {
      n: "02",
      title: "Definimos qué hay que demostrar",
      desc: "No fotografiamos todo: elegimos lo que tu cliente necesita ver para confiar: equipo, proceso, producto, resultado.",
    },
    {
      n: "03",
      title: "Producimos en tu realidad",
      desc: "Fotografiamos donde el trabajo sucede, con tu gente y tu producto real. Nada de montajes que podrían ser de otro.",
    },
    {
      n: "04",
      title: "Entregamos listo para usar",
      desc: "Imágenes seleccionadas para tu sitio y tus redes, coherentes entre sí y reconocibles como tuyas.",
    },
  ],
  cta: "Hablemos de lo que tu marca necesita mostrar",
};

/* ---------- FOTÓGRAFO (sin formato "quién dirige") ---------- */

export const photographer = {
  eyebrow: "Cómo trabajo",
  title: "Por qué trabajo así.",
  body: [
    "Antes de fotografiar, observo. Cómo te mueves cuando dejas de posar, dónde te cae bien la luz, qué gesto se te repite cuando hablas de algo que te importa. Esa media hora de mirar decide más que cualquier cámara.",
    "No trabajo en serie. Una imagen que represente a alguien no sale de repetir una fórmula sobre muchas personas distintas; sale de prestar atención a esta persona (o a esta empresa) en particular.",
    "Por eso tomo pocos proyectos a la vez: es la única forma de que cada uno reciba esa atención. No es exclusividad ni escasez; es la condición para que el trabajo salga bien.",
  ],
};

/* ---------- PREGUNTAS FRECUENTES ---------- */

export const faqInicio = [
  { q: "¿Trabajas con personas o con empresas?", a: "Con ambas, pero distinto. Si es algo tuyo o de tu familia, empieza por la sección de personas; si es para tu marca, por la de empresas." },
  { q: "¿Dónde trabajas?", a: "Cancún y la Riviera Maya, principalmente. Para proyectos fuera de la zona, lo vemos en la conversación." },
  { q: "¿Cuánto cuesta?", a: "Depende de lo que necesites, y prefiero decírtelo con claridad después de entenderlo, no con una tarifa suelta que no significa nada. En la primera conversación ves números completos, sin sorpresas." },
  { q: "¿Cómo empezamos?", a: "Con un mensaje. Me cuentas qué quieres conservar o mostrar, y te respondo yo, en persona." },
] as const;

export const faqPersonas = [
  { q: "¿Y si de verdad no sé posar?", a: "No necesitas. Te doy indicaciones simples durante toda la sesión; tú solo las sigues." },
  { q: "¿Y si no me gusta cómo salgo?", a: "Revisamos las tomas durante la sesión. Si algo no te representa, se ajusta ahí mismo." },
  { q: "¿Cuánto dura una sesión?", a: "Lo suficiente para que dejes de sentir la cámara. Lo concretamos según lo que quieras conservar." },
] as const;

export const faqEmpresas = [
  { q: "¿En qué se diferencia de usar un banco de imágenes?", a: "Un banco muestra a cualquiera. Esto muestra a tu empresa: tu gente, tu producto, tu forma de trabajar. El cliente distingue una cosa de la otra." },
  { q: "¿Pueden combinar fotografía con IA?", a: "Sí, cuando tiene sentido. La IA sirve para explorar ideas; la fotografía sirve para demostrar lo que sí existe. Usamos cada una para lo que hace bien." },
  { q: "¿Trabajan contenido para redes de forma continua?", a: "Sí. Lo vemos según lo que tu marca necesita mostrar y con qué frecuencia." },
] as const;

/* ---------- PLACEHOLDERS (material real pendiente — NO fabricar) ---------- */

export type CaseStudy = { title: string; audience: "personas" | "empresas"; summary: string };
/** PENDIENTE: casos/historias reales documentados. Vacío a propósito. */
export const caseStudies: CaseStudy[] = [];

export type Testimonial = { quote: string; name: string; context: string };
/** PENDIENTE: testimonios reales con arco (miedo antes → qué pasó → qué se reconoció). Vacío a propósito. */
export const testimonials: Testimonial[] = [];

/** Frases para el acento de la galería. */
export const phrases = [
  central,
  "Antes de fotografiar, observo.",
  "Indicaciones simples, no poses rígidas.",
] as const;

/* ============================================================
   Galería — orient: h = horizontal, v = vertical, sq = cuadrada
   (infraestructura visual existente — no modificar)
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
