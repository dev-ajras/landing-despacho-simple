// Datos de contacto — completar antes de publicar
export const WHATSAPP_NUMBER = "5491100000000"; // formato internacional sin "+" ni espacios
export const CONTACT_EMAIL = "hola@despachosimple.com.ar";

const WA_DEFAULT_MESSAGE =
  "Hola! Vendo en Mercado Libre y quiero conocer Despacho Simple.";

export function waLink(message: string = WA_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject = "Quiero conocer Despacho Simple"): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}
