
import { testimonialStats } from "../data/aboutData";
import TestimonialStat from "./TestimonialStat";


function TestimonialStats() {
  return (
    <div className="testimonial-stats">
      {testimonialStats.map((stat,i) => {
        return <TestimonialStat key={i} value={stat.value} label={stat.label} />;
      })}
    </div>
  );
}

export default TestimonialStats;
