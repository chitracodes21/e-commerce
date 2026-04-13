import React from 'react'
import MissionStats from './MissionStats'

function MissionSection() {
  return (
    <>
    <div className="mission-section">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              To empower millions of customers worldwide with access to
              authentic, high-quality products at fair prices — while creating a
              sustainable ecosystem for brands and creators.
            </p>
            <p>
              We believe in transparency, speed, and joy. Every box we ship
              carries not just products, but the promise of a better retail
              experience.
            </p>
            <MissionStats/>
          </div>
          <div className="mission-image">
            <img
              src="https://picsum.photos/id/20/600/450"
              alt="NovaMart warehouse"
            />
          </div>
        </div>
    </>
  )
}

export default MissionSection