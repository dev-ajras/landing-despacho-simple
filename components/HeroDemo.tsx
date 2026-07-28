"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CtaWhatsApp } from "@/components/CtaWhatsApp";

/* Hero sincronizado: el video vertical pone el teléfono, la página pone los
   textos. Los tiempos salen de medir los cortes del video cuadro a cuadro. */

type Capitulo = {
  desde: number;
  label: string;
  titulo: React.ReactNode;
  texto: string;
};

const CAPITULOS: Capitulo[] = [
  {
    desde: 0,
    label: "Hoy",
    titulo: "Empezá el día sabiendo qué despachar",
    texto:
      "El límite de Mercado Envíos, los paquetes pendientes y las preguntas sin responder, arriba de todo.",
  },
  {
    desde: 7.5,
    label: "Pedidos",
    titulo: "Todas las cuentas, una sola lista",
    texto:
      "Filtrá por cuenta o por estado sin cerrar sesión ni abrir otra pestaña.",
  },
  {
    desde: 14,
    label: "Revisión",
    titulo: "Que no quede ningún paquete sin preparar",
    texto:
      "Desde el celu, el operador escanea las etiquetas del día y el contador se cierra solo: 6 de 6.",
  },
  {
    desde: 19.75,
    label: "Métricas",
    titulo: "Y al cierre, los números de verdad",
    texto:
      "Facturado, neto, ganancia con costos cargados y los SKUs que realmente mueven la aguja.",
  },
];

const FIN = 25.2;

function finDe(i: number) {
  return i === CAPITULOS.length - 1 ? FIN : CAPITULOS[i + 1].desde;
}

export function HeroDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activo, setActivo] = useState(0);
  const [avance, setAvance] = useState(0);
  const [quieto, setQuieto] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setQuieto(media.matches);
      const el = videoRef.current;
      if (!el) return;
      if (media.matches) {
        el.pause();
        el.currentTime = 0;
      } else {
        el.play().catch(() => {});
      }
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  const onTime = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    const t = el.currentTime;
    let i = 0;
    for (let k = CAPITULOS.length - 1; k >= 0; k--) {
      if (t >= CAPITULOS[k].desde) {
        i = k;
        break;
      }
    }
    setActivo(i);
    const ini = CAPITULOS[i].desde;
    const fin = finDe(i);
    setAvance(Math.min(1, Math.max(0, (t - ini) / (fin - ini))));
  }, []);

  const irA = (i: number) => {
    const el = videoRef.current;
    setActivo(i);
    setAvance(0);
    if (!el) return;
    el.currentTime = CAPITULOS[i].desde;
    if (!quieto) el.play().catch(() => {});
  };

  return (
    /* En mobile el video se intercala entre el titular y los capítulos, para que
       el teléfono y el texto que lo describe se vean juntos. En desktop vuelve a
       ser una columna al costado. */
    <div className="ds-hero relative mx-auto max-w-6xl px-5 pb-24 pt-14 sm:pt-20">
      <div className="ds-hero-titulo text-center lg:text-left">
        <p className="rise rise-1 ds-pill">
          <span className="h-[9px] w-[9px] rounded-full bg-ml ring-[3px] ring-tinta/[0.07]" />
          Para vendedores de Mercado Libre
        </p>
        <h1 className="rise rise-2 mt-5 font-display text-4xl font-extrabold leading-[1.03] tracking-[-0.035em] sm:text-5xl lg:text-[3.6rem]">
          Tu operación de Mercado&nbsp;Libre,{" "}
          <span className="text-terracota">en una sola vista.</span>
        </h1>
      </div>

      <div className="ds-hero-video rise rise-5">
        <video
          ref={videoRef}
          className="ds-demo-video"
          poster="/video-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={quieto}
          onTimeUpdate={onTime}
          aria-label="Recorrido por Despacho Simple: qué despachar hoy, pedidos, revisión de etiquetas y métricas."
        >
          <source src="/despacho-simple.mp4" type="video/mp4" />
          Tu navegador no puede reproducir el video.
        </video>
      </div>

      <div className="ds-hero-texto text-center lg:text-left">
        {quieto ? (
          /* Sin movimiento: los cuatro capítulos a la vez, nada se pierde. */
          <ul className="rise rise-3 space-y-4">
            {CAPITULOS.map((c) => (
              <li key={c.label}>
                <p className="ds-cap-eyebrow">{c.label}</p>
                <p className="mt-1 font-display text-[19px] font-bold leading-tight">
                  {c.titulo}
                </p>
                <p className="mt-1 text-[15.5px] leading-relaxed text-tinta-2">
                  {c.texto}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rise rise-3 ds-caps">
            {CAPITULOS.map((c, i) => (
              <div
                key={c.label}
                className={`ds-cap ${i === activo ? "is-activo" : ""}`}
                aria-hidden={i !== activo}
              >
                <p className="ds-cap-eyebrow">
                  {String(i + 1).padStart(2, "0")} · {c.label}
                </p>
                <p className="mt-2 font-display text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-[26px]">
                  {c.titulo}
                </p>
                <p className="mt-2 text-[16px] leading-relaxed text-tinta-2">
                  {c.texto}
                </p>
              </div>
            ))}
          </div>
        )}

        {!quieto && (
          <div className="rise rise-4 ds-caps-nav mt-7">
            {CAPITULOS.map((c, i) => (
              <button
                key={c.label}
                type="button"
                onClick={() => irA(i)}
                className={`ds-caps-nav-item ${i === activo ? "is-activo" : ""}`}
                aria-current={i === activo ? "true" : undefined}
              >
                <span className="ds-caps-nav-barra">
                  <span
                    style={{
                      transform: `scaleX(${i < activo ? 1 : i === activo ? avance : 0})`,
                    }}
                  />
                </span>
                {c.label}
              </button>
            ))}
          </div>
        )}

        <div className="rise rise-4 mt-8 flex justify-center lg:justify-start">
          <CtaWhatsApp large />
        </div>
        <p className="rise rise-4 mt-4 text-sm text-muted">
          Te mostramos la app funcionando con tus propias ventas.
        </p>
      </div>
    </div>
  );
}
