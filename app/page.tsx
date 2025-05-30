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
import SponsorsSection from "@/components/SponsorsSection";
import PlaneRevealSection from "@/components/PlaneRevealSection";
import FlightIntro from "@/components/FlightIntro";
import ChoiceSection from "@/components/ChoiceSection";
import WorldMap from "@/components/WorldMap";
import InspirationGallery from "@/components/InspirationGallery";
import BreakSection from "@/components/BreakSection";
import WhatInMyBag from "@/components/WhatInMyBag";
import ReflectionsSection from "@/components/ReflectionsSection";
import TravelTips from "@/components/TravelTips";
import Footer from "@/components/Footer";

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
      <NatureSection />
      <OceanSection />
      <CitySection />
      <DesertSection />
      <ChoiceSection />
      <WorldMap />
      <BreakSection />
      <InspirationGallery />
      <WhatInMyBag />
      <ReflectionsSection />
      <TravelTips />
      <SponsorsSection />
      <Footer />
    </div>
  );
}
