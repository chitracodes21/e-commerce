import React from "react";
import CardItem from "../cards/CardItem";
import useInView from "../../../hooks/useInView";
import { coreValues } from "../data/aboutData";

function SectionGrid() {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref} className={`values-grid ${isVisible ? "motion-fade-up" : ""}`}>
      {coreValues.map((value,i) => {
        return (
          <CardItem
          key={i}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        );
      })}
    </div>
  );
}

export default SectionGrid;
