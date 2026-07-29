import type { Metadata } from "next";
import { Sora, Onest } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const DESCRIPCION =
  "Conectá tus cuentas de Mercado Libre y manejá pedidos, etiquetas, preguntas y tu ganancia real desde una sola app. En el celu o en la compu.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Entra completo en los resultados de Google (se cortan cerca de los 60)
  title: "Despacho Simple | App para vendedores de Mercado Libre",
  description: DESCRIPCION,
  alternates: { canonical: "/" },
  // iOS convierte números sueltos del copy en links de teléfono si no se apaga
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Mismo set de iconos que la app (only-info-next)
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Despacho Simple — Tu operación de Mercado Libre, en una sola vista",
    description:
      "Todos tus pedidos, todas tus cuentas de Mercado Libre, una sola app. Del pedido a la etiqueta, sin vueltas.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Despacho Simple — Tu operación de Mercado Libre, en una sola vista",
    description: DESCRIPCION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${sora.variable} ${onest.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
