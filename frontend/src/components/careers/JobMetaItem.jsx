import React from "react";

function JobMetaItem({ icon, tittle, description }) {
  return (
    <div className="detail-section">
      <h3>
        <i className={icon}></i> {tittle}
      </h3>
      <ul className="detail-list">
        {description.map((list, i) => {
          return <li key={i}>{list}</li>;
        })}
      </ul>
    </div>
  );
}

export default JobMetaItem;
