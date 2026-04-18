
import { teamMembers } from "../data/aboutData";
import MemberCard from "./MemberCard";

function MemberGrid() {
  return (
    <div className="team-grid">
      {teamMembers.map((member,i) => {
        return (
          <MemberCard
          key={i}
            icon={member.icon}
            name={member.name}
            role={member.role}
            info={member.info}
          />
        );
      })}
    </div>
  );
}

export default MemberGrid;
