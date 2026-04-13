import React from "react";

function CategoryCard({ href = "#", icon, label }) {
    
  return (
    <a href={href} className="cat">
      {icon}
      <div>{label}</div>
    </a>
  );
}

export default CategoryCard;
