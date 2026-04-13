import React from "react";
import StatBadge from "./StatBadge";

function HeroStat() {
  const stats = [
    { value: "500K+", label: "Happy Customers" },
    { value: "120+", label: "Countries" },
    { value: "98%", label: "Satisfaction" },
  ];
  return (
    <div className="hero-stats-row">
      {stats.map((stat) => {
        return <StatBadge statNumber={stat.value} statLabel={stat.label} />;
      })}
    </div>
  );
}

export default HeroStat;
