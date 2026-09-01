import { useState } from "react";
import { FAQS } from "../data/mockData";
import { ChevronDown, HelpCircle } from "lucide-react";
import { t } from "../data/i18n";

export default function FAQ({ language }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding bg-light">
      <div className="section-header-center">
        <span className="section-kicker">{t(language, "DES RÉPONSES À VOS QUESTIONS")}</span>
        <h2 className="section-title">{t(language, "Foire Aux Questions (FAQ)")}</h2>
        <p className="section-desc">
          {t(language, "Retrouvez les réponses aux interrogations les plus fréquentes concernant nos contrats, garanties et interventions.")}
        </p>
        <div className="underline-center"></div>
      </div>

      <div className="faq-container">
        {FAQS.map((faq, idx) => (
          <div className={`faq-item ${openIndex === idx ? "active" : ""}`} key={idx}>
            <button className="faq-question" onClick={() => toggleIndex(idx)}>
              <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <HelpCircle size={20} style={{ color: "var(--primary)", flexShrink: 0 }} />
                {faq.q}
              </span>
              <ChevronDown 
                size={20} 
                style={{ 
                  transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s ease",
                  color: "var(--text-muted)"
                }} 
              />
            </button>
            {openIndex === idx && (
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
