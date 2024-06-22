import { ImageSlider } from "@/components/image-slider";
import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import car1 from "./car-1.jpg";

const IMAGES = [
  { url: "./car-1.jpg", alt: "Car One" },
  { url: "./car-1.jpg", alt: "Car One" },
];

const HomePage = () => {
  return (
    <>
      <LandingHero />
      <LandingContent />
      <ImageSlider images={IMAGES} />
    </>
  );
};

export default HomePage;
