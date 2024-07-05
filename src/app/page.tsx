import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { MyContact } from "@/components/My-Contact";
import { ProjectContent } from "@/components/project-content";

const HomePage = () => {
  return (
    <>
      <LandingHero />
      <LandingContent />
      <ProjectContent />
      <MyContact />
    </>
  );
};

export default HomePage;
