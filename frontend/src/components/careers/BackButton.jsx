import React from "react";
import { Link } from "react-router";

function BackButton() {
  return (
    <div className="back-button">
      <Link to="/careers" className="back-link">
        <i className="fas fa-arrow-left"></i> Back to All Jobs
      </Link>
    </div>
  );
}

export default BackButton;
