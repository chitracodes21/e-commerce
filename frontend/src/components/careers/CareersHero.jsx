import React from 'react'
import HeroLeftContent from '../shared/hero/HeroLeftContent'
import HeroRightContent from '../shared/hero/HeroRightContent'
import { careerHeroContent, careerHeroRightData, careerStats } from '../shared/hero/heroData'

function CareersHero() {
  return (
    <section className="careers-hero">
        <div className="hero-split">
          <HeroLeftContent
            title={careerHeroContent.title}
            description={careerHeroContent.description}
            stats={careerStats}
          />
          <HeroRightContent
            image={careerHeroRightData.image}
            alt={careerHeroRightData.alt}
            badge={careerHeroRightData.badge}
          />
        </div>
      </section>
  )
}

export default CareersHero