import React from "react";
import CustomerReview from "./CustomerReview";
import { customerReviews } from "../data/aboutData";

function TestimonialsRight() {
  return (
    <div className="testimonial-right">
      {customerReviews.map((review, index) => {
        return (
          <CustomerReview
            key={index}
            index={index}
            text={review.text}
            icon={review.icon}
            name={review.text}
            role={review.role}
          />
        );
      })}
    </div>
  );
}

export default TestimonialsRight;
