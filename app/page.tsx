import HeroSection from "@/components/HeroSection";
import SectionTransition from "@/components/SectionTransition";
import Gallery from "@/components/Gallery";
import GalleryTitle from "@/components/GalleryTitle";
import LenisProvider from "@/components/LenisProvider";
import StorySection from "@/components/StorySection";
import NatureSection from "@/components/NatureSection";
import OceanSection from "@/components/OceanSection";
import CitySection from "@/components/CitySection";
import DesertSection from "@/components/DesertSection";
import PlaneRevealSection from "@/components/PlaneRevealSection";

export default function Home() {
  return (
    <div className="flex flex-col text-gray-200">
      <HeroSection />
      <SectionTransition />
      <LenisProvider />
      <Gallery />
      <GalleryTitle />
      <StorySection />
      <NatureSection />
      <OceanSection />
      <CitySection />
      <DesertSection />
      <PlaneRevealSection />
    </div>
  );
}
