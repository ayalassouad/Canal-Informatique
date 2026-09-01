import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "../data/mockData";
import { t } from "../data/i18n";

export default function WhatsAppFab({ language }) {
  const message = language === "ar" ? "مرحباً كانال للمعلوماتية، أريد الحصول على معلومات." : language === "en" ? "Hello Canal Informatique, I would like some information." : "Bonjour Canal Informatique, je souhaite des informations.";
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-fab"
      target="_blank"
      rel="noreferrer"
      aria-label={language === "ar" ? "تواصل عبر واتساب" : language === "en" ? "Contact on WhatsApp" : "Contacter sur WhatsApp"}
      title={language === "ar" ? "الدردشة عبر واتساب" : language === "en" ? "Chat on WhatsApp" : "Discuter sur WhatsApp"}
    >
      <MessageCircle size={32} />
    </a>
  );
}
