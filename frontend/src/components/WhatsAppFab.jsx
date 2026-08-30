import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "../data/mockData";

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Bonjour%20Canal%20Informatique,%20je%20souhaite%20des%20informations.`}
      className="whatsapp-fab"
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter sur WhatsApp"
      title="Discuter sur WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
