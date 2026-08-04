// Sin barra final: se le concatenan rutas en el sitemap y el JSON-LD
export const SITE_URL = "https://despachosimple.com.ar";
export const SITE_NAME = "Despacho Simple";

// 11 4079-6063 → 54 (país) + 9 (móvil) + 11 4079 6063, sin "+" ni espacios
export const WHATSAPP_NUMBER = "5491140796063";
export const CONTACT_EMAIL = "hola@despachosimple.com.ar";

const WA_DEFAULT_MESSAGE =
  "Hola! Vendo en Mercado Libre y quiero pedir una demo de Despacho Simple.";

export function waLink(message: string = WA_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject = "Quiero conocer Despacho Simple"): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
