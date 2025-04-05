import HeroSection from "@/components/HeroSection";
import SectionTransition from "@/components/SectionTransition";
import Gallery from "@/components/Gallery";
import GalleryTitle from "@/components/GalleryTitle";
import LenisProvider from "@/components/LenisProvider";
import StorySection from "@/components/StorySection";
import FeaturedDestinations from "@/components/FeaturedDestinations";

export default function Home() {
  return (
    <div className="flex flex-col text-gray-200">
      <HeroSection />
      <SectionTransition />
      <LenisProvider />
      <Gallery />
      <GalleryTitle />
      <StorySection />
      <FeaturedDestinations />
    </div>
  );
}
