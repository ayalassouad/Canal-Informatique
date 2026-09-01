import { localizedData } from "../data/i18n";

export default function Stats({ language }) {
  const { STATS } = localizedData(language);
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {STATS.map((stat, idx) => (
          <div className="stat-item" key={idx}>
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-sub">{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
