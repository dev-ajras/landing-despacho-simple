import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";

/* Datos estructurados para Google. Los tres nodos van enlazados por @id para
   que se lean como una sola entidad y no como fichas sueltas. */

const ORG_ID = `${SITE_URL}/#organizacion`;
const SITIO_ID = `${SITE_URL}/#sitio`;

const grafo = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon-512.png`,
      description:
        "Herramienta para vendedores de Mercado Libre: pedidos, etiquetas, preguntas y ganancia real en una sola app.",
      areaServed: { "@type": "Country", name: "Argentina" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: `+${WHATSAPP_NUMBER}`,
        availableLanguage: ["es-AR"],
      },
    },
    {
      "@type": "WebSite",
      "@id": SITIO_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-AR",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      url: SITE_URL,
      inLanguage: "es-AR",
      publisher: { "@id": ORG_ID },
      isPartOf: { "@id": SITIO_ID },
      description:
        "Conectá tus cuentas de Mercado Libre y manejá pedidos, etiquetas, preguntas y tu ganancia real desde una sola app.",
      featureList: [
        "Horario límite de Mercado Envíos y envíos pendientes del día",
        "Lista de preparación agrupada por producto",
        "Impresión de etiquetas y revisión por escaneo",
        "Preguntas de todas las cuentas en un solo lugar",
        "Ganancia real: facturado menos cargos y costo de productos",
        "Varias cuentas de Mercado Libre y usuarios de depósito",
      ],
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(grafo) }}
    />
  );
}
