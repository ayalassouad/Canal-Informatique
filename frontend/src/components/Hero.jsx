import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Server, Headphones, MessageCircle, FileText } from "lucide-react";
import { COMPANY_INFO } from "../data/mockData";
import { t } from "../data/i18n";

export default function Hero({ language, scrollTo, onOpenDevis }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-orb"></div>

      <div className="hero-grid">
        <div className="hero-content">
          <div className="hero-badge-pill">
            <span className="pulse-dot"></span>
            <span>{t(language, "EXPERT IT AU MAROC DEPUIS")} {COMPANY_INFO.creationYear}</span>
          </div>

          <h1 className="hero-title">
            CANAL <span>INFORMATIQUE</span>
          </h1>

          <h2 className="hero-subtitle">
            {t(language, "Solutions IT & Maintenance")} <em>{t(language, "sur-mesure")}</em>
          </h2>

          <p className="hero-description">
            {language === "fr" ? "Vente de matériel informatique professionnel, installation réseau, maintenance préventive et support réactif. Nous sécurisons et optimisons vos systèmes pour une productivité sans interruption." : language === "ar" ? "بيع المعدات المعلوماتية الاحترافية وتركيب الشبكات والصيانة الوقائية والدعم السريع. نؤمن أنظمتكم ونحسنها لضمان إنتاجية متواصلة." : "Professional IT hardware sales, network installation, preventive maintenance and responsive support. We secure and optimize your systems for uninterrupted productivity."}
          </p>

          <div className="hero-cta-group">
            <button className="btn btn-primary" onClick={onOpenDevis}>
              {t(language, "Simuler un devis")} <FileText size={18} />
            </button>
            <button className="btn btn-secondary" onClick={() => scrollTo("services")}>
              {t(language, "Nos services")} <ArrowRight size={18} />
            </button>
            <a 
              className="btn btn-secondary" 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Bonjour%20Canal%20Informatique,%20je%20souhaite%20des%20informations.`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          <div className="hero-features-list">
            <div className="hero-feature-item">
              <CheckCircle2 size={18} />
              <span><b>30+ ans</b> d'expérience certifiée</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={18} />
              <span>Intervention sur site <b>en &lt; 2h</b></span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={18} />
              <span>Matériel garanti <b>100% constructeur</b></span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={18} />
              <span>Support <b>téléphonique & télémaintenance</b></span>
            </div>
          </div>
        </div>

        <div className="hero-visual-container">
          <div className="hero-glass-card">
            <div className="glass-card-header">
              <div className="dots-group">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="tech-tag">INFRASTRUCTURE CANAL IT</span>
            </div>

            <div className="tech-showcase-grid">
              <div className="tech-tile">
                <Server className="tech-tile-icon" size={28} />
                <h4>{t(language, "Serveurs & Cloud")}</h4>
                <p>{language === "fr" ? "Virtualisation, stockage sécurisé NAS & sauvegardes automatiques." : language === "ar" ? "افتراضية وتخزين NAS آمن ونسخ احتياطية تلقائية." : "Virtualization, secure NAS storage & automatic backups."}</p>
              </div>

              <div className="tech-tile">
                <Zap className="tech-tile-icon" size={28} />
                <h4>{t(language, "Réseaux Wi-Fi & Câblage")}</h4>
                <p>{language === "fr" ? "Switchs administrables, Wi-Fi maillé & pare-feu sécurisé." : language === "ar" ? "محولات مُدارة وWi-Fi متداخل وجدار حماية آمن." : "Managed switches, mesh Wi-Fi & secure firewall."}</p>
              </div>

              <div className="tech-tile">
                <ShieldCheck className="tech-tile-icon" size={28} />
                <h4>{t(language, "Contrats de Maintenance")}</h4>
                <p>{language === "fr" ? "Diagnostic préventif, nettoyage et assistance continue." : language === "ar" ? "تشخيص وقائي وتنظيف ومساعدة مستمرة." : "Preventive diagnostics, cleanup and ongoing support."}</p>
              </div>

              <div className="tech-tile">
                <Headphones className="tech-tile-icon" size={28} />
                <h4>{t(language, "Support Hotline Réactif")}</h4>
                <p>{language === "fr" ? "Prise en main immédiate à distance et assistance sur site." : language === "ar" ? "تحكم فوري عن بعد ومساعدة في الموقع." : "Immediate remote access and on-site assistance."}</p>
              </div>
            </div>
          </div>

          <div className="floating-badge">
            <div className="floating-badge-icon">
              <ShieldCheck size={24} />
            </div>
            <div>
              <b>99.8% de Disponibilité</b>
              <span>Partenaire IT de +1000 clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
