import React from 'react'

function JobApplySection() {
    function msg(){
        alert("Thank you for your interest!")
    }
  return (
     <div className="apply-section">
          <h3>Ready to join us?</h3>
          <p>
            Apply now and become part of a team that's redefining e-commerce.
          </p>
          <button className="apply-now-btn" onClick={msg}>
            Apply Now →
          </button>
        </div>
  )
}

export default JobApplySection