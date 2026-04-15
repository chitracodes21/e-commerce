import React from "react";
import MissionContent from "./MissionContent";
import MissionStats from "./MissionStats";
import MissionImage from "./MissionImage";
import { useInView } from "react-intersection-observer";

function MissionSection() {
  const [ref, isVisible] = useInView({
    triggerOnce:true,
    threshold: 0.2
  });
  console.log(isVisible);
  return (
    <>
      <div
        ref={ref}
        className={`mission-section ${isVisible ? "motion-fade-up" :""}`}
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
