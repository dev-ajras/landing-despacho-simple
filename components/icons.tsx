// components/icons.tsx  ·  ARCHIVO NUEVO
// Reemplaza los 15 emojis que usaba la landing como iconos.
// Un solo componente, un solo set de trazos: mismo grosor (1.9) y mismos
// remates en todos, que es lo que hace que se lean como una familia.

export type IconName =
  | "reloj"       // horario de corte / llegá al corte
  | "cuentas"     // saltar de una cuenta a otra
  | "papel"       // lista en papel
  | "chat"        // preguntas
  | "grafico"     // ganancia real
  | "checklist"   // preparar sin papeles
  | "qr"          // etiquetado / escaneo
  | "carpetas"    // varias cuentas
  | "equipo"      // usuarios de depósito
  | "link"        // datos oficiales
  | "celu"        // cualquier dispositivo
  | "campana"     // notificaciones
  | "whatsapp"
  | "check";

const PATHS: Record<Exclude<IconName, "whatsapp">, React.ReactNode> = {
  reloj: <path d="M12 9.5V13l2.5 1.8M9 2h6" />,
  cuentas: <path d="M3 4h14v10H3zM7 18h14V8" />,
  papel: <path d="M8 4h8a2 2 0 0 1 2 2v14l-6-3-6 3V6a2 2 0 0 1 2-2ZM9 9h6M9 12.5h4" />,
  chat: <path d="M21 11.5a8 8 0 0 1-11.6 7.1L4 20.5l1.9-5.4A8 8 0 1 1 21 11.5ZM9 9.5h6M9 13h3.5" />,
  grafico: <path d="M4 18 9.5 11l4 3.5L20 6M15.5 6H20v4.5" />,
  checklist: <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1ZM8 6H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2M8.5 12l1.8 1.8L14 10M8.5 17h7" />,
  qr: <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M4 12h16" />,
  carpetas: <path d="M3 7.5a2 2 0 0 1 2-2h3.4l1.6 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-10ZM7 11h10" />,
  equipo: <path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20M16 5.5a3 3 0 0 1 0 5.6M18.5 20v-1.5a4.4 4.4 0 0 0-1.6-3.4" />,
  link: <path d="M10 14a4 4 0 0 1 0-5.6l2.4-2.4a4 4 0 0 1 5.6 5.6l-1 1M14 10a4 4 0 0 1 0 5.6L11.6 18A4 4 0 0 1 6 12.4l1-1" />,
  celu: <path d="M10.5 18.5h3" />,
  campana: <path d="M18 9a6 6 0 1 0-12 0c0 5-2 6.5-2 6.5h16S18 14 18 9ZM9.5 19a2.6 2.6 0 0 0 5 0" />,
  check: <path d="M5 12.5l4.5 4.5L19 6.5" />,
};

// Formas que además necesitan un círculo/rect además del path.
const EXTRA: Partial<Record<IconName, React.ReactNode>> = {
  reloj: <circle cx="12" cy="13" r="8" />,
  cuentas: <rect x="3" y="4" width="14" height="10" rx="2" />,
  equipo: <circle cx="9" cy="8" r="3.2" />,
  celu: <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />,
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4 0-.5.1-.7l.4-.5c.1-.2.2-.3.3-.5v-.5L9.6 8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.7.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.2-.2Z" />
      </svg>
    );
  }

  const strokeWidth = name === "check" ? 3.2 : 1.9;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {EXTRA[name]}
      {PATHS[name]}
    </svg>
  );
}

// Glifo del logo, para cuando hace falta la marca sin el wordmark completo.
// El wordmark real vive en /public/logo.svg — usá ese en header y footer.
export function NavIcon({ name, className = "h-4 w-4" }: { name: "home" | "bag" | "qr" | "chat" | "dots"; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    home: <path d="M3 10.5 12 3l9 7.5M5.5 8.8V20a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8.8" />,
    bag: <path d="M5.5 8h13l-.9 12.1a1 1 0 0 1-1 .9H7.4a1 1 0 0 1-1-.9L5.5 8ZM8.8 8V6.2a3.2 3.2 0 0 1 6.4 0V8" />,
    qr: <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8.5 8.5h2v2h-2zM13.5 8.5h2v2h-2zM8.5 13.5h2v2h-2zM13.5 13.5h2v2h-2z" />,
    chat: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z" />,
    dots: <path d="M5 12h.01M12 12h.01M19 12h.01" />,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={name === "dots" ? 2.4 : 1.9} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {paths[name]}
    </svg>
  );
}
