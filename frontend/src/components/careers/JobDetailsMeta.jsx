import React from 'react'

function JobDetailsMeta({careerData}) {
  return (
     <div className="job-meta-grid">
            <div className="meta-item">
              <div className="meta-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="meta-info">
                <h4>Location</h4>
                <p>{careerData.location}</p>
              </div>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="meta-info">
                <h4>Job Type</h4>
                <p>{careerData.type}</p>
              </div>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <div className="meta-info">
                <h4>Salary Range</h4>
                <p>{careerData.salary}</p>
              </div>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="meta-info">
                <h4>Experience</h4>
                <p>{careerData.experience}</p>
              </div>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="meta-info">
                <h4>Education</h4>
                <p>{careerData.education}</p>
              </div>
            </div>
            <div className="meta-item">
              <div className="meta-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="meta-info">
                <h4>Posted Date</h4>
                <p>{careerData.postDate}</p>
              </div>
            </div>
          </div>
  )
}

export default JobDetailsMeta