import AvailabilitySection from "@components/layout/availabilitySection";
import Hero from "@components/layout/hero";
import TestimonialsSection from "@components/layout/testimonialsSection";
import ValuesSection from "@components/layout/valuesSection";
import VideoSection from "@components/layout/videoSection";
import { getLandingPage } from "@services/index";

export default async function Home() {
  const {
    data: { attributes },
  } = await getLandingPage();
  return (
    <>
      <Hero banner={attributes.Banner} />
      <VideoSection />
      <AvailabilitySection />
      <ValuesSection />
      <TestimonialsSection />
    </>
  );
}
