import type { Metadata } from "next";
import { Sora, Onest } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Despacho Simple — Tu operación de Mercado Libre, en una sola vista",
  description:
    "Conectá tus cuentas de Mercado Libre y manejá pedidos, etiquetas, preguntas y tu ganancia real desde una sola app. En el celu o en la compu.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Despacho Simple",
    description:
      "Todos tus pedidos, todas tus cuentas de Mercado Libre, una sola app. Del pedido a la etiqueta, sin vueltas.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${sora.variable} ${onest.variable}`}>
      <body>{children}</body>
    </html>
  );
}
