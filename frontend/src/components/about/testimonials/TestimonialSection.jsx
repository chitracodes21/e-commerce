import useInView from "../../../hooks/useInView";
import TestimonialLeft from "./TestimonialLeft";
import TestimonialsRight from "./TestimonialsRight";

function TestimonialSection() {
  const [ref, isVisible] = useInView(0);
  return (
    <div
      ref={ref}
      className={`testimonial-split ${isVisible ? "motion-fade-up" : ""}`}
    >
      <TestimonialLeft />
      <TestimonialsRight />
    </div>
  );
}

export default TestimonialSection;
