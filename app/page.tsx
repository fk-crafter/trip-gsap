import HeroSection from "@/components/HeroSection";
import ImageCollection from "@/components/ImageCollection";
import OverlayEffect from "@/components/OverlayEffect";

export default function Home() {
  return (
    <div className="h-[300vh] flex flex-col text-gray-200">
      <HeroSection />
      <div className="relative">
        <ImageCollection />
        <OverlayEffect />
      </div>
    </div>
  );
}
