import React from "react";
import { useParams } from "react-router";
import { jobsList } from "./data/careersData";
import BackButton from "./BackButton";
import JobDetailCard from "./JobDetailCard";

function JobDetailSection() {
  return (
    <>
      <div className="container">
        <BackButton/>
        <JobDetailCard/>
      </div>
    </>
  );
}

export default JobDetailSection;
