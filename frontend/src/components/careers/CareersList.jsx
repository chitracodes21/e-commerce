import React from "react";
import { jobsList } from "./data/careersData";
import JobCard from "./JobCard";

function CareersList() {
  return (
    <>
      {jobsList.map((job) => {
        return (
          <JobCard
            key={job.id}
            queryTitle={job.queryTitle}
            title={job.title}
            description={job.description}
            location={job.location}
            type={job.type}
            salary={job.salary}
          />
        );
      })}
    </>
  );
}

export default CareersList;
