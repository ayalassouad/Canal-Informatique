import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X, Clock, FileText, ChevronDown } from "lucide-react";
import { COMPANY_INFO } from "../data/mockData";

const LANGUAGES = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "ar", flag: "🇲🇦", label: "AR" }
];

const COPY = {
  en: { home: "Home", services: "Services", products: "Products", about: "About", faq: "FAQ", contact: "Contact", quote: "Request a quote", partner: "Certified IT partner since 1992" },
  fr: { home: "Accueil", services: "Services", products: "Produits", about: "À propos", faq: "FAQ", contact: "Contact", quote: "Demander un devis", partner: "Partenaire Informatique certifié depuis 1992" },
  ar: { home: "الرئيسية", services: "الخدمات", products: "المنتجات", about: "من نحن", faq: "الأسئلة الشائعة", contact: "اتصل بنا", quote: "اطلب عرض سعر", partner: "شريكك المعلوماتي المعتمد منذ 1992" }
};

export default function Header({ onOpenDevis, activeSection, scrollTo, language, setLanguage }) {
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

  const copy = COPY[language];
  const currentLanguage = LANGUAGES.find((item) => item.code === language) || LANGUAGES[1];

  return (
    <>
      <div className="topbar">
        <div className="topbar-info">
          <span><Phone size={14} /> {COMPANY_INFO.phoneFormatted}</span>
          <span><MapPin size={14} /> {COMPANY_INFO.address}</span>
          <span><Clock size={14} /> {COMPANY_INFO.hours}</span>
        </div>
        <div className="topbar-right">
          <span>{copy.partner}</span>
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

        <nav className={`nav-links ${menuOpen === true ? "open" : ""}`}>
          <button className={`nav-link ${activeSection === "home" ? "active" : ""}`} onClick={() => handleNavClick("home")}>{copy.home}</button>
          <button className={`nav-link ${activeSection === "services" ? "active" : ""}`} onClick={() => handleNavClick("services")}>{copy.services}</button>
          <button className={`nav-link ${activeSection === "products" ? "active" : ""}`} onClick={() => handleNavClick("products")}>{copy.products}</button>
          <button className={`nav-link ${activeSection === "about" ? "active" : ""}`} onClick={() => handleNavClick("about")}>{copy.about}</button>
          <button className={`nav-link ${activeSection === "faq" ? "active" : ""}`} onClick={() => handleNavClick("faq")}>{copy.faq}</button>
          <button className={`nav-link ${activeSection === "contact" ? "active" : ""}`} onClick={() => handleNavClick("contact")}>{copy.contact}</button>
        </nav>

        <div className="nav-actions">
          <button className="btn btn-primary desktop-quote-btn btn-sm" onClick={onOpenDevis}>
            <FileText size={16} /> {copy.quote}
          </button>

          <div className="language-switcher">
            <button className="language-trigger" onClick={() => setMenuOpen(menuOpen ? false : "languages")} aria-label="Select language" aria-expanded={menuOpen === "languages"}>
              <span>{currentLanguage.flag}</span> {currentLanguage.label} <ChevronDown size={14} />
            </button>
            {menuOpen === "languages" && (
              <div className="language-menu">
                {LANGUAGES.map((item) => (
                  <button key={item.code} className={item.code === language ? "selected" : ""} onClick={() => { setLanguage(item.code); setMenuOpen(false); }}>
                    <span>{item.flag}</span> {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Navigation Menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>
    </>
  );
}
