import React from "react";

function PerkCard({ icon, title, description }) {
  return (
    <div className="perk-card">
      <div className="perk-icon">
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default PerkCard;
