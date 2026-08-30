import { useState } from "react";
import { X, Check, ArrowRight, ArrowLeft, Send, FileText, CheckCircle2 } from "lucide-react";
import { DEVIS_OPTIONS } from "../data/mockData";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function DevisModal({ isOpen, onClose, initialService, showToast }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    serviceType: initialService || "vente",
    size: "6-20",
    urgency: "standard",
    name: "",
    email: "",
    phone: "",
    company: "",
    details: ""
  });

  if (!isOpen) return null;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/devis`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Une erreur est survenue.");
      
      showToast("success", "Votre demande de devis sur-mesure a été transmise ! Notre équipe vous contactera sous 2h.");
      onClose();
      setStep(1);
      setForm({
        serviceType: "vente",
        size: "6-20",
        urgency: "standard",
        name: "",
        email: "",
        phone: "",
        company: "",
        details: ""
      });
    } catch (err) {
      showToast("error", err.message || "Impossible d'envoyer votre demande de devis.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>
            <FileText size={22} className="text-cyan" /> Simulateur de Devis Informatique
          </h3>
          <button className="close-btn" onClick={onClose} aria-label="Fermer">
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          {/* Steps Progress Indicator */}
          <div className="steps-progress-bar">
            <div className={`step-indicator ${step >= 1 ? "active" : ""}`}></div>
            <div className={`step-indicator ${step >= 2 ? "active" : ""}`}></div>
            <div className={`step-indicator ${step >= 3 ? "active" : ""}`}></div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--cyan-glow)", textTransform: "uppercase", letterSpacing: "1px" }}>
              Étape {step} sur 3
            </span>
            <h4 style={{ fontSize: "1.2rem", marginTop: "4px" }}>
              {step === 1 && "1. Quel est votre besoin principal ?"}
              {step === 2 && "2. Quelle est la taille de votre structure ?"}
              {step === 3 && "3. Vos coordonnées pour recevoir l'estimation"}
            </h4>
          </div>

          {step === 1 && (
            <div className="devis-options-grid">
              {DEVIS_OPTIONS.serviceTypes.map((st) => (
                <div
                  key={st.id}
                  className={`devis-tile ${form.serviceType === st.id ? "selected" : ""}`}
                  onClick={() => setForm({ ...form, serviceType: st.id })}
                >
                  <div className="devis-tile-radio">
                    {form.serviceType === st.id && <Check size={14} style={{ color: "#ffffff" }} />}
                  </div>
                  <span>{st.label}</span>
                </div>
              ))}
            </div>
          )}

          {step === 2 && (
            <div>
              <label className="form-group" style={{ marginBottom: "14px", display: "block" }}>
                <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-main)" }}>Nombre de postes informatiques :</span>
              </label>
              <div className="devis-options-grid" style={{ marginBottom: "20px" }}>
                {DEVIS_OPTIONS.sizeOptions.map((so) => (
                  <div
                    key={so.id}
                    className={`devis-tile ${form.size === so.id ? "selected" : ""}`}
                    onClick={() => setForm({ ...form, size: so.id })}
                  >
                    <div className="devis-tile-radio">
                      {form.size === so.id && <Check size={14} style={{ color: "#ffffff" }} />}
                    </div>
                    <span>{so.label}</span>
                  </div>
                ))}
              </div>

              <label className="form-group" style={{ marginBottom: "14px", display: "block" }}>
                <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--text-main)" }}>Délai souhaité :</span>
              </label>
              <div className="devis-options-grid">
                {DEVIS_OPTIONS.urgencies.map((urg) => (
                  <div
                    key={urg.id}
                    className={`devis-tile ${form.urgency === urg.id ? "selected" : ""}`}
                    onClick={() => setForm({ ...form, urgency: urg.id })}
                  >
                    <div className="devis-tile-radio">
                      {form.urgency === urg.id && <Check size={14} style={{ color: "#ffffff" }} />}
                    </div>
                    <span>{urg.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <form id="devis-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Nom complet *</label>
                  <input
                    required
                    type="text"
                    className="form-input"
                    placeholder="Votre nom et prénom"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Nom de l'entreprise</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Société / Organisation"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Adresse email professionnelle *</label>
                  <input
                    required
                    type="email"
                    className="form-input"
                    placeholder="votre.email@domaine.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Numéro de téléphone *</label>
                  <input
                    required
                    type="tel"
                    className="form-input"
                    placeholder="06 00 00 00 00"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Précisions sur votre projet (Optionnel)</label>
                <textarea
                  className="form-textarea"
                  rows="3"
                  placeholder="Exemple: Nous cherchons à remplacer 10 postes de travail et renouveler le Wi-Fi..."
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                ></textarea>
              </div>
            </form>
          )}

          <div className="modal-footer">
            {step > 1 ? (
              <button type="button" className="btn btn-outline" onClick={handlePrev}>
                <ArrowLeft size={16} /> Précédent
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button type="button" className="btn btn-primary" onClick={handleNext}>
                Suivant <ArrowRight size={16} />
              </button>
            ) : (
              <button type="submit" form="devis-form" className="btn btn-primary" disabled={loading}>
                {loading ? "Transmission..." : <>Envoyer ma demande de devis <Send size={16} /></>}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
