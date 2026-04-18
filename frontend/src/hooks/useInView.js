import { useInView as useIntersectionInView } from "react-intersection-observer";

function useInView(threshold=0.2) {
  const { ref, inView } = useIntersectionInView({
    triggerOnce: true,
    threshold: threshold,
  });

  return [ref, inView];
}

export default useInView;