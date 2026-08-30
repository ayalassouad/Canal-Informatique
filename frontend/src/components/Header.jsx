import { useState, useEffect } from "react";
import { Phone, MapPin, ArrowRight, Menu, X, Clock, FileText } from "lucide-react";
import { COMPANY_INFO } from "../data/mockData";

export default function Header({ onOpenDevis, activeSection, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-info">
          <span><Phone size={14} /> {COMPANY_INFO.phoneFormatted}</span>
          <span><MapPin size={14} /> {COMPANY_INFO.address}</span>
          <span><Clock size={14} /> {COMPANY_INFO.hours}</span>
        </div>
        <div className="topbar-right">
          <span>Partenaire Informatique certifié depuis 1992</span>
        </div>
      </div>

      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <button className="logo-btn" onClick={() => handleNavClick("home")} aria-label="Accueil Canal Informatique">
          <span className="logo-badge">CI</span>
          <span className="logo-text">
            <b>CANAL</b><strong>INFORMATIQUE</strong>
            <small>Votre partenaire informatique</small>
          </span>
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button className={`nav-link ${activeSection === "home" ? "active" : ""}`} onClick={() => handleNavClick("home")}>Accueil</button>
          <button className={`nav-link ${activeSection === "services" ? "active" : ""}`} onClick={() => handleNavClick("services")}>Services</button>
          <button className={`nav-link ${activeSection === "products" ? "active" : ""}`} onClick={() => handleNavClick("products")}>Produits</button>
          <button className={`nav-link ${activeSection === "about" ? "active" : ""}`} onClick={() => handleNavClick("about")}>À propos</button>
          <button className={`nav-link ${activeSection === "faq" ? "active" : ""}`} onClick={() => handleNavClick("faq")}>FAQ</button>
          <button className={`nav-link ${activeSection === "contact" ? "active" : ""}`} onClick={() => handleNavClick("contact")}>Contact</button>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-primary desktop-quote-btn btn-sm" onClick={onOpenDevis}>
            <FileText size={16} /> Demander un devis
          </button>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Navigation Menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
    </>
  );
}
