import React from "react";
import MissionContent from "./MissionContent";
import MissionStats from "./MissionStats";
import MissionImage from "./MissionImage";
import useInView from "../../../hooks/useInView";

function MissionSection() {
  const [ref, isVisible] = useInView(0.2);
  return (
    <>
      <div
        ref={ref}
        className={`container ${isVisible ? "motion-fade-up" : ""}`}
        style={{ animationDelay: "0.3s" }}
      >
        <div ref={ref} className="mission-section">
          <div className="mission-content">
            <MissionContent />
            <MissionStats />
          </div>
          <MissionImage />
        </div>
      </div>
    </>
  );
}

export default MissionSection;
