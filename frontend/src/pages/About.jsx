import "../components/about/about.css";
import CTAWidget from "../components/about/cta/CTAWidget";
import HeroLeftContent from "../components/shared/hero/HeroLeftContent";
import HeroRightContent from "../components/shared/hero/HeroRightContent";
import MissionSection from "../components/about/mission/MissionSection";
import OurTeam from "../components/about/team/OurTeam";
import TestimonialSection from "../components/about/testimonials/TestimonialSection";
import {
  aboutHeroLeftData,
  aboutHeroRightData,
  aboutHeroStats,
} from "../components/shared/hero/heroData";
import InfoSection from "../components/shared/values/InfoSection";
import {
  aboutValuesHeader,
  coreValues,
} from "../components/about/data/aboutData";

function About() {
  return (
    <>
      <section className="about-hero">
        <div className="hero-split">
          <HeroLeftContent
            title={aboutHeroLeftData.title}
            description={aboutHeroLeftData.description}
            stats={aboutHeroStats}
          />
          <HeroRightContent
            image={aboutHeroRightData.image}
            alt={aboutHeroRightData.alt}
            badge={aboutHeroRightData.badge}
          />
        </div>
      </section>
        <MissionSection />
      <InfoSection
        title={aboutValuesHeader.title}
        description={aboutValuesHeader.description}
        values={coreValues}
      />
      <div className="container">
        <OurTeam />
      </div>
      <div className="testimonials">
        <TestimonialSection />
      </div>
      <div className="container">
        <CTAWidget />
      </div>
    </>
  );
}

export default About;
