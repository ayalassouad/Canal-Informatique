import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "../data/mockData";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Une erreur est survenue.");

      showToast("success", data.message || "Votre message a été transmis avec succès. Notre équipe vous recontactera rapidement.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      showToast("error", err.message || "Impossible d'envoyer votre message. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: "#ffffff" }}>
      <div className="contact-grid">
        <div className="contact-info-card">
          <span className="section-kicker" style={{ color: "var(--cyan-glow)" }}>PRENDRE CONTACT</span>
          <h3>Discutons de Votre Projet IT</h3>
          <p>
            Vous souhaitez renouveler vos ordinateurs, installer un réseau haut débit ou sécuriser la maintenance de votre entreprise ? Contactez nos spécialistes.
          </p>

          <div className="contact-detail-item">
            <div className="contact-icon-bubble">
              <Phone size={22} />
            </div>
            <div className="contact-detail-text">
              <small>Téléphone Direct</small>
              <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phoneFormatted}</a>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-icon-bubble">
              <Mail size={22} />
            </div>
            <div className="contact-detail-text">
              <small>Adresse Email</small>
              <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-icon-bubble">
              <MapPin size={22} />
            </div>
            <div className="contact-detail-text">
              <small>Zone d'Intervention</small>
              <b>{COMPANY_INFO.address}</b>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-icon-bubble">
              <Clock size={22} />
            </div>
            <div className="contact-detail-text">
              <small>Horaires d'Ouverture</small>
              <b>{COMPANY_INFO.hours}</b>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <a 
              className="whatsapp-card-btn" 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Bonjour%20Canal%20Informatique,%20je%20souhaite%20un%20renseignement.`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={20} /> Écrire sur WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <h3>Envoyez-nous un Message</h3>
          <p style={{ color: "var(--text-muted)", marginBottom: "24px" }}>
            Remplissez ce formulaire et recevez une réponse sous 24 heures maximum.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Nom complet *</label>
                <input
                  required
                  type="text"
                  className="form-input"
                  placeholder="Ex: Mohamed Benali"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Adresse Email *</label>
                <input
                  required
                  type="email"
                  className="form-input"
                  placeholder="votre.email@domaine.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Numéro de téléphone</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="06 00 00 00 00"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Sujet de votre demande *</label>
                <input
                  required
                  type="text"
                  className="form-input"
                  placeholder="Ex: Maintenance parc / Achat PC"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Message ou détails du besoin *</label>
              <textarea
                required
                className="form-textarea"
                rows="5"
                placeholder="Décrivez votre besoin (matériel souhaité, problème rencontré, lieu...)"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: "100%" }} disabled={loading}>
              {loading ? "Envoi en cours..." : <>Envoyer mon message <Send size={18} /></>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
