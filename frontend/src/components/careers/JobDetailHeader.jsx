import React from 'react'

function JobDetailHeader({field,position}) {
  return (
    <div className="job-header">
            <span className="job-dept">
              <i className="fas fa-building"></i> {field}
            </span>
            <h1 className="job-title">{position}</h1>
          </div>
  )
}

export default JobDetailHeader