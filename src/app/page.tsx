import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { ProjectContent } from "@/components/project-content";

const HomePage = () => {
  return (
    <>
      <LandingHero />
      <LandingContent />
      <ProjectContent />
    </>
  );
};

export default HomePage;
