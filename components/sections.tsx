// components/sections.tsx  ·  REEMPLAZO COMPLETO
// Mismo copy, mismas secciones, mismo orden. Cambia la presentación:
//   · los 15 emojis pasan a iconos de trazo (components/icons.tsx)
//   · las tarjetas pasan a vidrio (.ds-card) con hairlines de 0.5px
//   · los 5 "dolores" pasan de grid de tarjetas a lista agrupada (.ds-list)
//   · Confianza pasa de 3 columnas sueltas a una pieza con divisores
//   · el logo real de /public/logo.svg reemplaza al wordmark en texto
import Image from "next/image";
import { waLink } from "@/lib/site";
import { MockScan, MockMetricas } from "@/components/mockups";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { HeroDemo } from "@/components/HeroDemo";
import { Icon, type IconName } from "@/components/icons";
import { CtaWhatsApp } from "@/components/CtaWhatsApp";

export { CtaWhatsApp };

/* ---------- Header ---------- */

export function Header() {
  return (
    <header className="ds-header sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#" aria-label="Despacho Simple">
          <Image src="/logo.svg" alt="Despacho Simple" width={150} height={46} className="h-[34px] w-auto" priority />
        </a>
        <CtaWhatsApp>Hablemos</CtaWhatsApp>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

export function Hero() {
  return (
    <section className="dots-bg relative overflow-hidden">
      <div className="ds-halo" />
      <div className="ds-halo-2" />
      <HeroDemo />
    </section>
  );
}

/* ---------- Problema ---------- */

const DOLORES: { icono: IconName; texto: string }[] = [
  { icono: "cuentas", texto: "Saltás de una cuenta de Mercado Libre a otra para ver qué hay que despachar." },
  { icono: "reloj", texto: "Preparás los pedidos a las corridas porque Mercado Libre te cambió el horario de despacho." },
  { icono: "papel", texto: "Armás los paquetes con una lista en papel y las etiquetas una por una." },
  { icono: "chat", texto: "Contestás las mismas preguntas veinte veces." },
  { icono: "grafico", texto: "Facturás mucho… pero no sabés cuánto ganás de verdad." },
];

export function Problema() {
  return (
    <section className="ds-band">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 lg:pb-24 lg:pt-24">
        {/* Historia de origen */}
        <div className="grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-terracota">
              De dónde salió
            </p>
            <div className="mt-3.5 flex items-start gap-5 sm:gap-6">
              <Image
                src="/tawar-logo.png"
                alt="Tawar"
                width={80}
                height={80}
                className="h-13 w-13 shrink-0 sm:h-[72px] sm:w-[72px]"
              />
              <h2 className="font-display text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
                Nació en una fábrica de muebles que quería empezar en
                Mercado&nbsp;Libre.
              </h2>
            </div>
            <p className="mt-5 text-[17px] leading-relaxed text-tinta-2">
              Despacho Simple es la herramienta interna que armamos en{" "}
              <strong className="font-semibold text-tinta">Tawar</strong>,
              nuestra empresa de muebles, para ordenar la operación de Mercado
              Libre. No es un software pensado en un escritorio: se armó
              despachando paquetes de verdad.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="ds-dark p-8">
              <div className="dots-bg-dark absolute inset-0" />
              <div className="relative">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-crema/55">
                  Cuenta real de Mercado Libre
                </p>
                <p className="mt-3 flex items-baseline gap-3 font-display text-[clamp(42px,6vw,58px)] font-extrabold tracking-[-0.045em] tabular-nums">
                  <CountUp to={1500} prefix="+" />
                  <span className="text-[22px] font-semibold tracking-[-0.02em] text-crema/65">
                    ventas
                  </span>
                </p>
                <p className="mt-2 text-sm text-crema/65">
                  en los primeros 7 meses
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Dolores — lista agrupada, no grid de tarjetas */}
        <Reveal className="mt-[72px]">
          <div className="mx-auto max-w-[640px] text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-terracota">
              El día a día
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
              ¿Te suena?
            </h2>
          </div>
          <div className="ds-list mt-9">
            {DOLORES.map(dolor => (
              <div key={dolor.texto} className="ds-row">
                <span className="ds-ico ds-ico-sm">
                  <Icon name={dolor.icono} className="h-[17px] w-[17px]" />
                </span>
                <p className="text-[15.5px] leading-snug text-tinta-2">{dolor.texto}</p>
              </div>
            ))}
          </div>
          <div className="ds-kicker mt-4">
            <div className="dots-bg-dark absolute inset-0" />
            <p className="relative font-display text-[22px] font-bold leading-[1.28] tracking-[-0.03em]">
              Vender está bueno.
              <br />
              <span className="text-crema/[0.72]">Perseguir pedidos, no.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Shot({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`mt-5 overflow-hidden rounded-2xl shadow-[0_0_0_0.5px_rgba(38,30,23,0.1),0_14px_30px_-14px_rgba(38,30,23,0.3)] ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Features ---------- */

const FEATURES: { icono: IconName; titulo: string; texto: string }[] = [
  {
    icono: "reloj",
    titulo: "Llegá siempre al corte",
    texto:
      "La app te muestra el horario límite de Mercado Envíos de cada día y cuántos envíos te faltan. “Despachá antes” deja de ser un susto y pasa a ser un contador.",
  },
  {
    icono: "checklist",
    titulo: "Prepará sin papeles",
    texto:
      "Lista de preparación agrupada por producto con cantidades totales del día. Armás todos los paquetes de una pasada, sin ir pedido por pedido.",
  },
  {
    icono: "qr",
    titulo: "Etiquetado sin errores",
    texto:
      "Imprimís todas las etiquetas del día desde la versión de escritorio. Después escaneás cada etiqueta impresa con el celu y la app te confirma con sonido y color que va en el paquete correcto.",
  },
  {
    icono: "chat",
    titulo: "Respondé preguntas al toque",
    texto:
      "Todas las preguntas de todas tus cuentas en un solo lugar, con respuestas rápidas listas para usar. Contestás antes y vendés más.",
  },
  {
    icono: "grafico",
    titulo: "Tu ganancia real, no la ilusión",
    texto:
      "Facturado, menos cargos de Mercado Libre, menos costo de tus productos: la app te muestra cuánto te queda de verdad, por cuenta y por período.",
  },
];

export function Features() {
  return (
    <section className="ds-band">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 lg:pb-28 lg:pt-28">
        <Reveal>
          <div className="mx-auto max-w-[640px] text-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-terracota">
              Features
            </p>
            <h2 className="mt-3.5 font-display text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
              Todo lo que necesitás para operar, nada más.
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[FEATURES[0], FEATURES[1], FEATURES[3]].map((feature, i) => (
            <Reveal key={feature.titulo} delay={i * 100}>
              <div className="ds-card h-full">
                <FeatureHead feature={feature} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Destacadas, con mockup */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="ds-card flex h-full flex-col">
              <FeatureHead feature={FEATURES[2]} />
              <Shot className="mx-auto w-full max-w-[280px]">
                <MockScan compact />
              </Shot>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="ds-card flex h-full flex-col">
              <FeatureHead feature={FEATURES[4]} />
              <Shot className="mx-auto w-full max-w-[300px]">
                <MockMetricas compact />
              </Shot>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FeatureHead({ feature }: { feature: (typeof FEATURES)[number] }) {
  return (
    <>
      <span className="ds-ico">
        <Icon name={feature.icono} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 font-display text-[17.5px] font-bold">{feature.titulo}</h3>
      <p className="mt-2 text-[14.5px] leading-relaxed text-tinta-2">{feature.texto}</p>
    </>
  );
}

/* ---------- Equipo / multi-cuenta ---------- */

export function Equipo() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 pt-20 lg:pb-24 lg:pt-24">
      <Reveal>
        <div className="mx-auto max-w-[640px] text-center">
          <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-terracota">
            Tu equipo
          </p>
          <h2 className="mt-3.5 font-display text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
            Para vos y para tu equipo.
          </h2>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Reveal delay={80}>
          <div className="ds-card h-full">
            <span className="ds-ico">
              <Icon name="carpetas" className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-[17.5px] font-bold">
              Varias cuentas, una sola app
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-tinta-2">
              ¿Manejás varias cuentas de Mercado Libre? Las ves todas juntas o
              filtrás por una. Pedidos, preguntas y métricas de toda tu
              operación en el mismo lugar.
            </p>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div className="ds-card h-full">
            <span className="ds-ico">
              <Icon name="equipo" className="h-5 w-5" />
            </span>
            <h3 className="mt-4 font-display text-[17.5px] font-bold">
              Usuarios para el depósito
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-tinta-2">
              ¿Tenés gente en el depósito? Creales usuarios que ven pedidos y
              escanean etiquetas, pero no ven precios ni cuánto facturás. Cada
              uno ve lo que necesita, nada más.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Confianza ---------- */

const CONFIANZA: { icono: IconName; titulo: string; texto: string }[] = [
  {
    icono: "link",
    titulo: "Datos oficiales",
    texto:
      "La app se conecta con el sistema oficial de Mercado Libre. Lo que ves es lo mismo que ve ML, actualizado al instante.",
  },
  {
    icono: "celu",
    titulo: "En cualquier dispositivo",
    texto:
      "Funciona en el celu y en la compu, y la podés instalar como una app sin pasar por ninguna tienda.",
  },
  {
    icono: "campana",
    titulo: "Enterate al momento",
    texto:
      "Notificaciones de ventas, preguntas y envíos en tu teléfono. Con un toque vas directo a resolverlo.",
  },
];

export function Confianza() {
  return (
    <section className="ds-band">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 lg:pb-24 lg:pt-24">
        <Reveal>
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
              Directo con Mercado Libre,{" "}
              <span className="text-terracota">seguro y en tu bolsillo.</span>
            </h2>
          </div>
        </Reveal>
        {/* Una sola pieza con divisores, no 3 columnas sueltas */}
        <Reveal delay={100}>
          <div className="ds-list ds-split mt-10 grid md:grid-cols-3">
            {CONFIANZA.map(item => (
              <div key={item.titulo}>
                <span className="ds-ico">
                  <Icon name={item.icono} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold">{item.titulo}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-tinta-2">{item.texto}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- CTA final ---------- */

export function CtaFinal() {
  return (
    <section className="ds-cta">
      <div className="dots-bg-dark absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.035em] text-crema sm:text-5xl">
            Dejá de perseguir pedidos.
          </h2>
          <p className="mx-auto mt-5 max-w-[34ch] text-[18px] leading-relaxed text-crema/[0.86]">
            Contanos cómo es tu operación y te mostramos Despacho Simple
            funcionando con tus ventas reales. Sin compromiso.
          </p>
          <div className="mt-9 flex justify-center">
            <CtaWhatsApp large inverted />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

export function Footer() {
  return (
    <footer className="border-t-[0.5px] border-tinta/10 bg-crema">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
        <div>
          <Image src="/logo.svg" alt="Despacho Simple" width={130} height={40} className="h-[30px] w-auto" />
          <p className="mt-2 text-[13.5px] text-muted">Tu operación, en una sola vista.</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-[13.5px] text-tinta-2 sm:items-end">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-terracota"
          >
            WhatsApp
          </a>
          <p className="text-muted">Hecho en Argentina 🇦🇷</p>
        </div>
      </div>
    </footer>
  );
}
