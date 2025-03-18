import HeroSection from "@/components/HeroSection";
import ImageCollection from "@/components/ImageCollection";

export default function Home() {
  return (
    <div className="h-[300vh] flex flex-col text-gray-200">
      <HeroSection />
      <ImageCollection />
    </div>
  );
}
