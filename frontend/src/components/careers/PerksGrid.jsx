import React from "react";
import { perksList } from "./data/careersData";
import PerkCard from "./PerkCard";

function PerksGrid() {
  return (
    <div className="perks-grid">
      {perksList.map((perk, i) => {
        return (
          <PerkCard
            key={i}
            icon={perk.icon}
            title={perk.title}
            description={perk.description}
          />
        );
      })}
    </div>
  );
}

export default PerksGrid;
