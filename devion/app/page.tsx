import AvailabilitySection from "@components/layout/availabilitySection";
import Hero from "@components/layout/hero";
import TestimonialsSection from "@components/layout/testimonialsSection";
import ValuesSection from "@components/layout/valuesSection";
import VideoSection from "@components/layout/videoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <AvailabilitySection />
      <ValuesSection />
      <TestimonialsSection />
    </>
  );
}
