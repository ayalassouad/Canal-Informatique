import { useState } from "react";
import { SERVICES } from "../data/mockData";
import { Check, ArrowRight, X } from "lucide-react";
import { localizedData, t } from "../data/i18n";

export default function Services({ language, onOpenDevis }) {
  const [selectedService, setSelectedService] = useState(null);
  const { SERVICES } = localizedData(language);

  return (
    <section id="services" className="section-padding bg-light">
      <div className="section-header-center">
        <span className="section-kicker">{t(language, "NOS SERVICES SUR-MESURE")}</span>
        <h2 className="section-title">{t(language, "Des Solutions Informatiques Clé en Main")}</h2>
        <p className="section-desc">
          {t(language, "Une gamme complète de prestations pour installer, sécuriser et maintenir la totalité de votre parc informatique.")}
        </p>
        <div className="underline-center"></div>
      </div>

      <div className="service-grid">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <article className="service-card" key={service.id}>
              <span className="service-card-badge">{service.badge}</span>
              <div className="service-icon-wrapper">
                <Icon size={28} />
              </div>

              <h3>{service.title}</h3>
              <p>{service.shortText}</p>

              <ul className="service-features-mini">
                {service.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx}>
                    <Check size={14} /> {feat}
                  </li>
                ))}
              </ul>

              <button className="service-card-action" onClick={() => setSelectedService(service)}>
                {t(language, "Découvrir la prestation")} <ArrowRight size={16} />
              </button>
            </article>
          );
        })}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {selectedService.title}
              </h3>
              <button className="close-btn" onClick={() => setSelectedService(null)}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <span className="service-card-badge" style={{ position: "static", display: "inline-block", marginBottom: 14 }}>
                {selectedService.badge}
              </span>
              <p style={{ color: "var(--text-body)", fontSize: "1rem", lineHeight: "1.7", marginBottom: "20px" }}>
                {selectedService.fullText}
              </p>

              <h4 style={{ fontSize: "1.05rem", marginBottom: "12px", color: "var(--text-main)" }}>
                {t(language, "Engagements & Inclus dans cette prestation :")}
              </h4>
              <ul className="service-features-mini" style={{ border: "none", padding: 0 }}>
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} style={{ fontSize: "0.95rem", marginBottom: "8px" }}>
                    <Check size={18} style={{ color: "var(--emerald)" }} /> {feat}
                  </li>
                ))}
              </ul>

              <div className="modal-footer">
                <button className="btn btn-outline" onClick={() => setSelectedService(null)}>
                  {t(language, "Fermer")}
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={() => {
                    setSelectedService(null);
                    onOpenDevis(selectedService.title);
                  }}
                >
                  {t(language, "Demander un devis pour ce service")} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
