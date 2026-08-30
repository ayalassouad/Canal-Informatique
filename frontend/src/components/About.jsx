import { ENGAGEMENTS, COMPANY_INFO } from "../data/mockData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function About({ scrollTo, onOpenDevis }) {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="about-grid">
        <div className="about-content">
          <span className="section-kicker">À PROPOS DE CANAL INFORMATIQUE</span>
          <h2>30 Ans de Savoir-Faire & d'Engagement IT au Maroc</h2>
          <p>
            Fondée en <b>{COMPANY_INFO.creationYear}</b>, <b>Canal Informatique</b> s'est imposée comme un acteur de référence au Maroc dans l'intégration, la fourniture de matériel et la gestion de parcs informatiques professionnels.
          </p>
          <p>
            Notre mission est d'apporter aux PME, grandes institutions et particuliers des solutions informatiques fiables, évolutives et parfaitement sécurisées. Grâce à une équipe d'ingénieurs et techniciens certifiés, nous veillons à la continuité absolue de votre activité.
          </p>

          <div style={{ margin: "24px 0 32px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "10px" }}>
              <CheckCircle2 size={18} style={{ color: "var(--emerald)" }} />
              <span style={{ fontWeight: 600 }}>Partenariats privilégiés avec les éditeurs & constructeurs majeurs</span>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "10px" }}>
              <CheckCircle2 size={18} style={{ color: "var(--emerald)" }} />
              <span style={{ fontWeight: 600 }}>Centres d'intervention mobile sur Casablanca, Rabat & Région</span>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <CheckCircle2 size={18} style={{ color: "var(--emerald)" }} />
              <span style={{ fontWeight: 600 }}>Transparence tarifaire et contrats de maintenance sans surprises</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={onOpenDevis}>
              Planifier un audit informatique <ArrowRight size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo("contact")}>
              Nous contacter
            </button>
          </div>
        </div>

        <div className="engagements-grid">
          {ENGAGEMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className="engagement-card" key={idx}>
                <Icon size={32} />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
