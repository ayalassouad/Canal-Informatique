import { useState } from "react";
import { PRODUCT_CATEGORIES, PRODUCTS } from "../data/mockData";
import { ArrowRight, Search, CheckCircle } from "lucide-react";
import { localizedData, t } from "../data/i18n";

export default function Products({ language, onOpenDevis }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { PRODUCT_CATEGORIES, PRODUCTS } = localizedData(language);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.specs.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="section-padding bg-light" style={{ borderTop: "1px solid var(--border-light)" }}>
      <div className="section-header-center">
        <span className="section-kicker">{t(language, "EQUIPEMENT & MATÉRIEL PRO")}</span>
        <h2 className="section-title">{t(language, "Catalogue de Matériel Informatique")}</h2>
        <p className="section-desc">
          {t(language, "Une sélection rigoureuse d'équipements récents et fiables pour doter votre entreprise du meilleur matériel.")}
        </p>
        <div className="underline-center"></div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div style={{ maxWidth: "600px", margin: "0 auto 30px", position: "relative" }}>
        <input 
          type="text"
          className="form-input"
          placeholder={t(language, "Rechercher un matériel (ex: i7, Serveur, Écran, Switch...)")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ paddingLeft: "42px" }}
        />
        <Search size={18} style={{ position: "absolute", left: "14px", top: "14px", color: "var(--text-muted)" }} />
      </div>

      <div className="products-filter-bar">
        {PRODUCT_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
          <p>{t(language, "Aucun produit ne correspond à votre recherche")} "{searchQuery}".</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((prod) => {
            const Icon = prod.icon;
            return (
              <article className="product-card" key={prod.id}>
                <div className="product-header">
                  <div className="product-icon-box">
                    <Icon size={24} />
                  </div>
                  <span className="product-badge">{prod.badge}</span>
                </div>

                <h3>{prod.title}</h3>
                <p className="product-specs">{prod.specs}</p>

                <div className="product-footer">
                  <span className="product-price-tag">{t(language, "Garantie & SAV inclus")}</span>
                  <button 
                    className="btn btn-outline btn-sm"
                    onClick={() => onOpenDevis(`Matériel: ${prod.title}`)}
                  >
                    {t(language, "Devis")} <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
