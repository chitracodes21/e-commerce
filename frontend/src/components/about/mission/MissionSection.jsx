import React from "react";
import MissionContent from "./MissionContent";
import MissionStats from "./MissionStats";
import MissionImage from "./MissionImage";
import useInView from "../../../hooks/useInView";

function MissionSection() {
  const [ref, isVisible] = useInView();
  return (
    <>
      <div
        ref={ref}
        className={`mission-section ${isVisible ? "motion-fade-up" :""}`}
        style={{ animationDelay: "0.3s"}}
      >
        <div className="mission-content">
          <MissionContent />
          <MissionStats />
        </div>
        <MissionImage />
      </div>
    </>
  );
}

export default MissionSection;
