import React from "react";

function StatItem({ statNumber, statLabel }) {
  return (
    <div className="stat-item">
      <div className="stat-number">{statNumber}</div>
      <div>{statLabel}</div>
    </div>
  );
}

export default StatItem;
