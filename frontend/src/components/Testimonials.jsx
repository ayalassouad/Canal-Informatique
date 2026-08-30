import { TESTIMONIALS } from "../data/mockData";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#ffffff" }}>
      <div className="section-header-center">
        <span className="section-kicker">CONFIANCE & RETOURS CLIENTS</span>
        <h2 className="section-title">Ce que nos clients disent de nous</h2>
        <p className="section-desc">
          Découvrez les témoignages des entreprises et professionnels qui nous font confiance pour la gestion de leur infrastructure.
        </p>
        <div className="underline-center"></div>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <div>
              <div className="stars-row">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-quote">"{t.text}"</p>
            </div>

            <div className="testimonial-author">
              <b>{t.name}</b>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
