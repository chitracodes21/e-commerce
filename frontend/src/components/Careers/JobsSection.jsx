import React from "react";
import SectionHeader from "../shared/values/SectionHeader";
import { jobsSectionHeader } from "./data/careersData";
import CareersList from "./CareersList";
import useInView from "../../hooks/useInView";

function JobsSection() {
  const [ref, isVisible] = useInView(0.2);
  return (
    <div class="container">
      <div
        ref={ref}
        className={`jobs-section ${isVisible ? "motion-fade-up" : ""}`}
        style={{ animationDelay: "0.4s" }}
      >
        <SectionHeader
          title={jobsSectionHeader.title}
          description={jobsSectionHeader.description}
        />
        <CareersList />
      </div>
    </div>
  );
}

export default JobsSection;
