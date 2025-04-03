// app/page.tsx
import HeroSection from "@/components/HeroSection";
import SectionTransition from "@/components/SectionTransition";
import Gallery from "@/components/Gallery";
import LenisProvider from "@/components/LenisProvider";
import StorySection from "@/components/StorySection";

export default function Home() {
  return (
    <div className="flex flex-col text-gray-200">
      <HeroSection />
      <SectionTransition />
      <LenisProvider />
      <Gallery />
      <StorySection />
    </div>
  );
}
