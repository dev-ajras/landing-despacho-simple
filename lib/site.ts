// 11 5781-4609 → 54 (país) + 9 (móvil) + 11 5781 4609, sin "+" ni espacios
export const WHATSAPP_NUMBER = "5491157814609";
export const CONTACT_EMAIL = "hola@despachosimple.com.ar";

const WA_DEFAULT_MESSAGE =
  "Hola! Vendo en Mercado Libre y quiero pedir una demo de Despacho Simple.";

export function waLink(message: string = WA_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject = "Quiero conocer Despacho Simple"): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
