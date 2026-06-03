const kitTranslations = {
  es: {
    meta_title: "Spiral Focus | Media Kit y Tarifarios",
    nav_home: "Inicio",
    nav_rates: "Tarifarios",
    nav_contact: "Contacto",
    cover_eyebrow: "Media Kit y Tarifario · 2026",
    cover_tagline: "Fotografia Comercial y Contenido Digital · Cancun",
    cover_body:
      "Produccion visual estrategica para marcas y negocios en Cancun y Riviera Maya. Fotografia de producto, gastronomia y contenido para redes que comunica y convierte.",
    sec_about: "Acerca de",
    about_pull: "Cada imagen es una decision estrategica, no solo estetica.",
    about_body:
      "Estudio de fotografia comercial con sede en Cancun. Trabajamos con negocios locales — restaurantes, tiendas, marcas y emprendedores — para construir su presencia visual con criterio creativo y enfoque en resultados.",
    sec_services: "Servicios",
    svc1_title: "Fotografia de Producto",
    svc1_desc: "Pack shots, lifestyle y editorial. Fondo blanco o ambiental.",
    svc2_title: "Fotografia Gastronomica",
    svc2_desc: "Platillos, bebidas y espacios. Direccion de alimentos.",
    svc3_title: "Contenido para Redes",
    svc3_desc: "Paquetes mensuales con fotografia y estrategia visual.",
    svc4_title: "Video y Reels",
    svc4_desc: "Cortos de 15–60 seg para Reels con edicion dinamica.",
    sec_product: "Fotografia de Producto",
    sec_food: "Fotografia Gastronomica",
    sec_social: "Paquetes Mensuales — Redes",
    sec_video: "Video y Reels",
    sec_extras: "Servicios Adicionales",
    sec_terms: "Condiciones de Trabajo",
    tier_basic: "Basico",
    tier_pro: "Profesional",
    tier_premium: "Premium",
    tier_full: "Completo",
    badge_popular: "Popular",
    badge_recommended: "Recomendado",
    full_presence_desc: "Contenido + estrategia + comunidad",
    quote: "Cotizar",
    custom: "a medida",
    social_note:
      "Incluye briefing, sesion mensual, postproduccion y entrega optimizada para redes.",
    vid_monthly: "Campana Mensual",
    xtr_spaces: "Fotografia de espacios",
    xtr_retouch: "Retoque adicional",
    xtr_rush: "Entrega urgente 48 h",
    cond_deposit: "Anticipo",
    cond_deposit_v: "50% para confirmar fecha. Saldo al recibir materiales.",
    cond_revisions: "Revisiones",
    cond_revisions_v: "Hasta 2 rondas de ajustes incluidas.",
    cond_delivery: "Entrega",
    cond_delivery_v: "Galeria digital privada en alta resolucion.",
    cond_valid: "Vigencia",
    cond_valid_v: "Tarifas vigentes hasta diciembre 2026.",
    ct_title: "Hablemos de tu proyecto",
    ct_sub: "Respuesta en menos de 24 horas",
    ct_location: "Ubicacion",
    cta_whatsapp: "Cotizar por WhatsApp",
    cta_home: "Volver al portafolio",
  },
  en: {
    meta_title: "Spiral Focus | Media Kit and Rates",
    nav_home: "Home",
    nav_rates: "Rates",
    nav_contact: "Contact",
    cover_eyebrow: "Media Kit and Rates · 2026",
    cover_tagline: "Commercial Photography and Digital Content · Cancun",
    cover_body:
      "Strategic visual production for brands and businesses in Cancun and Riviera Maya. Product, food and social content that communicates and converts.",
    sec_about: "About",
    about_pull: "Every image is a strategic decision, not just aesthetics.",
    about_body:
      "Commercial photography studio based in Cancun. We work with local businesses to build visual presence with creative criteria and results-driven focus.",
    sec_services: "Services",
    svc1_title: "Product Photography",
    svc1_desc: "Pack shots, lifestyle and editorial. White or ambient backgrounds.",
    svc2_title: "Food Photography",
    svc2_desc: "Dishes, drinks and spaces. Food styling direction.",
    svc3_title: "Social Content",
    svc3_desc: "Monthly packages with photography and visual strategy.",
    svc4_title: "Video and Reels",
    svc4_desc: "15–60 sec shorts for Reels with dynamic editing.",
    sec_product: "Product Photography",
    sec_food: "Food Photography",
    sec_social: "Monthly Packages — Social",
    sec_video: "Video and Reels",
    sec_extras: "Additional Services",
    sec_terms: "Work Terms",
    tier_basic: "Basic",
    tier_pro: "Professional",
    tier_premium: "Premium",
    tier_full: "Full",
    badge_popular: "Popular",
    badge_recommended: "Recommended",
    full_presence_desc: "Content + strategy + community",
    quote: "Quote",
    custom: "custom",
    social_note: "Includes briefing, monthly session, post-production and optimized delivery.",
    vid_monthly: "Monthly Campaign",
    xtr_spaces: "Space photography",
    xtr_retouch: "Additional retouching",
    xtr_rush: "48h rush delivery",
    cond_deposit: "Deposit",
    cond_deposit_v: "50% to confirm date. Balance upon delivery.",
    cond_revisions: "Revisions",
    cond_revisions_v: "Up to 2 rounds of adjustments included.",
    cond_delivery: "Delivery",
    cond_delivery_v: "Private high-resolution digital gallery.",
    cond_valid: "Validity",
    cond_valid_v: "Rates valid through December 2026.",
    ct_title: "Let's talk about your project",
    ct_sub: "Response in less than 24 hours",
    ct_location: "Location",
    cta_whatsapp: "Quote via WhatsApp",
    cta_home: "Back to portfolio",
  },
};

let kitLang = localStorage.getItem("sf-lang") || "es";

function setKitLanguage(lang) {
  if (!kitTranslations[lang]) return;
  kitLang = lang;
  localStorage.setItem("sf-lang", lang);
  document.documentElement.lang = lang === "es" ? "es" : "en";
  document.title = kitTranslations[lang].meta_title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (kitTranslations[lang][key]) {
      el.textContent = kitTranslations[lang][key];
    }
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setKitLanguage(btn.dataset.lang);
    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === btn.dataset.lang);
    });
  });
});

setKitLanguage(kitLang);
document.querySelectorAll(".lang-btn").forEach((b) => {
  b.classList.toggle("active", b.dataset.lang === kitLang);
});
