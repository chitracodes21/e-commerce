import React from "react";

function StatBadge({ statNumber, statLabel }) {
  return (
    <div className="hero-stat-item">
      <div className="hero-stat-number">{statNumber}</div>
      <div className="hero-stat-label">{statLabel}</div>
    </div>
  );
}

export default StatBadge;
