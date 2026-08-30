import { COMPANY_INFO } from "../data/mockData";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer({ scrollTo, onOpenDevis }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <b>CANAL</b> <strong>INFORMATIQUE</strong>
          <p>
            Votre partenaire informatique de confiance depuis {COMPANY_INFO.creationYear}. Vente de matériel, installation réseau, maintenance et accompagnement d'entreprises au Maroc.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><button onClick={() => scrollTo("home")}>Accueil</button></li>
            <li><button onClick={() => scrollTo("services")}>Nos Services</button></li>
            <li><button onClick={() => scrollTo("products")}>Catalogue Produits</button></li>
            <li><button onClick={() => scrollTo("about")}>À propos de nous</button></li>
            <li><button onClick={() => scrollTo("faq")}>FAQ</button></li>
            <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services Pro</h4>
          <ul className="footer-links">
            <li><button onClick={() => scrollTo("services")}>Vente de Matériel</button></li>
            <li><button onClick={() => scrollTo("services")}>Contrat de Maintenance</button></li>
            <li><button onClick={() => scrollTo("services")}>Installation & Réseaux</button></li>
            <li><button onClick={() => scrollTo("services")}>Assistance Hotline 24/7</button></li>
            <li><button onClick={onOpenDevis}>Simulateur de Devis</button></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact & Accès</h4>
          <ul className="footer-links">
            <li style={{ color: "#94a3b8", display: "flex", gap: "8px", alignItems: "center" }}>
              <Phone size={14} style={{ color: "var(--cyan-glow)" }} /> {COMPANY_INFO.phoneFormatted}
            </li>
            <li style={{ color: "#94a3b8", display: "flex", gap: "8px", alignItems: "center" }}>
              <Mail size={14} style={{ color: "var(--cyan-glow)" }} /> {COMPANY_INFO.email}
            </li>
            <li style={{ color: "#94a3b8", display: "flex", gap: "8px", alignItems: "center" }}>
              <MapPin size={14} style={{ color: "var(--cyan-glow)" }} /> {COMPANY_INFO.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Canal Informatique. Tous droits réservés.</p>
        <p>Conception & Infrastructure Web — Canal Informatique Maroc</p>
      </div>
    </footer>
  );
}
