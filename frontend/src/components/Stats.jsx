import { STATS } from "../data/mockData";

export default function Stats() {
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
