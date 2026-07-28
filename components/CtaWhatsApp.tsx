import { waLink } from "@/lib/site";
import { Icon } from "@/components/icons";

export function CtaWhatsApp({
  children = "Hablemos por WhatsApp",
  large = false,
  inverted = false,
}: {
  children?: React.ReactNode;
  large?: boolean;
  inverted?: boolean;
}) {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`ds-btn ${large ? "ds-btn-lg" : ""} ${inverted ? "ds-btn-inv" : ""}`}
    >
      <Icon name="whatsapp" className={large ? "h-[18px] w-[18px]" : "h-4 w-4"} />
      {children}
    </a>
  );
}
