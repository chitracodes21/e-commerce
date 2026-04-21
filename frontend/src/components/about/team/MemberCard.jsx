import React from "react";

function MemberCard({icon,name,role,info}) {
  return (
    <div className="team-card">
      <div className="team-img">
        <i className={icon}></i>
      </div>
      <h4>{name}</h4>
      <p className="team-role">{role}</p>
      <span style={{fontSize:'0.8rem'}}>{info}</span>
    </div>
  );
}

export default MemberCard;
