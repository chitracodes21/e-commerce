import StatBadge from "../../about/cards/StatBadge";

function HeroStat({stats}) {
  return (
    <div className="hero-stats-row">
      {stats.map((stat,i) => {
        return <StatBadge key={i} statNumber={stat.value} statLabel={stat.label} />;
      })}
    </div>
  );
}

export default HeroStat;
