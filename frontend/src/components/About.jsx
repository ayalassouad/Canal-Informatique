import { ENGAGEMENTS, COMPANY_INFO } from "../data/mockData";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { t } from "../data/i18n";

export default function About({ language, scrollTo, onOpenDevis }) {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="about-grid">
        <div className="about-content">
          <span className="section-kicker">{t(language, "À PROPOS DE CANAL INFORMATIQUE")}</span>
          <h2>{t(language, "30 Ans de Savoir-Faire & d'Engagement IT au Maroc")}</h2>
          <p>
            {language === "fr" ? <>Fondée en <b>{COMPANY_INFO.creationYear}</b>, <b>Canal Informatique</b> s'est imposée comme un acteur de référence au Maroc dans l'intégration, la fourniture de matériel et la gestion de parcs informatiques professionnels.</> : language === "ar" ? <>تأسست <b>كانال للمعلوماتية</b> سنة <b>{COMPANY_INFO.creationYear}</b> وأصبحت مرجعاً في المغرب في دمج وتوفير المعدات وإدارة البنى المعلوماتية المهنية.</> : <>Founded in <b>{COMPANY_INFO.creationYear}</b>, <b>Canal Informatique</b> has become a reference in Morocco for IT integration, equipment supply and professional fleet management.</>}
          </p>
          <p>
            {language === "fr" ? "Notre mission est d'apporter aux PME, grandes institutions et particuliers des solutions informatiques fiables, évolutives et parfaitement sécurisées. Grâce à une équipe d'ingénieurs et techniciens certifiés, nous veillons à la continuité absolue de votre activité." : language === "ar" ? "مهمتنا تقديم حلول موثوقة وقابلة للتطوير وآمنة للشركات والمؤسسات والأفراد. ويضمن فريقنا المعتمد استمرارية نشاطكم." : "Our mission is to provide SMEs, institutions and individuals with reliable, scalable and secure IT solutions. Our certified engineers and technicians ensure your business continuity."}
          </p>

          <div style={{ margin: "24px 0 32px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "10px" }}>
              <CheckCircle2 size={18} style={{ color: "var(--emerald)" }} />
              <span style={{ fontWeight: 600 }}>{language === "fr" ? "Partenariats privilégiés avec les éditeurs & constructeurs majeurs" : language === "ar" ? "شراكات مميزة مع كبرى الشركات المصنعة والناشرين" : "Preferred partnerships with leading manufacturers and publishers"}</span>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "10px" }}>
              <CheckCircle2 size={18} style={{ color: "var(--emerald)" }} />
              <span style={{ fontWeight: 600 }}>{language === "fr" ? "Centres d'intervention mobile sur Casablanca, Rabat & Région" : language === "ar" ? "فرق تدخل متنقلة في الدار البيضاء والرباط والمنطقة" : "Mobile response teams in Casablanca, Rabat & the region"}</span>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <CheckCircle2 size={18} style={{ color: "var(--emerald)" }} />
              <span style={{ fontWeight: 600 }}>{language === "fr" ? "Transparence tarifaire et contrats de maintenance sans surprises" : language === "ar" ? "شفافية الأسعار وعقود صيانة دون مفاجآت" : "Transparent pricing and no-surprise maintenance contracts"}</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={onOpenDevis}>
              {t(language, "Planifier un audit informatique")} <ArrowRight size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo("contact")}>
              {t(language, "Nous contacter")}
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
