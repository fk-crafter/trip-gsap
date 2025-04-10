import HeroSection from "@/components/HeroSection";
import SectionTransition from "@/components/SectionTransition";
import Gallery from "@/components/Gallery";
import GalleryTitle from "@/components/GalleryTitle";
import LenisProvider from "@/components/LenisProvider";
import StorySection from "@/components/StorySection";
// import NatureSection from "@/components/NatureSection";
// import OceanSection from "@/components/OceanSection";
// import CitySection from "@/components/CitySection";
// import DesertSection from "@/components/DesertSection";
import PlaneRevealSection from "@/components/PlaneRevealSection";
import FlightIntro from "@/components/FlightIntro";
import ChoiceSection from "@/components/ChoiceSection";
import WorldMap from "@/components/WorldMap";
import MapRevealSection from "@/components/MapRevealSection";
// import CulturalSection from "@/components/CulturalSection";
import BreakSection from "@/components/BreakSection";
import NatureEditorial from "@/components/NatureEditorial";
import OceanEditorial from "@/components/OceanEditorial";
import CityEditorial from "@/components/CityEditorial";
import DesertEditorial from "@/components/DesertEditorial";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SectionTransition />
      <LenisProvider />
      <Gallery />
      <GalleryTitle />
      <StorySection />
      <FlightIntro />
      <PlaneRevealSection />
      {/* <NatureSection />
        <OceanSection />
        <CitySection />
        <DesertSection /> */}
      <NatureEditorial />
      <OceanEditorial />
      <CityEditorial />
      <DesertEditorial />

      <ChoiceSection />
      <MapRevealSection />
      <WorldMap />
      <BreakSection />
      {/* <CulturalSection /> */}
    </div>
  );
}
