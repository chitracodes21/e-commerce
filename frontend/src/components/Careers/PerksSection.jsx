import React from "react";
import SectionHeader from "../shared/values/SectionHeader";
import { perksHeader } from "./data/careersData";
import PerksGrid from "./PerksGrid";
import useInView from "../../hooks/useInView";

function PerksSection() {
  const [ref, isVisible] = useInView();
  return (
    <div
      ref={ref}
      className={`container ${isVisible ? "motion-fade-up" : ""}`}
      style={{ animationDelay: "0.3s" }}
    >
      <SectionHeader
        title={perksHeader.title}
        description={perksHeader.description}
      />
      <PerksGrid />
    </div>
  );
}

export default PerksSection;
