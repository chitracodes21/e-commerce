import React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";

function JobCard({ queryTitle, title, description, location, type, salary }) {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className="job-card">
        <div className="job-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="job-meta">
            <span>
              <i className="fas fa-map-marker-alt"></i> {location}
            </span>
            <span>
              <i className="fas fa-briefcase"></i> {type}
            </span>
            <span>
              <i className="fas fa-dollar-sign"></i> {salary}
            </span>
          </div>
        </div>
        <Link to={queryTitle} className="apply-btn" onClick={scrollToTop}>
          Apply Now →
        </Link>
      </div>
    </>
  );
}

export default JobCard;
