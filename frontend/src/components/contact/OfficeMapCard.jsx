import React from "react";
import useInView from "../../hooks/useInView";

function OfficeMapCard() {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref}
      className={`map-card ${isVisible ? "fade-in-right" : ""}`}
      style={{ animationDelay: "0.4s" }}>
      <img
        src="https://linehaul.onelogix.com/images/solutions/onelogix-linehaul-map.png"
        alt="Office Location Map"
      />
    </div>
  );
}

export default OfficeMapCard;
