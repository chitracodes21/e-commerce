import "../components/careers/careers.css";
import CareersHero from "../components/careers/CareersHero";
import {
  careersValuesHeader,
  companyValues,
} from "../components/careers/data/careersData";
import JobsSection from "../components/careers/JobsSection";
import PerksSection from "../components/careers/PerksSection";
import InfoSection from "../components/shared/values/InfoSection";

function Careers() {
  return (
    <>
      <CareersHero />
      <JobsSection />
      <InfoSection
        title={careersValuesHeader.title}
        description={careersValuesHeader.description}
        values={companyValues}
      />
      <PerksSection />
    </>
  );
}

export default Careers;
