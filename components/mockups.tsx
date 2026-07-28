/* Mockups estáticos de las pantallas de Despacho Simple, con datos de ejemplo.
   Recreaciones visuales simplificadas — no comparten código con la app real. */

import { NavIcon } from "@/components/icons";

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="ds-phone">
      <div className="ds-phone-notch" />
      <div className="ds-phone-screen">{children}</div>
    </div>
  );
}

/* ---------- Pantalla "Hoy" ---------- */

function MlBadge({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-ml text-[8px] ${className}`}
      aria-hidden
    >
      🤝
    </span>
  );
}

function PrepararRow({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="ds-glass-row">
      <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[11px] bg-gradient-to-b from-[#fff0a8] to-ml text-sm shadow-[inset_0_0_0_0.5px_rgba(38,30,23,0.09)]">
        🤝
      </span>
      <span className="min-w-0 flex-1">
        <span className="t">{title}</span>
        <span className="s">{meta}</span>
      </span>
      <span className="shrink-0 rounded-full bg-ambar/[0.14] px-2 py-1 text-[9px] font-bold text-ambar shadow-[inset_0_0_0_0.5px_rgba(192,138,46,0.24)]">
        Pendiente
      </span>
    </div>
  );
}

export function MockHoy() {
  return (
    <div className="dots-bg text-tinta">
      <div className="px-4 pb-3 pt-9">
        <p className="font-display text-lg font-bold">Hoy</p>
        <p className="mt-0.5 text-[10px] text-muted">
          Miércoles, 22 de julio · 3 tareas pendientes
        </p>

        {/* Card oscura: horario límite Mercado Envíos */}
        <div className="dots-bg-dark mt-3 rounded-3xl bg-tinta p-4 text-crema shadow-card">
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-1.5 text-[11px] font-bold">
              <MlBadge />
              Mercado Envíos
            </p>
            <span className="flex items-center gap-1 rounded-full bg-ambar/25 px-2 py-0.5 text-[9px] font-bold text-ambar">
              <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-ambar" />
              Despachá antes
            </span>
          </div>
          <p className="mt-2 font-display text-3xl font-bold tabular-nums">
            16:40 hs
          </p>
          <p className="mt-1 text-[10px] leading-snug text-crema/60">
            límite para despachar los paquetes de Mercado Envíos de hoy.
          </p>
        </div>

        {/* Card oscura: envíos de hoy */}
        <div className="dots-bg-dark mt-3 rounded-3xl bg-tinta p-4 text-crema shadow-card">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-crema/70">
              🚚 Envíos de hoy
            </p>
            <span className="rounded-full bg-ambar/25 px-2 py-0.5 text-[9px] font-bold text-ambar">
              🕐 6 despachados
            </span>
          </div>
          <div className="mt-2 flex items-center gap-2.5">
            <p className="font-display text-4xl font-bold">3</p>
            <p className="text-[11px] leading-tight text-crema/70">
              pendientes para
              <br />
              despachar hoy
            </p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-crema/10 pt-3">
            <div className="rounded-2xl bg-crema/10 p-2.5">
              <p className="text-[10px] font-bold text-crema/85">Flex</p>
              <p className="font-display text-xl font-bold">
                0<span className="text-crema/40"> / 3</span>
              </p>
            </div>
            <div className="rounded-2xl bg-crema/5 p-2.5">
              <p className="text-[10px] font-bold text-crema/50">
                Mercado Envíos
              </p>
              <p className="font-display text-xl font-bold text-crema/50">
                6<span className="text-crema/30"> / 6</span>
              </p>
            </div>
          </div>
        </div>

        {/* Para preparar */}
        <div className="mt-3.5 mb-1.5 flex items-center gap-1.5">
          <p className="text-[11px] font-bold text-tinta">🛍 Para preparar</p>
          <span className="rounded-md bg-ambar-bg px-1.5 text-[9px] font-bold text-ambar">
            3
          </span>
        </div>
        <div>
          <PrepararRow title="1x Escritorio Flotante 60x30" meta="TAWAR · Flex" />
          <PrepararRow title="1x Escritorio Esquinero 140" meta="TAWAR · Flex" />
        </div>
      </div>

      {/* Bottom nav */}
      <div className="relative mt-5 border-t border-borde bg-crema-2 px-2 pb-2.5 pt-2">
        {/* Botón QR flotante */}
        <span className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-terracota-2 text-crema shadow-card ring-[5px] ring-crema">
          <NavIcon name="qr" className="h-5 w-5" />
        </span>
        <div className="grid grid-cols-5 items-end text-center text-[8px] font-semibold text-tinta-2">
          <div>
            <NavIcon name="home" className="mx-auto h-4 w-4 text-tinta" />
            <p className="mt-0.5 font-bold text-tinta">Hoy</p>
          </div>
          <div className="opacity-60">
            <NavIcon name="bag" className="mx-auto h-4 w-4" />
            <p className="mt-0.5">Pedidos</p>
          </div>
          <div>
            <p className="pt-[22px] opacity-60">QR</p>
          </div>
          <div className="opacity-60">
            <NavIcon name="chat" className="mx-auto h-4 w-4" />
            <p className="mt-0.5">Preguntas</p>
          </div>
          <div className="opacity-60">
            <NavIcon name="dots" className="mx-auto h-4 w-4" />
            <p className="mt-0.5">Más</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Vista desktop: Pedidos / Etiquetas ---------- */

function EtiquetaCard({
  code,
  nombre,
  para,
  hora,
  envio,
}: {
  code: string;
  nombre: string;
  para: string;
  hora: string;
  envio: "flex" | "me";
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border-2 bg-white ${
        envio === "flex" ? "border-verde-2/60" : "border-[#2d6be0]/50"
      }`}
    >
      <div className="relative flex h-14 items-center justify-center bg-crema-3">
        <span className="flex items-center gap-1 rounded-full bg-verde-bg px-2 py-0.5 text-[8px] font-bold text-verde">
          ✓ Impresa · 09:25
        </span>
        <span
          className={`absolute bottom-1 right-1 rounded-full px-1.5 py-0.5 text-[7px] font-bold ${
            envio === "flex"
              ? "bg-verde-2 text-white"
              : "bg-[#2d6be0] text-white"
          }`}
        >
          {envio === "flex" ? "Flex" : "M. Envíos"}
        </span>
      </div>
      <div className="p-2">
        <div className="flex items-center gap-1">
          <span className="rounded-md bg-tinta px-1.5 py-0.5 text-[8px] font-bold text-crema">
            {code}
          </span>
          <span className="rounded-md bg-crema-3 px-1.5 py-0.5 text-[7px] font-semibold text-tinta-2">
            1 unidad
          </span>
        </div>
        <p className="mt-1 truncate text-[8px] font-bold text-tinta">{nombre}</p>
        <p className="truncate text-[7px] text-muted">
          Para: {para} · TAWAR · {hora}
        </p>
        <div className="mt-1.5 rounded-lg border border-borde py-1 text-center text-[7px] font-bold text-tinta-2">
          ⎙ Reimprimir
        </div>
      </div>
    </div>
  );
}

export function MockEtiquetas() {
  return (
    <div className="dots-bg p-3 text-tinta">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <div>
          <p className="font-display text-sm font-bold">Pedidos</p>
          <p className="text-[8px] text-muted">30 pedidos · 3 requieren acción</p>
        </div>
        <div className="flex gap-1">
          <span className="rounded-full border border-borde bg-white px-2 py-0.5 text-[8px] font-semibold text-tinta-2">
            Lista
          </span>
          <span className="rounded-full bg-tinta px-2 py-0.5 text-[8px] font-bold text-crema">
            ⎙ Etiquetas
          </span>
          <span className="rounded-full border border-borde bg-white px-2 py-0.5 text-[8px] font-semibold text-tinta-2">
            Preparación
          </span>
        </div>
      </div>

      {/* Envíos de hoy */}
      <div className="dots-bg-dark mt-2 rounded-2xl bg-tinta p-2.5 text-crema">
        <div className="flex items-center justify-between">
          <p className="text-[8px] font-bold uppercase tracking-widest text-crema/70">
            🚚 Envíos de hoy
          </p>
          <span className="rounded-full bg-ambar/25 px-1.5 py-0.5 text-[7px] font-bold text-ambar">
            🕐 3 pendientes
          </span>
        </div>
        <div className="mt-1.5 grid grid-cols-2 gap-1.5">
          <div className="rounded-xl bg-crema/10 px-2 py-1">
            <p className="text-[8px] font-bold text-crema/85">Flex</p>
            <p className="font-display text-sm font-bold">
              0<span className="text-crema/40"> / 3</span>
            </p>
          </div>
          <div className="rounded-xl bg-crema/5 px-2 py-1">
            <p className="text-[8px] font-bold text-crema/50">Mercado Envíos</p>
            <p className="font-display text-sm font-bold text-crema/50">
              6<span className="text-crema/30"> / 6</span>
            </p>
          </div>
        </div>
      </div>

      {/* Filtros de cuenta */}
      <div className="mt-2 flex gap-1">
        <span className="rounded-full bg-tinta px-2 py-0.5 text-[7px] font-bold text-crema">
          Todas las cuentas
        </span>
        <span className="rounded-full border border-borde bg-white px-2 py-0.5 text-[7px] font-semibold text-tinta-2">
          🤝 CASACARINA
        </span>
        <span className="rounded-full border border-borde bg-white px-2 py-0.5 text-[7px] font-semibold text-tinta-2">
          🤝 TAWAR
        </span>
      </div>

      <p className="mt-2 text-[7px] font-semibold text-muted">
        Etiquetas impresas 9/9 · clic en un pedido imprime la etiqueta
      </p>

      {/* Grilla de etiquetas */}
      <div className="mt-1.5 grid grid-cols-2 gap-1.5">
        <EtiquetaCard
          code="AA10"
          nombre="Escritorio Flotante 60x30"
          para="Jorge V."
          hora="10:00"
          envio="flex"
        />
        <EtiquetaCard
          code="AA90"
          nombre="Escritorio Flotante 120x40"
          para="Lucía N."
          hora="11:00"
          envio="me"
        />
      </div>
    </div>
  );
}

/* ---------- Pantalla Scan / QR ---------- */

export function MockScan({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`dots-bg px-4 pb-4 text-tinta ${compact ? "pt-4" : "pt-9"}`}>
      <p className="font-display text-base font-bold">Revisión etiquetado</p>
      <p className="mt-0.5 text-[10px] leading-snug text-muted">
        Escaneá la etiqueta impresa para confirmar el pedido
      </p>

      {/* Visor de cámara */}
      <div className="ds-scan mt-3 h-[132px]">
        <div className="dots-bg-dark absolute inset-0 opacity-60" />
        <div className="ds-scan-frame" />
        {/* QR estilizado */}
        <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 grid-cols-4 gap-[3px] opacity-70">
          {[1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1].map((v, i) => (
            <div
              key={i}
              className={`rounded-[2px] ${v ? "bg-crema" : "bg-transparent"}`}
            />
          ))}
        </div>
        <div className="ds-scan-line" />
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-b from-transparent to-[rgba(20,16,12,0.9)] px-[11px] py-2 text-[9.5px] font-semibold text-crema">
          <i className="pulse-dot h-1.5 w-1.5 rounded-full bg-verde-2" />
          AA73 · coincide con el paquete
        </div>
      </div>

      {/* Feedback de éxito */}
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-verde-bg px-3 py-2.5">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-verde text-[10px] font-bold text-white">
          ✓
        </span>
        <div>
          <p className="text-[11px] font-bold text-verde">Escaneado</p>
          <p className="text-[10px] text-verde-2">
            Corresponde al pedido seleccionado
          </p>
        </div>
      </div>

      {!compact && (
        <p className="mt-2.5 text-center text-[10px] font-semibold text-muted">
          Preparados 13/18 · 72%
        </p>
      )}
    </div>
  );
}

/* ---------- Pantalla Métricas (ganancia real) ---------- */

function CascadeRow({
  label,
  value,
  sign,
  strong = false,
  accent = false,
}: {
  label: string;
  value: string;
  sign?: "minus" | "equal";
  strong?: boolean;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between px-3 py-2 ${
        strong ? "rounded-xl bg-crema-3" : ""
      }`}
    >
      <span className="flex items-center gap-1.5 text-[11px] text-tinta-2">
        {sign === "minus" && <span className="font-bold text-terracota">−</span>}
        {sign === "equal" && <span className="font-bold text-muted">=</span>}
        <span className={strong ? "font-bold text-tinta" : ""}>{label}</span>
      </span>
      <span
        className={`font-display tabular-nums ${
          accent
            ? "text-sm font-bold text-verde"
            : strong
              ? "text-sm font-bold text-tinta"
              : "text-[11px] font-semibold text-tinta-2"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export function MockMetricas({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`dots-bg px-4 pb-4 text-tinta ${compact ? "pt-4" : "pt-9"}`}>
      <p className="font-display text-base font-bold">Métricas</p>
      <p className="mt-0.5 text-[10px] text-muted">Julio · todas las cuentas</p>

      <div className="mt-3 grid grid-cols-2 gap-1.5">
        <div className="rounded-xl border border-borde bg-crema-2 p-2.5">
          <p className="text-[9px] font-bold uppercase tracking-wider text-muted">
            Facturado
          </p>
          <p className="font-display text-sm font-bold tabular-nums">
            $6.387.141
          </p>
        </div>
        <div className="rounded-xl border border-borde bg-crema-2 p-2.5">
          <p className="text-[9px] font-bold uppercase tracking-wider text-muted">
            Ticket prom.
          </p>
          <p className="font-display text-sm font-bold tabular-nums">$28.640</p>
        </div>
      </div>

      {/* A dónde fue cada peso: la resta completa, no valores sueltos */}
      <div className="mt-2 rounded-2xl border border-borde bg-white/70 py-1.5 shadow-card">
        <CascadeRow label="Facturado" value="$6.387.141" />
        <CascadeRow
          label="Cargos de Mercado Libre"
          value="$2.021.915"
          sign="minus"
        />
        <CascadeRow label="Costo de productos" value="$1.980.000" sign="minus" />
        <CascadeRow
          label="Te queda"
          value="$2.385.226"
          sign="equal"
          strong
          accent
        />

        {/* Barra apilada: reparto del facturado */}
        <div className="mt-1.5 px-3 pb-1">
          <div className="flex h-[9px] overflow-hidden rounded-full">
            <span className="w-[37%] bg-verde-2" />
            <span className="w-[31%] bg-[#6E4D30]" />
            <span className="w-[22%] bg-ambar" />
            <span className="w-[10%] bg-[#BCB09D]" />
          </div>
        </div>
      </div>

      {!compact && (
        <div className="mt-2 flex items-center justify-between rounded-xl bg-ambar-bg px-3 py-2">
          <p className="text-[10px] font-semibold text-ambar">
            14 unidades sin costo cargado
          </p>
          <span className="text-[10px] font-bold text-ambar">Cargar →</span>
        </div>
      )}
    </div>
  );
}
