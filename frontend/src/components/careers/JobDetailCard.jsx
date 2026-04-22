import React from "react";
import JobDetailHeader from "./JobDetailHeader";
import JobDetailsMeta from "./JobDetailsMeta";
import JobMetaItem from "./JobMetaItem";
import { useParams } from "react-router";
import { detailSections, jobsList } from "./data/careersData";
import JobApplySection from "./JobApplySection";

function JobDetailCard() {
  const { queryTitle } = useParams();
  const careerData = jobsList.find((job) => job.queryTitle === queryTitle);
  return (
    <>
      <div className="job-detail-card">
        <JobDetailHeader field={careerData.department} position={careerData.title} />
        <JobDetailsMeta careerData={careerData} />
        <JobMetaItem
          icon={detailSections.aboutRole.icon}
          tittle={detailSections.aboutRole.title}
          description={careerData.responsibilities}
        />
        <JobMetaItem
          icon={detailSections.requirements.icon}
          tittle={detailSections.requirements.title}
          description={careerData.requirements}
        />
        <JobMetaItem
          icon={detailSections.niceToHave.icon}
          tittle={detailSections.niceToHave.title}
          description={careerData.niceToHave}
        />
        <JobMetaItem
          icon={detailSections.whatWeOffer.icon}
          tittle={detailSections.whatWeOffer.title}
          description={careerData.benefits}
        />
       <JobApplySection/>
      </div>
    </>
  );
}

export default JobDetailCard;
